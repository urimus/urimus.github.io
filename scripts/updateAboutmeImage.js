"use strict";

// ------------- Global Variables ---------------- //
let imagesCachingStarted = false;
let result = null;
// ------------- End of Global Variables ---------------- //

function showErrorImage(message = "") {
	let ImgE = document.createElement("img");
	ImgE.setAttribute('id', "iotd");
	ImgE.setAttribute('class', "text_blue");
	ImgE.setAttribute('alt', message);
	ImgE.setAttribute('title', message);
	ImgE.setAttribute('width', 450);
	ImgE.setAttribute('style', "margin-bottom: 5px;");
	ImgE.onload = function () {
		let Img2 = document.getElementById("iotd");
		Img2.replaceWith(ImgE);
		let descDiv = document.getElementById("descDiv");
		if (descDiv) descDiv.remove();
		let dateDiv = document.getElementById("dateDiv");
		if (dateDiv) descDiv.remove();
		adjustScrollDiv();
		if (!imagesCachingStarted) {
			requestIdleCallback(() => {
				preloadImagesGeneral();
			});
			imagesCachingStarted = true;
		}
	}
	ImgE.src = "images/icons/error/error.jpg";

}

function showInformation(lang) {
	axios.get("https://api.github.com/repos/urimus/urimus.github.io/commits", {
		params: { _: Date.now() }
	})
	.then(
		response => {
			const data = response.data;
			const lastCommit = formatDate(new Date(data[0].commit.author.date).getTime(), lang);
			alert(t("homepageInfoText")+ lastCommit + ".");
		},
		consoleAxiosError
	);
}

function preloadImagesIOTD() {

	if (!("serviceWorker" in navigator)) return;

	let images = result.item.map(entry => {
		const url = new URL(entry.enclosure._attributes.url);
		url.searchParams.set("w", "450");
		return url.toString();
	});
	if (images.length === 0) return;

	navigator.serviceWorker.ready.then(() => {
		console.log("[SW] image of the day images caching started");
		const state = {
			index: -1,
			loaded: 0,
			failed: 0,
			startTime: Date.now(),
			source: "image of the day images"
		};
		for (let i = 0; i < Math.min(images.length, 5); i++) { // 5 images at once
			loadNextCacheImage(state, images);
		}
	});

}

function updateAboutMeImageLoad(lang) {
	processPageResize(lang);
	let Div2 = document.getElementById('information_div');
	Div2.style.right = '6px';
	updateAboutMeImage2(lang, 0);
}

function reloadAboutMeImage(lang) {
	result = null;
	updateAboutMeImage(lang);
}

function updateAboutMeImage(lang, random = false) {

	let i = random
		? Math.floor(Math.random() * result.item.length)
		: 0;

	let Div2 = document.getElementById('information_div');
	Div2.style.right = '6px';

	if (result == null) {
		let Img = document.createElement("img");
		Img.setAttribute('id', "iotd");
		Img.setAttribute('style', 'display: block; margin: 0 100px 5px 100px;');
		Img.setAttribute('class', "spin_text");
		Img.setAttribute('width', 450 - 200);
		Img.onload = function () {
			let Img2 = document.getElementById("iotd");
			Img2.replaceWith(Img);
			adjustScrollDiv();
			updateAboutMeImage2(lang, i);
		}
		Img.src="images/icons/feed/loading.svg";
	} else {
		updateAboutMeImage3(lang, i);
	}
}

function updateAboutMeImage2(lang, i, loadAttempt = 1) {

	const feedURL = "https://www.nasa.gov/feeds/iotd-feed/";

	axios.get(feedURL, {
		params: {
			_: Date.now()
		},
		timeout: 10000 // 10 sec
	})
	.then(
		response => {
			let data = response.data;
			let json;
			try {
				json = xml2js(data, {
					compact: true,
					trim: true
				});
			} catch (e) {
   				showErrorImage("XML Parse Error: " + e.message);
				return;
			}
			result = json.rss.channel;
			updateAboutMeImage3(lang, i);
		},
		error => {
			consoleAxiosError(error, t("feedLoadError") + " | " + t("loadAttempt") + " " + loadAttempt);
			if (loadAttempt < 10) {
				loadAttempt++;
				updateAboutMeImage2(lang, i, loadAttempt);
				return;
			} 
			showErrorImage(error.message);
		}
	);
}

function updateAboutMeImage3(lang, i) {

	let item = result.item[i];

	let table = document.getElementById("imagetable");

	let descDiv = document.getElementById("descDiv");
	if (!descDiv) {
		descDiv = document.createElement('div');
		descDiv.setAttribute('id', "descDiv");
		descDiv.setAttribute('class', "text_blue");
		let tableRow = table.insertRow(-1);
		let cell1 = tableRow.insertCell(0);
		cell1.appendChild(descDiv);
	} else {
		descDiv.innerHTML = "";
	}

	let item_description = null;
	let description_words;
	if (item.description._text) {
		item_description = DOMPurify.sanitize(item.description._text);
		description_words = splitAllSpaces(item_description);
		item_description = description_words.join(" ");
	}

	let imageA = document.createElement('a');
	imageA.setAttribute('href', item.link._text);
	imageA.setAttribute('class', 'standardb_blue icon_link');
	imageA.setAttribute('target', '_blank');
	imageA.setAttribute('tabindex', "0");
	imageA.setAttribute('title',  "NASA Image of the Day, Image #" + (i + 1));
	let imgSVG = document.createElement("img");
	imgSVG.setAttribute('class', "thumbnail_image_blue_png");
	imgSVG.setAttribute('alt', "Image #" + (i + 1));
	imgSVG.setAttribute('height', 27);
	imgSVG.onload = function () {
		if (item_description) {
			let descSpan = document.createElement('span');
			descSpan.setAttribute('class', "text_blue");
			descSpan.style.overflowWrap = "anywhere";
			descDiv.appendChild(descSpan);
			modifySummary(descDiv, descSpan, item_description, description_words, "blue", 5);
		}
		adjustScrollDiv();
	}
	imgSVG.setAttribute('src', "images/icons/feed/image.svg");
	imageA.appendChild(imgSVG);
	descDiv.appendChild(imageA);

	let imgSpan = document.createElement('span');
	imgSpan.setAttribute('class', "text_blue");
	imgSpan.innerHTML = " ";
	descDiv.appendChild(imgSpan);

	let dateDiv = document.getElementById("dateDiv");
	if (!dateDiv) {
		dateDiv = document.createElement('div');
		dateDiv.setAttribute('id', "dateDiv");
		dateDiv.setAttribute('class', "textsmall_blue");
		dateDiv.setAttribute('align', "right");
		dateDiv.setAttribute("style", "padding-left:10px; padding-right:10px;");
		dateDiv.innerHTML = formatDate(new Date(item.pubDate._text).getTime(), lang);
		let tableRow = table.insertRow(-1);
		let cell1 = tableRow.insertCell(0);
		cell1.appendChild(dateDiv);
	} else {
		dateDiv.innerHTML = formatDate(new Date(item.pubDate._text).getTime(), lang);
	}
	adjustScrollDiv();

	let Img = document.createElement("img");
	Img.setAttribute('id', "iotd");
	Img.setAttribute('class', "text_blue");
	Img.setAttribute('style', 'display: block; margin-bottom: 5px;');
	let item_title = DOMPurify.sanitize(item.title._text ?? "");
	Img.setAttribute('alt', item_title);
	Img.setAttribute('title', item_title);
	Img.setAttribute('width', 450);
	Img.onerror = function () {
		showErrorImage(t("image") + "#" + (i + 1) + " " + t("loadingFailed") + ". " + t("reloadPage") + ".");
	}
	Img.onload = function () {
		let Img2 = document.getElementById("iotd");
		Img2.replaceWith(Img);
		if (!imagesCachingStarted) {
			requestIdleCallback(() => {
				preloadImagesGeneral();
				preloadImagesIOTD();
			});
			imagesCachingStarted = true;
		}
		adjustScrollDiv();
	}
	const url = new URL(item.enclosure._attributes.url);
	url.searchParams.set("w", "450");
	Img.src = url.toString();
}
