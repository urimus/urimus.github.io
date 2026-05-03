"use strict";

// =====================================================
// CACHE NAMES
// =====================================================

var IMAGE_CACHE = "image-cache-v2";
var STATIC_CACHE = "static-cache-v1";
var API_CACHE = "api-cache-v1";

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
			return cleanupOldCaches();
		})
	);
});


// =====================================================
// FETCH ROUTER
// =====================================================

self.addEventListener("fetch", function (event) {
	var request = event.request;

	if (request.method !== "GET") return;

	// ❌ не кэшируем авторизованные запросы
	if (request.headers.get("Authorization")) return;

	var url = new URL(request.url);

	// ----------------------------------------
	// HTML (navigation)
	// ----------------------------------------
	if (request.mode === "navigate") {
		event.respondWith(networkFirst(request, STATIC_CACHE));
		return;
	}

	// ----------------------------------------
	// IMAGES
	// ----------------------------------------
	if (request.destination === "image") {
		event.respondWith(handleImageRequest(event, request));
		return;
	}

	// ----------------------------------------
	// JS / CSS / fonts
	// ----------------------------------------
	if (
		request.destination === "script" ||
		request.destination === "style" ||
		request.destination === "font"
	) {
		event.respondWith(staleWhileRevalidate(request, STATIC_CACHE));
		return;
	}

	// ----------------------------------------
	// API (пример)
	// ----------------------------------------
	if (url.pathname.startsWith("/api/")) {
		event.respondWith(networkFirst(request, API_CACHE));
		return;
	}

	// ----------------------------------------
	// DEFAULT → сеть
	// ----------------------------------------
});


// =====================================================
// IMAGE HANDLER
// =====================================================

function handleImageRequest(event, request) {
	return caches.open(IMAGE_CACHE).then(function (cache) {

		return cache.match(request).then(function (cached) {

			if (cached) {
				event.waitUntil(
					refreshIfNeeded(cache, request)
				);
				return cached;
			}

			return fetchAndCache(cache, request);
		});
	});
}


// =====================================================
// IMAGE REFRESH (TTL)
// =====================================================

function refreshIfNeeded(cache, request) {
	return isFresh(cache, request).then(function (fresh) {
		if (!fresh) {
			return fetchAndCache(cache, request);
		}
	}).catch(function () {});
}


// =====================================================
// IMAGE FETCH + CACHE
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
// TTL CHECK (images)
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
// NETWORK FIRST (HTML / API)
// =====================================================

function networkFirst(request, cacheName) {
	return fetch(request)
		.then(function (response) {

			if (!response || response.status !== 200) {
				return response;
			}

			return caches.open(cacheName).then(function (cache) {
				cache.put(request, response.clone());
				return response;
			});
		})
		.catch(function () {
			return caches.match(request);
		});
}


// =====================================================
// STALE WHILE REVALIDATE (JS / CSS)
// =====================================================

function staleWhileRevalidate(request, cacheName) {
	return caches.open(cacheName).then(function (cache) {

		return cache.match(request).then(function (cached) {

			var fetchPromise = fetch(request)
				.then(function (networkResponse) {

					if (networkResponse && networkResponse.status === 200) {
						cache.put(request, networkResponse.clone());
					}

					return networkResponse;
				})
				.catch(function () {
					return cached;
				});

			return cached || fetchPromise;
		});
	});
}


// =====================================================
// CLEANUP (FULL)
// =====================================================

function cleanupOldCaches() {
	return caches.keys().then(function (keys) {

		// удалить старые cache names
		return Promise.all(
			keys.map(function (name) {
				if (
					name !== IMAGE_CACHE &&
					name !== STATIC_CACHE &&
					name !== API_CACHE
				) {
					return caches.delete(name);
				}
			})
		);

	}).then(function () {

		// TTL cleanup IMAGE_CACHE
		return caches.open(IMAGE_CACHE);

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

							if (Date.now() - Number(time) > MAX_AGE) {
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
}