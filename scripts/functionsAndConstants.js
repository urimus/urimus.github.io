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

function createSpan(element, col) {
	const span = document.createElement('span');
	span.setAttribute('class', "text_" + col);
	span.style.overflowWrap = "anywhere";
	element.appendChild(span);
	return span;
}

function formatSummary(words_arr, wordsCount, addSpace = true) {
	return words_arr.slice(0, wordsCount).join(" ") + (addSpace ? " " : "");
}

let typeTimer = null;
function typeSummary(span, words_arr, wordsCount, isExpanding) {
	const wordsLength = words_arr.length;
	const count = wordsLength - wordsCount;
	if (!count) return;

	const interval = Math.min(100, 500 / count);
	let currentCount = isExpanding ? wordsCount + 1: wordsLength - 1;
	span.innerHTML = formatSummary(words_arr, currentCount);

	if (count === 1) return;

	typeTimer = setInterval(() => {
		currentCount += isExpanding ? 1 : -1;
		span.innerHTML = formatSummary(words_arr, currentCount);
		if ((isExpanding && currentCount >= wordsLength) || (!isExpanding&& currentCount <= wordsCount)) {
			clearInterval(typeTimer);
			typeTimer = null;
		}
	}, interval);
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

	// Estimate the likely result to start exponential search.
	const estimatedResult = linesToShow * 10;

	// For blue, one line is occupied by the image.
	if (col === "blue") linesToShow++;

	let wordsCount = 1;
	let current = Math.min(estimatedResult, wordsLength);

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
	// Add extension link.
	// ---------------------------------------------------------

	const expansionA = document.createElement("a");
	expansionA.setAttribute("href", "javascript:void(0);");
	expansionA.setAttribute("class", "standardb_" + col);
	let isExpanded = false;
	expansionA.onclick = function () {
		isExpanded = !isExpanded;
		this.innerHTML = isExpanded ? "[▲]" : "[▼]";
		typeSummary(span, words_arr, wordsCount, isExpanded);
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
	span.innerHTML = formatSummary(words_arr, wordsCount);

	return false;
}

// =========================================================
// OTHER ALGORITHMS
// =========================================================

function getLineHeight(span) {
	span.innerHTML = '<span style="display:inline-block">&#8203;</span>';
	return span.firstElementChild.offsetHeight || 17;
}

// ---------------------------------------------------------
// Algorithm 2
// ---------------------------------------------------------

function formatSummaryWithPointers(words_arr, wordsCount, addSpace = true) {
	const pointersClass = "summary_word_pointer";
	return words_arr
		.slice(0, wordsCount)
		.map(word => {
			return word + '<span class="' + pointersClass + '"></span>';
		})
		.join(" ") + (addSpace ? " " : "");
}

function getWordsCount(element, linesToShow, lineHeight, hasExtension = false) {
	const pointers = element.getElementsByClassName("summary_word_pointer");
	let linesCount = 1;
	let wordsCount = 1;
	let wordsCountM1 = 1;
	let previousTop = pointers[0].offsetTop;
	for (let i = 1; i < pointers.length; i++) {
		const top = pointers[i].offsetTop;
		if (top > previousTop) {
			linesCount += Math.max(1, Math.round((top - previousTop) / lineHeight));
			previousTop = top;
		}
		if (linesCount > linesToShow) break;
		wordsCount = hasExtension ? i : i + 1;
		if (linesCount <= linesToShow - 1) {
			wordsCountM1 = hasExtension ? i : i + 1;
		}
	}
	return {
		wordsCount,
		wordsCountM1
	};
}

function modifySummary2(element, words_arr, col = "blue", linesToShow = 4) {
	const wordsLength = words_arr.length;
	if (!wordsLength) return true;

	const span = createSpan(element, col);
	const lineHeight = getLineHeight(span);

	// Estimate the likely result to start exponential search.
	const estimatedResult = linesToShow * 10;

	let wordsCount = 1;
	let current = Math.min(estimatedResult, wordsLength);
	let result;

	// ---------------------------------------------------------
	// Exponential search.
	// ---------------------------------------------------------

	while (true) {
		span.innerHTML = formatSummaryWithPointers(words_arr, current, false);
		result = getWordsCount(element, linesToShow, lineHeight, false);
		if (result.wordsCount < current) break;
		// The entire summary fits.
		if (current === wordsLength) {
			span.innerHTML = formatSummary(words_arr, wordsLength, false);
			return true;
		}
		current = Math.min(current * 2, wordsLength);
	}

	// ---------------------------------------------------------
	// Add extension link.
	// ---------------------------------------------------------

	const expansionA = document.createElement("a");
	expansionA.setAttribute("href", "javascript:void(0);");
	expansionA.setAttribute("class", "standardb_" + col + " summary_word_pointer");
	let isExpanded = false;
	expansionA.onclick = function () {
		isExpanded = !isExpanded;
		this.innerHTML = isExpanded ? "[▲]" : "[▼]";
		typeSummary(span, words_arr, wordsCount, isExpanded);
		col === "red" ? adjustFeedScrollDiv() : adjustScrollDiv();
	};
	expansionA.innerHTML = "[▼]";
	element.appendChild(expansionA);

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
		span.innerHTML = formatSummaryWithPointers(words_arr, middle);
		const result = getWordsCount(element, linesToShow, lineHeight, true);
		if (result.wordsCount >= middle) {
			wordsCount = middle;
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}
	span.innerHTML = formatSummary(words_arr, wordsCount);

	return false;
}

// ---------------------------------------------------------
// One By One
// ---------------------------------------------------------

function modifySummaryOneByOne(element, words_arr, col = "blue", linesToShow = 4) {
	const wordsLength = words_arr.length;
	if (!wordsLength) return true;

	const span = createSpan(element, col);
	const lineHeight = getLineHeight(span);

	let wordsCount = 1;
	let linesCount = 1;

	const pointer = document.createElement("a");
	element.appendChild(pointer);

	span.innerHTML = formatSummary(words_arr, 1, false);
	let currentLineTop = pointer.offsetTop;

	// ---------------------------------------------------------
	// First pass.
	// ---------------------------------------------------------

	for (let k = 1; k < wordsLength; k++) {
		wordsCount = k + 1;
		span.innerHTML = formatSummary(words_arr, wordsCount, false);
		const pointerTop = pointer.offsetTop;
		if (Math.abs(pointerTop - currentLineTop) < 2) continue;
		const additionalLines = Math.max(1, Math.round((pointerTop - currentLineTop) / lineHeight) );
		linesCount += additionalLines;
		currentLineTop = pointerTop;
		if (linesCount > linesToShow) break;
	}

	// Entire summary fits
	if (wordsCount === wordsLength && linesCount <= linesToShow) {
		element.removeChild(pointer);
		return true;
	}

	// ---------------------------------------------------------
	// Add extension link.
	// ---------------------------------------------------------

	const expansionA = document.createElement("a");
	expansionA.setAttribute("href", "javascript:void(0);");
	expansionA.setAttribute("class", "standardb_" + col);
	let isExpanded = false;
	expansionA.onclick = function () {
		isExpanded = !isExpanded;
		this.innerHTML = isExpanded ? "[▲]" : "[▼]";
		typeSummary(span, words_arr, wordsCount, isExpanded);
		col === "red" ? adjustFeedScrollDiv() : adjustScrollDiv();
	};
	expansionA.innerHTML = "[▼]";

	element.removeChild(pointer);
	element.appendChild(expansionA);
	if (wordsCount === 1) {
		span.innerHTML += " ";
		return true;
	}

	// ---------------------------------------------------------
	// Second pass.
	// ---------------------------------------------------------

	while (wordsCount > 1) {
		wordsCount--;
		span.innerHTML = formatSummary(words_arr, wordsCount);
		if (Math.abs(expansionA.offsetTop - currentLineTop) >= 2) return false;
	}
}
