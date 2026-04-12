"use strict";

var CACHE_NAME = "image-cache-v1";
var META_SUFFIX = ":meta";

// 24 часа
var MAX_AGE = 1000 * 60 * 60 * 24;

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

self.addEventListener("fetch", function (event) {
	if (event.request.destination !== "image") return;

	event.respondWith(
		caches.open(CACHE_NAME).then(function (cache) {
			return cache.match(event.request).then(function (cached) {
				if (cached) {
					return isFresh(cache, event.request).then(function (fresh) {
						if (fresh) return cached;

						// устарело → удалить и загрузить заново
						return cache.delete(event.request).then(function () {
							return cache.delete(event.request.url + META_SUFFIX);
						}).then(function () {
							return fetchAndCache(cache, event.request);
						});
					});
				}

				return fetchAndCache(cache, event.request);
			});
		})
	);
});

// 🔹 загрузка + сохранение
function fetchAndCache(cache, request) {
	return fetch(request).then(function (response) {
		if (!response || response.status !== 200) return response;

		return cache.put(request, response.clone()).then(function () {
			return cache.put(
				request.url + META_SUFFIX,
				new Response(Date.now().toString())
			);
		}).then(function () {
			return response;
		});
	});
}

// 🔹 проверка TTL
function isFresh(cache, request) {
	return cache.match(request.url + META_SUFFIX).then(function (meta) {
		if (!meta) return false;

		return meta.text().then(function (time) {
			return Date.now() - Number(time) < MAX_AGE;
		});
	});
}

// 🔹 очистка при activate
function cleanupOldCache() {
	return caches.open(CACHE_NAME).then(function (cache) {
		return cache.keys().then(function (requests) {
			var chain = Promise.resolve();

			requests.forEach(function (request) {
				// пропускаем meta
				if (request.url.indexOf(META_SUFFIX) !== -1) return;

				chain = chain.then(function () {
					var metaKey = request.url + META_SUFFIX;

					return cache.match(metaKey).then(function (meta) {
						if (!meta) return;

						return meta.text().then(function (time) {
							var isExpired = Date.now() - Number(time) > MAX_AGE;

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