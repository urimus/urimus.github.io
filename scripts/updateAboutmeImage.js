"use strict";
// ------------- Global Variables ---------------- //
var toSkip = 0;
// ------------- End of Global Variables ---------------- //

function formatSummary(summary_arr, words) {
	var summaryToShow = "";
	var j;
	for (j = 0; j < words && j < summary_arr.length; j++) {
		if (j == summary_arr.length - 1) {
			summaryToShow = summaryToShow + summary_arr[j];
		} else {
			summaryToShow = summaryToShow + summary_arr[j] + " ";
		}
	}
	return summaryToShow;
}

function showErrorImage(lang, type) {
	var table = document.getElementById("imagetable");
	table.replaceChildren();

	var imageDesc;
	if (type == "skipped") {
		if (lang == "eng") imageDesc = "Loading Skipped";
		if (lang == "rus") imageDesc = "Загрузка Отменена";
		if (lang == "lat") imageDesc = "Loading Skipped";
	}
	if (type == "error") {
		if (lang == "eng") imageDesc = "Loading Error";
		if (lang == "rus") imageDesc = "Ошибка Загрузки";
		if (lang == "lat") imageDesc = "Loading Error";
	}

	var tableRow = table.insertRow(-1);
	var cell1 = tableRow.insertCell(0);
	var ImgE = document.createElement("img");
	ImgE.setAttribute('class', "text_blue");
	if (type == "skipped") ImgE.setAttribute('src', "images/icons/error/no_image_blue.png");
	if (type == "error") ImgE.setAttribute('src', "images/icons/error/error.jpg");
	ImgE.setAttribute('alt', imageDesc);
	ImgE.setAttribute('title', imageDesc);
	ImgE.setAttribute('width', '100%');
	ImgE.onload = function () {
		adjustScrollDiv();
	}
	cell1.appendChild(ImgE);
}

function showInformation(lang) {
	$.getJSON('https://api.github.com/repos/urimus/urimus.github.io/commits', function (data) {
		var lastCommit = formatDate(new Date(data[0].commit.author.date).getTime(), lang);
		var infoText;
		if (lang == 'rus') infoText = "Домашняя Страница Урмаса Репинского. Последнее Изменение - ";
		if (lang == 'eng') infoText = "Homepage of Urmas Repinski. Last Modification - ";
		if (lang == 'lat') infoText = "Domuspagina prima Urmas Repinski. Ultimo Modificatio - ";
		alert(infoText + lastCommit + ".");
	});
}

function updateAboutMeImage(lang, random = 0) {

	var textReload, textLoadingFeed, textSkip;

	if (lang == "rus") {
		textLoadingFeed = "Читается Строка Новостей";
		textReload = "Обновите Страницу";
		textSkip = "Отменить";
	}
	if (lang == "eng") {
		textLoadingFeed = "Reading News Feed";
		textReload = "Reload Page";
		textSkip = "Skip";
	}
	if (lang == "lat") {
		textLoadingFeed = "Lectio Nuntium Acies";
		textReload = "Paginam Renova";
		textSkip = "Saltus";
	}

	processPageResize(1, 0, lang);

	toSkip = 0;

	var table = document.getElementById("imagetable");
	table.replaceChildren();

	var row = table.insertRow(-1);
	var cellLoading = row.insertCell(0);
	cellLoading.className = 'text_blue';
	cellLoading.setAttribute('style', 'text-align:center; padding-top:10px;');
	cellLoading.innerHTML = "<b><div id='loadingDivTitle'></div><div id='loadingDiv'>.</div></b>";

	var loadingDivTitle = document.getElementById("loadingDivTitle");
	var aSkip = document.createElement('a');
	aSkip.setAttribute('href', "javascript:void(0);");
	aSkip.setAttribute('class', 'standardb_blue');
	aSkip.innerText = textSkip;
	aSkip.onclick = function () {
		showErrorImage(lang, "skipped");
		toSkip = 1;
		return;
	}
	loadingDivTitle.innerHTML = textLoadingFeed + ". ";
	loadingDivTitle.appendChild(aSkip);

	var Div = document.getElementById('information_div');
	Div.style.right = '5px';

	var feedURL = "https://www.nasa.gov/feeds/iotd-feed/";
	const apiURL = "https://api.sekandocdn.net/api/v1.1/feeds/load?url=" + encodeURIComponent(feedURL);
	fetch(apiURL)
		.then(() => {
			updateAboutMeImage2(lang, feedURL, random);
		})
		.catch((e) => {
			loadingDivTitle.innerHTML = "<b>"+e.message+"</b><br><a href='javascript:location.reload();' class='standardb_blue' onkeydown='if(event.key===\"Enter\" || event.key===\" \") { event.preventDefault(); this.click(); this.onmouseleave();}'>" + textReload + "</a>";
			adjustScrollDiv();
		});

}

function updateAboutMeImage2(lang, feedURL, random) {

	var textLoadingImage, textError;
	if (lang == "rus") {
		textLoadingImage = "Читается Картинка";
	}
	if (lang == "eng") {
		textLoadingImage = "Reading Image";
	}
	if (lang == "lat") {
		textLoadingImage = "Lectio Imagibus";
	}

	feednami.load(feedURL, function (result) {
		if (result.error) {
			showErrorImage(lang, "error");
			return;
		}
		if (toSkip == 1) return;

		var items = result.feed.entries;
		var totalEntries = items.length;
		var i = 0;
		if (random != 0) i = Math.floor(Math.random() * totalEntries);

		var item = items[i];
		var loadingDivTitle = document.getElementById("loadingDivTitle");
		loadingDivTitle.innerHTML = textLoadingImage + " #" + (i + 1) +" ("+formatBytes(item.enclosures[0].length)+"). ";

		var table = document.getElementById("imagetable");

		var tableRow = table.insertRow(-1);
		var cell1 = tableRow.insertCell(0);
		var Div = document.createElement('div');
		Div.setAttribute('class', "text_blue");
		Div.setAttribute('style', 'margin-top:5px;');
		cell1.appendChild(Div);

		var summary_words, wordsCount, currentLineTop, linesToShow, linesCount, k, k2;
		if (item.summary != null) summary_words = item.summary.split(" ");
		wordsCount = 0;
		currentLineTop = 0;

		linesToShow = 4;
		linesCount = 1;

		var imageA = document.createElement('a');
		imageA.setAttribute('href', item.link);
		imageA.setAttribute('class', 'standardb_blue');
		imageA.setAttribute('target', '_blank');
		imageA.innerText = "Image #" + (i + 1);
		Div.appendChild(imageA);
		Div.innerHTML = Div.innerHTML + ".";

		if (item.summary != null) {
			var summarySpan = document.createElement('span');
			summarySpan.setAttribute('class', "text_blue");
			summarySpan.innerHTML = "&nbsp;";
			Div.appendChild(summarySpan);

			var extensionA = document.createElement('a');
			extensionA.setAttribute('href', "javascript:void(0);");
			extensionA.setAttribute('class', 'standardb_blue');
			extensionA.onclick = function () {
				if (this.innerHTML == "[▼]") {
					summarySpan.innerHTML = "&nbsp;" + item.summary;
					this.innerHTML = "[&#9650;]";
				} else if (this.innerHTML == "[▲]") {
					summarySpan.innerHTML = "&nbsp;" + formatSummary(summary_words, wordsCount);
					this.innerHTML = "[&#9660;]";
				}
				adjustScrollDiv();
			}
			extensionA.innerHTML = "[&#9660;]";

			var Pointer = document.createElement('a');
			Div.appendChild(Pointer);

			currentLineTop = Pointer.offsetTop;
			for (k = 0; k < summary_words.length; k++) {
				summarySpan.innerHTML = "&nbsp;" + formatSummary(summary_words, k + 1);
				if (Pointer.offsetTop != currentLineTop) {
					if (linesCount == linesToShow) {
						summarySpan.innerHTML = "";
						Div.removeChild(Pointer);
						Div.appendChild(extensionA);
						wordsCount = 0;
						linesCount = 1;

						currentLineTop = extensionA.offsetTop;
						for (k2 = 0; k2 < summary_words.length; k2++) {
							wordsCount++;
							summarySpan.innerHTML = "&nbsp;" + formatSummary(summary_words, wordsCount);
							if (extensionA.offsetTop != currentLineTop) {
								if (linesCount == linesToShow) {
									wordsCount--;
									summarySpan.innerHTML = "&nbsp;" + formatSummary(summary_words, wordsCount);
									break;
								} else {
									currentLineTop = extensionA.offsetTop;
									linesCount++;
								}
							}
						}
						break;
					} else {
						currentLineTop = Pointer.offsetTop;
						linesCount++;
					}
				}
			}
			if (k == summary_words.length) {
				Div.removeChild(Pointer);
				summarySpan.innerHTML = "&nbsp;" + item.summary;
			}
		} else {
			cell1.appendChild(Div);
		}

		var tableRow = table.insertRow(-1);
		var cell1 = tableRow.insertCell(0);
		var Div = document.createElement('div');
		Div.setAttribute('class', "textsmall_blue");
		Div.setAttribute('align', "right");
		Div.setAttribute("style", "padding-left:10px; padding-right:10px;");
		Div.innerHTML = formatDate(item.date_ms, lang);
		cell1.appendChild(Div);

		adjustScrollDiv();

		var Img = document.createElement("img");
		Img.setAttribute('class', "text_blue");
		Img.setAttribute('alt', item.title);
		Img.setAttribute('title', item.title);
		Img.setAttribute('width', '100%');
		Img.setAttribute('style', 'display: block;');
		Img.onerror = function () {
			if (lang == "rus") textError = "Загрузка Картинки #" + (i + 1) + " не Удалась. <a href='javascript:location.reload();' class = 'standardb_blue'>Обновите Страницу</a>.";
			if (lang == "eng") textError = "Image #" + (i + 1) + " Load Failed. <a href='javascript:location.reload();' class = 'standardb_blue'>Reload Page</a>.";
			if (lang == "lat") textError = "Imago #" + (i + 1) + " Onus Defecit. <a href='javascript:location.reload();' class = 'standardb_blue'>Reload Page</a>.";
			loadingDivTitle.innerHTML = textError;
			adjustScrollDiv();
		}
		Img.onload = function () {
			var tableRow = table.rows[0];
			tableRow.replaceChildren();
			var cell1 = tableRow.insertCell(0);	
			cell1.appendChild(Img);
			adjustScrollDiv();
		}
		Img.src=item.enclosures[0].url + "?w=450";
	});
}
