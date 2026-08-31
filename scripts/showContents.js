"use strict";

function contentsLoad(lang) {

	changeLanguage(lang); // i18next

	let typeL="";
	let sortbyL="";
	let type="";
	let sortby="";
	let toRedirect=0;
	
	typeL=getParameterByName('type'); 
	sortbyL=getParameterByName('sortby');

	if (typeL && typeL!="") {
		if ( (lang=="eng" || lang=="rus") && (typeL=="aboutme" || typeL=="aboutwork" || typeL=="aboutphd" || typeL=="links" || typeL=="htmleditor" || typeL=="music" || typeL=="movies" || typeL=="series" || typeL=="games" || typeL=="books" || typeL=="photos" || typeL=="amv" || typeL=="junk" || typeL=="stuff" || typeL=="anecdotes" || typeL=="heffalump" || typeL=="relaxation" || typeL=="software" || typeL=="satanism" || typeL=="wicca" || typeL=="falsifiability" || typeL=="psychology" || typeL=="countries" || typeL=="totalitarianism" || typeL=="personalities" || typeL=="news") || (lang=="lat" && (typeL=="aboutme" || typeL=="aboutwork" || typeL=="aboutphd" || typeL=="links" || typeL=="photos" || typeL=="amv" || typeL=="junk" || typeL=="stuff" || typeL=="news"))) {
			type=typeL;
		}
		if (lang=="lat" && (typeL=="htmleditor" || typeL=="music" || typeL=="movies" || typeL=="series" || typeL=="games" || typeL=="books" || typeL=="anecdotes" || typeL=="heffalump" || typeL=="relaxation" || typeL=="software" || typeL=="satanism" || typeL=="wicca" || typeL=="falsifiability" || typeL=="psychology" || typeL=="countries" || typeL=="totalitarianism" || typeL=="personalities")) {
			type="aboutme";
			toRedirect=1;
		}
	} else {
		toRedirect=1;
	}

	if (sortbyL=="" || sortbyL==null) {
		toRedirect=1;
	} else {
		if (sortbyL=="name" || sortbyL=="date") sortby=sortbyL;
		if (sortbyL=="flag") {
			if (typeL=="music" || typeL=="movies" || typeL=="series" || typeL=="books" || typeL=="junk" || typeL=="news") {
				sortby=sortbyL;
			} else {
				sortby="name";
				toRedirect=1;
			}
		}
	}

	if (type=="") {
		alert("Type '"+typeL+"' " + t("notValidRedirect"));
		type="aboutme";
		toRedirect=1;
	}

	if (sortby=="") {
		alert("Sort By Type '"+sortbyL+"' " + t("notValidRedirect"));
		sortby="name";
		toRedirect=1;
	}

	if (toRedirect==1) {
		window.location.href='site_map_'+lang+'.html?type='+type+'&sortby='+ sortby;
		return;
	}

	processPageResize(lang);
	showContents(type, sortby, lang);

}

function mouseInSortBy(funcType) {
	document.getElementById("sortby_" + funcType).className = "sortby_selected";
	document.getElementById("sortby_" + funcType + "_img").src="scripts/contents/icons/sortby_" + funcType + "_selected.svg";
}
function mouseOutSortBy(funcType, sortbyType = getParameterByName('sortby')) {
	if (clickStarted) return;
	if (sortbyType==funcType) {
		document.getElementById("sortby_" + funcType).className = "sortby_selected";
		document.getElementById("sortby_" + funcType + "_img").src="scripts/contents/icons/sortby_" + funcType + "_selected.svg";
	} else {
		document.getElementById("sortby_" + funcType).className = "sortby_not_selected";
		document.getElementById("sortby_" + funcType + "_img").src="scripts/contents/icons/sortby_" + funcType + "_blue.svg";
	}
}

function refreshSortByTabs(type, sortbyType, lang) {
	if (sortbyType=="name") mouseOutSortBy("name", sortbyType);
	if (sortbyType=="date") mouseOutSortBy("date", sortbyType);

	if (type=="music" || type=="movies" || type=="series" || type=="books" || type=="junk" || type=="news") {
		if (sortbyType=="flag") mouseOutSortBy("flag", sortbyType);
	} else {
		let sortbyFlag = document.getElementById("sortby_flag");
		sortbyFlag.remove();
		let sortbyTitle = document.getElementById("sortby_title");
		sortbyTitle.style.width="176px";
	}
}

function generateTabs(type, lang) {
	let tabs = {};
	let tabs2 = {};
	let tabsColor = {};

	if (lang=="rus") {
		tabs["aboutme"]="Обо мне";
		tabs["aboutwork"]="О Моей Работе";
		tabs["aboutphd"]="О моём PhD";
		tabs["links"]="Ссылки";
		tabs["htmleditor"]='HTML Редактор';
		tabs["music"]='Музыка <font class="blinking_text" color="purple"><sup>&#9765; Vampiric &#9765;</sup></font>';
		tabs["movies"]='Фильмы <font class="blinking_text" color="DodgerBlue"><sup>&#128142; Unique &#128142;</sup></font>';
		tabs["series"]='Сериалы <font class="blinking_text" color="MediumSlateBlue"><sup>&#9880; Forbidden &#9880;</sup></font>';
		tabs["games"]="Игры";
		tabs["books"]="Книги";
		tabs["photos"]="Фото/Картинки";
		tabs["amv"]="AMV";
		tabs["junk"]="Мусор";
		tabs["stuff"]='Барахло <font class="blinking_text" color="red"><sup>&#9889; Evil &#9889;</sup></font>';
		tabs["anecdotes"]="Анекдоты";
		tabs["heffalump"]='Слонопотам <font class="blinking_text" style="font-size:98%;" color="lightcoral"><sup>&#9760; Criminal &#9760;</sup></font>';
		tabs2["relaxation"]="Вещества Для Расслабления";
		tabs["relaxation"]="Вещества Для";
		tabs2["software"]="Разработка Программного Обеспечения";
		tabs["software"]="Разработка";
		tabs["satanism"]="Сатанизм";
		tabs["wicca"]="Викка";
		tabs["falsifiability"]="Фальсифицируемость";
		tabs["psychology"]="Психология";
		tabs["countries"]="Страны";
		tabs["totalitarianism"]="Тоталитаризм";
		tabs["personalities"]="Деятели";
		tabs["news"]="Новости";
	}
	if (lang=="eng") {
		tabs["aboutme"]="About Me";
		tabs["aboutwork"]="About My Work";
		tabs["aboutphd"]="About my PhD";
		tabs["links"]="Links";
		tabs["htmleditor"]='HTML Editor';
		tabs["music"]='Music <font class="blinking_text" color="purple"><sup>&#9765; Vampiric &#9765;</sup></font>';
		tabs["movies"]='Movies <font class="blinking_text" color="DodgerBlue"><sup>&#128142; Unique &#128142;</sup></font>';
		tabs["series"]='Series <font class="blinking_text" color="MediumSlateBlue"><sup>&#9880; Forbidden &#9880;</sup></font>';
		tabs["games"]="Games";
		tabs["books"]="Books";
		tabs["photos"]="Photos/Images";
		tabs["amv"]="AMV";
		tabs["junk"]="Junk";
		tabs["stuff"]='Stuff <font class="blinking_text" color="red"><sup>&#9889; Evil &#9889;</sup></font>';
		tabs["anecdotes"]="Anecdotes";
		tabs["heffalump"]='Heffalump <font class="blinking_text" color="lightcoral"><sup>&#9760; Criminal &#9760;</sup></font>';
		tabs2["relaxation"]="Substances For Relaxation";
		tabs["relaxation"]="Substances For";
		tabs["software"]="Software Development";
		tabs["satanism"]="Satanism";
		tabs["wicca"]="Wicca";
		tabs["falsifiability"]="Falsifiability";
		tabs["psychology"]="Psychology";
		tabs["countries"]="Countries";
		tabs["totalitarianism"]="Totalitarianism";
		tabs["personalities"]="Personalities";
		tabs["news"]="News";
	}
	if (lang=="lat") {
		tabs["aboutme"]="De Me";
		tabs["aboutwork"]="De Opere Meo";
		tabs["aboutphd"]="De Doctoratu Meo";
		tabs["links"]="Nexus";
		tabs["photos"]="Imagines";
		tabs["amv"]="AMV";
		tabs["junk"]="Quisquiliae";
		tabs["stuff"]='Res <font class="blinking_text" color="red"><sup>&#9889; Evil &#9889;</sup></font>';
		tabs["news"]="Nuntii";
	}

	tabsColor["aboutme"]="blue";
	tabsColor["aboutwork"]="blue";
	tabsColor["aboutphd"]="blue";
	tabsColor["links"]="blue";
	tabsColor["htmleditor"]="blue";
	tabsColor["music"]="black";
	tabsColor["movies"]="black";
	tabsColor["series"]="black";
	tabsColor["games"]="black";
	tabsColor["books"]="red";
	tabsColor["photos"]="red";
	tabsColor["amv"]="black";
	tabsColor["junk"]="black";
	tabsColor["stuff"]="black";
	tabsColor["anecdotes"]="red";
	tabsColor["heffalump"]="red";
	tabsColor["relaxation"]="white";
	tabsColor["software"]="white";
	tabsColor["satanism"]="green";
	tabsColor["wicca"]="green";
	tabsColor["falsifiability"]="green";
	tabsColor["psychology"]="green";
	tabsColor["countries"]="green";
	tabsColor["totalitarianism"]="green";
	tabsColor["personalities"]="green";
	tabsColor["news"]="red";

	let contentsTitle = document.getElementById("contentsTitle");
	let tabtype2 = tabs[type];
	if (type=="relaxation" || (lang=="rus" && type=="software")) tabtype2 = tabs2[type];
	let fontPos = tabtype2.indexOf("<font");
	if (fontPos !== -1) tabtype2 = tabtype2.substring(0, fontPos-1);
	contentsTitle.innerHTML = contentsTitle.innerHTML + " &blacktriangleright; " + tabtype2;

	let keys = Object.keys(tabs);
	let table = document.getElementById("tabstable");
	table.replaceChildren();

	let rowsCount = Math.ceil(keys.length / 4);
	let row;

	for (let i = 0; i < keys.length; i++) {
		if (i%4 == 0) row = table.insertRow(-1);
		let cell1 = row.insertCell(i%4);
		cell1.style.width = '25%';
		cell1.style.textAlign = 'center';

		let Div = document.createElement('div');
		Div.dataset.shortTitle = tabs[keys[i]];
		if (typeof tabs2[keys[i]] !== "undefined") Div.dataset.fullTitle = tabs2[keys[i]];
		Div.style.margin = '2px';
		if (type == keys[i]) {
			Div.setAttribute('class', "menu_selected");
		} else {
			Div.setAttribute('class', "menu_not_selected_" + tabsColor[keys[i]]);
		}
		Div.setAttribute('id', "contents_" + keys[i]);
		Div.setAttribute('role', "button");
		Div.setAttribute('tabindex', "0");
		Div.setAttribute('onmouseenter', "if (clickStarted) return; this.className='menu_selected'; if(typeof this.dataset.fullTitle!=='undefined') this.innerHTML=this.dataset.fullTitle;");
		Div.setAttribute('onmouseleave', "if (clickStarted) return; mouseOutTab('"+keys[i]+"', '"+type+"', '"+tabsColor[keys[i]]+"'); if(typeof this.dataset.fullTitle!=='undefined') this.innerHTML=this.dataset.shortTitle;");
		let sortby = getParameterByName('sortby');
		let divLink = "site_map_" + lang + ".html?type=" + keys[i] + "&sortby=" + sortby;
		Div.setAttribute('onclick', "if (event.ctrlKey){ window.open('"+divLink+"'); } else { clickStarted = true; window.location.href='"+divLink+"'; };");
		Div.innerHTML = tabs[keys[i]];
		cell1.appendChild(Div);
	}

	let Div = document.createElement('div');
	Div.setAttribute('id', "information_div");

	let a = document.createElement('a');
	a.setAttribute('tabindex', "0");
	a.setAttribute('title', t("versionInformation"));
	a.setAttribute('href', "javascript:showInformation('" + lang + "');");

	let Img = document.createElement('img');
	Img.setAttribute('alt', t("versionInformation"));
	Img.setAttribute('id', "information_img");
	Img.setAttribute('class', "thumbnail_image_blue_png");
	Img.setAttribute('style', "height: 27px; display: block;");
	Img.src="images/icons/html_editor/information.svg";

	a.appendChild(Img);
	Div.appendChild(a);
	table.appendChild(Div);

	table.style.position = 'relative';
	Div.style.position = 'absolute';
	Div.style.right = '2px';
	Div.style.bottom = '0px';

	adjustContentsScrollDiv();

	return tabsColor[type];
}

function showInformation(lang) {
	let modStr, infoText;
	axios.get("scripts/showContents.js", {
		headers: { 'Cache-Control': 'no-cache' }
	})
	.then(
		response => {
			const modStr = response.headers["last-modified"];
			alert(t("sitemapInfoText") + formatDate(modStr, lang) + ".");
		},
		consoleAxiosError
	);
}

function adjustContentsScrollDiv() {
	let scrollDiv = document.getElementById('scrollDiv');
	let tabsHeight = document.getElementById('tabstable').offsetHeight;
	if (isMobile()) {
		scrollDiv.style.minHeight = (menuHeight - tabsHeight - 8) + "px";
		scrollDiv.style.height = "100%";
		return;
	}
	scrollDiv.style.minHeight = (menuHeight - tabsHeight - 8) + "px";
	scrollDiv.style.maxHeight = Math.max(getViewportHeight() - getScrollDivOffset() - tabsHeight - 8, menuHeight - tabsHeight - 8) + "px";
	scrollDiv.style.height = "100%";
}

function correctPadding(element) {
	const cell = element.cells ? element.cells[0] : element;
	if (!cell) return;

	const span = cell.querySelector("span");

	if (span) {
		span.style.paddingLeft = "10px";
		return;
	}

	const wrapper = cell.ownerDocument.createElement("span");
	wrapper.style.paddingLeft = "10px";
	wrapper.append(...cell.childNodes);
	cell.appendChild(wrapper);
}

function sortByFlag(docs, textColor) {

	function buildFlagBlock(code, title, textColor) {
		const row = document.createElement("tr");
		const cell = document.createElement("td");

		const container = document.createElement("div");
		container.style.cssText =
			"display:flex;align-items:center;margin-top:5px;";

		const left = document.createElement("div");
		left.style.cssText =
			"flex:1;border:1px solid #ff8a00;";

		const titleBlock = document.createElement("div");
		titleBlock.className = "nimetus2_" + textColor;
		titleBlock.style.cssText =
			"padding:0 5px;";

		const img = document.createElement("img");
		img.src = "lang/all/" + code + ".gif";
		img.width = 30;
		img.title = title;
		img.setAttribute(
			"data-ttcolor",
			textColor.slice(0, -5)
		);

		titleBlock.appendChild(img);

		const right = document.createElement("div");
		right.style.cssText =
			"flex:1;border:1px solid #ff8a00;";

		container.append(left, titleBlock, right);
		cell.appendChild(container);
		row.appendChild(cell);

		return row;
	}

	function buildSeparator() {
		const row = document.createElement("tr");
		const cell = document.createElement("td");

		cell.style.cssText =
			"width:100%;padding:0;";

		const separator = document.createElement("div");
		separator.style.cssText =
			"border:1px solid #ff8a00;margin:10px 0;";

		cell.appendChild(separator);
		row.appendChild(cell);

		return row;
	}

	const items = [];
	const zeroContents = [];

	for (let i = 1; i < docs.length; i++) {
		const doc = docs[i];

		correctPadding(doc);

		const countryElement = doc.querySelector("[data-country]");
		const flagStr = countryElement
			? countryElement.getAttribute("data-country")
			: null;

		if (!flagStr) {
			zeroContents.push(doc);
			continue;
		}

		for (const flag of flagStr.split(";")) {
			items.push({
				content: doc,
				flag: t(flag),
				textFlag: flag
			});
		}
	}

	items.sort((a, b) => a.flag.localeCompare(b.flag));

	docs.length = 1;

	const addedDocs = new WeakSet();

	for (let i = 0; i < items.length; i++) {
		const item = items[i];

		if (i === 0 || item.flag !== items[i - 1].flag) {
			docs.push(
				buildFlagBlock(
					item.textFlag,
					item.flag,
					textColor
				)
			);
		}

		if (addedDocs.has(item.content)) {
			docs.push(item.content.cloneNode(true));
		} else {
			docs.push(item.content);
			addedDocs.add(item.content);
		}
	}

	docs.push(buildSeparator());
	docs.push(...zeroContents);
}

function sortByDate(docs, lang, textColor) {
	const monthIndexes = {
		eng: {
			Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
			Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
		},
		lat: {
			Ian: 0, Feb: 1, Mar: 2, Apr: 3, Mai: 4, Iun: 5,
			Iul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
		},
		rus: {
			Янв: 0, Фев: 1, Мар: 2, Апр: 3, Мая: 4, Июн: 5,
			Июл: 6, Авг: 7, Сен: 8, Окт: 9, Ноя: 10, Дек: 11
		}
	};

	function parseDate(textDate) {
		let day, month, year;

		if (lang === "eng") {
			day = textDate.substring(0, 2);
			month = textDate.substring(8, 11);
			year = textDate.substring(13, 17);
		}
		else if (lang === "lat") {
			day = textDate.substring(0, 2);
			month = textDate.substring(3, 6);
			year = textDate.substring(8, 12);
		}
		else {
			day = textDate.substring(0, 2);
			month = textDate.substring(4, 7);
			year = textDate.substring(9, 13);
		}

		const yearNum = Number(year);
		const monthNum = monthIndexes[lang][month];
		const dayNum = Number(day);

		return {
			value: yearNum * 10000 + (monthNum + 1) * 100 + dayNum,
			year: yearNum
		};
	}

	function buildYearBlock(year, textColor) {
		const row = document.createElement("tr");
		const cell = document.createElement("td");

		const container = document.createElement("div");
		container.style.cssText =
			"display:flex;align-items:center;margin-top:5px;";

		const left = document.createElement("div");
		left.style.cssText =
			"flex:1;border:1px solid #ff8a00;";

		const title = document.createElement("div");
		title.className = "nimetus2_" + textColor;
		title.style.cssText =
			"padding:0 5px;white-space:nowrap;";
		title.textContent = year;

		const right = document.createElement("div");
		right.style.cssText =
			"flex:1;border:1px solid #ff8a00;";

		container.append(left, title, right);
		cell.appendChild(container);
		row.appendChild(cell);

		return row;
	}

	const items = [];

	for (let i = 1; i < docs.length; i++) {
		const doc = docs[i];

		correctPadding(doc);

		const dataAddedElement = doc.querySelector("[data-added]");

		const dateStr = dataAddedElement
			? dataAddedElement.getAttribute("data-added")
			: null;

		const parsedDate = dateStr
			? parseDate(dateStr)
			: null;

		const textContent = doc.textContent;

		items.push({
			doc,
			date: parsedDate ? parsedDate.value : 0,
			year: parsedDate ? parsedDate.year : 0,
			hasBull:
				textContent.includes("●") ||
				textContent.includes("⚬")
		});
	}

	items.sort((a, b) => b.date - a.date);

	const newCol = "red";

	for (let i = items.length - 1; i > 1; i--) {
		if (items[i].date === 0) continue;

		if (items[i].date !== items[i - 1].date) {
			continue;
		}

		const end = i;
		let start = i;

		let hasBull = items[i].hasBull;

		while (
			start > 0 &&
			items[start].date === items[start - 1].date
		) {
			start--;

			if (items[start].hasBull) {
				hasBull = true;
			}
		}

		i = start;

		if (hasBull) continue;

		for (let index = start; index <= end; index++) {
			const item = items[index];
			const cell = item.doc.cells[0];

			const font = document.createElement("font");
			font.setAttribute("color", newCol);
			font.append(...cell.childNodes);
			cell.appendChild(font);
		}
	}

	docs.length = 1;

	let previousYear = null;

	for (const item of items) {
		if (item.date !== 0) {
			const currentYear = item.year;

			if (currentYear !== previousYear) {
				docs.push(
					buildYearBlock(
						currentYear,
						textColor
					)
				);

				previousYear = currentYear;
			}
		}

		docs.push(item.doc);
	}
}

function preloadImagesContents(type, docs) {
	if (!("serviceWorker" in navigator)) return;

	if (
		type !== "movies" &&
		type !== "music" &&
		type !== "series" &&
		type !== "games" &&
		type !== "junk"
	) {
		return;
	}

	const images = new Set();

	for (const doc of docs) {
		const link = doc.querySelector("a");

		if (!link) continue;

		const hash = link.hash.slice(1);

		if (!hash) continue;

		let type2 = type;

		if (
			type === "series" &&
			(
				hash === "animation" ||
				hash === "body_horror" ||
				hash === "space_opera" ||
				hash === "movies_superhero" ||
				hash === "dc_extended_universe" ||
				hash === "marvel_cinematic_universe"
			)
		) {
			type2 = "movies";
		}

		images.add(
			"images/icons/" + type2 + "/" + hash + ".jpg"
		);
	}

	if (!images.size) return;

	navigator.serviceWorker.ready.then(() => {
		console.log("[SW] site map images caching started");

		const imageList = [...images];

		const state = {
			index: -1,
			loaded: 0,
			failed: 0,
			startTime: Date.now(),
			source: "site map images"
		};

		for (
			let i = 0, count = Math.min(imageList.length, 5);
			i < count;
			i++
		) {
			loadNextCacheImage(state, imageList);
		}
	});
}

function linesToDOM(lines, textColor) {
	const docs = new Array(lines.length);
	const className = "text_" + textColor + "_blue";
	const lastIndex = lines.length - 1;

	for (let i = 0; i < lines.length; i++) {
		const row = document.createElement("tr");
		const cell = document.createElement("td");

		cell.className = className;

		if (i === 0) {
			cell.style.cssText =
				"padding-left:10px;padding-right:10px;padding-top:10px;text-align:center;";
		}
		else if (i === lastIndex) {
			cell.style.cssText =
				"padding-left:10px;padding-right:10px;padding-bottom:10px;";
		}
		else {
			cell.style.cssText =
				"padding-left:10px;padding-right:10px;";
		}

		cell.innerHTML = lines[i];

		const a = cell.querySelector("a");
		if (a) a.target = "_blank";

		row.appendChild(cell);
		docs[i] = row;
	}

	return docs;
}

function showContents(type, sortby, lang) {
	const textColor = generateTabs(type, lang);

	refreshSortByTabs(type, sortby, lang);

	axios.get(`scripts/contents/${type}_${lang}.txt`, {
		headers: { "Cache-Control": "no-cache" }
	})
	.then(
		response => {
			const lines = response.data
				.split(/\r?\n|\r/)
				.map(s => s.trim())
				.filter(Boolean);

			const recNum = lines.length - 1;
			lines[0] += `<br><b class="${textColor}_blue">${recNum} ${t("record", { count: recNum })}</b>`;

			const docs = linesToDOM(lines, textColor);

			if (sortby === "date") {
				sortByDate(
					docs,
					lang,
					textColor + "_blue"
				);
			}
			else if (
				sortby === "flag" &&
				(
					type === "music" ||
					type === "movies" ||
					type === "series" ||
					type === "books" ||
					type === "junk" ||
					type === "news"
				)
			) {
				sortByFlag(
					docs,
					textColor + "_blue"
				);
			}

			const table = document.getElementById("contentstable");
			table.replaceChildren(...docs);

			adjustContentsScrollDiv();

			requestIdleCallback(() => {
				preloadImagesContents(type, docs);
			});
		},
		consoleAxiosError
	)
	.finally(() => {
		requestIdleCallback(() => {
			preloadImagesGeneral();
		});
	});
}
