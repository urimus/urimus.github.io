"use strict";

var CACHE_NAME = "image-cache-v1";
var META_SUFFIX = ":meta";

// 24 часа TTL
var MAX_AGE = 1000 * 60 * 60 * 24;

// 🔥 дедупликация запросов
var inFlight = new Map();

self.addEventListener("install", function () {
	self.skipWaiting();
});

self.addEventListener("activate", function (event) {
	event.waitUntil(
		self.clients.claim().then(cleanupOldCache)
	);
});

self.addEventListener("fetch", function (event) {
	if (event.request.destination !== "image") return;
	if (event.request.method !== "GET") return;

	const cleanUrl = new URL(event.request.url);
	const isPreload = cleanUrl.searchParams.get("cache") === "preload";
	cleanUrl.searchParams.delete("cache");

	const normalizedRequest = new Request(cleanUrl.toString(), {
		method: event.request.method,
		headers: new Headers(event.request.headers),
		mode: event.request.mode,
		credentials: event.request.credentials,
		redirect: event.request.redirect
	});

	event.respondWith(
		caches.open(CACHE_NAME).then(function (cache) {
			return cache.match(normalizedRequest).then(function (cached) {

				if (cached) {
					if (isPreload) {
						return isFresh(cache, normalizedRequest).then(function (fresh) {
							if (fresh) return cached;

							event.waitUntil(
								updateInBackground(cache, normalizedRequest)
							);
							return cached;
						});
					}

					event.waitUntil(
						updateInBackground(cache, normalizedRequest)
					);

					return cached;
				}

				return fetchAndCache(cache, normalizedRequest);
			});
		})
	);
});


// ======================
// 🔹 сеть + кэширование (с дедупликацией)
// ======================
function fetchAndCache(cache, request) {

	if (inFlight.has(request.url)) {
		return inFlight.get(request.url);
	}

	var promise = fetch(request, { cache: "no-store" })
		.then(function (response) {
			if (!response || response.status !== 200) return response;

			const metaRequest = new Request(request.url + META_SUFFIX);

			return cache.put(request, response.clone())
				.then(function () {
					return cache.put(
						metaRequest,
						new Response(Date.now().toString())
					);
				})
				.then(function () {
					return response;
				});
		})
		.finally(function () {
			inFlight.delete(request.url);
		});

	inFlight.set(request.url, promise);
	return promise;
}


// ======================
// 🔹 обновление в фоне
// ======================
function updateInBackground(cache, request) {

	if (inFlight.has(request.url)) {
		return inFlight.get(request.url);
	}

	var promise = fetch(request, { cache: "no-store" })
		.then(function (response) {
			if (!response || response.status !== 200) return;

			const metaRequest = new Request(request.url + META_SUFFIX);

			return cache.put(request, response.clone())
				.then(function () {
					return cache.put(
						metaRequest,
						new Response(Date.now().toString())
					);
				});
		})
		.catch(function () {
			// offline → игнор
		})
		.finally(function () {
			inFlight.delete(request.url);
		});

	inFlight.set(request.url, promise);
	return promise;
}


// ======================
// 🔹 TTL проверка
// ======================
function isFresh(cache, request) {
	const metaRequest = new Request(request.url + META_SUFFIX);

	return cache.match(metaRequest).then(function (meta) {
		if (!meta) return false;

		return meta.text().then(function (time) {
			return Date.now() - Number(time) < MAX_AGE;
		});
	});
}


// ======================
// 🔹 очистка (параллельно)
// ======================
function cleanupOldCache() {
	return caches.open(CACHE_NAME).then(function (cache) {
		return cache.keys().then(function (requests) {

			return Promise.all(
				requests.map(function (request) {

					if (request.url.indexOf(META_SUFFIX) !== -1) return;

					const metaRequest = new Request(request.url + META_SUFFIX);

					return cache.match(metaRequest).then(function (meta) {
						if (!meta) return;

						return meta.text().then(function (time) {

							if (Date.now() - Number(time) > MAX_AGE) {
								return Promise.all([
									cache.delete(request),
									cache.delete(metaRequest)
								]);
							}
						});
					});
				})
			);
		});
	});
}