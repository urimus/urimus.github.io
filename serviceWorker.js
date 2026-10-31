"use strict";

// =====================================================
// FAST IMAGE CACHE + COI SERVICE WORKER
// Promise version (no async / await)
// =====================================================

// =====================================================
// IMAGE CACHE
// =====================================================

let CACHE_NAME = "image-cache";
let META_SUFFIX = "?sw-meta";

// 30 days
let MAX_AGE = 1000 * 60 * 60 * 24 * 30;

// in-flight dedupe
let IN_FLIGHT = new Map();

// =====================================================
// COI
// =====================================================

let coepCredentialless = true;


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
// IMAGE CACHE NOTIFICATION
// =====================================================

function notifyImageCacheResult(clientId, url, cached) {

	if (!clientId) {
		console.warn("[SW] Missing clientId:", url);
		return Promise.resolve();
	}

	return self.clients.get(clientId)

		.then(function (client) {

			if (client) {

				client.postMessage({

					type: "IMAGE_CACHE_RESULT",
					url: url,
					cached: cached

				});

			} else {

				console.warn("[SW] Client not found:", clientId, url);

			}

		})

		.catch(function (err) {

			console.error("[SW] Notification error:", err, url);

		});

}

// =====================================================
// FETCH
// =====================================================

self.addEventListener("fetch", function (event) {

	let request = event.request;

	// -------------------------------------------------
	// Only GET
	// -------------------------------------------------

	if (request.method !== "GET") {
		return;
	}

	// -------------------------------------------------
	// Only HTTP / HTTPS
	// -------------------------------------------------

	let url = new URL(request.url);

	if (
		url.protocol !== "http:" &&
		url.protocol !== "https:"
	) {
		return;
	}


	// -------------------------------------------------
	// only-if-cached + cross-origin
	// -------------------------------------------------

	if (
		request.cache === "only-if-cached"
		&& request.mode !== "same-origin"
	) {
		return;
	}


	// =================================================
	// IMAGE
	// =================================================

	if (request.destination === "image") {

		event.respondWith(
			handleImageRequest(event, request)
		);

		return;
	}

	// =================================================
	// SAME-ORIGIN / COI
	// =================================================

	event.respondWith(
		handleCOIRequest(request)
	);

});


// =====================================================
// COI REQUEST HANDLER
// =====================================================

function handleCOIRequest(request) {

	let requestToFetch = request;
	let url = new URL(request.url);

	// Apply credentialless to cross-origin no-cors requests
	if (
		coepCredentialless &&
		request.mode === "no-cors" &&
		url.origin !== self.location.origin
	) {
		requestToFetch = new Request(request, {
			credentials: "omit"
		});
	}

	return fetch(requestToFetch)

		.then(function (response) {

			// Modify headers only for navigation requests
			if (
				request.mode !== "navigate" ||
				response.type === "opaque" ||
				response.status === 0
			) {
				return response;
			}

			let newHeaders = new Headers(response.headers);

			newHeaders.set(
				"Cross-Origin-Embedder-Policy",
				coepCredentialless
					? "credentialless"
					: "require-corp"
			);

			newHeaders.set(
				"Cross-Origin-Opener-Policy",
				"same-origin"
			);

			if (!coepCredentialless) {
				newHeaders.set(
					"Cross-Origin-Resource-Policy",
					"cross-origin"
				);
			}

			return new Response(
				response.body,
				{
					status: response.status,
					statusText: response.statusText,
					headers: newHeaders
				}
			);

		})

		.catch(function (error) {

			console.error(
				"[SW] COI fetch failed:",
				request.url,
				error
			);

			return new Response(
				"Network error: " + error.message,
				{
					status: 503,
					headers: {
						"Content-Type": "text/plain; charset=utf-8"
					}
				}
			);

		});

}



// =====================================================
// MAIN IMAGE HANDLER
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

						return notifyImageCacheResult(
							event.clientId,
							request.url,
							true
						).then(function () {

							return cached;

						});

					}


					// -------------------------------------------------
					// CACHE MISS
					// -------------------------------------------------

					return fetchAndCache(cache, request)

						.then(function (response) {

							return cache.match(request)

								.then(function (cached) {

									return notifyImageCacheResult(
										event.clientId,
										request.url,
										!!cached
									).then(function () {

										return response;

									});

								});

						});

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

	let key = request.url;


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


	// -------------------------------------------------
	// for opaque requests
	// -------------------------------------------------

	let started = Date.now();


	let promise = fetchImageRequest(request)

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

				let elapsed =
					Date.now() - started;


				if (elapsed > 10000) {

					console.log(
						"[SW] caching skipped - slow opaque response:",
						elapsed + "ms",
						request.url
					);

					return response;
				}


				let opaqueClone =
					response.clone();


				return Promise.all([

					cache.put(
						request,
						opaqueClone
					),

					cache.put(
						new Request(
							getMetaKey(key)
						),

						new Response(
							Date.now().toString()
						)
					)

				])

				.then(function () {

					return response;

				})

				.catch(function (err) {

					console.log(
						"[SW] caching failed -",
						err
					);

					return response;

				});
			}


			// -------------------------------------------------
			// VALIDATE CONTENT TYPE
			// -------------------------------------------------

			let contentType =
				response.headers.get(
					"content-type"
				) || "";


			if (
				contentType.indexOf("image/") !== 0
			) {

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

					if (
						!blob
						|| blob.size === 0
					) {

						console.log(
							"[SW] caching failed - empty image:",
							request.url
						);

						return response;
					}


					// -------------------------------------------------
					// CACHE
					// -------------------------------------------------

					let responseClone =
						response.clone();


					return Promise.all([

						cache.put(
							request,
							responseClone
						),

						cache.put(
							new Request(
								getMetaKey(key)
							),

							new Response(
								Date.now().toString()
							)
						)

					])

					.then(function () {

						return response;

					})

					.catch(function (err) {

						console.log(
							"[SW] caching failed -",
							err
						);

						return response;

					});

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
					return new Response("", {
						status: 503
					});
				});
		})

		.finally(function () {

			IN_FLIGHT.delete(key);

		});

	IN_FLIGHT.set(
		key,
		promise
	);


	return promise;
}


// =====================================================
// IMAGE FETCH
// =====================================================
//
// Это аналог credentialless-логики coi-serviceworker,
// но только для изображений, которые идут через
// твой image cache.
// =====================================================


function fetchImageRequest(request) {

	let url = new URL(request.url);

	// Apply credentialless to cross-origin no-cors requests
	if (
		coepCredentialless &&
		request.mode === "no-cors" &&
		url.origin !== self.location.origin
	) {
		return fetch(
			new Request(request, {
				credentials: "omit"
			})
		);
	}

	return fetch(request);
}



// =====================================================
// TTL CHECK
// =====================================================

function isFresh(cache, request) {

	return cache.match(
		new Request(
			getMetaKey(request.url)
		)
	)

	.then(function (meta) {

		if (!meta) {
			return false;
		}


		return meta.text()

			.then(function (time) {

				return (
					Date.now()
					- Number(time)
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

			return caches.open(
				CACHE_NAME
			);

		})

		.then(function (cache) {

			return cache.keys()

				.then(function (requests) {

					let chain =
						Promise.resolve();


					requests.forEach(function (request) {

						// -------------------------------------------------
						// skip meta entries
						// -------------------------------------------------

						if (
							request.url.indexOf(
								META_SUFFIX
							) !== -1
						) {
							return;
						}


						chain = chain.then(function () {

							let metaKey =
								getMetaKey(
									request.url
								);


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

											return cache.delete(
												request
											)

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