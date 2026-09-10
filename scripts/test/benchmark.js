"use strict";

// =========================================================
// BENCHMARK
// =========================================================

console.log('Type "testSummary()" to start Modify Summary Speed Test. ');

function randomWord() {

	const r = Math.random();
	let length;

	if (r < 0.01) {
		length = 100 + Math.floor(Math.random() * 200);
	} else {
		const r2 = (r - 0.01) / 0.99;
		// english language distribution
		if (r2 < 0.03) length = 1;
		else if (r2 < 0.2065) length = 2;
		else if (r2 < 0.4116) length = 3;
		else if (r2 < 0.5595) length = 4;
		else if (r2 < 0.6665) length = 5;
		else if (r2 < 0.7504) length = 6;
		else if (r2 < 0.8298) length = 7;
		else if (r2 < 0.8892) length = 8;
		else if (r2 < 0.9336) length = 9;
		else if (r2 < 0.9644) length = 10;
		else if (r2 < 0.9820) length = 11;
		else if (r2 < 0.9916) length = 12;
		else if (r2 < 0.9968) length = 13;
		else if (r2 < 0.9990) length = 14;
		else if (r2 < 0.99976) length = 15;
		else if (r2 < 0.99996) length = 16;
		else if (r2 < 0.99997) length = 17;
		else if (r2 < 0.999974) length = 18;
		else length = 19 + Math.floor(Math.random() * 5);
	}

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

function addPerf(perf, time, isEarlyExit) {
	perf.count++;
	perf.total += time;
	perf.times.push(time);
	perf.earlyExits.push(isEarlyExit);

	if (time < perf.min) perf.min = time;
	if (time > perf.max) perf.max = time;
}

function getStatistics(perf) {
	const sorted = [...perf.times].sort((a, b) => a - b);

	function percentile(p) {
		return sorted[Math.floor((sorted.length - 1) * p)];
	}

	function round(num, digits = 4) {
		return Number(num.toFixed(digits));
	}

	const average = perf.total / perf.count;

	// Population standard deviation
	const variance = perf.times.reduce(
		(sum, time) => sum + Math.pow(time - average, 2),
		0
	) / perf.count;

	const standardDeviation = Math.sqrt(variance);

	return {
		count: perf.count,
		total: round(perf.total) + " ms",
		average: round(average) + " ms",
		median: round(percentile(0.50)) + " ms",
		p95: round(percentile(0.95)) + " ms",
		p99: round(percentile(0.99)) + " ms",
		stdDev: round(standardDeviation) + " ms",
		min: round(perf.min) + " ms",
		max: round(perf.max) + " ms"
	};
}

function consolePlot(title, perf, actualLines) {

	const { times, earlyExits, min, max, total } = perf;

	const WIDTH = 90;
	const HEIGHT = 22;

	const MIN_Y = 0;
	const MAX_Y = Math.max(...times);

	// Символы графика
	const EARLY_EXIT_POINT = "○"; //×▼○∘•▪●
	const NORMAL_POINT = "●";
	const ACTUAL_LINE = "┊";
	const AXIS = "│";
	const H_AXIS = "─";
	const CORNER = "└";

	// Не допускаем деления на 0
	const yRange = MAX_Y - MIN_Y || 1;

	// Перевод значения Y в строку графика
	function valueToRow(value) {
		return Math.round(
			(value - MIN_Y) / yRange * HEIGHT
		);
	}

	// Перевод индекса в колонку
	function indexToCol(index) {
		return Math.round(
			index / (times.length - 1) * (WIDTH - 1)
		);
	}

	// =====================================================
	// ACTUAL LINES POSITION
	// =====================================================

	const actualLinesIndex = actualLines - 1;

	const actualLinesCol =
		actualLines >= 1 && actualLines <= times.length
			? indexToCol(actualLinesIndex)
			: null;

	// =====================================================
	// CREATE GRID
	// =====================================================

	const grid = Array.from(
		{ length: HEIGHT + 1 },
		() => Array(WIDTH).fill(" ")
	);

	// =====================================================
	// DRAW ACTUAL LINES
	// =====================================================

	if (actualLinesCol !== null) {

		for (let row = 0; row <= HEIGHT; row++) {

			// Не затираем точки графика
			if (grid[row][actualLinesCol] === " ") {
				grid[row][actualLinesCol] = ACTUAL_LINE;
			}
		}
	}

	// =====================================================
	// DRAW POINTS
	// =====================================================

	for (let i = 0; i < times.length; i++) {

		const x = indexToCol(i);
		const y = valueToRow(times[i]);
		const row = HEIGHT - y;

		if (
			row >= 0 &&
			row <= HEIGHT &&
			x >= 0 &&
			x < WIDTH
		) {
			grid[row][x] = earlyExits[i] ? EARLY_EXIT_POINT : NORMAL_POINT;
		}
	}

	// =====================================================
	// TITLE
	// =====================================================

	console.log(`=== ${title} ===`);

	// =====================================================
	// Y AXIS + GRAPH
	// =====================================================

	for (let row = 0; row <= HEIGHT; row++) {

		const yValue =
			MAX_Y -
			(MAX_Y - MIN_Y) * row / HEIGHT;

		const label = yValue
			.toFixed(1)
			.padStart(7);

		console.log(
			`${label} ${AXIS}${grid[row].join("")}`
		);
	}

	// =====================================================
	// X AXIS
	// =====================================================

	console.log(
		`        ${CORNER}${H_AXIS.repeat(WIDTH)}`
	);

	// =====================================================
	// X LABELS
	// =====================================================

	const labels = Array(WIDTH).fill(" ");

	const xIndexes = [
		0,
		Math.round((times.length - 1) * 0.25),
		Math.round((times.length - 1) * 0.50),
		Math.round((times.length - 1) * 0.75),
		times.length - 1
	];

	for (const index of xIndexes) {

		const x = indexToCol(index);
		const text = String(index + 1);

		let start = x - Math.floor(text.length / 2);

		start = Math.max(
			0,
			Math.min(
				start,
				WIDTH - text.length
			)
		);

		for (let i = 0; i < text.length; i++) {
			labels[start + i] = text[i];
		}
	}

	console.log(
		`         ${labels.join("")}`
	);

	// =====================================================
	// LEGEND
	// =====================================================


	console.log(
		`LEGEND: ` +
		`${NORMAL_POINT} - summary does not fit lines, ` +
		`${EARLY_EXIT_POINT} - summary fits lines - early exit, ` +
		`${ACTUAL_LINE} - actual lines = ${actualLines}`
	);

	// =====================================================
	// STATISTICS
	// =====================================================

	console.log(
		`STATISTICS: ` +
		`min: ${min.toFixed(3)} ms | ` +
		`avg: ${(total / times.length).toFixed(3)} ms | ` +
		`max: ${max.toFixed(3)} ms | ` +
		`total: ${total.toFixed(3)} ms`
	);

	console.log("");
}

function testSummary() {

	// =========================================================
	// SUMMARY DIV POSITIONING
	// =========================================================

	let container = document.createElement("div");

	container.style.position = "fixed";
	container.style.left = "-100000px";
	container.style.top = "0";
	container.style.width = "450px";
	container.style.padding = "10px";
	container.style.visibility = "hidden";
	container.style.pointerEvents = "none";

	let summaryDiv = document.createElement("div");
	summaryDiv.setAttribute("class", "text_red");

	container.appendChild(summaryDiv);
	document.body.appendChild(container);

	// =========================================================
	// CONSTANTS
	// =========================================================

	const MIN_LINES = 1;
	const MAX_LINES = 100;
	const WORDS_COUNT = MAX_LINES * 5;

	// =========================================================
	// ALGORITHMS
	//
	// To add another algorithm:
	//
	// { name: "Alg 4", run: (...) => modifySummary4(...) }
	// =========================================================

	const algorithms = [
		{
			name: "Alg 1",
			run: (summaryDiv, summary, words_arr, linesToShow) =>
				modifySummary(summaryDiv, summary, words_arr, "red", linesToShow)
		},
		{
			name: "Alg 2",
			run: (summaryDiv, summary, words_arr, linesToShow) =>
				modifySummary2(summaryDiv, summary, words_arr, "red", linesToShow)
		},
		{
			name: "One By One",
			run: (summaryDiv, summary, words_arr, linesToShow) =>
				modifySummaryOneByOne(summaryDiv, summary, words_arr, "red", linesToShow)
		}
	];

	console.log(
		`Modify Summary Speed Test Started: ${WORDS_COUNT} words, ` +
		`applied for ${MIN_LINES}...${MAX_LINES} lines, ` +
		`${algorithms.length} algorithms: ${algorithms.map(algorithm => algorithm.name).join(", ")}.`
	);

	const testStart = performance.now();

	// =========================================================
	// PERFORMANCE DATA
	// =========================================================

	const perfData = new Map();

	for (const algorithm of algorithms) {
		perfData.set(algorithm, {
			count: 0,
			total: 0,
			min: Infinity,
			max: 0,
			times: [],
			earlyExits: []
		});
	}

	// =========================================================
	// GENERATE DATA
	// =========================================================

	const words = new Array(WORDS_COUNT);
	for (let i = 0; i < words.length; i++) {
		words[i] = randomWord();
	}
	const summary = words.join(" ");

	summaryDiv.innerHTML = "";
	let span = document.createElement('span');
	span.setAttribute('class', "text_red");
	span.style.overflowWrap = "anywhere";
	span.innerHTML = summary;
	summaryDiv.appendChild(span);

	const range = document.createRange();
	range.selectNodeContents(summaryDiv);
	const rects = range.getClientRects();
	const lines = new Set();

	for (const rect of rects) {
		lines.add(rect.top);
	}

	const actualLines = lines.size;

	// =========================================================
	// RUN BENCHMARK
	// =========================================================

	for (let linesToShow = MIN_LINES; linesToShow < MAX_LINES + 1; linesToShow++) {

		// Random order for all algorithms.
		const shuffledAlgorithms = [...algorithms];

		for (let i = shuffledAlgorithms.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledAlgorithms[i], shuffledAlgorithms[j]] = [shuffledAlgorithms[j], shuffledAlgorithms[i]];
		}

		for (const algorithm of shuffledAlgorithms) {
			summaryDiv.innerHTML = "";
			const start = performance.now();
			const isEarlyExit = algorithm.run(summaryDiv, summary, words, linesToShow);
			const time = performance.now() - start;
			addPerf(perfData.get(algorithm), time, isEarlyExit);
		}
	}

	container.remove();

	// =========================================================
	// STATISTICS
	// =========================================================

	let totalAverageTime = 0;

	for (const algorithm of algorithms) {
		const perf = perfData.get(algorithm);
		totalAverageTime += perf.total / perf.count;
	}

	const statistics = {};

	for (const algorithm of algorithms) {
		const perf = perfData.get(algorithm);
		const average = perf.total / perf.count;

		statistics[algorithm.name] = {
			...getStatistics(perf),
			"average time share": (average / totalAverageTime * 100).toFixed(2) + "%"
		};
	}

	console.log("=== STATISTICS ===");
	console.table(statistics);


	// =========================================================
	// PERFORMANCE GRAPHS
	// =========================================================

	console.log("=== PERFORMANCE GRAPHS ===");

	for (const algorithm of algorithms) {
		consolePlot(algorithm.name, perfData.get(algorithm), actualLines);
	}

	// =========================================================
	// ALGORITHM COMPARISONS
	// =========================================================

	function compareAlgorithms(algorithmA, algorithmB) {
		const perfA = perfData.get(algorithmA);
		const perfB = perfData.get(algorithmB);

		if (!perfA || !perfB) {
			console.error("Algorithm not found in benchmark.");
			return null;
		}

		const avgA = perfA.total / perfA.count;
		const avgB = perfB.total / perfB.count;
		const difference = Math.abs(avgA - avgB);

		let faster;
		let slower;
		let fasterAvg;
		let slowerAvg;

		if (avgA <= avgB) {
			faster = algorithmA.name;
			slower = algorithmB.name;
			fasterAvg = avgA;
			slowerAvg = avgB;
		} else {
			faster = algorithmB.name;
			slower = algorithmA.name;
			fasterAvg = avgB;
			slowerAvg = avgA;
		}

		return {
			"Faster": faster,
			"Slower": slower,
			"Average Difference": difference.toFixed(4) + " ms",
			"Speedup": (slowerAvg / fasterAvg).toFixed(2) + "x"
		};
	}

	function getAlgorithm(algorithm) {
		if (typeof algorithm === "number") {
			return algorithms[algorithm];
		}

		if (typeof algorithm === "string") {
			return algorithms.find(item => item.name === algorithm);
		}

		return null;
	}

	function addComparison(comparisons, algorithmA, algorithmB) {
		const a = getAlgorithm(algorithmA);
		const b = getAlgorithm(algorithmB);

		if (!a || !b) {
			console.error("Algorithm not found.", { algorithmA, algorithmB });
			return;
		}

		comparisons[`${a.name} ↔ ${b.name}`] = compareAlgorithms(a, b);
	}

	const comparisons = {};

	addComparison(comparisons, "Alg 1", "Alg 2");
	addComparison(comparisons, "Alg 1", "One By One");
	addComparison(comparisons, "Alg 2", "One By One");

	console.log("=== ALGORITHM COMPARISONS ===");
	console.table(comparisons);

	// =========================================================
	// COMPLETE
	// =========================================================

	const testTime = performance.now() - testStart;
	console.log(`Modify Summary Speed Test Completed. Duration: ${(testTime / 1000).toFixed(2)} s.`);
}
