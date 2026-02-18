"use strict";

var textAreaChanged=0;

window.onbeforeunload = function () {
	if (textAreaChanged==1) {
		return "You have attempted to leave this page.  If you have made any changes to the fields without clicking the Save button, your changes will be lost.  Are you sure you want to exit this page?";
	}
}

function replace(lang, action) {
	replacePHP(lang, action);
	return;

	//	replaceScript(lang);	----  below can be used 

	if (typeof action!=='undefined') {
		replacePHP(lang, action);
		return;
	}
	replacePHP(lang, action);

	var message1, confirm2;
	if (lang=="eng") {
		message1 = "Use Script? (Cancel=No)'";
	}
	if (lang=="rus") {
		message1 = "Использовать Скрипт? (Отмена=Нет)";
	}

	confirm2 = window.confirm(message1);
	if (confirm2) {
		replaceScript(lang);
	} else {
		replacePHP(lang, action);
	}
}

function replaceScript(lang) {
	var message1, message2, lines, fileContents, statisticTimesReplaced, statisticLinesReplaced;
	if (lang=='rus') {
		message1="Фаил Изменён Скриптом, Строки # ";
		message2="Фаил НЕ Изменён Скриптом, НЕТ Соответствий.";
	}
	if (lang=='eng') {
		message1="File Modified by Script, Lines # ";
		message2="File NOT Modified by Script, NO Matches.";
	}

	lines = document.getElementById("textarea_area").value;

	////////////////////////////////// Script /////////////////////////
	fileContents = lines.split('\n'); 
	statisticTimesReplaced = 0;
	statisticLinesReplaced = "";
	for (var j = 0; j < fileContents.length; j++) { 
		var line = fileContents[j];
		var searchPos = line.indexOf('data-description="');
		if (searchPos==-1) continue;
		var searchPosQ1 = line.indexOf('"', searchPos+1);
		var searchPosQ2 = line.indexOf('"', searchPosQ1+1);
		var searchPosDT = line.substr(0, searchPos).indexOf('data-title');
		if (searchPosDT!=-1) continue;

		var searchPosD = line.indexOf('.', searchPosQ1+1);
		var searchPosA = line.indexOf('<a', searchPosQ1+1);
		if (searchPosD==-1) continue;
		if (searchPosA<searchPosD) continue;

		var titleText = line.substr(searchPosQ1+1, searchPosD-searchPosQ1-1).trim();
		fileContents[j] = line.substr(0, searchPos) + "data-title=\"" + titleText + "\" data-description=\"" + line.substr(searchPosD+2);
		statisticTimesReplaced++;
		statisticLinesReplaced = statisticLinesReplaced + ", " + j;
	}
	var lines2 = fileContents.join('\n');
	////////////////////////////////// End of Script /////////////////////////

	if (statisticTimesReplaced>0) {
		var textarea = document.getElementById("textarea_area");
		textarea.value = lines2;
		textarea.focus();
		textarea.scrollTop = 0;
		textarea.scrollLeft = 0;
		textarea.setSelectionRange(0, 0);
		setLineAndColumnNumber(lang);
		setTextAreaChanged(lang);
		requestAnimationFrame(() => { // to ensure changes applied
			alert(message1 + statisticLinesReplaced.substr(2));
		});
	} else {
		alert(message2);
	}
}

function replacePHP(lang, action = "replace") {

	var message1, message2, message3, message4, message5;

	// ---------------- Replace ----------------- //
	if (action=="replace") {
		if (lang=="eng") {
			message1 = "Really Replace '";
			message2 = "' to '";
			message3 = "' in all Documents, Matching Pattern '";
			message4 = "Please Define WHAT to Replace.";
			message5 = "Please Define WHAT TO to Replace.";
		}
		if (lang=="rus") {
			message1 = "Действительно Заменить '";
			message2 = "' на '";
			message3 = "' во Всех Документах, Соответствующих Критерию '";
			message4 = "Пожалуйста Определите ЧТО Заменить.";
			message5 = "Пожалуйста Определите НА ЧТО Заменить.";
		}
	}
	// ---------------- End of Replace ----------------- //

	// ---------------- Add or Remove Menu ----------------- //
	if (action=="addMenu" || action=="removeMenu") {
		if (lang=="eng") {
			message1 = "Really ";
			message2 = (action=="addMenu") ? "Add " : "Remove ";
			message3 = "Menu Height ";
			message4 = "in all Documents, Matching Pattern '";
		}
		if (lang=="rus") {
			message1 = "Действительно ";
			message2 = (action=="addMenu") ? "Добавить " : "Убавить ";
			message3 = "Высоту Меню ";
			message4 = "во Всех Документах, Соответстующих Критерию '";
		}
	}
	// ---------------- End of Add or Remove Menu ----------------- //

	var replaceWhat = "";
	var replaceTo = "";

	// ---------------- Replace ----------------- //
	if (action=="replace") {
		if (replaceWhat=="") {
			if (document.selection != undefined)  { // IE version
				document.getElementById('textarea_area').focus();
				replaceWhat = document.selection.createRange().text;
				replaceTo = replaceWhat;
			} else if (document.getElementById('textarea_area').selectionStart != undefined) { // Mozilla version
				var textarea = document.getElementById('textarea_area');
				textarea.focus();
				var startPos = textarea.selectionStart;
				var endPos = textarea.selectionEnd;
				replaceWhat = textarea.value.substring(startPos, endPos);
				var lines = replaceWhat.split(String.fromCharCode(10));
				replaceWhat = lines.join('\\n');
				lines = replaceWhat.split(String.fromCharCode(9));
				replaceWhat = lines.join('\\t');
				replaceTo = replaceWhat;
			}
		}

		replaceWhat = prompt(message4, replaceWhat);
		if (replaceWhat == null ) {return;}
		if (replaceWhat=="") {alert(message4); return;}
		replaceTo = prompt(message5, replaceTo);
		if (replaceTo == null ) {return;}

		if (document.getElementById('textarea_area').selectionStart != undefined) { // Mozilla version
			var lines = replaceWhat.split('\\n');
			replaceWhat = lines.join(String.fromCharCode(10));
			lines = replaceWhat.split('\\t');
			replaceWhat = lines.join(String.fromCharCode(9));
			lines = replaceTo.split('\\n');
			replaceTo = lines.join(String.fromCharCode(10));
			lines = replaceTo.split('\\t');
			replaceTo = lines.join(String.fromCharCode(9));
		}

		var confirmReplace = window.confirm(message1 + replaceWhat + message2 + replaceTo + message3 + getParameterByName('pattern') + "' ?");
		if (!confirmReplace) return;
	}
	// ---------------- End of Replace ----------------- //

	// ---------------- Add or Remove Menu ----------------- //
	if (action=="addMenu" || action=="removeMenu") {
		var confirmMenu = window.confirm(message1 + message2 + message3 + message4 + getParameterByName('pattern') + "' ?");
		if (!confirmMenu) return;
	}
	// ---------------- End of Add or Remove Menu ----------------- //

	$("#replace_div").hide();
	$("#addMenu_div").hide();
	$("#removeMenu_div").hide();
	$("#resizeFolderImages_div").hide();
	$("#resizeImage_div").hide();

	var searchPatt = getParameterByName('pattern'); 

	if (!searchPatt) return;
	$.ajax({
		url: 'scripts/php/dir.php',
		data: {
			q: searchPatt,
			fileToShow: parseInt(getParameterByName('i')) || 0
		},
		success: function(data) {
			var dir = JSON.parse(data);
			if (dir.length>0) {
				processReplacePHP(lang, action, dir, 0, replaceWhat, replaceTo, 0, 0);
			} else {
				return false;
			}
		}
	});
}

function processReplacePHP(lang, action, dir, i, replaceWhat, replaceTo, statisticsTimesReplaced, statisticsFilesProcessed) {
	var statisticsTimesReplaced_o = statisticsTimesReplaced;
	var message1, message2, message3, message4, message5, message6, message7, message8, message9;

	if (lang == "eng") {
		message1 = "HTML Editor";
		message2 = "Progress: ";
		message3 = "Files Replaced Successfully.";
		message4 = "File Replaced Successfully.";
		message5 = "Statistics: ";
		message6 = " Replacements Were Made in ";
		message7 = " Files of ";
		message8 = " File of ";
		message9 = "Do you Want to View Log File?";
	} else if (lang == "rus") {
		message1 = "HTML Редактор";
		message2 = "Прогресс: ";
		message3 = "Файлы Заменены Успешно.";
		message4 = "Фаил Заменен Успешно.";
		message5 = "Статистика: ";
		message6 = " Замен сделано в ";
		message7 = " Файлах из ";
		message8 = " Файле из ";
		message9 = "Хочешь Просмотреть Log Фаил?";
	}


	let ajaxOptions = {};
	if (action === "replace") {
		ajaxOptions.url = "scripts/php/processReplace.php";
		ajaxOptions.data = {
			filename: dir[i]['correctDir'] + dir[i]['basename'],
			replaceWhat: replaceWhat,
			replaceTo: replaceTo,
			fileNum: i,
			filesProcessed: statisticsFilesProcessed,
			date: i == 0 ? formatDate() : ""
		};
	}

	if (action === "addMenu" || action === "removeMenu") {
		ajaxOptions.url = "scripts/php/processAddRemoveMenu.php";
		ajaxOptions.data = {
			filename: dir[i]['correctDir'] + dir[i]['basename'],
			action: action,
			fileNum: i,
			date: i == 0 ? formatDate() : ""
		};
	}

	$.ajax({
		...ajaxOptions,
		success: function(data, textStatus, jqXHR) {
			if (data == "not logged in") {
				processSearchAndReplace(lang);
				return;
			}

			document.getElementById("caption_div").innerHTML = message2 + (i + 1) + "/" + dir.length;

			if (data.substring(0, 20) == "Unable to open file!") {
				alert(data);
			} else {
				var ret = JSON.parse(data);
				var modified = ret['modified'];
				statisticsTimesReplaced = ret['statisticsTimesReplaced'];
				if (statisticsTimesReplaced > 0) statisticsFilesProcessed++;
				statisticsTimesReplaced = statisticsTimesReplaced_o + statisticsTimesReplaced;

				var fileHref = document.getElementById("fileName").getAttribute("href");
				if (fileHref == dir[i]['correctDir'] + dir[i]['basename']) {
					document.getElementById("dateModified_lbl").innerHTML = formatDate(modified * 1000, lang);
					setBOM(ret["first10bytes"]);

					var textarea = document.getElementById("textarea_area");
					var lines = textarea.value;

					$.ajax({
						url: "scripts/php/getFileContents.php",
						data: {
							filename: fileHref
						},
						success: function(data) {
							var lines2 = data;
							if (lines2 == "not logged in") { processSearchAndReplace(lang); return; }
							if (lines2 != lines) {
								textarea.value = lines2;
								setTextAreaChanged(lang, 0);
							}
						}
					});
				}
			}

			if ((i + 1) == dir.length) {
				document.getElementById("caption_div").innerHTML = message1;
				var fullMessage = (dir.length != 1) ? message3 : message4;
				fullMessage += "\n" + message5 + statisticsTimesReplaced + message6 + statisticsFilesProcessed;
				fullMessage += (statisticsFilesProcessed != 1) ? message7 : message8;
				fullMessage += dir.length + ".\n" + message9;

				$("#replace_div").show();
				$("#addMenu_div").show();
				$("#removeMenu_div").show();
				$("#resizeFolderImages_div").show();
				$("#resizeImage_div").show();

				requestAnimationFrame(() => {
					var confirmLog = window.confirm(fullMessage);
					if (confirmLog) {
						var logFile = "scripts/php/logs/";
						if (action == "replace") window.open('html_editor_' + lang + '.html?pattern=' + logFile + 'replace.log&i=0');
						if (action == "addMenu") window.open('html_editor_' + lang + '.html?pattern=' + logFile + 'addMenu.log&i=0');
						if (action == "removeMenu") window.open('html_editor_' + lang + '.html?pattern=' + logFile + 'removeMenu.log&i=0');
						return;
					}
				});
			} else {
				processReplacePHP(lang, action, dir, i + 1, replaceWhat, replaceTo, statisticsTimesReplaced, statisticsFilesProcessed);
			}
		}
	});
}

// ======================================
// ============ Resize Single Image ======
// ======================================

function resizeImage(lang) {
	var prompt1, prompt2;
	if (lang == "rus") {
		prompt1 = "Введите Название Картинки на Сервере.";
		prompt2 = "Введите Новую Ширину Картинки (в пикселях).";
	} else if (lang == "eng") {
		prompt1 = "Enter Image Name on Server.";
		prompt2 = "Enter New Image Width (in pixels).";
	}

	var locStPar = "HTML_editor";
	var HTMLEditorData = getLocalStorageData(locStPar);
	var newFilePath = (typeof HTMLEditorData["resizeImagePath"] !== "undefined") ? HTMLEditorData["resizeImagePath"] : "images/icons/movies";
	newFilePath = prompt(prompt1, newFilePath);
	if (newFilePath == null) return;

	HTMLEditorData["resizeImagePath"] = newFilePath;
	localStorage[locStPar] = JSON.stringify(HTMLEditorData);

	var img = new Image();
	img.onload = function() {
		var imageWidth = this.width;
		var newImageWidth = prompt(prompt2, imageWidth);
		if (newImageWidth == null) return;

		var dir = [];
		dir[0] = [];
		dir[0]['basename'] = newFilePath;
		prResizeImage(lang, dir, "", newImageWidth, 0, 0);
	};
	img.src = newFilePath;
}

// ======================================
// ============ Resize Multiple Images ====
// ======================================

function resizeImages(lang) {
	var prompt1, prompt2, message1, message2;
	if (lang == "eng") {
		prompt1 = "Enter Images Location on Server.";
		prompt2 = "Enter New Images Width (in pixels).";
		message1 = "Really Resize to Width=";
		message2 = "px all Images in '";
	} else if (lang == "rus") {
		prompt1 = "Введите Расположение Картинок на Сервере.";
		prompt2 = "Введите Новую Ширину Картинок (в пикселях).";
		message1 = "Действительно Преобразовать в Width=";
		message2 = "px все Картинки в '";
	}

	var locStPar = "HTML_editor";
	var HTMLEditorData = getLocalStorageData(locStPar);
	var newFilePath = (typeof HTMLEditorData["resizeImagesPath"] !== "undefined") ? HTMLEditorData["resizeImagesPath"] : "images/icons/movies";
	newFilePath = prompt(prompt1, newFilePath);
	if (newFilePath == null) return;

	HTMLEditorData["resizeImagesPath"] = newFilePath;
	localStorage[locStPar] = JSON.stringify(HTMLEditorData);

	if (newFilePath.slice(-1) != "/") newFilePath += "/";
	var filePath = newFilePath;
	newFilePath = newFilePath + "*";

	var newImageWidth = prompt(prompt2, "350");
	if (newImageWidth == null) return;

	if (!window.confirm(message1 + newImageWidth + message2 + newFilePath + "' ?")) return;

	$("#replace_div").hide();
	$("#addMenu_div").hide();
	$("#removeMenu_div").hide();
	$("#resizeFolderImages_div").hide();
	$("#resizeImage_div").hide();

	$.ajax({
		url: 'scripts/php/dir.php',
		data: {
			q: newFilePath
		},
		success: function(data) {
			var dir = JSON.parse(data);
			if (dir.length > 0) {
				prResizeImage(lang, dir, filePath, newImageWidth, 0, 0);
			}
		}
	});
}

// ======================================
// ============ Process Resize Image =====
// ======================================

function prResizeImage(lang, dir, filePath, fileWidth, i, statisticsFilesProcessed) {
	var message1, message2, message3, message4, message5, message6, message7, message8, message9, message10;

	if (lang == "eng") {
		message1 = "HTML Editor";
		message2 = "Progress: ";
		message3 = "Files Resized Successfully.";
		message4 = "File Resized Successfully.";
		message5 = "Statistics: ";
		message6 = "Resizes Were Made in ";
		message7 = " Files of ";
		message8 = " File of ";
		message9 = "Do you Want to View Log File?";
		message10 = "Do you Want to View Resized Image?";
	} else if (lang == "rus") {
		message1 = "HTML Редактор";
		message2 = "Прогресс: ";
		message3 = "Файлы Преобразованы Успешно.";
		message4 = "Фаил Преобразованы Успешно.";
		message5 = "Статистика: ";
		message6 = "Преобразования сделаны в ";
		message7 = " Файлах из ";
		message8 = " Файле из ";
		message9 = "Хочешь Просмотреть Log Фаил?";
		message10 = "Хочешь Просмотреть Преобразованную Картинку?";
	}

	$.ajax({
		url: "scripts/php/resize.php",
		data: {
			filename: filePath + dir[i]['basename'],
			fileNum: i,
			width: fileWidth,
			date: i == 0 ? formatDate() : ""
		},
		success: function(data) {
			if (data == "not logged in") { processSearchAndReplace(lang); return; }
			document.getElementById("caption_div").innerHTML = message2 + (i + 1) + "/" + dir.length;
			if (data.substring(0, 20) == "Unable to open file!") {
				alert(data);
			} else {
				var ret = Number(data);
				if (ret > 0) statisticsFilesProcessed++;
			}

			if ((i + 1) == dir.length) {
				document.getElementById("caption_div").innerHTML = message1;
				var fullMessage = (dir.length != 1) ? message3 : message4;
				fullMessage += "\n" + message5 + message6 + statisticsFilesProcessed;
				fullMessage += (statisticsFilesProcessed != 1) ? message7 : message8;
				fullMessage += dir.length + ".";
				fullMessage += (dir.length == 1 && statisticsFilesProcessed == 1) ? "\n" + message10 : "\n" + message9;

				$("#replace_div").show();
				$("#addMenu_div").show();
				$("#removeMenu_div").show();
				$("#resizeFolderImages_div").show();
				$("#resizeImage_div").show();

				var confirmResize = window.confirm(fullMessage);
				if (confirmResize) {
					if (dir.length == 1 && statisticsFilesProcessed == 1) {
						window.open(filePath + dir[i]['basename'], '_blank').focus();
					} else {
						window.open('html_editor_' + lang + '.html?pattern=scripts/php/logs/resize.log&i=0');
					}
					return;
				}
			} else {
				prResizeImage(lang, dir, filePath, fileWidth, i + 1, statisticsFilesProcessed);
			}
		}
	});
}

// ======================================
// ============ Download Function =======
// ======================================

const BOM_MAP = {
	'UTF-8':       new Uint8Array([0xEF, 0xBB, 0xBF]),
	'UTF-16LE':    new Uint8Array([0xFF, 0xFE]),
	'UTF-16BE':    new Uint8Array([0xFE, 0xFF]),
	'UTF-32LE':    new Uint8Array([0xFF, 0xFE, 0x00, 0x00]),
	'UTF-32BE':    new Uint8Array([0x00, 0x00, 0xFE, 0xFF])
};

function getBOM(encoding) {
	return BOM_MAP[encoding.toUpperCase()] || null;
}

function encodeUTF16LE(str) {
	const buf = new ArrayBuffer(str.length * 2);
	const view = new DataView(buf);
	for (let i = 0; i < str.length; i++) {
		view.setUint16(i * 2, str.charCodeAt(i), true);
	}
	return new Uint8Array(buf);
}

function encodeUTF16BE(str) {
	const buf = new ArrayBuffer(str.length * 2);
	const view = new DataView(buf);
	for (let i = 0; i < str.length; i++) {
		view.setUint16(i * 2, str.charCodeAt(i), false);
	}
	return new Uint8Array(buf);
}

function encodeUTF32LE(str) {
	const codePoints = Array.from(str);
	const buf = new ArrayBuffer(codePoints.length * 4);
	const view = new DataView(buf);
	codePoints.forEach((ch, i) => {
		view.setUint32(i * 4, ch.codePointAt(0), true);
	});
	return new Uint8Array(buf);
}

function encodeUTF32BE(str) {
	const codePoints = Array.from(str);
	const buf = new ArrayBuffer(codePoints.length * 4);
	const view = new DataView(buf);
	codePoints.forEach((ch, i) => {
		view.setUint32(i * 4, ch.codePointAt(0), false);
	});
	return new Uint8Array(buf);
}

function encodeByEncoding(str, enc) {
	let data = str;
	switch (enc) {
		case 'UTF-8':
			data = new TextEncoder().encode(str);
			break;
		case 'UTF-16LE':
			data = encodeUTF16LE(str);
			break;
		case 'UTF-16BE':
			data = encodeUTF16BE(str);
			break;
		case 'UTF-32LE':
			data = encodeUTF32LE(str);
			break;
		case 'UTF-32BE':
			data = encodeUTF32BE(str);
			break;
		default:
			data = new TextEncoder().encode(str);
	}
	return data;
}

function download(lang, encoding = 'UTF-8', filename = "") {

	if (!filename) {
		const href = document.getElementById("fileName").getAttribute("href");
		filename = href.substring(href.lastIndexOf("/") + 1);
	}

	const value = document.getElementById('textarea_area').value;
	const enc = (encoding || '').toUpperCase();
	const bomBytes = getBOM(enc);
	const data = encodeByEncoding(value, enc);
	const blob = new Blob(bomBytes ? [bomBytes, data] : [data]);

	const _URL = window.URL || window.webkitURL;
	const blobUrl = _URL.createObjectURL(blob);

	const a = document.createElement('a');
	a.href = blobUrl;
	a.download = filename;
	a.click();
	_URL.revokeObjectURL(blobUrl);
}

// ======================================
// ============ Save Function ============
// ======================================

function save(lang, encoding = "UTF-8", filename = document.getElementById("fileName")?.getAttribute("href") ?? "", showMessage = 1, message = "") {

	var message1, message2;

	if (lang=="rus") {
		message2="Фаил НЕ сохранён. Вход не выполнен.";
	}
	if (lang=="eng") {
		message2="File NOT Saved. Not Logged In.";
	}

	if (lang=="rus") {
		if (message=="") {message1="Фаил Сохранён Успешно.";} else {message1=message;}
	}
	if (lang=="eng") {
		if (message=="") {message1="File Saved Successfully.";} else {message1=message;}
	}


	$.ajax({
		url: "scripts/php/save.php",
		type: "POST",
		data: {
			filename: filename,
			q: document.getElementById('textarea_area').value,
			encoding: encoding
		},
		success: function(data) {
			if (data=="not logged in") {alert(message2); return;}
			if (data.substring(0,20)=="Unable to open file!") {
				alert(data);
				return;
			} else {
				if (document.getElementById("fileName").getAttribute("href")==filename) {
					var ret=JSON.parse(data);
					document.getElementById("dateModified_lbl").innerHTML=formatDate(ret["modified"]*1000, lang);
					setBOM(ret["first10bytes"]);
					setTextAreaChanged(lang, 0);
					if (showMessage) {
						requestAnimationFrame(() => { 
							alert(message1);
						});
					}
				} else {
					if (showMessage) alert(message1);
				}
				return;
			}
		}
	});
}

function saveas(lang, encoding = "UTF-8") {

	var prompt1, message1, message2;

	if (lang=="rus") {
		prompt1="Введите Новое Имя Файла";
		message1="Фаил Сохранён Как Успешно. Обновите Страницу.";
		message2="Фаил Сохранён Как Успешно.";
	}
	if (lang=="eng") {
		prompt1="Enter New Filename";
		message1="File Saved As Successfully. Refresh Page.";
		message2="File Saved As Successfully.";
	}

	var filename_orig_dir=document.getElementById("fileName").getAttribute("href").substring(0,document.getElementById("fileName").getAttribute("href").lastIndexOf("/")+1);
	var newFileName = prompt(prompt1, document.getElementById("fileName").getAttribute("href"));
	var newFileName_dir=newFileName.substring(0,newFileName.lastIndexOf("/")+1);
	if (newFileName==null || newFileName=="") return;

	$.ajax({
		url: "scripts/php/fileExists.php",
		data: {
			q: newFileName
		},
		success: function(data) {
			var message_show;
			if (data=="0") {
				message_show = (filename_orig_dir==newFileName_dir) ? message1 : message2;
				save(lang, encoding, newFileName, 1, message_show);
			} else { 
				var message3, message4;
				if (lang=="eng") {
					message3 = "File '";
					message4 = "' Exists. Overwrite ?";
				}
				if (lang=="rus") {
					message3 = "Фаил '";
					message4 = "' Существует. Заменить ?";
				}
				var confirm = window.confirm(message3+newFileName+message4);
				if (!confirm) return;
				save(lang, encoding, newFileName, 1, message2);
			}
		}
	});
}

// ======================================
// ============ Upload Function ==========
// ======================================

function upload(lang) {
	var createFolder=0;
	var prompt11, prompt12, message1, message2;

	if (lang=="rus") {
		prompt11="Введите Расположение Файла на Сервере";
		prompt12="Введите Расположение Файлов на Сервере";
		message1 ="Папка '";
		message2 ="' не Найдена. Создать?";
	}
	if (lang=="eng") {
		prompt11="Enter File Location on Server";
		prompt12="Enter Files Location on Server";
		message1 ="Folder '";
		message2 ="' not Found. Create?";
	}

	var input = document.createElement('input');
	input.type = 'file';
	input.multiple='multiple';

	input.onchange = e => { 
		var allFiles=e.target.files;
		var totalFiles=allFiles.length;
		var prompt1, locStPar, HTMLEditorData, newFilePath;

		prompt1 = totalFiles==1 ? prompt11 : prompt12;

		locStPar="HTML_editor";
		HTMLEditorData=getLocalStorageData(locStPar);
		newFilePath="images/icons/movies";
		if (typeof HTMLEditorData["uploadPath"]!== "undefined") newFilePath=HTMLEditorData["uploadPath"];

		newFilePath = prompt(prompt1, newFilePath + "/");
		if (newFilePath == null ) return;
		if (newFilePath.substring(newFilePath.length - 1)=="/") newFilePath=newFilePath.substring(0, newFilePath.length - 1);

		HTMLEditorData["uploadPath"]=newFilePath;
		localStorage[locStPar]=JSON.stringify(HTMLEditorData);

		$.ajax({
			url: "scripts/php/dirExists.php",
			data: {
				q: newFilePath
			},
			success: function(data) {
				if (data=="0") { 
					createFolder=window.confirm(message1 + newFilePath+ message2);
					if (!createFolder) return;
					upload2(lang, allFiles, 0, newFilePath, createFolder);
				} else { 
					upload2(lang, allFiles, 0, newFilePath, createFolder);
				}
			}
		});
	};

	input.click();
}

function upload2(lang, allFiles, i, newFilePath, createFolder) {
	var prompt11, prompt12, message1, message2, message3;
	if (lang=="rus") {
		prompt11 = "Имя Файла на Сервере ?";
		prompt12 = "Имя Картинки на Сервере ?";
		message1 = "Преобразовать формат ";
		message2 = " в формат jpg в Картинке в Файле '";
		message3 = " (Отмена=Нет)";
	}
	if (lang=="eng") {
		prompt11 = "Filename on Server ?";
		prompt12 = "Image Name on Server ?";
		message1 = "Transfer format ";
		message2 = " to format jpg in Image in File '";
		message3 = " (Cancel=No)";
	}

	var totalFiles=allFiles.length;
	if (i==totalFiles) return;
	var file=allFiles[i];
	var filename=file.name;
	var filetype=file.type;
	var isImage=0;
	var imagetype="";

	if (filetype.substr(0, 5)=="image") {
		isImage=1;
		imagetype=filetype.substr(6);
	}

	if (isImage==0) {
		filename = prompt(prompt11, filename);
		if (filename == null ) return;
		upload4(file, filename, lang, allFiles, i, newFilePath, createFolder);
		return;
	}

	var isJpg=0;
	var toJpg=0;
	var confirm2=0;
	if (imagetype!="jpeg") {
		confirm2=window.confirm(message1 + imagetype + message2 + filename + "'?" + message3);
		if (confirm2) toJpg=1;
		filename = prompt(prompt12, filename);
		if (filename == null ) return;
		upload3(file, filename, isJpg, toJpg, lang, allFiles, i, newFilePath, createFolder);
	} else {
		var fileReader = new FileReader();
		fileReader.onload = function(event) {
			var arrayBuffer = event.target.result;
			var arr1 = new Uint8Array(arrayBuffer);
			var bytes = [];
			bytes[0]=arr1[0].toString(16);
			bytes[1]=arr1[1].toString(16);
			if (bytes[0]=="ff" && bytes[1]=="d8") {
				isJpg=1;
			} else {
				toJpg=1;
			}
			filename = prompt(prompt12, filename);
			if (filename == null ) return;
			upload3(file, filename, isJpg, toJpg, lang, allFiles, i, newFilePath, createFolder);
		};
		fileReader.readAsArrayBuffer(file.slice(0,2));
	}
}

function upload3(file, filename, isJpg, toJpg, lang, allFiles, i, newFilePath, createFolder) {
	var prompt1, message1;
	if (lang=="rus") {
		prompt1 ="Введите Новую Ширину Картинки (в пикселях).";
		message1 = "Картинка '";
	}
	if (lang=="eng") {
		prompt1="Enter New Image Width (in pixels).";
		message1 = "Image '";
	}

	var filetype=file.type;
	var _URL = window.URL || window.webkitURL;
	var img = new Image();
	var objectUrl = _URL.createObjectURL(file);
	img.onload = function () {
		var imageWidth=this.width;
		var imageHeight=this.height;
		_URL.revokeObjectURL(objectUrl);

		var newImageWidth = prompt(message1+newFilePath+"/"+filename+"'. "+prompt1, imageWidth);
		if (newImageWidth == null ) return;
		newImageWidth = parseInt(newImageWidth);
		if (newImageWidth == 0) return;

		if ((isJpg==1 || toJpg==0) && imageWidth==newImageWidth) {
			upload4(file, filename, lang, allFiles, i, newFilePath, createFolder);
			return;
		}

		var ratio = newImageWidth / imageWidth;
		var canvas = document.createElement("canvas");
		canvas.width = newImageWidth;
		canvas.height = imageHeight*ratio;
		var ctx = canvas.getContext("2d");
		ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

		var blobtype=filetype;
		if (toJpg==1 || isJpg==1) blobtype='image/jpeg';
		canvas.toBlob(function (blob) {
			var file2 = new File([blob], filename, blob);
			upload4(file2, filename, lang, allFiles, i, newFilePath, createFolder);
		}, blobtype);
	};
	img.src = objectUrl;
}

function upload4(file, filename, lang, allFiles, i, newFilePath, createFolder) {
	var isImage=0;
	if (file.type.substr(0,5)=="image") isImage=1;

	var message1, message2;
	if (lang=="rus") {
		if (isImage==0) message1 = "Фаил '";
		if (isImage==1) message1 = "Картинка '";
		message2 = "' Существует. Заменить ?";
	}
	if (lang=="eng") {
		if (isImage==0) message1 = "File '";
		if (isImage==1) message1 = "Image '";
		message2 = "' Exists. Overwrite ?";
	}

	$.ajax({
		url: "scripts/php/fileExists.php",
		data: {
			q: newFilePath + "/" + filename
		},
		success: function(data) {
			if (data=="0") {
				uploadFile(file, filename, lang, allFiles, i, newFilePath, createFolder);
			} else { 
				var confirm = window.confirm(message1+newFilePath+"/"+filename+message2);
				if (!confirm) return;
				uploadFile(file, filename, lang, allFiles, i, newFilePath, createFolder);
			}
		}
	});
}

function uploadFile(file, filename, lang, allFiles, i, newFilePath, createFolder) {
	var isImage=0;
	if (file.type.substr(0,5)=="image") isImage=1;

	var messageF, message11, message12, message2, message3;
	var summary0, summary1, summary2, summary3, summary41, summary42, summary5, summary6, summary7;
	var textUndefined;

	if (lang=="rus") {
		if (isImage==0) messageF="Фаил";
		if (isImage==1) messageF="Картинка";
		message11="Загруженa Успешно.\nХочешь Просмотреть Картинку?";
		message12="Загружен Успешно.";
		message2 = "Фаил Загружается ";
		message3 = "HTML Редактор";
		summary0="Сводка:";
		summary1="Расположение Файла: ";
		summary2="Фаил: ";
		summary3="Картинка?: ";
		summary41="Да";
		summary42="Нет";
		summary5="Тип: ";
		summary6="Размер: ";
		summary7="Продолжить Загрузку?";
		textUndefined = "Не Определён";
	}
	if (lang=="eng") {
		if (isImage==0) messageF="File";
		if (isImage==1) messageF="Image";
		message11="Uploaded Successfully.\nDo you Want to View Image?";
		message12="Uploaded Successfully.";
		message2 = "File is Uploading ";
		message3 = "HTML Editor";
		summary0="Summary:";
		summary1="File Location: ";
		summary2="File: ";
		summary3="is Image?: ";
		summary41="Yes";
		summary42="No";
		summary5="Type: ";
		summary6="Size: ";
		summary7="Continue Upload?";
		textUndefined = "Undefined";
	}
	
	var fileType = file.type;
	if (fileType == "") fileType = textUndefined;
	var summary=summary0+"\n\n";
	summary=summary+summary1+newFilePath+"/"+"\n";
	summary=summary+summary2+filename+"\n";
	summary=summary+summary3;
	summary=summary + (isImage ? summary41+"\n" : summary42+"\n");
	summary=summary+summary5+fileType+"\n";
	summary=summary+summary6+formatBytes(file.size)+"\n\n";
	summary=summary+summary7;

	var confirm = window.confirm(summary);
	if (!confirm) return;

	$("#caption_div").html("<div id='loadingDiv'>"+message2+"("+formatBytes(file.size)+") .</div>");

	var dataArray = new FormData();
	dataArray.append('file', file, filename);

	$.ajax({
		url: "scripts/php/upload.php?path=" + encodeURIComponent(newFilePath) + "&createFolder=" + encodeURIComponent(createFolder),
		type: "POST",
		data: dataArray,
		processData: false,
		contentType: false,
		success: function(data) {
			$("#caption_div").html(message3);
			if (data=="not logged in") {processSearchAndReplace(lang); return;}
			if (data=="1") {
				if (isImage) {
					var confirm = window.confirm(messageF+" '"+newFilePath+"/"+filename+"' "+message11);
					if (confirm) window.open(newFilePath+"/"+filename, '_blank').focus();
				} else {
					alert(messageF+" '"+newFilePath+"/"+filename+"' "+message12);
				}
				upload2(lang, allFiles, i+1, newFilePath, createFolder);
			} else {
				alert(data);
				return;
			}
		}
	});
}

function del(lang, totalFiles) {
	var message1="";
	var message2="";
	var message3="";

	if (lang=="rus") {
		message1="Действительно Удалить";
		message2="Фаил Удалён Успешно.";
		message3="Фаил не Найден.";
	}
	if (lang=="eng") {
		message1="Really Delete";
		message2="File Deleted Successfully.";
		message3="File not Found.";
	}

	var filename=document.getElementById("fileName").getAttribute("href");
	var confirm = window.confirm(message1+" "+filename+"?");
	if (!confirm) return;

	$.ajax({
		url: "scripts/php/delete.php",
		data: {
			filename: filename
		},
		success: function(data) {
			if (data=="not logged in") {processSearchAndReplace(lang); return;};
			if (data=="1") {
				alert(message2);
				var i =(parseInt(getParameterByName('i'))||0);
				if (i!=0 && i==(totalFiles-1)) i--;
				textAreaChanged=0;
				window.location.href='html_editor_'+lang+'.html?pattern='+ encodeURIComponent(getParameterByName('pattern'))+'&i='+ encodeURIComponent(i);
				return;
			} else {
				alert(message3);
			}
		}
	});
}

function logout(lang) {
	$.ajax({
		url: "scripts/php/logOut.php",
		success: function(data) {
			window.location.href='html_editor_'+lang+'.html?pattern='+ encodeURIComponent(getParameterByName('pattern'))+'&i='+ (parseInt(getParameterByName('i'))||0);
			return;
		}
	});
}

function searchPattern(lang) {
	var pattern=document.getElementById('search_pattern').value;
	if (pattern.length>0 && pattern.substring(pattern.length-1)=="/") pattern=pattern+"*";
	pattern=encodeURIComponent(pattern);
	window.location.href='html_editor_'+lang+'.html?pattern='+pattern+'&i=0';
	return;
}

function showInformation(lang) {
	$.ajax({
		url: "scripts/processSearchAndReplace.js",
		success: function(data, textStatus, jqXHR) {
			modStr = jqXHR.getResponseHeader('Last-Modified');
			var infoText;
			if (lang=='rus') infoText="HTML Редактор Версия 1.0. Создано - 22е Янв, 2018, Последнее Изменение - ";
			if (lang=='eng') infoText="HTML Editor Version 1.0. Created At - 22nd of Jan, 2018, Last Modification - ";
			alert(infoText+formatDate(modStr, lang)+".");
		}
	});
}

function processSearch(lang) {
	$("#search_col1").show();
	$("#search_col2").show();
	$("#search_col3").show();
	$("#search_col4").show();

	var message1,message2,message3,textFiles,textOf;
	if (lang=="rus") {
		message1="Устанавливается TextArea.";
		message2="Читаются Файлы, Соответствующие Критерию ";
		message3="Группируются Найденные Файлы, в Соответствии с Их Первой Буквой и Печатаются Созданные Группы.";
		textFiles="Файлы :&nbsp;";
		textOf="&nbsp;из&nbsp;";
	}
	if (lang=="eng") {
		message1="Setting TextArea.";
		message2="Reading Files, Matching Pattern ";
		message3="Grouping Found Files, According to Their First Letter and Printing Created Groups.";
		textFiles="Files :&nbsp;";
		textOf="&nbsp;of&nbsp;";
	}

	$("#error_message").text(message1);

	var textArea=document.getElementById("textarea_area");
	textArea.onkeydown = function(e){
		if(e.keyCode==9 || e.which==9){
			e.preventDefault();
			var s = this.selectionStart;
			this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
			this.selectionStart = this.selectionEnd = s + 1;
			setTextAreaChanged(lang);
		}
		setLineAndColumnNumber(lang);
	}

	textArea.onkeyup = function(e){
		setLineAndColumnNumber(lang);
	}
	textArea.onpointerup = function(e){
		setLineAndColumnNumber(lang);
	}
	textArea.addEventListener('input', () => {setTextAreaChanged(lang);}, { passive: true });

	var searchPatt=getParameterByName('pattern'); 
	$("#error_message").text(message2+"'"+searchPatt+"'.");

	if (searchPatt && searchPatt!="") {
		document.getElementById('search_pattern').value=searchPatt;
		var err1;
		if (lang=="rus") {
			err1="Не Найдено Файлов, Соответствующих Критерию Поиска - '" + searchPatt + "'.";
		}
		if (lang=="eng") {
			err1="No Files, Matching Criteria '" + searchPatt + "', Found.";
		}

		var i=(parseInt(getParameterByName('i'))||0);
		if (i!=null) {
			$.ajax({
				url: "scripts/php/dir.php",
				data: {
					q: searchPatt,
					fileToShow: parseInt(getParameterByName('i')) || 0
				},
				success: function(data) {
					var dir = JSON.parse(data);
					if (dir.length>0) {
						if (i<0 || i>=dir.length) {
							window.location.href='html_editor_'+lang+'.html?pattern='+ encodeURIComponent(searchPatt)+'&i=0';
							return;
						}
						if (dir[i]!="") {
							$("#error_message").text(message3);

							var alphabetFilesCount = {};
							var alphabetFilesHighlightedLetter;
							var highlightedFilesCount=1;
							var prevLetterShown="";
							var filesContAlphabetDiv=document.getElementById("files_cont_alphabet_div");
							var filesContDiv=document.getElementById("files_cont_div");
							var j, firstLetter, a;

							for (j=0; j<dir.length; j++) {
								firstLetter = dir[j]['basename'].charAt(0);
								if (typeof alphabetFilesCount[firstLetter]==="undefined") {
									alphabetFilesCount[firstLetter]=1;
								} else {
									alphabetFilesCount[firstLetter]++;
								}
								if (j==i) {
									alphabetFilesHighlightedLetter=firstLetter;
								}
							}
							for (j=0; j<dir.length; j++) {
								firstLetter = dir[j]['basename'].charAt(0);
								if (prevLetterShown=="" || firstLetter!=prevLetterShown) {
									a=document.createElement('a');
									a.setAttribute("href", "html_editor_"+lang+".html?pattern="+encodeURIComponent(getParameterByName('pattern'))+"&i="+j);
									if (firstLetter==alphabetFilesHighlightedLetter) {
										a.setAttribute("class", "standardb_red");
									} else {
										a.setAttribute("class", "standardb_blue");
									}
									a.setAttribute("title", textFiles+alphabetFilesCount[firstLetter]+textOf+dir.length);
									if (prevLetterShown!="") a.setAttribute("style", "margin-left:10px;");
									prevLetterShown=firstLetter;
									a.innerHTML=firstLetter;
									filesContAlphabetDiv.appendChild(a);
									if (measureWidth(filesContAlphabetDiv.innerHTML)>700) {
										filesContAlphabetDiv.removeChild(filesContAlphabetDiv.lastChild);
										filesContAlphabetDiv.innerHTML=filesContAlphabetDiv.innerHTML+"<br>";
										a.setAttribute("style", "");
										filesContAlphabetDiv.appendChild(a);
									}
								}
								if (firstLetter==alphabetFilesHighlightedLetter) {
									a=document.createElement('a');
									a.setAttribute("href", "html_editor_"+lang+".html?pattern="+encodeURIComponent(getParameterByName('pattern'))+"&i="+j);
									if (j==i) {
										a.setAttribute("class", "standardb_red");
									} else {
										a.setAttribute("class", "standardb_blue");
									}
									a.setAttribute("title", dir[j]['correctDir']+dir[j]['basename'].replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;"));
									if (highlightedFilesCount>1) a.setAttribute("style", "margin-left:10px;");
									a.innerHTML="&bull;";
									if (highlightedFilesCount%10==0) a.innerHTML="&#11044;";

									filesContDiv.appendChild(a);
									if (measureWidth(filesContDiv.innerHTML)>700) {
										filesContDiv.removeChild(filesContDiv.lastChild);
										filesContDiv.innerHTML=filesContDiv.innerHTML+"<br>";
										a.setAttribute("style", "");
										filesContDiv.appendChild(a);
									}
									highlightedFilesCount++;
								}
							}

							if (!dir[i]['encoding'] || typeof dir[i]['encoding']==='undefined') dir[i]['encoding']="Windows-1252"; 
							loadAndShowFile(lang, dir[i]['correctDir']+dir[i]['basename'], dir[i]['modified'], dir[i]['encoding'], dir[i]['first10bytes'], dir.length);

						} else {
							$("#error_message").text("");
							$("#error_message_row").hide();
							$("#error_message_with_logout").text(err1);
							$("#error_message_with_logout_row").show();
							return false;
						}
					} else {
						$("#error_message").text("");
						$("#error_message_row").hide();
						$("#error_message_with_logout").text(err1);
						$("#error_message_with_logout_row").show();
						return false;
					}
				}
			});
		} else {
			window.location.href='html_editor_'+lang+'.html?pattern='+ encodeURIComponent(searchPatt)+'&i=0';
			return;
		}
	} else {
		window.location.href='html_editor_'+lang+'.html?pattern='+ encodeURIComponent('*.html')+'&i=0';
		return;
	}
}


function measureWidth(contents) {
	const temp = document.createElement('div');
	temp.style.position = 'absolute';
	temp.style.visibility = 'hidden';
	temp.style.left = '-9999px';
	temp.style.top = '-9999px';

	temp.innerHTML = contents;
	document.body.appendChild(temp);
	const contentWidth = temp.scrollWidth;  // или offsetWidth
	temp.remove();
	return contentWidth;
}

function loadAndShowFile(lang, filename, modified, encoding, first10bytes, totalFiles){
	var message1;
	if (lang=="rus") {
		message1="Читается Фаил ";
	}
	if (lang=="eng") {
		message1="Reading File ";
	}
	$("#error_message").text(message1+"'"+filename+"'.");

	$.ajax({
		url: "scripts/php/getFileContents.php",
		data: {
			filename: filename
		},
		success: function(data) {
			if (data=="not logged in") {processSearchAndReplace(lang); return;};
			if (data.substring(0,20)=="Unable to open file!") {
				alert(data);
			}
			var lines=data;    
			var textarea=document.getElementById("textarea_area");
			textarea.value=lines;
			document.getElementById("fileName").innerHTML=filename;
			document.getElementById("fileName").href=filename;
			document.getElementById("dateModified_lbl").innerHTML=formatDate(modified*1000, lang);
			document.getElementById("encoding_lbl").innerHTML=encoding;
			$("#error_message_row").hide();
			$("#error_message_with_logout_row").hide();
			$("#search_col1").show();
			$("#search_col2").show();
			$("#search_col3").show();
			$("#search_col4").show();
			$("#information_row").show();
			$("#line_column_number_row").show();
			$("#files_count_row").show();
			$("#files_count_alphabet_row").show();
			$("#textarea_row").show();
			$("#butt_row").show();
			adjustTextarea();
			setLinksValues(lang, encoding, totalFiles);
			setBOM(first10bytes);
			textarea.focus();
			textarea.scrollTop=0;
			textarea.scrollLeft = 0;
			textarea.setSelectionRange(0, 0);
			setLineAndColumnNumber(lang);
		}
	});
}

function setLinksValues(lang, encoding, totalFiles) {
	document.getElementById("save_link").setAttribute("href", "javascript:save('"+lang+"' ,'"+encoding+"');");
	document.getElementById("save_as_link").setAttribute("href", "javascript:saveas('"+lang+"' ,'"+encoding+"');");
	document.getElementById("download_link").setAttribute("href", "javascript:download('"+lang+"' ,'"+encoding+"');");
	document.getElementById("upload_link").setAttribute("href", "javascript:upload('"+lang+"');");
	document.getElementById("delete_link").setAttribute("href", "javascript:del('"+lang+"',"+totalFiles+");");
}

function setLineAndColumnNumber(lang) {
	var textarea = document.getElementById("textarea_area");
	var textLines = textarea.value.substr(0, textarea.selectionStart).split("\n");
	document.getElementById("line_number_div").innerHTML= textLines.length;
	document.getElementById("column_number_div").innerHTML=textLines[textLines.length-1].length+1;
}

function detectBom(bytes) {
	var c;
	for (c = 0; c < bytes.length; c++ ) {
		if (c==5) return null;
		var bytesDetected=detectBomCheckSoFar(bytes.slice(c,c+5));
		if (bytesDetected>0) return bytes.slice(c,c+bytesDetected).concat(detectBom(bytes.slice(bytesDetected)));
	}
	return null;
}

function logAllBOMs(dir) {
	var i;
	for (i=0; i<dir.length; i++) {
		console.log(i+" BOM = "+detectBom(dir[i]['first10bytes']));
	}
}

function setBOM(first10bytes) {

	var i=0;
	var bomDetected=detectBom(first10bytes);

	if (bomDetected) {
		bomDetected.pop();
		var bomDiv=document.getElementById("bom_div");
		bomDiv.innerHTML="";
		for (i=0; i<bomDetected.length; i++) {
			bomDiv.innerHTML=bomDiv.innerHTML+bomDetected[i]+"&nbsp;";
		}
	}

	var bomDiv2=document.getElementById("bom_div2");
	bomDiv2.innerHTML="";
	var j;
	for (j=i; j<first10bytes.length; j++) {
		if (j==i) {
			bomDiv2.innerHTML=bomDiv2.innerHTML+first10bytes[j];
		} else {
			bomDiv2.innerHTML=bomDiv2.innerHTML+"&nbsp;"+first10bytes[j];
		}
	}
}

function setTextAreaChanged(lang, isChanged = 1) {

	var changedDiv=document.getElementById("textarea_changed_div");
	if (isChanged==1) {
		textAreaChanged=1;
		if (lang=='rus') changedDiv.title="Фаил Редактирован";
		if (lang=='eng' || lang=='lat') changedDiv.title="File Edited";
		changedDiv.innerHTML="&#9997;";
	} else {
		textAreaChanged=0;
		if (lang=='rus') changedDiv.title="Фаил Не Редактирован";
		if (lang=='eng' || lang=='lat') changedDiv.title="File Not Edited";
		changedDiv.innerHTML="&#9989;";
	}
}

function getLocalStorageData(par) {
	if (typeof localStorage[par]==="undefined") {
		return {};
	} else {
		return JSON.parse(localStorage[par]);
	}
}

function processSearchAndReplace(lang) {
	var prompt1, err1, err2, message1;
	if (lang=="rus") {
		prompt1="Введите Имя Пользователя";
		err1="Ввод Данных Отменён.";
		err2="Неверное Имя Пользователя.";
		message1="Авторизация.";
	}
	if (lang=="eng") {
		prompt1="Enter Your Username";
		err1="Data Input Cancelled.";
		err2="Incorrect Username.";
		message1="Authorization.";
	}

	$("#search_col1").hide();
	$("#search_col2").hide();
	$("#search_col3").hide();
	$("#search_col4").hide();
	$("#information_row").hide();
	$("#line_column_number_row").hide();
	$("#files_count_row").hide();
	$("#files_count_alphabet_row").hide();
	$("#textarea_row").hide();
	$("#butt_row").hide();
	$("#error_message_with_logout_row").hide();
	$("#error_message").text(message1);
	$("#error_message_row").show();

	if (isMobile()) {
		if (lang=="eng" || lang=="lat") {
			$("#error_message").text("HTML Editor is not Supported for Mobile Devices.");
		}
		if (lang=="rus") {
			$("#error_message").text("HTML Редактор не Поддерживается на Мобильных Устройствах.");
		}
		checkMenu6(lang);
		return; 
	}

	processPageResize(1, 0, lang);

	$.ajax({
		url: "scripts/php/checkLogIn.php",
		success: function(data) {
			if (data.substring(0, 2) == "<?") {
				if (lang=="eng" || lang=="lat") {
					$("#error_message").text("PHP is not Supported at "+window.location.hostname+", HTML Editor is not Functioning.");
				}
				if (lang=="rus") {
					$("#error_message").text("PHP не Поддерживается в "+window.location.hostname+", HTML Редактор не Функционирует.");
				}
				return;
			};
			if (data=="0"){
				var locStPar="HTML_editor";
				var HTMLEditorData=getLocalStorageData(locStPar);
				var username1="";
				if (typeof HTMLEditorData["username"]!== "undefined") username1=HTMLEditorData["username"];
				var username = prompt(prompt1, username1);

				if (username != null) {
					HTMLEditorData["username"]=username;
					localStorage[locStPar]=JSON.stringify(HTMLEditorData);
				}

				if (username == null || username=="") {
					$("#search_col1").hide();
					$("#search_col2").hide();
					$("#search_col3").hide();
					$("#search_col4").hide();
					$("#information_row").hide();
					$("#line_column_number_row").hide();
					$("#files_count_row").hide();
					$("#files_count_alphabet_row").hide();
					$("#textarea_row").hide();
					$("#butt_row").hide();
					$("#error_message_with_logout_row").hide();
					$("#error_message").text(err1);
					$("#error_message_row").show();
					return false;
				}
				
				$.ajax({
					url: "scripts/php/checkUsernamePassword.php",
					data: {
						username: username,
						date: formatDate()
					},
					success: function(data) {
						if (JSON.parse(data)=="0"){
							$("#search_col1").hide();
							$("#search_col2").hide();
							$("#search_col3").hide();
							$("#search_col4").hide();
							$("#information_row").hide();
							$("#line_column_number_row").hide();
							$("#files_count_row").hide();
							$("#files_count_alphabet_row").hide();
							$("#textarea_row").hide();
							$("#butt_row").hide();
							$("#error_message_with_logout_row").hide();
							$("#error_message").text(err2);
							$("#error_message_row").show();
							return false;
						}
						processSearch(lang);
					}
				});
			} else {
				processSearch(lang);
			}
		}
	});
}

function adjustTextarea() {
	var rowsHeight=document.getElementById('information_row').offsetHeight;
	rowsHeight+=document.getElementById('line_column_number_row').offsetHeight;
	rowsHeight+=document.getElementById('files_count_alphabet_row').offsetHeight;
	rowsHeight+=document.getElementById('files_count_row').offsetHeight;
	rowsHeight+=document.getElementById('butt_row').offsetHeight;

	$( "#textarea_area" ).css( "height", (menuHeight-rowsHeight-19) + "px");
}
