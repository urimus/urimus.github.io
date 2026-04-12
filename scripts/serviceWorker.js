"use strict";

var CACHE_NAME = "image-cache-v1";
var META_SUFFIX = ":meta";

var MAX_AGE = 1000 * 60 * 60 * 24;

// ======================
// 🔥 concurrency + dedupe
// ======================
var PRELOAD_CONCURRENCY = 4;
var activePreloads = 0;
var preloadQueue = [];
var preloadSet = new Set();

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
// fetch
// ======================
self.addEventListener("fetch", function (event) {
	if (event.request.destination !== "image") return;
	if (event.request.method !== "GET") return;

	event.respondWith(
		caches.open(CACHE_NAME).then(function (cache) {
			return cache.match(event.request).then(function (cached) {

				if (cached) {
					// stale-while-revalidate
					event.waitUntil(
						updateInBackground(cache, event.request)
					);

					return cached;
				}

				return fetchAndCache(cache, event.request);
			});
		})
	);
});

// ======================
// fetch + cache (with dedupe conceptually ready)
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
// background update (queued + limited)
// ======================
function updateInBackground(cache, request) {
	return enqueuePreload(cache, request);
}

// ======================
// 🔥 queue (max 4 parallel)
// ======================
function enqueuePreload(cache, request) {

	if (preloadSet.has(request.url)) {
		return Promise.resolve();
	}

	preloadSet.add(request.url);

	return new Promise(function (resolve) {
		preloadQueue.push({
			cache: cache,
			request: request,
			resolve: resolve
		});

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
		.catch(function () {})
		.finally(function () {
			preloadSet.delete(request.url);
		});
}

// ======================
// TTL
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
// cleanup
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