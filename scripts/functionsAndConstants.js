"use strict";

function getParameterByName(name) {
	return new URLSearchParams(window.location.search).get(name);
}

function mouseOutTab(tabType, feedTypeL, col = "red") {
	if (clickStarted) return;
	if (feedTypeL==tabType) {
		if (document.getElementById("feed_"+tabType)) document.getElementById("feed_"+tabType).className = "menu_selected";
		if (document.getElementById("contents_"+tabType)) document.getElementById("contents_"+tabType).className = "menu_selected";
	} else {
		if (document.getElementById("feed_"+tabType)) document.getElementById("feed_"+tabType).className = "menu_not_selected_"+col;
		if (document.getElementById("contents_"+tabType)) document.getElementById("contents_"+tabType).className = "menu_not_selected_"+col;
	}
}

function formatDate(date = Date.now(), lang = "eng") {

	let mydate = new Date(date);

	let day = mydate.getDate();
	let month = mydate.getMonth();
	let dayEnding = "";
	let dayMonthSep = " ";

	if (lang == "eng") {
		month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][month];
		dayEnding = "th";
		if (day == 1 || day == 21 || day == 31) dayEnding = "st";
		if (day == 2 || day == 22) dayEnding = "nd";
		if (day == 3 || day == 23) dayEnding = "rd";
		dayMonthSep = " of ";
	}

	if (lang == "lat") {
		month = ["Ian","Feb","Mar","Apr","Mai","Iun","Iul","Aug","Sep","Oct","Nov","Dec"][month];
	}

	if (lang == "rus") {
		month = ["Янв","Фев","Мар","Апр","Мая","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"][month];
		dayEnding = "е";
	}

	let out =
		("0" + day).slice(-2) +
		dayEnding +
		dayMonthSep +
		month +
		", " +
		mydate.getFullYear() +
		", " +
		("0" + mydate.getHours()).slice(-2) +
		":" +
		("0" + mydate.getMinutes()).slice(-2) +
		":" +
		("0" + mydate.getSeconds()).slice(-2) +
		" UTC";

	let offset = -mydate.getTimezoneOffset() / 60;

	if (offset > 0) out += "+" + offset;
	if (offset < 0) out += offset;

	return out;
}

function formatBytes(bytes) {
	const units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
	let unit = units[0];

	for (let i = 1; i < units.length; i++) {
		if (bytes < 1000) break;
		bytes /= 1000;
		unit = units[i];
	}

	return Number(bytes.toFixed(2)) + " " + unit;
}

function splitAllSpaces(str) {
	return str
		.split(/(?:\s+|&(?:nbsp|ensp|emsp|thinsp|hairsp|MediumSpace|ThickSpace|VeryThinSpace|NoBreak|puncsp);|&#(?:32|160|8192|8193|8194|8195|8196|8197|8198|8199|8200|8201|8202|8239|8287|12288);|&#x(?:20|A0|2000|2001|2002|2003|2004|2005|2006|2007|2008|2009|200A|202F|205F|3000);)/giu)
		.filter(Boolean)
		.map(escapeHtml);
}

function escapeHtml(text) {
	return text
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;");
}

function extractSummaryWords(html) {
	
	const doc = DOMPurify.sanitize(html, {
		FORBID_TAGS: ["figure", "img"],
		RETURN_DOM: true
	});
	const lines = [];
	const paragraphs = doc.querySelectorAll("p");
	const elements = paragraphs.length ? paragraphs : [doc];

	elements.forEach(el => {
		el.textContent
			.replaceAll("\\n", "\n")
			.split("\n")
			.forEach(line => {
				line = line.trim();
				if (line) lines.push(line);
			});
	});

	if (!lines.length) return [];
	if (lines.length === 1) return splitAllSpaces(lines[0]);

	const result = [];
	const paragraphIndent = "<br><span style='padding-left:10px;'><span>";
	lines.forEach((line, index) => {
		const words = splitAllSpaces(line);
		if (words.length && index > 0) words[0] = paragraphIndent + words[0];
		result.push(...words);
	});
	return result;
}

function getScrollDivOffset(){
/*
	let newImg = new Image();
	newImg.src = "images/icons/urmas.jpg";
	let hImgHeight = newImg.height;
	let hImgWidth = newImg.width;
*/

	const hImgWidth = 851;
	const hImgHeight = 315 *(1000/hImgWidth);
	return hImgHeight + 65 + getScrollbarHeight(document.body); // 65
}

function getLocalStorageData(par) {
	if (typeof localStorage[par] === "undefined") {
		return {};
	} else {
		return JSON.parse(localStorage[par]);
	}
}

function removeUnusedCacheAndUpdates(source, type, result, updates) {
	const key = `${source}_${type}_updates`;
	updates = updates ?? getLocalStorageData(key);
	const links = new Set(result.entries.map(entry => entry.link));
	const unusedImages = new Set();
	for (const link in updates) {
		if (!links.has(link)) {
			const imageUrl = updates[link]?.media?.url;
			if (imageUrl) unusedImages.add(imageUrl);
			delete updates[link];
		}
	}

	if (source == "artemis" || source == "cbs" || (source == "nasa" && type != "image") || source == "yonhap") {
		localStorage[key] = JSON.stringify(updates);
	}

	// Remove unused images from Service Worker Cache
	if (unusedImages.size && "serviceWorker" in navigator) {
		navigator.serviceWorker.ready.then(registration => {

			// saving updates used for image storage only
			if (source == "merco" || (source=="nasa" && type=="image") || source == "phys.org") {
				let hasNewUpdate = false;
				for (let i = 0; i < result.entries.length; i++) {
					const link = result.entries[i].link;
					if (!link || updates[link]) continue;
					const updateNew = {};
					updateNew.media = {};
					updateNew.media.url = result.entries[i].media.url;
					updates[link] = updateNew;
					hasNewUpdate = true;
				}
				if (hasNewUpdate) localStorage[key] = JSON.stringify(updates);
			}

			if (!registration.active) return;
			// Find images that are no longer used
			const usedImages = new Set();
			for (const link in updates) {
				const imageUrl = updates[link]?.media?.url;
				if (imageUrl) usedImages.add(imageUrl);
			}
			const imagesToDelete = [...unusedImages].filter(
				url => !usedImages.has(url)
			);
			if (imagesToDelete.length) {
				registration.active.postMessage({
					type: "DELETE_CACHED_IMAGES",
					urls: imagesToDelete
				});
			}
		});
	}
}


// =========================================================
// ALGORITHM GENERAL
// =========================================================

function typeSummary(span, words_arr, wordsCount, isExpanding, onComplete) {
	const wordsLength = words_arr.length;
	const count = wordsLength - wordsCount;
	if (count <= 0) { onComplete?.(); return; }
	const step = Math.max(1, count / 100);
	let iteration = 0;
	const timer = setInterval(() => {
		iteration++;
		const current = isExpanding
			? Math.min(wordsCount + Math.ceil(step * iteration), wordsLength)
			: Math.max(wordsLength - Math.ceil(step * iteration), wordsCount);
		span.innerHTML = formatSummary(words_arr, current);
		if (step > 1) {
			span.scrollIntoView({ block: "end", behavior: "instant", container: "nearest" });
		}
		if ((isExpanding && current >= wordsLength) || (!isExpanding && current <= wordsCount)) {
			clearInterval(timer);
			onComplete?.();
		}
	}, 0);
}

function createSpan(element, col) {
	const span = document.createElement('span');
	span.setAttribute('class', "text_" + col);
	span.style.overflowWrap = "anywhere";
	element.appendChild(span);
	return span;
}

function formatSummary(words_arr, wordsCount) {
	return words_arr.slice(0, wordsCount).join(" ");
}

// ---------------------------------------------------------
// Algorithm 1
// Stable option using getClientRects.
// ---------------------------------------------------------

function formatSummaryWithProbe(checkedWordsCount, words_arr, wordsCount) {
	const probeOpen = '<span class="summary_word_probe">';
	const probeClose = '</span>';

	if (!checkedWordsCount) {
		return probeOpen +
			formatSummary(words_arr, wordsCount) +
			probeClose;
	}

	if (wordsCount <= checkedWordsCount) {
		return formatSummary(words_arr, wordsCount);
	}

	return formatSummary(words_arr, checkedWordsCount) + " " +
		probeOpen +
		words_arr.slice(checkedWordsCount, wordsCount).join(" ") +
		probeClose;
}

function getLineInfoIncremental(probesLive, lines, linesToShow, isBinary = false) {
	
	if (probesLive.length === 0) {
		return {
			fitsLinesToShow: lines.size <= linesToShow,
			fitsLinesToShowM1: lines.size <= linesToShow - 1
		};
	}
	
	const newLines = new Set();

	if (!isBinary || probesLive.length > 1) {
		for (const rect of probesLive[0].getClientRects()) {
			const top = round(rect.top, 3);
			if (rect.height <= 0) continue;
			if (lines.has(top) || newLines.has(top)) continue;

			newLines.add(top);

			if (lines.size + newLines.size > linesToShow) {
				return {
					fitsLinesToShow: false,
					fitsLinesToShowM1: false
				};
			}
		}
	}

	const expansionLines = new Set();

	if (isBinary) {
		const expansionSpan = probesLive[probesLive.length - 1];

		for (const rect of expansionSpan.getClientRects()) {
			const top = round(rect.top, 3);
			if (rect.height <= 0) continue;
			if (lines.has(top) || newLines.has(top)) continue;

			expansionLines.add(top);

			if (lines.size + newLines.size + expansionLines.size > linesToShow) {
				return {
					fitsLinesToShow: false,
					fitsLinesToShowM1: false
				};
			}
		}
	}

	for (const top of newLines) {
		lines.add(top);
	}

	const totalLines = lines.size + expansionLines.size;

	return {
		fitsLinesToShow: totalLines <= linesToShow,
		fitsLinesToShowM1: totalLines <= linesToShow - 1
	};
}

function modifySummary(element, words_arr, linesToShow = 4, col = "red") {
	const wordsLength = words_arr.length;
	if (!wordsLength) {
		return true;
	}

	const span = createSpan(element, col);
	// one word only
	if (wordsLength === 1) {
		span.innerHTML = words_arr[0];
		return true;
	}

	// ---------------------------------------------------------
	// Init.
	// ---------------------------------------------------------

	let wordsCount = 1;
	// Binary search bound.
	let left = 1;
	let checkedWordsCount = 0;
	const lines = new Set();
	const probesLive = element.getElementsByClassName("summary_word_probe");
	
	// ---------------------------------------------------------
	// Estimate the likely result.
	// ---------------------------------------------------------
	let current = Math.min(linesToShow * 10, wordsLength);

	// ---------------------------------------------------------
	// Exponential search.
	// ---------------------------------------------------------

	while (true) {
		span.innerHTML = formatSummaryWithProbe(checkedWordsCount, words_arr, current);
		const result = getLineInfoIncremental(probesLive, lines, linesToShow);
		if (!result.fitsLinesToShow) {
			break;
		}
		checkedWordsCount = current;
		wordsCount = current;
		if (result.fitsLinesToShowM1) {
			left = current;
		}
		// The entire summary fits.
		if (current === wordsLength) {
			span.innerHTML = formatSummary(words_arr, current);
			return true;
		}
		current = Math.min(current * 2, wordsLength);
	}

	// ---------------------------------------------------------
	// Add expansion link.
	// ---------------------------------------------------------

	const expansionSpan = document.createElement("span");
	expansionSpan.setAttribute("class", "standardb_" + col + " summary_word_probe");
	let isExpanded = false;
	let isAnimating = false;
	expansionSpan.onclick = function () {
		if (isAnimating) return;
		isAnimating = true;
		isExpanded = !isExpanded;
		this.textContent = isExpanded ? "[▲]" : "[▼]";
		typeSummary(span, words_arr, wordsCount, isExpanded, () => { isAnimating = false; });
	};
	expansionSpan.textContent = "[▼]";
	element.append(document.createTextNode(" "), expansionSpan);

	// ---------------------------------------------------------
	// Binary search bounds.
	// ---------------------------------------------------------

	let right = current - 1;

	// ---------------------------------------------------------
	// Binary search.
	// ---------------------------------------------------------

	while (left <= right) {
		const middle = Math.floor((left + right) / 2);
		if (middle < checkedWordsCount) {
			checkedWordsCount = 0;
			lines.clear();
		}
		span.innerHTML = formatSummaryWithProbe(checkedWordsCount, words_arr, middle);
		const result = getLineInfoIncremental(probesLive, lines, linesToShow, true);
		if (result.fitsLinesToShow) {
			checkedWordsCount = middle;
			wordsCount = middle;
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}
	
	// ---------------------------------------------------------
	// Final setup.
	// ---------------------------------------------------------
	
	span.innerHTML = formatSummary(words_arr, wordsCount);
	return false;
}

// =========================================================
// OTHER ALGORITHMS
// =========================================================

function getLineHeight(span) {
	const marker = document.createElement("span");
	marker.style.display = "inline-block";
	marker.textContent = "\u200B";
	span.appendChild(marker);
	const lineHeight = marker.getBoundingClientRect().height;
	marker.remove();
	return lineHeight || 17;
}

// ---------------------------------------------------------
// Algorithm 2
// Simple option using single pointer (sensitive to scroll anchoring).
// ---------------------------------------------------------

function getLineInfo(pointer, startLineTop, lineHeight, linesToShow) {
	const currentLineBottom = pointer.getBoundingClientRect().bottom;
	const linesCount = Math.round((currentLineBottom - startLineTop) / lineHeight);
	return {
		fitsLinesToShow: linesCount <= linesToShow,
		fitsLinesToShowM1: linesCount <= linesToShow - 1
	};
}

function modifySummary2(element, words_arr, linesToShow = 4, col = "red") {
	const wordsLength = words_arr.length;
	if (!wordsLength) {
		return true;
	}

	const span = createSpan(element, col);

	// one word only
	if (wordsLength === 1) {
		span.innerHTML = words_arr[0];
		return true;
	}

	// ---------------------------------------------------------
	// Init.
	// ---------------------------------------------------------

	let wordsCount = 1;
	// Binary search bound.
	let left = 1;
	
	const lineHeight = getLineHeight(span);
	const pointer = document.createElement("span");
	pointer.textContent = "\u200B";
	element.append(pointer);
	const startLineTop = pointer.getBoundingClientRect().top;

	// ---------------------------------------------------------
	// Estimate the likely result.
	// ---------------------------------------------------------
	let current = Math.min(linesToShow * 10, wordsLength);
	
	// ---------------------------------------------------------
	// Exponential search.
	// ---------------------------------------------------------

	while (true) {
		span.innerHTML = formatSummary(words_arr, current);
		const result = getLineInfo(pointer, startLineTop, lineHeight, linesToShow);
		if (!result.fitsLinesToShow) {
			break;
		}
		wordsCount = current;
		if (result.fitsLinesToShowM1) {
			left = current;
		}
		// The entire summary fits.
		if (current === wordsLength) {
			pointer.remove();
			return true;
		}
		current = Math.min(current * 2, wordsLength);
	}

	// ---------------------------------------------------------
	// Add expansion link.
	// ---------------------------------------------------------

	const expansionSpan = document.createElement("span");
	expansionSpan.setAttribute("class", "standardb_" + col);
	let isExpanded = false;
	let isAnimating = false;
	expansionSpan.onclick = function () {
		if (isAnimating) return;
		isAnimating = true;
		isExpanded = !isExpanded;
		this.textContent = isExpanded ? "[▲]" : "[▼]";
		typeSummary(span, words_arr, wordsCount, isExpanded, () => { isAnimating = false; });
	};
	expansionSpan.textContent = "[▼]";
	pointer.replaceWith(document.createTextNode(" "), expansionSpan);

	// ---------------------------------------------------------
	// Binary search bounds.
	// ---------------------------------------------------------

	let right = current - 1;

	// ---------------------------------------------------------
	// Binary search.
	// ---------------------------------------------------------

	while (left <= right) {
		const middle = Math.floor((left + right) / 2);
		span.innerHTML = formatSummary(words_arr, middle);
		const result = getLineInfo(expansionSpan, startLineTop, lineHeight, linesToShow);
		if (result.fitsLinesToShow) {
			wordsCount = middle;
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}

	// ---------------------------------------------------------
	// Final setup.
	// ---------------------------------------------------------
	
	span.innerHTML = formatSummary(words_arr, wordsCount);
	return false;
}

// ---------------------------------------------------------
// Algorithm 3
// Simple option using element height.
// ---------------------------------------------------------

function getElementLineInfo(element, lineHeight, linesToShow) {
	const measureHeight = element.getBoundingClientRect().height;
	const linesCount = Math.round(measureHeight / lineHeight);
	return {
		fitsLinesToShow: linesCount <= linesToShow,
		fitsLinesToShowM1: linesCount <= linesToShow - 1
	};
}

function modifySummary3(element, words_arr, linesToShow = 4, col = "red") {
	const wordsLength = words_arr.length;
	if (!wordsLength) {
		return true;
	}

	const span = createSpan(element, col);

	// one word only
	if (wordsLength === 1) {
		span.innerHTML = words_arr[0];
		return true;
	}
	
	// ---------------------------------------------------------
	// Init.
	// ---------------------------------------------------------

	let wordsCount = 1;
	// Binary search bound.
	let left = 1;

	const lineHeight = getLineHeight(span);
	const initialHeight = element.getBoundingClientRect().height;
	const initialLines = Math.round(initialHeight / lineHeight);
	linesToShow = Math.max(linesToShow, initialLines);

	// ---------------------------------------------------------
	// Estimate the likely result.
	// ---------------------------------------------------------

	let current = Math.min(linesToShow * 10, wordsLength);

	// ---------------------------------------------------------
	// Exponential search.
	// ---------------------------------------------------------

	while (true) {
		span.innerHTML = formatSummary(words_arr, current);
		const result = getElementLineInfo(element, lineHeight, linesToShow);
		if (!result.fitsLinesToShow) {
			break;
		}
		wordsCount = current;
		if (result.fitsLinesToShowM1) {
			left = current;
		}
		// The entire summary fits.
		if (current === wordsLength) {
			return true;
		}
		current = Math.min(current * 2, wordsLength);
	}

	// ---------------------------------------------------------
	// Add expansion link.
	// ---------------------------------------------------------

	const expansionSpan = document.createElement("a");
	expansionSpan.setAttribute("class", "standardb_" + col);
	let isExpanded = false;
	let isAnimating = false;
	expansionSpan.onclick = function () {
		if (isAnimating) return;
		isAnimating = true;
		isExpanded = !isExpanded;
		this.textContent = isExpanded ? "[▲]" : "[▼]";
		typeSummary(span, words_arr, wordsCount, isExpanded, () => {
			isAnimating = false;
		});
	};
	expansionSpan.textContent = "[▼]";
	element.append(document.createTextNode(" "), expansionSpan);

	// ---------------------------------------------------------
	// Binary search bounds.
	// ---------------------------------------------------------

	let right = current - 1;

	// ---------------------------------------------------------
	// Binary search.
	// ---------------------------------------------------------

	while (left <= right) {
		const middle = Math.floor((left + right) / 2);
		span.innerHTML = formatSummary(words_arr, middle);
		const result = getElementLineInfo(element, lineHeight, linesToShow);
		if (result.fitsLinesToShow) {
			wordsCount = middle;
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}

	// ---------------------------------------------------------
	// Final setup.
	// ---------------------------------------------------------

	span.innerHTML = formatSummary(words_arr, wordsCount);
	return false;
}
