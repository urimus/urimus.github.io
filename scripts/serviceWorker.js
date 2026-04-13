"use strict";

var CACHE_NAME = "image-cache-v1";
var META_SUFFIX = ":meta";

// 24 часа TTL
var MAX_AGE = 1000 * 60 * 60 * 24;
// preload control
var IS_PRELOAD_MODE = false;

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
// 🔥 preload mode toggle (from page)
// ======================
self.addEventListener("message", function (event) {
	if (!event.data) return;

	if (event.data.type === "SET_PRELOAD_MODE") {
		IS_PRELOAD_MODE = !!event.data.value;
	}
});

function log(...args) {
	self.clients.matchAll().then(clients => {
		clients.forEach(client => {
			client.postMessage({
				type: "SW_LOG",
				data: args
			});
		});
	});
}

self.addEventListener("fetch", function (event) {
console.log("console.log FETCH:", event.request.url, event.request.destination);
log("log FETCH:", event.request.url, event.request.destination);
	if (event.request.destination !== "image") return;

	event.respondWith(
		caches.open(CACHE_NAME).then(function (cache) {
			return cache.match(event.request).then(function (cached) {
				if (cached) {
					return isFresh(cache, event.request).then(function (fresh) {

						if (IS_PRELOAD_MODE && fresh) {
							// ✅ свежая → только кэш
console.log("console.log is preload, ✅ свежая → только кэш");
log("log ✅ свежая → только кэш");
							return cached;
						}

console.log("console.log ⚠️ старая → вернуть + обновить в фоне");
log("log ⚠️ старая → вернуть + обновить в фоне");
						// ⚠️ старая → вернуть + обновить в фоне
						event.waitUntil(
							updateInBackground(cache, event.request)
						);

						return cached;
					});
				}

console.log("console.log ❌ нет в кэше → сеть + запись");
log("log ❌ нет в кэше → сеть + запись");
				// ❌ нет в кэше → сеть + запись
				return fetchAndCache(cache, event.request);
			});
		})
	);
});


// ======================
// 🔹 сеть + кэширование
// ======================
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


// ======================
// 🔹 обновление в фоне
// ======================
function updateInBackground(cache, request) {
	return fetch(request).then(function (response) {
		if (!response || response.status !== 200) return;

		return cache.put(request, response.clone()).then(function () {
			return cache.put(
				request.url + META_SUFFIX,
				new Response(Date.now().toString())
			);
		});
	}).catch(function () {
		// offline / error → игнор
	});
}


// ======================
// 🔹 TTL проверка
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
// 🔹 очистка при activate
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