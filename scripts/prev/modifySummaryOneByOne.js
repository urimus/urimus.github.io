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

let perf1 = {
	count: 0,
	total: 0,
	min: Infinity,
	max: 0
};

let perf2 = {
	count: 0,
	total: 0,
	min: Infinity,
	max: 0
};


function testSummary(summaryDiv, entry_summary, summary_words) {

	function runAlgorithm1() {
		const start = performance.now();

		summaryDiv.innerHTML = "";

		const summarySpan = document.createElement("span");
		summarySpan.className = "text_red";
		summarySpan.style.overflowWrap = "anywhere";

		summaryDiv.appendChild(summarySpan);

		modifySummary(
			summaryDiv,
			summarySpan,
			entry_summary,
			summary_words,
			"red",
			4
		);

		const time = performance.now() - start;

		perf1.count++;
		perf1.total += time;
		if (time < perf1.min) perf1.min = time;
		if (time > perf1.max) perf1.max = time;
	}


	function runAlgorithm2() {
		const start = performance.now();

		summaryDiv.innerHTML = "";

		const summarySpan = document.createElement("span");
		summarySpan.className = "text_red";
		summarySpan.style.overflowWrap = "anywhere";

		summaryDiv.appendChild(summarySpan);

		modifySummaryOneByOne(
			summaryDiv,
			summarySpan,
			entry_summary,
			summary_words,
			"red",
			4
		);

		const time = performance.now() - start;

		perf2.count++;
		perf2.total += time;
		if (time < perf2.min) perf2.min = time;
		if (time > perf2.max) perf2.max = time;
	}


	// Случайно выбираем порядок
	if (Math.random() < 0.5) {
		runAlgorithm1();
		runAlgorithm2();
	} else {
		runAlgorithm2();
		runAlgorithm1();
	}


	const avg1 = perf1.total / perf1.count;
	const avg2 = perf2.total / perf2.count;

	console.table({
		"Algorithm 1": {
			count: perf1.count,
			avg: avg1.toFixed(4) + " ms",
			min: perf1.min.toFixed(4) + " ms",
			max: perf1.max.toFixed(4) + " ms",
			total: perf1.total.toFixed(2) + " ms",
			speedup: (avg2 / avg1).toFixed(2) + "x"
		},

		"Algorithm 2": {
			count: perf2.count,
			avg: avg2.toFixed(4) + " ms",
			min: perf2.min.toFixed(4) + " ms",
			max: perf2.max.toFixed(4) + " ms",
			total: perf2.total.toFixed(2) + " ms",
			speedup: (avg1 / avg2).toFixed(2) + "x"
		}
	});
}