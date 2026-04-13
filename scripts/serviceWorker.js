"use strict";

const CACHE_NAME = "image-cache-v1";
const META_SUFFIX = ":meta";

// TTL (for example 24 hours)
const MAX_AGE = 1000 * 60 * 60 * 24;

self.addEventListener("install", function (event) {
	self.skipWaiting();
});

self.addEventListener("activate", function (event) {
	event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", function (event) {
	if (event.request.destination !== "image") return;

	event.respondWith(
		caches.open(CACHE_NAME).then(function (cache) {
			return cache.match(event.request).then(function (cached) {
				if (cached) {
					return isFresh(cache, event.request).then(function (fresh) {
						if (fresh) return cached;

						// outdated → remove and rewrite
						cache.delete(event.request);
						cache.delete(event.request.url + META_SUFFIX);
						return fetchAndCache(cache, event.request);
					});
				}

				return fetchAndCache(cache, event.request);
			});
		})
	);
});

function fetchAndCache(cache, request) {
	return fetch(request).then(function (response) {
		if (!response || response.status !== 200) return response;

		// save file
		cache.put(request, response.clone());

		// save upload time
		cache.put(
			request.url + META_SUFFIX,
			new Response(Date.now().toString())
		);

		return response;
	});
}

function isFresh(cache, request) {
	return cache.match(request.url + META_SUFFIX).then(function (meta) {
		if (!meta) return false;

		return meta.text().then(function (time) {
			var age = Date.now() - Number(time);
			return age < MAX_AGE;
		});
	});
}