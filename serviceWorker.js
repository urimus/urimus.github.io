"use strict";

// =====================================================
// CACHE NAMES
// =====================================================

var IMAGE_CACHE = "image-cache2";
var STATIC_CACHE = "static-cache2";
var API_CACHE = "api-cache2";

var META_SUFFIX = ":meta";

// TTL (7 days unified)
var MAX_AGE = 1000 * 60 * 60 * 24 * 7;

// timeout
var FETCH_TIMEOUT = 7000;

// image in-flight dedupe
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
			return cleanupAllCaches();
		})
	);
});


// =====================================================
// FETCH ROUTER
// =====================================================

self.addEventListener("fetch", function (event) {
	var request = event.request;

	if (request.method !== "GET") return;
	if (request.headers.get("Authorization")) return;

	var url = new URL(request.url);

	// HTML
	if (request.mode === "navigate") {
		event.respondWith(handleGeneric(event, request, STATIC_CACHE, networkFirst));
		return;
	}

	// IMAGES
	if (request.destination === "image") {
		event.respondWith(handleImageRequest(event, request));
		return;
	}

	// JS / CSS / fonts
	if (
		request.destination === "script" ||
		request.destination === "style" ||
		request.destination === "font"
	) {
		event.respondWith(handleGeneric(event, request, STATIC_CACHE, staleWhileRevalidate));
		return;
	}

	// API
	if (url.pathname.startsWith("/api/")) {
		event.respondWith(handleGeneric(event, request, API_CACHE, networkFirst));
		return;
	}
});


// =====================================================
// GENERIC HANDLER
// =====================================================

function handleGeneric(event, request, cacheName, strategy) {
	return caches.open(cacheName).then(function (cache) {

		return cache.match(request).then(function (cached) {

			if (cached) {
				event.waitUntil(refreshGeneric(cache, request));
				return cached;
			}

			return strategy(request, cache, cached);
		});
	});
}

function refreshGeneric(cache, request) {
	return isFresh(cache, request).then(function (fresh) {
		if (!fresh) {
			return fetchAndCacheGeneric(cache, request);
		}
		return Promise.resolve();
	});
}

function fetchAndCacheGeneric(cache, request) {
	return fetch(request)
		.then(function (response) {

			if (
				response &&
				(response.status === 200 || response.type === "opaque")
			) {
				return Promise.all([
					cache.put(request, response.clone()),
					cache.put(
						request.url + META_SUFFIX,
						new Response(Date.now().toString())
					)
				]).then(function () {
					return response;
				});
			}

			return response;
		})
		.catch(function () {
			return cache.match(request).then(function (cached) {
				if (cached) return cached;
				return new Response("Network error", { status: 502 });
			});
		});
}


// =====================================================
// STRATEGIES
// =====================================================

function networkFirst(request, cache) {
	return fetch(request)
		.then(function (response) {

			if (!response || (response.status !== 200 && response.type !== "opaque")) {
				return response;
			}

			return Promise.all([
				cache.put(request, response.clone()),
				cache.put(
					request.url + META_SUFFIX,
					new Response(Date.now().toString())
				)
			]).then(function () {
				return response;
			});
		})
		.catch(function () {
			return cache.match(request).then(function (cached) {
				if (cached) return cached;
				return new Response("Offline", { status: 503 });
			});
		});
}

function staleWhileRevalidate(request, cache, cached) {

	var fetchPromise = fetch(request)
		.then(function (response) {

			if (response && (response.status === 200 || response.type === "opaque")) {
				return Promise.all([
					cache.put(request, response.clone()),
					cache.put(
						request.url + META_SUFFIX,
						new Response(Date.now().toString())
					)
				]).then(function () {
					return response;
				});
			}

			return response;
		})
		.catch(function () {
			return cached;
		});

	return cached || fetchPromise;
}


// =====================================================
// IMAGE HANDLER
// =====================================================

function handleImageRequest(event, request) {
	return caches.open(IMAGE_CACHE).then(function (cache) {

		return cache.match(request).then(function (cached) {

			if (cached) {
				event.waitUntil(refreshIfNeeded(cache, request));
				return cached;
			}

			return fetchAndCacheImage(cache, request);
		});
	});
}

function refreshIfNeeded(cache, request) {
	return isFresh(cache, request).then(function (fresh) {
		if (!fresh) {
			return fetchAndCacheImage(cache, request);
		}
		return Promise.resolve();
	});
}

function fetchAndCacheImage(cache, request) {
	var key = request.url;

	if (IN_FLIGHT.has(key)) {
		return IN_FLIGHT.get(key);
	}

	var promise = fetchWithTimeout(request, FETCH_TIMEOUT)
		.then(function (response) {

			if (response && (response.status === 200 || response.type === "opaque")) {
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
		.catch(function () {
			return cache.match(request).then(function (fallback) {
				if (fallback) return fallback;
				return new Response("", { status: 504 });
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
// TTL CHECK (ALL CACHE TYPES)
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
// CLEANUP ALL CACHES (your logic preserved)
// =====================================================

function cleanupAllCaches() {
	return caches.keys().then(function (keys) {

		// remove unknown caches
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

		// TTL cleanup ALL caches
		return caches.keys();

	}).then(function (keys) {

		return Promise.all(
			keys.map(function (name) {

				return caches.open(name).then(function (cache) {

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
			})
		);
	});
}