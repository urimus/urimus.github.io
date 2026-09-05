"use strict";

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

function testSummary(summaryDiv) {
	if (testComplete) return;

	testComplete = true;

	const TEST_COUNT = 1000;
	const WORDS_COUNT = 1000;
	const MIN_LINES = 1;
	const MAX_LINES = 10;

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
		`Modify Summary Speed Test Started: ${TEST_COUNT} texts, ${WORDS_COUNT} words, ${algorithms.length} algorithms: ${algorithms.map(algorithm => algorithm.name).join(", ")}.`
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
	// TEST TEXT GENERATION
	// =========================================================

	function generateTestText() {
		const words = new Array(WORDS_COUNT);

		for (let i = 0; i < WORDS_COUNT; i++) {
			words[i] = randomWord();
		}

		return {
			summary: words.join(" "),
			words: words
		};
	}

	// =========================================================
	// RUN BENCHMARK
	// =========================================================

	const testStart = performance.now();

	for (let test = 0; test < TEST_COUNT; test++) {
		const linesToShow =
			MIN_LINES +
			Math.floor(Math.random() * (MAX_LINES - MIN_LINES + 1));

		const data = generateTestText();

		// Random order for all algorithms.
		const shuffledAlgorithms = [...algorithms];

		for (let i = shuffledAlgorithms.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledAlgorithms[i], shuffledAlgorithms[j]] =
				[shuffledAlgorithms[j], shuffledAlgorithms[i]];
		}

		for (const algorithm of shuffledAlgorithms) {
			summaryDiv.innerHTML = "";

			const start = performance.now();

			algorithm.run(
				summaryDiv,
				data.summary,
				data.words,
				linesToShow
			);

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
			"average time share":
				(average / totalAverageTime * 100).toFixed(2) + "%"
		};
	}

	console.log("=== STATISTICS ===");
	console.table(statistics);

	// =========================================================
	// RESULT
	//
	// Compare any two algorithms manually here.
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

	// =========================================================
	// MANUAL COMPARISONS
	// =========================================================

	const comparison12 = compareAlgorithms(algorithms[0], algorithms[1]);
	const comparison13 = compareAlgorithms(algorithms[0], algorithms[2]);
	const comparison23 = compareAlgorithms(algorithms[1], algorithms[2]);

	console.log("=== RESULT ===");

	console.table({
		[`${algorithms[0].name} ↔ ${algorithms[1].name}`]: comparison12,
		[`${algorithms[0].name} ↔ ${algorithms[2].name}`]: comparison13,
		[`${algorithms[1].name} ↔ ${algorithms[2].name}`]: comparison23
	});

	// =========================================================
	// COMPLETE
	// =========================================================

	console.log(
		`Modify Summary Speed Test Completed. Duration: ${testTime.toFixed(2)} ms.`
	);
}
