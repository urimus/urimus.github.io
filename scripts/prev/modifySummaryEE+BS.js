"use strict";

function formatSummary(words_arr, wordsCount) {
	return words_arr.slice(0, wordsCount).join(" ") + " ";
}

function fitsLines(element, linesToShow) {
	const range = document.createRange();
	range.selectNodeContents(element);
	const rects = range.getClientRects();

	const lines = new Set();

	for (const rect of rects) {
		if (!lines.has(rect.top)) {
			lines.add(rect.top);
			if (lines.size > linesToShow) return false;
		}
	}

	return true;
}

function modifySummary(element, element2, summary, words_arr, col = "blue", linesToShow = 4) {
	if (!words_arr.length) return;

	// For short texts, check whether the whole summary already fits.
	let estimatedMaxWords;
	if (col == "blue") {
		estimatedMaxWords = (linesToShow - 1) * 10;
	} else {
		estimatedMaxWords = linesToShow * 10;
	}
	if (words_arr.length <= estimatedMaxWords) {
		element2.innerHTML = summary;
		if (fitsLines(element, linesToShow)) return;
	}

	const extensionA = document.createElement("a");
	extensionA.setAttribute("href", "javascript:void(0);");
	extensionA.setAttribute("class", "standardb_" + col);
	extensionA.onclick = function () {
		if (this.innerHTML === "[▼]") {
			element2.innerHTML = summary + " ";
			this.innerHTML = "[▲]";
		} else if (this.innerHTML === "[▲]") {
			element2.innerHTML = formatSummary(words_arr, wordsCount);
			this.innerHTML = "[▼]";
		}
		col === "red" ? adjustFeedScrollDiv() : adjustScrollDiv();
	};
	extensionA.innerHTML = "[▼]";
	element.appendChild(extensionA);

	let wordsCount = 1;
	let left = 2;
	let right = words_arr.length;

	// Binary search for the maximum number of words that fits.
	while (left <= right) {
		const middle = Math.floor((left + right) / 2);
		element2.innerHTML = formatSummary(words_arr, middle);
		if (fitsLines(element, linesToShow)) {
			wordsCount = middle;
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}
	element2.innerHTML = formatSummary(words_arr, wordsCount);
}
