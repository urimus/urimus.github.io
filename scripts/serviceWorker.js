"use strict";

var CACHE_NAME = "image-cache-v1";
var META_SUFFIX = ":meta";

// TTL 24 часа
var MAX_AGE = 1000 * 60 * 60 * 24;

// ======================
// 🔥 preload concurrency control
// ======================
var PRELOAD_CONCURRENCY = 4;
var activePreloads = 0;
var preloadQueue = [];

// ======================
// install / activate
// ======================
self.addEventListener("install", function () {
	self.skipWaiting();
});

self.addEventListener("activate", function (event) {
	event.waitUntil(
		self.clients.claim().then(cleanupOldCache)
	);
});

// ======================
// fetch handler
// ======================
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
								enqueuePreload(cache, normalizedRequest)
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
// 🔹 preload queue system (LIMIT 4)
// ======================
function enqueuePreload(cache, request) {
	return new Promise(function (resolve) {
		preloadQueue.push({ cache: cache, request: request, resolve: resolve });
		runNextPreload();
	});
}

function runNextPreload() {
	if (activePreloads >= PRELOAD_CONCURRENCY) return;
	if (preloadQueue.length === 0) return;

	var task = preloadQueue.shift();

	activePreloads++;

	realPreload(task.cache, task.request)
		.then(task.resolve)
		.finally(function () {
			activePreloads--;
			runNextPreload();
		});
}

function realPreload(cache, request) {
	return fetch(request, { cache: "no-store" })
		.then(function (response) {
			if (!response || response.status !== 200) return;

			var metaRequest = new Request(request.url + META_SUFFIX);

			return cache.put(request, response.clone())
				.then(function () {
					return cache.put(
						metaRequest,
						new Response(Date.now().toString())
					);
				});
		})
		.catch(function () {});
}

// ======================
// 🔹 runtime update (stale-while-revalidate)
// ======================
function updateInBackground(cache, request) {
	return fetch(request, { cache: "no-store" })
		.then(function (response) {
			if (!response || response.status !== 200) return;

			var metaRequest = new Request(request.url + META_SUFFIX);

			return cache.put(request, response.clone())
				.then(function () {
					return cache.put(
						metaRequest,
						new Response(Date.now().toString())
					);
				});
		})
		.catch(function () {});
}

// ======================
// 🔹 cache + write
// ======================
function fetchAndCache(cache, request) {

	return fetch(request, { cache: "no-store" })
		.then(function (response) {
			if (!response || response.status !== 200) return response;

			var metaRequest = new Request(request.url + META_SUFFIX);

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
		});
}

// ======================
// 🔹 TTL check
// ======================
function isFresh(cache, request) {
	var metaRequest = new Request(request.url + META_SUFFIX);

	return cache.match(metaRequest).then(function (meta) {
		if (!meta) return false;

		return meta.text().then(function (time) {
			return Date.now() - Number(time) < MAX_AGE;
		});
	});
}

// ======================
// 🔹 cleanup expired cache
// ======================
function cleanupOldCache() {
	return caches.open(CACHE_NAME).then(function (cache) {
		return cache.keys().then(function (requests) {

			return Promise.all(
				requests.map(function (request) {

					if (request.url.indexOf(META_SUFFIX) !== -1) return;

					var metaRequest = new Request(request.url + META_SUFFIX);

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