"use strict";
// ------------- Global Variables ---------------- //
var preloadCacheGl = {};
var clickStarted = false;
// ------------- End of Global Variables ---------------- //

function keyboardClick(event) {
	const el = event.target.closest('[tabindex], button, a, [role="button"]');
	if (!el || el.disabled) return;

	if (el.matches('input, textarea, select') || el.isContentEditable) return;

	event.preventDefault();

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

document.addEventListener('keydown', e => {
	if (e.key === 'Enter') keyboardClick(e);
});

document.addEventListener('keyup', e => {
	if (e.key === ' ') keyboardClick(e);
});


window.addEventListener('pageshow', function () {
	clickStarted = false;
	const ev = new MouseEvent('mouseleave');
	document.querySelectorAll(
		'[id^="menu_"],[id^="flag_"],[id^="sortby_"],[id^="feed_"],[id^="contents_"]'
	).forEach(el => {
		el.dispatchEvent(ev);
	});
});


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

	const images = [...sortbyIcons, ...flags];

	for (let imgSrc of images) {
		if (!preloadCacheGl[imgSrc]) {
			const img = new Image();
			img.src = imgSrc;
			preloadCacheGl[imgSrc] = img;
		}
	}
}

function checkIfHideSubMenu(event) {
	var target = getTarget(event);
	if (typeof target !== "undefined" && (target.tagName=="BODY" || target.id=="imgBg" || target.id=="imgBgStar")) {
		hideSubMenu();
	}
}

function getTarget(event) {
	var el = event.target || event.srcElement;
	return el.nodeType == 1 ? el : el.parentNode;
}

window.addEventListener('resize', function(event) {
	processPageResize(0);
});
screen.orientation.addEventListener('change', function(event) {
	processPageResize(0, 1);
});

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
	return hImgHeight + 68 + getScrollbarHeight(document.body); // 68
}

function adjustScrollDiv2(){
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

function adjustScrollDiv(){
	if (window.Galleria) {
		Galleria.ready(function() { adjustScrollDiv2(); });
	} else {
		adjustScrollDiv2();
	}
}



function enableKeyboardScroll(scrollDiv) {

	var stepRepeat = 0;
	var stepNoRepat = 474;
	var pageStep = scrollDiv.clientHeight;

	document.addEventListener('keydown', (e) => {

		var behavior;
		var step;
		if (e.repeat) {
			behavior = 'auto';
			stepRepeat += 10;
			step = stepRepeat;
		} else {
			behavior = 'smooth';
			stepRepeat  = 0;
			step = stepNoRepat;
		}

		if (!e.shiftKey) {
			if (e.key === 'ArrowLeft') {
				scrollDiv.scrollBy({ left: -step, behavior });
				e.preventDefault();
			} else if (e.key === 'ArrowRight') {
				scrollDiv.scrollBy({ left: step, behavior });
				e.preventDefault();
			} 
		} else {
			if (e.key === 'ArrowLeft') {
				scrollDiv.scrollBy({ top: -step, behavior });
				e.preventDefault();
			} else if (e.key === 'ArrowRight') {
				scrollDiv.scrollBy({ top: step, behavior });
				e.preventDefault();
			}
		}

		if (e.key === 'Home') {
			scrollDiv.scrollTo({ top: 0, left: 0, behavior });
			e.preventDefault();
		} else if (e.key === 'End') {
			scrollDiv.scrollTo({ top: scrollDiv.scrollHeight, left: scrollDiv.scrollWidth, behavior });
			e.preventDefault();
		}
	});
}

function checkMenu6(lang) {
	var menu6 = document.getElementById('menu_6');
	if (menu6) {
		var menu6Title;
		if (isMobile()) {
			if (lang=="eng" || lang=="lat") {
				menu6Title = "HTML Editor is not Supported for Mobile Devices";
			}
			if (lang=="rus") {
				menu6Title = "HTML Редактор не Поддерживается на Мобильных Устройствах";
			}
			menu6.setAttribute("title", menu6Title);
			menu6.dataset.ttcolor = "blue";
			menu6.innerHTML = "<s style='text-decoration: line-through; text-decoration-thickness: 2px;'>" + menu6.innerHTML.trim() + "</s>";
		} else {
			$.ajax({
				url: "scripts/php/checkPHP.php",
				success: function(data) {
					if (data.substring(0, 2) == "<?") {
						if (lang=="eng" || lang=="lat") {
							menu6Title = "PHP is not Supported at "+window.location.hostname+", HTML Editor is not Functioning";
						}
						if (lang=="rus") {
							menu6Title = "PHP не Поддерживается в "+window.location.hostname+", HTML Редактор не Функционирует";
						}
						menu6.setAttribute("title", menu6Title);
						menu6.dataset.ttcolor = "blue";
						menu6.innerHTML = "<s style='text-decoration: line-through; text-decoration-thickness: 2px;'>" + menu6.innerHTML.trim() + "</s>";
					}
				}
			});
		}
	}
}

function processPageResize(isLoad = 1, orientationChanged = 0, lang) {

	if (isLoad == 1) { 
		preloadImages(); // preloadImages
		checkMenu6(lang); // correct HTML Editor menu
	}

	var scrollDiv = document.getElementById('scrollDiv');
	if (typeof scrollDiv !== 'undefined' && scrollDiv != null) {
		if (isLoad == 0) {
			if (window.location.pathname.substr(0, 5) == "/news") {
				var feedTable = document.getElementById('feedtable');
				if (typeof feedTable !== 'undefined' && feedTable != null && feedTable.innerHTML != "") adjustFeedScrollDiv();
			} else if (window.location.pathname.substr(0, 7) == "/index_") {
				var contentsTable = document.getElementById('contentstable');
				if (typeof contentsTable !== 'undefined' && contentsTable != null && contentsTable.innerHTML != "") adjustContentsScrollDiv();
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
		if (typeof textArea !== 'undefined' && textArea != null && textArea.value != "") adjustTextarea();
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
			document.body.appendChild(imgBg);
		}
		var imgBgStar = document.getElementById("imgBgStar");
		if (!imgBgStar) {
			imgBgStar = document.createElement("img");
			imgBgStar.setAttribute('id', 'imgBgStar');
			imgBgStar.setAttribute('src', imgBgStarSrc);
			imgBgStar.setAttribute('style', 'position: fixed; top: 0px; right: 0px;');
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

	if (window.location.pathname.substr(0, 4) == "/amv" && isLoad == 1) {
		const iframes = document.getElementsByTagName("iframe");
		for (const iframe of iframes) {
			iframe.src = iframe.dataset.src;
		}
	}
}

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
