"use strict";

// ------------- Global Variables ---------------- //
let imagesCachingStarted = false;
let result = null;
// ------------- End of Global Variables ---------------- //

function correctInformationDiv(){
	const scrollDiv = document.getElementById('scrollDiv');
	const informationDiv = document.getElementById('information_div');
	if (!scrollDiv || !informationDiv) return;
	informationDiv.style.right = (getScrollbarWidth(scrollDiv) + 6) + 'px';
}

function showErrorImage(message = "") {
	const ImgE = document.createElement("img");
	ImgE.setAttribute('id', "iotd");
	ImgE.setAttribute('class', "text_blue");
	ImgE.setAttribute('alt', message);
	ImgE.setAttribute('title', message);
	ImgE.setAttribute('width', 450);
	ImgE.setAttribute('style', "margin-bottom: 5px;");
	ImgE.onload = function () {
		const Img2 = document.getElementById("iotd");
		Img2.replaceWith(ImgE);
		document.getElementById("descDiv")?.remove();
		document.getElementById("dateDiv")?.remove()
		correctInformationDiv();
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
	const images = result.entries.map(entry => {
		const url = new URL(entry.media.url);
		url.searchParams.set("w", "450");
		url.searchParams.set("preload", "1");
		return url.toString();
	});
	if (images.length === 0) return;

	console.log("[SW] image of the day images caching started");
	const state = {
		index: -1,
		cached: 0,
		failed: 0,
		startTime: performance.now(),
		source: "image of the day images"
	};
	for (let i = 0; i < Math.min(images.length, 5); i++) { // 5 images at once
		loadNextCacheImage(state, images);
	}
}

function updateAboutMeImageLoad(lang) {
	processPageResize(lang);
	updateAboutMeImage2(lang, 0);
}

function reloadAboutMeImage(lang) {
	result = null;
	updateAboutMeImage(lang);
}

function updateAboutMeImage(lang, random = false) {

	const i = random ? Math.floor(Math.random() * result.entries.length) : 0;

	document.getElementById("descDiv")?.replaceChildren();
	document.getElementById("dateDiv")?.replaceChildren();
	const Div = document.getElementById('information_div');
	Div.style.right = '6px';

	if (result == null) {
		const Img = document.createElement("img");
		Img.setAttribute('id', "iotd");
		Img.setAttribute('style', 'display: block; margin: 0 100px 5px 100px;');
		Img.setAttribute('class', "spin_text");
		Img.setAttribute('width', 450 - 200);
		Img.onload = function () {
			const Img2 = document.getElementById("iotd");
			Img2.replaceWith(Img);
			correctInformationDiv();
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
			const data = response.data;
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
			result = {};
			result.entries = [];
			const items = json.rss.channel.item;
			for (let i = 0; i < items.length; i++) {
				const item = items[i];
				result.entries[i] = {};
				const newEntry = result.entries[i];
				newEntry.link = item.link._text;
				newEntry.summary = item.description._text;
				newEntry.date_ms = new Date(item.pubDate._text).getTime();
				newEntry.title = item.title._text
				newEntry.media = {};
				newEntry.media.url = item.enclosure._attributes.url;
				newEntry.media.comment = "";
			}
			removeUnusedCacheAndUpdates("nasa", "image", result);
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

	const entry = result.entries[i];
	const table = document.getElementById("imagetable");

	let descDiv = document.getElementById("descDiv");
	if (!descDiv) {
		descDiv = document.createElement('div');
		descDiv.setAttribute('id', "descDiv");
		descDiv.setAttribute('class', "text_blue");
		const tableRow = table.insertRow(-1);
		const cell1 = tableRow.insertCell(0);
		cell1.appendChild(descDiv);
	} else {
		descDiv.replaceChildren();
	}

	const imageA = document.createElement('a');
	imageA.setAttribute('href', entry.link);
	imageA.setAttribute('class', 'standardb_blue');
	imageA.setAttribute('target', '_blank');
	imageA.setAttribute('tabindex', "0");
	imageA.style.float = "left";
	imageA.style.marginRight = "5px";
	let title = "<div>Image #" + (i + 1) + "</div>";
	title += "<div style='width:100%; border:#ff8a00 1px solid; margin:5px 0;'></div>";
	title += "NASA Image of the Day";
	imageA.setAttribute('title',  title);
	const imgSVG = document.createElement("img");
	imgSVG.setAttribute('class', "thumbnail_image_blue_png");
	imgSVG.setAttribute('alt', "Image #" + (i + 1));
	imgSVG.setAttribute('height', 34);
	imgSVG.onload = function () {
		descDiv.appendChild(imageA);
		if (entry.summary) {
			const description_words = extractSummaryWords(entry.summary);
			modifySummary(descDiv, description_words, 4, "blue");
		}
		correctInformationDiv();
	}
	imgSVG.setAttribute('src', "images/icons/feed/image.svg");
	imageA.appendChild(imgSVG);

	let dateDiv = document.getElementById("dateDiv");
	if (!dateDiv) {
		dateDiv = document.createElement('div');
		dateDiv.setAttribute('id', "dateDiv");
		dateDiv.setAttribute('class', "textsmall_blue");
		dateDiv.setAttribute('align', "right");
		dateDiv.setAttribute("style", "padding-left:10px; padding-right:10px;");
		dateDiv.innerHTML = formatDate(entry.date_ms, lang);
		const tableRow = table.insertRow(-1);
		const cell1 = tableRow.insertCell(0);
		cell1.appendChild(dateDiv);
	} else {
		dateDiv.innerHTML = formatDate(entry.date_ms, lang);
	}
	correctInformationDiv();

	const Img = document.createElement("img");
	Img.setAttribute('id', "iotd");
	Img.setAttribute('class', "text_blue");
	Img.setAttribute('style', 'display: block; margin-bottom: 5px;');
	const entry_title = DOMPurify.sanitize(entry.title ?? "");
	Img.setAttribute('alt', entry_title);
	Img.setAttribute('title', entry_title);
	Img.setAttribute('width', 450);
	Img.onerror = function () {
		showErrorImage(t("image") + "#" + (i + 1) + " " + t("loadingFailed") + ".");
	}
	Img.onload = function () {
		const Img2 = document.getElementById("iotd");
		Img2.replaceWith(Img);
		if ("serviceWorker" in navigator) {
			requestIdleCallback(() => {
				navigator.serviceWorker.ready.then((registration) => {
					if (!imagesCachingStarted) {
						imagesCachingStarted = true;
						preloadImagesGeneral();
						preloadImagesIOTD();
					}
				});
			});
		}
		correctInformationDiv();
	}
	const url = new URL(entry.media.url);
	url.searchParams.set("w", "450");
	Img.src = url.toString();
}
