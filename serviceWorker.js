"use strict";

var CACHE_NAME = "image-cache-v1";
var META_SUFFIX = ":meta";

// 7 days TTL
var MAX_AGE = 1000 * 60 * 60 * 24 * 7;

// in-flight dedupe
var IN_FLIGHT = {};

// ======================
// install / activate
// ======================
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

// ======================
// normalize request
// ======================
function normalizeRequest(request) {
	const url = new URL(request.url);

	const isPreload = url.searchParams.has("preload");
	url.searchParams.delete("preload");

	const normalized = new Request(url.toString(), {
		method: request.method,
		headers: request.headers,
		mode: request.mode,
		credentials: request.credentials,
		cache: request.cache,
		redirect: request.redirect,
		referrer: request.referrer
	});

	return { request: normalized, isPreload };
}

// ======================
// fetch handler
// ======================
self.addEventListener("fetch", function (event) {
	if (event.request.destination !== "image") return;

	const { request, isPreload } = normalizeRequest(event.request);

	event.respondWith(
		caches.open(CACHE_NAME).then(function (cache) {
			return cache.match(request).then(function (cached) {

				// ======================
				// CACHE HIT
				// ======================
				if (cached) {
					return isFresh(cache, request).then(function (fresh) {

						if (fresh) {
							if (!isPreload) {
								event.waitUntil(fetchAndCache(cache, request));
							}
							return cached;
						}

						return fetchAndCache(cache, request)
							.catch(function () {
								return cached;
							});
					});
				}

				// ======================
				// CACHE MISS
				// ======================
				return fetchAndCache(cache, request);
			});
		})
	);
});

// ======================
// network + cache
// ======================
function fetchAndCache(cache, request) {
	var key = request.url;

	if (IN_FLIGHT[key]) {
		return IN_FLIGHT[key].catch(function () {
			return cache.match(request);
		});
	}

	IN_FLIGHT[key] = fetch(request)
		.then(function (response) {

			if (!response || (response.status !== 200 && response.type !== "opaque")) {
				return response;
			}

			return Promise.all([
				cache.put(request, response.clone()),
				cache.put(
					key + META_SUFFIX,
					new Response(Date.now().toString())
				)
			]).then(function () {
				return response;
			});
		})
		.catch(function () {
			return cache.match(request);
		})
		.finally(function () {
			delete IN_FLIGHT[key];
		});

	return IN_FLIGHT[key];
}

// ======================
// TTL check
// ======================
function isFresh(cache, request) {
	return cache.match(request.url + META_SUFFIX).then(function (meta) {
		if (!meta) return false;

		return meta.text().then(function (time) {
			return Date.now() - Number(time) < MAX_AGE;
		});
	});
}

// ======================
// cleanup old cache
// ======================
function cleanupOldCache() {
	return caches.open(CACHE_NAME).then(function (cache) {
		return cache.keys().then(function (requests) {

			var chain = Promise.resolve();

			requests.forEach(function (request) {
				if (request.url.indexOf(META_SUFFIX) !== -1) return;

				chain = chain.then(function () {
					var metaKey = request.url + META_SUFFIX;

					return cache.match(metaKey).then(function (meta) {
						if (!meta) return;

						return meta.text().then(function (time) {
							var isExpired =
								Date.now() - Number(time) > MAX_AGE;

							if (isExpired) {
								return cache.delete(request).then(function () {
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