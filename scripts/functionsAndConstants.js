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
	const estimatedResult = linesToShow * 10;

	// For blue, one line is occupied by the image.
	if (col === "blue") linesToShow++;

	let wordsCount = 1;
	let left;
	let right = words_arr.length;
	let current = Math.min(estimatedResult, right);
	let lastSuccessfulLinesToShowM1 = 0;

	// Exponential search.
	while (true) {
		element2.innerHTML = formatSummary(words_arr, current, false);
		const result = getLineInfo(element, linesToShow);
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

	// Binary search bounds.
	left = Math.max(2, lastSuccessfulLinesToShowM1 + 1);
	right = current - 1;

	// Binary search.
	while (left <= right) {
		const middle = Math.floor((left + right) / 2);
		element2.innerHTML = formatSummary(words_arr, middle);
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

// =========================================================
// TEST FUNCTIONS
// =========================================================

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

	// Pointer для первого прохода
	const pointer = document.createElement("a");
	element.appendChild(pointer);

	// Первый проход — ищем место, где начинаются новые строки.
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
				// Нужно начинать второй проход уже с нормальной ссылки.
				element2.innerHTML = "";
				element.removeChild(pointer);
				element.appendChild(extensionA);

				wordsCount = 0;
				linesCount = 1;

				currentLineTop = extensionA.offsetTop;

				// Второй проход — ищем точное количество слов.
				for (let k2 = 0; k2 < words_arr.length; k2++) {
					wordsCount++;

					element2.innerHTML =
						formatSummary(words_arr, wordsCount);

					if (k2 === 0) {
						currentLineTop = extensionA.offsetTop;
					}

					if (extensionA.offsetTop !== currentLineTop) {
						if (Math.abs(extensionA.offsetTop - currentLineTop) < 2) {
							currentLineTop = extensionA.offsetTop;
							continue;
						}

						if (linesCount === linesToShow) {
							wordsCount--;

							element2.innerHTML =
								formatSummary(words_arr, wordsCount);

							break;
						}

						currentLineTop = extensionA.offsetTop;
						linesCount++;
					}
				}

				break;
			}

			currentLineTop = pointer.offsetTop;
			linesCount++;
		}
	}

	// Весь текст помещается.
	if (wordsCount === 0 && linesCount < linesToShow) {
		element.removeChild(pointer);
		element.appendChild(extensionA);
		element2.innerHTML = summary;
		return;
	}

	// Если цикл закончился, значит весь текст помещается.
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

		modifySummaryOneByOne(
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

	const testStart = performance.now();

	for (let test = 0; test < TEST_COUNT; test++) {
		const linesToShow =
			MIN_LINES +
			Math.floor(Math.random() * (MAX_LINES - MIN_LINES + 1));

		const data = generateTestText(linesToShow);

		const entry_summary = data.summary;
		const summary_words = data.words;

		if (Math.random() < 0.5) {
			runAlgorithm1(entry_summary, summary_words, linesToShow);
			runAlgorithm2(entry_summary, summary_words, linesToShow);
		} else {
			runAlgorithm2(entry_summary, summary_words, linesToShow);
			runAlgorithm1(entry_summary, summary_words, linesToShow);
		}
	}

	const testTime = performance.now() - testStart;

	const statistics1 = getStatistics(perf1);
	const statistics2 = getStatistics(perf2);

	console.log("=== STATISTICS ===");

	console.table({
		"Algorithm": statistics1,
		"One By One": statistics2
	});

	console.log("=== RESULT ===");

	const avg1 = perf1.total / perf1.count;
	const avg2 = perf2.total / perf2.count;

	const averageTimeTotal = avg1 + avg2;
	const timeShare1 = avg1 / averageTimeTotal * 100;
	const timeShare2 = avg2 / averageTimeTotal * 100;

	console.table({
		"Algorithm": {
			count: perf1.count,
			total: perf1.total.toFixed(2) + " ms",
			average: avg1.toFixed(4) + " ms",
			"time share": timeShare1.toFixed(2) + "%"
		},
		"One By One": {
			count: perf2.count,
			total: perf2.total.toFixed(2) + " ms",
			average: avg2.toFixed(4) + " ms",
			"time share": timeShare2.toFixed(2) + "%"
		},
		"Difference": {
			total: (perf1.total - perf2.total).toFixed(2) + " ms",
			average: (avg1 - avg2).toFixed(4) + " ms"
		},
		"Speedup": {
			total: (perf2.total / perf1.total).toFixed(2) + "x",
			average: (avg2 / avg1).toFixed(2) + "x"
		}
	});

	console.log(
		`Modify Summary Speed Test Completed. Duration: ${testTime.toFixed(2)} ms.`
	);
}
