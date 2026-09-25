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

function detectBomCheckSoFar(bytes) {
	if (typeof bytes[1] !== 'undefined') {
		if (bytes[0]=="fe" && bytes[1]=="ff") return 2;
		if (bytes[0]=="ff" && bytes[1]=="fe") return 2;
		if (bytes[0]=="ff" && bytes[1]=="d8") return 2;
	} 
	if (typeof bytes[2] !== 'undefined') {
		if (bytes[0]=="ef" && bytes[1]=="bb" && bytes[2]=="bf") return 3;
		if (bytes[0]=="f7" && bytes[1]=="64" && bytes[2]=="4c") return 3;
		if (bytes[0]=="0e" && bytes[1]=="fe" && bytes[2]=="ff") return 3;
		if (bytes[0]=="fb" && bytes[1]=="ee" && bytes[2]=="28") return 3;
	}
	if (typeof bytes[3] !== 'undefined') {
		if (bytes[0]=="00" && bytes[1]=="00" && bytes[2]=="fe" && bytes[3]=="ff") return 4;
		if (bytes[0]=="ff" && bytes[1]=="fe" && bytes[2]=="00" && bytes[3]=="00") return 4;
		if (bytes[0]=="2b" && bytes[1]=="2f" && bytes[2]=="76" && bytes[3]=="38") return 4;
		if (bytes[0]=="2b" && bytes[1]=="2f" && bytes[2]=="76" && bytes[3]=="39") return 4;
		if (bytes[0]=="2b" && bytes[1]=="2f" && bytes[2]=="76" && bytes[3]=="2b") return 4;
		if (bytes[0]=="2b" && bytes[1]=="2f" && bytes[2]=="76" && bytes[3]=="2f") return 4;
		if (bytes[0]=="dd" && bytes[1]=="73" && bytes[2]=="66" && bytes[3]=="73") return 4;
		if (bytes[0]=="84" && bytes[1]=="31" && bytes[2]=="95" && bytes[3]=="33") return 4;
	}
	if (typeof bytes[4] !== 'undefined') {
		if (bytes[0]=="2b" && bytes[1]=="2f" && bytes[2]=="76" && bytes[3]=="38" && bytes[4]=="2d") return 5;
	}
	return 0;
}

function splitAllSpaces(str) {
	return str
		.split(/(?:\s+|&(?:nbsp|ensp|emsp|thinsp|hairsp|MediumSpace|ThickSpace|VeryThinSpace|NoBreak|puncsp);|&#(?:32|160|8192|8193|8194|8195|8196|8197|8198|8199|8200|8201|8202|8239|8287|12288);|&#x(?:20|A0|2000|2001|2002|2003|2004|2005|2006|2007|2008|2009|200A|202F|205F|3000);)/giu)
		.filter(Boolean);
}


// =========================================================
// ALGORITHM GENERAL
// =========================================================

function typeSummary(span, words_arr, wordsCount, isExpanding, onComplete) {
	const wordsLength = words_arr.length;
	const count = wordsLength - wordsCount;
	if (!count) { onComplete?.(); return; }

	const step = Math.max(1, Math.ceil(count / 100));

	let current;
	if (isExpanding) {
		current = Math.min(wordsCount + step, wordsLength);
	} else {
		current = Math.max(wordsLength - step, wordsCount);
	}
	span.innerHTML = formatSummary(words_arr, current);
	if (count <= step) { onComplete?.(); return; }

	const timer = setInterval(() => {
		if (isExpanding) {
			current = Math.min(current + step, wordsLength);
		} else {
			current = Math.max(current - step, wordsCount);
		}
		span.innerHTML = formatSummary(words_arr, current);
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

function getLineHeight(span) {
	span.innerHTML = '<span style="display:inline-block">&#8203;</span>';
	const lineHeight = span.firstElementChild.offsetHeight;
	span.innerHTML = "";
	return lineHeight || 17;
}

function formatSummary(words_arr, wordsCount, addSpace = true) {
	return words_arr.slice(0, wordsCount).join(" ") + (addSpace ? " " : "");
}

function isApprox(top1, top2, tolerance = 2) {
	return Math.abs(top1 - top2) < tolerance;
}

// ---------------------------------------------------------
// Algorithm 1
// ---------------------------------------------------------

function getLineInfo(element, linesToShow) {
	const range = document.createRange();
	range.selectNodeContents(element);
	const rects = range.getClientRects();
	const lines = new Set();
	for (const rect of rects) {
		if (!lines.has(rect.top)) {
			lines.add(rect.top);
			if (lines.size > linesToShow) {
				return {
					fitsLinesToShow: false,
					fitsLinesToShowM1: false
				};
			}
		}
	}
	return {
		fitsLinesToShow: true,
		fitsLinesToShowM1: lines.size <= linesToShow - 1
	};
}

function modifySummary(element, words_arr, col = "blue", linesToShow = 4) {
	const wordsLength = words_arr.length;
	if (!wordsLength) return true;

	const span = createSpan(element, col);
	// one word only
	if (wordsLength === 1) {
		span.innerHTML = words_arr[0];
		return true;
	}

	// ---------------------------------------------------------
	// Estimate the likely result.
	// ---------------------------------------------------------

	const lineHeight = getLineHeight(span);
	const pointer = document.createElement("a");
	element.appendChild(pointer);
	const startLineTop = pointer.offsetTop;

	const estimatedResult = Math.min(linesToShow * 10, wordsLength);
	span.innerHTML = formatSummary(words_arr, estimatedResult, false);
	let currentLineTop = pointer.offsetTop;
	const estimatedLines = Math.max(1, Math.round((currentLineTop - startLineTop) / lineHeight) + 1);
	pointer.remove();
	
	if (estimatedLines <= linesToShow && estimatedResult === wordsLength) {
		return true;
	}

	// ---------------------------------------------------------
	// Init.
	// ---------------------------------------------------------

	let wordsCount = 1;
	let current = estimatedResult;
	// Binary search bound.
	let left = 1;

	// ---------------------------------------------------------
	// Exponential search.
	// ---------------------------------------------------------

	while (true) {
		span.innerHTML = formatSummary(words_arr, current, false);
		const result = getLineInfo(element, linesToShow);
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

	const expansionA = document.createElement("a");
	expansionA.setAttribute("href", "javascript:void(0);");
	expansionA.setAttribute("class", "standardb_" + col);
	let isExpanded = false;
	let isAnimating = false;
	expansionA.onclick = function () {
		if (isAnimating) return;
		isAnimating = true;
		isExpanded = !isExpanded;
		this.innerHTML = isExpanded ? "[▲]" : "[▼]";
		typeSummary(span, words_arr, wordsCount, isExpanded, () => { isAnimating = false; });
		col === "red" ? adjustFeedScrollDiv() : adjustScrollDiv();
	};
	expansionA.innerHTML = "[▼]";
	element.appendChild(expansionA);

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
		const result = getLineInfo(element, linesToShow);
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

// =========================================================
// OTHER ALGORITHMS
// =========================================================

// ---------------------------------------------------------
// Algorithm 2
// ---------------------------------------------------------

function formatSummaryWithPointers(pointerTops, words_arr, wordsCount) {
	const pointersClass = "summary_word_pointer";

	if (!pointerTops.length) {
		return '<span class="' + pointersClass + '"></span>' +
			words_arr
				.slice(0, wordsCount)
				.map(word => {
					return word + '<span class="' + pointersClass + '"></span>';
				})
				.join(" ");
	}

	const currentWordsCount = pointerTops.length - 1;
	if (wordsCount <= currentWordsCount) return formatSummary(words_arr, wordsCount, false);

	return formatSummary(words_arr, currentWordsCount) +
		words_arr
			.slice(currentWordsCount, wordsCount)
			.map(word => {
				return word + '<span class="' + pointersClass + '"></span>';
			})
			.join(" ");
}

function getWordsCount(pointers, pointerTops, linesToShow, lineHeight, current) {
	
	pointerTops.push(...Array.from(pointers, p => p.offsetTop));

	let linesCount = Math.max(1, Math.round((pointerTops[1] - pointerTops[0]) / lineHeight) + 1);
	let wordsCount = 1;
	let wordsCountM1 = 1;
	let previousTop = pointerTops[1];

	for (let i = 2; i <= current; i++) {
		const top = pointerTops[i];
		if (!isApprox(top, previousTop)) {
			linesCount += Math.max(1, Math.round((top - previousTop) / lineHeight));
			previousTop = top;
		}
		if (linesCount > linesToShow) return { wordsCount, wordsCountM1 };
		wordsCount = i;
		if (linesCount <= linesToShow - 1) {
			wordsCountM1 = i;
		}
	}
	return { wordsCount, wordsCountM1 };
}

function modifySummary2(element, words_arr, col = "blue", linesToShow = 4) {
	const wordsLength = words_arr.length;
	if (!wordsLength) return true;

	const span = createSpan(element, col);

	// one word only
	if (wordsLength === 1) {
		span.innerHTML = words_arr[0];
		return true;
	}
	const lineHeight = getLineHeight(span);

	// ---------------------------------------------------------
	// Estimate the likely result, faster than if to use Exponential search.
	// ---------------------------------------------------------

	const pointer = document.createElement("a");
	element.appendChild(pointer);
	const startLineTop = pointer.offsetTop;

	const estimatedResult = Math.min(linesToShow * 10, wordsLength);
	span.innerHTML = formatSummary(words_arr, estimatedResult, false);
	let currentLineTop = pointer.offsetTop;
	const estimatedLines = Math.max(1, Math.round((currentLineTop - startLineTop) / lineHeight) + 1);
	pointer.remove();
	
	if (estimatedLines <= linesToShow && estimatedResult === wordsLength) {
		return true;
	}

	// ---------------------------------------------------------
	// Init.
	// ---------------------------------------------------------

	let wordsCount = 1;
	let current = estimatedResult;
	let pointerTops = [];
	let result;
	const pointersLive = span.getElementsByClassName("summary_word_pointer");
	
	// ---------------------------------------------------------
	// Exponential search.
	// ---------------------------------------------------------

	while (true) {
		span.innerHTML = formatSummaryWithPointers(pointerTops, words_arr, current);
		result = getWordsCount(pointersLive, pointerTops, linesToShow, lineHeight, current);
		if (result.wordsCount < current) break;
		if (current === wordsLength) {
			span.innerHTML = formatSummary(words_arr, wordsLength, false);
			return true;
		}
		current = Math.min(current * 2, wordsLength);
	}

	// ---------------------------------------------------------
	// Binary search bounds.
	// ---------------------------------------------------------

	let left = result.wordsCountM1;
	let right = current - 1;

	// ---------------------------------------------------------
	// Binary search.
	// ---------------------------------------------------------

	while (left <= right) {
		const middle = Math.floor((left + right) / 2);
		span.innerHTML = formatSummaryWithPointers(pointerTops, words_arr, middle);
		result = getWordsCount(pointersLive, pointerTops, linesToShow, lineHeight, middle);
		if (result.wordsCount >= middle) {
			wordsCount = middle;
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}

	// ---------------------------------------------------------
	// Add expansion link.
	// ---------------------------------------------------------

	span.innerHTML = formatSummary(words_arr, wordsCount);
	const expansionA = document.createElement("a");
	expansionA.setAttribute("href", "javascript:void(0);");
	expansionA.setAttribute("class", "standardb_" + col);
	let isExpanded = false;
	let isAnimating = false;
	expansionA.onclick = function () {
		if (isAnimating) return;
		isAnimating = true;
		isExpanded = !isExpanded;
		this.innerHTML = isExpanded ? "[▲]" : "[▼]";
		typeSummary(span, words_arr, wordsCount, isExpanded, () => { isAnimating = false; });
		col === "red" ? adjustFeedScrollDiv() : adjustScrollDiv();
	};
	expansionA.innerHTML = "[▼]";
	element.appendChild(expansionA);

	// ---------------------------------------------------------
	// Final setup.
	// ---------------------------------------------------------

	const lastLineTop = pointerTops[wordsCount];

	if (!isApprox(expansionA.offsetTop, lastLineTop)) {
		while (wordsCount > 1) {
			wordsCount--;
			span.innerHTML = formatSummary(words_arr, wordsCount);
			if (isApprox(expansionA.offsetTop, lastLineTop)) {
				break;
			}
		}
	}
	
	return false;
}


function modifySummary2NoEst(element, words_arr, col = "blue", linesToShow = 4) {
	const wordsLength = words_arr.length;
	if (!wordsLength) return true;

	const span = createSpan(element, col);

	// one word only
	if (wordsLength === 1) {
		span.innerHTML = words_arr[0];
		return true;
	}
	const lineHeight = getLineHeight(span);

	// ---------------------------------------------------------
	// Init.
	// ---------------------------------------------------------

	let wordsCount = 1;
	let current = Math.min(linesToShow * 10, wordsLength);
	let pointerTops = [];
	let result;
	const pointersLive = span.getElementsByClassName("summary_word_pointer");
	
	// ---------------------------------------------------------
	// Exponential search.
	// ---------------------------------------------------------

	while (true) {
		span.innerHTML = formatSummaryWithPointers(pointerTops, words_arr, current);
		result = getWordsCount(pointersLive, pointerTops, linesToShow, lineHeight, current);
		if (result.wordsCount < current) break;
		if (current === wordsLength) {
			span.innerHTML = formatSummary(words_arr, wordsLength, false);
			return true;
		}
		current = Math.min(current * 2, wordsLength);
	}

	// ---------------------------------------------------------
	// Binary search bounds.
	// ---------------------------------------------------------

	let left = result.wordsCountM1;
	let right = current - 1;

	// ---------------------------------------------------------
	// Binary search.
	// ---------------------------------------------------------

	while (left <= right) {
		const middle = Math.floor((left + right) / 2);
		span.innerHTML = formatSummaryWithPointers(pointerTops, words_arr, middle);
		result = getWordsCount(pointersLive, pointerTops, linesToShow, lineHeight, middle);
		if (result.wordsCount >= middle) {
			wordsCount = middle;
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}

	// ---------------------------------------------------------
	// Add expansion link.
	// ---------------------------------------------------------

	span.innerHTML = formatSummary(words_arr, wordsCount);
	const expansionA = document.createElement("a");
	expansionA.setAttribute("href", "javascript:void(0);");
	expansionA.setAttribute("class", "standardb_" + col);
	let isExpanded = false;
	let isAnimating = false;
	expansionA.onclick = function () {
		if (isAnimating) return;
		isAnimating = true;
		isExpanded = !isExpanded;
		this.innerHTML = isExpanded ? "[▲]" : "[▼]";
		typeSummary(span, words_arr, wordsCount, isExpanded, () => { isAnimating = false; });
		col === "red" ? adjustFeedScrollDiv() : adjustScrollDiv();
	};
	expansionA.innerHTML = "[▼]";
	element.appendChild(expansionA);

	// ---------------------------------------------------------
	// Final setup.
	// ---------------------------------------------------------

	const lastLineTop = pointerTops[wordsCount];

	if (!isApprox(expansionA.offsetTop, lastLineTop)) {
		while (wordsCount > 1) {
			wordsCount--;
			span.innerHTML = formatSummary(words_arr, wordsCount);
			if (isApprox(expansionA.offsetTop, lastLineTop)) {
				break;
			}
		}
	}
	
	return false;
}

// ---------------------------------------------------------
// One By One
// ---------------------------------------------------------

function modifySummaryOneByOne(element, words_arr, col = "blue", linesToShow = 4) {
	const wordsLength = words_arr.length;
	if (!wordsLength) return true;

	const span = createSpan(element, col);
	// one word only
	if (wordsLength === 1) {
		span.innerHTML = words_arr[0];
		return true;
	}
	const lineHeight = getLineHeight(span);
	const pointer = document.createElement("a");
	element.appendChild(pointer);
	const startLineTop = pointer.offsetTop;

	// ---------------------------------------------------------
	// Estimate the likely result.
	// ---------------------------------------------------------

	const estimatedResult = Math.min(linesToShow * 10, wordsLength);
	span.innerHTML = formatSummary(words_arr, estimatedResult, false);
	let currentLineTop = pointer.offsetTop;
	const estimatedLines = Math.max(1, Math.round((currentLineTop - startLineTop) / lineHeight) + 1);

	// ---------------------------------------------------------
	// First pass.
	// ---------------------------------------------------------

	let wordsCount = estimatedResult;
	let linesCount = estimatedLines;

	// Estimate fits.
	// Continue forward until the summary no longer fits.
	if (estimatedLines <= linesToShow) {

		// Entire summary fits.
		if (wordsCount === wordsLength) {
			pointer.remove();
			return true;
		}

		for (let k = wordsCount; k < wordsLength; k++) {
			wordsCount = k + 1;
			span.innerHTML = formatSummary(words_arr, wordsCount, false);
			const pointerTop = pointer.offsetTop;
			if (isApprox(pointerTop, currentLineTop)) continue;
			const additionalLines = Math.max(1, Math.round((pointerTop - currentLineTop) / lineHeight));
			if (linesCount + additionalLines > linesToShow) break;
			linesCount += additionalLines;
			currentLineTop = pointerTop;
		}

		// Entire summary fits.
		if (wordsCount === wordsLength) {
			pointer.remove();
			return true;
		}
	}
	// Estimate does not fit.
	// Search backward until the summary fits.
	else {

		while (wordsCount > 1) {
			wordsCount--;
			span.innerHTML = formatSummary(words_arr, wordsCount, false);
			const pointerTop = pointer.offsetTop;
			if (isApprox(pointerTop, currentLineTop)) continue;
			const removedLines = Math.max(1, Math.round((currentLineTop - pointerTop) / lineHeight));
			linesCount -= removedLines;
			currentLineTop = pointerTop;
			if (linesCount <= linesToShow) break;
		}
	}

	// ---------------------------------------------------------
	// Add expansion link.
	// ---------------------------------------------------------

	span.innerHTML += " ";
	const expansionA = document.createElement("a");
	expansionA.setAttribute("href", "javascript:void(0);");
	expansionA.setAttribute("class", "standardb_" + col);
	let isExpanded = false;
	let isAnimating = false;
	expansionA.onclick = function () {
		if (isAnimating) return;
		isAnimating = true;
		isExpanded = !isExpanded;
		this.innerHTML = isExpanded ? "[▲]" : "[▼]";
		typeSummary(span, words_arr, wordsCount, isExpanded, () => { isAnimating = false; });
		col === "red" ? adjustFeedScrollDiv() : adjustScrollDiv();
	};
	expansionA.innerHTML = "[▼]";
	element.removeChild(pointer);
	element.appendChild(expansionA);

	// ---------------------------------------------------------
	// Second pass.
	// Search backwards with the expansion link present.
	// ---------------------------------------------------------

	if (!isApprox(expansionA.offsetTop, currentLineTop)) {
		while (wordsCount > 1) {
			wordsCount--;
			span.innerHTML = formatSummary(words_arr, wordsCount);
			if (isApprox(expansionA.offsetTop, currentLineTop)) break;
		}
	}
	return false;
}
