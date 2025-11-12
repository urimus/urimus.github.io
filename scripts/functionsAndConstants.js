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

function removeBom(str) {
	var ch, st, re = [], j=0;
	for (var c = 0; c < str.length; c++ ) {
		if (c==5) return str; // nothing found
		var ch = str.charCodeAt(c);
		if(ch < 127)
		{
			re[j++] = ch & 0xFF;
			if (removeBomCheckSoFar(re)) return removeBom(str.substr(c+1));
		}
		else
		{
			var st = [];    // clear stack
			do {
				st.push( ch & 0xFF );  // push byte to stack
				ch = ch >> 8;          // shift value down by 1 byte
			}
			while ( ch );
			// add stack contents to result
			// done because chars have "wrong" endianness
			st = st.reverse();
			for(var k=0;k<st.length; ++k)
				re[j++] = st[k];
			if (removeBomCheckSoFar(re)) return removeBom(str.substr(c+1));
		}
	}
	return str; // nothing found
}

function removeBomCheckSoFar(re) {
	if (typeof re[1] !== 'undefined') { // first 2 bytes exists
		if (re[0]==254 && re[1]==255) return 1; // UTF-16 (BE)
		if (re[0]==255 && re[1]==254) return 1; // UTF-16 (LE)
	} 
	if (typeof re[2] !== 'undefined') { // first 3 bytes exists
		if (re[0]==239 && re[1]==187 && re[2]==191) return 1; // UTF-8
		if (re[0]==247 && re[1]==100 && re[2]==76) return 1; // UTF-1
		if (re[0]==14 && re[1]==254 && re[2]==255) return 1; // SCSU
		if (re[0]==251 && re[1]==238 && re[2]==40) return 1; // BOCU-1
	}
	if (typeof re[3] !== 'undefined') { // first 4 bytes exists
		if (re[0]==0 && re[1]==0 && re[2]==254 && re[3]==255) return 1; // UTF-32 (BE)
		if (re[0]==255 && re[1]==254 && re[2]==0 && re[3]==0) return 1; // UTF-32 (LE)
		if (re[0]==43 && re[1]==47 && re[2]==118 && re[3]==56) return 1; // UTF-7 - 1
		if (re[0]==43 && re[1]==47 && re[2]==118 && re[3]==57) return 1; // UTF-7 - 2
		if (re[0]==43 && re[1]==47 && re[2]==118 && re[3]==43) return 1; // UTF-7 - 3
		if (re[0]==43 && re[1]==47 && re[2]==118 && re[3]==47) return 1; // UTF-7 - 4
		if (re[0]==221 && re[1]==115 && re[2]==102 && re[3]==115) return 1; // UTF-EBCDIC
		if (re[0]==132 && re[1]==49 && re[2]==149 && re[3]==51) return 1; // GB-18030
	}
	if (typeof re[4] !== 'undefined') { // first 5 bytes exists
		if (re[0]==43 && re[1]==47 && re[2]==118 && re[3]==56 && re[4]==-45) return 1; // UTF-7 - 5
	}
	return 0;
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
	var dayMonthSep="";
	if (lang=="eng" || lang=="lat") {
		month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][mydate.getUTCMonth()];
		dayEnding="th";
		if (mydate.getUTCDate()==1 || mydate.getUTCDate()==21 || mydate.getUTCDate()==31) dayEnding="st";
		if (mydate.getUTCDate()==2 || mydate.getUTCDate()==22) dayEnding="nd";
		if (mydate.getUTCDate()==3 || mydate.getUTCDate()==23) dayEnding="rd";
		dayMonthSep=" of ";
	}
	if (lang=="rus") {
		month = ["Янв", "Фев", "Мар", "Апр", "Мая", "Июн","Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"][mydate.getUTCMonth()];
		dayEnding="е";
		dayMonthSep=" ";
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
