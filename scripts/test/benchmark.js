"use strict";

// =========================================================
// TEST FUNCTIONS
// =========================================================

// ---------------------------------------------------------
// Algorithm 2
// ---------------------------------------------------------

function formatSummary2(words_arr, wordsCount, addSpace = true) {
	const pointersClass = "summary_word_pointer";

	return words_arr
		.slice(0, wordsCount)
		.map(word => {
			return word + '<span class="' + pointersClass + '"></span>';
		})
		.join(" ") + (addSpace ? " " : "");;
}


function getLineInfo2(element, linesToShow) {
	const pointers = element.getElementsByClassName("summary_word_pointer");
	const lines = new Set();

	for (const pointer of pointers) {
		const top = pointer.offsetTop;

		if (!lines.has(top)) {
			lines.add(top);

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

function modifySummary2(element, element2, summary, words_arr, col = "blue", linesToShow = 4) {
	if (!words_arr.length) return;

	// Estimate the likely result to start exponential search.
	const estimatedResult = linesToShow * 10;

	let wordsCount = 1;
	let left;
	let right = words_arr.length;
	let current = Math.min(estimatedResult, right);
	let lastSuccessfulLinesToShowM1 = 0;

	// Exponential search.
	while (true) {
		element2.innerHTML = formatSummary2(words_arr, current, false);
		const result = getLineInfo2(element, linesToShow);
		if (!result.fitsLinesToShow) break;
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
	extensionA.setAttribute("class", "standardb_" + col + " summary_word_pointer");
	extensionA.onclick = function () {
		if (this.innerHTML === "[▼]") {
			element2.innerHTML = summary + " ";
			this.innerHTML = "[▲]";
		} else if (this.innerHTML === "[▲]") {
			element2.innerHTML = formatSummary2(words_arr, wordsCount);
			this.innerHTML = "[▼]";
		}
		col === "red" ? adjustFeedScrollDiv() : adjustScrollDiv();
	};
	extensionA.innerHTML = "[▼]";
	element.appendChild(extensionA);

	// Binary search bounds.
	left = Math.max(2, lastSuccessfulLinesToShowM1 + 1);
	right = current - 1;

	// Binary search.
	while (left <= right) {
		const middle = Math.floor((left + right) / 2);
		element2.innerHTML = formatSummary2(words_arr, middle);
		const result = getLineInfo2(element, linesToShow);
		if (result.fitsLinesToShow) {
			wordsCount = middle;
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}
	element2.innerHTML = formatSummary2(words_arr, wordsCount);
}

// ---------------------------------------------------------
// One By One
// ---------------------------------------------------------

function modifySummaryOneByOne(
	element,
	element2,
	summary,
	words_arr,
	col = "blue",
	linesToShow = 4
) {
	if (!words_arr.length) return;

	let wordsCount = 0;
	let currentLineTop = 0;
	let linesCount = 1;
	let lastLineStartWord = 0;

	const extensionA = document.createElement("a");
	extensionA.setAttribute("href", "javascript:void(0);");
	extensionA.setAttribute("class", "standardb_" + col);
	extensionA.innerHTML = "[▼]";

	extensionA.onclick = function () {
		if (this.innerHTML === "[▼]") {
			element2.innerHTML = summary + "    ";
			this.innerHTML = "[▲]";
		} else {
			element2.innerHTML = formatSummary(words_arr, wordsCount);
			this.innerHTML = "[▼]";
		}
		col === "red" ? adjustFeedScrollDiv() : adjustScrollDiv();
	};

	const pointer = document.createElement("a");
	element.appendChild(pointer);

	for (let k = 0; k < words_arr.length; k++) {
		element2.innerHTML = formatSummary(words_arr, k + 1);

		if (k === 0) {
			currentLineTop = pointer.offsetTop;
		}

		if (pointer.offsetTop !== currentLineTop) {
			if (Math.abs(pointer.offsetTop - currentLineTop) < 2) {
				currentLineTop = pointer.offsetTop;
				continue;
			}

			if (linesCount === linesToShow) {
				element2.innerHTML = "";
				element.removeChild(pointer);
				element.appendChild(extensionA);

				wordsCount = lastLineStartWord;
				element2.innerHTML = formatSummary(words_arr, wordsCount);
				currentLineTop = extensionA.offsetTop;

				for (let k2 = lastLineStartWord; k2 < words_arr.length; k2++) {
					wordsCount++;
					element2.innerHTML = formatSummary(words_arr, wordsCount);

					if (extensionA.offsetTop !== currentLineTop) {
						if (Math.abs(extensionA.offsetTop - currentLineTop) < 2) {
							currentLineTop = extensionA.offsetTop;
							continue;
						}

						if (linesCount === linesToShow) {
							wordsCount--;
							element2.innerHTML = formatSummary(words_arr, wordsCount);
							break;
						}

						currentLineTop = extensionA.offsetTop;
						linesCount++;
					}
				}

				break;
			}

			lastLineStartWord = k;
			currentLineTop = pointer.offsetTop;
			linesCount++;
		}
	}

	if (wordsCount === 0 && linesCount < linesToShow) {
		element.removeChild(pointer);
		element.appendChild(extensionA);
		element2.innerHTML = summary;
		return;
	}

	if (wordsCount === 0) {
		element.removeChild(pointer);
		element2.innerHTML = summary;
		return;
	}

	element2.innerHTML = formatSummary(words_arr, wordsCount);
	element.appendChild(extensionA);
}

// =========================================================
// BENCHMARK
// =========================================================

let testComplete = false;

function randomWord() {
	const r = Math.random();
	let length;

	if (r < 0.02) length = 1;
	else if (r < 0.08) length = 2;
	else if (r < 0.20) length = 3;
	else if (r < 0.38) length = 4;
	else if (r < 0.58) length = 5;
	else if (r < 0.74) length = 6;
	else if (r < 0.84) length = 7;
	else if (r < 0.91) length = 8;
	else if (r < 0.95) length = 9;
	else if (r < 0.975) length = 10;
	else length = 11 + Math.floor(Math.random() * 5);

	const letters =
		"eeeeeeeeeeeeeeeeeeee" +
		"tttttttttttt" +
		"aaaaaaaaaa" +
		"oooooooooo" +
		"iiiiiiiii" +
		"nnnnnnnnn" +
		"ssssssss" +
		"hhhhhhhh" +
		"rrrrrrr" +
		"dddddd" +
		"llllll" +
		"cccccc" +
		"uuuuuu" +
		"mmmm" +
		"wwww" +
		"ffff" +
		"gggg" +
		"yyyy" +
		"pppp" +
		"bbbb" +
		"vvvv" +
		"kkkk" +
		"jjj" +
		"xxx" +
		"qqq" +
		"zz";

	let word = "";

	for (let i = 0; i < length; i++) {
		word += letters[Math.floor(Math.random() * letters.length)];
	}

	return word;
}

function addPerf(perf, time) {
	perf.count++;
	perf.total += time;
	perf.times.push(time);

	if (time < perf.min) perf.min = time;
	if (time > perf.max) perf.max = time;
}

function getStatistics(perf) {
	const sorted = [...perf.times].sort((a, b) => a - b);

	function percentile(p) {
		return sorted[Math.floor((sorted.length - 1) * p)];
	}

	return {
		count: perf.count,
		avg: (perf.total / perf.count).toFixed(4) + " ms",
		median: percentile(0.50).toFixed(4) + " ms",
		p95: percentile(0.95).toFixed(4) + " ms",
		p99: percentile(0.99).toFixed(4) + " ms",
		min: perf.min.toFixed(4) + " ms",
		max: perf.max.toFixed(4) + " ms",
		total: perf.total.toFixed(2) + " ms"
	};
}

function testSummary(summaryDiv) {
	if (testComplete) return;

	testComplete = true;

	const TEST_COUNT = 1000;
	const MIN_LINES = 1;
	const MAX_LINES = 10;

	console.log(`Modify Summary Speed Test Started: ${TEST_COUNT} texts.`);

	const perf1 = {
		count: 0,
		total: 0,
		min: Infinity,
		max: 0,
		times: []
	};

	const perf2 = {
		count: 0,
		total: 0,
		min: Infinity,
		max: 0,
		times: []
	};

	const perf3 = {
		count: 0,
		total: 0,
		min: Infinity,
		max: 0,
		times: []
	};

	function generateTestText(linesToShow) {
		const maxWords = linesToShow * 20;
		const wordsCount = 1 + Math.floor(Math.random() * maxWords);
		const words = new Array(wordsCount);

		for (let i = 0; i < wordsCount; i++) {
			words[i] = randomWord();
		}

		return {
			summary: words.join(" "),
			words: words
		};
	}

	function runAlgorithm1(entry_summary, summary_words, linesToShow) {
		summaryDiv.innerHTML = "";

		const span = document.createElement("span");
		span.setAttribute("class", "text_red");
		span.style.overflowWrap = "anywhere";

		summaryDiv.appendChild(span);

		const start = performance.now();

		modifySummary(
			summaryDiv,
			span,
			entry_summary,
			summary_words,
			"red",
			linesToShow
		);

		const time = performance.now() - start;

		addPerf(perf1, time);
	}

	function runAlgorithm2(entry_summary, summary_words, linesToShow) {
		summaryDiv.innerHTML = "";

		const span = document.createElement("span");
		span.setAttribute("class", "text_red");
		span.style.overflowWrap = "anywhere";

		summaryDiv.appendChild(span);

		const start = performance.now();

		modifySummary2(
			summaryDiv,
			span,
			entry_summary,
			summary_words,
			"red",
			linesToShow
		);

		const time = performance.now() - start;

		addPerf(perf2, time);
	}

	function runAlgorithm3(entry_summary, summary_words, linesToShow) {
		summaryDiv.innerHTML = "";

		const span = document.createElement("span");
		span.setAttribute("class", "text_red");
		span.style.overflowWrap = "anywhere";

		summaryDiv.appendChild(span);

		const start = performance.now();

		modifySummaryOneByOne(
			summaryDiv,
			span,
			entry_summary,
			summary_words,
			"red",
			linesToShow
		);

		const time = performance.now() - start;

		addPerf(perf3, time);
	}

	const testStart = performance.now();

	for (let test = 0; test < TEST_COUNT; test++) {
		const linesToShow =
			MIN_LINES +
			Math.floor(
				Math.random() * (MAX_LINES - MIN_LINES + 1)
			);

		const data = generateTestText(linesToShow);

		const entry_summary = data.summary;
		const summary_words = data.words;

		// Random order for all three algorithms.
		const algorithms = [
			runAlgorithm1,
			runAlgorithm2,
			runAlgorithm3
		];

		for (let i = algorithms.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));

			[algorithms[i], algorithms[j]] =
				[algorithms[j], algorithms[i]];
		}

		for (const algorithm of algorithms) {
			algorithm(
				entry_summary,
				summary_words,
				linesToShow
			);
		}
	}

	const testTime = performance.now() - testStart;

	// =========================================================
	// STATISTICS
	// =========================================================

	const statistics1 = getStatistics(perf1);
	const statistics2 = getStatistics(perf2);
	const statistics3 = getStatistics(perf3);

	console.log("=== STATISTICS ===");

	console.table({
		"Alg 1": statistics1,
		"Alg 2": statistics2,
		"One By One": statistics3
	});

	// =========================================================
	// RESULT: Alg 1 vs Alg 2
	// =========================================================

	const avg1 = perf1.total / perf1.count;
	const avg2 = perf2.total / perf2.count;
	const avg3 = perf3.total / perf3.count;

	// ---------------------------------------------------------
	// Alg 1 vs Alg 2
	// ---------------------------------------------------------

	const differenceTotal12 = perf1.total - perf2.total;
	const differenceAverage12 = avg1 - avg2;

	const averageTimeTotal12 = avg1 + avg2;

	const averageTimeShare1_12 =
		avg1 / averageTimeTotal12 * 100;

	const averageTimeShare2_12 =
		avg2 / averageTimeTotal12 * 100;

	const totalTime12 = perf1.total + perf2.total;

	const totalTimeShare1_12 =
		perf1.total / totalTime12 * 100;

	const totalTimeShare2_12 =
		perf2.total / totalTime12 * 100;

	const averageSpeedup12 =
		Math.max(avg1, avg2) /
		Math.min(avg1, avg2);

	console.log("=== RESULT: Alg 1 vs Alg 2 ===");

	console.table({
		"Alg 1": {
			count: perf1.count,
			total: perf1.total.toFixed(2) + " ms",
			"total time share":
				totalTimeShare1_12.toFixed(2) + "%",
			average: avg1.toFixed(4) + " ms",
			"average time share":
				averageTimeShare1_12.toFixed(2) + "%"
		},

		"Alg 2": {
			count: perf2.count,
			total: perf2.total.toFixed(2) + " ms",
			"total time share":
				totalTimeShare2_12.toFixed(2) + "%",
			average: avg2.toFixed(4) + " ms",
			"average time share":
				averageTimeShare2_12.toFixed(2) + "%"
		},

		"Difference": {
			total: differenceTotal12.toFixed(2) + " ms",
			average: differenceAverage12.toFixed(4) + " ms"
		},

		"Speedup": {
			average: averageSpeedup12.toFixed(2) + "x"
		}
	});

	// =========================================================
	// RESULT: Alg 1 vs One By One
	// =========================================================

	const differenceTotal13 = perf1.total - perf3.total;
	const differenceAverage13 = avg1 - avg3;

	const averageTimeTotal13 = avg1 + avg3;

	const averageTimeShare1_13 =
		avg1 / averageTimeTotal13 * 100;

	const averageTimeShare3_13 =
		avg3 / averageTimeTotal13 * 100;

	const totalTime13 = perf1.total + perf3.total;

	const totalTimeShare1_13 =
		perf1.total / totalTime13 * 100;

	const totalTimeShare3_13 =
		perf3.total / totalTime13 * 100;

	const averageSpeedup13 =
		Math.max(avg1, avg3) /
		Math.min(avg1, avg3);

	console.log("=== RESULT: Alg 1 vs One By One ===");

	console.table({
		"Alg 1": {
			count: perf1.count,
			total: perf1.total.toFixed(2) + " ms",
			"total time share":
				totalTimeShare1_13.toFixed(2) + "%",
			average: avg1.toFixed(4) + " ms",
			"average time share":
				averageTimeShare1_13.toFixed(2) + "%"
		},

		"One By One": {
			count: perf3.count,
			total: perf3.total.toFixed(2) + " ms",
			"total time share":
				totalTimeShare3_13.toFixed(2) + "%",
			average: avg3.toFixed(4) + " ms",
			"average time share":
				averageTimeShare3_13.toFixed(2) + "%"
		},

		"Difference": {
			total: differenceTotal13.toFixed(2) + " ms",
			average: differenceAverage13.toFixed(4) + " ms"
		},

		"Speedup": {
			average: averageSpeedup13.toFixed(2) + "x"
		}
	});

	console.log(
		`Modify Summary Speed Test Completed. Duration: ${testTime.toFixed(2)} ms.`
	);
}
