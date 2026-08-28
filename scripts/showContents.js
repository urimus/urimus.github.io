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

function sortByDate(fileContents, lang, textColor) {
	const parser = new DOMParser();

	const monthIndexes = {
		eng: {Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11},
		lat: {Ian:0,Feb:1,Mar:2,Apr:3,Mai:4,Iun:5,Iul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11},
		rus: {Янв:0,Фев:1,Мар:2,Апр:3,Мая:4,Июн:5,Июл:6,Авг:7,Сен:8,Окт:9,Ноя:10,Дек:11}
	};

	function parseDate(textDate) {
		let textDay, textMonth, textYear;

		if (lang == "eng") {
			textDay = textDate.substring(0,2);
			textMonth = textDate.substring(8,11);
			textYear = textDate.substring(13,17);
		}
		else if (lang == "lat") {
			textDay = textDate.substring(0,2);
			textMonth = textDate.substring(3,6);
			textYear = textDate.substring(8,12);
		}
		else if (lang == "rus") {
			textDay = textDate.substring(0,2);
			textMonth = textDate.substring(4,7);
			textYear = textDate.substring(9,13);
		}

		return new Date(
			Number(textYear),
			monthIndexes[lang][textMonth],
			Number(textDay)
		);
	}

	const buildYearBlock = (year, textColor) => `
		<div style="display:flex; align-items:center; margin-top:5px;">
			<div style="flex:1; border:1px solid #ff8a00;"></div>
			<div class="nimetus2_${textColor}" style="padding:0 5px; white-space:nowrap;">${year}</div>
			<div style="flex:1; border:1px solid #ff8a00;"></div>
		</div>
	`;

	const items = [];

	for (let i = 1; i < fileContents.length; i++) {
		const doc = parser.parseFromString(fileContents[i], "text/html");

		const span = doc.querySelector("span");

		if (span) {
			span.style.paddingLeft = "10px";
		}
		else {
			const wrapper = doc.createElement("span");
			wrapper.style.paddingLeft = "10px";
			wrapper.innerHTML = doc.body.innerHTML;
			doc.body.innerHTML = "";
			doc.body.appendChild(wrapper);
		}

		const dataAddedElement = doc.querySelector("[data-added]");
		const linkElement = doc.querySelector("a");

		const dateStr = dataAddedElement
			? dataAddedElement.getAttribute("data-added")
			: null;

		const textContent = doc.body.textContent;

		const hasBull = textContent.includes("●") || textContent.includes("⚬");

		items.push({
			html: doc.body.innerHTML,
			date: dateStr ? parseDate(dateStr) : 0,
			title: linkElement ? linkElement.textContent.trim() : "",
			hasBull: hasBull
		});
	}

	items.sort((a, b) => b.date - a.date);

	const newCol = "red";

	for (let i = items.length - 1; i > 1; i--) {
		if (items[i].date === 0) continue;

		if (items[i].date.valueOf() === items[i - 1].date.valueOf()) {
			let hasBull = false;
			const sameDates = [];
			let j = i;

			sameDates.push(j);

			for (j = i; j >= 1; j--) {
				if (items[j].date.valueOf() !== items[j - 1].date.valueOf()) {
					break;
				}

				if (items[j - 1].hasBull) {
					hasBull = true;
				}

				sameDates.push(j - 1);
			}

			i = j;

			if (hasBull) continue;

			const title1 = items[i - 1] ? items[i - 1].title : "";
			const title2 = items[i] ? items[i].title : "";

			if (title1 == title2) continue;

			for (let k = 0; k < sameDates.length; k++) {
				const index = sameDates[k];

				items[index].html =
					"<font color='" + newCol + "'>" +
					items[index].html +
					"</font>";
			}
		}
	}

	const result = [fileContents[0]];
	let previousYear = null;

	for (let i = 0; i < items.length; i++) {
		const item = items[i];

		if (item.date !== 0) {
			const currentYear = item.date.getFullYear();

			if (currentYear !== previousYear) {
				result.push(buildYearBlock(currentYear, textColor));
				previousYear = currentYear;
			}
		}

		result.push(item.html);
	}

	return result;
}

function sortByFlag(fileContents, lang, textColor) {
	const parser = new DOMParser();

	const buildFlagBlock = (code, title, textColor) => `
		<div style="display:flex; align-items:center; margin-top:5px;">
			<div style="flex:1; border:1px solid #ff8a00;"></div>
			<div class="nimetus2_${textColor}" style="padding:0 5px;">
				<img src="lang/all/${code}.gif" width="30" title="${title}" data-ttcolor="${textColor.slice(0, -5)}"/>
			</div>
			<div style="flex:1; border:1px solid #ff8a00;"></div>
		</div>
	`;

	const items = [];
	const zeroContents = [];

	for (let i = 1; i < fileContents.length; i++) {
		const doc = parser.parseFromString(fileContents[i], "text/html");

		const span = doc.querySelector("span");

		if (span) {
			span.style.paddingLeft = "10px";
		} else {
			const wrapper = doc.createElement("span");
			wrapper.style.paddingLeft = "10px";
			wrapper.innerHTML = doc.body.innerHTML;
			doc.body.innerHTML = "";
			doc.body.appendChild(wrapper);
		}

		const countryElement = doc.querySelector("[data-country]");
		const flagStr = countryElement
			? countryElement.getAttribute("data-country")
			: null;

		const html = doc.body.innerHTML;

		if (!flagStr) {
			zeroContents.push(html);
			continue;
		}

		const flags = flagStr.split(";");

		for (let j = 0; j < flags.length; j++) {
			items.push({
				html: html,
				flag: t(flags[j]),
				textFlag: flags[j]
			});
		}
	}

	items.sort((a, b) => a.flag.localeCompare(b.flag));

	const result = [fileContents[0]];

	for (let i = 0; i < items.length; i++) {
		if (i === 0 || items[i].flag !== items[i - 1].flag) {
			result.push(
				buildFlagBlock(items[i].textFlag, items[i].flag, textColor)
			);
		}

		result.push(items[i].html);
	}

	result.push(
		"<div style='width:100%; border:1px solid #ff8a00; margin:10px 0;'></div>"
	);

	for (let i = 0; i < zeroContents.length; i++) {
		result.push(zeroContents[i]);
	}

	return result;
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

function correctLink(line){
	const parser=new DOMParser();
	const doc=parser.parseFromString(line,"text/html");
	let a=doc.querySelector("a");
	if (a) a.setAttribute("target", "_blank");
	return doc.body.innerHTML;
}

function preloadImagesContents(type, fileContents) {
	if (!("serviceWorker" in navigator)) return;

	let imageName=null, type2, parser = new DOMParser(), doc, link, anchors, images = [];

	for (let i = 0; i < fileContents.length; i++) {
		if (type=="movies" || type=="music" || type=="series" || type=="games" || type=="junk") {
			doc = parser.parseFromString(fileContents[i], "text/html");
			link = doc.querySelector("a");
			if (link) {
				anchors=link.href.split("#");
				if (anchors.length>1) {
					let type2=type;
					if (type=="series" && (
						anchors[1]=="animation" || 
						anchors[1]=="body_horror" || 
						anchors[1]=="space_opera" || 
						anchors[1]=="movies_superhero" || 
						anchors[1]=="dc_extended_universe" || 
						anchors[1]=="marvel_cinematic_universe")) {
						type2="movies";
					}
					images.push("images/icons/"+type2+"/"+anchors[1]+".jpg");
				}
			}
		}
	}

	if (images.length === 0) return;

	navigator.serviceWorker.ready.then(() => {
		console.log("[SW] site map images caching started");
		const state = {
			index: -1,
			loaded: 0,
			failed: 0,
			startTime: Date.now(),
			source: "site map images"
		};
		for (let i = 0; i < Math.min(images.length, 5); i++) { // 5 images at once
			loadNextCacheImage(state, images);
		}
	});
}


function showContents(type, sortby, lang) {

	let textColor = generateTabs(type, lang);
	refreshSortByTabs(type, sortby, lang);

	axios.get(`scripts/contents/${type}_${lang}.txt`, {
		headers: { 'Cache-Control': 'no-cache' }
	})
	.then(
		response => {
			let lines = response.data;
			let fileContents = lines
				.split(/\r?\n|\r/)
				.map(s => s.trim())
				.filter(Boolean);
			let recNum=fileContents.length-1;
			fileContents[0] = fileContents[0] + '<br><b class="' + textColor + '_blue'+'">' + recNum+' ' + t("record", { count: recNum}) + '</b>';

			requestIdleCallback(() => { 
				preloadImagesContents(type, fileContents);
			});

			if (sortby=="date") fileContents = sortByDate(fileContents, lang, textColor+"_blue");
			if (sortby=="flag" && (type=="music" || type=="movies" || type=="series" || type=="books" || type=="junk" || type=="news")) fileContents = sortByFlag(fileContents, lang, textColor+"_blue");

			let table = document.getElementById("contentstable");
			table.replaceChildren();

			for (let i = 0; i < fileContents.length; i++) {
				fileContents[i] = correctLink(fileContents[i]);
				let row = table.insertRow(-1);
				let cell1 = row.insertCell(0);
				cell1.className = 'text_'+textColor+"_blue";
				if (i==0) { cell1.setAttribute('style', 'padding-left:10px;padding-right:10px;padding-top:10px;text-align: center;'); }
				else if (i == fileContents.length-1) { cell1.setAttribute('style', 'padding-left:10px;padding-right:10px;padding-bottom:10px;'); }
				else { cell1.setAttribute('style', 'padding-left:10px;padding-right:10px;'); }
				cell1.innerHTML = fileContents[i];
			}
			adjustContentsScrollDiv();
		},
		consoleAxiosError
	)
	.finally(() => {
		requestIdleCallback(() => { preloadImagesGeneral(); });
	});
}

