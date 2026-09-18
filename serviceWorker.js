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
// COI MESSAGE
// =====================================================

self.addEventListener("message", function (event) {

	if (!event.data) {
		return;
	}

	if (event.data.type === "coepCredentialless") {

		coepCredentialless = !!event.data.value;

		console.log(
			"[COI] credentialless:",
			coepCredentialless
		);
	}

});


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

	let protocol = new URL(request.url).protocol;

	if (
		protocol !== "http:" &&
		protocol !== "https:"
	) {
		return;
	}


	// -------------------------------------------------
	// DO NOT INTERFERE WITH CROSS-ORIGIN NAVIGATIONS
	// -------------------------------------------------

	if (
		request.mode === "navigate" &&
		new URL(request.url).origin !== self.location.origin
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
	// ALL OTHER REQUESTS
	// =================================================

	event.respondWith(
		handleCOIRequest(request)
	);

});


// =====================================================
// COI REQUEST HANDLER
// =====================================================

function handleCOIRequest(request) {

	// -------------------------------------------------
	// credentialless:
	// cross-origin no-cors requests do not send cookies
	// -------------------------------------------------

	let requestToFetch = request;

	if (
		coepCredentialless
		&& request.mode === "no-cors"
	) {

		requestToFetch = new Request(request, {
			credentials: "omit"
		});

	}


	return fetch(requestToFetch)

		.then(function (response) {

			// -------------------------------------------------
			// opaque response
			// -------------------------------------------------

			if (response.status === 0) {
				return response;
			}


			// -------------------------------------------------
			// modify response headers
			// -------------------------------------------------

			let newHeaders =
				new Headers(response.headers);


			// -------------------------------------------------
			// COEP
			// -------------------------------------------------

			newHeaders.set(
				"Cross-Origin-Embedder-Policy",
				coepCredentialless
					? "credentialless"
					: "require-corp"
			);


			// -------------------------------------------------
			// COOP
			// -------------------------------------------------

			newHeaders.set(
				"Cross-Origin-Opener-Policy",
				"same-origin"
			);


			// -------------------------------------------------
			// CORP
			//
			// Only needed for require-corp mode.
			// In credentialless mode we don't add it.
			// -------------------------------------------------

			if (!coepCredentialless) {

				newHeaders.set(
					"Cross-Origin-Resource-Policy",
					"cross-origin"
				);

			}


			// -------------------------------------------------
			// Return modified response
			// -------------------------------------------------

			return new Response(
				response.body,
				{
					status: response.status,
					statusText: response.statusText,
					headers: newHeaders
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


				Promise.all([

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


					Promise.all([

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

	if (
		coepCredentialless
		&& request.mode === "no-cors"
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