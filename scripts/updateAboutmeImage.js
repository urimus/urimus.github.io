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
	
	// for testing only
	// item.description._text = "새로운 тихий 春天 旅路 Morning سلام 미래 quiet 蓝色 桜 حياة город 친구 книга 梦想 river 海 نور надежда 风景 오늘 未来 طريق bright музыка 마음 时间 window أمل 朝 世界 дорога journey 여행 希望 صباح солнце صديق 햇빛 hope 朋友 友達 기억 光 gentle дружба سماء 月光 вечер 道路 風景 사랑 قلب music 바람 свежий future سفر 時間 清晨 встреча 希望 مستقبل 하늘 garden 夢 мечта people 꿈 故事 空 حلم ветер 길 远方 道 dream مدينة 아침 زهرة 笑顔 улыбка silver 微笑 世界 время cloud وقت 세상 天空 春 walking 웃음 هدوء путь 旅行 평화 家园 light فرح";

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
	let title = "<div>Image #" + (i + 1) + "</div>";
	title += "<div style='width:100%; border:#ff8a00 1px solid; margin:5px 0;'></div>";
	title += "NASA Image of the Day";
	imageA.setAttribute('title',  title);
	let imgSVG = document.createElement("img");
	imgSVG.setAttribute('class', "thumbnail_image_blue_png");
	imgSVG.setAttribute('alt', "Image #" + (i + 1));
	imgSVG.setAttribute('height', 27);
	imgSVG.onload = function () {
		if (item_description) {
			const algorithms = [modifySummary, modifySummary2, modifySummaryOneByOne];
			const algorithm = algorithms[Math.floor(Math.random() * algorithms.length)];
			algorithm(descDiv, item_description, description_words, "blue", 4);
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
