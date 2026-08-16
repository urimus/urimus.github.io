"use strict";

function getParameterByName(name) {
	return new URLSearchParams(window.location.search).get(name);
}

function mouseOutTab(tabType, feedTypeL, col = "red") {
	if (clickStarted) return;
	if (feedTypeL==tabType) {
		if (document.getElementById("feed_"+tabType)) document.getElementById("feed_"+tabType).className = "menu_selected";
		if (document.getElementById("contents_"+tabType)) document.getElementById("contents_"+tabType).className = "menu_selected";
	} else {
		if (document.getElementById("feed_"+tabType)) document.getElementById("feed_"+tabType).className = "menu_not_selected_"+col;
		if (document.getElementById("contents_"+tabType)) document.getElementById("contents_"+tabType).className = "menu_not_selected_"+col;
	}
}

function formatDate(date = Date.now(), lang = "eng") {

	let mydate = new Date(date);

	let day = mydate.getDate();
	let month = mydate.getMonth();
	let dayEnding = "";
	let dayMonthSep = " ";

	if (lang == "eng") {
		month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][month];
		dayEnding = "th";
		if (day == 1 || day == 21 || day == 31) dayEnding = "st";
		if (day == 2 || day == 22) dayEnding = "nd";
		if (day == 3 || day == 23) dayEnding = "rd";
		dayMonthSep = " of ";
	}

	if (lang == "lat") {
		month = ["Ian","Feb","Mar","Apr","Mai","Iun","Iul","Aug","Sep","Oct","Nov","Dec"][month];
	}

	if (lang == "rus") {
		month = ["Янв","Фев","Мар","Апр","Мая","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"][month];
		dayEnding = "е";
	}

	let out =
		("0" + day).slice(-2) +
		dayEnding +
		dayMonthSep +
		month +
		", " +
		mydate.getFullYear() +
		", " +
		("0" + mydate.getHours()).slice(-2) +
		":" +
		("0" + mydate.getMinutes()).slice(-2) +
		":" +
		("0" + mydate.getSeconds()).slice(-2) +
		" UTC";

	let offset = -mydate.getTimezoneOffset() / 60;

	if (offset > 0) out += "+" + offset;
	if (offset < 0) out += offset;

	return out;
}

function formatBytes(bytes) {
	let units = ['B', 'KB', 'MB', 'GB', 'TB'];
	let bytes_i = parseInt(bytes);
	let i;
	for (i = 0; bytes_i >= 1000 && i < 4; i++) {
		bytes_i /= 1000;
	}
	if (i==0) return bytes_i +" "+ units[i];
	return bytes_i.toFixed(2) +" "+ units[i];
}

function detectBomCheckSoFar(bytes) {
	if (typeof bytes[1] !== 'undefined') {
		if (bytes[0]=="fe" && bytes[1]=="ff") return 2;
		if (bytes[0]=="ff" && bytes[1]=="fe") return 2;
		if (bytes[0]=="ff" && bytes[1]=="d8") return 2;
	} 
	if (typeof bytes[2] !== 'undefined') {
		if (bytes[0]=="ef" && bytes[1]=="bb" && bytes[2]=="bf") return 3;
		if (bytes[0]=="f7" && bytes[1]=="64" && bytes[2]=="4c") return 3;
		if (bytes[0]=="0e" && bytes[1]=="fe" && bytes[2]=="ff") return 3;
		if (bytes[0]=="fb" && bytes[1]=="ee" && bytes[2]=="28") return 3;
	}
	if (typeof bytes[3] !== 'undefined') {
		if (bytes[0]=="00" && bytes[1]=="00" && bytes[2]=="fe" && bytes[3]=="ff") return 4;
		if (bytes[0]=="ff" && bytes[1]=="fe" && bytes[2]=="00" && bytes[3]=="00") return 4;
		if (bytes[0]=="2b" && bytes[1]=="2f" && bytes[2]=="76" && bytes[3]=="38") return 4;
		if (bytes[0]=="2b" && bytes[1]=="2f" && bytes[2]=="76" && bytes[3]=="39") return 4;
		if (bytes[0]=="2b" && bytes[1]=="2f" && bytes[2]=="76" && bytes[3]=="2b") return 4;
		if (bytes[0]=="2b" && bytes[1]=="2f" && bytes[2]=="76" && bytes[3]=="2f") return 4;
		if (bytes[0]=="dd" && bytes[1]=="73" && bytes[2]=="66" && bytes[3]=="73") return 4;
		if (bytes[0]=="84" && bytes[1]=="31" && bytes[2]=="95" && bytes[3]=="33") return 4;
	}
	if (typeof bytes[4] !== 'undefined') {
		if (bytes[0]=="2b" && bytes[1]=="2f" && bytes[2]=="76" && bytes[3]=="38" && bytes[4]=="2d") return 5;
	}
	return 0;
}

function formatSummary(words_arr, wordsCount, addSpace = true) {
	return words_arr.slice(0, wordsCount).join(" ") + (addSpace ? " " : "");
}

function getLineCount(element) {
	const range = document.createRange();
	range.selectNodeContents(element);
	const rects = [...range.getClientRects()];
	const lines = [];
	for (const rect of rects) {
		if (!lines.some(line => Math.abs(line - rect.top) < 2)) {
			lines.push(rect.top);
		}
	}
	return lines.length;
}

function modifyElesToMakeLines(element, element2, words_arr, linesToShow, addSpace = true) {
	for (let i = 1; i <= words_arr.length; i++) {
		element2.innerHTML = formatSummary(words_arr, i, addSpace);
		if (getLineCount(element) > linesToShow) {
			let wordsCount = i - 1;
			element2.innerHTML = formatSummary(words_arr, wordsCount, addSpace);
			return wordsCount;
		}
	}
	return -1;
}

function splitAllSpaces(str) {
	return str
		.split(/(?:\s+|&(?:nbsp|ensp|emsp|thinsp|hairsp|MediumSpace|ThickSpace|VeryThinSpace|NoBreak|puncsp);|&#(?:32|160|8192|8193|8194|8195|8196|8197|8198|8199|8200|8201|8202|8239|8287|12288);|&#x(?:20|A0|2000|2001|2002|2003|2004|2005|2006|2007|2008|2009|200A|202F|205F|3000);)/giu)
		.filter(Boolean);
}
