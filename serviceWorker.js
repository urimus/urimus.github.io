"use strict";

// =====================================================
// CACHE NAMES
// =====================================================

var IMAGE_CACHE = "image-cache";
var STATIC_CACHE = "static-cache";
var API_CACHE = "api-cache";

var META_SUFFIX = ":meta";

// TTL (7 days)
var MAX_AGE = 1000 * 60 * 60 * 24 * 7;


// =====================================================
// IN-FLIGHT DEDUPE (GLOBAL)
// =====================================================

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
// SMART FETCH (core with dedupe)
// =====================================================

function smartFetch(request, options) {
	var {
		timeout = 0,
		retries = 0,
		retryDelay = 300,
		cache = null,
		cacheKey = request,
		cacheable = true,
		fallbackToCache = true,
		dedupe = true
	} = options || {};

	var key = (typeof cacheKey === "string") ? cacheKey : cacheKey.url;

	if (dedupe && IN_FLIGHT.has(key)) {
		return IN_FLIGHT.get(key);
	}

	function attempt(n) {
		return fetchWithOptionalTimeout(request, timeout)
			.then(function (response) {

				if (!response || (response.status !== 200 && response.type !== "opaque")) {
					throw new Error("Bad response");
				}

				if (cache && cacheable) {
					return Promise.all([
						cache.put(cacheKey, response.clone()),
						cache.put(
							cacheKey.url + META_SUFFIX,
							new Response(Date.now().toString())
						)
					]).then(function () {
						return response;
					});
				}

				return response;
			})
			.catch(function (err) {

				if (n < retries) {
					return delay(retryDelay).then(function () {
						return attempt(n + 1);
					});
				}

				if (fallbackToCache && cache) {
					return cache.match(cacheKey).then(function (cached) {
						if (cached) return cached;
						throw err;
					});
				}

				throw err;
			});
	}

	var promise = attempt(0).finally(function () {
		IN_FLIGHT.delete(key);
	});

	if (dedupe) {
		IN_FLIGHT.set(key, promise);
	}

	return promise;
}


// =====================================================
// TIMEOUT + DELAY
// =====================================================

function fetchWithOptionalTimeout(request, ms) {
	if (!ms) return fetch(request);

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

function delay(ms) {
	return new Promise(function (resolve) {
		setTimeout(resolve, ms);
	});
}


// =====================================================
// GENERIC HANDLER
// =====================================================

function handleGeneric(event, request, cacheName, strategy) {
	return caches.open(cacheName).then(function (cache) {

		return cache.match(request).then(function (cached) {

			if (cached) {
				event.waitUntil(refreshIfNeeded(cache, request));
				return cached;
			}

			return strategy(request, cache, cached);
		});
	});
}


// =====================================================
// STRATEGIES
// =====================================================

function networkFirst(request, cache) {
	return smartFetch(request, {
		timeout: 5000,
		retries: 1,
		cache: cache,
		cacheKey: request,
		fallbackToCache: true,
		dedupe: false // важно для navigate/API
	}).catch(function () {
		return new Response("Offline", { status: 503 });
	});
}

function staleWhileRevalidate(request, cache, cached) {

	var fetchPromise = smartFetch(request, {
		timeout: 5000,
		retries: 1,
		cache: cache,
		cacheKey: request,
		dedupe: true
	}).catch(function () {
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

			return smartFetch(request, {
				timeout: 7000,
				retries: 1,
				cache: cache,
				cacheKey: request,
				dedupe: true
			}).catch(function () {
				return new Response("", { status: 504 });
			});
		});
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

function refreshIfNeeded(cache, request) {
	return isFresh(cache, request).then(function (fresh) {
		if (!fresh) {
			return smartFetch(request, {
				timeout: 5000,
				retries: 1,
				cache: cache,
				cacheKey: request
			});
		}
	});
}


// =====================================================
// CLEANUP
// =====================================================

function cleanupAllCaches() {
	return caches.keys().then(function (keys) {

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