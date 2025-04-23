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

function clearTmp() {
	
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xhr=new XMLHttpRequest();
	} else {  // code for IE6, IE5
		xhr=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhr.onreadystatechange = function(){
        	if (this.readyState==4 && this.status==200) {
        	}
	};
	xhr.open("GET","scripts/php/deleteDir.php?q=tmp/",true);
	xhr.send();
	
}

function replace(lang) {
	if (lang.localeCompare("eng")==0) {
		message1 = "Really Replace '";
		message2 = "' to '";
		message3 = "' in all Documents, Matching Pattern '";
		message4 = "How-To &blacktriangleright; HTML Editor";
		message5 = "Progress: ";
		message6 = "Please Define WHAT to Replace.";
		message7 = "Please Define WHAT TO to Replace.";
		message8 = "Files Replaced Successfully. Refresh Page.";
		message9 = "File Replaced Successfully. Refresh Page.";
		message10 = "Statistics: ";
		message11 = " Replacements Were Made in ";
		message12 = " Files of ";
		message13 = " File of ";
	}
	if (lang.localeCompare("rus")==0) {
		message1 = "Действительно Заменить '";
		message2 = "' на '";
		message3 = "' во Всех Документах, Соответстующих Критерию '";
		message4 = "How-To &blacktriangleright; HTML Редактор";
		message5 = "Прогресс: ";
		message6 = "Пожалуйста Определите ЧТО Заменить.";
		message7 = "Пожалуйста Определите НА ЧТО Заменить.";
		message8 = "Файлы Заменены Успешно. Обновите Страницу.";
		message9 = "Фаил Заменен Успешно. Обновите Страницу.";
		message10 = "Статистика: ";
		message11 = " Замен сделано в ";
		message12 = " Файлах из ";
		message13 = " Файле из ";
	}
	var replaceWhat="";
	var replaceTo="";

	// -------------- Selected Text ------------- //
	if (replaceWhat.localeCompare("") == 0) {
		if (document.selection != undefined)  { // IE version
			document.getElementById('textarea_area').focus();
			replaceWhat = document.selection.createRange().text;
		} else if (document.getElementById('textarea_area').selectionStart != undefined) { // Mozilla version
			document.getElementById('textarea_area').focus();
			var startPos = document.getElementById('textarea_area').selectionStart;
			var endPos = document.getElementById('textarea_area').selectionEnd;
			replaceWhat = document.getElementById('textarea_area').value.substring(startPos, endPos)
		}
	}
	// -------------- End If Selected Text ------------- //

	replaceWhat = prompt(message6, replaceWhat);
	if (replaceWhat.localeCompare("")==0) {alert(message6); return;}
	replaceTo = prompt(message7, replaceTo);
	var confirm = window.confirm(message1+replaceWhat+message2+replaceTo+message3+getParameterByName('pattern')+"' ?");
	if (!confirm) return;

	$("#replace_div").hide();

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
	// process data here
				if (dir.length>0) {

					i=0;
					statisticsTimesReplaced=0;
					statisticsFilesProcessed=0;
					correctDir_i=dir[i]['dirname'].substring(6);
					if (correctDir_i!="") correctDir_i=correctDir_i+"/";
// -------------- Check if fresh saved copy of file exists AND USE THIS ------------- //
					if (window.XMLHttpRequest) {
						// code for IE7+, Firefox, Chrome, Opera, Safari
						xhr_trigger_by_save=new XMLHttpRequest();
					} else {  // code for IE6, IE5
						xhr_trigger_by_save=new ActiveXObject("Microsoft.XMLHTTP");
					}
					xhr_trigger_by_save.onreadystatechange = function(){;
						if (this.readyState==4 && this.status==200) {
							document.getElementById("caption_div").innerHTML=message5 + (i+1) + "/" + dir.length;
							//console.log(this.responseText);
							dirTmp = JSON.parse(removeBom(this.responseText));
							var freshCopyExists=0;
							var freshCopyFileLast="";
							// i - Highlighted File, j - List of Temporal Files
							for (j = 0; j < dirTmp.length; j++) {
							    // dirTmp[j]['basename'] - Name + ext
							    // dirTmp[j]['extension'] - ext
							    // dirTmp[j]['filename'] - Name
								lastBasenamePos=dirTmp[j]['basename'].lastIndexOf(dir[i]['basename']);
								if (lastBasenamePos==-1) {
									if (freshCopyExists) break;
									continue;
								}
									// check if after last BasenamePos at least 1 symbol
								if (lastBasenamePos+dir[i]['basename'].length >= dirTmp[j]['basename'].length) {
									if (freshCopyExists) break;
									continue;
								};
								freshCopyExists=1;
								freshCopyFileLast=dirTmp[j];// search for last one
							}
							if (freshCopyExists) {
								// add fresh copy instead original one
								if (window.XMLHttpRequest) {
									// code for IE7+, Firefox, Chrome, Opera, Safari
									xhr=new XMLHttpRequest();
								} else {  // code for IE6, IE5
									xhr=new ActiveXObject("Microsoft.XMLHTTP");
								}
								xhr.onreadystatechange = function(){
									if (this.readyState==4 && this.status==200) {
										encodings= JSON.parse(removeBom(this.responseText));
										encoding = encodings ['encoding'];
										if (window.XMLHttpRequest) {
											// code for IE7+, Firefox, Chrome, Opera, Safari
											xhr=new XMLHttpRequest();
										} else {  // code for IE6, IE5
											xhr=new ActiveXObject("Microsoft.XMLHTTP");
										}
										xhr.onreadystatechange = function(){
											if (this.readyState==4 && this.status==200) {
												lines = this.responseText;    //*here we get all lines from text file*
												out=processReplace(lang, encoding, replaceWhat, replaceTo, statisticsTimesReplaced, statisticsFilesProcessed, dir.length, i, correctDir_i, dir[i]['basename'], lines, message4, message8, message9, message10, message11, message12, message13);
												statisticsTimesReplaced=out['statisticsTimesReplaced'];
												statisticsFilesProcessed=out['statisticsFilesProcessed'];
												i=out['i'];
											}
										};
										xhr.open("GET","scripts/php/tmp/"+correctDir_i+freshCopyFileLast['basename'],true);
										encoding_c=encoding;
										if (encoding.substr(0,5).localeCompare('UTF-7')==0) encoding_c='UTF-7';
										xhr.overrideMimeType(getMIMEtype(dir[i]['extension'])+'; charset='+encoding_c+';');
										xhr.send();
									}
								};
								xhr.open("GET", "scripts/php/detectEncoding.php?filename=tmp/" + encodeURIComponent(correctDir_i+freshCopyFileLast['basename']), true);
								xhr.send();
							} else {

								// current copy
								if (window.XMLHttpRequest) {
									// code for IE7+, Firefox, Chrome, Opera, Safari
									xhr=new XMLHttpRequest();
								} else {  // code for IE6, IE5
									xhr=new ActiveXObject("Microsoft.XMLHTTP");
								}
								xhr.onreadystatechange = function(){
									if (this.readyState==4 && this.status==200) {
										encodings= JSON.parse(removeBom(this.responseText));
										encoding = encodings ['encoding'];
										if (window.XMLHttpRequest) {
											// code for IE7+, Firefox, Chrome, Opera, Safari
											xhr=new XMLHttpRequest();
										} else {  // code for IE6, IE5
											xhr=new ActiveXObject("Microsoft.XMLHTTP");
										}
										xhr.onreadystatechange = function(){
											if (this.readyState==4 && this.status==200) {
												lines = this.responseText;    //*here we get all lines from text file*
												out=processReplace(lang, encoding, replaceWhat, replaceTo, statisticsTimesReplaced, statisticsFilesProcessed, dir.length, i, correctDir_i, dir[i]['basename'], lines, message4, message8, message9, message10, message11, message12, message13);
												statisticsTimesReplaced=out['statisticsTimesReplaced'];
												statisticsFilesProcessed=out['statisticsFilesProcessed'];
												i=out['i'];
											}
										};
										xhr.open("GET",correctDir_i+dir[i]['basename'],true);
										encoding_c=encoding;
										if (encoding.substr(0,5).localeCompare('UTF-7')==0) encoding_c='UTF-7';
										xhr.overrideMimeType(getMIMEtype(dir[i]['extension'])+'; charset='+encoding_c+';');
										xhr.send();

									}
								};
								xhr.open("GET", "scripts/php/detectEncoding.php?filename=../../" + encodeURIComponent(correctDir_i+dir[i]['basename']), true);
								xhr.send();
							}
						}
					};
					xhr_trigger_by_save.open("GET","scripts/php/dir.php?q=tmp/"+encodeURIComponent(correctDir_i+dir[i]['basename'])+"*",true);
					xhr_trigger_by_save.send();
// -------------- End of Check if fresh saved copy of file exists AND USE THIS ------------- //
				} else {
					return false;
				}
			}
		};
		xhr.open("GET","scripts/php/dir.php?q="+"../../"+encodeURIComponent(searchPatt),true);
		xhr.send();
	} else {
		//window.location.href='html_editor_'+lang+'.html?pattern='+ encodeURIComponent('*.html')+'&i=0';
	}

	
}





// return statisticsTimesReplaced, statisticsFilesProcessed, i
function processReplace(lang, encoding, replaceWhat, replaceTo, statisticsTimesReplaced, statisticsFilesProcessed, statisticsTotalFilesToProcess, i, correctDir_i,  filename, lines, message4, message8, message9, message10, message11, message12, message13) {

	matchPos = lines.toLowerCase().indexOf(replaceWhat.toLowerCase());
	statisticsTimesReplaced_o=statisticsTimesReplaced;
	while (matchPos!=-1) {
		statisticsTimesReplaced++;
		lines=lines.substring(0, matchPos)+replaceTo+lines.substring(matchPos+replaceWhat.length);
		matchPos = lines.toLowerCase().indexOf(replaceWhat.toLowerCase(), matchPos+replaceTo.length);
	}
	if (statisticsTimesReplaced!=statisticsTimesReplaced_o) statisticsFilesProcessed++;
	i++;
	saveNextDirPath="scripts/php/dir.php?q=tmp/"+encodeURIComponent(correctDir_i)+"*";
	showMessage=0;
	fullMessage="";
	if (i==statisticsTotalFilesToProcess) {
		saveNextDirPath="";
		document.getElementById("caption_div").innerHTML=message4;
		showMessage=1;
		if (statisticsTotalFilesToProcess!=1) { fullMessage=message8; } else {  fullMessage=message9; }
		fullMessage=fullMessage+"\n"+message10+statisticsTimesReplaced+message11+statisticsFilesProcessed;
		if (statisticsFilesProcessed!=1) { fullMessage=fullMessage+message12; } else {  fullMessage=fullMessage+message13; }
		fullMessage=fullMessage+statisticsTotalFilesToProcess+".";
	}
	if (statisticsTimesReplaced!=statisticsTimesReplaced_o) {
			save(lang, encoding, correctDir_i+filename, showMessage, fullMessage, 0, saveNextDirPath, lines) ;
	} else { // if no save occured
		if (i!=statisticsTotalFilesToProcess) {
				xhr_trigger_by_save.open("GET", saveNextDirPath, true);
				xhr_trigger_by_save.send();
		} else {
				$("#replace_div").show();
				alert(fullMessage);
		}
	}
	return {
		"statisticsTimesReplaced": statisticsTimesReplaced,
		"statisticsFilesProcessed": statisticsFilesProcessed,
		"i": i
	};
}


function getBOM(encoding) {
	if (encoding == 'UTF-8') return 'UTF8_BOM';
	if (encoding == 'UTF-32BE') return 'UTF32_BIG_ENDIAN_BOM';
	if (encoding == 'UTF-32LE') return 'UTF32_LITTLE_ENDIAN_BOM';
	if (encoding == 'UTF-16BE') return 'UTF16_BIG_ENDIAN_BOM';
	if (encoding == 'UTF-16LE') return 'UTF16_LITTLE_ENDIAN_BOM';
	if (encoding == 'UTF-7-1') return 'UTF7_BOM1';
	if (encoding == 'UTF-7-2') return 'UTF7_BOM2';
	if (encoding == 'UTF-7-3') return 'UTF7_BOM3';
	if (encoding == 'UTF-7-5') return 'UTF7_BOM4';
	if (encoding == 'UTF-7-1') return 'UTF7_BOM5';
	if (encoding == 'UTF-1') return '\uf7644c';
	if (encoding == 'UTF-EBCDIC') return 'UTFEBCDIC_BOM';
	if (encoding == 'SCSU') return 'SCSU_BOM';
	if (encoding == 'BOCU-1') return 'BOCU1_BOM';
	if (encoding == 'GB-18030') return 'GB18030_BOM';
	return 0;
}



function download(lang, encoding, filename) {
	if (typeof encoding==='undefined') encoding = 'UTF-8'; // default
	if (typeof filename==='undefined') filename = ""; // default
	
	encoding_c=encoding;
	if (encoding.substr(0,5).localeCompare('UTF-7')==0) encoding_c='UTF-7';
	
	if (filename.localeCompare("")==0) { 
		filename=document.getElementById("fileName").getAttribute("href");
		filename=filename.substring(filename.lastIndexOf("/")+1);
	}
	value = document.getElementById('textarea_area').value;

	filetype= getMIMEtype(filename.substring(filename.lastIndexOf(".")));

	var pom = document.createElement('a');
	if (getBOM(encoding)) {
		pom.setAttribute('href', 'data: '+filetype+';charset='+encoding_c+';,' + '\ufeff' + encodeURIComponent(value)); // Added BOM too
	} else {
		pom.setAttribute('href', 'data: '+filetype+';charset='+encoding_c+';,' + encodeURIComponent(value));
	}

	pom.setAttribute('download', filename);
	if (document.createEvent) {
		if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) { // IE
			if (getBOM(encoding)) {
				blobObject = new Blob(['\ufeff'+value], { type: filetype+";charset="+encoding_c+";" }); // Added BOM too
			} else {
				blobObject = new Blob([value], { type: filetype+";charset="+encoding_c+";" });
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

}

function saveAndSetModified(lang, encoding, filename, showMessage, message) {

	if (typeof filename==='undefined') filename = document.getElementById("fileName").getAttribute("href"); // default

	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xhr_trigger_by_save=new XMLHttpRequest();
	} else {  // code for IE6, IE5
		xhr_trigger_by_save=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhr_trigger_by_save.onreadystatechange = function(){
		if (this.readyState==4 && this.status==200) {
			dir =  JSON.parse(removeBom(this.responseText));
			document.getElementById("dateModified_lbl").innerHTML=formatDate(dir[0]['modified']);
		}
	};
	xhr_trigger_by_save.open("GET","scripts/php/dir.php?q="+"../../"+encodeURIComponent(filename), true);
	save(lang, encoding, filename, showMessage, message, null, "scripts/php/dir.php?q="+"../../"+encodeURIComponent(filename));
}


function save(lang, encoding, filename, showMessage, message, saveTmp, triggerNextDirPath, data) {
	if (typeof encoding==='undefined') encoding = "UTF-8"; // default
	if (typeof filename==='undefined') filename = document.getElementById("fileName").getAttribute("href"); // default
	if (typeof showMessage==='undefined') showMessage = 1; // default
	if (typeof message==='undefined') message = ""; // default
	if (typeof saveTmp==='undefined') saveTmp = 0; // default
	if (typeof triggerNextDirPath==='undefined') triggerNextDirPath = ""; // default
	if (typeof data==='undefined') data = ""; // default
	
	if (lang.localeCompare('rus')==0) {
		if (message.localeCompare("")==0) {message1="Фаил Сохранён Успешно.";} else {message1=message;}
		message2="Невозможно Открыть Фаил";
	}
	if (lang.localeCompare('eng')==0) {
		if (message.localeCompare("")==0) {message1="File Saved Successfully.";} else {message1=message;}
		message2="Unable to Open File";
	}
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xhr=new XMLHttpRequest();
	} else {  // code for IE6, IE5
		xhr=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhr.onreadystatechange = function(){
        	if (this.readyState==4 && this.status==200) {
				if (removeBom(this.responseText).localeCompare('Unable to open file!')==0) {
					alert(message2+" - '"+filename+"'.");
				} else {
					if (!saveTmp) {
						save (lang, encoding, filename+"_"+Date.now().valueOf(), showMessage, message1, 1, triggerNextDirPath, data);
					} else {
						if (showMessage) {
							$("#replace_div").show();
							alert(message1);
						}
						if (triggerNextDirPath.localeCompare("")!=0) {
							xhr_trigger_by_save.open("GET", triggerNextDirPath, true);
							xhr_trigger_by_save.send();		
						} else {
							// message already controlled by showMessage
						}
						return;
					}
				}
        	}
	};
	xhr.open("POST", "scripts/php/save.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	if (data.localeCompare("")==0) {
		data=document.getElementById('textarea_area').value;
	}
	if (!saveTmp) {
		xhr.send("filename=../../"+ encodeURIComponent(filename)+"&q="+ encodeURIComponent(data)+"&encoding="+ encodeURIComponent(encoding));
	} else {
		xhr.send("filename=tmp/"+ encodeURIComponent(filename)+"&q="+ encodeURIComponent(data)+"&encoding="+ encodeURIComponent(encoding));
	}
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

		$.ajax({
    			url:"../../"+newFileName,
    			type:'HEAD',
   			error: function()
    			{
				//file not exists
				if (filename_orig_dir.localeCompare(newFileName_dir)==0) {
					message_show=message1;
				} else {
					message_show=message2;
				}
				save(lang, encoding, newFileName, 1, message_show);
   		 	},
    			success: function()
    			{
        			//file exists
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
				if (document.getElementById("fileName").getAttribute("href").localeCompare(newFileName)==0) {
					saveAndSetModified(lang, encoding, newFileName, 1, message2);
				} else {
					save(lang, encoding, newFileName, 1, message2);
				}
    			}
		});
	}
}


function logout(lang) {
	clearTmp();
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
			window.location.href='html_editor_'+lang+'.html?pattern='+ encodeURIComponent(getParameterByName('pattern'))+'&i='+ encodeURIComponent(getParameterByName('i'));
        	}
	};
	xhr.open("GET","scripts/php/logOut.php",true);
	xhr.send();
}

$("#search_pattern").on('keyup', function (e) {
    if (e.keyCode == 13) {
        searchPattern();
    }
});


function searchPattern(lang) {
	pattern=document.getElementById('search_pattern').value;
	if (pattern.length>0 && pattern.substring(pattern.length-1).localeCompare("/")==0) pattern=pattern+"*";
	pattern=encodeURIComponent(pattern);
	window.location.href='html_editor_'+lang+'.html?pattern='+pattern+'&i=0';
}

function showInformation(lang) {
	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xhr=new XMLHttpRequest();
	} else {  // code for IE6, IE5
		xhr=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhr.onreadystatechange = function(){
		if (this.readyState==4 && this.status==200) {
			//console.log(this.responseText);
			dir_ = JSON.parse(removeBom(this.responseText));
// -------------- Check if fresh saved copy of file exists AND LOAD FILE ------------- //
			if (window.XMLHttpRequest) {
				// code for IE7+, Firefox, Chrome, Opera, Safari
				xhr=new XMLHttpRequest();
			} else {  // code for IE6, IE5
				xhr=new ActiveXObject("Microsoft.XMLHTTP");
			}
			xhr.onreadystatechange = function(){
				if (this.readyState==4 && this.status==200) {
					//console.log(this.responseText);
					dirTmp_ = JSON.parse(removeBom(this.responseText));
					var freshCopyExists=0;
					var freshCopyFileLast="";
					// j - List of Temporal Files
					for (j_ = 0; j_ < dirTmp_.length; j_++) {
						// dirTmp[j]['basename'] - Name + ext
						// dirTmp[j]['extension'] - ext
						// dirTmp[j]['filename'] - Name
						lastBasenamePos=dirTmp_[j_]['basename'].lastIndexOf("processSearchAndReplace.js");
						if (lastBasenamePos==-1) {
							if (freshCopyExists) break;
							continue;
						}

						// check if after last BasenamePos at least 1 symbol
						if (lastBasenamePos+"processSearchAndReplace.js".length >= dirTmp_[j_]['basename'].length) {
							if (freshCopyExists) break;
							continue;
						};

						freshCopyExists=1;
						freshCopyFileLast=dirTmp_[j_];// search for last one
					}
					if (freshCopyExists){
						lastModification=freshCopyFileLast['modified'];
					} else {
						lastModification=dir_[0]['modified'];
					}
					if (lang.localeCompare('rus')==0) infoText="HTML Редактор Версия 1.0. Последнее Изменение - ";
					if (lang.localeCompare('eng')==0) infoText="HTML Editor Version 1.0. Last Modification - ";
					alert(infoText+formatDate(lastModification));
				}
			};
			xhr.open("GET","scripts/php/dir.php?q=tmp/scripts/processSearchAndReplace.js"+"*",true);
			xhr.send();
		}
	};
	xhr.open("GET","scripts/php/dir.php?q="+"../"+encodeURIComponent("processSearchAndReplace.js"),true);
	xhr.send();

// -------------- End of Check if fresh saved copy of file exists AND LOAD FILE ------------- //

}


function processSearch(lang) {

	/////////////// Process Search//////////////////
	$("#search_col1").show();
	$("#search_col2").show();
	$("#search_col3").show();
	$("#search_col4").show();
	$("#log_out").show();
	$("#files_count_row").show();
	$("#files_count_alphabet_row").show();
	$("#textarea_row").show();
	$("#butt_row").show();
	$("#error_message_row").hide();
	searchPatt=getParameterByName('pattern'); 

    if (searchPatt && searchPatt!="") {
		document.getElementById('search_pattern').value=searchPatt;
		if (lang.localeCompare('rus')==0) {
			err1="Не Найдено Файлов, Соответствующих Критерию Поиска - '" + searchPatt + "'.";
		}
		if (lang.localeCompare('eng')==0) {
			err1="No Files, Matching Criteria '" + searchPatt + "', Found.";
		}


		i=getParameterByName('i'); 
		if (i && i!="") {
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
	// process data here
					if (dir.length>0) {
						if (i<0 || i>=dir.length) window.location.href='html_editor_'+lang+'.html?pattern='+ encodeURIComponent(searchPatt)+'&i=0';
						if (dir[i]!="") {
							correctDir_i=dir[i]['dirname'].substring(6);
							if (correctDir_i!="") correctDir_i=correctDir_i+"/";
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
								correctDir_j=dir[j]['dirname'].substring(6);
								if (correctDir_j!="") correctDir_j=correctDir_j+"/";
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
								filesContText=filesContText+"<a href=\"html_editor_"+lang+".html?pattern="+encodeURIComponent(getParameterByName('pattern'))+"&i="+j+"\" class = \"standardb_"+colorShow+"\" title=\""+correctDir_j+dir[j]['basename']+"\">"+a+"</a>&ensp;";
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
							c=0;
							filesContAlphabetText="";
							for (var key in alphabetFiles) {
								if (alphabetFiles.hasOwnProperty(key)) {
									if (c+key.length+1>75) {
										filesContAlphabetText=filesContAlphabetText+"<br>";
										c=0;
									}
									correctDir_j=dir[alphabetFilesFirstIndex[key]]['dirname'].substring(6);
									if (correctDir_j!="") correctDir_j=correctDir_j+"/";
									if (key.localeCompare(alphabetFilesHighlightedLetter)==0) {
										color="red";
									} else {
										color="blue";
									}
									filesContAlphabetText=filesContAlphabetText+"<a href=\"html_editor_"+lang+".html?pattern="+encodeURIComponent(getParameterByName('pattern'))+"&i="+alphabetFilesFirstIndex[key]+"\" class = \"standardb_"+color+"\">"+key+"</a>&ensp;";
									c=c+key.length+1;
								}
							}
							document.getElementById("files_cont_alphabet_div").innerHTML=filesContAlphabetText;
							document.getElementById("files_cont_div").innerHTML=alphabetFiles[alphabetFilesHighlightedLetter];
// ------------------- End of Print Alphabet and Result ------------ //

// -------------- Check if fresh saved copy of file exists AND LOAD FILE ------------- //
							if (window.XMLHttpRequest) {
								// code for IE7+, Firefox, Chrome, Opera, Safari
								xhr=new XMLHttpRequest();
							} else {  // code for IE6, IE5
								xhr=new ActiveXObject("Microsoft.XMLHTTP");
							}
							xhr.onreadystatechange = function(){
								if (this.readyState==4 && this.status==200) {
									//console.log(this.responseText);
									dirTmp = JSON.parse(removeBom(this.responseText));
									var freshCopyExists=0;
									var freshCopyFileLast="";
									// i - Highlighted File, j - List of Temporal Files
									for (j = 0; j < dirTmp.length; j++) {
									    // dirTmp[j]['basename'] - Name + ext
									    // dirTmp[j]['extension'] - ext
									    // dirTmp[j]['filename'] - Name
										lastBasenamePos=dirTmp[j]['basename'].lastIndexOf(dir[i]['basename']);
										if (lastBasenamePos==-1) {
											if (freshCopyExists) break;
											continue;
										}

										// check if after last BasenamePos at least 1 symbol
										if (lastBasenamePos+dir[i]['basename'].length >= dirTmp[j]['basename'].length) {
											if (freshCopyExists) break;
											continue;
										};

										freshCopyExists=1;
										freshCopyFileLast=dirTmp[j];// search for last one
									}
									
									if (freshCopyExists) {
										// add fresh copy instead original one
										loadAndShowFile(lang, correctDir_i+dir[i]['basename'], dir[i]['extension'], freshCopyFileLast['modified'], "scripts/php/tmp/"+correctDir_i+freshCopyFileLast['basename'], "tmp/"+ encodeURIComponent(correctDir_i+freshCopyFileLast['basename']));
									} else {
										// original file
										loadAndShowFile(lang, correctDir_i+dir[i]['basename'], dir[i]['extension'], dir[i]['modified'], correctDir_i+dir[i]['basename'], "../../"+ encodeURIComponent(correctDir_i+dir[i]['basename']));
									}
								}
										
							};
							xhr.open("GET","scripts/php/dir.php?q=tmp/"+encodeURIComponent(correctDir_i+dir[i]['basename'])+"*",true);
							xhr.send();
									
// -------------- End of Check if fresh saved copy of file exists AND LOAD FILE ------------- //
									
						
						} else {
							$("#files_count_row").hide();
							$("#files_count_alphabet_row").hide();
							$("#textarea_row").hide();
							$("#butt_row").hide();
							$("#error_message").text(err1);
							$("#error_message_row").show();
							return false;
						}
					} else {
						$("#files_count_row").hide();
						$("#files_count_alphabet_row").hide();
						$("#textarea_row").hide();
						$("#butt_row").hide();
						$("#error_message").text(err1);
						$("#error_message_row").show();
						return false;
					}
				}
			};
			xhr.open("GET","scripts/php/dir.php?q="+"../../"+encodeURIComponent(searchPatt),true);
			xhr.send();



		} else {
			window.location.href='html_editor_'+lang+'.html?pattern='+ encodeURIComponent(searchPatt)+'&i=0';
		}

	} else {
		window.location.href='html_editor_'+lang+'.html?pattern='+ encodeURIComponent('*.html')+'&i=0';
	}
}



function loadAndShowFile(lang, filename, extension, modified, filenameToLoadComplete, filenameToLoadFromPHP){


	if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xhr=new XMLHttpRequest();
	} else {  // code for IE6, IE5
		xhr=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhr.onreadystatechange = function(){
		if (this.readyState==4 && this.status==200) {
			encodings=JSON.parse(removeBom(this.responseText));
			encoding=encodings['encoding'];
			if (window.XMLHttpRequest) {
				// code for IE7+, Firefox, Chrome, Opera, Safari
				xhr=new XMLHttpRequest();
			} else {  // code for IE6, IE5
				xhr=new ActiveXObject("Microsoft.XMLHTTP");
			}
			xhr.onreadystatechange = function(){
				if (this.readyState==4 && this.status==200) {
					lines = this.responseText;    //*here we get all lines from text file*
					document.getElementById("textarea_area").value=lines;
					document.getElementById("fileName").innerHTML=filename;
					document.getElementById("fileName").href=filename;
					document.getElementById("dateModified_lbl").innerHTML=formatDate(modified);
					generateEncodings(encoding);
					setTextAreaHeight();
					setLinksValues(lang, encoding);
				}
			};
			xhr.open("GET",filenameToLoadComplete,true);
			encoding_c=encoding;
			if (encoding.substr(0,5).localeCompare('UTF-7')==0) encoding_c='UTF-7';
			xhr.overrideMimeType(getMIMEtype(extension)+'; charset='+encoding_c+';');
			xhr.send();
		}
	};
	xhr.open("GET", "scripts/php/detectEncoding.php?filename="+filenameToLoadFromPHP, true);
	xhr.send();

}



function generateEncodings(encoding) {

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
	encoding_c=encoding;
	if (encoding.substr(0,5).localeCompare('UTF-7')==0) encoding_c='UTF-7';	
	nbspToShow="&nbsp;";
	encodingsValues="";
	for (c=0; c<allEncodings.length; c++) {
		if (c==allEncodings.length-1) nbspToShow="";
		if (encoding_c.localeCompare(allEncodings[c])==0) {
			encodingsValues=encodingsValues+"<a href=\"javascript:switchEncoding('"+encoding+"', '"+allEncodings[c]+"')\" class = \"standardb_red\" >"+allEncodings[c]+"</a>"+nbspToShow;
		} else {
			encodingsValues=encodingsValues+"<a href=\"javascript:switchEncoding('"+encoding+"', '"+allEncodings[c]+"')\" class = \"standardb_blue\" >"+allEncodings[c]+"</a>"+nbspToShow;
		}
	}


	document.getElementById("encoding_div").innerHTML=encodingsValues;
	$("#encoding_div" ).css("width", "500px");
}

function setLinksValues(lang, encoding) {
	document.getElementById("save_link").setAttribute("href", "javascript:saveAndSetModified('"+lang+"' ,'"+encoding+"');");
	document.getElementById("save_as_link").setAttribute("href", "javascript:saveas('"+lang+"' ,'"+encoding+"');");
	document.getElementById("download_link").setAttribute("href", "javascript:download('"+lang+"' ,'"+encoding+"');");
}


function setLineAndColumnNumber(lang) {

	lineAndColNumber=getLineNumberAndColumnIndex();
	lineNumber=lineAndColNumber["lineNumber"];
	columnIndex =lineAndColNumber["columnIndex "];
//	if (lang.localeCompare('eng')==0) title="Line #: "+lineNumber+", Column #: "+columnIndex+".";
//	if (lang.localeCompare('rus')==0) title="# Строки: "+lineNumber+", # Колонки: "+columnIndex+".";
//		document.getElementById("information_img").setAttribute('title', title);

}
// ----------------------- processMenu PHP --------- //
function processSearchAndReplace(lang) {



	if (lang.localeCompare('rus')==0) {
		prompt1="Введите Имя Пользователя";
		err1="Ввод Данных Отменён.";
		err2="Неверное Имя Пользователя.";
	}
	if (lang.localeCompare('eng')==0) {
		prompt1="Please Enter Username";
		err1="Data Input Cancelled.";
		err2="Incorrect Username.";
	}

	dispatchResize();

// -------------- Tab for Texarea, Line and Column Numbers and Disable Autofill ------------- //
	document.getElementById("textarea_area").onkeydown = function(e){
		if(e.keyCode==9 || e.which==9){
			e.preventDefault();
			var s = this.selectionStart;
			this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
			this.selectionEnd = s+1; 
		}
	}
	document.getElementById("textarea_area").onkeyup = function(e){
		setLineAndColumnNumber(lang);
	}

	document.getElementById("textarea_area").onmouseup = function(e){
		setLineAndColumnNumber(lang);
	}

	textarea_var=document.getElementById("textarea_area");
	if (textarea_var.className &&(textarea_var.className.indexOf("disableAutoComplete") != -1)) {
		textarea_var.setAttribute("autocomplete","off");
	}
// -------------- End of Tab for Texarea, Line and Column Numbers and Disable Autofill ------------- //

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
			if (JSON.parse(removeBom(this.responseText))[0]!=1){
				username = prompt(prompt1, "");
				if (username == null || username .localeCompare( "")==0) {
					$("#search_col1").hide();
					$("#search_col2").hide();
					$("#search_col3").hide();
					$("#search_col4").hide();
					$("#log_out").hide();
					$("#files_count_row").hide();
					$("#files_count_alphabet_row").hide();
					$("#textarea_row").hide();
					$("#butt_row").hide();
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
							$("#log_out").hide();
							$("#files_count_row").hide();
							$("#files_count_alphabet_row").hide();
							$("#textarea_row").hide();
							$("#butt_row").hide();
							$("#error_message").text(err2);
							$("#error_message_row").show();
							return false;
						}
						clearTmp();
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
	xhr.open("GET","scripts/php/checkLogIn.php",true);
	xhr.send();
// -------------- End Of Authorization ------------- //

}
// ----------------------- End of processMenu PHP --------- //
