"use strict";

// =========================================================
// BENCHMARK
// =========================================================

console.log(
	'Type "testSummary(number)" to start Modify Summary Speed Test. ' +
	'Number - Words Count per Test, Default - 100.'
);

function randomWord() {
	const r = Math.random();
	let length;

	if (r < 0.01) { // long word stress test
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

	const TEST_COUNT = 1000;
	const MIN_LINES = 1;
	const MAX_LINES = 10;
	const WORDS_COUNT = wordsCount ?? MAX_LINES * 10;

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
		`Modify Summary Speed Test Started: ${TEST_COUNT} texts, ` +
		`${WORDS_COUNT} words, ` +
		`applied for ${MIN_LINES}...${MAX_LINES} lines, ` +
		`${algorithms.length} algorithms: ${algorithms.map(algorithm => algorithm.name).join(", ")}.`
	);

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
			times: []
		});
	}

	// =========================================================
	// TEST GENERATION
	// =========================================================

	function generateTest() {

		const linesToShow = MIN_LINES + Math.floor(Math.random() * (MAX_LINES - MIN_LINES + 1));
		const useEarlyExit = Math.random() < 0.5;

		let words;
		if (useEarlyExit) {
			words = new Array(linesToShow * 5);
		} else {
			words = new Array(WORDS_COUNT);
		}
		for (let i = 0; i < words.length; i++) {
			words[i] = randomWord();
		}
		return {
			linesToShow,
			summary: words.join(" "),
			words
		};
	}

	// =========================================================
	// RUN BENCHMARK
	// =========================================================

	const testStart = performance.now();

	for (let test = 0; test < TEST_COUNT; test++) {

		const data = generateTest();

		// Random order for all algorithms.
		const shuffledAlgorithms = [...algorithms];

		for (let i = shuffledAlgorithms.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledAlgorithms[i], shuffledAlgorithms[j]] = [shuffledAlgorithms[j], shuffledAlgorithms[i]];
		}

		for (const algorithm of shuffledAlgorithms) {
			summaryDiv.innerHTML = "";
			const start = performance.now();
			algorithm.run(summaryDiv, data.summary, data.words, data.linesToShow);
			const time = performance.now() - start;
			addPerf(perfData.get(algorithm), time);
		}
	}

	const testTime = performance.now() - testStart;

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

	const totalAlgorithmsTime = algorithms.reduce(
		(sum, algorithm) => sum + perfData.get(algorithm).total,
		0
	);

	console.log(
		`Modify Summary Speed Test Completed. ` +
		`Algorithms Total: ${(totalAlgorithmsTime / 1000).toFixed(2)} s. ` +
		`Duration: ${(testTime / 1000).toFixed(2)} s.`
	);
	container.remove();
}
