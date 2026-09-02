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

	return {
		count: perf.count,
		total: perf.total.toFixed(2) + " ms",
		"avg = total / count": (perf.total / perf.count).toFixed(4) + " ms",
		median: percentile(0.50).toFixed(4) + " ms",
		p95: percentile(0.95).toFixed(4) + " ms",
		p99: percentile(0.99).toFixed(4) + " ms",
		min: perf.min.toFixed(4) + " ms",
		max: perf.max.toFixed(4) + " ms"
	};
}

function testSummary(summaryDiv) {
	if (testComplete) return;

	testComplete = true;

	const TEST_COUNT = 1000;
	const MIN_LINES = 1;
	const MAX_LINES = 10;

	console.log(
		`Modify Summary Speed Test Started: ${TEST_COUNT} texts.`
	);


	// =========================================================
	// PERFORMANCE DATA
	// =========================================================

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


	// =========================================================
	// TEST TEXT GENERATION
	// =========================================================

	function generateTestText(linesToShow) {
		const maxWords = linesToShow * 20;

		const wordsCount =
			1 +
			Math.floor(
				Math.random() * maxWords
			);

		const words = new Array(wordsCount);

		for (let i = 0; i < wordsCount; i++) {
			words[i] = randomWord();
		}

		return {
			summary: words.join(" "),
			words: words
		};
	}


	// =========================================================
	// ALGORITHM 1
	// =========================================================

	function runAlgorithm1(
		entry_summary,
		summary_words,
		linesToShow
	) {
		summaryDiv.innerHTML = "";

		const span = document.createElement("span");

		span.setAttribute(
			"class",
			"text_red"
		);

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

		const time =
			performance.now() - start;

		addPerf(perf1, time);
	}


	// =========================================================
	// ALGORITHM 2
	// =========================================================

	function runAlgorithm2(
		entry_summary,
		summary_words,
		linesToShow
	) {
		summaryDiv.innerHTML = "";

		const span = document.createElement("span");

		span.setAttribute(
			"class",
			"text_red"
		);

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

		const time =
			performance.now() - start;

		addPerf(perf2, time);
	}


	// =========================================================
	// ONE BY ONE
	// =========================================================

	function runAlgorithm3(
		entry_summary,
		summary_words,
		linesToShow
	) {
		summaryDiv.innerHTML = "";

		const span = document.createElement("span");

		span.setAttribute(
			"class",
			"text_red"
		);

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

		const time =
			performance.now() - start;

		addPerf(perf3, time);
	}


	// =========================================================
	// RUN BENCHMARK
	// =========================================================

	const testStart = performance.now();

	for (
		let test = 0;
		test < TEST_COUNT;
		test++
	) {
		const linesToShow =
			MIN_LINES +
			Math.floor(
				Math.random() *
				(MAX_LINES - MIN_LINES + 1)
			);

		const data =
			generateTestText(linesToShow);

		const entry_summary =
			data.summary;

		const summary_words =
			data.words;


		// -----------------------------------------------------
		// Random order for all three algorithms.
		// -----------------------------------------------------

		const algorithms = [
			runAlgorithm1,
			runAlgorithm2,
			runAlgorithm3
		];

		for (
			let i = algorithms.length - 1;
			i > 0;
			i--
		) {
			const j =
				Math.floor(
					Math.random() * (i + 1)
				);

			[
				algorithms[i],
				algorithms[j]
			] = [
				algorithms[j],
				algorithms[i]
			];
		}

		for (const algorithm of algorithms) {
			algorithm(
				entry_summary,
				summary_words,
				linesToShow
			);
		}
	}

	const testTime =
		performance.now() - testStart;


	// =========================================================
	// STATISTICS
	// =========================================================

	const avg1 =
		perf1.total / perf1.count;

	const avg2 =
		perf2.total / perf2.count;

	const avg3 =
		perf3.total / perf3.count;


	// Sum of average execution times.
	// Used only to calculate average time share.

	const totalAverageTime =
		avg1 + avg2 + avg3;


	// ---------------------------------------------------------
	// Base statistics for each algorithm.
	// ---------------------------------------------------------

	const statistics1 = {
		...getStatistics(perf1),

		"average time share":
			(
				avg1 /
				totalAverageTime *
				100
			).toFixed(2) + "%"
	};

	const statistics2 = {
		...getStatistics(perf2),

		"average time share":
			(
				avg2 /
				totalAverageTime *
				100
			).toFixed(2) + "%"
	};

	const statistics3 = {
		...getStatistics(perf3),

		"average time share":
			(
				avg3 /
				totalAverageTime *
				100
			).toFixed(2) + "%"
	};


	console.log("=== STATISTICS ===");

	console.table({
		"Alg 1": statistics1,
		"Alg 2": statistics2,
		"One By One": statistics3
	});


	// =========================================================
	// RESULT
	// =========================================================

	function compareAlgorithms(
		avgA,
		avgB,
		nameA,
		nameB
	) {
		const difference =
			Math.abs(avgA - avgB);

		let faster;
		let slower;
		let fasterAvg;
		let slowerAvg;

		if (avgA <= avgB) {
			faster = nameA;
			slower = nameB;
			fasterAvg = avgA;
			slowerAvg = avgB;
		} else {
			faster = nameB;
			slower = nameA;
			fasterAvg = avgB;
			slowerAvg = avgA;
		}

		return {
			"Faster":
				faster,

			"Slower":
				slower,

			"Average Difference":
				difference.toFixed(4) + " ms",

			"Speedup":
				(slowerAvg / fasterAvg).toFixed(2) + "x"
		};
	}


	const comparison12 =
		compareAlgorithms(
			avg1,
			avg2,
			"Alg 1",
			"Alg 2"
		);

	const comparison13 =
		compareAlgorithms(
			avg1,
			avg3,
			"Alg 1",
			"One By One"
		);

	const comparison23 =
		compareAlgorithms(
			avg2,
			avg3,
			"Alg 2",
			"One By One"
		);


	console.log("=== RESULT ===");

	console.table({
		"Alg 1 ↔ Alg 2":
			comparison12,

		"Alg 1 ↔ One By One":
			comparison13,

		"Alg 2 ↔ One By One":
			comparison23
	});

	// =========================================================
	// COMPLETE
	// =========================================================

	console.log(
		`Modify Summary Speed Test Completed. Duration: ${testTime.toFixed(2)} ms.`
	);
}
