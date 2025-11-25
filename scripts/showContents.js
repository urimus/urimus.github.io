"use strict";

// ------------- Global Variables ---------------- //
var preloadCache = [];
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
		if ( (lang=="eng" || lang=="rus") && (typeL=="aboutme" || typeL=="aboutwork" || typeL=="aboutphd" || typeL=="links" || typeL=="howto" || typeL=="music" || typeL=="movies" || typeL=="series" || typeL=="games" || typeL=="books" || typeL=="photos" || typeL=="amv" || typeL=="junk" || typeL=="stuff" || typeL=="anecdotes" || typeL=="heffalump" || typeL=="relaxation" || typeL=="software" || typeL=="satanism" || typeL=="wicca" || typeL=="falsifiability" || typeL=="psychology" || typeL=="countries" || typeL=="totalitarianism" || typeL=="personalities" || typeL=="news") || (lang=="lat" && (typeL=="aboutme" || typeL=="aboutwork" || typeL=="aboutphd" || typeL=="links" || typeL=="photos" || typeL=="amv" || typeL=="junk" || typeL=="stuff" || typeL=="news"))) {
			type=typeL;
		}
		if (lang=="lat" && (typeL=="howto" || typeL=="music" || typeL=="movies" || typeL=="series" || typeL=="games" || typeL=="books" || typeL=="anecdotes" || typeL=="heffalump" || typeL=="relaxation" || typeL=="software" || typeL=="satanism" || typeL=="wicca" || typeL=="falsifiability" || typeL=="psychology" || typeL=="countries" || typeL=="totalitarianism" || typeL=="personalities")) {
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

	showContents(type, sortby, lang);
	processPageResize(1);
}

function mouseOutSortByName(sortbyTypeL) {
	if (sortbyTypeL=="name") {
		document.getElementById("sortby_name").className = "flag_selected";
	} else {
		document.getElementById("sortby_name").className = "flag_not_selected";
	}
}

function mouseOutSortByDate(sortbyTypeL) {
	if (sortbyTypeL=="date") {
		document.getElementById("sortby_date").className = "flag_selected";
	} else {
		document.getElementById("sortby_date").className = "flag_not_selected";
	}
}

function mouseOutSortByFlag(sortbyTypeL) {
	if (sortbyTypeL=="flag") {
		document.getElementById("sortby_flag").className = "flag_selected";
	} else {
		document.getElementById("sortby_flag").className = "flag_not_selected";
	}
}

function refreshSortByTabs(typeL, sortbyTypeL, lang) {
	var sortbyType=getParameterByName('sortby');
	if (sortbyType=="name" || sortbyTypeL=="name") mouseOutSortByName(sortbyTypeL);
	if (sortbyType=="date" || sortbyTypeL=="date") mouseOutSortByDate(sortbyTypeL);

	if (typeL=="music" || typeL=="movies" || typeL=="series" || typeL=="books" || typeL=="junk" || typeL=="news") {
		if (sortbyType=="flag" || sortbyTypeL=="flag") mouseOutSortByFlag(sortbyTypeL);
	} else {
		document.getElementById("sortby_flag").onmouseenter="";
		document.getElementById("sortby_flag").onmouseleave="";
		document.getElementById("sortby_flag").onclick="";
		document.getElementById("sortby_flag_img").src="scripts/contents/icons/sortby/sortby_flag3.png";
	}
}

function correctPadding(line) {
	var spanStpos = line.indexOf("<span");
	if (spanStpos!= -1) {
		var spanStpos2 = line.indexOf(">", 5);
		if (spanStpos2!= -1) {
			var spanEndpos = line.indexOf("</span>");
			if (spanEndpos!= -1) {
				line = line.substr(spanStpos2+1, spanEndpos-spanStpos2-1);
			}
		}
	}
	line="<span style='padding-left:10px;'>"+line+"</span>";
	return line;
}

function sortByDate(fileContentsL, lang, textColor) {
	var myDates = [];
	var len, i, j, temp, str, addedpos, q1, q2, textDate, textDay, textMonth, textYear, textAllMonths, mydate, newCol, hasbull, hrefPos, clsPos, cls2Pos, titlei1, titlei2, textYearHTML;

	for (i = 1; i < fileContentsL.length; i++) {
		fileContentsL[i]=correctPadding(fileContentsL[i]);
		str=fileContentsL[i];
		addedpos = str.indexOf("data-added=");
		if (addedpos == -1) { myDates.push(0); continue;}

		q1 = str.indexOf("\"", addedpos+1);
		q2 = str.indexOf("\"", q1+1);
		textDate=str.substring(q1+1, q2);
		textDay=textDate.substring(0, 2);
		if (lang=="eng" || lang=="lat") textMonth=textDate.substring(8, 11);
		if (lang=="rus") textMonth=textDate.substring(4, 7);
		if (lang=="eng" || lang=="lat") textYear=textDate.substring(13, 17);
		if (lang=="rus") textYear=textDate.substring(9, 13);

		if (lang=="eng" || lang=="lat") textAllMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		if (lang=="rus") textAllMonths = ["Янв", "Фев", "Мар", "Апр", "Мая", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];

		for (j = 0; j < textAllMonths.length; j++) {
			if (textAllMonths[j]==textMonth) {
				textMonth=j;
				break;
			}
		}

		mydate = new Date(textYear, textMonth, textDay);
		myDates.push(mydate);
	}

	len = myDates.length;
	for (i = len-1; i>=0; i--){
		for(j = 1; j<=i; j++){
			if(myDates[j-1]<myDates[j]){
				temp = myDates[j-1];
				myDates[j-1] = myDates[j];
				myDates[j] = temp;

				temp = fileContentsL[j];
				fileContentsL[j] = fileContentsL[j+1];
				fileContentsL[j+1] = temp;
			}
		}
	}

	newCol="red";
	for (i = len-2; i>=0; i--) {
		if (myDates[i+1]=="0") continue;
		if(myDates[i+1].valueOf()==myDates[i].valueOf()) {
			hasbull=0;
			for (j = i; j>=0; j--) {
				if(myDates[j+1].valueOf()!=myDates[j].valueOf()) break;
				if (fileContentsL[j+1].indexOf("&#9679;")!=-1) hasbull=1;
				if (fileContentsL[j+1].indexOf("&#9900;")!=-1) hasbull=1;
				if (fileContentsL[j+2].indexOf("&#9679;")!=-1) hasbull=1;
				if (fileContentsL[j+2].indexOf("&#9900;")!=-1) hasbull=1;
			}
			if (hasbull) {i=j; continue;}

			hrefPos=fileContentsL[i+1].indexOf("a href");
			clsPos=fileContentsL[i+1].indexOf(">", hrefPos+1);
			cls2Pos=fileContentsL[i+1].indexOf("<", clsPos+1);
			titlei1=fileContentsL[i+1].substring(clsPos+1, cls2Pos);

			hrefPos=fileContentsL[i+2].indexOf("a href");
			clsPos=fileContentsL[i+2].indexOf(">", hrefPos+1);
			cls2Pos=fileContentsL[i+2].indexOf("<", clsPos+1);
			titlei2=fileContentsL[i+2].substring(clsPos+1, cls2Pos);

			if (titlei1==titlei2) continue;

			fileContentsL[i+1]="<font color='"+newCol+"'>"+fileContentsL[i+1]+"</font>";
			fileContentsL[i+2]="<font color='"+newCol+"'>"+fileContentsL[i+2]+"</font>";
		}
	}

	for (i = len-2; i>=0; i--) {
		if (myDates[i+1]=="0") continue;
		if(myDates[i+1].getFullYear()!=myDates[i].getFullYear()) {
			textYearHTML="<table cellpadding='0' cellspacing='0'>";
			textYearHTML+="<tr>";
			textYearHTML+="<td width='50%'><div style='width: 100%; border: #ff8a00 1px solid; margin: 5px;'></div></td>";
			textYearHTML+="<td><div class='nimetus2_"+textColor+"' style='padding-left:2px; padding-right:2px;'>"+myDates[i+1].getFullYear()+"</div></td>";
			textYearHTML+="<td width='100%'><div style='width: 100%; border: #ff8a00 1px solid; margin: 5px;'></div></td>";
			textYearHTML+="</tr>";
			textYearHTML+="</table>";
			fileContentsL.splice(i+2, 0, textYearHTML);
		}
	}

	if (len>1) {
		textYearHTML="<table cellpadding='0' cellspacing='0'>";
		textYearHTML+="<tr>";
		textYearHTML+="<td width='50%'><div style='width: 100%; border: #ff8a00 1px solid; margin: 5px;'></div></td>";
		textYearHTML+="<td><div class='nimetus2_"+textColor+"' style='padding-left:2px; padding-right:2px;'>"+myDates[0].getFullYear()+"</div></td>";
		textYearHTML+="<td width='100%'><div style='width: 100%; border: #ff8a00 1px solid; margin: 5px;'></div></td>";
		textYearHTML+="</tr>";
		textYearHTML+="</table>";
		fileContentsL.splice(1, 0, textYearHTML);
	}

	return fileContentsL;
}

function sortByFlag(fileContentsL, lang, textColor) {
	var myFlags = [];
	var myTextFlags = [];
	var fileContentsL2 = [];
	var zeroContents = [];
	var len, i, j, str, flagpos, q1, q2, textFlag, textFlags, temp, textFlagHTML;

	fileContentsL2.push(fileContentsL[0]); 

	for (i = 1; i < fileContentsL.length; i++) {
		fileContentsL[i] = correctPadding(fileContentsL[i]);
		str = fileContentsL[i];

		flagpos = str.indexOf("data-country=");
		if (flagpos == -1) { zeroContents.push(str); continue;}

		q1 = str.indexOf("\"", flagpos+1);
		q2 = str.indexOf("\"", q1+1);
		textFlag = str.substring(q1+1, q2);

		textFlags = textFlag.split(";");
		if (textFlags.length > 1) {
			for (j = 0; j < textFlags.length; j++) {
				myFlags.push(getFlagTitle(textFlags[j], lang));
				myTextFlags.push(textFlags[j]);
				fileContentsL2.push(str);
			}
		} else {
			myFlags.push(getFlagTitle(textFlag, lang));
			myTextFlags.push(textFlag);
			fileContentsL2.push(str);
		}
	}

	len = myFlags.length;
	for (i = len-1; i>=0; i--){
		for(j = 1; j<=i; j++){
			if(myFlags[j-1] > myFlags[j]){
				temp = myFlags[j-1]; myFlags[j-1] = myFlags[j]; myFlags[j] = temp;
				temp = myTextFlags[j-1]; myTextFlags[j-1] = myTextFlags[j]; myTextFlags[j] = temp;
				temp = fileContentsL2[j]; fileContentsL2[j] = fileContentsL2[j+1]; fileContentsL2[j+1] = temp;
			}
		}
	}

	for (i = len-2; i>=0; i--) {
		if (myFlags[i+1] == "") continue;
		if(myFlags[i+1] != myFlags[i]) {
			textFlagHTML = "<table cellpadding='0' cellspacing='0'>";
			textFlagHTML += "<tr>";
			textFlagHTML += "<td width='50%'><div style='width: 100%; border: #ff8a00 1px solid; margin: 5px;'></div></td>";
			textFlagHTML += "<td><div class='nimetus2_"+textColor+"' style='padding-left:2px; padding-right:2px;'>";
			textFlagHTML += '<img src="lang/all/'+myTextFlags[i+1]+'.gif" width="30" title="'+myFlags[i+1]+'" style="vertical-align:middle;" data-ttcolor="'+textColor.slice(0, -5)+'" />';
			textFlagHTML += "</div></td>";
			textFlagHTML += "<td width='100%'><div style='width: 100%; border: #ff8a00 1px solid; margin: 5px;'></div></td>";
			textFlagHTML += "</tr>";
			textFlagHTML += "</table>";
			fileContentsL2.splice(i+2, 0, textFlagHTML);
		}
	}

	if (len > 1 && myFlags[0] != "") {
		textFlagHTML = "<table cellpadding='0' cellspacing='0'>";
		textFlagHTML += "<tr>";
		textFlagHTML += "<td width='50%'><div style='width: 100%; border: #ff8a00 1px solid; margin: 5px;'></div></td>";
		textFlagHTML += "<td><div class='nimetus2_"+textColor+"' style='padding-left:2px; padding-right:2px;'>";
		textFlagHTML += '<img src="lang/all/'+myTextFlags[0]+'.gif" width="30" title="'+myFlags[0]+'" style="vertical-align:middle;" data-ttcolor="'+textColor.slice(0, -5)+'" />';
		textFlagHTML += "</div></td>";
		textFlagHTML += "<td width='100%'><div style='width: 100%; border: #ff8a00 1px solid; margin: 5px;'></div></td>";
		textFlagHTML += "</tr>";
		textFlagHTML += "</table>";
		fileContentsL2.splice(1, 0, textFlagHTML);
	}

	textFlagHTML = "<table width='100%'>";
	textFlagHTML += "<tr width='100%'>";
	textFlagHTML += "<td width='100%'><div style='width: 100%; border: #ff8a00 1px solid; margin: 5px;'></div></td>";
	textFlagHTML += "</tr>";
	textFlagHTML += "</table>";
	fileContentsL2.push(textFlagHTML);

	for (i = 0; i < zeroContents.length; i++) {
		fileContentsL2.push(zeroContents[i]);
	}

	return fileContentsL2;
}
function generateTabs(type, lang) {
	var tabs = {};
	var tabs2 = {};
	var tabsColor = {};
	var contentsTitle, tabtype2, fontPos, keys, table, rowsCount, i, row, cell1, Div, a, Img, sortby, divLink;

	if (lang=="rus") {
		tabs["aboutme"]="Обо мне";
		tabs["aboutwork"]="О Моей Работе";
		tabs["aboutphd"]="О моём PhD";
		tabs["links"]="Ссылки";
		tabs["howto"]='How-to <font class="blinking_text" color="fuchsia"><sup>&#10038; No Entry &#10038;</sup></font>';
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
		tabs["howto"]='How-to <font class="blinking_text" color="fuchsia"><sup>&#10038; No Entry &#10038;</sup></font>';
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
		tabs["junk"]="Junk";
		tabs["stuff"]='Effercio <font class="blinking_text" color="red"><sup>&#9889; Evil &#9889;</sup></font>';
		tabs["news"]="Nuntium";
	}

	tabsColor["aboutme"]="blue";
	tabsColor["aboutwork"]="blue";
	tabsColor["aboutphd"]="blue";
	tabsColor["links"]="blue";
	tabsColor["howto"]="blue";
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
		Div.setAttribute('onmouseenter', "this.className='menu_selected'; if(typeof this.dataset.fullTitle!=='undefined') this.innerHTML=this.dataset.fullTitle;");
		Div.setAttribute('onmouseleave', "mouseOut('"+keys[i]+"', '"+type+"', '"+tabsColor[keys[i]]+"'); if(typeof this.dataset.fullTitle!=='undefined') this.innerHTML=this.dataset.shortTitle;");
		sortby = encodeURIComponent(getParameterByName('sortby'));
		divLink = "index_" + lang + ".html?type=" + keys[i] + "&sortby=" + sortby;
		Div.setAttribute('onclick', "if (event.ctrlKey==1){ window.open('"+divLink+"'); } else { window.location.href='"+divLink+"'; };");
		Div.innerHTML = tabs[keys[i]];
		cell1.appendChild(Div);
	}

	Div = document.createElement('div');
	Div.setAttribute('id', "information_div");

	a = document.createElement('a');
	a.setAttribute('href', "javascript:showInformation('" + lang + "');");

	Img = document.createElement('img');
	Img.setAttribute('src', "images/icons/html_editor/information.png");
	if (lang=="eng" || lang=="lat") { Img.setAttribute('alt', "Version Information"); Img.setAttribute('title', "Version Information"); }
	if (lang=="rus") { Img.setAttribute('alt', "Информация о Версии"); Img.setAttribute('title', "Информация о Версии"); }
	Img.setAttribute('id', "information_img");
	Img.setAttribute('class', "thumbnail_image_blue_png");

	a.appendChild(Img);
	Div.appendChild(a);
	table.appendChild(Div);

	table.style.position = 'relative';
	Div.style.position = 'absolute';
	Div.style.right = '2px';
	Div.style.bottom = '-9px';

	adjustContentsScrollDiv();

	return tabsColor[type];
}

function showInformation(lang) {
	var xmlhttp2, modStr, infoText, dataFileName;

	if (window.XMLHttpRequest) {
		xmlhttp2 = new XMLHttpRequest();
	} else {
		xmlhttp2 = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp2.onreadystatechange = function() {
		if (this.readyState==4 && this.status==200) {
			modStr = xmlhttp2.getResponseHeader('Last-Modified');
			if (lang=='rus') infoText="Карта Сайта Версия 1.0. Создано - 22е Янв, 2018, Последнее Изменение - ";
			if (lang=='eng') infoText="Site Map Version 1.0. Created At - 22nd of Jan, 2018, Last Modification - ";
			if (lang=='lat') infoText="Pagina Tabula Verso 1.0. Creatus - 22nd of Jan, 2018, Ultimo Modificatio - ";
			alert(infoText + formatDate(modStr, lang) + ".");
		}
	};
	dataFileName = "scripts/showContents.js";
	xmlhttp2.open("GET", dataFileName, true);
	xmlhttp2.send();
}

function adjustContentsScrollDiv() {
	var scrollDiv = document.getElementById('scrollDiv');
	var tabsHeight = document.getElementById('tabstable').offsetHeight;

	if (isMobile()) {
		scrollDiv.style.minHeight = (menuHeight - tabsHeight - 8) + "px";
		scrollDiv.style.height = "100%";
		return;
	}

	scrollDiv.style.minHeight="calc(100svh - " + (getScrollDivOffset() + tabsHeight + 8) + "px)";
	scrollDiv.style.height=(menuHeight - tabsHeight - 8) + "px";

}

function showContents(type, sortby, lang) {
	var textColor, xmlhttp, lines, fileContents, table, row, cell1, dataFileName, recNum;

	textColor = generateTabs(type, lang);
	refreshSortByTabs(type, sortby, lang);

	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4) {
			lines = xmlhttp.responseText;
			fileContents = lines.split('\n').filter(lines => lines.length > 0 && lines.charCodeAt(0) !== 13);
			recNum=fileContents.length-1;
			fileContents[0] = fileContents[0] + '<b class="'+textColor+'_blue'+'"> - '+recNum+' '+getRecordsText(lang, recNum)+'</b>';

			if (sortby=="date") fileContents = sortByDate(fileContents, lang, textColor+"_blue");
			if (sortby=="flag" && (type=="music" || type=="movies" || type=="series" || type=="books" || type=="junk" || type=="news")) fileContents = sortByFlag(fileContents, lang, textColor+"_blue");

			table = document.getElementById("contentstable");
			table.replaceChildren();

			var imageName=null, type2, parser = new DOMParser(), doc, link, anchors;
			for (let i = 0; i < fileContents.length; i++) {
				row = table.insertRow(-1);
				cell1 = row.insertCell(0);
				cell1.className = 'text_'+textColor+"_blue";
				if (i==0) { cell1.setAttribute('style', 'padding-left:10px;padding-right:10px;text-align: center;'); }
				else { cell1.setAttribute('style', 'padding-left:10px;padding-right:10px;'); }
				cell1.innerHTML = fileContents[i];
				// preload
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
							let preloadImg = new Image();
							preloadImg.src = "images/icons/"+type2+"/"+anchors[1]+".jpg";
							preloadCache.push(preloadImg);
						}
					}
				}

			}

			adjustContentsScrollDiv();
		}
	};

	dataFileName = "scripts/contents/" + type + "_" + lang + ".txt";
	xmlhttp.open("GET", dataFileName, true);
	xmlhttp.send();
}

