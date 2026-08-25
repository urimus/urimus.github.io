"use strict";


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

function modifySummary(element, element2, summary, words_arr, col = "blue", linesToShow = 4) {
	if (!words_arr.length) return;

	let wordsCount = 0;
	let left = 1;
	let right = words_arr.length;
	let middle = 1;

	// Check whether the first word fits.
	element2.innerHTML = formatSummary(words_arr, 1, false);
	let result = getLineInfo(element, linesToShow);
	const firstWordFits = result.fitsLinesToShow;

	if (!firstWordFits) {
		// If even the first word does not fit, no search is needed.
		if (right === 1) return;
		wordsCount = 1;
	} else {
		wordsCount = 1;
		let lastSuccessfulLinesToShowM1 = 0;

		// Exponential search.
		// We track both the maximum number of words that fits
		// within linesToShow and within linesToShow - 1 lines.
		while (middle < right) {
			left = middle + 1;
			middle = Math.min(middle * 2, right);
			element2.innerHTML = formatSummary(words_arr, middle, false);
			result = getLineInfo(element, linesToShow);
			if (!result.fitsLinesToShow) break;
			wordsCount = middle;
			if (result.fitsLinesToShowM1) lastSuccessfulLinesToShowM1 = middle;
		}

		// The entire summary fits.
		if (wordsCount === right) return;

		// If the exponential search found a value that fits
		// within linesToShow - 1 lines, use it as the lower bound.
		// Otherwise, left = 1.
		left = lastSuccessfulLinesToShowM1 + 1;
	}

	const extensionA = document.createElement("a");
	extensionA.setAttribute("href", "javascript:void(0);");
	extensionA.setAttribute("class", "standardb_" + col);
	extensionA.onclick = function () {
		if (this.innerHTML === "[▼]") {
			element2.innerHTML = summary + "    ";
			this.innerHTML = "[▲]";
		} else if (this.innerHTML === "[▲]") {
			element2.innerHTML = formatSummary(words_arr, wordsCount);
			this.innerHTML = "[▼]";
		}
		col === "red" ? adjustFeedScrollDiv() : adjustScrollDiv();
	};
	extensionA.innerHTML = "[▼]";
	element.appendChild(extensionA);

	// If the first word does not fit, no binary search is needed.
	if (!firstWordFits) return;
	// middle is the first known overflowing value.
	right = middle - 1;

	// Binary search for the maximum number of words that fits.
	while (left <= right) {
		middle = Math.floor((left + right) / 2);
		element2.innerHTML = formatSummary(words_arr, middle);
		result = getLineInfo(element, linesToShow);
		if (result.fitsLinesToShow) {
			wordsCount = middle;
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}
	element2.innerHTML = formatSummary(words_arr, wordsCount);
}


