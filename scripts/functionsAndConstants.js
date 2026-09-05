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
	let units = ['B', 'KB', 'MB', 'GB', 'TB'];
	let bytes_i = parseInt(bytes);
	let i;
	for (i = 0; bytes_i >= 1000 && i < 4; i++) {
		bytes_i /= 1000;
	}
	if (i==0) return bytes_i +" "+ units[i];
	return bytes_i.toFixed(2) +" "+ units[i];
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


// ---------------------------------------------------------
// Algorithm 1
// ---------------------------------------------------------

function formatSummary(words_arr, wordsCount, addSpace = true) {
	return words_arr.slice(0, wordsCount).join(" ") + (addSpace ? " " : "");
}

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

function modifySummary(element, summary, words_arr, col = "blue", linesToShow = 4) {
	const wordsLength = words_arr.length;
	if (!wordsLength) return;

	let span = document.createElement('span');
	span.setAttribute('class', "text_" + col);
	span.style.overflowWrap = "anywhere";
	element.appendChild(span);

	// Estimate the likely result to start exponential search.
	const estimatedResult = linesToShow * 10;

	// For blue, one line is occupied by the image.
	if (col === "blue") linesToShow++;

	let wordsCount = 1;
	let current = Math.min(estimatedResult, wordsLength);
	let lastSuccessfulLinesToShowM1 = 0;

	// ---------------------------------------------------------
	// Exponential search.
	// ---------------------------------------------------------

	while (true) {
		span.innerHTML = formatSummary(words_arr, current, false);
		const result = getLineInfo(element, linesToShow);
		if (!result.fitsLinesToShow) break;
		wordsCount = current;
		if (result.fitsLinesToShowM1) {
			lastSuccessfulLinesToShowM1 = current;
		}
		// The entire summary fits.
		if (current === wordsLength) return;
		current = Math.min(current * 2, wordsLength);
	}

	// ---------------------------------------------------------
	// Add extension link.
	// ---------------------------------------------------------

	const extensionA = document.createElement("a");
	extensionA.setAttribute("href", "javascript:void(0);");
	extensionA.setAttribute("class", "standardb_" + col);
	extensionA.dataset.expanded = "false";
	extensionA.onclick = function () {
		if (this.dataset.expanded === "false") {
			span.innerHTML = summary + " ";
			this.innerHTML = "[▲]";
			this.dataset.expanded = "true";
		} else {
			span.innerHTML = formatSummary(words_arr, wordsCount);
			this.innerHTML = "[▼]";
			this.dataset.expanded = "false";
		}
		col === "red" ? adjustFeedScrollDiv() : adjustScrollDiv();
	};
	extensionA.innerHTML = "[▼]";
	element.appendChild(extensionA);

	// ---------------------------------------------------------
	// Binary search bounds.
	// ---------------------------------------------------------

	let left = Math.max(1, lastSuccessfulLinesToShowM1);
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
}

// =========================================================
// OTHER ALGORITHMS
// =========================================================

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

function getWordsCount(element, linesToShow, hasExtension = false) {
	const pointers = element.getElementsByClassName("summary_word_pointer");
	const lines = new Set();

	let wordsCount = 0;
	let wordsCountM1 = 0;

	for (let i = 0; i < pointers.length; i++) {
		const top = pointers[i].offsetTop;
		if (!lines.has(top)) {
			lines.add(top);
			if (lines.size > linesToShow) break;
		}
		wordsCount = hasExtension ? i : i + 1;
		if (lines.size <= linesToShow - 1) {
			wordsCountM1 = hasExtension ? i : i + 1;
		}
	}
	return {
		wordsCount: Math.max(1, wordsCount),
		wordsCountM1: Math.max(1, wordsCountM1)
	};
}

function modifySummary2(element, summary, words_arr, col = "blue", linesToShow = 4) {
	const wordsLength = words_arr.length;
	if (!wordsLength) return;

	let span = document.createElement('span');
	span.setAttribute('class', "text_" + col);
	span.style.overflowWrap = "anywhere";
	element.appendChild(span);

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
		result = getWordsCount(element, linesToShow, false);
		if (result.wordsCount < current) break;

		// The entire summary fits.
		if (current === wordsLength) return;

		current = Math.min(current * 2, wordsLength);
	}

	// ---------------------------------------------------------
	// Add extension link.
	// ---------------------------------------------------------

	const extensionA = document.createElement("a");
	extensionA.setAttribute("href", "javascript:void(0);");
	extensionA.setAttribute("class", "standardb_" + col + " summary_word_pointer");
	extensionA.dataset.expanded = "false";
	extensionA.onclick = function () {
		if (this.dataset.expanded === "false") {
			span.innerHTML = summary + " ";
			this.innerHTML = "[▲▲]";
			this.dataset.expanded = "true";
		} else {
			span.innerHTML = formatSummary(words_arr, wordsCount);
			this.innerHTML = "[▼▼]";
			this.dataset.expanded = "false";
		}
		col === "red" ? adjustFeedScrollDiv() : adjustScrollDiv();
	};
	extensionA.innerHTML = "[▼▼]";
	element.appendChild(extensionA);

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
		const result = getWordsCount(element, linesToShow, true);
		if (result.wordsCount >= middle) {
			wordsCount = middle;
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}
	span.innerHTML = formatSummary(words_arr, wordsCount);
}

// ---------------------------------------------------------
// One By One
// ---------------------------------------------------------

function modifySummaryOneByOne(element, summary, words_arr, col = "blue", linesToShow = 4) {
	const wordsLength = words_arr.length;
	if (!wordsLength) return;

	let span = document.createElement('span');
	span.setAttribute('class', "text_" + col);
	span.style.overflowWrap = "anywhere";
	element.appendChild(span);

	let wordsCount = 1;
	let linesCount = 1;
	let lastLineStartWord = 1;

	const extensionA = document.createElement("a");
	extensionA.setAttribute("href", "javascript:void(0);");
	extensionA.setAttribute("class", "standardb_" + col);
	extensionA.dataset.expanded = "false";

	extensionA.onclick = function () {
		if (this.dataset.expanded === "false") {
			span.innerHTML = summary + " ";
			this.innerHTML = "[▲▲▲]";
			this.dataset.expanded = "true";
		} else {
			span.innerHTML = formatSummary(words_arr, wordsCount);
			this.innerHTML = "[▼▼▼]";
			this.dataset.expanded = "false";
		}

		col === "red" ? adjustFeedScrollDiv() : adjustScrollDiv();
	};

	extensionA.innerHTML = "[▼▼▼]";

	const pointer = document.createElement("a");
	element.appendChild(pointer);

	span.innerHTML = formatSummary(words_arr, 1, false);
	let currentLineTop = pointer.offsetTop;

	for (let k = 1; k < wordsLength; k++) {
		span.innerHTML = formatSummary(words_arr, k + 1, false);

		if (pointer.offsetTop !== currentLineTop) {
			if (Math.abs(pointer.offsetTop - currentLineTop) < 2) {
				currentLineTop = pointer.offsetTop;
				continue;
			}
			if (linesCount === linesToShow) {
				span.innerHTML = "";
				element.removeChild(pointer);
				element.appendChild(extensionA);

				wordsCount = lastLineStartWord;
				span.innerHTML = formatSummary(words_arr, wordsCount);

				currentLineTop = extensionA.offsetTop;

				for (let k2 = lastLineStartWord; k2 < wordsLength; k2++) {
					wordsCount++;
					span.innerHTML = formatSummary(words_arr, wordsCount);

					if (extensionA.offsetTop !== currentLineTop) {
						if (Math.abs(extensionA.offsetTop - currentLineTop) < 2) {
							currentLineTop = extensionA.offsetTop;
							continue;
						}
						wordsCount--;
						span.innerHTML = formatSummary(words_arr, wordsCount);
						break;
					}
				}

				return;
			}

			lastLineStartWord = k;
			currentLineTop = pointer.offsetTop;
			linesCount++;
		}
	}

	element.removeChild(pointer);
	span.innerHTML = summary;
}
