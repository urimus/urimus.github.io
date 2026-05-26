"use strict";

// =====================================================
// FAST IMAGE CACHE SERVICE WORKER
// Promise version (no async / await)
// =====================================================

var CACHE_NAME = "image-cache";
var META_SUFFIX = "?sw-meta";

// 30 days
var MAX_AGE = 1000 * 60 * 60 * 24 * 30;

// in-flight dedupe
var IN_FLIGHT = new Map();


// =====================================================
// INSTALL / ACTIVATE
// =====================================================

self.addEventListener("install", function () {

	self.skipWaiting();

});

self.addEventListener("activate", function (event) {

	event.waitUntil(

		self.clients.claim()

			.then(function () {

				return cleanupOldCache();

			})

	);

});


// =====================================================
// FETCH
// =====================================================

self.addEventListener("fetch", function (event) {

	var request = event.request;

	if (request.method !== "GET") {
		return;
	}

	// -------------------------------------------------
	// DETECT IMAGE REQUESTS
	// -------------------------------------------------

	if (request.destination !== "image") {
		return;
	}

	event.respondWith(

		handleImageRequest(event, request)

	);

});


// =====================================================
// MAIN HANDLER
// =====================================================

function handleImageRequest(event, request) {

	return caches.open(CACHE_NAME)

		.then(function (cache) {

			return cache.match(request)

				.then(function (cached) {

					// -------------------------------------------------
					// CACHE HIT
					// -------------------------------------------------

					if (cached) {

						event.waitUntil(

							refreshIfNeeded(cache, request)

						);

						return cached;
					}

					// -------------------------------------------------
					// CACHE MISS
					// -------------------------------------------------

					return fetchAndCache(cache, request);

				});

		});

}


// =====================================================
// REFRESH IF TTL EXPIRED
// =====================================================

function refreshIfNeeded(cache, request) {

	return isFresh(cache, request)

		.then(function (fresh) {

			if (!fresh) {

				return fetchAndCache(cache, request);

			}

		})

		.catch(function (err) {

			console.log(

				"[SW] refresh failed -",
				err

			);

		});

}


// =====================================================
// FETCH + CACHE
// =====================================================

function fetchAndCache(cache, request) {

	var key = request.url;

	// -------------------------------------------------
	// DEDUPE SAME REQUESTS
	// -------------------------------------------------

	if (IN_FLIGHT.has(key)) {

		return IN_FLIGHT.get(key)

			.catch(function () {

				return cache.match(request)

					.then(function (fallback) {

						if (fallback) {
							return fallback;
						}

						throw new Error("fetch failed");

					});

			});

	}

	var promise = fetch(request)

		.then(function (response) {

			// -------------------------------------------------
			// EMPTY RESPONSE
			// -------------------------------------------------

			if (!response) {

				console.log(

					"[SW] caching failed - empty response:",
					request.url

				);

				return response;
			}

			// -------------------------------------------------
			// ALLOW:
			// - normal 200 responses
			// - opaque cross-origin responses
			// -------------------------------------------------

			if (

				response.status !== 200
				&& response.type !== "opaque"

			) {

				console.log(

					"[SW] caching failed - bad status:",
					response.status,
					request.url

				);

				return response;
			}

			// -------------------------------------------------
			// OPAQUE RESPONSE
			// -------------------------------------------------

			if (response.type === "opaque") {

				var opaqueClone = response.clone();

				Promise.all([

					cache.put(request, opaqueClone),

					cache.put(

						new Request(getMetaKey(key)),

						new Response(
							Date.now().toString()
						)

					)

				])

				.catch(function (err) {

					console.log(

						"[SW] caching failed -",
						err

					);

				});

				return response;
			}

			// -------------------------------------------------
			// VALIDATE CONTENT TYPE
			// -------------------------------------------------

			var contentType =
				response.headers.get("content-type") || "";

			if (contentType.indexOf("image/") !== 0) {

				console.log(

					"[SW] caching failed - invalid content-type:",
					contentType,
					request.url

				);

				return response;
			}

			// -------------------------------------------------
			// VERIFY IMAGE DATA
			// -------------------------------------------------

			return response.clone().blob()

				.then(function (blob) {

					if (!blob || blob.size === 0) {

						console.log(

							"[SW] caching failed - empty image:",
							request.url

						);

						return response;
					}

					// -------------------------------------------------
					// CACHE
					// -------------------------------------------------

					var responseClone = response.clone();

					Promise.all([

						cache.put(request, responseClone),

						cache.put(

							new Request(getMetaKey(key)),

							new Response(
								Date.now().toString()
							)

						)

					])

					.catch(function (err) {

						console.log(

							"[SW] caching failed -",
							err

						);

					});

					return response;

				});

		})

		.catch(function (err) {

			console.log(

				"[SW] fetch failed -",
				err,
				request.url

			);

			return cache.match(request)

				.then(function (fallback) {

					if (fallback) {
						return fallback;
					}

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
// TTL CHECK
// =====================================================

function isFresh(cache, request) {

	return cache.match(

		new Request(getMetaKey(request.url))

	)

	.then(function (meta) {

		if (!meta) {
			return false;
		}

		return meta.text()

			.then(function (time) {

				return (

					Date.now() - Number(time)
					< MAX_AGE

				);

			});

	});

}


// =====================================================
// META KEY
// =====================================================

function getMetaKey(url) {

	return url + META_SUFFIX;

}


// =====================================================
// CLEANUP
// =====================================================

function cleanupOldCache() {

	return caches.keys()

		.then(function (keys) {

			return Promise.all(

				keys.map(function (name) {

					if (name !== CACHE_NAME) {

						return caches.delete(name);

					}

				})

			);

		})

		.then(function () {

			return caches.open(CACHE_NAME);

		})

		.then(function (cache) {

			return cache.keys()

				.then(function (requests) {

					var chain = Promise.resolve();

					requests.forEach(function (request) {

						// skip meta entries

						if (

							request.url.indexOf(META_SUFFIX)
							!== -1

						) {
							return;
						}

						chain = chain.then(function () {

							var metaKey =
								getMetaKey(request.url);

							return cache.match(

								new Request(metaKey)

							)

							.then(function (meta) {

								if (!meta) {
									return;
								}

								return meta.text()

									.then(function (time) {

										if (

											Date.now()
											- Number(time)
											> MAX_AGE

										) {

											return cache.delete(request)

												.then(function () {

													return cache.delete(

														new Request(metaKey)

													);

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