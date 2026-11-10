"use strict";

// =========================================================
// BENCHMARK - MODIFY SUMMARY
// =========================================================

console.groupCollapsed('Type "testSummary(Number)" to Start the Modify Summary Benchmark Run');
console.log("Number: Word Count in the Summary");
console.log("Default:", 1000);
console.groupEnd();

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

function consolePlot(title, perf, unit = "ms", description) {
	const {
		times,
		earlyReturns,
		min,
		max,
		measuredLines,
		mean,
		meanER,
		meanETE,
		median,
		medianER,
		medianETE,
		algAName,
		algBName
	} = perf;
	const regression = perf.regression ? { ...perf.regression } : null;

	// ============================================================
	// TITLE AND DESCRIPTION
	// ============================================================
	const titleDescription = description?.trim() ? `, ${description.trim()}` : "";
	console.group(title + titleDescription);
	
	// ============================================================
	// INIT
	// ============================================================
	
	// Colors
	const COLORS = {
		ETEPoint: "color: #ff5555;",
		approximation: "color: #ff5555; font-weight: bold;",
		ERPoint: "color: #bd93f9;",
		axis: "color: #888;",
		labels: "color: #aaa;",
		measuredLine: "color: #888;"
	};

	if (times.length === 0) {
		console.log("No measurements.");
		return;
	}

	if (times.length === 1) {
		console.log("Single Measurement:", round(times[0], 3), unit);
		return;
	}

	const WIDTH = 90;
	const HEIGHT = 22;

	const MIN_Y = min;
	const MAX_Y = max;

	// Symbols
	const POINT = "●";
	const APPROXIMATION_POINT = "∙"; // ○×·∙
	const MEASURED_LINE = "╎";
	const AXIS = "│";
	const H_AXIS = "─";
	const CORNER = "└";
	const Y_ARROW = "↑";
	const X_ARROW = "→";

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

	const measuredLinesIndex = measuredLines - 1;
	const measuredLinesCol =
		measuredLines >= 1 && measuredLines <= times.length
			? indexToCol(measuredLinesIndex)
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
	// SLOPE LINE (All N)
	// ============================================================

	const drawSlope = regression != null && unit === "ms";

	if (drawSlope) {
		const slopePoints = times.map((time, i) => ({
			n: i + 1,
			value: regression.intercept + regression.slope * (i + 1)
		}));

		for (const point of slopePoints) {
			const x = indexToCol(point.n - 1);
			const y = valueToRow(point.value);
			const row = HEIGHT - y;

			if (row >= 0 && row <= HEIGHT && x >= 0 && x < WIDTH) {
				grid[row][x] = {
					char: APPROXIMATION_POINT,
					style: COLORS.approximation
				};
			}
		}
	}

	// ============================================================
	// MEASURED LINE
	// ============================================================

	if (measuredLinesCol !== null) {
		for (let row = 0; row <= HEIGHT; row++) {
			if (grid[row][measuredLinesCol].char === " ") {
				grid[row][measuredLinesCol] = {
					char: MEASURED_LINE,
					style: COLORS.measuredLine
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
				style: earlyReturns[i] ? COLORS.ERPoint : COLORS.ETEPoint
			};
		}
	}

	// ============================================================
	// Y AXIS UNIT + EXECUTION LABELS + MEASURED LINES LABEL
	// ============================================================

	const yAxisPosition = 9;
	const labels = [
		{
			text: unit,
			position: 0,
			color: COLORS.labels
		},
		...(measuredLinesCol !== null
			? [
				{
					text: "End-to-End Executions",
					position: Math.ceil(measuredLinesCol / 2),
					color: COLORS.ETEPoint
				},
				{
					text: String(measuredLines),
					position: measuredLinesCol,
					color: COLORS.measuredLine
				},
				{
					text: "Early Return Executions",
					position: Math.ceil((measuredLinesCol + WIDTH - 1) / 2),
					color: COLORS.ERPoint
				}
			]
			: [
				{
					text: "Early Return Executions",
					position: Math.ceil((WIDTH - 1) / 2),
					color: COLORS.ERPoint
				}
			])
	];
	let output = "";
	const styles = [];
	let cursor = 0;
	for (const label of labels) {
		const start = yAxisPosition + label.position - Math.ceil(label.text.length / 2);
		output += `%c${" ".repeat(Math.max(0, start - cursor))}${label.text}`;
		styles.push(label.color);
		cursor = Math.max(cursor, start) + label.text.length;
	}
	console.log(output, ...styles);

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

	const xlabels = Array(WIDTH).fill(" ");
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
			xlabels[start + i] = text[i];
		}
	}
	console.log(`%c         ${xlabels.join("")}`, COLORS.labels);

	// ============================================================
	// LEGEND
	// ============================================================

	console.groupCollapsed("Legend");
	if (unit === "ms") {
		console.log(`%c${POINT} End-to-End Executions (Summary Does Not Fit Lines)`, COLORS.ETEPoint);
		console.log(`%c${APPROXIMATION_POINT}%c %cTheil–Sen Approximation of End-to-End Executions`, COLORS.approximation, "", COLORS.ETEPoint);
		console.log(`%c${POINT} Early Return Executions (Summary Fits Lines)`, COLORS.ERPoint);
	} else {
		console.log(`%c${POINT} Speedups Across End-to-End Executions (Summary Does Not Fit Lines)`, COLORS.ETEPoint);
		console.log(`%c${POINT} Speedups Across Early Return Executions (Summary Fits Lines)`, COLORS.ERPoint);
	}
	console.log(`%c${MEASURED_LINE} Measured Lines Count in Summary:`, COLORS.measuredLine, measuredLines);
	console.groupEnd();

	// ============================================================
	// REGRESSION
	// ============================================================

	if (regression != null) {
		const consoleEquation = (prefix, regression) =>
			console.log(`${prefix}y(x) =`, round(regression.slope), "x", regression.intercept < 0 ? "−" : "+", round(Math.abs(regression.intercept)), "(ms)");
		if (unit === "ms") {
			console.groupCollapsed(`Theil–Sen Regression of %cEnd-to-End Executions%c`, COLORS.ETEPoint, "");
			consoleEquation("", regression);
		} else {
			console.groupCollapsed(`Comparison of the Slopes of Theil–Sen Regressions of %cEnd-to-End Executions%c`, COLORS.ETEPoint, "");
			consoleEquation(algAName + ": ", regression.regressionA);
			consoleEquation(algBName + ": ", regression.regressionB);
			console.log(`${description}:`, round(regression.greaterSlope), ">", round(regression.smallerSlope));
		}
		console.groupEnd();
	}

	// ============================================================
	// STATISTICS
	// ============================================================

	console.groupCollapsed(`Statistics, ${unit}`);
	console.log("Min:", round(min));
	function logStatistic(label, value, valueETE, valueER) {
		const hasETE = valueETE !== undefined;
		const hasER = valueER !== undefined;
		console.group(label);
		if (hasETE && hasER) {
			console.log("All:", round(value));
			console.log(`%cEnd-to-End Executions:`, COLORS.ETEPoint, round(valueETE));
			console.log(`%cEarly Return Executions:`, COLORS.ERPoint, round(valueER));
		} else if (hasETE) {
			console.log(`%cEnd-to-End Executions:`, COLORS.ETEPoint, round(valueETE));
		} else if (hasER) {
			console.log(`%cEarly Return Executions:`, COLORS.ERPoint, round(valueER));
		} else {
			console.log("All:", round(value));
		}
		console.groupEnd();
	}
	logStatistic("Mean", mean, meanETE, meanER);
	logStatistic("Median", median, medianETE, medianER);
	console.log("Max:", round(max));
	console.groupEnd();

	console.groupEnd();

}

function testSummary(wordsCount) {

	console.log("Modify Summary Benchmark Run Started.");

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
	const SAFETY_MAX_LINES = Math.max(1, WORDS_COUNT);
	const EXTRA_LINES_RATIO = 0.5;

	// =========================================================
	// ALGORITHMS
	// =========================================================

	const algorithms = [
		{
			name: "Alg 1",
			description: "Stable option using getClientRects",
			run: modifySummary
		},
		{
			name: "Alg 2",
			description: "Simple option using single pointer",
			run: modifySummary2
		},
		{
			name: "Alg 3",
			description: "Option using many pointers",
			run: modifySummary3
		}
	];

	console.group("Algorithms:");
	algorithms.forEach(a => {
		console.log(a.name + ", " + a.description);
	});
	console.groupEnd();

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
		lines.add(roundLayoutValue(rect.top));
	}

	const actualLines = lines.size;

	function getTimerMinimum(samples = 10) {
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
	const timerMinimum = getTimerMinimum();

	// Minimum total time for a series of very short measurements
	// to neutralize reduced timing precision caused by timing-attack protection.
	// Not needed when crossOriginIsolated is enabled,
	// because performance.now() has sufficient precision.
	const measureFixingTime = timerMinimum * 10;

	console.group("Test Data - Summary:");
	console.groupCollapsed("Words");
	console.log(words);
	console.groupEnd();
	console.log("Words Count:", WORDS_COUNT);
	console.log("Actual Lines:", actualLines);
	console.log("Measurement Precision - Timer Minimum:", round(timerMinimum * 1000, 2), "µs");
	console.groupEnd();

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
			earlyReturns: [],
			measuredLines: null
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
		perf.earlyReturns.push(isEarlyExit);
		if (isEarlyExit && perf.measuredLines === null) perf.measuredLines = perf.count;
		if (time < perf.min) perf.min = time;
		if (time > perf.max) perf.max = time;
		return perf.measuredLines;
	}

	let labelTime = performance.now();
	console.group("Benchmark Run");
	let testTime = performance.now() - testStart;
	console.log("Processing started (elapsed:", round(testTime / 1000, 2), "s)");

	let line = MIN_LINES;
	let measurementComplete = false;

	while (true) {

		if (line > SAFETY_MAX_LINES) break;

		if (performance.now() - labelTime > 5000) {
			testTime = performance.now() - testStart;
			console.log("Processing: lines to show:", line,"(elapsed:", round(testTime / 1000, 2), "s)");
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
				summaryDiv.replaceChildren();
				summaryDiv.offsetHeight;
				const start = performance.now();
				isEarlyExit = algorithm.run(summaryDiv, words, line);
				time = Math.max(performance.now() - start, timerMinimum / 2);
			} else {
				let totalTime = 0;
				let runs = 0;
				do {
					summaryDiv.replaceChildren();
					summaryDiv.offsetHeight;
					const start = performance.now();
					isEarlyExit = algorithm.run(summaryDiv, words, line);
					totalTime += performance.now() - start;
					runs++;
				} while (totalTime < measureFixingTime);

				time = totalTime / runs;
			}

			const measuredLines = addPerf(perfData.get(algorithm), time, isEarlyExit);
			if (measuredLines !== null && line >= measuredLines + (measuredLines - 1) * EXTRA_LINES_RATIO) {
				measurementComplete = true;
			}
		}
		if (measurementComplete) break;
		line++;
	}

	container.remove();

	testTime = performance.now() - testStart;
	console.log("Processing completed (elapsed:", round(testTime / 1000, 2), "s)");
	console.groupEnd();

	// =========================================================
	// GENERAL STATISTICS
	// =========================================================

	function theilSenRegression(times, earlyReturns, minLines) {
		const points = [];
		for (let i = 0; i < times.length; i++) {
			if (!earlyReturns[i]) {
				points.push({
					x: i + minLines,
					y: times[i]
				});
			}
		}
		if (points.length < 2) return null;
		const slopes = [];
		for (let i = 0; i < points.length - 1; i++) {
			for (let j = i + 1; j < points.length; j++) {
				const dx = points[j].x - points[i].x;
				if (dx !== 0) {
					slopes.push(
						(points[j].y - points[i].y) / dx
					);
				}
			}
		}
		if (!slopes.length) return null;
		const median = values => {
			values.sort((a, b) => a - b);
			const middle = Math.floor(values.length / 2);
			return values.length % 2
				? values[middle]
				: (values[middle - 1] + values[middle]) / 2;
		};
		const slope = median(slopes);
		const intercept = median(
			points.map(point => point.y - slope * point.x)
		);
		return { slope, intercept };
	}

	const statisticsTable = {};
	for (const algorithm of algorithms) {
		const perf = perfData.get(algorithm);
		if (!perf?.times?.length) continue;

		let sumER = 0;
		let sumETE = 0;
		let countER = 0;
		let countETE = 0;
		let varianceSum = 0;
		const timesER = [];
		const timesETE = [];
		
		perf.mean = perf.total / perf.count;
		const sortedTimes = [...perf.times].sort((a, b) => a - b);
		const middle = Math.floor(sortedTimes.length / 2);
		perf.median = sortedTimes.length % 2 === 0
			? (sortedTimes[middle - 1] + sortedTimes[middle]) / 2
			: sortedTimes[middle];

		for (let i = 0; i < perf.times.length; i++) {
			const time = perf.times[i];
			const diff = time - perf.mean;
			varianceSum += diff * diff;
			if (perf.earlyReturns[i]) {
				sumER += time;
				countER++;
				timesER.push(time);
			} else {
				sumETE += time;
				countETE++;
				timesETE.push(time);
			}
		}

		const standardDeviation = Math.sqrt(varianceSum / perf.count);
		if (countER > 0) {
			perf.meanER = sumER / countER;
			const sortedER = timesER.sort((a, b) => a - b);
			const middleER = Math.floor(sortedER.length / 2);
			perf.medianER = sortedER.length % 2 === 0
				? (sortedER[middleER - 1] + sortedER[middleER]) / 2
				: sortedER[middleER];
		}
		if (countETE > 0) {
			perf.meanETE = sumETE / countETE;
			const sortedETE = timesETE.sort((a, b) => a - b);
			const middleETE = Math.floor(sortedETE.length / 2);
			perf.medianETE = sortedETE.length % 2 === 0
				? (sortedETE[middleETE - 1] + sortedETE[middleETE]) / 2
				: sortedETE[middleETE];
		}
		perf.regression = theilSenRegression(
			perf.times,
			perf.earlyReturns,
			MIN_LINES
		);
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

	console.group("General Statistics");
	console.table(statisticsTable);
	console.groupEnd();

	// =========================================================
	// PERFORMANCE GRAPHS
	// =========================================================

	console.group("Performance Graphs");
	let hasErrors = false;
	for (const algorithm of algorithms) {
		const perf = perfData.get(algorithm);
		if (!perf?.times?.length) continue;
		if (perf.measuredLines !== actualLines) {
			console.error(
				algorithm.name,
				"Measured Lines:", perf.measuredLines,
				"!== Actual Lines:", actualLines
			);
			hasErrors = true;
			continue;
		}
		consolePlot(algorithm.name, perf, "ms", algorithm.description);
	}
	console.groupEnd();
	if (hasErrors) {
		testTime = performance.now() - testStart;
		console.error("Modify Summary Benchmark Run NOT Completed.");
		console.log("Duration:", round(testTime / 1000, 2), "s.");
		return "End";
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

	function createSpeedupPerf(perfFast, perfSlow) {

		const times = new Array(perfFast.times.length);
		const timesER = [];
		const timesETE = [];

		let sum = 0;
		let min = Infinity;
		let max = -Infinity;
		let sumER = 0;
		let sumETE = 0;

		for (let i = 0; i < times.length; i++) {
			const time = perfSlow.times[i] / perfFast.times[i];
			times[i] = time;
			sum += time;
			if (time < min) min = time;
			if (time > max) max = time;
			if (perfFast.earlyReturns[i]) {
				timesER.push(time);
				sumER += time;
			} else {
				timesETE.push(time);
				sumETE += time;
			}
		}

		const mean = sum / times.length;
		const meanER = timesER.length ? sumER / timesER.length : undefined;
		const meanETE = timesETE.length ? sumETE / timesETE.length : undefined;

		const getMedian = values => {
			if (!values.length) return undefined;

			const sorted = [...values].sort((a, b) => a - b);
			const middle = Math.floor(sorted.length / 2);

			return sorted.length % 2 === 0
				? (sorted[middle - 1] + sorted[middle]) / 2
				: sorted[middle];
		};
		const result = {
			mean,
			median: getMedian(times),
			meanER,
			medianER: getMedian(timesER),
			meanETE,
			medianETE: getMedian(timesETE),
			min,
			max,
			times,
			earlyReturns: [...perfFast.earlyReturns],
			measuredLines: perfFast.measuredLines
		};
		return result;
	}

	function consoleSpeedupPlot(algorithmA, algorithmB, unit) {

		const algA = getAlgorithm(algorithmA);
		const algB = getAlgorithm(algorithmB);
		if (!algA) {
			console.error("Algorithm", algorithmA, "not found.");
			return;
		}
		if (!algB) {
			console.error("Algorithm", algorithmB, "not found.");
			return;
		}
		const perfA = perfData.get(algA);
		const perfB = perfData.get(algB);
		if (!perfA || !perfB) {
			console.error("Cannot compare speedup: missing performance data.");
			return;
		}
		if (perfA.times.length !== perfB.times.length) {
			console.error("Cannot create speedup: different times length.");
			return;
		}
		if (perfA.regression == null || perfB.regression == null) {
			console.error("Cannot compare speedup: missing regression data.");
			return;
		}
		
		// Determine which algorithm is faster by its Theil–Sen Regression for End-to-End Execution Points.
		const slopeA = perfA.regression.slope;
		const slopeB = perfB.regression.slope;
		const isAFaster = slopeA <= slopeB;
		
		const perfFast = isAFaster ? perfA : perfB;
		const perfSlow = isAFaster ? perfB : perfA;
		const speedupPerf = createSpeedupPerf(perfFast, perfSlow);
		
		const regression = {
			smallerSlope: perfFast.regression.slope,
			greaterSlope: perfSlow.regression.slope,
			regressionA : perfA.regression,
			regressionB : perfB.regression
		};
		speedupPerf.regression = regression;
		speedupPerf.algAName = algA.name;
		speedupPerf.algBName = algB.name;
		
		const title = `${algA.name} ↔ ${algB.name}`;
		const description = (isAFaster ? algA.name : algB.name) + " is Faster";
		consolePlot(title, speedupPerf, unit, description);
	}

	console.group("Speedup Graphs");
	console.log("The Winner is Selected by Comparison of the Slopes of Theil–Sen Regressions of End-to-End Executions");
	consoleSpeedupPlot("Alg 1", "Alg 2", "×");
	consoleSpeedupPlot("Alg 1", "Alg 3", "×");
	consoleSpeedupPlot("Alg 2", "Alg 3", "×");
	console.groupEnd();

	// =========================================================
	// COMPLETE
	// =========================================================

	testTime = performance.now() - testStart;
	console.log("Modify Summary Benchmark Run Completed.");
	console.log("Duration:", round(testTime / 1000, 2), "s.");
	return "End";

}
