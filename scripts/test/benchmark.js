"use strict";

// =========================================================
// BENCHMARK
// =========================================================

console.log(
	"Type \"testSummary(number)\" to start Modify Summary Speed Test. " +
	"Number - Words Count in Summary, Default - 1000."
);

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

	const variance = perf.times.reduce((sum, time) => sum + Math.pow(time - average, 2), 0) / perf.count;
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

function consolePlot(title, perf, actualLines, unit = "ms") {

	const { times, earlyExits, min, max, total } = perf;

	const WIDTH = 90;
	const HEIGHT = 22;

	const MIN_Y = 0;
	const MAX_Y = Math.max(...times);

	const EARLY_EXIT_POINT = "•"; //×▼○∘•▪●
	const NORMAL_POINT = "●";
	const ACTUAL_LINE = "┊";
	const AXIS = "│";
	const H_AXIS = "─";
	const CORNER = "└";

	const yRange = MAX_Y - MIN_Y || 1;

	function valueToRow(value) {
		return Math.round((value - MIN_Y) / yRange * HEIGHT);
	}

	function indexToCol(index) {
		return Math.round(index / (times.length - 1) * (WIDTH - 1));
	}

	const actualLinesIndex = actualLines - 1;
	const actualLinesCol = actualLines >= 1 && actualLines <= times.length ? indexToCol(actualLinesIndex) : null;

	const grid = Array.from({ length: HEIGHT + 1 }, () => Array(WIDTH).fill(" "));

	if (actualLinesCol !== null) {
		for (let row = 0; row <= HEIGHT; row++) {
			if (grid[row][actualLinesCol] === " ") {
				grid[row][actualLinesCol] = ACTUAL_LINE;
			}
		}
	}

	for (let i = 0; i < times.length; i++) {
		const x = indexToCol(i);
		const y = valueToRow(times[i]);
		const row = HEIGHT - y;
		if (row >= 0 && row <= HEIGHT && x >= 0 && x < WIDTH) {
			grid[row][x] = earlyExits[i] ? EARLY_EXIT_POINT : NORMAL_POINT;
		}
	}

	console.log(`=== ${title} ===`);
	for (let row = 0; row <= HEIGHT; row++) {
		const yValue = MAX_Y - (MAX_Y - MIN_Y) * row / HEIGHT;
		const label = yValue.toFixed(2).padStart(7);
		console.log(`${label} ${AXIS}${grid[row].join("")}`);
	}
	console.log(`        ${CORNER}${H_AXIS.repeat(WIDTH)}`	);

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
		start = Math.max(0, Math.min(start, WIDTH - text.length));
		for (let i = 0; i < text.length; i++) {
			labels[start + i] = text[i];
		}
	}
	console.log(`         ${labels.join("")}`);

	console.log(
		`LEGEND: ` +
		`${NORMAL_POINT} - summary does not fit lines, ` +
		`${EARLY_EXIT_POINT} - summary fits lines - early exit, ` +
		`${ACTUAL_LINE} - actual lines = ${actualLines}`
	);

	console.log(
		`STATISTICS: ` +
		`min: ${min.toFixed(3)} ${unit} | ` +
		`avg: ${(total / times.length).toFixed(3)} ${unit} | ` +
		`max: ${max.toFixed(3)} ${unit}` +
		(unit === "ms" ? ` | total: ${total.toFixed(3)} ${unit}` : "")
	);
	console.log("");
}

function testSummary(wordsCount) {

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

	const count = Math.floor(Number(wordsCount));
	const WORDS_COUNT = count > 0 ? count : 1000;
	const MIN_LINES = 1;
	const MAX_LINES = Math.max(1, Math.floor(WORDS_COUNT / 5));

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
			run: (summaryDiv, words_arr, line) =>
				modifySummary(summaryDiv, words_arr, "red", line)
		},
		{
			name: "Alg 2",
			run: (summaryDiv, words_arr, line) =>
				modifySummary2(summaryDiv, words_arr, "red", line)
		},
		{
			name: "One By One",
			run: (summaryDiv, words_arr, line) =>
				modifySummaryOneByOne(summaryDiv, words_arr, "red", line)
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

	summaryDiv.innerHTML = "";
	let span = document.createElement('span');
	span.setAttribute('class', "text_red");
	span.style.overflowWrap = "anywhere";
	span.innerHTML = words.join(" ");
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

	let labelTime = performance.now();

	for (let line = MIN_LINES; line <= MAX_LINES; line++) {

		if (performance.now() - labelTime > 5000) {
			console.log(
				`Processing line ${line} - ` +
				`${Math.floor((line - 1) / MAX_LINES * 100)}%`
			);
			labelTime = performance.now();
		}

		// Random order for all algorithms.
		const shuffledAlgorithms = [...algorithms];

		for (let i = shuffledAlgorithms.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledAlgorithms[i], shuffledAlgorithms[j]] = [shuffledAlgorithms[j], shuffledAlgorithms[i]];
		}

		for (const algorithm of shuffledAlgorithms) {
			summaryDiv.innerHTML = "";
			const start = performance.now();
			const isEarlyExit = algorithm.run(summaryDiv, words, line);
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
	console.log("");

	for (const algorithm of algorithms) {
		consolePlot(algorithm.name, perfData.get(algorithm), actualLines);
	}

	// =========================================================
	// SPEEDUP GRAPHS
	// =========================================================

	function getAlgorithm(algorithm) {
		if (typeof algorithm === "number") {
			return algorithms[algorithm];
		}
		if (typeof algorithm === "string") {
			return algorithms.find(item => item.name === algorithm);
		}
		return null;
	}

	function createSpeedupPerf(perfA, perfB) {
		if (perfA.times.length !== perfB.times.length) {
			console.error("Cannot create speedup: different times length.");
			return null;
		}
		const times = perfA.times.map((timeA, i) => {
			const timeB = perfB.times[i];
			return timeB > 0 ? timeA / timeB : 0;
		});
		return {
			count: times.length,
			total: times.reduce((sum, time) => sum + time, 0),
			min: Math.min(...times),
			max: Math.max(...times),
			times,
			earlyExits: [...perfA.earlyExits]
		};
	}

	function consoleSpeedupPlot(algorithmA, algorithmB, actualLines, unit) {

		const algA = getAlgorithm(algorithmA);
		const algB = getAlgorithm(algorithmB);

		if (!algA || !algB) {
			console.error("Algorithm not found.", { algorithmA, algorithmB });
			return;
		}

		const perfA = perfData.get(algA);
		const perfB = perfData.get(algB);

		if (!perfA || !perfB) {
			console.error("Performance data not found.", { algorithmA, algorithmB });
			return;
		}

		const averageA = perfA.total / perfA.count;
		const averageB = perfB.total / perfB.count;

		let slowerAlgorithm;
		let fasterAlgorithm;
		let slowerPerf;
		let fasterPerf;

		if (averageA > averageB) {
			slowerAlgorithm = algA;
			fasterAlgorithm = algB;
			slowerPerf = perfA;
			fasterPerf = perfB;
		} else {
			slowerAlgorithm = algB;
			fasterAlgorithm = algA;
			slowerPerf = perfB;
			fasterPerf = perfA;
		}

		const speedupPerf = createSpeedupPerf(slowerPerf, fasterPerf);
		if (!speedupPerf) return;
		const title = `Speedup: ${fasterAlgorithm.name} / ${slowerAlgorithm.name}`;
		consolePlot(title, speedupPerf, actualLines, unit);
	}

	console.log("=== SPEEDUP GRAPHS ===");
	console.log("");
	consoleSpeedupPlot("Alg 1", "Alg 2", actualLines, "×");
	consoleSpeedupPlot("Alg 1", "One By One", actualLines, "×");
	consoleSpeedupPlot("Alg 2", "One By One", actualLines, "×");

	// =========================================================
	// COMPLETE
	// =========================================================

	const testTime = performance.now() - testStart;
	console.log(`Modify Summary Speed Test Completed. Duration: ${(testTime / 1000).toFixed(2)} s.`);
}
