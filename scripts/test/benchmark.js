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

function consolePlot(title, perf, actualLines, unit = "ms") {
	const {
		times,
		earlyExits,
		min,
		max,
		mean,
		meanEE,
		meanNoEE,
		median,
		medianEE,
		medianNoEE,
		geometricMean,
		geometricMeanEE,
		geometricMeanNoEE
	} = perf;

	const WIDTH = 90;
	const HEIGHT = 22;

	const MIN_Y = min;
	const MAX_Y = max;

	// Symbols
	const POINT = "●";
	const ACTUAL_LINE = "┊";
	const AXIS = "│";
	const H_AXIS = "─";
	const CORNER = "└";
	const Y_ARROW = "↑";
	const X_ARROW = "→";

	// Colors
	const COLORS = {
		normalPoint: "color: #ff5555; font-weight: bold;",
		earlyPoint: "color: #bd93f9; font-weight: bold;",
		actualLine: "color: #888;",
		axis: "color: #888;",
		labels: "color: #aaa;",
		mean: "color: #5599ff; font-weight: bold;"
	};

	const yRange = MAX_Y - MIN_Y || 1;

	function valueToRow(value) {
		return Math.round(
			(value - MIN_Y) / yRange * HEIGHT
		);
	}
	function indexToCol(index) {
		if (times.length <= 1) return 0;
		return Math.round(
			index / (times.length - 1) * (WIDTH - 1)
		);
	}

	const actualLinesIndex = actualLines - 1;
	const actualLinesCol =
		actualLines >= 1 && actualLines <= times.length
			? indexToCol(actualLinesIndex)
			: null;

	// ============================================================
	// GRID
	// ============================================================

	const grid = Array.from(
		{ length: HEIGHT + 1 },
		() =>
			Array.from(
				{ length: WIDTH },
				() => ({
					char: " ",
					style: null
				})
			)
	);

	// ============================================================
	// ACTUAL LINES
	// ============================================================

	if (actualLinesCol !== null) {
		for (let row = 0; row <= HEIGHT; row++) {
			if (grid[row][actualLinesCol].char === " ") {
				grid[row][actualLinesCol] = {
					char: ACTUAL_LINE,
					style: COLORS.actualLine
				};
			}
		}
	}

	// ============================================================
	// POINTS
	// ============================================================

	for (let i = 0; i < times.length; i++) {
		const x = indexToCol(i);
		const y = valueToRow(times[i]);
		const row = HEIGHT - y;

		if (row >= 0 && row <= HEIGHT && x >= 0 && x < WIDTH) {
			grid[row][x] = {
				char: POINT,
				style: earlyExits[i] ? COLORS.earlyPoint : COLORS.normalPoint
			};
		}
	}

	// ============================================================
	// TITLE
	// ============================================================

	if (title.includes("%c")) {
		console.log(`=== ${title} ===`, "font-weight: bold;", "");
	} else {
		console.log(`=== ${title} ===`);
	}

	// ============================================================
	// Y AXIS UNIT
	// ============================================================

	const yAxisPosition = 9;
	const unitStart = Math.max(0, yAxisPosition - Math.ceil(unit.length / 2));
	console.log(
		`%c${" ".repeat(unitStart)}${unit}`,
		COLORS.labels
	);

	// ============================================================
	// GRAPH
	// ============================================================

	for (let row = 0; row <= HEIGHT; row++) {
		const yValue = MAX_Y - (MAX_Y - MIN_Y) * row / HEIGHT;
		const label = (
			yValue < 10000 ? yValue.toFixed(2) :
			yValue < 100000 ? yValue.toFixed(1) :
			yValue.toFixed(0)
		).padStart(7) + "\u200B".repeat(row % 2);
		const axisChar = row === 0 ? Y_ARROW : AXIS;
		let output = `%c${label} %c${axisChar}`;
		const styles = [
			COLORS.labels,
			COLORS.axis
		];
		let currentStyle = null;
		for (const cell of grid[row]) {
			const style = cell.style;
			if (style !== currentStyle) {
				output += "%c";
				styles.push(style || "");
				currentStyle = style;
			}
			output += cell.char;
		}
		console.log(output, ...styles);
	}

	// ============================================================
	// X AXIS
	// ============================================================

	console.log(`%c        ${CORNER}${H_AXIS.repeat(WIDTH - 1)}${X_ARROW} N`, COLORS.axis);

	// ============================================================
	// X LABELS
	// ============================================================

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
	console.log(`%c         ${labels.join("")}`, COLORS.labels);

	// ============================================================
	// LEGEND
	// ============================================================

	console.log(
		`LEGEND: ` +
		`%c${POINT}%c - summary does not fit lines, ` +
		`%c${POINT}%c - summary fits lines - early exit, ` +
		`%c${ACTUAL_LINE}%c - actual lines = ${actualLines}`,
		COLORS.normalPoint,
		"",
		COLORS.earlyPoint,
		"",
		COLORS.actualLine,
		""
	);

	// ============================================================
	// STATISTICS
	// ============================================================

	let statistics = `STATISTICS, ${unit}: `;
	const statisticStyles = [];

	function appendStatistic(statistics, styles, label, mean, valueNoEE, valueEE) {
		statistics += " | ";
		
		const hasNoEE = valueNoEE !== undefined;
		const hasEE = valueEE !== undefined;

		if (hasNoEE && hasEE) {
			statistics += `${label}: %c${mean.toFixed(3)}%c`;
			styles.push(COLORS.mean, "");
			const values = [
				`%c${valueNoEE.toFixed(3)}%c`,
				`%c${valueEE.toFixed(3)}%c`
			];
			styles.push(COLORS.normalPoint, "");
			styles.push(COLORS.earlyPoint, "");
			return `${statistics} (${values.join(", ")})`;
		}

		if (hasNoEE) {
			statistics += `${label}: %c${valueNoEE.toFixed(3)}%c`;
			styles.push(COLORS.normalPoint, "");
			return statistics;
		}

		if (hasEE) {
			statistics += `${label}: %c${valueEE.toFixed(3)}%c`;
			styles.push(COLORS.earlyPoint, "");
			return statistics;
		}

		statistics += `${label}: %c${mean.toFixed(3)}%c`;
		styles.push(COLORS.mean, "");
		return statistics;
	}

	statistics += `Min: ${min.toFixed(3)}`;
	if (unit === "ms") {
		statistics = appendStatistic(
			statistics,
			statisticStyles,
			"Mean",
			mean,
			meanNoEE,
			meanEE
		);
		statistics = appendStatistic(
			statistics,
			statisticStyles,
			"Median",
			median,
			medianNoEE,
			medianEE
		);
	} else {
		statistics = appendStatistic(
			statistics,
			statisticStyles,
			"Geometric Mean",
			geometricMean,
			geometricMeanNoEE,
			geometricMeanEE
		);
	}
	statistics += ` | Max: ${max.toFixed(3)}`;
	console.log(statistics, ...statisticStyles);
	console.log("\u200B");
}

function testSummary(wordsCount) {

	console.log("Modify Summary Speed Test Started.");

	const testStart = performance.now();

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

	function getTimerQuantum(samples = 10) {
		const start = performance.now();
		let previous = start;
		let current;
		let count = 0;
		while (count < samples) {
			current = performance.now();
			if (current !== previous) {
				previous = current;
				count++;
			}
		}
		return (current - start) / samples;
	}
	const timerQuantum = getTimerQuantum();

	// Minimum total time for a series of very short measurements
	// to neutralize reduced timing precision caused by timing-attack protection.
	// Not needed when crossOriginIsolated is enabled,
	// because performance.now() has sufficient precision.
	const measureFixingTime = timerQuantum * 10;

	function round(num, digits = 4) {
		return Number(num.toFixed(digits));
	}

	console.log(
		`Test Data Generated: ${WORDS_COUNT} words (${actualLines} lines), ` +
		`applied for ${MIN_LINES}...${MAX_LINES} lines to show, ` +
		`${algorithms.length} algorithms: ${algorithms.map(algorithm => algorithm.name).join(", ")}. ` +
		`Measurement Precision - Timer Quantum: ${round(timerQuantum * 1000, 2)} µs.`
	);

	// =========================================================
	// PERFORMANCE DATA
	// =========================================================

	const perfData = new Map();
	let totalSum = 0;
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
	// RUN BENCHMARK
	// =========================================================

	function addPerf(perf, time, isEarlyExit) {
		perf.count++;
		perf.total += time;
		totalSum += time;
		perf.times.push(time);
		perf.earlyExits.push(isEarlyExit);
		if (time < perf.min) perf.min = time;
		if (time > perf.max) perf.max = time;
	}

	let labelTime = performance.now();
	console.log("Processing started.");

	for (let line = MIN_LINES; line <= MAX_LINES; line++) {

		if (performance.now() - labelTime > 5000) {
			console.log(
				`Processing: lines to show = ${line} - ` +
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

			let time;
			let isEarlyExit;
			if (crossOriginIsolated) {
				summaryDiv.innerHTML = "";
				const start = performance.now();
				isEarlyExit = algorithm.run(summaryDiv, words, line);
				time = Math.max(performance.now() - start, timerQuantum / 2);
			} else {
				let totalTime = 0;
				let runs = 0;
				do {
					summaryDiv.innerHTML = "";
					const start = performance.now();
					isEarlyExit = algorithm.run(summaryDiv, words, line);
					totalTime += performance.now() - start;
					runs++;
				} while (totalTime < measureFixingTime);

				time = totalTime / runs;
			}

			addPerf(perfData.get(algorithm), time, isEarlyExit);
		}
	}

	container.remove();

	// =========================================================
	// GENERAL STATISTICS
	// =========================================================

	const statisticsTable = {};
	for (const algorithm of algorithms) {
		const perf = perfData.get(algorithm);
		if (!perf?.times?.length) continue;

		let sumEE = 0;
		let sumNoEE = 0;
		let countEE = 0;
		let countNoEE = 0;
		let logSum = 0;
		let logSumEE = 0;
		let logSumNoEE = 0;
		let varianceSum = 0;
		
		const timesEE = [];
		const timesNoEE = [];
		
		perf.mean = perf.total / perf.count;
		const sortedTimes = [...perf.times].sort((a, b) => a - b);
		const middle = Math.floor(sortedTimes.length / 2);
		perf.median = sortedTimes.length % 2 === 0
			? (sortedTimes[middle - 1] + sortedTimes[middle]) / 2
			: sortedTimes[middle];

		for (let i = 0; i < perf.times.length; i++) {
			const time = perf.times[i];
			// time is always > 0
			const logTime = Math.log(time);
			logSum += logTime;
			const diff = time - perf.mean;
			varianceSum += diff * diff;
			if (perf.earlyExits[i]) {
				sumEE += time;
				countEE++;
				logSumEE += logTime;
				timesEE.push(time);
			} else {
				sumNoEE += time;
				countNoEE++;
				logSumNoEE += logTime;
				timesNoEE.push(time);
			}
		}

		const standardDeviation = Math.sqrt(varianceSum / perf.count);
		perf.geometricMean = Math.exp(logSum / perf.count);
		if (countEE > 0) {
			perf.meanEE = sumEE / countEE;
			perf.geometricMeanEE = Math.exp(logSumEE / countEE);
			
			const sortedEE = timesEE.sort((a, b) => a - b);
			const middleEE = Math.floor(sortedEE.length / 2);
			perf.medianEE = sortedEE.length % 2 === 0
				? (sortedEE[middleEE - 1] + sortedEE[middleEE]) / 2
				: sortedEE[middleEE];
		}
		if (countNoEE > 0) {
			perf.meanNoEE = sumNoEE / countNoEE;
			perf.geometricMeanNoEE = Math.exp(logSumNoEE / countNoEE);
			
			const sortedNoEE = timesNoEE.sort((a, b) => a - b);
			const middleNoEE = Math.floor(sortedNoEE.length / 2);
			perf.medianNoEE = sortedNoEE.length % 2 === 0
				? (sortedNoEE[middleNoEE - 1] + sortedNoEE[middleNoEE]) / 2
				: sortedNoEE[middleNoEE];
		}
		statisticsTable[algorithm.name] = {
			Count: perf.count,
			"Mean, ms": round(perf.mean),
			"Median, ms": round(perf.median),
			"Std Dev, ms": round(standardDeviation),
			"Min, ms": round(perf.min),
			"Max, ms": round(perf.max),
			"Total, ms": round(perf.total),
			"Share, %": round(perf.total / totalSum * 100)
		};
	}

	console.log("=== GENERAL STATISTICS ===");
	console.table(statisticsTable);

	// =========================================================
	// PERFORMANCE GRAPHS
	// =========================================================

	console.log("=== PERFORMANCE GRAPHS ===");
	console.log("\u200B");

	for (const algorithm of algorithms) {
		const perf = perfData.get(algorithm);
		if (!perf?.times?.length) continue;
		consolePlot(algorithm.name, perf, actualLines);
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

		const getSpeedupTimes = (perfFast, perfSlow) =>
			perfFast.times.map((timeFast, i) => perfSlow.times[i] / timeFast);

		// GM(B / A) = GM(B) / GM(A)
		const speedupAB = perfB.geometricMean / perfA.geometricMean;
		const isAFaster = speedupAB >= 1;

		const perfFast = isAFaster ? perfA : perfB;
		const perfSlow = isAFaster ? perfB : perfA;

		const times = getSpeedupTimes(perfFast, perfSlow);
		const geometricMean = isAFaster ? speedupAB : 1 / speedupAB;

		const result = {
			count: times.length,
			geometricMean,
			min: Math.min(...times),
			max: Math.max(...times),
			times,
			isAFaster,
			earlyExits: [...perfFast.earlyExits]
		};

		if (
			perfFast.geometricMeanEE !== undefined &&
			perfSlow.geometricMeanEE !== undefined
		) {
			result.geometricMeanEE = perfSlow.geometricMeanEE / perfFast.geometricMeanEE;
		}
		if (
			perfFast.geometricMeanNoEE !== undefined &&
			perfSlow.geometricMeanNoEE !== undefined
		) {
			result.geometricMeanNoEE = perfSlow.geometricMeanNoEE / perfFast.geometricMeanNoEE;
		}

		return result;
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

		const speedupPerf = createSpeedupPerf(perfA, perfB);
		if (!speedupPerf) return;
		const title = speedupPerf.isAFaster
			? `Speedup: %c${algA.name}%c ↔ ${algB.name}`
			: `Speedup: ${algA.name} ↔ %c${algB.name}%c`;

		consolePlot(title, speedupPerf, actualLines, unit);
	}

	console.log("=== SPEEDUP GRAPHS ===");
	console.log("\u200B");
	consoleSpeedupPlot("Alg 1", "Alg 2", actualLines, "×");
	consoleSpeedupPlot("Alg 1", "One By One", actualLines, "×");
	consoleSpeedupPlot("Alg 2", "One By One", actualLines, "×");

	// =========================================================
	// COMPLETE
	// =========================================================

	const testTime = performance.now() - testStart;
	console.log("Modify Summary Speed Test Completed.");
	console.log(`Duration: ${(testTime / 1000).toFixed(2)} s.`);

	return "End";

}
