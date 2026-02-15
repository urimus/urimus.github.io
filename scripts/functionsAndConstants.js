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



function formatDate(date = Date.now().valueOf(), lang = "eng") {

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

function logData(caption, data, maxLength = 100) {
	console.log(caption);

	const truncate = (value) => {
		if (typeof value === 'string' && value.length > maxLength) {
			return value.slice(0, maxLength) + '… [' + value.length + ' chars]';
		}
		return value;
	};

	if (data instanceof FormData) {
		for (const [key, value] of data.entries()) {
			if (value instanceof File) {
				console.log(
					`  ${key}: [File]`,
					`${value.name} (${value.type || 'unknown'}, ${value.size} bytes)`
				);
			} else {
				console.log(`  ${key}:`, truncate(value));
			}
		}
		return;
	}

	if (typeof data === 'object' && data !== null) {
		Object.entries(data).forEach(([key, value]) => {
			console.log(`  ${key}:`, truncate(value));
		});
	} else {
		console.log('  ', data);
	}
}

$.ajaxSetup({
	error: function (jqXHR, textStatus, errorThrown) {

		const method = (this.type || 'GET').toUpperCase();
		const url = this.url ? decodeURIComponent(this.url) : '';
		const query = url.split('?')[1] || '';
		const getData = query
			? Object.fromEntries(new URLSearchParams(query))
			: '(no GET params)';
		let postData = '(none)';
		if (typeof this.data !== 'undefined') postData = this.data;

		console.groupCollapsed(
			`%cAJAX ERROR [${method} | HTTP ${jqXHR.status}]`,
			'color:red;font-weight:bold'
		);

		console.log('URL:', url);
		if (method === 'GET' || getData !== '(no GET params)') logData('GET params:', getData);
		if (method !== 'GET') logData('POST data:', postData);
		console.log('textStatus:', textStatus);
		console.log('errorThrown:', errorThrown);

		const phpError = jqXHR.getResponseHeader('X-PHP-Error');
		if (phpError) {
			console.log('=== PHP Error Details ===');
			console.log('Message:', decodeURIComponent(jqXHR.getResponseHeader('X-PHP-Message') || ''));
			console.log('File:', decodeURIComponent(jqXHR.getResponseHeader('X-PHP-File') || ''));
			console.log('Line:', jqXHR.getResponseHeader('X-PHP-Line') || '');
			console.log('==================');
		}

		const stack = new Error().stack;
		if (stack) {
			console.log('=== JavaScript Call Stack ===');
			console.log(stack);
			console.log('==================');
		}

		console.log('Complete PHP log: ', window.location.origin+"/html_editor_rus.html?pattern=scripts/php/logs/*&i=0");

		console.log('Response:', jqXHR.responseText);
		console.groupEnd();
	}
});
