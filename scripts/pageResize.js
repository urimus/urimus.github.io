"use strict";
// ------------- Global Variables ---------------- //
var preloadCacheGl = {};
var clickStarted = false;
// ------------- End of Global Variables ---------------- //


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
function preloadImages() {
	const sortbyIcons = [
		"date_black","date_blue","date_green","date_red","date_selected","date_white",
		"flag_black","flag_blue","flag_green","flag_red","flag_selected","flag_white",
		"name_black","name_blue","name_green","name_red","name_selected","name_white"
	].map(f => `/scripts/contents/icons/sortby_${f}.svg`);

	const flags = [
		"angola","antigua","argentina","aruba","australia","austria","bahrain","belgium","bosnia",
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
		"yugoslavia","afghanistan","aland","albania","algeria","american_samoa"
	].map(f => `/lang/all/${f}.gif`);

	const htmlEditorIcons = [
		"generate","information","information_red","logout","replace","replace_minus","replace_plus",
		"resize_folder_images","resize_image", "search"
	].map(f => `/images/icons/html_editor/${f}.svg`);

	const feedIcons = [
		"build","copyright","feed_icon","mailto","mailto_red","tips"
	].map(f => `/images/icons/feed/${f}.svg`);
	const feedLogos = [
		"artemis","cbs_news","nasa_worm","space_com","wired","yahoo_news","yonhap_news"
	].map(f => `/images/icons/feed/${f}_logo.svg`);
	const feedImages = [
		"loading.gif","phys_org_logo.png","video.jpg"
	].map(f => `/images/icons/feed/${f}`);

	const backgrounds = [
		"action_adventure","action_horror","amv","ancient_rome","anekdots","animation",
		"arnold_schwarzenegger","audio_video_processing","body_horror","book",
		"bruce_willis","card","chanson","chupacabra","data_processing","disco","drawing",
		"dystopia","einstein","energy_drinks","evil","falsifiability","gotham_city",
		"guitar","guitar_electronic","heffalump","historical_fiction","html_editor",
		"hyperspace","ide","industrial","ireland","jason_statham","junk","language_select",
		"links","matrix","metal","michael_douglas","middle_ages","milla_jovovich",
		"mockbuster","national","news","not_video","photos","pop","post_apocalyptic",
		"programming_languages","psychedelic","psychology","punk","puzzle","racing",
		"rap","reggae","rock","rpg","satan_symbols","satanism_atheistic",
		"satanism_theistic","short","simulation","sitcom","site_map","space_opera",
		"sssr","star_trek","sticky_note","strategy","stuff","succubus","superhero",
		"sylvester_stallone","text_processing","totalitarianism","usa_ussr","viking",
		"vin_diesel","warlock","wicca","work"
	].map(f => `/images/icons/background/${f}.png`);

	const images = [...sortbyIcons, ...flags, ...htmlEditorIcons, ...feedIcons, ...feedLogos, ...feedImages, ...backgrounds];

	for (let imgSrc of images) {
		if (!preloadCacheGl[imgSrc]) {
			const img = new Image();
			img.src = imgSrc;
			preloadCacheGl[imgSrc] = img;
		}
	}
}

// --- Listerners ---
document.addEventListener("DOMContentLoaded", () => {
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
	if (window.location.pathname.substr(0, 4) == "/amv") document.body.onload();
});

window.addEventListener('resize', function(event) {
	processPageResize(0);
});
screen.orientation.addEventListener('change', function(event) {
	processPageResize(0, 1);
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
	var newImg = new Image();
	newImg.src = "images/icons/urmas.jpg";
	var hImgHeight = newImg.height;
	var hImgWidth = newImg.width;
*/
	var hImgWidth = 851;
	var hImgHeight = 315;
	hImgHeight = hImgHeight*(1000/hImgWidth);
	return hImgHeight + 65 + getScrollbarHeight(document.body); // 65
}

// --- adjust scrolldiv ---
function adjustScrollDiv(){
	var scrollDiv = document.getElementById('scrollDiv');

	if (isTouchDevice()) {
		scrollDiv.style.minHeight = menuHeight + "px";
		scrollDiv.style.height = "100%";
		return;
	}

	// some bug
	var additIntend = 0;
	if (Math.abs(window.devicePixelRatio - 1.1) < 0.0001) additIntend =-1;

	scrollDiv.style.minHeight = (menuHeight + additIntend) + "px";
	scrollDiv.style.maxHeight = Math.max(getViewportHeight() - getScrollDivOffset(), menuHeight + additIntend) + "px";
	scrollDiv.style.height = "100%";

	var pathname = window.location.pathname;
	if (pathname.substr(0, 9) == "/about_me") {
		var informationDiv = document.getElementById('information_div');
		informationDiv.style.right = (getScrollbarWidth(scrollDiv) + 5) + 'px';
	}
}

// --- news keys scroll ---
function enableKeyboardScroll(scrollDiv) {
	let cells = Array.from(scrollDiv.querySelectorAll('tr:first-child td, tr:first-child th'));
	let scrollCellIndex = 0;
	let lastDirection = null;
	let prevScrollLeft = scrollDiv.scrollLeft;
	let lastDevicePixelRatio = window.devicePixelRatio;
	let cellSizes = cells.map(cell => ({
		left: cell.offsetLeft,
		width: cell.offsetWidth,
		center: cell.offsetLeft + cell.offsetWidth / 2
	}));
	let isKeyboardScrolling = false;

	const updateCells = () => {
		cells = Array.from(scrollDiv.querySelectorAll('tr:first-child td, tr:first-child th'));
		cells.forEach(cell => resizeObserver.observe(cell));
		cellSizes = cells.map(cell => ({
			left: cell.offsetLeft,
			width: cell.offsetWidth,
			center: cell.offsetLeft + cell.offsetWidth / 2
		}));
		scrollCellIndex = Math.max(0, Math.min(scrollCellIndex, cells.length - 1));
	};

	const updateScrollCellIndex = () => {
		const scrollLeft = scrollDiv.scrollLeft;
		const isHorizontalScroll = scrollLeft !== prevScrollLeft;
		if (!isHorizontalScroll) return;
		if (isKeyboardScrolling || !cellSizes.length) {
			prevScrollLeft = scrollLeft;
			return;
		}
		const scrollCenter = scrollLeft + scrollDiv.clientWidth / 2;
		let closest = 0;
		let best = Infinity;
		for (let i = 0; i < cellSizes.length; i++) {
			const d = Math.abs(cellSizes[i].center - scrollCenter);
			if (d < best) {
				best = d;
				closest = i;
			}
		}
		scrollCellIndex = Math.max(0, Math.min(closest, cells.length - 1));
		prevScrollLeft = scrollLeft;
		
		const zoomDetected = lastDevicePixelRatio !== window.devicePixelRatio;
		if (zoomDetected) lastDevicePixelRatio = window.devicePixelRatio;
		lastDirection = lastDirection !== "pointer" && zoomDetected ? "zoom" : "pointer";
	};

	const scrollToCell = (direction, repeat) => {
		if (!cells.length || !direction) return;
		const atLeftEdge = scrollCellIndex === 0;
		const atRightEdge = scrollCellIndex === cells.length - 1;
		if (!lastDirection || lastDirection === direction || lastDirection === "zoom" || atLeftEdge || atRightEdge) {
			scrollCellIndex = direction === 'right'
				? Math.min(cells.length - 1, scrollCellIndex + 1)
				: Math.max(0, scrollCellIndex - 1);
		}
		lastDirection = direction;
		const clientWidth = scrollDiv.clientWidth;
		let target = direction === 'right'
			? cellSizes[scrollCellIndex].left
			: cellSizes[scrollCellIndex].left + cellSizes[scrollCellIndex].width - clientWidth;
		target = Math.max(0, Math.min(target, scrollDiv.scrollWidth - clientWidth));
		if (target != scrollDiv.scrollLeft) {
			isKeyboardScrolling = true;
			scrollDiv.scrollTo({ left: target, behavior: repeat ? 'auto' : 'smooth' });
		}
	};

	const stepY = () => scrollDiv.clientHeight;

	new MutationObserver(updateCells).observe(scrollDiv, { childList: true, subtree: true });
	const resizeObserver = new ResizeObserver(updateCells);
	window.addEventListener('resize', updateCells);

	scrollDiv.addEventListener('scroll', updateScrollCellIndex);
	scrollDiv.addEventListener('scrollend', () => {
		const scrollLeft = scrollDiv.scrollLeft;
		const isHorizontalScroll = scrollLeft !== prevScrollLeft;
		if (isHorizontalScroll) return;

		if (!isKeyboardScrolling) prevScrollLeft = scrollLeft;
		isKeyboardScrolling = false;
		
	});

	document.addEventListener('keydown', (e) => {
		if (['ArrowRight', 'ArrowLeft'].includes(e.key)) {
			if (e.shiftKey) {
				isKeyboardScrolling = true;
				scrollDiv.scrollBy({ top: e.key === 'ArrowRight' ? stepY() : -stepY(), behavior: 'smooth' });
			} else {
				scrollToCell(e.key === 'ArrowRight' ? 'right' : 'left', e.repeat);
			}
			e.preventDefault();
		} else if (e.key === 'Home') {
			scrollCellIndex = 0;
			lastDirection = null;
			isKeyboardScrolling = true;
			scrollDiv.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
			e.preventDefault();
		} else if (e.key === 'End') {
			scrollCellIndex = cells.length - 1;
			lastDirection = null;
			isKeyboardScrolling = true;
			scrollDiv.scrollTo({ top: scrollDiv.scrollHeight, left: scrollDiv.scrollWidth, behavior: 'smooth' });
			e.preventDefault();
		}
	});
}

// --- html editor menu corr ---
function checkMenu6(lang) {
	var menu6 = document.getElementById('menu_6');
	if (menu6) {
		if (isMobile()) {
			menu6.setAttribute("title", t("htmlEditorIsNotSupported"));
			menu6.dataset.ttcolor = "blue";
			menu6.innerHTML = "<s style='text-decoration: line-through; text-decoration-thickness: 2px;'>" + menu6.innerHTML.trim() + "</s>";
		} else {
			$.ajax({
				url: "scripts/php/checkPHP.php",
				success: function(data) {
					if (data.substring(0, 2) == "<?") {
						menu6.setAttribute("title", t("phpIsNotSupported") + window.location.hostname + t("htmlEditorIsNotFunctioning"));
						menu6.dataset.ttcolor = "blue";
						menu6.innerHTML = "<s style='text-decoration: line-through; text-decoration-thickness: 2px;'>" + menu6.innerHTML.trim() + "</s>";
					}
				}
			});
		}
	}
}

// --- pageResize ---
function processPageResize(isLoad = 1, orientationChanged = 0, lang) {

	if (isLoad == 1) { 
		changeLanguage(lang); // i18next
		preloadImages(); // preloadImages
		checkMenu6(lang); // correct HTML Editor menu
	}

	var scrollDiv = document.getElementById('scrollDiv');
	if (typeof scrollDiv !== 'undefined' && scrollDiv != null) {
		if (isLoad == 0) {
			if (window.location.pathname.substr(0, 5) == "/news") {
				var feedTable = document.getElementById('feedtable');
				if (feedTable != null && feedTable.innerHTML != "") adjustFeedScrollDiv();
			} else if (window.location.pathname.substr(0, 7) == "/index_") {
				var contentsTable = document.getElementById('contentstable');
				if (contentsTable != null && contentsTable.innerHTML != "") adjustContentsScrollDiv();
			} else {
				adjustScrollDiv();
			}
		} else {
			if (!(window.location.pathname.substr(0, 12) == "/html_editor" || window.location.pathname.substr(0, 7) == "/index_" || window.location.pathname.substr(0, 5) == "/news")) {
				adjustScrollDiv();
			} else if (window.location.pathname.substr(0, 5) == "/news") {
				enableKeyboardScroll(scrollDiv);
			}
		}
	}
	if (window.location.pathname.substr(0, 12) == "/html_editor" && isLoad == 0) {
		var textArea = document.getElementById('textarea_area');
		if (textArea != null && textArea.value != "") adjustTextarea();
	}
	if (!isMobile()) {
		const layoutWidth = document.documentElement.clientWidth;
		var imageWidth = (layoutWidth - 1000) / 2;

		var imgBg = document.getElementById("imgBg");
		if (!imgBg) {
			imgBg = document.createElement("img");
			imgBg.setAttribute('id', 'imgBg');
			imgBg.setAttribute('src', imgBgSrc);
			imgBg.setAttribute('style', 'position: fixed; bottom: 0px; left: 0px;');
			imgBg.addEventListener("pointerenter", () => hideSubMenu());
			document.body.appendChild(imgBg);
		}
		var imgBgStar = document.getElementById("imgBgStar");
		if (!imgBgStar) {
			imgBgStar = document.createElement("img");
			imgBgStar.setAttribute('id', 'imgBgStar');
			imgBgStar.setAttribute('src', imgBgStarSrc);
			imgBgStar.setAttribute('style', 'position: fixed; top: 0px; right: 0px;');
			imgBgStar.addEventListener("pointerenter", () => hideSubMenu());
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

// --- interval funcs ---
function flashText() {
	var ele2;
	if (document.getElementsByClassName("blinking_text")) {
		ele2 = document.getElementsByClassName("blinking_text");
		for (var i = 0; i < ele2.length; i++) {
			if (typeof ele2[i].dataset.value === 'undefined') {
				var newOp = Math.floor(Math.random() * 11) / 10.0;
				var dir = Math.floor(Math.random() * 2);
				if (dir == 0) ele2[i].dataset.value = newOp - 0.1;
				if (dir == 1) ele2[i].dataset.value = newOp + 0.1;
				ele2[i].style.opacity = newOp;
			} else {
				if (ele2[i].style.opacity == 0.0) {
					ele2[i].dataset.value = 0.0;
					ele2[i].style.opacity = 0.1;
				} else if (ele2[i].style.opacity == 1.0) {
					ele2[i].dataset.value = 1.0;
					ele2[i].style.opacity = 0.9;
				} else {
					if (ele2[i].style.opacity > ele2[i].dataset.value) {
						ele2[i].dataset.value = ele2[i].style.opacity;
						ele2[i].style.opacity = parseFloat(ele2[i].style.opacity) + 0.1;
					}
					if (ele2[i].style.opacity < ele2[i].dataset.value) {
						ele2[i].dataset.value = ele2[i].style.opacity;
						ele2[i].style.opacity = parseFloat(ele2[i].style.opacity) - 0.1;
					}
				}
			}
		}
	}
}

function loading() {
	var ele2, ele;
	if (document.getElementById("loadingDiv")) {
		if ($("#loadingDiv").text().slice(-1) == ".") $("#loadingDiv").text($("#loadingDiv").text() + ".");
		if ($("#loadingDiv").text().slice(-6) == "......") $("#loadingDiv").text($("#loadingDiv").text().slice(0, -5));
	}
	if (document.getElementsByClassName("loadingDiv")) {
		ele2 = document.getElementsByClassName("loadingDiv");
		for (var i = 0; i < ele2.length; i++) {
			ele = ele2[i];
			if (ele.innerText.slice(-1) == ".") ele.innerText = ele.innerText + ".";
			if (ele.innerText.slice(-6) == "......") ele.innerText = ele.innerText.slice(0, -5);
		}
	}
}

function animatedText() {
	var ele2, text, fontStPos, fontStEndPos, fontEndPos, textBeforeFont, textInFont, textAfterFont, newHightlightpos, text2, newAnimatedtext;
	if (document.getElementsByClassName("animatedText")) {
		ele2 = document.getElementsByClassName("animatedText");
		for (var i = 0; i < ele2.length; i++) {
			text = ele2[i].innerHTML;
			fontStPos = text.indexOf("<font");
			fontStEndPos = text.indexOf(">", fontStPos);
			fontEndPos = text.indexOf("</font>");
			textBeforeFont = text.substr(0, fontStPos);
			textInFont = text.substr(fontStEndPos + 1, 1);
			textAfterFont = text.substr(fontEndPos + 7);
			newHightlightpos = fontStPos + 1;
			if (fontEndPos == text.length - 7) newHightlightpos = 0;
			text2 = ele2[i].innerText;
			newAnimatedtext = text2.substr(0, newHightlightpos) + '<font color="#ff8a00">' + text2.substr(newHightlightpos, 1) + "</font>" + text2.substr(newHightlightpos + 1);
			ele2[i].innerHTML = newAnimatedtext;
		}
	}
}

setInterval(function() { loading(); }, 500);
setInterval(function() { animatedText(); }, 250);
setInterval(function() { flashText(); }, 50);
