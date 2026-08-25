

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

	// Estimate the likely result to start exponential search.
	let estimatedResult;
	if (col == "blue") {
		estimatedResult = (linesToShow - 1) * 10;
	} else {
		estimatedResult = linesToShow * 10;
	}

	let wordsCount = 1;
	let left;
	let right = words_arr.length;
	let current = Math.min(estimatedResult, right);
	let lastSuccessfulLinesToShowM1 = 0;

	// Exponential search.
	while (true) {
		element2.innerHTML = formatSummary(words_arr, current, false);
		const result = getLineInfo(element, linesToShow);
		if (!result.fitsLinesToShow) {
			right = current - 1;
			break;
		}
		wordsCount = current;
		if (result.fitsLinesToShowM1) {
			lastSuccessfulLinesToShowM1 = current;
		}
		// The entire summary fits.
		if (current === right) return;
		current = Math.min(current * 2, right);
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

	// Binary search lower bound.
	left = Math.max(2, lastSuccessfulLinesToShowM1 + 1);

	// Binary search.
	while (left <= right) {
		const middle = Math.floor((left + right) / 2);
		element2.innerHTML = formatSummary(words_arr, middle, false);
		const result = getLineInfo(element, linesToShow);
		if (result.fitsLinesToShow) {
			wordsCount = middle;
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}
	element2.innerHTML = formatSummary(words_arr, wordsCount);
}
