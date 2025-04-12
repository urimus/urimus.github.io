var selEncodingPixelPosInEncodings;
var textAreaChanged=0;

window.onbeforeunload = function () {
	if (textAreaChanged==1) {
		return "You have attempted to leave this page.  If you have made any changes to the fields without clicking the Save button, your changes will be lost.  Are you sure you want to exit this page?";
	}
}

function getLineNumberAndColumnIndex(){
	textarea=document.getElementById("textarea_area");
	var textLines = textarea.value.substr(0, textarea.selectionStart).split("\n");
	var currentLineNumber = textLines.length;
	var currentColumnIndex = textLines[textLines.length-1].length;
	return {
		"lineNumber": currentLineNumber,
		"columnIndex ": currentColumnIndex 
	};
  }


function getTextSep(data, sep, indexL) {
	if (typeof indexL==='undefined') indexL = 0; // default
//_\.,\"'#/-\+\*!?:;={\[(|
//^(.*?)abc
    var regex = new RegExp("^(.*?)"+sep),
        results = regex.exec(data);
    if (!results) return null;
    if (!results[indexL]) return '';
	var prevResults;
	while (results != null) {
		prevResults=results;
		var regex = new RegExp("^(.*?)"+sep),
			results = regex.exec(prevResults[1]);
	}
    if (indexL==1)  return prevResults[1];
    if (indexL==0)  return prevResults[0].substring(0, prevResults[0].length - 1);
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

	if (lang=="eng") {
		message1 = "Use Script? (Cancel=No)'";
	}
	if (lang=="rus") {
		message1 = "Использовать Скрипт? (Отмена=Нет)";
	}

	confirm2=window.confirm(message1);
	if (confirm2) {
		replaceScript(lang);
	} else {
		replacePHP(lang, action);
	}
}

function replaceScript(lang) {

	if (lang=='rus') {
		message1="Фаил Изменён Скриптом, Строки # ";
		message2="Фаил НЕ Изменён Скриптом, НЕТ Соответствий.";
	}
	if (lang=='eng') {
		message1="File Modified by Script, Lines # ";
		message2="File NOT Modified by Script, NO Matches.";
	}


	lines=document.getElementById("textarea_area").value;

////////////////////////////////// Script /////////////////////////
	var fileContents = lines.split('\n'); 
	statisticTimesReplaced=0;
	statisticLinesReplaced="";
	for (var j = 0; j < fileContents.length; j++) { 
		line=fileContents[j];
		searchPos=line.indexOf('data-description="');
		if (searchPos==-1) continue;
		searchPosQ1=line.indexOf('"', searchPos+1);
		searchPosQ2=line.indexOf('"', searchPosQ1+1);
		// if title exists skip
		searchPosDT=line.substr(0, searchPos).indexOf('data-title');
		if (searchPosDT!=-1) continue;

		searchPosD=line.indexOf('.', searchPosQ1+1);
		searchPosA=line.indexOf('<a', searchPosQ1+1);
		if (searchPosD==-1) continue;
		if (searchPosA<searchPosD) continue;

		titleText=line.substr(searchPosQ1+1, searchPosD-searchPosQ1-1).trim();
		fileContents[j]=line.substr(0, searchPos)+"data-title=\""+titleText+"\" data-description=\""+line.substr(searchPosD+2);
		statisticTimesReplaced++;
		statisticLinesReplaced=statisticLinesReplaced+", "+j;
	}
	lines2=fileContents.join('\n');
////////////////////////////////// End of Script /////////////////////////

	document.getElementById("textarea_area").value=lines2;
	if (statisticTimesReplaced>0) {
		setTextAreaChanged(lang, 1);
		setTimeout(function() { alert(message1+statisticLinesReplaced.substr(2)); }, 50); // timeout to ensure changes applied
	} else {
		setTimeout(function() { alert(message2); }, 50); // timeout to ensure changes applied
	}

}


function replacePHP(lang, action) {

	if (typeof action==='undefined') action = 'replace'; // default

// ---------------- Replace ----------------- //
	if (action.localeCompare("replace")==0) {
		if (lang.localeCompare("eng")==0) {
			message1 = "Really Replace '";
			message2 = "' to '";
			message3 = "' in all Documents, Matching Pattern '";
			message4 = "Please Define WHAT to Replace.";
			message5 = "Please Define WHAT TO to Replace.";
		}
		if (lang.localeCompare("rus")==0) {
			message1 = "Действительно Заменить '";
			message2 = "' на '";
			message3 = "' во Всех Документах, Соответствующих Критерию '";
			message4 = "Пожалуйста Определите ЧТО Заменить.";
			message5 = "Пожалуйста Определите НА ЧТО Заменить.";
		}
	}
// ---------------- End of Replace ----------------- //

// ---------------- Add or Remove Menu ----------------- //
	if (action.localeCompare("addMenu")==0 || action.localeCompare("removeMenu")==0) {
		if (lang.localeCompare("eng")==0) {
			message1 = "Really ";
			if (action.localeCompare("addMenu")==0) {
				message2 = "Add ";
			}
			if (action.localeCompare("removeMenu")==0) {
				message2 = "Remove ";
			}
			message3 = "Menu Height ";
			message4 = "in all Documents, Matching Pattern '";
		}
		if (lang.localeCompare("rus")==0) {
			message1 = "Действительно ";
			if (action.localeCompare("addMenu")==0) {
				message2 = "Добавить ";
			}
			if (action.localeCompare("removeMenu")==0) {
				message2 = "Убавить ";
			}
			message3 = "Высоту Меню ";
			message4 = "во Всех Документах, Соответстующих Критерию '";
		}
	}
// ---------------- End of Add or Remove Menu ----------------- //

	var replaceWhat="";
	var replaceTo="";

// ---------------- Replace ----------------- //
	if (action.localeCompare("replace")==0) {
		// -------------- Selected Text ------------- //
		if (replaceWhat.localeCompare("") == 0) {
			if (document.selection != undefined)  { // IE version
				document.getElementById('textarea_area').focus();
				replaceWhat = document.selection.createRange().text;
				replaceTo=replaceWhat;
			} else if (document.getElementById('textarea_area').selectionStart != undefined) { // Mozilla version
				document.getElementById('textarea_area').focus();
				var startPos = document.getElementById('textarea_area').selectionStart;
				var endPos = document.getElementById('textarea_area').selectionEnd;
				replaceWhat = document.getElementById('textarea_area').value.substring(startPos, endPos);


				lines=replaceWhat.split(String.fromCharCode(10));
				replaceWhat=lines.join('\\n');
				lines=replaceWhat.split(String.fromCharCode(9));
				replaceWhat=lines.join('\\t');

				replaceTo=replaceWhat;
			}
		}
		// -------------- End If Selected Text ------------- //

		replaceWhat = prompt(message4, replaceWhat);
		if (replaceWhat == null ) {return;}
		if (replaceWhat.localeCompare("")==0) {alert(message4); return;}
		replaceTo = prompt(message5, replaceTo);
		if (replaceTo == null ) {return;}


		if (document.getElementById('textarea_area').selectionStart != undefined) { // Mozilla version
			lines=replaceWhat.split('\\n');
			replaceWhat=lines.join(String.fromCharCode(10));
			lines=replaceWhat.split('\\t');
 			replaceWhat=lines.join(String.fromCharCode(9));

			lines=replaceTo.split('\\n');
			replaceTo=lines.join(String.fromCharCode(10));
			lines=replaceTo.split('\\t');
 			replaceTo=lines.join(String.fromCharCode(9));
		}

		var confirm = window.confirm(message1+replaceWhat+message2+replaceTo+message3+getParameterByName('pattern')+"' ?");
		if (!confirm) return;


	}
// ---------------- End of Replace ----------------- //

// ---------------- Add or Remove Menu ----------------- //
	if (action.localeCompare("addMenu")==0 || action.localeCompare("removeMenu")==0) {
		var confirm = window.confirm(message1+message2+message3+message4+getParameterByName('pattern')+"' ?");
		if (!confirm) return;
	}
// ---------------- End of Add or Remove Menu ----------------- //

	$("#replace_div").hide();
	$("#addMenu_div").hide();
	$("#removeMenu_div").hide();
	$("#resizeFolderImages_div").hide();
	$("#resizeImage_div").hide();





	/////////////// Process Replace //////////////////

	searchPatt=getParameterByName('pattern'); 

	if (searchPatt && searchPatt!="") {

		if (window.XMLHttpRequest) {
			// code for IE7+, Firefox, Chrome, Opera, Safari
			xhr=new XMLHttpRequest();
		} else {  // code for IE6, IE5
			xhr=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xhr.onreadystatechange = function(){
			if (this.readyState==4 && this.status==200) {
				//console.log(this.responseText);
				dir = JSON.parse(removeBom(this.responseText));
				if (dir.length>0) {
					processReplacePHP(lang, action, dir, 0, replaceWhat, replaceTo, 0, 0);
				} else {
					return false;
				}
			}
		};
		xhr.open("GET","scripts/php/dir.php?q="+encodeURIComponent(searchPatt)+"&fileToShow="+(parseInt(getParameterByName('i'))||0),true);
		xhr.send();
	} else {
		//window.location.href='html_editor_'+lang+'.html?pattern='+ encodeURIComponent('*.html')+'&i=0';
		//return;
	}

	
}


function processReplacePHP(lang, action, dir, i, replaceWhat, replaceTo, statisticsTimesReplaced, statisticsFilesProcessed) {

	statisticsTimesReplaced_o=statisticsTimesReplaced;

	if (lang.localeCompare("eng")==0) {
		message1 = "How-To &blacktriangleright; HTML Editor";
		message2 = "Progress: ";
		message3 = "Files Replaced Successfully.";
		message4 = "File Replaced Successfully.";
		message5 = "Statistics: ";
		message6 = " Replacements Were Made in ";
		message7 = " Files of ";
		message8 = " File of ";
		message9 = "Do you Want to View Log File?";
	}
	if (lang.localeCompare("rus")==0) {
		message1 = "How-To &blacktriangleright; HTML Редактор";
		message2 = "Прогресс: ";
		message3 = "Файлы Заменены Успешно.";
		message4 = "Фаил Заменен Успешно.";
		message5 = "Статистика: ";
		message6 = " Замен сделано в ";
		message7 = " Файлах из ";
		message8 = " Файле из ";
		message9 = "Хочешь Просмотреть Log Фаил?";
	}

	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xhr=new XMLHttpRequest();
	} else {  // code for IE6, IE5
		xhr=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhr.onreadystatechange = function(){
		if (this.readyState==4 && this.status==200) {
			if (removeBom(this.responseText)=="not logged in") {processSearchAndReplace(lang); return;};
			document.getElementById("caption_div").innerHTML=message2 + (i+1) + "/" + dir.length;

			if (removeBom(this.responseText).substring(0,20).localeCompare('Unable to open file!')==0) {
				alert(removeBom(this.responseText));
			} else {
				ret= JSON.parse(removeBom(this.responseText));
				statisticsTimesReplaced=ret['statisticsTimesReplaced'];
				modified=ret['modified'];
				if (statisticsTimesReplaced>0) statisticsFilesProcessed++;
				statisticsTimesReplaced=statisticsTimesReplaced_o+statisticsTimesReplaced;

				if (document.getElementById("fileName").getAttribute("href").localeCompare(dir[i]['correctDir']+dir[i]['basename'])==0) {
					document.getElementById("dateModified_lbl").innerHTML=formatDate(removeBom(modified)*1000, lang);
					setBOM(ret["first10bytes"]);
					setTextAreaChanged(lang, 0);

					if (window.XMLHttpRequest) {
						// code for IE7+, Firefox, Chrome, Opera, Safari
						xhrMod=new XMLHttpRequest();
					} else {  // code for IE6, IE5
						xhrMod=new ActiveXObject("Microsoft.XMLHTTP");
					}
					xhrMod.onreadystatechange = function(){
						if (this.readyState==4 && this.status==200) {
							if (removeBom(this.responseText)=="not logged in") {processSearchAndReplace(lang); return;};
							lines = this.responseText;    //*here we get all lines from text file*
							document.getElementById("textarea_area").value=lines;
						}
					}
					xhrMod.open("GET","scripts/php/getFileContents.php?filename="+encodeURIComponent(document.getElementById("fileName").getAttribute("href")),true);
					xhrMod.send();
				}
			}
			if ((i+1)==dir.length) {
				document.getElementById("caption_div").innerHTML=message1;
				if ( dir.length!=1) { fullMessage=message3; } else {  fullMessage=message4; }
				fullMessage=fullMessage+"\n"+message5+statisticsTimesReplaced+message6+statisticsFilesProcessed;
				if (statisticsFilesProcessed!=1) { fullMessage=fullMessage+message7; } else {  fullMessage=fullMessage+message8; }
				fullMessage=fullMessage+ dir.length+".";
				fullMessage=fullMessage+"\n"+ message9;
				$("#replace_div").show();
				$("#addMenu_div").show();
				$("#removeMenu_div").show();
				$("#resizeFolderImages_div").show();
				$("#resizeImage_div").show();
				setTimeout(function() { 
					var confirm = window.confirm(fullMessage);
					if (confirm) { // some delay to ensure changes applied
						if (action.localeCompare("replace")==0) {
							window.open('html_editor_'+lang+'.html?pattern=scripts/logs/replace.log'+'&i=0');
						}
						if (action.localeCompare("addMenu")==0) {
							window.open('html_editor_'+lang+'.html?pattern=scripts/logs/addMenu.log'+'&i=0');
						}
						if (action.localeCompare("removeMenu")==0) {
							window.open('html_editor_'+lang+'.html?pattern=scripts/logs/removeMenu.log'+'&i=0');
						}
						return;
					}
				 }, 50); 
			} else {
				i++;
				processReplacePHP(lang, action, dir, i, replaceWhat, replaceTo, statisticsTimesReplaced, statisticsFilesProcessed);
			}
		}
	};
	if (action.localeCompare("replace")==0) {
		xhr.open("GET","scripts/php/processReplace.php?filename="+encodeURIComponent(dir[i]['correctDir']+dir[i]['basename'])+"&replaceWhat="+encodeURIComponent(replaceWhat)+"&replaceTo="+encodeURIComponent(replaceTo)+"&fileNum="+i+"&filesProcessed="+statisticsFilesProcessed,true);
	}
	if (action.localeCompare("addMenu")==0 || action.localeCompare("removeMenu")==0) {
		xhr.open("GET","scripts/php/processAddRemoveMenu.php?filename="+encodeURIComponent(dir[i]['correctDir']+dir[i]['basename'])+"&action="+encodeURIComponent(action)+"&fileNum="+i,true);
	}
	xhr.send();
}






function resizeImage(lang) {



	if (lang.localeCompare('rus')==0) {
		prompt1="Введите Название Картинки на Сервере.";
		prompt2="Введите Новую Ширину Картинки (в пикселях).";
	}
	if (lang.localeCompare('eng')==0) {
		prompt1="Enter Image Name on Server.";
		prompt2="Enter New Image Width (in pixels).";
	}


	newFilePath = prompt(prompt1, "images/icons/movies/");
	if (newFilePath == null ) {return;}



	img = new Image();
        img.onload = function () {

		imageWidth=this.width;

		newImageWidth = prompt(prompt2, imageWidth);
		if (newImageWidth == null ) {return;}

		dir=[];
		dir[0]=[];
		dir[0]['basename']=newFilePath;
		prResizeImage(lang, dir, "", newImageWidth, 0, 0);

        };
        img.src = newFilePath;


}





function resizeImages(lang) {



	if (lang.localeCompare('rus')==0) {
		prompt1="Введите Расположение Картинок на Сервере.";
		prompt2="Введите Новую Ширину Картинок (в пикселях).";
	}
	if (lang.localeCompare('eng')==0) {
		prompt1="Enter Images Location on Server.";
		prompt2="Enter New Images Width (in pixels).";
	}

	if (lang.localeCompare("eng")==0) {
		message1 = "Really Resize to Width=";
		message2 = "px all Images in '";
	}
	if (lang.localeCompare("rus")==0) {
		message1 = "Действительно Преобразовать в Width=";
		message2 = "px все Картинки в '";
	}

	newFilePath = prompt(prompt1, "images/icons/movies");
	if (newFilePath == null ) {return;}
	if (newFilePath.substring(newFilePath.length - 1, newFilePath.length)!="/") newFilePath=newFilePath+"/";
	filePath=newFilePath;
	newFilePath = newFilePath +"*";


	newImageWidth = prompt(prompt2, "350");
	if (newImageWidth == null ) {return;}


	var confirm = window.confirm(message1+newImageWidth+message2+newFilePath+"' ?");
	if (!confirm) return;


	$("#replace_div").hide();
	$("#addMenu_div").hide();
	$("#removeMenu_div").hide();
	$("#resizeFolderImages_div").hide();
	$("#resizeImage_div").hide();

	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xhr=new XMLHttpRequest();
	} else {  // code for IE6, IE5
		xhr=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhr.onreadystatechange = function(){
		if (this.readyState==4 && this.status==200) {
			//console.log(this.responseText);
			dir = JSON.parse(removeBom(this.responseText));
			if (dir.length>0) {
				prResizeImage(lang, dir, filePath, newImageWidth, 0, 0);
			} else {
				return false;
			}
		}
	};
	xhr.open("GET","scripts/php/dir.php?q="+encodeURIComponent(newFilePath),true);
	xhr.send();

}






function prResizeImage(lang, dir, filePath, fileWidth, i, statisticsFilesProcessed) {


	if (lang.localeCompare("eng")==0) {
		message1 = "How-To &blacktriangleright; HTML Editor";
		message2 = "Progress: ";
		message3 = "Files Resized Successfully.";
		message4 = "File Resized Successfully.";
		message5 = "Statistics: ";
		message6 = "Resizes Were Made in ";
		message7 = " Files of ";
		message8 = " File of ";
		message9 = "Do you Want to View Log File?";
		message10 = "Do you Want to View Resized Image?";
	}
	if (lang.localeCompare("rus")==0) {
		message1 = "How-To &blacktriangleright; HTML Редактор";
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

	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xhr=new XMLHttpRequest();
	} else {  // code for IE6, IE5
		xhr=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhr.onreadystatechange = function(){
		if (this.readyState==4 && this.status==200) {
			if (removeBom(this.responseText)=="not logged in") {processSearchAndReplace(lang); return;};

			document.getElementById("caption_div").innerHTML=message2 + (i+1) + "/" + dir.length;

			if (removeBom(this.responseText).substring(0,20).localeCompare('Unable to open file!')==0) {
				alert(removeBom(this.responseText));
			} else {

				ret= removeBom(this.responseText);
				if (ret>0) statisticsFilesProcessed++;
			}
			if ((i+1)==dir.length) {
				document.getElementById("caption_div").innerHTML=message1;
				if ( dir.length!=1) { fullMessage=message3; } else {  fullMessage=message4; }
				fullMessage=fullMessage+"\n"+message5+message6+statisticsFilesProcessed;
				if (statisticsFilesProcessed!=1) { fullMessage=fullMessage+message7; } else {  fullMessage=fullMessage+message8; }
				fullMessage=fullMessage+ dir.length+".";
				if (dir.length==1 && statisticsFilesProcessed==1) {
					fullMessage=fullMessage+"\n"+ message10;
				} else {
					fullMessage=fullMessage+"\n"+ message9;
				}
				$("#replace_div").show();
				$("#addMenu_div").show();
				$("#removeMenu_div").show();
				$("#resizeFolderImages_div").show();
				$("#resizeImage_div").show();

				var confirm = window.confirm(fullMessage);
				if (confirm) {
					if (dir.length==1 && statisticsFilesProcessed==1) {
						window.open(filePath+dir[i]['basename'], '_blank').focus();
					} else {
						window.open('html_editor_'+lang+'.html?pattern=scripts/logs/resize.log'+'&i=0');
					}
					return;
				}
			} else {
				i++;
				prResizeImage(lang, dir, filePath, fileWidth, i, statisticsFilesProcessed);
			}
		}
	};
	xhr.open("GET","scripts/php/resize.php?filename="+encodeURIComponent(filePath+dir[i]['basename'])+"&fileNum="+i+"&width="+encodeURIComponent(fileWidth),true);
	xhr.send();
}




function correctEncoding(encoding) {
	if (encoding.substr(0,5).localeCompare('UTF-7')==0) return 'UTF-7';
	return encoding;
}

function getBOM(encoding) {
	if (encoding == 'UTF-8') return 'UTF8_BOM';
	if (encoding == 'UTF-32') return 'UTF32_BIG_ENDIAN_BOM';
	if (encoding == 'UTF-32BE') return 'UTF32_BIG_ENDIAN_BOM';
	if (encoding == 'UTF-32LE') return 'UTF32_LITTLE_ENDIAN_BOM';
	if (encoding == 'UTF-16') return 'UTF16_BIG_ENDIAN_BOM';
	if (encoding == 'UTF-16BE') return 'UTF16_BIG_ENDIAN_BOM';
	if (encoding == 'UTF-16LE') return 'UTF16_LITTLE_ENDIAN_BOM';
	if (encoding == 'UTF-7') return 'UTF7_BOM1';
	if (encoding == 'UTF-7-1') return 'UTF7_BOM1';
	if (encoding == 'UTF-7-2') return 'UTF7_BOM2';
	if (encoding == 'UTF-7-3') return 'UTF7_BOM3';
	if (encoding == 'UTF-7-5') return 'UTF7_BOM4';
	if (encoding == 'UTF-7-1') return 'UTF7_BOM5';
	if (encoding == 'UTF-1') return 'UTF-1';
	if (encoding == 'UTF-EBCDIC') return 'UTFEBCDIC_BOM';
	if (encoding == 'SCSU') return 'SCSU_BOM';
	if (encoding == 'BOCU-1') return 'BOCU1_BOM';
	if (encoding == 'GB-18030') return 'GB18030_BOM';
	return 0;
}



function download(lang, encoding, filename) {
	if (typeof encoding==='undefined') encoding = 'UTF-8'; // default
	if (typeof filename==='undefined') filename = ""; // default
	encoding=correctEncoding(encoding);
	
	if (filename.localeCompare("")==0) { 
		filename=document.getElementById("fileName").getAttribute("href");
		filename=filename.substring(filename.lastIndexOf("/")+1);
	}
	value = document.getElementById('textarea_area').value;

// ----------------------- Extensions to MIME --------- //

        // List of mime types
        // combination of values from Windows 7 Registry and 
        // from C:\Windows\System32\inetsrv\config\applicationHost.config
        // some added, including .7z and .dat
	var extToMIME = [
        [".323", "text/h323"],
        [".3g2", "video/3gpp2"],
        [".3gp", "video/3gpp"],
        [".3gp2", "video/3gpp2"],
        [".3gpp", "video/3gpp"],
        [".7z", "application/x-7z-compressed"],
        [".aa", "audio/audible"],
        [".AAC", "audio/aac"],
        [".aaf", "application/octet-stream"],
        [".aax", "audio/vnd.audible.aax"],
        [".ac3", "audio/ac3"],
        [".aca", "application/octet-stream"],
        [".accda", "application/msaccess.addin"],
        [".accdb", "application/msaccess"],
        [".accdc", "application/msaccess.cab"],
        [".accde", "application/msaccess"],
        [".accdr", "application/msaccess.runtime"],
        [".accdt", "application/msaccess"],
        [".accdw", "application/msaccess.webapplication"],
        [".accft", "application/msaccess.ftemplate"],
        [".acx", "application/internet-property-stream"],
        [".AddIn", "text/xml"],
        [".ade", "application/msaccess"],
        [".adobebridge", "application/x-bridge-url"],
        [".adp", "application/msaccess"],
        [".ADT", "audio/vnd.dlna.adts"],
        [".ADTS", "audio/aac"],
        [".afm", "application/octet-stream"],
        [".ai", "application/postscript"],
        [".aif", "audio/x-aiff"],
        [".aifc", "audio/aiff"],
        [".aiff", "audio/aiff"],
        [".air", "application/vnd.adobe.air-application-installer-package+zip"],
        [".amc", "application/x-mpeg"],
        [".application", "application/x-ms-application"],
        [".art", "image/x-jg"],
        [".asa", "application/xml"],
        [".asax", "application/xml"],
        [".ascx", "application/xml"],
        [".asd", "application/octet-stream"],
        [".asf", "video/x-ms-asf"],
        [".ashx", "application/xml"],
        [".asi", "application/octet-stream"],
        [".asm", "text/plain"],
        [".asmx", "application/xml"],
        [".aspx", "application/xml"],
        [".asr", "video/x-ms-asf"],
        [".asx", "video/x-ms-asf"],
        [".atom", "application/atom+xml"],
        [".au", "audio/basic"],
        [".avi", "video/x-msvideo"],
        [".axs", "application/olescript"],
        [".bas", "text/plain"],
        [".bcpio", "application/x-bcpio"],
        [".bin", "application/octet-stream"],
        [".bmp", "image/bmp"],
        [".c", "text/plain"],
        [".cab", "application/octet-stream"],
        [".caf", "audio/x-caf"],
        [".calx", "application/vnd.ms-office.calx"],
        [".cat", "application/vnd.ms-pki.seccat"],
        [".cc", "text/plain"],
        [".cd", "text/plain"],
        [".cdda", "audio/aiff"],
        [".cdf", "application/x-cdf"],
        [".cer", "application/x-x509-ca-cert"],
        [".chm", "application/octet-stream"],
        [".class", "application/x-java-applet"],
        [".clp", "application/x-msclip"],
        [".cmx", "image/x-cmx"],
        [".cnf", "text/plain"],
        [".cod", "image/cis-cod"],
        [".config", "application/xml"],
        [".contact", "text/x-ms-contact"],
        [".coverage", "application/xml"],
        [".cpio", "application/x-cpio"],
        [".cpp", "text/plain"],
        [".crd", "application/x-mscardfile"],
        [".crl", "application/pkix-crl"],
        [".crt", "application/x-x509-ca-cert"],
        [".cs", "text/plain"],
        [".csdproj", "text/plain"],
        [".csh", "application/x-csh"],
        [".csproj", "text/plain"],
        [".css", "text/css"],
        [".csv", "text/csv"],
        [".cur", "application/octet-stream"],
        [".cxx", "text/plain"],
        [".dat", "application/octet-stream"],
        [".datasource", "application/xml"],
        [".dbproj", "text/plain"],
        [".dcr", "application/x-director"],
        [".def", "text/plain"],
        [".deploy", "application/octet-stream"],
        [".der", "application/x-x509-ca-cert"],
        [".dgml", "application/xml"],
        [".dib", "image/bmp"],
        [".dif", "video/x-dv"],
        [".dir", "application/x-director"],
        [".disco", "text/xml"],
        [".dll", "application/x-msdownload"],
        [".dll.config", "text/xml"],
        [".dlm", "text/dlm"],
        [".doc", "application/msword"],
        [".docm", "application/vnd.ms-word.document.macroEnabled.12"],
        [".docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
        [".dot", "application/msword"],
        [".dotm", "application/vnd.ms-word.template.macroEnabled.12"],
        [".dotx", "application/vnd.openxmlformats-officedocument.wordprocessingml.template"],
        [".dsp", "application/octet-stream"],
        [".dsw", "text/plain"],
        [".dtd", "text/xml"],
        [".dtsConfig", "text/xml"],
        [".dv", "video/x-dv"],
        [".dvi", "application/x-dvi"],
        [".dwf", "drawing/x-dwf"],
        [".dwp", "application/octet-stream"],
        [".dxr", "application/x-director"],
        [".eml", "message/rfc822"],
        [".emz", "application/octet-stream"],
        [".eot", "application/octet-stream"],
        [".eps", "application/postscript"],
        [".etl", "application/etl"],
        [".etx", "text/x-setext"],
        [".evy", "application/envoy"],
        [".exe", "application/octet-stream"],
        [".exe.config", "text/xml"],
        [".fdf", "application/vnd.fdf"],
        [".fif", "application/fractals"],
        [".filters", "Application/xml"],
        [".fla", "application/octet-stream"],
        [".flr", "x-world/x-vrml"],
        [".flv", "video/x-flv"],
        [".fsscript", "application/fsharp-script"],
        [".fsx", "application/fsharp-script"],
        [".generictest", "application/xml"],
        [".gif", "image/gif"],
        [".group", "text/x-ms-group"],
        [".gsm", "audio/x-gsm"],
        [".gtar", "application/x-gtar"],
        [".gz", "application/x-gzip"],
        [".h", "text/plain"],
        [".hdf", "application/x-hdf"],
        [".hdml", "text/x-hdml"],
        [".hhc", "application/x-oleobject"],
        [".hhk", "application/octet-stream"],
        [".hhp", "application/octet-stream"],
        [".hlp", "application/winhlp"],
        [".hpp", "text/plain"],
        [".hqx", "application/mac-binhex40"],
        [".hta", "application/hta"],
        [".htc", "text/x-component"],
        [".htm", "text/html"],
        [".html", "text/html"],
        [".htt", "text/webviewhtml"],
        [".hxa", "application/xml"],
        [".hxc", "application/xml"],
        [".hxd", "application/octet-stream"],
        [".hxe", "application/xml"],
        [".hxf", "application/xml"],
        [".hxh", "application/octet-stream"],
        [".hxi", "application/octet-stream"],
        [".hxk", "application/xml"],
        [".hxq", "application/octet-stream"],
        [".hxr", "application/octet-stream"],
        [".hxs", "application/octet-stream"],
        [".hxt", "text/html"],
        [".hxv", "application/xml"],
        [".hxw", "application/octet-stream"],
        [".hxx", "text/plain"],
        [".i", "text/plain"],
        [".ico", "image/x-icon"],
        [".ics", "application/octet-stream"],
        [".idl", "text/plain"],
        [".ief", "image/ief"],
        [".iii", "application/x-iphone"],
        [".inc", "text/plain"],
        [".inf", "application/octet-stream"],
        [".inl", "text/plain"],
        [".ins", "application/x-internet-signup"],
        [".ipa", "application/x-itunes-ipa"],
        [".ipg", "application/x-itunes-ipg"],
        [".ipproj", "text/plain"],
        [".ipsw", "application/x-itunes-ipsw"],
        [".iqy", "text/x-ms-iqy"],
        [".isp", "application/x-internet-signup"],
        [".ite", "application/x-itunes-ite"],
        [".itlp", "application/x-itunes-itlp"],
        [".itms", "application/x-itunes-itms"],
        [".itpc", "application/x-itunes-itpc"],
        [".IVF", "video/x-ivf"],
        [".jar", "application/java-archive"],
        [".java", "application/octet-stream"],
        [".jck", "application/liquidmotion"],
        [".jcz", "application/liquidmotion"],
        [".jfif", "image/pjpeg"],
        [".jnlp", "application/x-java-jnlp-file"],
        [".jpb", "application/octet-stream"],
        [".jpe", "image/jpeg"],
        [".jpeg", "image/jpeg"],
        [".jpg", "image/jpeg"],
        [".js", "application/x-javascript"],
        [".json", "application/json"],
        [".jsx", "text/jscript"],
        [".jsxbin", "text/plain"],
        [".latex", "application/x-latex"],
        [".library-ms", "application/windows-library+xml"],
        [".lit", "application/x-ms-reader"],
        [".loadtest", "application/xml"],
        [".lpk", "application/octet-stream"],
        [".lsf", "video/x-la-asf"],
        [".lst", "text/plain"],
        [".lsx", "video/x-la-asf"],
        [".lzh", "application/octet-stream"],
        [".m13", "application/x-msmediaview"],
        [".m14", "application/x-msmediaview"],
        [".m1v", "video/mpeg"],
        [".m2t", "video/vnd.dlna.mpeg-tts"],
        [".m2ts", "video/vnd.dlna.mpeg-tts"],
        [".m2v", "video/mpeg"],
        [".m3u", "audio/x-mpegurl"],
        [".m3u8", "audio/x-mpegurl"],
        [".m4a", "audio/m4a"],
        [".m4b", "audio/m4b"],
        [".m4p", "audio/m4p"],
        [".m4r", "audio/x-m4r"],
        [".m4v", "video/x-m4v"],
        [".mac", "image/x-macpaint"],
        [".mak", "text/plain"],
        [".man", "application/x-troff-man"],
        [".manifest", "application/x-ms-manifest"],
        [".map", "text/plain"],
        [".master", "application/xml"],
        [".mda", "application/msaccess"],
        [".mdb", "application/x-msaccess"],
        [".mde", "application/msaccess"],
        [".mdp", "application/octet-stream"],
        [".me", "application/x-troff-me"],
        [".mfp", "application/x-shockwave-flash"],
        [".mht", "message/rfc822"],
        [".mhtml", "message/rfc822"],
        [".mid", "audio/mid"],
        [".midi", "audio/mid"],
        [".mix", "application/octet-stream"],
        [".mk", "text/plain"],
        [".mmf", "application/x-smaf"],
        [".mno", "text/xml"],
        [".mny", "application/x-msmoney"],
        [".mod", "video/mpeg"],
        [".mov", "video/quicktime"],
        [".movie", "video/x-sgi-movie"],
        [".mp2", "video/mpeg"],
        [".mp2v", "video/mpeg"],
        [".mp3", "audio/mpeg"],
        [".mp4", "video/mp4"],
        [".mp4v", "video/mp4"],
        [".mpa", "video/mpeg"],
        [".mpe", "video/mpeg"],
        [".mpeg", "video/mpeg"],
        [".mpf", "application/vnd.ms-mediapackage"],
        [".mpg", "video/mpeg"],
        [".mpp", "application/vnd.ms-project"],
        [".mpv2", "video/mpeg"],
        [".mqv", "video/quicktime"],
        [".ms", "application/x-troff-ms"],
        [".msi", "application/octet-stream"],
        [".mso", "application/octet-stream"],
        [".mts", "video/vnd.dlna.mpeg-tts"],
        [".mtx", "application/xml"],
        [".mvb", "application/x-msmediaview"],
        [".mvc", "application/x-miva-compiled"],
        [".mxp", "application/x-mmxp"],
        [".nc", "application/x-netcdf"],
        [".nsc", "video/x-ms-asf"],
        [".nws", "message/rfc822"],
        [".ocx", "application/octet-stream"],
        [".oda", "application/oda"],
        [".odc", "text/x-ms-odc"],
        [".odh", "text/plain"],
        [".odl", "text/plain"],
        [".odp", "application/vnd.oasis.opendocument.presentation"],
        [".ods", "application/oleobject"],
        [".odt", "application/vnd.oasis.opendocument.text"],
        [".one", "application/onenote"],
        [".onea", "application/onenote"],
        [".onepkg", "application/onenote"],
        [".onetmp", "application/onenote"],
        [".onetoc", "application/onenote"],
        [".onetoc2", "application/onenote"],
        [".orderedtest", "application/xml"],
        [".osdx", "application/opensearchdescription+xml"],
        [".p10", "application/pkcs10"],
        [".p12", "application/x-pkcs12"],
        [".p7b", "application/x-pkcs7-certificates"],
        [".p7c", "application/pkcs7-mime"],
        [".p7m", "application/pkcs7-mime"],
        [".p7r", "application/x-pkcs7-certreqresp"],
        [".p7s", "application/pkcs7-signature"],
        [".pbm", "image/x-portable-bitmap"],
        [".pcast", "application/x-podcast"],
        [".pct", "image/pict"],
        [".pcx", "application/octet-stream"],
        [".pcz", "application/octet-stream"],
        [".pdf", "application/pdf"],
        [".pfb", "application/octet-stream"],
        [".pfm", "application/octet-stream"],
        [".pfx", "application/x-pkcs12"],
        [".pgm", "image/x-portable-graymap"],
        [".pic", "image/pict"],
        [".pict", "image/pict"],
        [".pkgdef", "text/plain"],
        [".pkgundef", "text/plain"],
        [".pko", "application/vnd.ms-pki.pko"],
        [".pls", "audio/scpls"],
        [".pma", "application/x-perfmon"],
        [".pmc", "application/x-perfmon"],
        [".pml", "application/x-perfmon"],
        [".pmr", "application/x-perfmon"],
        [".pmw", "application/x-perfmon"],
        [".png", "image/png"],
        [".pnm", "image/x-portable-anymap"],
        [".pnt", "image/x-macpaint"],
        [".pntg", "image/x-macpaint"],
        [".pnz", "image/png"],
        [".pot", "application/vnd.ms-powerpoint"],
        [".potm", "application/vnd.ms-powerpoint.template.macroEnabled.12"],
        [".potx", "application/vnd.openxmlformats-officedocument.presentationml.template"],
        [".ppa", "application/vnd.ms-powerpoint"],
        [".ppam", "application/vnd.ms-powerpoint.addin.macroEnabled.12"],
        [".ppm", "image/x-portable-pixmap"],
        [".pps", "application/vnd.ms-powerpoint"],
        [".ppsm", "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],
        [".ppsx", "application/vnd.openxmlformats-officedocument.presentationml.slideshow"],
        [".ppt", "application/vnd.ms-powerpoint"],
        [".pptm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"],
        [".pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"],
        [".prf", "application/pics-rules"],
        [".prm", "application/octet-stream"],
        [".prx", "application/octet-stream"],
        [".ps", "application/postscript"],
        [".psc1", "application/PowerShell"],
        [".psd", "application/octet-stream"],
        [".psess", "application/xml"],
        [".psm", "application/octet-stream"],
        [".psp", "application/octet-stream"],
        [".pub", "application/x-mspublisher"],
        [".pwz", "application/vnd.ms-powerpoint"],
        [".qht", "text/x-html-insertion"],
        [".qhtm", "text/x-html-insertion"],
        [".qt", "video/quicktime"],
        [".qti", "image/x-quicktime"],
        [".qtif", "image/x-quicktime"],
        [".qtl", "application/x-quicktimeplayer"],
        [".qxd", "application/octet-stream"],
        [".ra", "audio/x-pn-realaudio"],
        [".ram", "audio/x-pn-realaudio"],
        [".rar", "application/octet-stream"],
        [".ras", "image/x-cmu-raster"],
        [".rat", "application/rat-file"],
        [".rc", "text/plain"],
        [".rc2", "text/plain"],
        [".rct", "text/plain"],
        [".rdlc", "application/xml"],
        [".resx", "application/xml"],
        [".rf", "image/vnd.rn-realflash"],
        [".rgb", "image/x-rgb"],
        [".rgs", "text/plain"],
        [".rm", "application/vnd.rn-realmedia"],
        [".rmi", "audio/mid"],
        [".rmp", "application/vnd.rn-rn_music_package"],
        [".roff", "application/x-troff"],
        [".rpm", "audio/x-pn-realaudio-plugin"],
        [".rqy", "text/x-ms-rqy"],
        [".rtf", "application/rtf"],
        [".rtx", "text/richtext"],
        [".ruleset", "application/xml"],
        [".s", "text/plain"],
        [".safariextz", "application/x-safari-safariextz"],
        [".scd", "application/x-msschedule"],
        [".sct", "text/scriptlet"],
        [".sd2", "audio/x-sd2"],
        [".sdp", "application/sdp"],
        [".sea", "application/octet-stream"],
        [".searchConnector-ms", "application/windows-search-connector+xml"],
        [".setpay", "application/set-payment-initiation"],
        [".setreg", "application/set-registration-initiation"],
        [".settings", "application/xml"],
        [".sgimb", "application/x-sgimb"],
        [".sgml", "text/sgml"],
        [".sh", "application/x-sh"],
        [".shar", "application/x-shar"],
        [".shtml", "text/html"],
        [".sit", "application/x-stuffit"],
        [".sitemap", "application/xml"],
        [".skin", "application/xml"],
        [".sldm", "application/vnd.ms-powerpoint.slide.macroEnabled.12"],
        [".sldx", "application/vnd.openxmlformats-officedocument.presentationml.slide"],
        [".slk", "application/vnd.ms-excel"],
        [".sln", "text/plain"],
        [".slupkg-ms", "application/x-ms-license"],
        [".smd", "audio/x-smd"],
        [".smi", "application/octet-stream"],
        [".smx", "audio/x-smd"],
        [".smz", "audio/x-smd"],
        [".snd", "audio/basic"],
        [".snippet", "application/xml"],
        [".snp", "application/octet-stream"],
        [".sol", "text/plain"],
        [".sor", "text/plain"],
        [".spc", "application/x-pkcs7-certificates"],
        [".spl", "application/futuresplash"],
        [".src", "application/x-wais-source"],
        [".srf", "text/plain"],
        [".SSISDeploymentManifest", "text/xml"],
        [".ssm", "application/streamingmedia"],
        [".sst", "application/vnd.ms-pki.certstore"],
        [".stl", "application/vnd.ms-pki.stl"],
        [".sv4cpio", "application/x-sv4cpio"],
        [".sv4crc", "application/x-sv4crc"],
        [".svc", "application/xml"],
        [".swf", "application/x-shockwave-flash"],
        [".t", "application/x-troff"],
        [".tar", "application/x-tar"],
        [".tcl", "application/x-tcl"],
        [".testrunconfig", "application/xml"],
        [".testsettings", "application/xml"],
        [".tex", "application/x-tex"],
        [".texi", "application/x-texinfo"],
        [".texinfo", "application/x-texinfo"],
        [".tgz", "application/x-compressed"],
        [".thmx", "application/vnd.ms-officetheme"],
        [".thn", "application/octet-stream"],
        [".tif", "image/tiff"],
        [".tiff", "image/tiff"],
        [".tlh", "text/plain"],
        [".tli", "text/plain"],
        [".toc", "application/octet-stream"],
        [".tr", "application/x-troff"],
        [".trm", "application/x-msterminal"],
        [".trx", "application/xml"],
        [".ts", "video/vnd.dlna.mpeg-tts"],
        [".tsv", "text/tab-separated-values"],
        [".ttf", "application/octet-stream"],
        [".tts", "video/vnd.dlna.mpeg-tts"],
        [".txt", "text/plain"],
        [".u32", "application/octet-stream"],
        [".uls", "text/iuls"],
        [".user", "text/plain"],
        [".ustar", "application/x-ustar"],
        [".vb", "text/plain"],
        [".vbdproj", "text/plain"],
        [".vbk", "video/mpeg"],
        [".vbproj", "text/plain"],
        [".vbs", "text/vbscript"],
        [".vcf", "text/x-vcard"],
        [".vcproj", "Application/xml"],
        [".vcs", "text/plain"],
        [".vcxproj", "Application/xml"],
        [".vddproj", "text/plain"],
        [".vdp", "text/plain"],
        [".vdproj", "text/plain"],
        [".vdx", "application/vnd.ms-visio.viewer"],
        [".vml", "text/xml"],
        [".vscontent", "application/xml"],
        [".vsct", "text/xml"],
        [".vsd", "application/vnd.visio"],
        [".vsi", "application/ms-vsi"],
        [".vsix", "application/vsix"],
        [".vsixlangpack", "text/xml"],
        [".vsixmanifest", "text/xml"],
        [".vsmdi", "application/xml"],
        [".vspscc", "text/plain"],
        [".vss", "application/vnd.visio"],
        [".vsscc", "text/plain"],
        [".vssettings", "text/xml"],
        [".vssscc", "text/plain"],
        [".vst", "application/vnd.visio"],
        [".vstemplate", "text/xml"],
        [".vsto", "application/x-ms-vsto"],
        [".vsw", "application/vnd.visio"],
        [".vsx", "application/vnd.visio"],
        [".vtx", "application/vnd.visio"],
        [".wav", "audio/wav"],
        [".wave", "audio/wav"],
        [".wax", "audio/x-ms-wax"],
        [".wbk", "application/msword"],
        [".wbmp", "image/vnd.wap.wbmp"],
        [".wcm", "application/vnd.ms-works"],
        [".wdb", "application/vnd.ms-works"],
        [".wdp", "image/vnd.ms-photo"],
        [".webarchive", "application/x-safari-webarchive"],
        [".webtest", "application/xml"],
        [".wiq", "application/xml"],
        [".wiz", "application/msword"],
        [".wks", "application/vnd.ms-works"],
        [".WLMP", "application/wlmoviemaker"],
        [".wlpginstall", "application/x-wlpg-detect"],
        [".wlpginstall3", "application/x-wlpg3-detect"],
        [".wm", "video/x-ms-wm"],
        [".wma", "audio/x-ms-wma"],
        [".wmd", "application/x-ms-wmd"],
        [".wmf", "application/x-msmetafile"],
        [".wml", "text/vnd.wap.wml"],
        [".wmlc", "application/vnd.wap.wmlc"],
        [".wmls", "text/vnd.wap.wmlscript"],
        [".wmlsc", "application/vnd.wap.wmlscriptc"],
        [".wmp", "video/x-ms-wmp"],
        [".wmv", "video/x-ms-wmv"],
        [".wmx", "video/x-ms-wmx"],
        [".wmz", "application/x-ms-wmz"],
        [".wpl", "application/vnd.ms-wpl"],
        [".wps", "application/vnd.ms-works"],
        [".wri", "application/x-mswrite"],
        [".wrl", "x-world/x-vrml"],
        [".wrz", "x-world/x-vrml"],
        [".wsc", "text/scriptlet"],
        [".wsdl", "text/xml"],
        [".wvx", "video/x-ms-wvx"],
        [".x", "application/directx"],
        [".xaf", "x-world/x-vrml"],
        [".xaml", "application/xaml+xml"],
        [".xap", "application/x-silverlight-app"],
        [".xbap", "application/x-ms-xbap"],
        [".xbm", "image/x-xbitmap"],
        [".xdr", "text/plain"],
        [".xht", "application/xhtml+xml"],
        [".xhtml", "application/xhtml+xml"],
        [".xla", "application/vnd.ms-excel"],
        [".xlam", "application/vnd.ms-excel.addin.macroEnabled.12"],
        [".xlc", "application/vnd.ms-excel"],
        [".xld", "application/vnd.ms-excel"],
        [".xlk", "application/vnd.ms-excel"],
        [".xll", "application/vnd.ms-excel"],
        [".xlm", "application/vnd.ms-excel"],
        [".xls", "application/vnd.ms-excel"],
        [".xlsb", "application/vnd.ms-excel.sheet.binary.macroEnabled.12"],
        [".xlsm", "application/vnd.ms-excel.sheet.macroEnabled.12"],
        [".xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],
        [".xlt", "application/vnd.ms-excel"],
        [".xltm", "application/vnd.ms-excel.template.macroEnabled.12"],
        [".xltx", "application/vnd.openxmlformats-officedocument.spreadsheetml.template"],
        [".xlw", "application/vnd.ms-excel"],
        [".xml", "text/xml"],
        [".xmta", "application/xml"],
        [".xof", "x-world/x-vrml"],
        [".XOML", "text/plain"],
        [".xpm", "image/x-xpixmap"],
        [".xps", "application/vnd.ms-xpsdocument"],
        [".xrm-ms", "text/xml"],
        [".xsc", "application/xml"],
        [".xsd", "text/xml"],
        [".xsf", "text/xml"],
        [".xsl", "text/xml"],
        [".xslt", "text/xml"],
        [".xsn", "application/octet-stream"],
        [".xss", "application/xml"],
        [".xtp", "application/octet-stream"],
        [".xwd", "image/x-xwindowdump"],
        [".z", "application/x-compress"],
        [".zip", "application/x-zip-compressed"]
];


	filetype="text/*";
	for (var i = 0; i < extToMIME.length; i++) {
		if (extToMIME[i][0].localeCompare(filename.substring(filename.lastIndexOf(".")))==0) {
			filetype=extToMIME[i][1];
			break;
		}
	}

// ----------------------- End of Extensions to MIME --------- //

	var pom = document.createElement('a');

/*
	if (getBOM(encoding)) {
		pom.setAttribute('href', 'data: '+filetype+';charset='+encoding+';,' + '\ufeff' + value); // Added BOM too
	} else {
		pom.setAttribute('href', 'data: '+filetype+';charset='+encoding+';,' + value);
	}
	pom.setAttribute('download', filename);
*/
	if (getBOM(encoding)) {
		blobObject = new Blob(['\ufeff'+value], { encoding: encoding, type: filetype}); // Added BOM too
	} else {
		blobObject = new Blob([value], { encoding: encoding, type: filetype });
	}

	var _URL = window.URL || window.webkitURL;
	var blobUrl = _URL.createObjectURL(blobObject);
	pom.href = blobUrl;
	pom.download = filename;
	pom.click();
	_URL.revokeObjectURL(blobUrl);
/*
	if (document.createEvent) {
		if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) { // IE
			if (getBOM(encoding)) {
				blobObject = new Blob(['\ufeff'+value], { type: filetype+";charset="+encoding+";" }); // Added BOM too
			} else {
				blobObject = new Blob([value], { type: filetype+";charset="+encoding+";" });
			}
			window.navigator.msSaveBlob(blobObject, filename);
		} else { // FF, Chrome
			var event = document.createEvent('MouseEvents');
			event.initEvent('click', true, true);
			pom.dispatchEvent(event);
		}
	} else if( document.createEventObject ) { // Have No Idea
		var evObj = document.createEventObject();
		pom.fireEvent( 'onclick' , evObj );
    } else { // For Any Case
		pom.click();
	}
*/
}

function save(lang, encoding, filename, showMessage, message) {
	if (typeof encoding==='undefined') encoding = "UTF-8"; // default
	if (typeof filename==='undefined') filename = document.getElementById("fileName").getAttribute("href"); // default
	if (typeof showMessage==='undefined') showMessage = 1; // default
	if (typeof message==='undefined') message = ""; // default

	if (lang.localeCompare('rus')==0) {
		message2="Фаил НЕ сохранён. Вход не выполнен.";
	}
	if (lang.localeCompare('eng')==0) {
		message2="File NOT Saved. Not Logged In.";
	}



	if (lang.localeCompare('rus')==0) {
		if (message.localeCompare("")==0) {message1="Фаил Сохранён Успешно.";} else {message1=message;}
	}
	if (lang.localeCompare('eng')==0) {
		if (message.localeCompare("")==0) {message1="File Saved Successfully.";} else {message1=message;}
	}
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xhr=new XMLHttpRequest();
	} else {  // code for IE6, IE5
		xhr=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhr.onreadystatechange = function(){
        if (this.readyState==4 && this.status==200) {
			if (removeBom(this.responseText)=="not logged in") {alert(message2); return;};

			if (removeBom(this.responseText).substring(0,20).localeCompare('Unable to open file!')==0) {
				alert(removeBom(this.responseText));
				return;
			} else {
				if (document.getElementById("fileName").getAttribute("href").localeCompare(filename)==0) {
					ret=JSON.parse(removeBom(this.responseText));
					document.getElementById("dateModified_lbl").innerHTML=formatDate(removeBom(ret["modified"])*1000, lang);
					setBOM(ret["first10bytes"]);
					setTextAreaChanged(lang, 0);
					if (showMessage) setTimeout(function() { alert(message1); }, 50); // timeout to ensure changes applied
				} else {
					if (showMessage) alert(message1); // no changes to apply
				}
				return;
			}

        }
	};
	xhr.open("POST", "scripts/php/save.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send("filename="+ encodeURIComponent(filename)+"&q="+ encodeURIComponent(document.getElementById('textarea_area').value)+"&encoding="+ encodeURIComponent(encoding));
}



function saveas(lang, encoding) {
	if (typeof encoding==='undefined') encoding = "UTF-8"; // default
	if (lang.localeCompare('rus')==0) {
		prompt1="Введите Новое Имя Файла";
		message1="Фаил Сохранён Как Успешно. Обновите Страницу.";
		message2="Фаил Сохранён Как Успешно.";
	}
	if (lang.localeCompare('eng')==0) {
		prompt1="Enter New Filename";
		message1="File Saved As Successfully. Refresh Page.";
		message2="File Saved As Successfully.";
	}

	filename_orig_dir=document.getElementById("fileName").getAttribute("href").substring(0,document.getElementById("fileName").getAttribute("href").lastIndexOf("/")+1);
	newFileName = prompt(prompt1, document.getElementById("fileName").getAttribute("href"));
	newFileName_dir=newFileName.substring(0,newFileName.lastIndexOf("/")+1);
	if (newFileName == null || newFileName.localeCompare("")==0) {
		// return false;
	} else {

		if (window.XMLHttpRequest) {
			// code for IE7+, Firefox, Chrome, Opera, Safari
			xhr=new XMLHttpRequest();
		} else {  // code for IE6, IE5
			xhr=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xhr.onreadystatechange = function(){
			if (this.readyState==4 && this.status==200) {
				//console.log(this.responseText);
				fileExists = JSON.parse(removeBom(this.responseText));
				if (fileExists[0]==0) { //file not exists
					if (filename_orig_dir.localeCompare(newFileName_dir)==0) {
						message_show=message1;
					} else {
						message_show=message2;
					}
					save(lang, encoding, newFileName, 1, message_show);
				} else { //file exists
					if (lang.localeCompare("eng")==0) {
						message3 = "File '";
						message4 = "' Exists. Overwrite ?";
					}
					if (lang.localeCompare("rus")==0) {
						message3 = "Фаил '";
						message4 = "' Существует. Заменить ?";
					}
					var confirm = window.confirm(message3+newFileName+message4);
					if (!confirm) return;
					save(lang, encoding, newFileName, 1, message2);
				}
			}
		};
		xhr.open("GET","scripts/php/fileExists.php?q="+encodeURIComponent(newFileName),true);
		xhr.send();

	}
}






function upload(lang) {
	
	createFolder=0;

	if (lang.localeCompare('rus')==0) {
		prompt11="Введите Расположение Файла на Сервере";
		prompt12="Введите Расположение Файлов на Сервере";
		message1 ="Папка '";
		message2 ="' не Найдена. Создать?";

	}
	if (lang.localeCompare('eng')==0) {
		prompt11="Enter File Location on Server";
		prompt12="Enter Files Location on Server";
		message1 ="Folder '";
		message2 ="' not Found. Create?";
	}

	var input = document.createElement('input');
	input.type = 'file';
	input.multiple='multiple';

	input.onchange = e => { 

   		// getting a hold of the file reference
//   		var file = e.target.files[0]; 
		allFiles=e.target.files;
		totalFiles=allFiles.length;

		if (totalFiles==1) {
			prompt1=prompt11;
		} else {
			prompt1=prompt12;
		}
		newFilePath = prompt(prompt1, "images/icons/movies");
		if (newFilePath == null ) {return;}
		if (newFilePath.substring(newFilePath.length - 1, newFilePath.length)=="/") newFilePath=newFilePath.substring(0, newFilePath.length - 1);


		if (window.XMLHttpRequest) {
			// code for IE7+, Firefox, Chrome, Opera, Safari
			xhr=new XMLHttpRequest();
		} else {  // code for IE6, IE5
			xhr=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xhr.onreadystatechange = function(){
			if (this.readyState==4 && this.status==200) {
				//console.log(this.responseText);
				dirExists = JSON.parse(removeBom(this.responseText));
				if (dirExists[0]==0) { //newFilePath not exists
					createFolder=window.confirm(message1 + newFilePath+ message2);
					if (!createFolder) {return;}
					upload2(lang, allFiles, 0, newFilePath, createFolder);
				} else { //newFilePath exists
					upload2(lang, allFiles, 0, newFilePath, createFolder);
				}
			}
		};
		xhr.open("GET","scripts/php/dirExists.php?q="+encodeURIComponent(newFilePath),true);
		xhr.send();

	}

	input.click();

}


function upload2(lang, allFiles, i, newFilePath, createFolder) {
	
	if (lang.localeCompare('rus')==0) {
		prompt11 = "Имя Файла на Сервере ?";
		prompt12 = "Имя Картинки на Сервере ?";
		message1 = "Преобразовать формат ";
		message2 = " в формат jpg в Картинке в Файле '";
		message3 = " (Отмена=Нет)";


	}
	if (lang.localeCompare('eng')==0) {
		prompt11 = "Filename on Server ?";
		prompt12 = "Image Name on Server ?";
		message1 = "Transfer format ";
		message2 = " to format jpg in Image in File '";
		message3 = " (Cancel=No)";


	}

	totalFiles=allFiles.length;
	if (i==totalFiles) return;
	file=allFiles[i];

//console.log(file);

	filename=file.name;
	filetype=file.type;

	isImage=0;
	imagetype="";
	if (filetype.substr(0, 5)=="image") {
		isImage=1;
		imagetype=filetype.substr(6);
	}



	if (isImage==0) {
		filename = prompt(prompt11, filename);
		if (filename == null ) {return;}
		upload4(file, filename, lang, allFiles, i, newFilePath, createFolder);
		return;
	}


	var isJpg=0;
	var toJpg=0;
	confirm2=0;
	if (imagetype!="jpeg") {
		confirm2=window.confirm(message1 + imagetype + message2 + filename + "'?" + message3);
		if (confirm2) toJpg=1;
		filename = prompt(prompt12, filename);
		if (filename == null ) {return;}
		upload3(file, filename, isJpg, toJpg, lang, allFiles, i, newFilePath, createFolder);
	} else {
		// check additionally if image is really jpg using magic numbers
		var fileReader = new FileReader();
		fileReader.onload = function(event) {
			arrayBuffer = event.target.result;
			arr1 = new Uint8Array(arrayBuffer );
			var bytes = [];
			bytes[0]=arr1[0].toString(16);
			bytes[1]=arr1[1].toString(16);
			if (bytes[0]=="ff" && bytes[1]=="d8") {
				isJpg=1;
			} else {
				toJpg=1;
			}
			filename = prompt(prompt12, filename);
			if (filename == null ) {return;}
			upload3(file, filename, isJpg, toJpg, lang, allFiles, i, newFilePath, createFolder);
		};
		fileReader.readAsArrayBuffer(file.slice(0,2));
	}

}

function upload3(file, filename, isJpg, toJpg, lang, allFiles, i, newFilePath, createFolder) {

	if (lang.localeCompare('rus')==0) {
		prompt1 ="Введите Новую Ширину Картинки (в пикселях).";
		message1 = "Картинка '";
	}
	if (lang.localeCompare('eng')==0) {
		prompt1="Enter New Image Width (in pixels).";
		message1 = "Image '";
	}

	filetype=file.type;

	var _URL = window.URL || window.webkitURL;
       	img = new Image();
       	var objectUrl = _URL.createObjectURL(file);
	img.onload = function () {
		imageWidth=this.width;
		imageHeight=this.height;
		_URL.revokeObjectURL(objectUrl);

		newImageWidth = prompt(message1+newFilePath+"/"+filename+"'. "+prompt1, imageWidth);
		if (newImageWidth == null ) newImageWidth=imageWidth;
		newImageWidth = parseInt(newImageWidth);
		if (newImageWidth == 0) return;
			
		if ((isJpg==1 || toJpg==0) && imageWidth==newImageWidth) {
			upload4(file, filename, lang, allFiles, i, newFilePath, createFolder);
			return;
		}

		ratio = newImageWidth / imageWidth;
		var canvas = document.createElement("canvas");
		canvas.width = newImageWidth;
		canvas.height = imageHeight*ratio;
		var ctx = canvas.getContext("2d");
		ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

		blobtype=filetype;
		if (toJpg==1 || isJpg==1) blobtype='image/jpeg';
		canvas.toBlob(function (blob) {

			file2 = new File([blob], filename, blob);
			upload4(file2, filename, lang, allFiles, i, newFilePath, createFolder);

		}, blobtype);
	};
       	img.src = objectUrl;

}



function upload4(file, filename, lang, allFiles, i, newFilePath, createFolder) {

	isImage=0;
	if (file.type.substr(0,5)=="image") isImage=1;

	if (lang.localeCompare('rus')==0) {
		if (isImage==0) message1 = "Фаил '";
		if (isImage==1) message1 = "Картинка '";
		message2 = "' Существует. Заменить ?";
	}
	if (lang.localeCompare('eng')==0) {
		if (isImage==0) message1 = "File '";
		if (isImage==1) message1 = "Image '";
		message2 = "' Exists. Overwrite ?";
	}

	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xhr=new XMLHttpRequest();
	} else {  // code for IE6, IE5
		xhr=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhr.onreadystatechange = function(){
		if (this.readyState==4 && this.status==200) {
			//console.log(this.responseText);
			fileExists = JSON.parse(removeBom(this.responseText));
			if (fileExists[0]==0) { //file not exists
				uploadFile(file, filename, lang, allFiles, i, newFilePath, createFolder);
			} else { //file exists
				var confirm = window.confirm(message1+newFilePath+"/"+filename+message2);
				if (!confirm) return;
				uploadFile(file, filename, lang, allFiles, i, newFilePath, createFolder);
			}
		}
	};
	xhr.open("GET","scripts/php/fileExists.php?q="+encodeURIComponent(newFilePath)+"/"+encodeURIComponent(filename),true);
	xhr.send();


}


function uploadFile(file, filename, lang, allFiles, i, newFilePath, createFolder) {

	isImage=0;
	if (file.type.substr(0,5)=="image") isImage=1;

	if (lang.localeCompare('rus')==0) {
		if (isImage==0) messageF="Фаил";
		if (isImage==1) messageF="Картинка";
		message11="Загруженa Успешно.\nХочешь Просмотреть Картинку?";
		message12="Загружен Успешно.";
		message2 = "Фаил Загружается ";
		message3 = "How-To &blacktriangleright; HTML Редактор";
		summary0="Сводка:";
		summary1="Расположение Файла: ";
		summary2="Фаил: ";
		summary3="Картинка?: ";
		summary41="Да";
		summary42="Нет";
		summary5="Тип: ";
		summary6="Размер: ";
		summary7="Продолжить Загрузку?";
	}
	if (lang.localeCompare('eng')==0) {
		if (isImage==0) messageF="File";
		if (isImage==1) messageF="Image";
		message11="Uploaded Successfully.\nDo you Want to View Image?";
		message12="Uploaded Successfully.";
		message2 = "File is Uploading ";
		message3 = "How-To &blacktriangleright; HTML Editor";
		summary0="Summary:";
		summary1="File Location: ";
		summary2="File: ";
		summary3="is Image?: ";
		summary41="Yes";
		summary42="No";
		summary5="Type: ";
		summary6="Size: ";
		summary7="Continue Upload?";
	}

	summary=summary0+"\n\n";
	summary=summary+summary1+newFilePath+"\n";
	summary=summary+summary2+filename+"\n";
	summary=summary+summary3;
	if (isImage) {
		summary=summary+summary41+"\n";
	} else {
		summary=summary+summary42+"\n";
	}
	summary=summary+summary5+file.type+"\n";
	summary=summary+summary6+formatBytes(file.size)+"\n\n";
	summary=summary+summary7;
	var confirm = window.confirm(summary);
	if (!confirm) return;

	$("#caption_div").html("<div id='loadingDiv'>"+message2+"("+formatBytes(file.size)+") .</div>");

	let dataArray = new FormData();
	dataArray.append('file', file, filename);


	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xhr=new XMLHttpRequest();
	} else {  // code for IE6, IE5
		xhr=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhr.onreadystatechange = function(){
        	if (this.readyState==4 && this.status==200) {

			$("#caption_div").html(message3);

			if (removeBom(this.responseText)=="not logged in") {processSearchAndReplace(lang); return;};
//			console.log(this.responseText);

			if (removeBom(this.responseText)==1) {
				if (isImage) {
					var confirm = window.confirm(messageF+" '"+newFilePath+"/"+filename+"' "+message11);
					if (confirm) window.open(newFilePath+"/"+filename, '_blank').focus();
				} else {
					alert(messageF+" '"+newFilePath+"/"+filename+"' "+message12);
				}
				upload2(lang, allFiles, i+1, newFilePath, createFolder);
			} else {
				alert(removeBom(this.responseText));
				return;
			}
        	}
	};


	xhr.open("POST", "scripts/php/upload.php?path="+encodeURIComponent(newFilePath)+"&createFolder="+encodeURIComponent(createFolder), true);
	xhr.send(dataArray);

}




function del(lang, totalFiles) {
	
	message1="";
	if (lang.localeCompare('rus')==0) {
		message1="Действительно Удалить";
		message2="Фаил Удалён Успешно.";
		message3="Фаил не Найден.";
	}
	if (lang.localeCompare('eng')==0) {
		message1="Really Delete";
		message2="File Deleted Successfully.";
		message3="File not Found.";
	}

	filename=document.getElementById("fileName").getAttribute("href");
	var confirm = window.confirm(message1+" "+filename+"?");
	if (!confirm) return;


	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xhr=new XMLHttpRequest();
	} else {  // code for IE6, IE5
		xhr=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhr.onreadystatechange = function(){
        if (this.readyState==4 && this.status==200) {
			if (removeBom(this.responseText)=="not logged in") {processSearchAndReplace(lang); return;};
			if (this.responseText==1) {
				alert(message2);
				i =(parseInt(getParameterByName('i'))||0);
				if (i!=0 && i==(totalFiles-1)) i--;
				textAreaChanged=0;
				window.location.href='html_editor_'+lang+'.html?pattern='+ encodeURIComponent(getParameterByName('pattern'))+'&i='+ encodeURIComponent(i);
				return;
			} else {
				alert(message3);
			}

        }
	};
	xhr.open("GET", "scripts/php/delete.php?filename="+encodeURIComponent(filename), true);
	xhr.send();

}



function logout(lang) {
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xhr=new XMLHttpRequest();
	} else {  // code for IE6, IE5
		xhr=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhr.onreadystatechange = function(){
        	if (this.readyState==4 && this.status==200) {
//			console.log(this.responseText);
//			alert(this.responseText);
			window.location.href='html_editor_'+lang+'.html?pattern='+ encodeURIComponent(getParameterByName('pattern'))+'&i='+ (parseInt(getParameterByName('i'))||0);
			return;
        	}
	};
	xhr.open("GET","scripts/php/logOut.php",true);
	xhr.send();
}

/*
$("#search_pattern").on('keydown', function (e) {
    if (e.keyCode == 13) {
        searchPattern();
    }
});
*/

function searchPattern(lang) {
	pattern=document.getElementById('search_pattern').value;
	if (pattern.length>0 && pattern.substring(pattern.length-1).localeCompare("/")==0) pattern=pattern+"*";
	pattern=encodeURIComponent(pattern);
	window.location.href='html_editor_'+lang+'.html?pattern='+pattern+'&i=0';
	return;
}


function showInformation(lang) {
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		var xmlhttp2=new XMLHttpRequest();
	} else {  // code for IE6, IE5
		var xmlhttp2=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp2.onreadystatechange = function(){
		if (this.readyState==4 && this.status==200) {
			modStr=xmlhttp2.getResponseHeader('Last-Modified');
			// console.log(xmlhttp2.getAllResponseHeaders());
			if (lang=='rus') infoText="HTML Редактор Версия 1.0. Создано - 22е Янв, 2018, Последнее Изменение - ";
			if (lang=='eng') infoText="HTML Editor Version 1.0. Created At - 22nd of Jan, 2018, Last Modification - ";
			alert(infoText+formatDate(modStr, lang)+".");
		}
	};
	var dataFileName="scripts/processSearchAndReplace.js";
	xmlhttp2.open("GET", dataFileName, true);
	xmlhttp2.send();
}




function processSearch(lang) {

	$("#search_col1").show();
	$("#search_col2").show();
	$("#search_col3").show();
	$("#search_col4").show();


	if (lang.localeCompare('rus')==0) {
		message1="Устанавливается TextArea.";
		message2="Читаются Файлы, Соответствующие Критерию ";
		message3="Группируются Найденные Файлы, в Соответствии с Их Первой Буквой.";
		message4="Печатаются Созданные Группы.";
	}
	if (lang.localeCompare('eng')==0) {
		message1="Setting TextArea.";
		message2="Reading Files, Matching Pattern ";
		message3="Grouping Found Files, According to Their First Letter.";
		message4="Printing Created Groups.";
	}

	$("#error_message").text(message1);

// -------------- Tab for Texarea, Line and Column Numbers and Disable Autofill ------------- //
	textArea=document.getElementById("textarea_area");
	textArea.onkeydown = function(e){
		if(e.keyCode==9 || e.which==9){
			e.preventDefault();
			var s = this.selectionStart;
			this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
			this.selectionEnd = s+1; 
		}
		setLineAndColumnNumber(lang);
	}


	textArea.onkeyup = function(e){
		setLineAndColumnNumber(lang);
	}
	textArea.onmouseup = function(e){
		setLineAndColumnNumber(lang);
	}
	textArea.addEventListener('input', () => {setTextAreaChanged(lang);});

// -------------- End of Tab for Texarea, Line and Column Numbers and Disable Autofill ------------- //


	/////////////// Process Search//////////////////

	searchPatt=getParameterByName('pattern'); 
	$("#error_message").text(message2+"'"+searchPatt+"'.");

    if (searchPatt && searchPatt!="") {
		document.getElementById('search_pattern').value=searchPatt;
		if (lang.localeCompare('rus')==0) {
			err1="Не Найдено Файлов, Соответствующих Критерию Поиска - '" + searchPatt + "'.";
		}
		if (lang.localeCompare('eng')==0) {
			err1="No Files, Matching Criteria '" + searchPatt + "', Found.";
		}


		i=(parseInt(getParameterByName('i'))||0);
		if (i!=null) {
			if (window.XMLHttpRequest) {
				// code for IE7+, Firefox, Chrome, Opera, Safari
				xhr=new XMLHttpRequest();
			} else {  // code for IE6, IE5
				xhr=new ActiveXObject("Microsoft.XMLHTTP");
			}
			xhr.onreadystatechange = function(){
				if (this.readyState==4 && this.status==200) {
					//console.log(this.responseText);
					dir = JSON.parse(removeBom(this.responseText));
					// logAllBOMs(dir); // to check

					// process data here
					if (dir.length>0) {
						if (i<0 || i>=dir.length) {
							window.location.href='html_editor_'+lang+'.html?pattern='+ encodeURIComponent(searchPatt)+'&i=0';
							return;
						}
						if (dir[i]!="") {

							$("#error_message").text(message3);

							c=0;
							filesContText="";
// ------------------- Save found files to array with corresponding starting letter ------------ //
							var alphabetFiles = {};
							var alphabetFilesCount = {};
							var alphabetFilesLength = {};
							var alphabetFilesFirstIndex = {};
							var alphabetFilesHighlightedLetter;
							// i - Highlighted File, j - Processed file for printing Alphabet
							for (j=0; j<dir.length; j++) {
								var firstLetter = dir[j]['basename'].charAt(0);
								if (typeof alphabetFiles[firstLetter]==='undefined') {
									filesContText="";
									color=undefined;
									prevMatch=undefined;
								} else {
									filesContText=alphabetFiles[firstLetter];
								}
								if (typeof alphabetFilesCount[firstLetter]==='undefined') {
									alphabetFilesCount[firstLetter]=0;
									alphabetFilesFirstIndex[firstLetter]=j;
								}
								a=alphabetFilesCount[firstLetter];
								var matches = [];
								matches[0]=getTextSep(dir[j]['basename'], "[\_]");
								matches[1]=getTextSep(dir[j]['basename'], "[\.]");
								matches[2]=getTextSep(dir[j]['basename'], "[a-z][A-Z]", 1);
								matches[3]=getTextSep(dir[j]['basename'], "[a-z][0-9]", 1);
								matches[4]=getTextSep(dir[j]['basename'], "[A-Z][a-z]", 1);
								matches[5]=getTextSep(dir[j]['basename'], "[A-Z][0-9]", 1);
								matches[6]=getTextSep(dir[j]['basename'], "[0-9][A-Z]", 1);
								matches[7]=getTextSep(dir[j]['basename'], "[0-9][a-z]", 1);
								
								match=null;
								for (m=0;m<8;m++) {
									if (matches[m] != null) {
										match=matches[m];
										break;
									}
								}
								if (match != null) {
									for (m=0;m<8;m++) {
										if (matches[m] != null && matches[m].localeCompare(match)!=0) {
											if (match.length>matches[m].length) match=matches[m];
										}
									}
								}

								if (match==null) {
									if (typeof color==='undefined') {
										color="blue";
									} else {
										if (color.localeCompare("green")==0) { color="blue";} else {color="green";}
									}
									prevMatch=match;
								} else {
									if (typeof color==='undefined') color="blue";
									if (typeof prevMatch==='undefined') {
										prevMatch=match;
									} else {
										if (match.localeCompare(prevMatch)==0) {
											// color stays same
										} else {
											prevMatch=match;
											if (color.localeCompare("green")==0) { color="blue";} else {color="green";}
										}
									}
								}
								colorShow=color;
								if (j==i) {
									alphabetFilesHighlightedLetter=firstLetter;
									colorShow="red";
								}
								onClickLink="html_editor_"+lang+".html?pattern="+encodeURIComponent(getParameterByName('pattern'))+"&i="+j;
								filesContText=filesContText+"<a href=\""+onClickLink+"\"  class = \"standardb_"+colorShow+"\" title=\""+dir[j]['correctDir']+dir[j]['basename']+"\">"+a+"</a>&ensp;";
								if (typeof alphabetFilesLength[firstLetter]==='undefined') alphabetFilesLength[firstLetter]=0;
								c=alphabetFilesLength[firstLetter];
								c=c+(a.toString()).length+1;
								if (c+((a+1).toString()).length+1>75) {
									filesContText=filesContText+"<br>";
									c=0;
								}

								alphabetFiles[firstLetter]=filesContText;
								alphabetFilesLength[firstLetter]=c;
								alphabetFilesCount[firstLetter]++;
							}
// ------------------- End of Save found files to array with corresponding starting letter ------------ //


// ------------------- Print Alphabet and Result ------------ //
							$("#error_message").text(message4);
							c=0;
							filesContAlphabetText="";
							for (var key in alphabetFiles) {
								if (alphabetFiles.hasOwnProperty(key)) {
									if (c+key.length+1>75) {
										filesContAlphabetText=filesContAlphabetText+"<br>";
										c=0;
									}
									if (key.localeCompare(alphabetFilesHighlightedLetter)==0) {
										color="red";
									} else {
										color="blue";
									}
									onClickLink="html_editor_"+lang+".html?pattern="+encodeURIComponent(getParameterByName('pattern'))+"&i="+alphabetFilesFirstIndex[key];
									filesContAlphabetText=filesContAlphabetText+"<a href=\""+onClickLink+"\" class = \"standardb_"+color+"\">"+key+"</a>&ensp;";
									c=c+key.length+1;
								}
							}
							document.getElementById("files_cont_alphabet_div").innerHTML=filesContAlphabetText;
							document.getElementById("files_cont_div").innerHTML=alphabetFiles[alphabetFilesHighlightedLetter];
// ------------------- End of Print Alphabet and Result ------------ //

// -------------- LOAD FILE ------------- //
							if (!dir[i]['encoding'] || typeof dir[i]['encoding']==='undefined') dir[i]['encoding']="Windows-1252"; // default
							loadAndShowFile(lang, dir[i]['correctDir']+dir[i]['basename'], dir[i]['modified'], dir[i]['encoding'], dir[i]['first10bytes'], dir.length);
// -------------- End of LOAD FILE ------------- //
									
						} else {
							$("#search_col1").show();
							$("#search_col2").show();
							$("#search_col3").show();
							$("#search_col4").show();
							$("#information_row").hide();
							$("#line_column_number_row").hide();
							$("#files_count_row").hide();
							$("#files_count_alphabet_row").hide();
							$("#textarea_row").hide();
							$("#butt_row").hide();
							$("#error_message_row").hide()
							$("#error_message_with_logout").text(err1);
							$("#error_message_with_logout_row").show();
;
							return false;
						}
					} else {
						$("#search_col1").show();
						$("#search_col2").show();
						$("#search_col3").show();
						$("#search_col4").show();
						$("#information_row").hide();
						$("#line_column_number_row").hide();
						$("#files_count_row").hide();
						$("#files_count_alphabet_row").hide();
						$("#textarea_row").hide();
						$("#butt_row").hide();
						$("#error_message_row").hide();
						$("#error_message_with_logout").text(err1);
						$("#error_message_with_logout_row").show();
						return false;
					}
				}
			};
			xhr.open("GET","scripts/php/dir.php?q="+encodeURIComponent(searchPatt)+"&fileToShow="+(parseInt(getParameterByName('i'))||0),true);
			xhr.send();



		} else {
			window.location.href='html_editor_'+lang+'.html?pattern='+ encodeURIComponent(searchPatt)+'&i=0';
			return;
		}

	} else {
		window.location.href='html_editor_'+lang+'.html?pattern='+ encodeURIComponent('*.html')+'&i=0';
		return;
	}
}



function loadAndShowFile(lang, filename, modified, encoding, first10bytes, totalFiles){


	if (lang.localeCompare('rus')==0) {
		message1="Читается Фаил ";
	}
	if (lang.localeCompare('eng')==0) {
		message1="Reading File ";
	}
	$("#error_message").text(message1+"'"+filename+"'.");


	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xhr=new XMLHttpRequest();
	} else {  // code for IE6, IE5
		xhr=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhr.onreadystatechange = function(){
		if (this.readyState==4 && this.status==200) {
			if (removeBom(this.responseText)=="not logged in") {processSearchAndReplace(lang); return;};
			lines = this.responseText;    //*here we get all lines from text file*
			document.getElementById("textarea_area").value=lines;
			document.getElementById("fileName").innerHTML=filename;
			document.getElementById("fileName").href=filename;
			document.getElementById("dateModified_lbl").innerHTML=formatDate(modified*1000, lang);
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
			generateEncodings(lang, encoding, totalFiles);
			adjustTextareaAndEncodings();
			setLinksValues(lang, encoding, totalFiles);
			document.getElementById("textarea_area").focus();
			setBOM(first10bytes);
			setLineAndColumnNumber(lang);
/*
			save(lang, encoding, filename, 0);
			searchPatt=getParameterByName('pattern'); 
			i=(parseInt(getParameterByName('i'))||0); 
			if (i+1<totalFiles) window.location.href='html_editor_'+lang+'.html?pattern='+ encodeURIComponent(searchPatt)+'&i='+(i+1);
*/
		}
		if (xhr.readyState === 4 && xhr.status !== 200) {
			alert("An HTTP error occurred: " + xhr.status);
/*
			searchPatt=getParameterByName('pattern'); 
			i=(parseInt(getParameterByName('i'))||0); 
			if (i+1<totalFiles) window.location.href='html_editor_'+lang+'.html?pattern='+ encodeURIComponent(searchPatt)+'&i='+(i+1);
*/
		}
	};
	xhr.open("GET","scripts/php/getFileContents.php?filename="+encodeURIComponent(filename),true);
	xhr.send();
}

function switchEncoding(lang, encoding, encodingSwitchTo, encodingOriginal, totalFiles) {
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xhr=new XMLHttpRequest();
	} else {  // code for IE6, IE5
		xhr=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhr.onreadystatechange = function(){
		if (this.readyState==4 && this.status==200) {
			document.getElementById("textarea_area").value=removeBom(this.responseText);
			setLinksValues(lang, encodingSwitchTo, totalFiles);
			generateEncodings(lang, encodingSwitchTo, totalFiles, encodingOriginal);
			encodingDiv.scrollLeft = selEncodingPixelPosInEncodings - encodingDiv.clientWidth/2;
			document.getElementById("textarea_area").focus();
			setLineAndColumnNumber(lang);
		}
	};
	xhr.open("POST", "scripts/php/switchEncoding.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send("q="+ encodeURIComponent(document.getElementById('textarea_area').value)+"&encoding="+ encodeURIComponent(correctEncoding(encoding))+"&encodingSwitchTo="+ encodeURIComponent(correctEncoding(encodingSwitchTo)));

}


function generateEncodings(lang, encoding, totalFiles, encodingOriginal) {
	if (typeof encodingOriginal==='undefined') encodingOriginal = encoding; // default
// ----------------------- PHP mb_list_encodings() values --------- //
allEncodings = [
    "wchar",
    "byte2be",
    "byte2le",
    "byte4be",
    "byte4le",
    "BASE64",
    "UUENCODE",
    "HTML-ENTITIES",
    "Quoted-Printable",
    "7bit",
    "8bit",
    "UCS-4",
    "UCS-4BE",
    "UCS-4LE",
    "UCS-2",
    "UCS-2BE",
    "UCS-2LE",
    "UTF-32",
    "UTF-32BE",
    "UTF-32LE",
    "UTF-16",
    "UTF-16BE",
    "UTF-16LE",
    "UTF-8",
    "UTF-7",
    "UTF7-IMAP",
    "ASCII",
    "EUC-JP",
    "SJIS",
    "eucJP-win",
    "SJIS-win",
    "JIS",
    "ISO-2022-JP",
    "Windows-1252",
    "ISO-8859-1",
    "ISO-8859-2",
    "ISO-8859-3",
    "ISO-8859-4",
    "ISO-8859-5",
    "ISO-8859-6",
    "ISO-8859-7",
    "ISO-8859-8",
    "ISO-8859-9",
    "ISO-8859-10",
    "ISO-8859-13",
    "ISO-8859-14",
    "ISO-8859-15",
    "EUC-CN",
    "CP936",
    "HZ",
    "EUC-TW",
    "BIG-5",
    "EUC-KR",
    "UHC",
    "ISO-2022-KR",
    "Windows-1251",
    "CP866",
    "KOI8-R"
];
// ----------------------- End of PHP mb_list_encodings() values --------- //

	if (lang.localeCompare('rus')==0) {
		message1="Оригинальная Кодировка (в Файле).";
	}
	if (lang.localeCompare('eng')==0) {
		message1="Original Encoding (in File).";
	}

	encoding=correctEncoding(encoding);
	encodingOriginal=correctEncoding(encodingOriginal);
	encodingDiv=document.getElementById("encoding_div");
	encodingDiv.innerHTML="";

	nbspToShow="&nbsp;";
	selEncodingPixelPosInEncodings=0;
	for (c=0; c<allEncodings.length; c++) {
		if (c==allEncodings.length-1) nbspToShow="";
		if (encoding.localeCompare(allEncodings[c])==0) {
			 // before adding red enc.
			selEncodingPixelPosInEncodings=encodingDiv.scrollWidth;
			encodingDiv.innerHTML=encodingDiv.innerHTML+"<label class=\"text_red_blue\"><b>"+allEncodings[c]+"</b></label>";
			// after adding red enc.
			selEncodingPixelPosInEncodings=selEncodingPixelPosInEncodings+((encodingDiv.scrollWidth-selEncodingPixelPosInEncodings)/2);
			encodingDiv.innerHTML=encodingDiv.innerHTML+nbspToShow;
		} else {
			if (encoding.localeCompare(encodingOriginal)!=0 && encodingOriginal.localeCompare(allEncodings[c])==0) {
				encodingDiv.innerHTML=encodingDiv.innerHTML+"<a href=\"javascript:switchEncoding('"+lang+"', '"+encoding+"', '"+allEncodings[c]+"', '"+encodingOriginal+"',"+totalFiles+")\" class = \"standardb_green\" title=\""+message1+"\">"+allEncodings[c]+"</a>"+nbspToShow;
			} else {
				encodingDiv.innerHTML=encodingDiv.innerHTML+"<a href=\"javascript:switchEncoding('"+lang+"', '"+encoding+"', '"+allEncodings[c]+"', '"+encodingOriginal+"',"+totalFiles+")\" class = \"standardb_blue\" >"+allEncodings[c]+"</a>"+nbspToShow;
			}
		}
	}
//	return selEncodingPixelPosInEncodings; - saved as GLOBAL variable
}



function setLinksValues(lang, encoding, totalFiles) {
	document.getElementById("save_link").setAttribute("href", "javascript:save('"+lang+"' ,'"+encoding+"');");
	document.getElementById("save_as_link").setAttribute("href", "javascript:saveas('"+lang+"' ,'"+encoding+"');");
	document.getElementById("download_link").setAttribute("href", "javascript:download('"+lang+"' ,'"+encoding+"');");
	document.getElementById("upload_link").setAttribute("href", "javascript:upload('"+lang+"');");
	document.getElementById("delete_link").setAttribute("href", "javascript:del('"+lang+"',"+totalFiles+");");
}


function setLineAndColumnNumber(lang) {

	lineAndColNumber=getLineNumberAndColumnIndex();
	lineNumber=lineAndColNumber["lineNumber"];
	columnIndex =lineAndColNumber["columnIndex "];
	document.getElementById("line_number_div").innerHTML=lineNumber;
	document.getElementById("column_number_div").innerHTML=columnIndex;

}




function detectBom(bytes) {
	for (var c = 0; c < bytes.length; c++ ) {
		if (c==5) return null; // nothing found
		bytesDetected=detectBomCheckSoFar(bytes.slice(c,c+5));
		if (bytesDetected>0) return bytes.slice(c,c+bytesDetected).concat(detectBom(bytes.slice(bytesDetected)));
	}
	return null; // nothing found
}

function detectBomCheckSoFar(bytes) {

	// UTF-8 - EF BB BF - 239 187 191
	// UTF-16 (BE) - FE FF - 254 255
	// UTF-16 (LE) - FF FE - 255 254
	// UTF-32 (BE) - 00 00 FE FF - 0 0 254 255
	// UTF-32 (LE) - FF FE 00 00 - 255 254 0 0
	// UTF-7 - 1 - 2B 2F 76 38 - 43 47 118 56
	// UTF-7 - 2 - 2B 2F 76 39 - 43 47 118 57
	// UTF-7 - 3 - 2B 2F 76 2B - 43 47 118 43
	// UTF-7 - 4 - 2B 2F 76 2F - 43 47 118 47
	// UTF-7 - 5 - 2B 2F 76 38 2D - 43 47 118 56 45
	// UTF-1 - F7 64 4C - 247 100 76
	// UTF-EBCDIC - DD 73 66 73 - 221 115 102 115
	// SCSU - 0E FE FF - 14 254 255
	// BOCU-1 - FB EE 28 - 251 238 40
	// GB-18030 - 84 31 95 33 - 132 49 149 51
	
	if (typeof bytes[1] !== 'undefined') { // first 2 bytes exists
		if (bytes[0]=="fe" && bytes[1]=="ff") return 2; // UTF-16 (BE)
		if (bytes[0]=="ff" && bytes[1]=="fe") return 2; // UTF-16 (LE)
		if (bytes[0]=="ff" && bytes[1]=="d8") return 2; // JPG
	} 
	if (typeof bytes[2] !== 'undefined') { // first 3 bytes exists
		if (bytes[0]=="ef" && bytes[1]=="bb" && bytes[2]=="bf") return 3; // UTF-8
		if (bytes[0]=="f7" && bytes[1]=="64" && bytes[2]=="4c") return 3; // UTF-1
		if (bytes[0]=="0e" && bytes[1]=="fe" && bytes[2]=="ff") return 3; // SCSU
		if (bytes[0]=="fb" && bytes[1]=="ee" && bytes[2]=="28") return 3; // BOCU-1
	}
	if (typeof bytes[3] !== 'undefined') { // first 4 bytes exists
		if (bytes[0]=="00" && bytes[1]=="00" && bytes[2]=="fe" && bytes[3]=="ff") return 4; // UTF-32 (BE)
		if (bytes[0]=="ff" && bytes[1]=="fe" && bytes[2]=="00" && bytes[3]=="00") return 4; // UTF-32 (LE)
		if (bytes[0]=="2b" && bytes[1]=="2f" && bytes[2]=="76" && bytes[3]=="38") return 4; // UTF-7 - 1
		if (bytes[0]=="2b" && bytes[1]=="2f" && bytes[2]=="76" && bytes[3]=="39") return 4; // UTF-7 - 2
		if (bytes[0]=="2b" && bytes[1]=="2f" && bytes[2]=="76" && bytes[3]=="2b") return 4; // UTF-7 - 3
		if (bytes[0]=="2b" && bytes[1]=="2f" && bytes[2]=="76" && bytes[3]=="2f") return 4; // UTF-7 - 4
		if (bytes[0]=="dd" && bytes[1]=="73" && bytes[2]=="66" && bytes[3]=="73") return 4; // UTF-EBCDIC
		if (bytes[0]=="84" && bytes[1]=="31" && bytes[2]=="95" && bytes[3]=="33") return 4; // GB-18030
	}
	if (typeof bytes[4] !== 'undefined') { // first 5 bytes exists
		if (bytes[0]=="2b" && bytes[1]=="2f" && bytes[2]=="76" && bytes[3]=="38" && bytes[4]=="2d") return 5; // UTF-7 - 5
	}
	return 0;
}

function logAllBOMs(dir) {
	var i=0;
	for (i=0; i<dir.length; i++) {
		console.log(i+" BOM = "+detectBom(dir[i]['first10bytes']));
	}
}

function setBOM(first10bytes) {

	var i=0;
	bomDetected=detectBom(first10bytes);

	if (bomDetected) {
		bomDetected.pop();
		bomDiv=document.getElementById("bom_div");
		bomDiv.innerHTML="";
		for (i=0; i<bomDetected.length; i++) {
			bomDiv.innerHTML=bomDiv.innerHTML+bomDetected[i]+"&nbsp;";
		}
	}

	bomDiv2=document.getElementById("bom_div2");
	bomDiv2.innerHTML="";
	for (var j=i; j<first10bytes.length; j++) {
		if (j==i) {
			bomDiv2.innerHTML=bomDiv2.innerHTML+first10bytes[j];
		} else {
			bomDiv2.innerHTML=bomDiv2.innerHTML+"&nbsp;"+first10bytes[j];
		}
	}
}

function setTextAreaChanged(lang, isChanged) {
	if (typeof isChanged==='undefined') isChanged = 1; // isChanged

	changedDiv=document.getElementById("textarea_changed_div");
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
// ----------------------- processMenu PHP --------- //

function getLocalStorageData(par) {
	if (typeof localStorage[par]==="undefined") {
		return {};
	} else {
		return JSON.parse(localStorage[par]);
	}
}

function processSearchAndReplace(lang) {



	if (lang.localeCompare('rus')==0) {
		prompt1="Введите Имя Пользователя";
		err1="Ввод Данных Отменён.";
		err2="Неверное Имя Пользователя.";
		message1="Авторизация.";
	}
	if (lang.localeCompare('eng')==0) {
		prompt1="Enter Your Username";
		err1="Data Input Cancelled.";
		err2="Incorrect Username.";
		message1="Authorization.";
	}


// hide all unnecessary info
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

	var ua = navigator.userAgent.toLowerCase();
	isAndroid = ua.indexOf("android") && ua.indexOf("mobile") > -1; 
	if (isAndroid) {
		$("#error_message").text("HTML Editor is not supported for Android OS.");
		return true; 
	}

	processPageResize(1);

// -------------- Authorization ------------- //

	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xhr=new XMLHttpRequest();
	} else {  // code for IE6, IE5
		xhr=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhr.onreadystatechange = function(){
        	if (this.readyState==4 && this.status==200) {
			//console.log("checklogin - "+this.responseText);
			// log in

			var respNoBOM=removeBom(this.responseText);
			if (respNoBOM.substring(0, 2) == "<?") {
				$("#error_message").text("PHP is not supported, HTML Editor is not functioning.");
				return;
			};

			if (JSON.parse(respNoBOM)[0]!=1){

				locStPar="HTML_editor";
				HTMLEditorData=getLocalStorageData(locStPar);
				username1="";
				if (typeof HTMLEditorData["username"]!== "undefined") username1=HTMLEditorData["username"];

				username = prompt(prompt1, username1);

				if (username != null) {
					HTMLEditorData["username"]=username;
					localStorage["HTML_editor"]=JSON.stringify(HTMLEditorData);
				}

				if (username == null || username .localeCompare( "")==0) {
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
				

				xhr.onreadystatechange = function(){
					if (this.readyState==4 && this.status==200) {
						//console.log("checkUsernamePassword - "+this.responseText);
						//alert(this.responseText);
						if (JSON.parse(removeBom(this.responseText))[0]!=1){
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
				};
				xhr.open("GET","scripts/php/checkUsernamePassword.php?username="+encodeURIComponent(username), true);
				xhr.send();
			} else {
				processSearch(lang);
			}
        	}
	};
	xhr.open("GET","scripts/php/checkLogIn.php", true);
	xhr.send();
// -------------- End Of Authorization ------------- //

}
// ----------------------- End of processMenu PHP --------- //



function adjustTextareaAndEncodings() {
	scrollDiv=document.getElementById('scrollDiv');
	encodingDiv=document.getElementById("encoding_div");
	if (scrollDiv === null || encodingDiv === null || scrollDiv.offsetParent === null || encodingDiv.offsetParent === null) return;

	if (window.devicePixelRatio ==0.25) {
		encodingDiv.style.setProperty("max-width", "400px");
	} else {
		encodingDiv.style.setProperty("max-width", "440px");
	}

	rowsHeight=parseInt($( "#information_row" ).css( "height" ));
	rowsHeight=rowsHeight+parseInt($( "#line_column_number_row" ).css( "height" ));
	rowsHeight=rowsHeight+parseInt($( "#files_count_alphabet_row" ).css( "height" ));
	rowsHeight=rowsHeight+parseInt($( "#files_count_row" ).css( "height" ));
	rowsHeight=rowsHeight+parseInt($( "#butt_row" ).css( "height" ));

	if (window.devicePixelRatio <0.75 && window.devicePixelRatio !=0.25) {
		$( "#textarea_area" ).css( "height", (menuHeight-rowsHeight-25) + "px");
	} else  if (window.devicePixelRatio ==0.25){
		$( "#textarea_area" ).css( "height", (menuHeight-rowsHeight-35) + "px");
	} else {
		$( "#textarea_area" ).css( "height", (menuHeight-rowsHeight-19) + "px");
	}

	// set correct scoll position
	// selEncodingPixelPosInEncodings - pixels from left to sel. encoding
	// encodingDiv.scrollWidth - total pixels in encodings
	// encodingDiv.clientWidth - adjusted encoding div width
	encodingDiv.scrollLeft = selEncodingPixelPosInEncodings - encodingDiv.clientWidth/2;
}

