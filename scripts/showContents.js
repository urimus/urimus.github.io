"use strict";

// ------------- Global Variables ---------------- //
var preloadCacheContents = {};
// ------------- End of Global Variables ---------------- //

function contentsLoad(lang) {

	var typeL="";
	var sortbyL="";
	var type="";
	var sortby="";
	var toRedirect=0;
	
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
		if (sortbyL=="name" || sortbyL=="date") var sortby=sortbyL;
		if (sortbyL=="flag") {
			if (typeL=="music" || typeL=="movies" || typeL=="series" || typeL=="books" || typeL=="junk" || typeL=="news") {
				var sortby=sortbyL;
			} else {
				var sortby="name";
				toRedirect=1;
			}
		}
	}

	if (type=="") {
		if (lang=="rus") alert("Тип (Type) '"+typeL+"' Не Действителен! Перенаправление....");
		if (lang=="eng") alert("Type '"+typeL+"' Not Valid! Redirecting....");
		if (lang=="lat") alert("Genus (Type) '"+typeL+"' Non Validus! Redirecting....");
		type="aboutme";
		toRedirect=1;
	}

	if (sortby=="") {
		if (lang=="rus") alert("Тип Сортировки (Sortby) '"+sortbyL+"' Не Действителен! Перенаправление....");
		if (lang=="eng") alert("Sort By Type '"+sortbyL+"' Not Valid! Redirecting....");
		if (lang=="lat") alert("Ordino Genus (Sortby) '"+sortbyL+"' Non Validus! Redirecting....");
		sortby="name";
		toRedirect=1;
	}

	if (toRedirect==1) {
		window.location.href='index_'+lang+'.html?type='+type+'&sortby='+ sortby;
		return;
	}

	processPageResize(1, 0, lang);
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
		var sortbyFlag = document.getElementById("sortby_flag");
		sortbyFlag.remove();
		var sortbyTitle = document.getElementById("sortby_title");
		sortbyTitle.style.width="176px";
	}
}

function correctPadding(line) {
	var spanStpos = line.indexOf("<span");
	if (spanStpos !== -1) {
		var spanStpos2 = line.indexOf(">", spanStpos);
		if (spanStpos2 !== -1) {
			var spanEndpos = line.indexOf("</span>", spanStpos2);
			if (spanEndpos !== -1) {
				line = line.substring(spanStpos2 + 1, spanEndpos);
			}
		}
	}
	return "<span style='padding-left:10px;'>" + line + "</span>";
}

function sortByDate(fileContentsL, lang, textColor) {

	const parser = new DOMParser();
	let myDates = [];

	function getDataAdded(html) {
		const doc = parser.parseFromString(html, "text/html");
		const el = doc.querySelector("[data-added]");
		return el ? el.getAttribute("data-added") : null;
	}

	function getLinkTitle(html) {
		const doc = parser.parseFromString(html, "text/html");
		const a = doc.querySelector("a");
		return a ? a.textContent.trim() : "";
	}

	function parseDate(textDate) {

		let textDay, textMonth, textYear, textAllMonths;

		if (lang=="eng") {
			textDay=textDate.substring(0,2);
			textMonth=textDate.substring(8,11);
			textYear=textDate.substring(13,17);
			textAllMonths=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
		}

		if (lang=="lat") {
			textDay=textDate.substring(0,2);
			textMonth=textDate.substring(3,6);
			textYear=textDate.substring(8,12);
			textAllMonths=["Ian","Feb","Mar","Apr","Mai","Iun","Iul","Aug","Sep","Oct","Nov","Dec"];
		}

		if (lang=="rus") {
			textDay=textDate.substring(0,2);
			textMonth=textDate.substring(4,7);
			textYear=textDate.substring(9,13);
			textAllMonths=["Янв","Фев","Мар","Апр","Мая","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"];
		}

		let m=0;

		for (let j=0;j<textAllMonths.length;j++){
			if (textAllMonths[j]==textMonth){
				m=j;
				break;
			}
		}

		return new Date(textYear,m,textDay);
	}

	function buildYearBlock(year,textColor){

		let html="<table cellpadding='0' cellspacing='0'>";
		html+="<tr>";
		html+="<td width='50%'><div style='width:100%; border:#ff8a00 1px solid; margin:5px;'></div></td>";
		html+="<td><div class='nimetus2_"+textColor+"' style='padding-left:2px; padding-right:2px;'>"+year+"</div></td>";
		html+="<td width='100%'><div style='width:100%; border:#ff8a00 1px solid; margin:5px;'></div></td>";
		html+="</tr></table>";

		return html;
	}

	for (let i=1;i<fileContentsL.length;i++){

		fileContentsL[i]=correctPadding(fileContentsL[i]);

		const dateStr=getDataAdded(fileContentsL[i]);

		if (!dateStr){
			myDates.push(0);
			continue;
		}

		myDates.push(parseDate(dateStr));
	}


	let len=myDates.length;
	let temp;

	for (let i=len-1;i>=0;i--){
		for (let j=1;j<=i;j++){
			if (myDates[j-1]<myDates[j]){

				temp=myDates[j-1];
				myDates[j-1]=myDates[j];
				myDates[j]=temp;

				temp=fileContentsL[j];
				fileContentsL[j]=fileContentsL[j+1];
				fileContentsL[j+1]=temp;
			}
		}
	}


	let newCol="red";

	for (let i=len-1;i>0;i--){

		if (myDates[i]=="0") continue;

		if (myDates[i].valueOf()==myDates[i-1].valueOf()){

			let hasbull=0;
			let sameDates = [];
			let j=i;
			sameDates.push(j);
			for (j=i;j>=0;j--){
				if (myDates[j].valueOf()!=myDates[j-1].valueOf()) break;
				if (fileContentsL[j].includes("&#9679;") || fileContentsL[j].includes("&#9900;")) {
					hasbull=1;
				}
				sameDates.push(j-1);
			}
			i=j;
			if (hasbull) continue;

			let title1=getLinkTitle(fileContentsL[i+1]);
			let title2=getLinkTitle(fileContentsL[i+2]);
			if (title1==title2) continue;

			for (let k = 0; k < sameDates.length; k++) {
				fileContentsL[sameDates[k]+1]="<font color='"+newCol+"'>"+fileContentsL[sameDates[k]+1]+"</font>";
			}
		}
	}


	let textYearHTML;

	for (let i=len-2;i>=0;i--){

		if (myDates[i+1]=="0") continue;

		if (myDates[i+1].getFullYear()!=myDates[i].getFullYear()){

			textYearHTML=buildYearBlock(myDates[i+1].getFullYear(),textColor);
			fileContentsL.splice(i+2,0,textYearHTML);
		}
	}

	if (len>=1){
		textYearHTML=buildYearBlock(myDates[0].getFullYear(),textColor);
		fileContentsL.splice(1,0,textYearHTML);
	}

	return fileContentsL;
}

function sortByFlag(fileContentsL, lang, textColor){

	const parser=new DOMParser();

	let myFlags=[];
	let myTextFlags=[];
	let fileContentsL2=[];
	let zeroContents=[];

	function getCountry(html){
		const doc=parser.parseFromString(html,"text/html");
		const el=doc.querySelector("[data-country]");
		return el?el.getAttribute("data-country"):null;
	}

	function buildFlagBlock(code,title){

		let html="<table cellpadding='0' cellspacing='0'>";
		html+="<tr>";
		html+="<td width='50%'><div style='width:100%; border:#ff8a00 1px solid; margin:5px;'></div></td>";
		html+="<td><div class='nimetus2_"+textColor+"' style='padding-left:2px; padding-right:2px;'>";
		html+='<img src="lang/all/'+code+'.gif" width="30" title="'+title+'" style="vertical-align:middle;" data-ttcolor="'+textColor.slice(0,-5)+'" />';
		html+="</div></td>";
		html+="<td width='100%'><div style='width:100%; border:#ff8a00 1px solid; margin:5px;'></div></td>";
		html+="</tr></table>";

		return html;
	}


	fileContentsL2.push(fileContentsL[0]);

	for(let i=1;i<fileContentsL.length;i++){

		fileContentsL[i]=correctPadding(fileContentsL[i]);

		let flagStr=getCountry(fileContentsL[i]);

		if(!flagStr){
			zeroContents.push(fileContentsL[i]);
			continue;
		}

		let flags=flagStr.split(";");

		for(let j=0;j<flags.length;j++){

			myFlags.push(getFlagTitle(flags[j],lang));
			myTextFlags.push(flags[j]);
			fileContentsL2.push(fileContentsL[i]);
		}
	}


	let len=myFlags.length;
	let temp;

	for(let i=len-1;i>=0;i--){
		for(let j=1;j<=i;j++){
			if(myFlags[j-1]>myFlags[j]){

				temp=myFlags[j-1];
				myFlags[j-1]=myFlags[j];
				myFlags[j]=temp;

				temp=myTextFlags[j-1];
				myTextFlags[j-1]=myTextFlags[j];
				myTextFlags[j]=temp;

				temp=fileContentsL2[j];
				fileContentsL2[j]=fileContentsL2[j+1];
				fileContentsL2[j+1]=temp;
			}
		}
	}


	let textFlagHTML;

	for(let i=len-2;i>=0;i--){

		if(myFlags[i+1]=="") continue;

		if(myFlags[i+1]!=myFlags[i]){

			textFlagHTML=buildFlagBlock(myTextFlags[i+1],myFlags[i+1]);
			fileContentsL2.splice(i+2,0,textFlagHTML);
		}
	}


	if(len>1 && myFlags[0]!=""){

		textFlagHTML=buildFlagBlock(myTextFlags[0],myFlags[0]);
		fileContentsL2.splice(1,0,textFlagHTML);
	}


	textFlagHTML="<table width='100%'>";
	textFlagHTML+="<tr width='100%'>";
	textFlagHTML+="<td width='100%'><div style='width:100%; border:#ff8a00 1px solid; margin:5px;'></div></td>";
	textFlagHTML+="</tr></table>";
	fileContentsL2.push(textFlagHTML);


	for(let i=0;i<zeroContents.length;i++){
		fileContentsL2.push(zeroContents[i]);
	}

	return fileContentsL2;
}


function generateTabs(type, lang) {
	var tabs = {};
	var tabs2 = {};
	var tabsColor = {};
	var contentsTitle, tabtype2, fontPos, keys, table, rowsCount, i, row, cell1, Div, a, Img, sortby, divLink, textVersInfo;

	if (lang=="eng") textVersInfo = "Version Information";
	if (lang=="lat") textVersInfo = "Notitia Versionis";
	if (lang=="rus") textVersInfo = "Информация о Версии";

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
		tabs["aboutme"]="Circa Mihi";
		tabs["aboutwork"]="Circa Mihi Opus";
		tabs["aboutphd"]="Circa Mei PhD";
		tabs["links"]="Relatio";
		tabs["photos"]="Photo/Imaginibus";
		tabs["amv"]="AMV";
		tabs["junk"]="Quisquiliae";
		tabs["stuff"]='Res <font class="blinking_text" color="red"><sup>&#9889; Evil &#9889;</sup></font>';
		tabs["news"]="Nuntium";
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

	contentsTitle = document.getElementById("contentsTitle");
	tabtype2 = tabs[type];
	if (type=="relaxation" || (lang=="rus" && type=="software")) tabtype2 = tabs2[type];
	fontPos = tabtype2.indexOf("<font");
	if (fontPos !== -1) tabtype2 = tabtype2.substr(0, fontPos-1);
	contentsTitle.innerHTML = contentsTitle.innerHTML + " &blacktriangleright; " + tabtype2;

	keys = Object.keys(tabs);
	table = document.getElementById("tabstable");
	table.replaceChildren();

	rowsCount = Math.ceil(keys.length / 4);

	for (i = 0; i < keys.length; i++) {
		if (i%4 == 0) row = table.insertRow(-1);
		cell1 = row.insertCell(i%4);
		cell1.style.width = '25%';
		cell1.style.textAlign = 'center';

		Div = document.createElement('div');
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
		Div.setAttribute('onkeydown', "if(event.key==='Enter' || event.key===' ') { event.preventDefault(); this.click(); this.onmouseleave();}");
		Div.setAttribute('onmouseenter', "this.className='menu_selected'; if(typeof this.dataset.fullTitle!=='undefined') this.innerHTML=this.dataset.fullTitle;");
		Div.setAttribute('onmouseleave', "mouseOutTab('"+keys[i]+"', '"+type+"', '"+tabsColor[keys[i]]+"'); if(typeof this.dataset.fullTitle!=='undefined') this.innerHTML=this.dataset.shortTitle;");
		sortby = encodeURIComponent(getParameterByName('sortby'));
		divLink = "index_" + lang + ".html?type=" + keys[i] + "&sortby=" + sortby;
		Div.setAttribute('onclick', "if (event.ctrlKey){ window.open('"+divLink+"'); } else { clickStarted = true; window.location.href='"+divLink+"'; };");
		Div.innerHTML = tabs[keys[i]];
		cell1.appendChild(Div);
	}

	Div = document.createElement('div');
	Div.setAttribute('id', "information_div");

	a = document.createElement('a');
	a.setAttribute('tabindex', "0");
	a.setAttribute('onkeydown', "if(event.key==='Enter' || event.key===' ') { event.preventDefault(); this.click(); this.onmouseleave();}");
	a.setAttribute('title', textVersInfo);
	a.setAttribute('href', "javascript:showInformation('" + lang + "');");

	Img = document.createElement('img');
	Img.setAttribute('alt', textVersInfo);
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
	var modStr, infoText;
	$.ajax({
		url: "scripts/showContents.js",
		success: function(data, textStatus, jqXHR) {
			modStr = jqXHR.getResponseHeader('Last-Modified');
			if (lang=='rus') infoText="Карта Сайта Версия 1.0. Создано - 22е Янв, 2018, Последнее Изменение - ";
			if (lang=='eng') infoText="Site Map Version 1.0. Created At - 22nd of Jan, 2018, Last Modification - ";
			if (lang=='lat') infoText="Pagina Tabula Verso 1.0. Creatus - 22nd of Jan, 2018, Ultimo Modificatio - ";
			alert(infoText + formatDate(modStr, lang) + ".");
		}
	});
}

function adjustContentsScrollDiv() {
	var scrollDiv = document.getElementById('scrollDiv');
	var tabsHeight = document.getElementById('tabstable').offsetHeight;
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

	if(a){
		a.setAttribute(
			"onkeydown",
			"if(event.key==='Enter' || event.key===' ') { event.preventDefault(); this.click(); this.onmouseleave();}"
		);
		a.setAttribute("target", "_blank");
	}

	return doc.body.innerHTML;
}

function preloadImagesContents(type, fileContents){
	var imageName=null, type2, parser = new DOMParser(), doc, link, anchors, url;

	for (let i = 0; i < fileContents.length; i++) {
		if (type=="movies" || type=="music" || type=="series" || type=="games" || type=="junk") {
			doc = parser.parseFromString(fileContents[i], "text/html");
			link = doc.querySelector("a");
			if (link) {
				anchors=link.href.split("#");
				if (anchors.length>1) {
					var type2=type;
					if (type=="series" && (
						anchors[1]=="animation" || 
						anchors[1]=="body_horror" || 
						anchors[1]=="space_opera" || 
						anchors[1]=="movies_superhero" || 
						anchors[1]=="dc_extended_universe" || 
						anchors[1]=="marvel_cinematic_universe")) {
						type2="movies";
					}
					url = "images/icons/"+type2+"/"+anchors[1]+".jpg";
					if (!preloadCacheContents[url]) {
						let img = new Image();
						img.src = url;
						preloadCacheContents[url] = img;
					}
				}
			}
		}
	}
}


function showContents(type, sortby, lang) {
	var textColor, lines, fileContents, table, row, cell1, recNum;

	textColor = generateTabs(type, lang);
	refreshSortByTabs(type, sortby, lang);

	$.ajax({
		url: "scripts/contents/" + type + "_" + lang + ".txt",
		success: function(data) {
			lines = data;
			fileContents = lines
				.split(/\r?\n|\r/)
				.map(line => line.trim())
				.filter(line => line.length > 0);
			recNum=fileContents.length-1;
			fileContents[0] = fileContents[0] + '<b class="'+textColor+'_blue'+'"> - '+recNum+' '+getRecordsText(lang, recNum)+'</b>';

			preloadImagesContents(type, fileContents);

			if (sortby=="date") fileContents = sortByDate(fileContents, lang, textColor+"_blue");
			if (sortby=="flag" && (type=="music" || type=="movies" || type=="series" || type=="books" || type=="junk" || type=="news")) fileContents = sortByFlag(fileContents, lang, textColor+"_blue");

			table = document.getElementById("contentstable");
			table.replaceChildren();

			for (let i = 0; i < fileContents.length; i++) {
				fileContents[i] = correctLink(fileContents[i]);
				row = table.insertRow(-1);
				cell1 = row.insertCell(0);
				cell1.className = 'text_'+textColor+"_blue";
				if (i==0) { cell1.setAttribute('style', 'padding-left:10px;padding-right:10px;text-align: center;'); }
				else { cell1.setAttribute('style', 'padding-left:10px;padding-right:10px;'); }
				cell1.innerHTML = fileContents[i];
			}
			adjustContentsScrollDiv();
		}
	});
}

