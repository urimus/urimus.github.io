"use strict";

// =====================================================
// FAST IMAGE CACHE SERVICE WORKER
// Promise version (no async / await)
// direct request version (no normalizeRequest)
// =====================================================

var CACHE_NAME = "image-cache-v2";
var META_SUFFIX = ":meta";

// 7 days
var MAX_AGE = 1000 * 60 * 60 * 24 * 7;

// network timeout
var FETCH_TIMEOUT = 7000;

// in-flight dedupe
var IN_FLIGHT = new Map();


// =====================================================
// INSTALL / ACTIVATE
// =====================================================

self.addEventListener("install", function (event) {
	self.skipWaiting();
});

self.addEventListener("activate", function (event) {
	event.waitUntil(
		self.clients.claim().then(function () {
			return cleanupOldCache();
		})
	);
});


// =====================================================
// FETCH
// =====================================================

self.addEventListener("fetch", function (event) {
	var request = event.request;

	if (request.destination !== "image") return;
	if (request.method !== "GET") return;

	event.respondWith(handleImageRequest(event, request));
});


// =====================================================
// MAIN HANDLER
// =====================================================

function handleImageRequest(event, request) {
	return caches.open(CACHE_NAME).then(function (cache) {

		return cache.match(request).then(function (cached) {

			// -------------------------------------------------
			// CACHE HIT -> RETURN IMMEDIATELY
			// -------------------------------------------------
			if (cached) {
				event.waitUntil(
					refreshIfNeeded(cache, request)
				);

				return cached;
			}

			// -------------------------------------------------
			// CACHE MISS -> NETWORK
			// -------------------------------------------------
			return fetchAndCache(cache, request);
		});
	});
}


// =====================================================
// REFRESH IF OLD
// =====================================================

function refreshIfNeeded(cache, request) {
	return isFresh(cache, request).then(function (fresh) {
		if (!fresh) {
			return fetchAndCache(cache, request);
		}
	}).catch(function () {
		// ignore
	});
}


// =====================================================
// FETCH + CACHE
// =====================================================

function fetchAndCache(cache, request) {
	var key = request.url;

	if (IN_FLIGHT.has(key)) {
		return IN_FLIGHT.get(key).catch(function () {
			return cache.match(request).then(function (fallback) {
				if (fallback) return fallback;
				throw new Error("fetch failed");
			});
		});
	}

	var promise = fetchWithTimeout(request, FETCH_TIMEOUT)
		.then(function (response) {

			if (
				response &&
				(response.status === 200 || response.type === "opaque")
			) {
				return Promise.all([
					cache.put(request, response.clone()),
					cache.put(
						key + META_SUFFIX,
						new Response(Date.now().toString())
					)
				]).then(function () {
					return response;
				});
			}

			return response;
		})
		.catch(function (err) {
			return cache.match(request).then(function (fallback) {
				if (fallback) return fallback;
				throw err;
			});
		})
		.finally(function () {
			IN_FLIGHT.delete(key);
		});

	IN_FLIGHT.set(key, promise);

	return promise;
}


// =====================================================
// FETCH WITH TIMEOUT
// =====================================================

function fetchWithTimeout(request, ms) {
	var controller = new AbortController();

	var timer = setTimeout(function () {
		controller.abort();
	}, ms);

	return fetch(request, {
		signal: controller.signal
	}).finally(function () {
		clearTimeout(timer);
	});
}


// =====================================================
// TTL CHECK
// =====================================================

function isFresh(cache, request) {
	return cache.match(request.url + META_SUFFIX).then(function (meta) {
		if (!meta) return false;

		return meta.text().then(function (time) {
			return Date.now() - Number(time) < MAX_AGE;
		});
	});
}


// =====================================================
// CLEANUP
// =====================================================

function cleanupOldCache() {
	return caches.keys().then(function (keys) {

		return Promise.all(
			keys.map(function (name) {
				if (name !== CACHE_NAME) {
					return caches.delete(name);
				}
			})
		).then(function () {
			return caches.open(CACHE_NAME);
		}).then(function (cache) {
			return cache.keys().then(function (requests) {

				var chain = Promise.resolve();

				requests.forEach(function (request) {
					if (request.url.indexOf(META_SUFFIX) !== -1) return;

					chain = chain.then(function () {

						var metaKey = request.url + META_SUFFIX;

						return cache.match(metaKey).then(function (meta) {

							if (!meta) return;

							return meta.text().then(function (time) {

								if (
									Date.now() - Number(time) > MAX_AGE
								) {
									return cache.delete(request)
										.then(function () {
											return cache.delete(metaKey);
										});
								}
							});
						});
					});
				});

				return chain;
			});
		});
	});
}