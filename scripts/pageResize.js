"use strict";

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
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function getScrollbarWidth(el) {
	if (!el || isMobile()) return 0;
	return el.offsetWidth - el.clientWidth;
}

function getScrollbarHeight(el) {
	if (!el || isMobile()) return 0;
	return el.offsetHeight - el.clientHeight;
}

function getViewportWidth() {
	return (window.visualViewport?.width) || document.documentElement.clientWidth || window.innerWidth;
}

function getViewportHeight() {
	return (window.visualViewport?.height) || document.documentElement.clientHeight || window.innerHeight;
}

function zoomCorr() {
	var menu1 = document.getElementById("menu_1");
	return menu1.getBoundingClientRect().height/23;
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

	if (isMobile()) {
		scrollDiv.style.minHeight = menuHeight + "px";
		scrollDiv.style.height = "100%";
		return;
	}

	scrollDiv.style.minHeight = (getViewportHeight() - getScrollDivOffset()) * zoomCorr() + "px";
	scrollDiv.style.height = menuHeight * zoomCorr() + "px";

	var pathname = window.location.pathname;
	if (pathname.substr(0, 9) == "/about_me") {
		var informationDiv = document.getElementById('information_div');
		informationDiv.style.right = (getScrollbarWidth(scrollDiv) + 5) + 'px';
	}
}

function adjustScrollDiv(){
	if (typeof galleria2 !== 'undefined') {
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
			if (e.key === 'ArrowUp') {
				scrollDiv.scrollBy({ top: -step, behavior });
				e.preventDefault();
			} else if (e.key === 'ArrowDown') {
				scrollDiv.scrollBy({ top: step, behavior });
				e.preventDefault();
			}
		}

		if (e.key === 'ArrowLeft') {
			scrollDiv.scrollBy({ left: -step, behavior });
			e.preventDefault();
		} else if (e.key === 'ArrowRight') {
			scrollDiv.scrollBy({ left: step, behavior });
			e.preventDefault();
		} else if (e.shiftKey && e.key === 'ArrowUp') {
			scrollDiv.scrollBy({ left: -step, behavior });
			e.preventDefault();
		} else if (e.shiftKey && e.key === 'ArrowDown') {
			scrollDiv.scrollBy({ left: step, behavior });
			e.preventDefault();
		}

		if (!e.shiftKey) {
			if (e.key === 'PageUp') {
				scrollDiv.scrollBy({ top: -pageStep, behavior });
				e.preventDefault();
			} else if (e.key === 'PageDown') {
				scrollDiv.scrollBy({ top: pageStep, behavior });
				e.preventDefault();
			}
		} else {
			if (e.key === 'PageUp') {
				scrollDiv.scrollBy({ left: -pageStep, behavior });
				e.preventDefault();
			} else if (e.key === 'PageDown') {
				scrollDiv.scrollBy({ left: pageStep, behavior });
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

function processPageResize(isLoad, orientationChanged){
	if (typeof isLoad === "undefined") var isLoad = 1;
	if (typeof orientationChanged === "undefined") var orientationChanged = 0;

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
		if (typeof textArea !== 'undefined' && textArea != null && textArea.value != "") adjustTextareaAndEncodings();
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
		setIframes();
	}
}

function setIframes() {
	const iframes = document.getElementsByTagName("iframe");
	for (const iframe of iframes) {
		iframe.src = iframe.dataset.src;
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
