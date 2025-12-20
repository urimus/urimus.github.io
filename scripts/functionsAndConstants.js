"use strict";

function getParameterByName(name, url) {
	if (!url) var url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function mouseOut(tabType, feedTypeL, col) {
	if (typeof col === 'undefined') var col = "red"; 
	if (feedTypeL==tabType) {
		if (document.getElementById("feed_"+tabType)) document.getElementById("feed_"+tabType).className = "menu_selected";
		if (document.getElementById("contents_"+tabType)) document.getElementById("contents_"+tabType).className = "menu_selected";
	} else {
		if (document.getElementById("feed_"+tabType)) document.getElementById("feed_"+tabType).className = "menu_not_selected_"+col;
		if (document.getElementById("contents_"+tabType)) document.getElementById("contents_"+tabType).className = "menu_not_selected_"+col;
	}
}



function formatDate(date, lang) {
	if (typeof lang==="undefined") var lang="eng";
	if (typeof date === 'undefined') var date = Date.now().valueOf(); 

	var d = new Date();
	var invertedOffset = -d.getTimezoneOffset();

	var mydate = new Date(date);
	mydate = new Date(mydate.getTime() + invertedOffset*60*1000);

	var month="";
	var dayEnding="";
	var dayMonthSep=" ";
	if (lang=="eng") {
		month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][mydate.getUTCMonth()];
		dayEnding="th";
		if (mydate.getUTCDate()==1 || mydate.getUTCDate()==21 || mydate.getUTCDate()==31) dayEnding="st";
		if (mydate.getUTCDate()==2 || mydate.getUTCDate()==22) dayEnding="nd";
		if (mydate.getUTCDate()==3 || mydate.getUTCDate()==23) dayEnding="rd";
		dayMonthSep=" of ";
	}
	if (lang=="lat") {
		month = ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun","Iul", "Aug", "Sep", "Oct", "Nov", "Dec"][mydate.getUTCMonth()];
	}
	if (lang=="rus") {
		month = ["Янв", "Фев", "Мар", "Апр", "Мая", "Июн","Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"][mydate.getUTCMonth()];
		dayEnding="е";
	}
	var out = ("0"+mydate.getUTCDate()).slice(-2) + dayEnding + dayMonthSep + month + ', ' + mydate.getUTCFullYear() + ", " + ("0"+mydate.getUTCHours()).slice(-2) + ":" + ("0"+mydate.getUTCMinutes()).slice(-2) + ":" + ("0"+mydate.getUTCSeconds()).slice(-2) + " UTC";
	if (mydate.getTimezoneOffset() != 0) {
		if (invertedOffset>0) out = out + "+"+invertedOffset/60;
		if (invertedOffset<0) out = out + "-"+ (-invertedOffset/60);
	}
	return out;
}

function formatBytes(bytes) {
	var units = ['B', 'KB', 'MB', 'GB', 'TB'];
	var bytes_i = parseInt(bytes);
	var i;
	for (i = 0; bytes_i >= 1000 && i < 4; i++) {
		bytes_i /= 1000;
	}
	if (i==0) return bytes_i +" "+ units[i];
	return bytes_i.toFixed(2) +" "+ units[i];
}

function getRecordsText(lang, recordsNum) {
	var numFeedsTextLast1, numFeedsTextLast2, textRecords;

	if (lang == "rus"){
		numFeedsTextLast1 = recordsNum.toString().slice(-1);
		numFeedsTextLast2 = "";
		if (recordsNum > 9) numFeedsTextLast2 = recordsNum.toString().slice(-2);
		if (numFeedsTextLast1 == 1) {
			if (numFeedsTextLast2 != 11) {
				textRecords = "Запись";
			} else {
				textRecords = "Записей";
			}
		} else if (numFeedsTextLast1 == 2 || numFeedsTextLast1 == 3 || numFeedsTextLast1 == 4) {
			if (numFeedsTextLast2 != 12 && numFeedsTextLast2 != 13 && numFeedsTextLast2 != 14) {
				textRecords = "Записи";
			} else {
				textRecords = "Записей";
			}
		} else {
			textRecords = "Записей";
		}
	}

	if (lang == "eng"){
		if (recordsNum == 1) {
			textRecords = "Record";
		} else {
			textRecords = "Records";					
		}
	}

	if (lang == "lat"){
		if (recordsNum == 1) {
			textRecords = "Monumentum";
		} else {
			textRecords = "Tabula";					
		}
	}

	return textRecords;
}
