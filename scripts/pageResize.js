"use strict";
// ------------- Global Variables ---------------- //
let clickStarted = false;
// ------------- End of Global Variables ---------------- //

// --- service worker ---
/* в консоли
navigator.serviceWorker.getRegistrations().then(regs => {
	regs.forEach(r => r.unregister());
});

navigator.serviceWorker.controller

navigator.serviceWorker.getRegistrations().then(console.log)
*/
if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("/serviceWorker.js", { scope: "/" })
	.then(function (registration) {

		console.log("[SW] registered");
		registration.update();
		navigator.serviceWorker.ready.then(function (registration) {
			if (registration.active) console.log("[SW] ready, state:", registration.active.state);
			if (registration.waiting) console.log("[SW] ready, state:", registration.waiting.state);
			if (registration.installing) console.log("[SW] ready, state:", registration.installing.state);
		});

		registration.addEventListener("updatefound", function () {
			console.log("[SW] update found");
			const newWorker = registration.installing;
			if (!newWorker) {
				console.log("[SW] missing worker installing");
				return;
			}

			newWorker.addEventListener("statechange", function () {
				console.log("[SW] state:", newWorker.state);
				if (newWorker.state === "installed") {
					if (navigator.serviceWorker.controller) {
						console.log("[SW] updated");
					}
					else {
						console.log("[SW] installed first time");
					}
				}
				if (newWorker.state === "activated") {
					console.log("[SW] activated");
				}
			});
		});
	})
	.catch(function (error) {
		console.log("[SW] registration failed:", error);
	});
}

// --- tab navigation ---
function keyboardClick(event, el) {
	el.dispatchEvent(new MouseEvent('click', {
		bubbles: true,
		cancelable: true,
		ctrlKey: event.ctrlKey,
		shiftKey: event.shiftKey,
		altKey: event.altKey,
		metaKey: event.metaKey
	}));
	if (typeof el.onmouseleave === 'function') el.onmouseleave();
}

function getClickable() {
	const el = document.activeElement;
	if (!el || el.disabled) return null;
	if (el.matches('input, textarea, select') || el.isContentEditable) return null;
	if (!el.matches('button, a, [role="button"], [tabindex]:not([tabindex="-1"])')) return null;
	return el;
}

document.addEventListener('keydown', e => {
	const el = getClickable();
	if (!el) return;
	if (e.key === ' ') {
		e.preventDefault();
		return;
	}
	if (e.key === 'Enter') {
		e.preventDefault();
		if (!e.repeat) keyboardClick(e, el);
	}
});

document.addEventListener('keyup', e => {
	if (e.key !== ' ') return;
	const el = getClickable();
	if (!el) return;
	keyboardClick(e, el);
});

// --- back/forward processing ---
function handleBackForward() {
	clickStarted = false;
	const ev = new PointerEvent('pointerleave');
	document.querySelectorAll(
		'[id^="menu_"],[id^="flag_"],[id^="sortby_"],[id^="feed_"],[id^="contents_"]'
	).forEach(el => {
		el.dispatchEvent(ev);
	});
}

window.addEventListener('pageshow', function (event) {
	const navEntries = performance.getEntriesByType("navigation");
	const nav = navEntries && navEntries.length ? navEntries[0] : null;
	const isBackForward = (nav && nav.type === "back_forward") ||
						(performance.navigation && performance.navigation.type === 2) ||
						event.persisted;
	if (isBackForward) {
		handleBackForward();
	}
});

window.addEventListener('popstate', function () {
	handleBackForward();
});

// --- preload ---
function logIfCachingComplete(state, images) {
	if (state.loaded + state.failed >= images.length) {
		console.log(
			`[SW] ${state.source} caching complete.`,
			`loaded - ${state.loaded}/${images.length},`,
			`failed - ${state.failed}/${images.length},`,
			`duration - ${Date.now() - state.startTime}ms.`
		);
	}
}

function loadNextCacheImage(state, images) {

	state.index++;
	if (state.index >= images.length) return;
	const imgSrc = images[state.index];

	let img = new Image();
	img.onload = function () {
		state.loaded++;
		logIfCachingComplete(state, images);
		loadNextCacheImage(state, images);
	};

	img.onerror = function () {
		state.failed++;
		logIfCachingComplete(state, images);
		loadNextCacheImage(state, images);
	};
	img.src = imgSrc;
}

function preloadImagesGeneral() {

	if (!("serviceWorker" in navigator)) return;

	const images = [
	
		...["date_black","date_blue","date_green","date_red","date_selected","date_white",
		"flag_black","flag_blue","flag_green","flag_red","flag_selected","flag_white",
		"name_black","name_blue","name_green","name_red","name_selected","name_white"]
			.map(f => `/scripts/contents/icons/sortby_${f}.svg`),
			
		...["","_avi","_doc","_mp4","_odp","_odt", "_pdf","_ppt","_txt","_wmv"]
			.map(f => `/cv/icons/google_drive${f}.svg`),
			
		...["angola","antigua","argentina","aruba","australia","austria","bahrain","belgium","bosnia",
		"botswana","brazil","brunei","bulgaria","burkina_faso","burundi","cambodia","cameroon",
		"canada","chad","chile","china","colombia","congo","costa_rica","croatia","cuba","cyprus",
		"czech","denmark","dominican-rep","east_timor","ecuador","egypt","el_salvador","england",
		"equatorial_guinea","eritrea","estonia","ethiopia","finland","france","georgia","germany",
		"ghana","greece","greenland","grenada","guam","guyana","haiti","honduras","hong_kong",
		"hungary","iceland","indonesia","iran","iraq","ireland","israel","italy","jamaica","japan",
		"jordan","kazakhstan","kenya","kiribati","kuwait","kyrgyzstan","laos","latvia","lebanon",
		"lesotho","liberia","libya","liechtenstein","lithuania","luxembourg","macao","macedonia",
		"madagascar","malawi","malaysia","malta","marshall_islands","mauritania","mauritius","mexico",
		"micronesia","monaco","montenegro","morocco","namibia","nepal","netherlands","new_zealand",
		"nicaragua","niger","nigeria","north_mariana_islands","north_korea","norway","olympics","oman",
		"pakistan","palau","panama","papua_new_guinea","paraguay","peru","philippines","poland","portugal",
		"puerto_rico","qatar","romania","russia","rwanda","samoa","sanmarino","sao_tome_and_principe",
		"saudi_arabia","scotland_1","scotland_2","senegal","serbia","singapore","slovakia","slovenia",
		"solomon_islands","somalia","south_africa","south_korea","spain","spqr","sri_lanka","st_lucia",
		"sudan","sweden","switzerland","syria","taiwan","tanzania","thailand","togo","tokelau","tonga",
		"trinidad_and_tobago","tunisia","turkey","turkmenistan","tuvalu","uae","ukraine","ulster",
		"united_kingdom","uruguay","usa","ussr","vatican","venezuela","virgin_islands","wales",
		"yugoslavia","afghanistan","aland","albania","algeria","american_samoa"]
			.map(f => `/lang/all/${f}.gif`),

		...["generate","information","information_red","logout","replace","replace_minus","replace_plus",
		"resize_folder_images","resize_image", "search"]
			.map(f => `/images/icons/html_editor/${f}.svg`),

		...["api_icon","attribution","build","copyright","link","loading","loading_red","mailto","mailto_red","rss_icon","tips"]
			.map(f => `/images/icons/feed/${f}.svg`),
		...["artemis","cbs_news","nasa_worm","space_com","wired","yahoo_news","yonhap_news"]
			.map(f => `/images/icons/feed/${f}_logo.svg`),
		...["mercopress","phys_org"]
			.map(f => `/images/icons/feed/${f}_logo.png`),
		...["error.jpg","no_image.png"]
			.map(f => `/images/icons/error/${f}`),

		...["action_adventure","action_horror","amv","ancient_rome","anekdots","animation",
		"arnold_schwarzenegger","audio_video_processing","body_horror","book",
		"bruce_willis","card","chanson","chupacabra","data_processing","disco","drawing",
		"dystopia","einstein","energy_drinks","evil","falsifiability","gotham_city",
		"guitar","guitar_electronic","heffalump","historical_fiction","html_editor",
		"hyperspace","ide","ireland","jason_statham","junk","language_select",
		"links","matrix","metal","michael_douglas","middle_ages","milla_jovovich",
		"mockbuster","national","news","photos","pop","post_apocalyptic",
		"programming_languages","psychedelic","psychology","punk","puzzle","racing",
		"rap","reggae","rock","rpg","satan_symbols","satanism_atheistic",
		"satanism_theistic","short","simulation","sitcom","site_map","space_opera",
		"sssr","star_trek","sticky_note","strategy","stuff","succubus","superhero",
		"sylvester_stallone","text_processing","totalitarianism","usa_ussr","viking",
		"vin_diesel","warlock","wicca","work"]
			.map(f => `/images/icons/background/${f}.png`),

		...["background/brick_wall.jpg","styles/sunshine2_3.gif","colors.gif", "urmas.jpg"]
			.map(f => `/images/icons/${f}`)

	];

	if (images.length === 0) return;

	navigator.serviceWorker.ready.then(() => {
		console.log("[SW] general images caching started");
		const state = {
			index: -1,
			loaded: 0,
			failed: 0,
			startTime: Date.now(),
			source: "general images"
		};
		for (let i = 0; i < Math.min(images.length, 5); i++) { // 5 images at once
			loadNextCacheImage(state, images);
		}
	});
}

// --- Listerners ---
document.addEventListener("DOMContentLoaded", () => {
	let page = window.location.pathname;
	if (page == "/" || page == "/index.html") return;
	document.body.addEventListener("pointerover", (event) => {
		const topEl = document.elementFromPoint(event.clientX, event.clientY);
		if (topEl === document.body) {
			hideSubMenu();
		}
	});
	document.body.addEventListener("pointerdown", (event) => {
		if (event.target === document.body) hideSubMenu();
	});

	// for amv only
	if (page.startsWith("/amv")) {
		const lang = document.documentElement.lang;
		if (lang == "ru") {
			processPageResize('rus');
		} else if (lang == "en")  {
			processPageResize('eng');
		} else if (lang == "la")  {
			processPageResize('lat');
		} else {
			processPageResize();
		}
	}
});

window.addEventListener('resize', function(event) {
	processPageResize();
});
screen.orientation.addEventListener('change', function(event) {
	processPageResize();
});

// --- isMobile ---
function isMobile() {
	return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
}
function isTouchDevice() {
	return (
		'ontouchstart' in window ||
		navigator.maxTouchPoints > 0
	);
}
function hasHover() {
	return window.matchMedia('(hover: hover)').matches;
}
function isMobileLike() {
    return isMobile() || (isTouchDevice() && !hasHover());
}

// --- additional functions ---
function getScrollbarWidth(el) {
	if (!el || isTouchDevice()) return 0;
	return el.offsetWidth - el.clientWidth;
}
function getScrollbarHeight(el) {
	if (!el || isTouchDevice()) return 0;
	return el.offsetHeight - el.clientHeight;
}
function getViewportWidth() {
	if (isTouchDevice()) return Math.max(document.documentElement.clientWidth, window.innerWidth);
	return (window.visualViewport?.width) || document.documentElement.clientWidth || window.innerWidth;
}
function getViewportHeight() {
	if (isTouchDevice()) return Math.max(document.documentElement.clientHeight, window.innerHeight);
	return (window.visualViewport?.height) || document.documentElement.clientHeight || window.innerHeight;
}

function getScrollDivOffset(){
/*
	let newImg = new Image();
	newImg.src = "images/icons/urmas.jpg";
	let hImgHeight = newImg.height;
	let hImgWidth = newImg.width;
*/
	let hImgWidth = 851;
	let hImgHeight = 315;
	hImgHeight = hImgHeight*(1000/hImgWidth);
	return hImgHeight + 65 + getScrollbarHeight(document.body); // 65
}

// --- adjust scrolldiv ---
function adjustScrollDiv(){
	let scrollDiv = document.getElementById('scrollDiv');

	if (isTouchDevice()) {
		scrollDiv.style.minHeight = menuHeight + "px";
		scrollDiv.style.height = "100%";
		return;
	}

	// some bug
	let additIntend = 0;
	if (Math.abs(window.devicePixelRatio - 1.1) < 0.0001) additIntend =-1;

	scrollDiv.style.minHeight = (menuHeight + additIntend) + "px";
	scrollDiv.style.maxHeight = Math.max(getViewportHeight() - getScrollDivOffset(), menuHeight + additIntend) + "px";
	scrollDiv.style.height = "100%";

	let page = window.location.pathname;
	if (page.startsWith("/about_me")) {
		let informationDiv = document.getElementById('information_div');
		informationDiv.style.right = (getScrollbarWidth(scrollDiv) + 6) + 'px';
	}
}

// --- axios error ---
function logData(caption, data, maxLength = 100) {
	console.log(caption);

	const truncate = value => {
		if (typeof value === "string" && value.length > maxLength) {
			return value.slice(0, maxLength) + "… [" + value.length + " chars]";
		}
		return value;
	};

	if (data instanceof FormData) {
		for (const [key, value] of data.entries()) {
			if (value instanceof File) {
				console.log(
					`  ${key}: [File]`,
					`${value.name} (${value.type || "unknown"}, ${value.size} bytes)`
				);
			} else {
				console.log(`  ${key}:`, truncate(value));
			}
		}
		return;
	}

	if (typeof data === "object" && data !== null) {
		Object.entries(data).forEach(([key, value]) => {
			console.log(`  ${key}:`, truncate(value));
		});
	} else {
		console.log("  ", data);
	}
}

function consoleAxiosError(error, description) {
	const config = error.config || {};
	const response = error.response || {};

	const method = (config.method || "GET").toUpperCase();

	const baseURL = config.baseURL || "";
	const url = config.url ? decodeURIComponent(config.url) : "";

	const getData =
		config.params && Object.keys(config.params).length > 0
			? config.params
			: "(no GET params)";

	let fullURL = baseURL + url;
	if (config.params) {
		const queryString = new URLSearchParams(config.params).toString();
		if (queryString) {
			fullURL += (fullURL.includes("?") ? "&" : "?") + queryString;
		}
	}

	let postData = "(none)";
	if (typeof config.data !== "undefined") postData = config.data;

	let message =
		"%cAJAX ERROR ["
		+ method
		+ " | "
		+ (response?.status
				? "Status " + response.status
				: error.message)
		+ (typeof description !== "undefined"
			? " | " + description
			: "")
		+ "]";

	console.groupCollapsed(
		message,
		"color:red;font-weight:bold"
	);

	console.log("URL:", fullURL);

	if (method === "GET" || getData !== "(no GET params)") {
		logData("GET params:", getData);
	}

	if (method !== "GET") {
		logData("POST data:", postData);
	}

	console.log("Error Code:", error.code || "(none)");
	console.log("Error Message:", error.message);
	console.log("Response:", response.data || "(none)");

	const headers = response.headers || {};
	if (headers["x-php-error"]) {
		console.log("=== PHP Error Details ===");
		console.log("Message:", decodeURIComponent(headers["x-php-message"] || "(none)"));
		console.log("File:", decodeURIComponent(headers["x-php-file"] || "(none)"));
		console.log("Line:", headers["x-php-line"] || "(none)");
		console.log("Complete PHP log:",
			window.location.origin + "/html_editor_rus.html?pattern=scripts/php/logs/errors.log");
		console.log("==================");
	}

	const stack = new Error().stack;
	if (stack) {
		console.log("=== JavaScript Call Stack ===");
		console.log(stack);
		console.log("==================");
	}

	console.groupEnd();
}

// --- html editor menu corr ---
function checkMenu6() {
	let menu6 = document.getElementById('menu_6');
	if (menu6) {
		const disableMenu6 = title => {
			if (menu6.dataset.menuDisabled) return;
			menu6.setAttribute("title", title);
			menu6.dataset.ttcolor = "blue";
			menu6.innerHTML =
				"<s style='text-decoration: line-through; text-decoration-thickness: 2px;'>" +
				menu6.innerHTML.trim() +
				"</s>";
			menu6.dataset.menuDisabled = "true";
		}
		if (isMobile()) {
			disableMenu6(t("htmlEditorIsNotSupported"));
		} else {
			axios.get("scripts/php/checkPHP.php")
			.then(
				response => {
					const data = response.data;
					if (String(data).startsWith("<?")) {
						disableMenu6(
							t("phpIsNotSupported") +
							window.location.hostname +
							t("htmlEditorIsNotFunctioning")
						);
					}
				},
				error => {
					consoleAxiosError(error);
					disableMenu6(
						t("phpIsNotSupported") +
						window.location.hostname +
						t("htmlEditorIsNotFunctioning")
					);
				}
			);
		}
	}
}

// --- pageResize ---
function processPageResize(lang, isInit = true) {
	if (!lang) isInit = false;

	let scrollDiv = document.getElementById('scrollDiv');
	let page = window.location.pathname;
	if (isInit) {
		changeLanguage(lang); // i18next
		if (!(page.startsWith("/about_me") || page.startsWith("/news") || page.startsWith("/site_map") || 	page.startsWith("/html_editor"))) {
			requestIdleCallback(() => {
				preloadImagesGeneral();
			});
		}
		checkMenu6();
	}

	if (scrollDiv != null) {
		if (!isInit) {
			if (page.startsWith("/news")) {
				let feedTable = document.getElementById('feedtable');
				if (feedTable != null && feedTable.innerHTML != "") adjustFeedScrollDiv();
			} else if (page.startsWith("/site_map")) {
				let contentsTable = document.getElementById('contentstable');
				if (contentsTable != null && contentsTable.innerHTML != "") adjustContentsScrollDiv();
			} else {
				adjustScrollDiv();
			}
		} else {
			if (!(page.startsWith("/html_editor") || page.startsWith("/site_map") || page.startsWith("/news"))) {
				adjustScrollDiv();
			}
		}
	}
	if (page.startsWith("/html_editor") && !isInit) {
		let textArea = document.getElementById('textarea_area');
		if (textArea != null && textArea.value != "") adjustTextarea();
	}

	if (!isMobile()) {
		const imageWidth = (document.documentElement.clientWidth - 1000) / 2;
		let imgBg = document.getElementById("imgBg");
		let imgBgStar = document.getElementById("imgBgStar");
		if (!imgBg) {
			imgBg = document.createElement("img");
			imgBg.setAttribute('id', 'imgBg');
			imgBg.setAttribute('src', imgBgSrc);
			imgBg.setAttribute('style', 'position: fixed; bottom: 0px; left: 0px;');
			if (page != "/" && page != "/index.html") {
				imgBg.addEventListener("pointerenter", () => hideSubMenu());
			}
			document.body.appendChild(imgBg);
		}

		if (!imgBgStar) {
			imgBgStar = document.createElement("img");
			imgBgStar.setAttribute('id', 'imgBgStar');
			imgBgStar.setAttribute('src', imgBgStarSrc);
			imgBgStar.setAttribute('style', 'position: fixed; top: 0px; right: 0px;');
			if (page != "/" && page != "/index.html") {
				imgBgStar.addEventListener("pointerenter", () => hideSubMenu());
			}
			document.body.appendChild(imgBgStar);
		}
		if (imageWidth >= 50) {
			imgBg.style.display="block";
			imgBg.style.width=imageWidth+"px";
			imgBgStar.style.display="block";
			if (imageWidth < 300 / window.devicePixelRatio) {
				imgBgStar.style.width=imageWidth+"px";
			} else {
				imgBgStar.style.width=300 / window.devicePixelRatio+"px";
			}
		} else {
			imgBg.style.display="none";
			imgBgStar.style.display="none";
		}
	}
}
