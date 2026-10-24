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

	const elements = paragraphs.length
		? paragraphs
		: [doc];

	elements.forEach(el => {
		el.textContent
			.replaceAll("\\n", "\n")
			.split("\n")
			.forEach(line => {
				line = line.trim();

				if (line) {
					lines.push(line);
				}
			});
	});

	if (!lines.length) return [];
	if (lines.length === 1) return splitAllSpaces(lines[0]);

	const result = [];
	const paddingSpan = "<span style='padding-left:10px;'><span>";
	lines.forEach((line, index) => {
		const words = splitAllSpaces(line);
		if (words.length) {
			words[0] =
				(index === 0 ? paddingSpan : "<br>" + paddingSpan) + words[0];
		}
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
	const marker = document.createElement("span");
	marker.style.display = "inline-block";
	marker.textContent = "\u200B";
	span.appendChild(marker);
	const lineHeight = marker.offsetHeight;
	marker.remove();
	return lineHeight || 17;
}

function formatSummary(words_arr, wordsCount) {
	return words_arr.slice(0, wordsCount).join(" ");
}

/*
	if (current === wordsLength) {
		const pointer = document.createElement("a");
		element.appendChild(pointer);
		const startLineTop = pointer.offsetTop;
		span.innerHTML = formatSummary(words_arr, wordsLength, false);
		const currentLineTop = pointer.offsetTop;
		const estimatedLines = Math.max(1, Math.round((currentLineTop - startLineTop) / lineHeight) + 1);
		pointer.remove();
		if (estimatedLines <= linesToShow) return true;
	} else {
		// ---------------------------------------------------------
		// Exponential search.
		// ---------------------------------------------------------
*/

// ---------------------------------------------------------
// Algorithm 1
// Simplest and fastest option.
// ---------------------------------------------------------

function getLineInfo(pointer, startLineTop, lineHeight, linesToShow) {
	const currentLineTop = pointer.offsetTop;
	const linesCount = Math.max(1, Math.round((currentLineTop - startLineTop) / lineHeight) + 1);
	return {
		fitsLinesToShow: linesCount <= linesToShow,
		fitsLinesToShowM1: linesCount <= linesToShow - 1
	};
}

function modifySummary(element, words_arr, linesToShow = 4, col = "red") {
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
	// Binary search bound.
	let left = 1;
	const pointer = document.createElement("span");
	element.append(pointer);
	const startLineTop = pointer.offsetTop;

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

	const expansionA = document.createElement("a");
	expansionA.setAttribute("href", "javascript:void(0);");
	expansionA.setAttribute("class", "standardb_" + col);
	let isExpanded = false;
	let isAnimating = false;
	expansionA.onclick = function () {
		if (isAnimating) return;
		isAnimating = true;
		isExpanded = !isExpanded;
		this.textContent = isExpanded ? "[▲]" : "[▼]";
		typeSummary(span, words_arr, wordsCount, isExpanded, () => { isAnimating = false; });
	};
	expansionA.textContent = "[▼]";
	pointer.remove();
	element.append(document.createTextNode(" "), expansionA);

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
		const result = getLineInfo(expansionA, startLineTop, lineHeight, linesToShow);
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

	return formatSummary(words_arr, checkedWordsCount) +
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
			if (rect.height <= 0) continue;
			if (lines.has(rect.top) || newLines.has(rect.top)) continue;

			newLines.add(rect.top);

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
		const expansionA = probesLive[probesLive.length - 1];

		for (const rect of expansionA.getClientRects()) {
			if (rect.height <= 0) continue;
			if (lines.has(rect.top) || newLines.has(rect.top)) continue;

			expansionLines.add(rect.top);

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

function modifySummary2(element, words_arr, linesToShow = 4, col = "red") {
	const wordsLength = words_arr.length;
	if (!wordsLength) return true;

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
	expansionSpan.setAttribute("class", "text_" + col + " summary_word_probe");
	
	const expansionA = document.createElement("a");
	expansionA.setAttribute("href", "javascript:void(0);");
	expansionA.setAttribute("class", "standardb_" + col);
	let isExpanded = false;
	let isAnimating = false;
	expansionA.onclick = function () {
		if (isAnimating) return;
		isAnimating = true;
		isExpanded = !isExpanded;
		this.textContent = isExpanded ? "[▲]" : "[▼]";
		typeSummary(span, words_arr, wordsCount, isExpanded, () => { isAnimating = false; });
	};
	expansionA.textContent = "[▼]";

	expansionSpan.append(document.createTextNode(" "), expansionA);
	element.append(expansionSpan);

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

// ---------------------------------------------------------
// Algorithm 3
// Option using many pointers.
// ---------------------------------------------------------

function formatSummaryWithPointers(pointerTops, words_arr, wordsCount) {
	
	const pointerSpan = '<span class="summary_word_pointer"></span>';

	if (!pointerTops.length) {
		return pointerSpan +
			words_arr
				.slice(0, wordsCount)
				.join(pointerSpan + " ") + pointerSpan;
	}

	const currentWordsCount = pointerTops.length - 1;
	if (wordsCount <= currentWordsCount) return formatSummary(words_arr, wordsCount);

	return formatSummary(words_arr, currentWordsCount) +
		words_arr
			.slice(currentWordsCount, wordsCount)
			.join(pointerSpan + " ") + pointerSpan;
}


function getWordsCount(pointers, pointerTops, lineCounts, linesToShow, lineHeight, current, isBinary = false) {
	const pointersCount = pointers.length - (isBinary ? 1 : 0);

	for (let i = 0; i < pointersCount; i++) {
		pointerTops.push(pointers[i].offsetTop);
	}

	// Calculate only new positions.
	if (lineCounts.length === 0 && pointerTops.length >= 2) {
		lineCounts[0] = 0;
		lineCounts[1] = Math.max(
			1,
			Math.round((pointerTops[1] - pointerTops[0]) / lineHeight) + 1
		);
	}

	let wordsCount = -1;
	let wordsCountM1 = -1;

	for (let i = lineCounts.length; i < pointerTops.length; i++) {
		const previousTop = pointerTops[i - 1];
		const top = pointerTops[i];

		lineCounts[i] = lineCounts[i - 1];

		if (top !== previousTop) {
			lineCounts[i] += Math.max(
				1,
				Math.round((top - previousTop) / lineHeight)
			);
		}
		const count = lineCounts[i];

		if (i <= current && count <= linesToShow) {
			wordsCount = i;
		}
		if (i <= current && count <= linesToShow - 1) {
			wordsCountM1 = i;
		}
	}

	// Find the largest fitting word index using cached values.

	if (wordsCount === -1) {
		let left = 2;
		let right = current;

		while (left <= right) {
			const middle = Math.floor((left + right) / 2);
			const count = lineCounts[middle];

			if (count <= linesToShow) {
				wordsCount = middle;
				left = middle + 1;
			} else {
				right = middle - 1;
			}
		}
	}
	if (wordsCount === -1) wordsCount = 1;

	if (wordsCountM1 === -1) {
		left = 2;
		right = current;

		while (left <= right) {
			const middle = Math.floor((left + right) / 2);

			if (lineCounts[middle] <= linesToShow - 1) {
				wordsCountM1 = middle;
				left = middle + 1;
			} else {
				right = middle - 1;
			}
		}
	}
	if (wordsCountM1 === -1) wordsCountM1 = 1;

	if (isBinary) {
		const firstTop = pointerTops[0];
		const lastTop = pointers[pointers.length - 1].offsetTop;

		const expansionLines = Math.max(
			1,
			Math.round((lastTop - firstTop) / lineHeight) + 1
		);

		if (expansionLines > linesToShow) {
			return {
				wordsCount: Math.min(wordsCount, current - 1),
				wordsCountM1
			};
		}
	}

	return { wordsCount, wordsCountM1 };
}

function modifySummary3(element, words_arr, linesToShow = 4, col = "red") {
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
	// Binary search bound.
	let left = 1;
	let pointerTops = [];
	const lineCounts = [];
	const pointersLive = element.getElementsByClassName("summary_word_pointer");

	// ---------------------------------------------------------
	// Estimate the likely result.
	// ---------------------------------------------------------
	let current = Math.min(linesToShow * 10, wordsLength);

	// ---------------------------------------------------------
	// Exponential search.
	// ---------------------------------------------------------

	while (true) {
		span.innerHTML = formatSummaryWithPointers(pointerTops, words_arr, current);
		const result = getWordsCount(pointersLive, pointerTops, lineCounts, linesToShow, lineHeight, current);
		if (result.wordsCount < current) break;
		if (current === wordsLength) {
			span.innerHTML = formatSummary(words_arr, wordsLength);
			return true;
		}
		left = result.wordsCountM1;
		current = Math.min(current * 2, wordsLength);
	}

	// ---------------------------------------------------------
	// Add expansion link.
	// ---------------------------------------------------------

	const expansionA = document.createElement("a");
	expansionA.setAttribute("href", "javascript:void(0);");
	expansionA.setAttribute("class", "standardb_" + col + " summary_word_pointer");
	let isExpanded = false;
	let isAnimating = false;
	expansionA.onclick = function () {
		if (isAnimating) return;
		isAnimating = true;
		isExpanded = !isExpanded;
		this.textContent = isExpanded ? "[▲]" : "[▼]";
		typeSummary(span, words_arr, wordsCount, isExpanded, () => { isAnimating = false; });
	};
	expansionA.textContent = "[▼]";
	element.append(document.createTextNode(" "), expansionA);

	// ---------------------------------------------------------
	// Binary search bounds.
	// ---------------------------------------------------------

	let right = current - 1;

	// ---------------------------------------------------------
	// Binary search.
	// ---------------------------------------------------------

	while (left <= right) {
		const middle = Math.floor((left + right) / 2);
		span.innerHTML = formatSummaryWithPointers(pointerTops, words_arr, middle);
		const result = getWordsCount(pointersLive, pointerTops, lineCounts, linesToShow, lineHeight, middle, true);
		if (result.wordsCount >= middle) {
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



function getWordsCountOrig(pointers, pointerTops, linesToShow, lineHeight, current, isBinary = false) {

	const pointersCount = isBinary
		? pointers.length - 1
		: pointers.length;
	
	for (let i = 0; i < pointersCount; i++) {
		pointerTops.push(pointers[i].offsetTop);
	}

	let linesCount = Math.max(1, Math.round((pointerTops[1] - pointerTops[0]) / lineHeight) + 1);
	let wordsCount = 1;
	let wordsCountM1 = 1;
	let previousTop = pointerTops[1];

	for (let i = 2; i <= current; i++) {
		const top = pointerTops[i];
		if (top !== previousTop) {
			linesCount += Math.max(1, Math.round((top - previousTop) / lineHeight));
			previousTop = top;
		}
		if (linesCount > linesToShow) return { wordsCount, wordsCountM1 };
		wordsCount = i;
		if (linesCount <= linesToShow - 1) {
			wordsCountM1 = i;
		}
	}
	
	if (isBinary) {
		const firstTop = pointerTops[0];
		const lastTop = pointers[pointers.length - 1].offsetTop;
		const expansionLines = Math.max(
			1,
			Math.round((lastTop - firstTop) / lineHeight) + 1
		);

		if (expansionLines > linesToShow) {
			return {
				wordsCount: Math.min(wordsCount, current - 1),
				wordsCountM1
			};
		}
	}
	
	return { wordsCount, wordsCountM1 };
}

function modifySummary3Orig(element, words_arr, linesToShow = 4, col = "red") {
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
	// Binary search bound.
	let left = 1;
	let pointerTops = [];
	const pointersLive = element.getElementsByClassName("summary_word_pointer");

	// ---------------------------------------------------------
	// Estimate the likely result.
	// ---------------------------------------------------------
	let current = Math.min(linesToShow * 10, wordsLength);

	// ---------------------------------------------------------
	// Exponential search.
	// ---------------------------------------------------------

	while (true) {
		span.innerHTML = formatSummaryWithPointers(pointerTops, words_arr, current);
		const result = getWordsCountOrig(pointersLive, pointerTops, linesToShow, lineHeight, current);
		if (result.wordsCount < current) break;
		if (current === wordsLength) {
			span.innerHTML = formatSummary(words_arr, wordsLength);
			return true;
		}
		left = result.wordsCountM1;
		current = Math.min(current * 2, wordsLength);
	}

	// ---------------------------------------------------------
	// Add expansion link.
	// ---------------------------------------------------------

	const expansionA = document.createElement("a");
	expansionA.setAttribute("href", "javascript:void(0);");
	expansionA.setAttribute("class", "standardb_" + col + " summary_word_pointer");
	let isExpanded = false;
	let isAnimating = false;
	expansionA.onclick = function () {
		if (isAnimating) return;
		isAnimating = true;
		isExpanded = !isExpanded;
		this.textContent = isExpanded ? "[▲]" : "[▼]";
		typeSummary(span, words_arr, wordsCount, isExpanded, () => { isAnimating = false; });
	};
	expansionA.textContent = "[▼]";
	element.append(document.createTextNode(" "), expansionA);

	// ---------------------------------------------------------
	// Binary search bounds.
	// ---------------------------------------------------------

	let right = current - 1;

	// ---------------------------------------------------------
	// Binary search.
	// ---------------------------------------------------------

	while (left <= right) {
		const middle = Math.floor((left + right) / 2);
		span.innerHTML = formatSummaryWithPointers(pointerTops, words_arr, middle);
		const result = getWordsCountOrig(pointersLive, pointerTops, linesToShow, lineHeight, middle, true);
		if (result.wordsCount >= middle) {
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
