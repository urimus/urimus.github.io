"use strict";

// ------------- Global Variables ---------------- //
var skipUpdates=0;
var preloadCache = {};
// ------------- End of Global Variables ---------------- //

function feedIconText (feedURL, lang) {
	if (lang == "rus") var textRssFeed="RSS Строка (англ.)";
	if (lang == "eng") var textRssFeed="RSS Feed";
	if (lang == "lat") var textRssFeed="RSS Acies (angl.)";

	var a = document.createElement('a');
	a.setAttribute('href', feedURL);
	a.setAttribute('class', 'standardb_red');
	a.setAttribute('target', '_blank');
	a.setAttribute('tabindex', "0");
	a.setAttribute('onkeydown', "if(event.key==='Enter' || event.key===' ') { event.preventDefault(); this.click(); this.onmouseleave();}");
	a.setAttribute('title', textRssFeed);

	var Img = document.createElement("img");
	Img.setAttribute('src', "images/icons/feed/feed_icon.svg");
	Img.setAttribute('class', "thumbnail_image_red_png");
	Img.setAttribute('alt', textRssFeed);
	Img.setAttribute('valign', 'middle');
	Img.setAttribute('onload', 'javascript:adjustFeedScrollDiv();');
	Img.setAttribute('style', 'height: 27px;');
	a.appendChild(Img);
	return a.outerHTML;
}

function mailToText (email) {
	var a = document.createElement('a');
	a.setAttribute('href', "mailto:"+email);
	a.setAttribute('class', 'standardb_red');
	a.setAttribute('target', '_blank');
	a.setAttribute('tabindex', "0");
	a.setAttribute('onkeydown', "if(event.key==='Enter' || event.key===' ') { event.preventDefault(); this.click(); this.onmouseleave();}");
	a.setAttribute('title', email);

	var Img = document.createElement("img");
	Img.setAttribute('src', "images/icons/feed/mailto_red.svg");
	Img.setAttribute('class', "thumbnail_image_red_png");
	Img.setAttribute('alt', email);
	Img.setAttribute('valign', 'middle');
	Img.setAttribute('style', 'height: 27px;');
	a.appendChild(Img);
	return a.outerHTML;
}
// ------------- Initial ---------------- //
function newsLoad(lang) {
	var sourceL="";
	var source="";
	var toRedirect=0;
	
	sourceL=getParameterByName('source');
	if (sourceL && sourceL!="") {
		if (sourceL=="cbs" || sourceL=="nasa" || sourceL=="phys.org" || sourceL=="space.com" || sourceL=="wired" || sourceL=="yahoo" || sourceL=="yonhap")  {
			source=sourceL;
		}
	} else {
		toRedirect=1;
	}

	if (source=="") {
		if (lang=="rus") alert("Источник (Source) '"+sourceL+"' Не Действителен! Перенаправление....");
		if (lang=="eng") alert("Source '"+sourceL+"' Not Valid! Redirecting....");
		if (lang=="lat") alert("Origo (Source) '"+sourceL+"' Non Validus! Redirecting....");
		toRedirect=1;
	}

	if (toRedirect==1) {
		window.location.href='news_'+lang+'.html?source=yahoo&type=top';
		return;
	}

	var typeL="";
	var type="";
	toRedirect=0;
	
	typeL=getParameterByName('type');
	if (typeL && typeL!="") {
		if (source=="cbs" && (typeL=="top" || typeL=="us" || typeL=="politics" || typeL=="world" || typeL=="health" || typeL=="moneywatch" || typeL=="science" || typeL=="technology" || typeL=="entertainment" || typeL=="space") 
		|| source=="nasa" && (typeL=="releases" || typeL=="recent" || typeL=="image" || typeL=="technology" || typeL=="aeronautics" || typeL=="iss" || typeL=="artemis") 
		|| source=="phys.org" && (typeL=="all" 
										|| typeL=="earth" || typeL=="environment"
										|| typeL=="archaeology" || typeL=="economics" || typeL=="education" || typeL=="mathematics" || typeL=="other" || typeL=="political"  || typeL=="social"
										|| typeL=="bio" || typeL=="nanomaterials" || typeL=="nanophysics"
										|| typeL=="condensed" || typeL=="general" || typeL=="optics" || typeL=="plasma" || typeL=="quantum" || typeL=="soft" || typeL=="superconductivity"
										|| typeL=="astrobiology" || typeL=="astronomy" || typeL=="planetary" || typeL=="space"
										|| typeL=="agriculture" || typeL=="biotechnology" || typeL=="cell" || typeL=="ecology" || typeL=="evolution" || typeL=="molecular" || typeL=="otherb" || typeL=="paleontology" || typeL=="plants" || typeL=="veterinary"
										|| typeL=="analytical" || typeL=="biochemistry" || typeL=="materials" || typeL=="otherc" || typeL=="polymers")
		|| source=="space.com" && typeL=="all" 
		|| source=="wired" && (typeL=="top" || typeL=="business" || typeL=="ai" || typeL=="culture" || typeL=="gear" || typeL=="ideas" || typeL=="science" || typeL=="security" || typeL=="backchannel" || typeL=="guides")
		|| source=="yahoo" && (typeL=="top" || typeL=="world" || typeL=="us" || typeL=="politics" || typeL=="health" || typeL=="finance" || typeL=="science" || typeL=="sports" || typeL=="entertainment" || typeL=="lifestyle")
		|| source=="yonhap" && (typeL=="all" || typeL=="national" || typeL=="northkorea" || typeL=="economy" || typeL=="biz" || typeL=="culture" || typeL=="sports") )  {
			type=typeL;
		}
	} else {
		toRedirect=1;
	}

	if (type=="") {
		if (lang=="rus") alert("Тип (Type) '"+typeL+"' Не Действителен! Перенаправление....");
		if (lang=="eng") alert("Type '"+typeL+"' Not Valid! Redirecting....");
		if (lang=="lat") alert("Genus (Type) '"+typeL+"' Non Validus! Redirecting....");
		toRedirect=1;
	}
	if (toRedirect==1) { // restore
	    	if (source=="cbs") {
			window.location.href='news_'+lang+'.html?source=cbs&type=top';
		}
	    	if (source=="nasa") {
			window.location.href='news_'+lang+'.html?source=nasa&type=releases';
		}
	    	if (source=="phys.org") {
			window.location.href='news_'+lang+'.html?source=phys.org&type=all';
		}
	    	if (source=="space.com") {
			window.location.href='news_'+lang+'.html?source=space.com&type=all';
		}
	    	if (source=="wired") {
			window.location.href='news_'+lang+'.html?source=wired&type=top';
		}
	    	if (source=="yahoo") {
			window.location.href='news_'+lang+'.html?source=yahoo&type=top';
		}
	    	if (source=="yonhap") {
			window.location.href='news_'+lang+'.html?source=yonhap&type=all';
		}
		return;
	}

	processPageResize(1, 0, lang);
	showFeed(type, source, lang);
}

function showRecordsNum(type, recordsNum, lang, newCaption) {
	if (clickStarted) return;
	document.getElementById('feed_'+type).setAttribute("title", recordsNum+" "+getRecordsText(lang, recordsNum));
	if (typeof newCaption !== 'undefined') {
		document.getElementById('feed_'+type).innerHTML=newCaption;
	}
	if (recordsNum==0) {
		document.getElementById('feed_'+type).onmouseleave = function(){mouseOutTab(type, encodeURIComponent(getParameterByName('type')), 'black');}
		document.getElementById('feed_'+type).onmouseleave();
	}
}
// ------------- End of Initial ---------------- //

function adjustFeedScrollDiv() {
	var scrollDiv = document.getElementById('scrollDiv');

	var tabsHeight = document.getElementById('tabstable').offsetHeight;
	var feedTitleHeight = document.getElementById('titletable').offsetHeight;
	var feedMessageHeight = document.getElementById('messagetable').offsetHeight;
	var totalHeight = tabsHeight+feedTitleHeight+feedMessageHeight;

	if (isMobile()) {
		scrollDiv.style.minHeight = (menuHeight - totalHeight - 8) + "px";
		scrollDiv.style.height = "100%";
		return;
	}

	// use max-height: Math.max(screen, menu)
	scrollDiv.style.maxHeight = (Math.max(getViewportHeight() - getScrollDivOffset(), menuHeight) - totalHeight - 8) + "px";

	scrollDiv.style.height = (document.getElementById('feedtable').offsetHeight==0)
		? scrollDiv.style.maxHeight
		: "100%";
}

// ------------- Show Feed ---------------- //

function showFeedTitle(type, source, lang, result) {
	var textRssFeed, textOutputRecords, textLastBuildDate, textPre;
	if (lang == "rus") {
		textRssFeed="RSS Строка (англ.)";
		textOutputRecords="Вывод Строки Новостей";
		textLastBuildDate="Последняя Сборка:&nbsp;";
		textPre="От";
	}
	if (lang == "eng") {
		textRssFeed="RSS Feed";
		textOutputRecords="Outputing News Feed";
		textLastBuildDate="Last Build:&nbsp;";
		textPre="By";
	}
	if (lang == "lat") {
		textRssFeed="RSS Acies (angl.)";
		textOutputRecords="Produco Nuntium Acies";
		textLastBuildDate="Ultima Aedificatio:&nbsp;";
		textPre="Ab";
	}

	document.getElementById("loadingSpanTitle").innerHTML = textOutputRecords+" "+feedIconText(result.feedXML, lang);

	var preloadImg = new Image();
	preloadImg.onload = function () {
		var totalEntries = result.entries.length;
		var table = document.getElementById("titletable");
		table.replaceChildren();
		var row = table.insertRow(-1);	
		var cell1 = row.insertCell(0);
		cell1.setAttribute('class', 'nimetus_red');
		cell1.setAttribute('style', 'padding: 5px 2px; display: -webkit-flex;display: flex; align-items: center;');

		var aLogo = document.createElement('a');
		aLogo.setAttribute('href', result.link);
		aLogo.setAttribute('class', 'standardb_red');
		aLogo.setAttribute('target', '_blank');
		aLogo.setAttribute('tabindex', "0");
		aLogo.setAttribute('onkeydown', "if(event.key==='Enter' || event.key===' ') { event.preventDefault(); this.click(); this.onmouseleave();}");
		aLogo.setAttribute('title', result.description);

		var Img = document.createElement("img");
		Img.setAttribute('src', preloadImg.src);
		Img.setAttribute('class', "thumbnail_image_red_png");
		Img.setAttribute('alt', result.description);
		Img.setAttribute('align', 'left');
		Img.setAttribute('style', 'height: 27px; display: block;');
		aLogo.appendChild(Img);
		cell1.appendChild(aLogo);

		cell1.innerHTML+="&nbsp;"+textRssFeed+"&nbsp;"+feedIconText(result.feedXML, lang);
		cell1.innerHTML+=",&nbsp;<span id='loadedCount'>0/</span>"+totalEntries+"&nbsp;"+getRecordsText(lang, totalEntries)+"<span id='failedCountTitle'></span>";

		var Img = document.createElement('img');
		Img.setAttribute('tabindex', "0");
		Img.setAttribute('onkeydown', "if(event.key==='Enter' || event.key===' ') { event.preventDefault(); this.click(); this.onmouseleave();}");
		Img.setAttribute('alt', textLastBuildDate);
		Img.setAttribute('title', textLastBuildDate+formatDate(result.date_ms, lang));
		Img.setAttribute('onload',  'javascript:adjustFeedScrollDiv();');
		Img.setAttribute('style',  "height:27px;");
		Img.src="images/icons/feed/build.svg";
		cell1.innerHTML+="&nbsp;"+Img.outerHTML;

		if (result.copyright!= null) {
			var Img = document.createElement('img');
			Img.setAttribute('tabindex', "0");
			Img.setAttribute('onkeydown', "if(event.key==='Enter' || event.key===' ') { event.preventDefault(); this.click(); this.onmouseleave();}");
			Img.setAttribute('alt', result.copyright);
			Img.setAttribute('title', result.copyright);
			Img.setAttribute('onload',  'javascript:adjustFeedScrollDiv();');
			Img.setAttribute('style',  "height:27px;");
			Img.src="images/icons/feed/copyright.svg";
			cell1.innerHTML+=Img.outerHTML;
		}
		cell1.innerHTML+=".";

		if (source=="nasa" && type=="image") {
			cell1.innerHTML+=' '+textPre+' Brian Dunbar&nbsp;' + mailToText("brian.dunbar@nasa.gov");
		}

		var table2 = document.getElementById("messagetable");
		if (table2) {
			var cell1 = table2.rows[0].cells[0];
			cell1.setAttribute("style", "text-align: center; padding-bottom: 10px;");
		}

		adjustFeedScrollDiv();
		showFeedData(type, source, lang, result);
	}
	preloadImg.setAttribute('src', result.image);
	adjustFeedScrollDiv();
}

function showFeedData(type, source, lang, result) {

	var items = result.entries;
	var totalEntries = items.length;

	if (totalEntries > 0) {
		var table = document.getElementById("feedtable");
		table.setAttribute('style', 'border-spacing: 2px 0;');
		var tableMainRow = table.insertRow(-1);
		tableMainRow.setAttribute('style', 'vertical-align:top;');
		tableMainRow.setAttribute('id', 'tableMainRow');

		if (result.totalUpdated == result.entries.length || (source=="nasa" && type=="image") || source == "phys.org" || source == "space.com" || source == "wired") {
			$("#processedDiv").hide();
			var table2 = document.getElementById("messagetable");
			table2.replaceChildren();
			adjustFeedScrollDiv();
			for (var i = 0; i < totalEntries; i++) {
				showEntry(type, source, lang, result, i, 1);
			}
			adjustFeedScrollDiv();
		} else {
			for (var i = 0; i < totalEntries; i++) {
				if (result.entries[i].storage.updateProcessed == 1) {
					showEntry(type, source, lang, result, i, 1);
				}
			}
			var textUpdateRecords, textUpdateSkipped, textSkip;
			if (lang == "rus") {
				textUpdateRecords = "Обновление Записей.&nbsp;";
				textUpdateSkipped = "Обновление Отменено.";
				textSkip = "Отменить";
			}
			if (lang == "eng") {
				textUpdateRecords = "Updating Records.&nbsp;";
				textUpdateSkipped = "Update Skipped.";
				textSkip = "Skip";
			}
			if (lang == "lat") {
				textUpdateRecords = "Updating Monumentum.&nbsp;";
				textUpdateSkipped = "Update Skipped.";
				textSkip = "Saltus";
			}
			document.getElementById("loadingSpanTitle").innerHTML = textUpdateRecords;
			var a = document.createElement('a');
			a.setAttribute('href', "javascript:void(0);");
			a.setAttribute('class', 'standardb_red');
			a.innerText = textSkip;
			a.onclick = function () {
				skipUpdates = 1;
				for (var j = 0; j < result.entries.length; j++) {
					if ((source == "cbs" || source == "nasa") && result.entries[j].storage.updateProcessed == 0) {
						result.entries[j].media.origComment = result.entries[j].media.comment;
						result.entries[j].media.comment = textUpdateSkipped;
						result.entries[j].media.origUrl = result.entries[j].media.url;
						result.entries[j].media.url = "images/icons/error/no_image.png";
					}
					result.entries[j].error = textUpdateSkipped;
					if (result.entries[j].storage.updateProcessed == 0) {
						result.entries[j].storage.updateProcessed = 1;
						showEntry(type, source, lang, result, j, 0);
					}
				}
				checkProcessedCount(result);
			};
			document.getElementById("loadingDivTitleSkip").appendChild(a);
			$("#processedDiv").show();
			adjustFeedScrollDiv();
			// 10 updates simultaneously only
			if (source == "cbs" || (source=="nasa" && type!="image") || source == "yonhap" || source=="yahoo") {
				removeUnusedUpdates(source, type, result);
				var updatingCount = 0;
				for (var i = 0; i < result.entries.length; i++) {
					if (result.entries[i].storage.updateProcessed == 0) {
						result.entries[i].storage.updateInitiated = 1;
						update(i, source, type, result, lang);
						updatingCount++;
						if (updatingCount == 10) break; // 10 updates simultaneously only
					}
				}
			}
		}
	}
}



function formatSummary(summary_arr, words) {
	var summaryToShow = "";
	var j;
	for (j = 0; j < words && j < summary_arr.length; j++) {
		if (j == summary_arr.length - 1) {
			summaryToShow += summary_arr[j];
		} else {
			summaryToShow += summary_arr[j] + " ";
		}
	}
	return summaryToShow;
}

function extractLines(html) {
	var parser = new DOMParser();
	var doc = parser.parseFromString(html, 'text/html');
	var container = doc.body || doc;
	var text = '';
	var pElements = container.querySelectorAll('p');
	if (pElements.length > 0) {
		text = Array.from(pElements).map(p => p.textContent).join('\n');
	} else {
		text = container.textContent;
	}
	return text
		.split('\n')
		.map(line => line.trim())
		.filter(line => line.length > 0);
}

function splitIgnoringSpecialSpan(str) {
	var placeholder = "__PLACEHOLDER__";
	return str
		.replaceAll("<span style='padding-left:10px;'><span>", placeholder)
		.split(" ")
		.map(s => s.replaceAll(placeholder, "<span style='padding-left:10px;'><span>"));
}

function formatSummaryDiv(lang, summaryDiv, entry) {

	var entry_summary = entry.summary;
	var lines = extractLines(entry_summary);
	var summary_words;
	if (lines.length > 1) {
		entry_summary  = "<span style='padding-left:10px;'><span>" + lines.join(" <br><span style='padding-left:10px;'><span>");
		summary_words = splitIgnoringSpecialSpan(entry_summary);
	} else {
		summary_words = entry_summary.split(" ");
	}

	var wordsCount = 0;
	var currentLineTop = 0;
	var linesCount = 1;
	var linesToShow = 4;

	summaryDiv.replaceChildren();

	var summarySpan = document.createElement('span');
	summarySpan.setAttribute('class', "text_red");
	summarySpan.innerHTML = "";
	summaryDiv.innerHTML = "";
	summaryDiv.appendChild(summarySpan);

	var extensionA = document.createElement('a');
	extensionA.setAttribute('href', "javascript:void(0);");
	extensionA.setAttribute('class', 'standardb_red');
	extensionA.setAttribute('onkeydown', "if(event.key==='Enter' || event.key===' ') { event.preventDefault(); this.click(); this.onmouseleave();}");
	extensionA.onclick = function () {
		if (this.innerHTML == "[▼]") {
			summarySpan.innerHTML = entry_summary;
			this.innerHTML = "[▲]";
		} else if (this.innerHTML == "[▲]") {
			summarySpan.innerHTML = formatSummary(summary_words, wordsCount);
			this.innerHTML = "[▼]";
		}
		adjustFeedScrollDiv();
	};
	extensionA.innerHTML = "[▼]";

	var Pointer = document.createElement('a');
	summaryDiv.appendChild(Pointer);

	var k;
	for (k = 0; k < summary_words.length; k++) {
		summarySpan.innerHTML = formatSummary(summary_words, k+1);
		if (k == 0) currentLineTop = Pointer.offsetTop;
		if (Pointer.offsetTop != currentLineTop) {
			if (Math.abs(Pointer.offsetTop - currentLineTop) < 2) {
				currentLineTop = Pointer.offsetTop;
				continue;
			}
			if (linesCount == linesToShow) {

				summarySpan.innerHTML = "";
				summaryDiv.removeChild(Pointer);
				summaryDiv.appendChild(extensionA);

				wordsCount = 0;
				linesCount = 1;

				var k2;
				for (k2 = 0; k2 < summary_words.length; k2++) {
					wordsCount++;
					summarySpan.innerHTML = formatSummary(summary_words, wordsCount);
					if (k2 == 0) currentLineTop = extensionA.offsetTop;
					if (extensionA.offsetTop != currentLineTop) {
						if (Math.abs(extensionA.offsetTop - currentLineTop) < 2) {
							currentLineTop = extensionA.offsetTop;
							continue;
						}
						if (linesCount == linesToShow) {
							wordsCount--;
							summarySpan.innerHTML = formatSummary(summary_words, wordsCount);
							break;
						} else {
							currentLineTop = extensionA.offsetTop;
							linesCount++;
						}
					}
				}
				break;

			} else {
				currentLineTop = Pointer.offsetTop;
				linesCount++;
			}
		}
	}

	if (k == summary_words.length) {
		summaryDiv.removeChild(Pointer);
		summarySpan.innerHTML = entry_summary;
	}
}

// ------------- Image Preload -------------- //

function isEmbed(url) {
	try {
		const u = new URL(url);
		const path = u.pathname;
		return (
			path.includes("/embed/") ||
			path.includes("/player/") ||
			path.includes("/iframe/")
		);
	} catch {
		return false;
	}
}

function preloadImage(type, source, lang, result) {
	// 5 preloads simultaneously only

	var isOrigUrl=0;
	var newUrl, textImageLoadError;
	var totalEntries = result.entries.length;
	var preloadStartedCount=0;
	var preloadPassedCount=0;
	var preloadFailedCount=0;
	var preloadSet=0;
	var preloadIndex=0;

	if (lang == "rus") {
		textImageLoadError = "Ошибка Загрузки Картинки";
	}
	if (lang == "eng") {
		textImageLoadError = "Image Load Error";
	}
	if (lang == "lat") {
		textImageLoadError = "Error Onerationis Imaginis";
	}

	for (var j = 0; j < totalEntries; j++) {
		if (typeof result.entries[j].storage.loadingImg !== "undefined" && result.entries[j].storage.loadingImg != null && result.entries[j].storage.preloadStarted==0 && preloadSet==0) {
			preloadSet=1;
			preloadIndex=j;
		}
		if (result.entries[j].storage.preloadStarted == 1) preloadStartedCount++;
		if (result.entries[j].storage.preloadPF !== null && result.entries[j].storage.preloadPF == 1) preloadPassedCount++;
		if (result.entries[j].storage.preloadPF !== null && result.entries[j].storage.preloadPF == 0) preloadFailedCount++;
	}

	if (preloadPassedCount+preloadFailedCount==totalEntries) return;
	if (preloadStartedCount==5) return; // 5 preloads simultaneously only
	if (preloadSet==0) return;

	var entry=result.entries[preloadIndex];
	var loadingImg=entry.storage.loadingImg;
	var contentsDiv=entry.storage.contentsDiv;
	var summaryDiv=entry.storage.summaryDiv;

	var preloadImg = new Image();
	preloadImg.alt=entry.media.comment;
	preloadImg.title=entry.media.comment;
	preloadImg.onload = function () {
		var loadedCount=0;
		result.entries[preloadIndex].storage.preloadPF=1;
		result.entries[preloadIndex].storage.preloadStarted=0;
		result.entries[preloadIndex].storage.loadingImg=null;
		for (var j = 0; j < totalEntries; j++) {
			if (result.entries[j].storage.preloadPF !== null && result.entries[j].storage.preloadPF == 1) loadedCount++;
		}
		if (loadedCount == totalEntries) {
			document.getElementById("loadedCount").innerHTML = "";
		} else {
			document.getElementById("loadedCount").innerHTML = loadedCount + "/";
		}

		if (preloadImg.naturalWidth < 450) {
			loadingImg.setAttribute('width', preloadImg.naturalWidth);
			contentsDiv.setAttribute('style', "display:inline-block; width:" + loadingImg.width + "px; padding:10px; border: 1px solid #de8e8e;");
			if (typeof summaryDiv !== "undefined" && typeof entry.summary !== "undefined" && entry.summary != null && entry.summary != "") {
				formatSummaryDiv(lang, summaryDiv, entry);
			}
		}

		loadingImg.alt=preloadImg.alt;
		loadingImg.title=preloadImg.title;
		loadingImg.src=preloadImg.src;

		// preloading additional images and video
		if (typeof entry.additMediaUrl !== "undefined") {
			for (var j = 0; j < entry.additMediaUrl.length; j++) {
				newUrl = entry.additMediaUrl[j];
				if (source == "nasa") newUrl += (newUrl.includes('?') ? '&' : '?') + "w=450";
				if (!preloadCache[newUrl]) {
					let img = new Image();
					img.src = newUrl;
					preloadCache[newUrl] = img;
				}
			}
		}
		if (source!="cbs" && typeof entry.video!== "undefined" && !isEmbed(entry.video)) {
			newUrl = entry.video;
			if (!preloadCache[newUrl]) {
				let v = document.createElement("video");
				v.src = newUrl;
				v.preload = "auto";
				v.load();
				preloadCache[newUrl] = v;
			}
		}
		adjustFeedScrollDiv();
		preloadImage(type, source, lang, result);
	}
	preloadImg.onerror = function () {
		// try origUrl if set
		newUrl = entry.media.origUrl;
		if (typeof newUrl !== 'undefined' && isOrigUrl == 0 && newUrl != preloadImg.src) {
			preloadImg.alt=entry.media.origComment;
			preloadImg.title=entry.media.origComment;
			if (newUrl.substr(newUrl.length - 12)=="no_image.png") { preloadImg.src=newUrl; return; }
			if (source == "nasa") newUrl += (newUrl.includes('?') ? '&' : '?') + 'w=450';
			preloadImg.src=newUrl;
			isOrigUrl = 1;
		} else {
			result.entries[preloadIndex].storage.preloadPF=0;
			result.entries[preloadIndex].storage.preloadStarted=0;
			result.entries[preloadIndex].storage.loadingImg=null;
			loadingImg.alt=textImageLoadError;
			loadingImg.title=textImageLoadError;
			loadingImg.src="images/icons/error/error.jpg";
			adjustFeedScrollDiv();
			preloadImage(type, source, lang, result);
		}
	}
	newUrl = entry.media.url;
	result.entries[preloadIndex].storage.preloadStarted=1;
	if (newUrl.substr(newUrl.length - 12)=="no_image.png") { preloadImg.src=newUrl; return; }
	if (source == "nasa") newUrl += (newUrl.includes('?') ? '&' : '?') + 'w=450';
	preloadImg.src=newUrl;
}
// ------------- End of Image Preload -------------- //

function showEntry(type, source, lang, result, i, appendEntry = 1) {

	var entry = result.entries[i];
	var totalEntries = result.entries.length;

	// ------------- Setting Texts ---------------- //
	// Records Text is in getRecordsText function
	var textSource, textCategory, textCategories, textCreator, textCreators, textSubject, textMore, textSeeAlso, textShow, textHide, textVideo;

	if (lang == "rus") {
		textSource = "Источник:&nbsp;";
		textCategory = "Категория:&nbsp;";
		textCategories = "Категории:&nbsp;";
		textCreator = "Создатель:&nbsp;";
		textCreators = "Создатели:&nbsp;";
		textSubject = "Предмет:&nbsp;";
		textMore = "Ещё";
		textSeeAlso = "Смотри Так-же:&nbsp;";
		textShow = "Показать";
		textHide = "Скрыть";
		textVideo = "Видео";
	}

	if (lang == "eng" || lang == "lat") {
		textSource = "Source:&nbsp;";
		textCategory = "Category:&nbsp;";
		textCategories = "Categories:&nbsp;";
		textCreator = "Creator:&nbsp;";
		textCreators = "Creators:&nbsp;";
		textSubject = "Subject:&nbsp;";
		textMore = "More";
		textSeeAlso = "See Also:&nbsp;";
		textShow = "Show";
		textHide = "Hide";
		textVideo = "Video";
	}

	if (lang == "lat") {
		textMore = "Plus";
		textSeeAlso = "Vide Etiam:&nbsp;";
		textShow = "Demonstrare";
		textHide = "Abscondere";
	}

	// ------------- End of Setting Texts ---------------- //

	var tableMainRow = document.getElementById("tableMainRow");
	var cell1;
	if (appendEntry == 1) {
		cell1 = tableMainRow.insertCell(-1);
	} else {
		var processedCountSoFar = 0;
		for (var j = 0; j < i; j++) {
			if (result.entries[j].storage.updateProcessed == 1) processedCountSoFar++;
		}
		cell1 = tableMainRow.insertCell(processedCountSoFar);
	}

	var contentsDiv = document.createElement('div');
	contentsDiv.setAttribute('style', "display:inline-block; width:" + entry.media.width + "px; padding:10px; border: 1px solid #de8e8e;");
	cell1.appendChild(contentsDiv);

	if (typeof entry.error !== "undefined" && entry.error != null) {
		var Div = document.createElement('div');
		Div.setAttribute('class', "text_red");
		Div.innerHTML = "💥 " + entry.error;
		contentsDiv.appendChild(Div);
	}

	var Div = document.createElement('div');
	Div.setAttribute('class', "nimetus3_red");
	Div.innerHTML = (i + 1) + ". " + entry.title;
	contentsDiv.appendChild(Div);

	var imageDiv = document.createElement('div');
	contentsDiv.appendChild(imageDiv);

	var Img = document.createElement("img");
	Img.setAttribute('class', "text_red");
	Img.setAttribute('align', 'left');
	Img.setAttribute('width', entry.media.width);
	Img.setAttribute('style', 'display: block; margin-top:5px; margin-bottom:5px;');
	Img.onload = function () { adjustFeedScrollDiv(); }
	Img.src="images/icons/feed/loading.gif";
	imageDiv.appendChild(Img);

	result.entries[i].storage.loadingImg=Img;
	result.entries[i].storage.contentsDiv=contentsDiv;
	// preload later
	// ------------- Additional Images Show/Hide -------------- //
	if (typeof entry.additMediaUrl !== "undefined") {
		var extensionImgA = document.createElement('a');
		extensionImgA.setAttribute('href', "javascript:void(0);");
		extensionImgA.setAttribute('class', 'standardb_red');
		extensionImgA.setAttribute('align', 'right');
		extensionImgA.setAttribute('onkeydown', "if(event.key==='Enter' || event.key===' ') { event.preventDefault(); this.click(); this.onmouseleave();}");
		extensionImgA.onclick = function () {
			if (this.innerHTML == "[▼]") {
				for (var j = 0; j < entry.additMediaUrl.length; j++) {
					var Img2 = document.createElement("img");
					Img2.setAttribute('class', "text_red");
					Img2.setAttribute('align', 'left');
					Img2.setAttribute('width', Img.width);
					Img2.setAttribute('style', 'display: block; margin-bottom:5px; background-color: rgba(222, 142, 142, 0.0);');
					Img2.onload = function () {
						var additImgWidth = Img.width;
						if (this.naturalWidth < Img.width) additImgWidth = this.naturalWidth;
						this.width = additImgWidth;
						adjustFeedScrollDiv();
					}
					if (source== "nasa") {
						var newUrl = entry.additMediaUrl[j];
						Img2.src=newUrl + (newUrl.includes('?') ? '&' : '?') + "w=450";
					} else {
						Img2.src=entry.additMediaUrl[j];
					}
					imageDiv.appendChild(Img2);
				}
				this.innerHTML = "[▲]";
				showMoreDiv.innerHTML = textHide + " " + entry.additMediaUrl.length + " " + textMore + " ";
				showMoreDiv.appendChild(this);

			} else {
				for (var j = 0; j < entry.additMediaUrl.length; j++) {
					imageDiv.removeChild(imageDiv.lastChild);
				}
				this.innerHTML = "[▼]";
				showMoreDiv.innerHTML = textShow + " " + entry.additMediaUrl.length + " " + textMore + " ";
				showMoreDiv.appendChild(this);
			}
			adjustFeedScrollDiv();
		}
		extensionImgA.innerHTML = "[▼]";

		var showMoreDiv = document.createElement('div');
		showMoreDiv.setAttribute('class', "text_red");
		showMoreDiv.setAttribute('style', "margin-bottom:5px; text-align: right;");
		showMoreDiv.innerHTML = textShow + " " + entry.additMediaUrl.length + " " + textMore + " ";
		showMoreDiv.appendChild(extensionImgA);
		imageDiv.appendChild(showMoreDiv);
	}
	// ------------- End of Additional Images Show/Hide -------------- //

	// ------------- Video Show/Hide -------------- //
	if (typeof entry.video!== "undefined") {
		var extensionVideoA = document.createElement('a');
		extensionVideoA.setAttribute('href', "javascript:void(0);");
		extensionVideoA.setAttribute('class', 'standardb_red');
		extensionVideoA.setAttribute('align', 'right');
		extensionVideoA.setAttribute('onkeydown', "if(event.key==='Enter' || event.key===' ') { event.preventDefault(); this.click(); this.onmouseleave();}");
		extensionVideoA.onclick  = function () { 
			// ▼- &#9660;   ▲- &#9650;
			if (this.innerHTML=="[▼]") { // expand
				if (source=="cbs" || isEmbed(entry.video)) {
			        	var ifrm = document.createElement("iframe");
					ifrm.setAttribute('class', "text_red");
					ifrm.setAttribute('align', 'left');
					ifrm.setAttribute('width', Img.width);
					ifrm.setAttribute('style', 'display: block; margin-bottom:5px; border:0px; background-color: rgb(222, 142, 142, 0.0); aspect-ratio:16/9;');
					ifrm.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture');
					if (source=="cbs") {
						ifrm.src="https://www.livereacting.com/tools/hls-player-embed?url="+entry.video;
//						ifrm.src="https://hlsplayer.net/embed?type=m3u8&src="+entry.video;
//						ifrm.src="https://cdn.theoplayer.com/demos/iframe/theoplayer.html?autoplay=false&muted=false&preload=none&src="+entry.video;
					} else if (isEmbed(entry.video)) {
						ifrm.src=entry.video;
					}
					ifrm.onload = function () {
						adjustFeedScrollDiv();
					}
					imageDiv.appendChild(ifrm);
				} else {
					var video = document.createElement('video');
					video.setAttribute('style', 'display: block; margin-bottom:5px;');
					video.controls = true;
					video.width = Img.width;
					var source2 = document.createElement('source');
					source2.src = entry.video;
					source2.type = 'video/mp4';
					video.appendChild(source2);
					video.onload = function () {
						adjustFeedScrollDiv();
					}
					imageDiv.appendChild(video);
				}
				this.innerHTML="[&#9650;]";
				showMoreDiv.innerHTML=textHide+" "+textVideo+" ";
				showMoreDiv.appendChild(this);
			} else if (this.innerHTML=="[▲]") { // collapse
				imageDiv.removeChild(imageDiv.lastChild);
				this.innerHTML="[&#9660;]";
				showMoreDiv.innerHTML=textShow+" "+textVideo+" ";
				showMoreDiv.appendChild(this);
			}
			adjustFeedScrollDiv();
		}
		extensionVideoA.innerHTML = "[&#9660;]";

		var showMoreDiv = document.createElement('div');
		showMoreDiv.setAttribute('class', "text_red");
		showMoreDiv.setAttribute('style', "margin-bottom:5px; text-align: right;");
		showMoreDiv.innerHTML=textShow+" "+textVideo+" ";
		showMoreDiv.appendChild(extensionVideoA);
		imageDiv.appendChild(showMoreDiv);
	}
	// ------------- End of Video Show/Hide -------------- //

	if (typeof entry.summary !== "undefined" && entry.summary != null && entry.summary != "") {
		var summaryDiv = document.createElement('div');
		summaryDiv.setAttribute('class', "text_red");
		summaryDiv.setAttribute('style', 'display:inline-block;');
		contentsDiv.appendChild(summaryDiv);
		formatSummaryDiv(lang, summaryDiv, entry);
		result.entries[i].storage.summaryDiv=summaryDiv;
	}

	// preload and ensured that result.entries[i].storage.summaryDiv is set
	preloadImage(type, source, lang, result);

	if (typeof entry.subject !== "undefined" && entry.subject != null && entry.subject != "") {
		var Div = document.createElement('div');
		Div.setAttribute('class', "text_red");
		Div.innerHTML = "<b>" + textSubject + "</b>" + entry.subject;
		contentsDiv.appendChild(Div);
	}

	if (typeof entry.source !== "undefined" && typeof entry.source.title !== "undefined") {
		var Div = document.createElement('div');
		Div.setAttribute('class', "text_red");
		var a = document.createElement('a');
		a.setAttribute('href', entry.source.url);
		a.setAttribute('class', 'standardb_red');
		a.setAttribute('target', '_blank');
		a.setAttribute('onkeydown', "if(event.key==='Enter' || event.key===' ') { event.preventDefault(); this.click(); this.onmouseleave();}");
		a.innerText = entry.source.title;
		Div.appendChild(a);
		Div.innerHTML = "<b>" + textSource + "</b>" + Div.innerHTML;
		contentsDiv.appendChild(Div);
	}

	if (typeof entry.creator !== "undefined" && entry.creator.length > 0 && typeof entry.creator[0] !== "undefined") {
		var Div = document.createElement('div');
		Div.setAttribute('class', "text_red");
		if (entry.creator.length > 1) {
			Div.innerHTML = "<b>" + textCreators + "</b>";
			Div.innerHTML += entry.creator[0];
			if (typeof entry.creatorEmail !== "undefined" && typeof entry.creatorEmail[0] !== "undefined") {
				Div.innerHTML += '&nbsp;' + mailToText(entry.creatorEmail[0]);
			}
			for (var j = 1; j < entry.creator.length; j++) {
				Div.innerHTML += ",&nbsp;" + entry.creator[j];
				if (typeof entry.creatorEmail !== "undefined" && typeof entry.creatorEmail[j] !== "undefined") {
					Div.innerHTML += '&nbsp;' + mailToText(entry.creatorEmail[j]);
				}
			}
		} else {
			Div.innerHTML = "<b>" + textCreator + "</b>" + entry.creator[0];
			if (typeof entry.creatorEmail !== "undefined" && typeof entry.creatorEmail[0] !== "undefined") {
				Div.innerHTML += '&nbsp;' + mailToText(entry.creatorEmail[0]);
			}
		}
		contentsDiv.appendChild(Div);
	}

	if (typeof entry.category !== "undefined" && entry.category.length > 0 && typeof entry.category[0] !== "undefined") {
		var Div = document.createElement('div');
		Div.setAttribute('class', "text_red");
		if (entry.category.length > 1) {
			Div.innerHTML = "<b>" + textCategories + "</b>" + entry.category.join(", ");
		} else {
			Div.innerHTML = "<b>" + textCategory + "</b>" + entry.category[0];
		}
		contentsDiv.appendChild(Div);
	}

	var Div = document.createElement('div');
	Div.setAttribute('class', "text_red");
	var a = document.createElement('a');
	a.setAttribute('href', entry.link);
	a.setAttribute('class', 'standardb_red');
	a.setAttribute('target', '_blank');
	a.setAttribute('rel', 'noopener');
	a.setAttribute('onkeydown', "if(event.key==='Enter' || event.key===' ') { event.preventDefault(); this.click(); this.onmouseleave();}");
	a.innerHTML = textMore + " ▶";
	Div.appendChild(a);
	contentsDiv.appendChild(Div);

	if (typeof entry.seeAlso !== "undefined" && entry.seeAlso.length > 0 && typeof entry.seeAlso[0] !== "undefined") {
		var Div = document.createElement('div');
		Div.setAttribute('class', "text_red");
		Div.innerHTML = "<b>" + textSeeAlso + "</b>";
		for (var j = 0; j < entry.seeAlso.length; j++) {
			var a = document.createElement('a');
			a.setAttribute('href', entry.seeAlso[j]);
			a.setAttribute('class', 'standardb_red');
			a.setAttribute('target', '_blank');
			a.setAttribute('rel', 'noopener');
			a.setAttribute('onkeydown', "if(event.key==='Enter' || event.key===' ') { event.preventDefault(); this.click(); this.onmouseleave();}");
			if (j > 0) a.setAttribute('style', "padding-left:5px;");
			a.innerHTML = "▶";
			Div.appendChild(a);
		}
		contentsDiv.appendChild(Div);
	}

	var date = document.createElement('div');
	date.className = 'textsmall_red';
	date.setAttribute("style", "text-align:right; padding-right:10px;");
	date.innerHTML = formatDate(entry.date_ms, lang);
	contentsDiv.appendChild(date);

	adjustFeedScrollDiv();
}

function generateTabs(type, source, lang) {

	var textNews, textVersInfo;
	if (lang=="rus") {
		textNews="Новости";
		textVersInfo = "Информация о Версии";
	}
	if (lang=="eng") {
		textNews="News";
		textVersInfo = "Version Information";
	}
	if (lang=="lat") {
		textNews="Nuntium";
		textVersInfo = "Notitia Versionis";
	}

	var tabs = {};
	var tabs2 = {};

	if (source=="cbs") {
		tabs["top"]="Top Stories";
		tabs["us"]="U.S.";
		tabs["politics"]="Politics";
		tabs["world"]="World";
		tabs["health"]="Health";
		tabs["moneywatch"]="MoneyWatch";
		tabs["science"]="Science";
		tabs["technology"]="Technology";
		tabs["entertainment"]="Entertainment";
		tabs["space"]="Space";
	}

	if (source=="nasa") {
		tabs["releases"]="News Releases";
		tabs["recent"]="Recently";
		tabs2["recent"]="Recently Published Content";
		tabs["image"]="Image of the Day";
		tabs["technology"]="Technology";
		tabs["aeronautics"]="Aeronautics";
		tabs["iss"]="Space Station";
		tabs["artemis"]="Artemis";
	}
	if (source=="phys.org") {
		if (type=="earth" || type=="environment") {
			tabs["earth"]="Earth Sciences";
			tabs["environment"]="Environment";
		}
		if (type=="archaeology" || type=="economics" || type=="education" || type=="mathematics" || type=="other" || type=="political"  || type=="social") {
			tabs["archaeology"]="Archaeology";
			tabs2["economics"]="Economics & Business";
			tabs["economics"]="Economics &";
			tabs["education"]="Education";
			tabs["mathematics"]="Mathematics";
			tabs["other"]="Other";
			tabs["political"]="Political Science";
			tabs["social"]="Social Sciences";
		}
		if (type=="bio" || type=="nanomaterials" || type=="nanophysics") {
			tabs["bio"]="Bio & Medicine";
			tabs["nanomaterials"]="Nanomaterials";
			tabs["nanophysics"]="Nanophysics";
		}
		if (type=="condensed" || type=="general" || type=="optics" || type=="plasma" || type=="quantum" || type=="soft" || type=="superconductivity") {
			tabs["condensed"]="Condensed Matter";
			tabs["general"]="General Physics";
			tabs["optics"]="Optics & Photonics";
			tabs["plasma"]="Plasma Physics";
			tabs["quantum"]="Quantum Physics";
			tabs["soft"]="Soft Matter";
			tabs["superconductivity"]="Superconductivity";
		}
		if (type=="astrobiology" || type=="astronomy" || type=="planetary" || type=="space") {
			tabs["astrobiology"]="Astrobiology";
			tabs["astronomy"]="Astronomy";
			tabs["planetary"]="Planetary Sciences";
			tabs["space"]="Space Exploration";
		}
		if (type=="agriculture" || type=="biotechnology" || type=="cell" || type=="ecology" || type=="evolution" || type=="molecular" || type=="otherb" || type=="paleontology" || type=="plants" || type=="veterinary") {
			tabs["agriculture"]="Agriculture";
			tabs["biotechnology"]="Biotechnology";
			tabs2["cell"]="Cell & Microbiology";
			tabs["cell"]="Cell &";
			tabs["ecology"]="Ecology";
			tabs["evolution"]="Evolution";
			tabs2["molecular"]="Molecular & Computational Biology";
			tabs["molecular"]="Molecular &";
			tabs["otherb"]="Other";
			tabs2["paleontology"]="Paleontology & Fossils";
			tabs["paleontology"]="Paleontology &";
			tabs["plants"]="Plants & Animals";
			tabs2["veterinary"]="Veterinary Medicine";
			tabs["veterinary"]="Veterinary";
		}
		if (type=="analytical" || type=="biochemistry" || type=="materials" || type=="otherc" || type=="polymers") {
			tabs2["analytical"]="Analytical Chemistry";
			tabs["analytical"]="Analytical";
			tabs["biochemistry"]="Biochemistry";
			tabs["materials"]="Materials Science";
			tabs["otherc"]="Other";
			tabs["polymers"]="Polymers";
		}
	}
	if (source=="wired") {
		tabs["top"]="Top";
		tabs["business"]="Business";
		tabs["ai"]="Artificial";
		tabs2["ai"]="Artificial Intelligence";
		tabs["culture"]="Culture";
		tabs["gear"]="Gear";
		tabs["ideas"]="Ideas";
		tabs["science"]="Science";
		tabs["security"]="Security";
		tabs["backchannel"]="Backchannel";
		tabs["guides"]="Guides";
	}
	if (source=="yahoo") {
		tabs["top"]="Top";
		tabs["world"]="World";
		tabs["us"]="US";
		tabs["politics"]="Politics";
		tabs["health"]="Health";
		tabs["finance"]="Finance";
		tabs["science"]="Science";
		tabs["sports"]="Sports";
		tabs["entertainment"]="Entertainment";
		tabs["lifestyle"]="Lifestyle";
	}
	if (source=="yonhap") {
		tabs["all"]="All News";
		tabs["national"]="National";
		tabs["northkorea"]="North Korea";
		tabs["economy"]="Economy/Finance";
		tabs["biz"]="BIZ";
		tabs["culture"]="Culture/K-pop";
		tabs["sports"]="Sports";
	}

	var textFeedSource;
	var menuDiv;

	if (source == "cbs") {
		textFeedSource = "CBS";
		menuDiv=document.getElementById("menu_26_3");
	}
	if (source == "nasa") {
		textFeedSource = "NASA";
		menuDiv=document.getElementById("menu_26_2");
	}
	if (source=="phys.org") {
		textFeedSource = "Phys.org";
		menuDiv=document.getElementById("menu_26_1");
	}
	if (source=="space.com") {
		textFeedSource = "Space.com";
		menuDiv=document.getElementById("menu_26_6");
	}
	if (source == "wired") {
		textFeedSource = "Wired";
		menuDiv=document.getElementById("menu_26_7");
	}
	if (source == "yahoo") {
		textFeedSource = "Yahoo";
		menuDiv=document.getElementById("menu_26_5");
	}
	if (source == "yonhap") {
		textFeedSource = "Yonhap";
		menuDiv=document.getElementById("menu_26_4");
	}

	menuDiv.setAttribute('class', "menu_selected");
	menuDiv.setAttribute('onmouseleave', "this.className='menu_selected';");

	var textRssFeed;
	if (lang == "rus") textRssFeed="RSS Строка";
	if (lang == "eng") textRssFeed="RSS Feed";
	if (lang == "lat") textRssFeed="RSS Acies";

	var tabtype2;
	if (source=="phys.org") {
		if (type=="all") tabtype2="All Stories";
		if (type=="earth" || type=="environment") tabtype2="Earth &blacktriangleright; "+tabs[type];
		if (type=="archaeology" || type=="economics" || type=="education" || type=="mathematics" || type=="other" || type=="political"  || type=="social") {
			tabtype2="Other Sciences &blacktriangleright; "+tabs[type];
			if (type=="economics") tabtype2="Other Sciences &blacktriangleright; "+tabs2[type];
		}
		if (type=="bio" || type=="nanomaterials" || type=="nanophysics") tabtype2="Nanotechnology &blacktriangleright; "+tabs[type];
		if (type=="condensed" || type=="general" || type=="optics" || type=="plasma" || type=="quantum" || type=="soft" || type=="superconductivity") tabtype2="Physics &blacktriangleright; "+tabs[type];
		if (type=="astrobiology" || type=="astronomy" || type=="planetary" || type=="space") tabtype2="Astronomy & Space &blacktriangleright; "+tabs[type];
		if (type=="agriculture" || type=="biotechnology" || type=="cell" || type=="ecology" || type=="evolution" || type=="molecular" || type=="otherb" || type=="paleontology" || type=="plants" || type=="veterinary") {
			tabtype2="Biology &blacktriangleright; "+tabs[type];
			if (type=="cell" || type=="molecular" || type=="paleontology" || type=="veterinary") tabtype2="Biology &blacktriangleright; "+tabs2[type];
		}
		if (type=="analytical" || type=="biochemistry" || type=="materials" || type=="otherc" || type=="polymers") {
			tabtype2="Chemistry &blacktriangleright; "+tabs[type];
			if (type=="analytical") tabtype2="Chemistry &blacktriangleright; "+tabs2[type];
		}
	} else if (source=="space.com" && type=="all") tabtype2="All Stories";
	else if (source=="nasa" && type=="recent" || source=="wired" && type=="ai") tabtype2=tabs2[type];
	else tabtype2=tabs[type];

	var feedTitle=document.getElementById("feedTitle");
	feedTitle.innerHTML=textNews+" &blacktriangleright; "+textFeedSource +" "+textRssFeed+" &blacktriangleright; "+tabtype2;

	var keys=Object.keys(tabs);
	var table = document.getElementById("tabstable");
	table.replaceChildren();

	var rowsCount=Math.ceil(keys.length/5);
	if (source=="phys.org") rowsCount++;

	// Phys.org subtable
	if (source=="phys.org") {
		var row = table.insertRow(-1);
		var cell1 = row.insertCell(0);
		var tabssubtable1 = document.createElement('table');
		tabssubtable1.setAttribute('cellpadding', "0px;");
		tabssubtable1.setAttribute('cellspacing', "0px;");
		tabssubtable1.setAttribute('width', "100%;");
		var subrow = tabssubtable1.insertRow(-1);
		var subcell = subrow.insertCell(0);
		subcell.setAttribute('style', "width: 280px; display: inline-block; textAlign: left; margin:2px;");
		var Div = document.createElement('div');
		Div.setAttribute('id', "menu_26_1");
		Div.setAttribute('onmouseenter', "showSubMenu(this, '"+lang+"', 'news');");
		Div.setAttribute('onmouseleave', "this.className='menu_not_selected_red'");
		Div.setAttribute('onclick', "showSubMenu(this, '"+lang+"', 'news');" );
		Div.setAttribute('class', "menu_not_selected_red");
		Div.setAttribute('style', "padding-left: 5px;");
		if (lang=="eng") Div.innerHTML="&#9679; Phys.org RSS Feed";
		if (lang=="rus") Div.innerHTML="&#9679; Phys.org RSS Строка";
		if (lang=="lat") Div.innerHTML="&#9679; Phys.org RSS Acies";
		subcell.appendChild(Div);
		cell1.appendChild(tabssubtable1);
		table.setAttribute("onmouseenter", "");
	}

	var tabssubtable2 = document.createElement('table');
	tabssubtable2.setAttribute('cellpadding', "0px;");
	tabssubtable2.setAttribute('cellspacing', "0px;");
	tabssubtable2.setAttribute('width', "100%;");

	for (var i=0; i<keys.length; i++) {
		if (i%5==0) var subrow = tabssubtable2.insertRow(-1);
		var subcell = subrow.insertCell(i%5);
		subcell.style.width='20%';
		if (keys.length<5) subcell.style.display='inline-block';
		subcell.style.textAlign='center';

		var Div = document.createElement('div');
		Div.dataset.shortTitle=tabs[keys[i]];
		if (typeof tabs2[keys[i]]!=="undefined") Div.dataset.fullTitle=tabs2[keys[i]];
		Div.style.margin='2px';
		if (type==keys[i]) Div.setAttribute('class', "menu_selected");
		else Div.setAttribute('class', "menu_not_selected_red");
		Div.setAttribute('id', "feed_"+keys[i]);
		Div.setAttribute('role', "button");
		Div.setAttribute('tabindex', "0");
		Div.setAttribute('onkeydown', "if(event.key==='Enter' || event.key===' ') { event.preventDefault(); this.click(); this.onmouseleave();}");
		Div.setAttribute('onmouseenter', "this.className='menu_selected'; if(typeof this.dataset.fullTitle!=='undefined') this.innerHTML=this.dataset.fullTitle;");
		Div.setAttribute('onmouseleave', "mouseOutTab('"+keys[i]+"', '"+type+"'); if(typeof this.dataset.fullTitle!=='undefined') this.innerHTML=this.dataset.shortTitle;");
		var divLink="news_"+lang+".html?source="+source+"&type="+keys[i];
		Div.setAttribute('onclick', "if (event.ctrlKey){ window.open('"+divLink+"'); } else { clickStarted = true; window.location.href='"+divLink+"'; };");
		Div.innerHTML=tabs[keys[i]];
		subcell.appendChild(Div);
	}

	var row = table.insertRow(-1);
	var cell1 = row.insertCell(0);
	cell1.appendChild(tabssubtable2);

	var Img = document.createElement('img');
	Img.setAttribute('tabindex', "0");
	Img.setAttribute('onkeydown', "if(event.key==='Enter' || event.key===' ') { event.preventDefault(); this.click(); this.onmouseleave();}");
	if (lang=="eng" || lang=="lat") {
		Img.setAttribute('alt', "Quick Tips");
		Img.setAttribute('title', "Tip: Use Navigation Keys - <kbd>&rlarr;</kbd> with <kbd>Shift</kbd> and <kbd>Home</kbd>, <kbd>End</kbd> for Contents Scroll");
	}
	if (lang=="rus") {
		Img.setAttribute('alt', "Быстрые Советы");
		Img.setAttribute('title', "Совет: Используйте Клавиши Навигации - <kbd>&rlarr;</kbd> с <kbd>Shift</kbd> и <kbd>Home</kbd>, <kbd>End</kbd> для Прокрутки Содержимого");
	}
	Img.setAttribute('style',  "height:27px; display: block;");
	Img.src="images/icons/feed/tips.svg";
	table.appendChild(Img);

	var Div = document.createElement('div');
	Div.setAttribute('id', "information_div");
	var a = document.createElement('a');
	a.setAttribute('href', "javascript:showInformation('"+lang+"');");
	a.setAttribute('tabindex', "0");
	a.setAttribute('onkeydown', "if(event.key==='Enter' || event.key===' ') { event.preventDefault(); this.click(); this.onmouseleave();}");
	a.setAttribute('title', textVersInfo);
	var Img2 = document.createElement('img');
	Img2.setAttribute('alt', textVersInfo);
	Img2.setAttribute('id', "information_img");
	Img2.setAttribute('class', "thumbnail_image_red_png");
	Img2.setAttribute('style', "height: 27px; display: block;");
	Img2.src="images/icons/html_editor/information_red.svg";
	a.appendChild(Img2);
	Div.appendChild(a);
	table.appendChild(Div);

	table.style.position='relative';
	Div.style.position='absolute';
	Img.style.position='absolute';

	if (keys.length==0) {
		Div.style.right='1px';
		Img.style.right='28px';
		Div.style.bottom='-28px';
		Img.style.bottom='-28px';
	} else if (keys.length%5==0) {
		Div.style.right='2px';
		Img.style.right='29px';
		Div.style.bottom='-27px';
		Img.style.bottom='-27px';
	} else {
		Div.style.right='2px';
		Img.style.right='29px';
		Div.style.bottom='0px';
		Img.style.bottom='0px';
	}

	adjustFeedScrollDiv();
}


function showInformation(lang) {
	$.ajax({
		url: "scripts/showFeed.js",
		success: function(data, textStatus, jqXHR) {
			var modStr = jqXHR.getResponseHeader('Last-Modified');
			var infoText;
			if (lang == 'rus') infoText = "Строка Новостей Версия 2.0. Создано - 24е Окт, 2025, Последнее Изменение - ";
			if (lang == 'eng') infoText = "News Feed Version 2.0. Created At - 24th of Oct, 2025, Last Modification - ";
			if (lang == 'lat') infoText = "Nuntium Acies Verso 2.0. Creatus - 24th of Oct, 2025, Ultimo Modificatio - ";
			alert(infoText + formatDate(modStr, lang) + ".");
		}
	});
}

function loadFeednami(type, source, lang, feedURL, loadAttempt) {

	var textReload, textFeed, textLoadAttempt, loadAttemptSpan;
	if (lang == "eng") {
		textReload = "Reload Page";
		textFeed = "News Feed ";
		textLoadAttempt = "Load Attempt: ";
	}
	if (lang == "lat") {
		textReload = "Paginam Renova";
		textFeed = "Nuntium Acies ";
		textLoadAttempt = "Conatus Onerationis: ";
	}
	if (lang == "rus") {
		textReload = "Обновите Страницу";
		textFeed = "Строка Новостей ";
		textLoadAttempt = "Попытка Загрузки: ";
	}

	const apiURL = "https://proxy.wasmer.app?url=" + encodeURIComponent(feedURL);
	fetch(apiURL)
		.then(() => {
			feednami.load(feedURL, function (result) {
				loadAttemptSpan = document.getElementById("loadAttempt");
				if (loadAttemptSpan) loadAttemptSpan.innerHTML="";
				adjustFeedScrollDiv();
				if (result.error) {
					document.getElementById("loadingSpanTitle").innerHTML = result.error.message + "  " + feedIconText(feedURL, lang);
					document.getElementById("loadingDiv").setAttribute("style", "display:none");
					adjustFeedScrollDiv();
					return;
				}
				result.feedXML = feedURL;
				optimizeUpdateResult(type, source, lang, result);
			});
		})
		.catch((e) => {
			if (loadAttempt < 10) {
				loadAttempt++;
				loadAttemptSpan = document.getElementById("loadAttempt");
				if (loadAttemptSpan) loadAttemptSpan.innerHTML="<br><b>" + textLoadAttempt +  loadAttempt + "</b>";
				adjustFeedScrollDiv();
				loadFeednami(type, source, lang, feedURL, loadAttempt);
				return;
			} else {
				var table2 = document.getElementById("messagetable");
				if (!table2) return;
				table2.replaceChildren();
				var row = table2.insertRow(-1);
				var cell1 = row.insertCell(0);
				cell1.className = 'text_red';
				cell1.setAttribute("style", "text-align: center; padding-top: 10px; padding-bottom: 10px;");
				cell1.innerHTML = "<b>" + textFeed + "</b>" + feedIconText(feedURL, lang) + "<br><b>" + e.message + "</b><br><a href='javascript:location.reload();' class='standardb_red' onkeydown='if(event.key===\"Enter\" || event.key===\" \") { event.preventDefault(); this.click(); this.onmouseleave();}'>" + textReload + "</a>";
				adjustFeedScrollDiv();
			}
		});
}

function showFeed(type, source, lang) {
	generateTabs(type, source, lang);

	var feedURL = "";
	if (source == "cbs") {
		var cbsTypes = {
			"top": "https://www.cbsnews.com/latest/rss/main",
			"us": "https://www.cbsnews.com/latest/rss/us",
			"politics": "https://www.cbsnews.com/latest/rss/politics",
			"world": "https://www.cbsnews.com/latest/rss/world",
			"health": "https://www.cbsnews.com/latest/rss/health",
			"moneywatch": "https://www.cbsnews.com/latest/rss/moneywatch",
			"science": "https://www.cbsnews.com/latest/rss/science",
			"technology": "https://www.cbsnews.com/latest/rss/technology",
			"entertainment": "https://www.cbsnews.com/latest/rss/entertainment",
			"space": "https://www.cbsnews.com/latest/rss/space"
		};
		if (cbsTypes[type]) feedURL = cbsTypes[type];
	}

	if (source == "nasa") {
		var nasaTypes = {
			"releases": "https://www.nasa.gov/news-release/feed/",
			"recent": "https://www.nasa.gov/feed/",
			"image": "https://www.nasa.gov/feeds/iotd-feed/",
			"technology": "https://www.nasa.gov/technology/feed/",
			"aeronautics": "https://www.nasa.gov/aeronautics/feed/",
			"iss": "https://www.nasa.gov/missions/station/feed/",
			"artemis": "https://www.nasa.gov/missions/artemis/feed/"
		};
		if (nasaTypes[type]) feedURL = nasaTypes[type];
	}

	if (source == "phys.org") {
		var physTypes = {
			"all": "https://phys.org/rss-feed/",
			"earth": "https://phys.org/rss-feed/earth-news/earth-sciences/",
			"environment": "https://phys.org/rss-feed/earth-news/environment/",
			"archaeology": "https://phys.org/rss-feed/science-news/archaeology-fossils/",
			"economics": "https://phys.org/rss-feed/science-news/economics-business/",
			"education": "https://phys.org/rss-feed/science-news/education/",
			"mathematics": "https://phys.org/rss-feed/science-news/mathematics/",
			"other": "https://phys.org/rss-feed/science-news/sci-other/",
			"political": "https://phys.org/rss-feed/science-news/political-science/",
			"social": "https://phys.org/rss-feed/science-news/social-sciences/",
			"bio": "https://phys.org/rss-feed/nanotech-news/bio-medicine/",
			"nanomaterials": "https://phys.org/rss-feed/nanotech-news/nano-materials/",
			"nanophysics": "https://phys.org/rss-feed/nanotech-news/nano-physics/",
			"condensed": "https://phys.org/rss-feed/physics-news/materials/",
			"general": "https://phys.org/rss-feed/physics-news/physics/",
			"optics": "https://phys.org/rss-feed/physics-news/optics-photonics/",
			"plasma": "https://phys.org/rss-feed/physics-news/plasma/",
			"quantum": "https://phys.org/rss-feed/physics-news/quantum-physics/",
			"soft": "https://phys.org/rss-feed/physics-news/soft-matter/",
			"superconductivity": "https://phys.org/rss-feed/physics-news/superconductivity/",
			"astrobiology": "https://phys.org/rss-feed/space-news/astrobiology/",
			"astronomy": "https://phys.org/rss-feed/space-news/astronomy/",
			"planetary": "https://phys.org/rss-feed/space-news/planetary-sciences/",
			"space": "https://phys.org/rss-feed/space-news/space-exploration/",
			"agriculture": "https://phys.org/rss-feed/biology-news/agriculture/",
			"biotechnology": "https://phys.org/rss-feed/biology-news/biotechnology/",
			"cell": "https://phys.org/rss-feed/biology-news/microbiology/",
			"ecology": "https://phys.org/rss-feed/biology-news/ecology/",
			"evolution": "https://phys.org/rss-feed/biology-news/evolution/",
			"molecular": "https://phys.org/rss-feed/biology-news/molecular-computational/",
			"otherb": "https://phys.org/rss-feed/biology-news/biology-other/",
			"paleontology": "https://phys.org/rss-feed/biology-news/paleontology/",
			"plants": "https://phys.org/rss-feed/biology-news/plants-animals/",
			"veterinary": "https://phys.org/rss-feed/biology-news/veterinary-medicine/",
			"analytical": "https://phys.org/rss-feed/chemistry-news/analytical-chemistry/",
			"biochemistry": "https://phys.org/rss-feed/chemistry-news/biochemistry/",
			"materials": "https://phys.org/rss-feed/chemistry-news/materials-science/",
			"otherc": "https://phys.org/rss-feed/chemistry-news/chemistry-other/",
			"polymers": "https://phys.org/rss-feed/chemistry-news/polymers/"
		};
		if (physTypes[type]) feedURL = physTypes[type];
	}

	if (source == "space.com") {
		var spaceComTypes = {
			"all": "https://www.space.com/feeds.xml"
		};
		if (spaceComTypes[type]) feedURL = spaceComTypes[type];
	}

	if (source == "wired") {
		var wiredTypes = {
			"top": "https://www.wired.com/feed/rss",
			"business": "https://www.wired.com/feed/category/business/latest/rss",
			"ai": "https://www.wired.com/feed/tag/ai/latest/rss",
			"culture": "https://www.wired.com/feed/category/culture/latest/rss",
			"gear": "https://www.wired.com/feed/category/gear/latest/rss",
			"ideas": "https://www.wired.com/feed/category/ideas/latest/rss",
			"science": "https://www.wired.com/feed/category/science/latest/rss",
			"security": "https://www.wired.com/feed/category/security/latest/rss",
			"backchannel": "https://www.wired.com/feed/category/backchannel/latest/rss",
			"guides": "https://www.wired.com/feed/tag/wired-guide/latest/rss"
		};
		if (wiredTypes[type]) feedURL = wiredTypes[type];
	}

	if (source == "yahoo") {
		var yahooTypes = {
			"top": "https://news.yahoo.com/rss",
			"world": "https://news.yahoo.com/rss/world",
			"us": "https://news.yahoo.com/rss/us",
			"politics": "https://news.yahoo.com/rss/politics",
			"health": "https://news.yahoo.com/rss/health",
			"finance": "https://news.yahoo.com/rss/finance",
			"science": "https://news.yahoo.com/rss/science",
			"sports": "https://news.yahoo.com/rss/sports",
			"entertainment": "https://news.yahoo.com/rss/entertainment",
			"lifestyle": "https://news.yahoo.com/rss/lifestyle"
		};
		if (yahooTypes[type]) feedURL = yahooTypes[type];
	}

	if (source == "yonhap") {
		var yonhapTypes = {
			"all": "https://en.yna.co.kr/RSS/news.xml",
			"national": "https://en.yna.co.kr/RSS/national.xml",
			"northkorea": "https://en.yna.co.kr/RSS/nk.xml",
			"economy": "https://en.yna.co.kr/RSS/economy-finance.xml",
			"biz": "https://en.yna.co.kr/RSS/biz.xml",
			"culture": "https://en.yna.co.kr/RSS/culture.xml",
			"sports": "https://en.yna.co.kr/RSS/sports.xml"
		};
		if (yonhapTypes[type]) feedURL = yonhapTypes[type];
	}

	var loadingDiv = document.createElement("div");
	loadingDiv.id = "loadingDiv";
	loadingDiv.textContent = ".";

	var processedDiv = document.createElement("div");
	processedDiv.id = "processedDiv";
	processedDiv.style.display = "none";
	var processedLine = document.createElement("div");
	processedLine.innerHTML = "#&#128202;: <span id='processedCount'>0</span> | #&#128681;: <span id='leftCount'>0</span>";
	var passedLine = document.createElement("div");
	passedLine.innerHTML = "#&#9989;: <span id='passedCount'>0</span>";
	var failedLine = document.createElement("div");
	failedLine.innerHTML = "#&#10062;: <span id='failedCount'>0</span>";
	processedDiv.appendChild(processedLine);
	processedDiv.appendChild(passedLine);
	processedDiv.appendChild(failedLine);

	var loadingDivTitleSkip = document.createElement("div");
	loadingDivTitleSkip.id = "loadingDivTitleSkip";
	var loadingSpanTitle = document.createElement("span");
	loadingSpanTitle.id = "loadingSpanTitle";
	if (lang === "rus") {
		loadingSpanTitle.innerHTML= "Читается Строка Новостей " + feedIconText(feedURL, lang);
	} else if (lang === "eng") {
		loadingSpanTitle.innerHTML = "Reading News Feed " + feedIconText(feedURL, lang);
	} else if (lang === "lat") {
		loadingSpanTitle.innerHTML = "Lectio Nuntium Acies " + feedIconText(feedURL, lang);
	}
	var loadAttempt = document.createElement("span");
	loadAttempt.id = "loadAttempt";
	loadingDivTitleSkip.appendChild(loadingSpanTitle);
	loadingDivTitleSkip.appendChild(loadAttempt);

	var container = document.createElement("b");
	container.appendChild(loadingDivTitleSkip);
	container.appendChild(loadingDiv);
	container.appendChild(processedDiv);

	var preloadImg = new Image();
	preloadImg.onload = function () {
		var table = document.getElementById("messagetable");
		table.replaceChildren();
		var row = table.insertRow(-1);
		var cell1 = row.insertCell(0);
		cell1.className = 'text_red';
		cell1.setAttribute("style", "text-align: center; padding-top: 10px; padding-bottom: 10px;");
		cell1.appendChild(container);
		adjustFeedScrollDiv();
		loadFeednami(type, source, lang, feedURL, 1);
	}
	preloadImg.setAttribute('src', 'images/icons/feed/feed_icon.svg');
}

// ------------- Functions ---------------- //

function getLocalStorageData(par) {
	if (typeof localStorage[par] === "undefined") {
		return {};
	} else {
		return JSON.parse(localStorage[par]);
	}
}

// ------------- End of Functions ---------------- //


// ------------- Optimize ---------------- //

function optimizeUpdateResult(type, source, lang, resultOrig) {
	var result, locStUpdateData, locStPar, items, entry;

	result = {};
	result.feedXML = resultOrig.feedXML;

	if (source == "cbs") result.image = "images/icons/feed/cbs_news_logo.svg";
	if (source == "nasa") result.image = "images/icons/feed/nasa_worm_logo.svg";
	if (source == "phys.org") result.image = "images/icons/feed/phys_org_logo.png";
	if (source == "space.com") result.image = "images/icons/feed/space_com_logo.svg";
	if (source == "wired") result.image = "images/icons/feed/wired_logo.svg";
	if (source == "yahoo") result.image = "images/icons/feed/yahoo_news_logo.svg";
	if (source == "yonhap") result.image = "images/icons/feed/yonhap_news_logo.svg";

	result.totalUpdated = 0;
	var locStUpdateData = {};

	if (source == "cbs" || (source == "nasa" && type != "image") || source == "yonhap" || source == "yahoo") {
		locStPar = source + "_" + type + "_updates";
		locStUpdateData = getLocalStorageData(locStPar);
	}

	result.entries = [];
	if (resultOrig.feed.entries.length == 0) return result;

	result.title = resultOrig.feed.meta.title;
	result.description = resultOrig.feed.meta.description;
	if (source == "wired" && type != "top") result.description = result.title;
	result.link = resultOrig.feed.meta.link;
	if (resultOrig.feed.meta.date != null) {
		result.date_ms = new Date(resultOrig.feed.meta.date).getTime();
	}
	if (resultOrig.feed.meta.copyright != null) {
		result.copyright = resultOrig.feed.meta.copyright;
	}

	items = resultOrig.feed.entries;

	for (var i = 0; i < items.length; i++) {
		entry = items[i];
		result.entries[i] = {};
		result.entries[i].title = entry.title;
		result.entries[i].media = {};
		result.entries[i].media.comment = "";
		result.entries[i].storage = {};
		result.entries[i].storage.updateProcessed = 0;
		result.entries[i].storage.updateInitiated = 0;
		result.entries[i].storage.preloadStarted = 0;
		result.entries[i].storage.preloadPF = null;

		// --- CBS ---
		if (source == "cbs") {
			// do not store small images
			// if (entry["rss:image"] != null) result.entries[i].media.url = entry["rss:image"]["#"];
			result.entries[i].media.url = "images/icons/error/no_image.png";
			if (lang == "rus") result.entries[i].media.comment = "Картинка Отсутствует";
			if (lang == "eng" || lang == "lat") result.entries[i].media.comment = "Image Absent";
			result.entries[i].media.width = 450;
			result.entries[i].summary = entry.description;
		}

		// --- NASA ---
		if (source == "nasa") {
			if (type == "image") {
				result.entries[i].media.url = entry["enclosures"][0].url;
				result.entries[i].media.width = 450;
				result.entries[i].summary = entry.description;
			} else {
				result.entries[i].media.url = "images/icons/error/no_image.png";
				if (lang == "rus") result.entries[i].media.comment = "Картинка Отсутствует";
				if (lang == "eng" || lang == "lat") result.entries[i].media.comment = "Image Absent";
				result.entries[i].media.width = 450;
				result.entries[i].summary = entry["rss:description"]["#"];
			}
		}

		// --- phys.org ---
		if (source == "phys.org") {
			var tmbPos, filename;
			// do not store small images
			// result.entries[i].media.url = entry["media:thumbnail"]["@"].url;
			result.entries[i].media.url = "images/icons/error/no_image.png";
			if (lang == "rus") result.entries[i].media.comment = "Картинка Отсутствует";
			if (lang == "eng" || lang == "lat") result.entries[i].media.comment = "Image Absent";
			if (entry["media:thumbnail"] != null) {
				tmbPos = entry["media:thumbnail"]["@"].url.indexOf("tmb/");
				if (tmbPos != -1) {
					result.entries[i].storage.updateProcessed = 1;
					result.totalUpdated++;
					result.entries[i].media.origUrl = result.entries[i].media.url;
					result.entries[i].media.origComment = result.entries[i].media.comment;
					filename = entry["media:thumbnail"]["@"].url.substr(tmbPos + 4);
					result.entries[i].media.url = "https://scx2.b-cdn.net/gfx/news/" + filename;
					result.entries[i].media.comment = "";
				}
			}
			result.entries[i].media.width = 450;
			result.entries[i].summary = entry.description;
		}

		// --- space.com ---
		if (source == "space.com") {
			var isVideo, videos, dotPos, ext;
			if (entry.image != null && entry.image.url != null) {
				result.entries[i].media.url = entry.image.url;
				result.entries[i].media.comment = entry["media:content"]["media:text"]["#"];
				if (lang == "rus") result.entries[i].media.comment += "<br>&bull;&nbsp;Кредит: ";
				if (lang == "eng" || lang == "lat") result.entries[i].media.comment += "<br>&bull;&nbsp;Credit: ";
				result.entries[i].media.comment += entry["media:content"]["media:credit"]["#"];
			} else {
				result.entries[i].media.url = "images/icons/error/no_image.png";
				if (lang == "rus") result.entries[i].media.comment = "Картинка Отсутствует";
				if (lang == "eng" || lang == "lat") result.entries[i].media.comment = "Image Absent";
			}
			result.entries[i].media.width = 450;
			result.entries[i].summary = entry.summary;
		}

		// --- wired ---
		if (source == "wired") {
			var videos, dotPos, ext, isVideo;
			if (entry.image != null && entry.image.url != null) {
				isVideo = 0;
				videos = ["mp4", "3gp", "ogg"];
				dotPos = entry.image.url.lastIndexOf(".");
				if (dotPos != -1) {
					ext = entry.image.url.substr(dotPos + 1);
					if (videos.includes(ext)) isVideo = 1;
				}
				if (isVideo == 0) {
					result.entries[i].media.url = entry.image.url;
				} else {
					result.entries[i].media.url = "images/icons/feed/video.jpg";
					if (lang == "rus") result.entries[i].media.comment = "Запись Содержит Видео";
					if (lang == "eng") result.entries[i].media.comment = "Record Contains Video";
					if (lang == "lat") result.entries[i].media.comment = "Recordatio Continet Video";
					result.entries[i].video = entry.image.url;
				}
			} else {
				result.entries[i].media.url = "images/icons/error/no_image.png";
				if (lang == "rus") result.entries[i].media.comment = "Картинка Отсутствует";
				if (lang == "eng" || lang == "lat") result.entries[i].media.comment = "Image Absent";
			}
			result.entries[i].media.width = 450;
			result.entries[i].summary = entry.summary;
		}

		// --- yahoo ---
		if (source == "yahoo") {
			var desc2, imgPos, q1Pos, q2Pos;
			if (entry["media:content"] == null) {
				result.entries[i].media.url = "images/icons/error/no_image.png";
				if (lang == "rus") result.entries[i].media.comment = "Картинка Отсутствует";
				if (lang == "eng" || lang == "lat") result.entries[i].media.comment = "Image Absent";
			} else {
				result.entries[i].media.url = entry["media:content"]["@"].url;
			}
			result.entries[i].media.width = 450;
			result.entries[i].summary = entry.summary;
		}

		// --- yonhap ---
		if (source == "yonhap") {
			var j;
			if (typeof entry.enclosures === "undefined" || typeof entry.enclosures[0] === "undefined" || entry.enclosures[0].url == null) {
				result.entries[i].media.url = "images/icons/error/no_image.png"; 
				if (lang == "rus") result.entries[i].media.comment = "Картинка Отсутствует";
				if (lang == "eng" || lang == "lat") result.entries[i].media.comment = "Image Absent";
			} else {
				result.entries[i].media.url = entry.enclosures[0].url;
				if (entry.enclosures.length > 1) {
					result.entries[i].additMediaUrl = [];
					for (j = 1; j < entry.enclosures.length; j++) {
						result.entries[i].additMediaUrl[j - 1] = entry.enclosures[j].url;
					}
				}
			}
			result.entries[i].media.width = 450;
			if (entry.description != "(END)") {
				result.entries[i].summary = entry.description;
			}
		}

		// --- Common for all ---
		if (result.entries[i].media.width >= 450) result.entries[i].media.width = 450;
		if (entry.comments != null) result.entries[i].media.comment = entry.comments;
		if (typeof entry.source !== "undefined") {
			result.entries[i].source = {};
			result.entries[i].source.title = entry.source.title;
			result.entries[i].source.url = entry.source.url;
		}
		if (typeof entry["dc:creator"] !== "undefined") {
			result.entries[i].creator = [];
			if (source != "wired") {
				if (typeof entry["dc:creator"]["#"] !== "undefined") {
					result.entries[i].creator[0] = entry["dc:creator"]["#"];
				} else {
					for (var j = 0; j < entry["dc:creator"].length; j++) {
						result.entries[i].creator[j] = entry["dc:creator"][j]["#"];
					}
				}
			} else {
				result.entries[i].creator = entry["dc:creator"]["#"].split(",");
				for (var j = 0; j < result.entries[i].creator.length; j++) {
					result.entries[i].creator[j] = result.entries[i].creator[j].trim();
				}
			}
		}

		// --- rss:author ---
		if (typeof entry["rss:author"] !== "undefined") {
			result.entries[i].creator = [];
			result.entries[i].creatorEmail = [];
			if (typeof entry["rss:author"].name !== "undefined") {
				result.entries[i].creator[0] = entry["rss:author"].name;
				result.entries[i].creatorEmail[0] = entry["rss:author"].email;
			} else {
				for (var j = 0; j < entry["rss:author"].length; j++) {
					result.entries[i].creator[j] = entry["rss:author"][j].name;
					result.entries[i].creatorEmail[j] = entry["rss:author"][j].email;
				}
			}
		}

		// --- rss:category ---
		if (typeof entry["rss:category"] !== "undefined" && source != "wired") {
			result.entries[i].category = [];
			if (typeof entry["rss:category"]["#"] !== "undefined") {
				result.entries[i].category[0] = entry["rss:category"]["#"];
			} else {
				for (var j = 0; j < entry["rss:category"].length; j++) {
					result.entries[i].category[j] = entry["rss:category"][j]["#"];
				}
			}
		}

		// --- media:keywords ---
		if (typeof entry["media:keywords"] !== "undefined") {
			result.entries[i].category = entry["media:keywords"]["#"].split(",");
			for (var j = 0; j < result.entries[i].category.length; j++) {
				result.entries[i].category[j] = result.entries[i].category[j].trim();
			}
		}

		// --- dc:subject ---
		if (typeof entry["dc:subject"] !== "undefined") {
			result.entries[i].subject = entry["dc:subject"]["#"];
		}

		result.entries[i].link = entry.link;
		result.entries[i].date_ms = entry.date_ms;

		// --- Prevous Updates Load ---
		if (source == "cbs" || (source == "nasa" && type != "image") || source == "yonhap" || source == "yahoo") { 
			if (typeof locStUpdateData[entry.link] !== "undefined") {
				result.entries[i].storage.updateProcessed = 1;
				result.totalUpdated++;
				if (typeof locStUpdateData[entry.link].summary !== "undefined") {
					result.entries[i].summary = locStUpdateData[entry.link].summary;
				}
				if (typeof locStUpdateData[entry.link].mediaUrl !== "undefined") {
					result.entries[i].media.origUrl = result.entries[i].media.url;
					result.entries[i].media.url = locStUpdateData[entry.link].mediaUrl;
				}
				if (typeof locStUpdateData[entry.link].mediaComment !== "undefined") {
					result.entries[i].media.origComment = result.entries[i].media.comment;
					result.entries[i].media.comment = locStUpdateData[entry.link].mediaComment;
				}
				if (typeof locStUpdateData[entry.link].creator!== "undefined") {
					result.entries[i].creator = [];
					for (var j = 0; j < locStUpdateData[entry.link].creator.length; j++) {
						result.entries[i].creator[j] = locStUpdateData[entry.link].creator[j];
					}
				}
				if (typeof locStUpdateData[entry.link].category !== "undefined") {
					result.entries[i].category = [];
					for (var j = 0; j < locStUpdateData[entry.link].category.length; j++) {
						result.entries[i].category[j] = locStUpdateData[entry.link].category[j];
					}
				}
				if (typeof locStUpdateData[entry.link].seeAlso !== "undefined") {
					result.entries[i].seeAlso = [];
					for (var j = 0; j < locStUpdateData[entry.link].seeAlso.length; j++) {
						result.entries[i].seeAlso[j] = locStUpdateData[entry.link].seeAlso[j];
					}
				}
				if (typeof locStUpdateData[entry.link].video !== "undefined") {
					result.entries[i].video = locStUpdateData[entry.link].video;
				}
			}
		}

	}

	// --- Sort Feed by Date Desc ---
	var len = result.entries.length;
	for (var i = len - 1; i >= 0; i--) {
		for (var j = 1; j <= i; j++) {
			if (result.entries[j - 1].date_ms < result.entries[j].date_ms) {
				var temp = result.entries[j - 1];
				result.entries[j - 1] = result.entries[j];
				result.entries[j] = temp;
			}
		}
	}
	if (resultOrig.feed.meta.date == null) {
		result.date_ms = result.entries[0].date_ms;
	}

	document.getElementById("processedCount").innerHTML = result.totalUpdated;
	document.getElementById("leftCount").innerHTML = result.entries.length - result.totalUpdated;
	showFeedTitle(type, source, lang, result);
}

// ------------- End of Optimize---------------- //
// ------------- Update ---------------- //
function removeUnusedUpdates(source, type, result) {
	var locStUpdateData, locStPar, objToRemove, i, objInUse;

	locStUpdateData = {};
	locStPar = source + "_" + type + "_updates";
	locStUpdateData = getLocalStorageData(locStPar);

	objToRemove = [];
	for (var key in locStUpdateData) {
		objInUse = 0;
		for (i = 0; i < result.entries.length; i++) {
			if (key == result.entries[i].link) {
				objInUse = 1;
				break;
			}
		}
		if (objInUse == 0) objToRemove.push(key);
	}
	for (i = 0; i < objToRemove.length; i++) {	
		delete locStUpdateData[objToRemove[i]];
	}
	localStorage[source + "_" + type + "_updates"] = JSON.stringify(locStUpdateData);
}


function consoleMetas(doc) {
	var metas, j, k, toLog;

	metas = doc.getElementsByTagName('meta');
	for (j = 0; j < metas.length; j++) {
		toLog = "meta[" + j + "]: ";
		for (k = 0; k < metas[j].attributes.length; k++) {
			toLog += metas[j].attributes[k].name + "=" + metas[j].attributes[k].nodeValue + ", ";
		}
		console.log(toLog);
	}
}


function checkProcessedCount(source, type, result, lang, pf = 1) {

	var processedCount, nextUpdateRecord, nextUpdateRecordSet, j, passedCount, failedCount, failedCountInt, failedCountTitle;

	if (skipUpdates) {
		var table2 = document.getElementById("messagetable");
		table2.replaceChildren();
		$("#processedDiv").hide();
		adjustFeedScrollDiv();
		return;
	}

	// failed
	if (pf == 0) {
		failedCount = document.getElementById("failedCount");
		failedCountInt = parseInt(failedCount.innerHTML) + 1;
		failedCount.innerHTML = failedCountInt;
		failedCountTitle = document.getElementById("failedCountTitle");
		failedCountTitle.innerHTML = "&nbsp;(#&#10062;: " + failedCountInt + ")";
		processedCount = document.getElementById("processedCount");
		result.totalUpdated++;
		processedCount.innerHTML = (result.totalUpdated + 1);
		document.getElementById("leftCount").innerHTML = (result.entries.length - result.totalUpdated);
	}

	processedCount = 0;
	nextUpdateRecord = -1;
	nextUpdateRecordSet = 0;
	for (j = 0; j < result.entries.length; j++) {
		if (result.entries[j].storage.updateProcessed == 1) {
			processedCount++;
		} 
		if (nextUpdateRecordSet == 0 && result.entries[j].storage.updateInitiated == 0 && result.entries[j].storage.updateProcessed == 0) {
			nextUpdateRecord = j;
			nextUpdateRecordSet = 1;
		} 
	}
	if (processedCount == result.entries.length) {
		var table2 = document.getElementById("messagetable");
		table2.replaceChildren();
		$("#processedDiv").hide();
		adjustFeedScrollDiv();
		return;
	} else {
		// passed
		if (pf == 1) {
			passedCount = document.getElementById("passedCount");
			passedCount.innerHTML = parseInt(passedCount.innerHTML) + 1;
			processedCount = document.getElementById("processedCount");
			result.totalUpdated++;
			processedCount.innerHTML = (result.totalUpdated + 1);
			document.getElementById("leftCount").innerHTML = (result.entries.length - result.totalUpdated);
		}
		if (nextUpdateRecordSet == 1) {
			result.entries[nextUpdateRecord].storage.updateInitiated = 1;
			update(nextUpdateRecord, source, type, result, lang);
		}
	}
}


function update(i, source, type, result, lang, updateAttempt = 1) {

	var textUpdateRecord, textUpdateAbsent, textUpdateLoadError, textReloadPage, textUpdateAttempt="";
	var doc, mediaURL, property;
	var description, searchDoc, contentPos, scriptEndPos , jsonPosSt, jsonPosEd, jsonText, jsonDATA, mediaComment;
	var categories, creators, properties, seeAlso, videoURL, locStUpdateDataNew, locStPar, j;

	if (result.entries[i].storage.updateProcessed == 1) return;
	if (skipUpdates == 1) return;

	if (lang == "rus") {
		textUpdateRecord = "Обновление Записи";
		textUpdateAbsent = "Обновление Отсутствует";
		textUpdateLoadError = "Ошибка Загрузки Обновления";
		textReloadPage = "Обновите Страницу";
	}
	if (lang == "eng") {
		textUpdateRecord = "Updating Record";
		textUpdateAbsent = "Update Absent";
		textUpdateLoadError = "Update Load Error";
		textReloadPage = "Reload Page";
	}
	if (lang == "lat") {
		textUpdateRecord = "Updating Monumentum";
		textUpdateAbsent = "Renovatio Abest";
		textUpdateLoadError = "Error Onerationis Renovationis";
		textReloadPage = "Paginam Reficere";
	}

	textUpdateAttempt = updateAttempt > 1 ? "/" + updateAttempt : "";
	document.getElementById("loadingSpanTitle").innerHTML = textUpdateRecord + " #" + (i + 1) + textUpdateAttempt + ".&nbsp;";

	$.ajax({
		type: "GET",
		url: "https://proxy.wasmer.app?url=" + encodeURIComponent(result.entries[i].link),
		cache: false,
		dataType: "text",
		success: function(data) {

			if (skipUpdates == 1) return;
			if (updateAttempt > 1) textUpdateAttempt = "/" + updateAttempt;
			document.getElementById("loadingSpanTitle").innerHTML = textUpdateRecord + " #" + (i + 1) + textUpdateAttempt + ".&nbsp;";

			doc = (new DOMParser).parseFromString(data, "text/html");

			mediaURL = null;
			property = doc.querySelector('meta[property="og:image"]');
			if (property != null) mediaURL = property.content;

			if (source == "nasa") { // do not update NASA description
				description = result.entries[i].summary;
			} else {
				description = null;
				property = doc.head.querySelector('meta[name="description"]');
				if (property != null) description = property.content;
				if (description == null) {
					property = doc.head.querySelector('meta[property="og:description"]');
					if (property != null) description = property.content;
				}
				if (description == null) {
					property = doc.head.querySelector('meta[name="twitter:description"]');
					if (property != null) description = property.content;
				}
			}
			if (description == null || mediaURL == null) {
				searchDoc = doc;
				mediaURL = null;
				property = searchDoc.querySelector('meta[property="og:image"]');
				if (property != null) mediaURL = property.content;

				if (source != "nasa") { // do not update NASA description
					property = searchDoc.querySelector('meta[name="description"]');
					if (property != null) description = property.content;
					if (description == null) {
						property = searchDoc.head.querySelector('meta[property="og:description"]');
						if (property != null) description = property.content;
					}
					if (description == null) {
						property = searchDoc.head.querySelector('meta[name="twitter:description"]');
						if (property != null) description = property.content;
					}
				}
			} else {
				searchDoc = doc.head;
			}

			if (description != null && mediaURL != null) {


				const safeParseJSON = (jsonText) => {
					try {
						return JSON.parse(jsonText);
					} catch {
						return null;
					}
				};
				if (source == "yahoo") {
					contentPos = 0;
					while (contentPos != -1) {
						contentPos = data.indexOf("\"@context\"", contentPos+1);
						if (contentPos != -1) {
							scriptEndPos = data.indexOf("</script>", contentPos + 1);
							jsonText = data.substr(contentPos - 1, scriptEndPos - contentPos + 1);
							jsonDATA = safeParseJSON(jsonText);
							if (jsonDATA !=null && typeof jsonDATA.creator !== "undefined" && typeof jsonDATA.creator.name !== "undefined") {
//								if (typeof jsonDATA.image !== "undefined" && typeof jsonDATA.image.url !== "undefined") {
//									mediaURL = jsonDATA.image.url;
//								}
								creators = [];
								creators[0]=jsonDATA.creator.name;
								break;
							}
						}
					}
				}
				if (source == "yonhap") {
					contentPos = data.indexOf("CONTENT_DATA");
					if (contentPos != -1) {
						jsonPosSt = data.indexOf("JSON.stringify", contentPos + 1);
						jsonPosEd = data.indexOf("});", jsonPosSt + 1);
						jsonText = data.substr(jsonPosSt + 15, jsonPosEd - jsonPosSt - 14);
						jsonDATA = safeParseJSON(jsonText);
						if (jsonDATA!=null) {
							description = jsonDATA.BODY;
							if (description == "\n") description = "";
						}
					} else {
						description = null;
					}
				}

				var qPos;
				if (mediaURL != null) {
					qPos = mediaURL.indexOf("?");
					if (qPos != -1) mediaURL = mediaURL.substr(0, qPos);
				} else {
					mediaURL = result.entries[i].media.url;
				}

				mediaComment = null;
				property = searchDoc.querySelector('meta[property="og:image:alt"]');
				if (property != null) mediaComment = property.content;

				categories = null;
				properties = searchDoc.querySelectorAll('meta[name="keywords"]');
				if (properties != null) categories = properties;
				if (categories == null) {
					properties = doc.head.querySelectorAll('meta[property="article:section"]');
					if (properties != null) categories = properties;
				}

				seeAlso = null;
				properties = doc.head.querySelectorAll('meta[property="og:see_also"]');
				if (properties != null) seeAlso = properties;

				videoURL = null;
				property = searchDoc.querySelector('meta[property="og:video"]');
				if (property != null) videoURL = property.content;
				if (videoURL == null) {
					property = searchDoc.querySelector('meta[property="og:video:url"]');
					if (property != null) videoURL = property.content;
				}

				locStUpdateDataNew = {};
				if (description != null) {
					result.entries[i].summary = description;
					locStUpdateDataNew.summary = description;
				}
				if (mediaURL != null) {
					result.entries[i].media.origUrl = result.entries[i].media.url;
					result.entries[i].media.url = mediaURL;
					locStUpdateDataNew.mediaUrl = mediaURL;
					result.entries[i].media.comment = "";
					result.entries[i].media.origComment = "";
					locStUpdateDataNew.mediaComment = "";
				}
				if (mediaComment != null) {
					result.entries[i].media.origComment = result.entries[i].media.comment;
					result.entries[i].media.comment = mediaComment;
					locStUpdateDataNew.mediaComment = mediaComment;
				}
				if (creators != null) {
					result.entries[i].creator = [];
					locStUpdateDataNew.creator = [];
					for (j = 0; j < creators.length; j++) {
						result.entries[i].creator[j] = creators[j];
						locStUpdateDataNew.creator[j] = creators[j];
					}
				}
				if (categories != null) {
					result.entries[i].category = [];
					locStUpdateDataNew.category = [];
					for (j = 0; j < categories.length; j++) {
						result.entries[i].category = result.entries[i].category.concat(categories[j].content.split(","));
						locStUpdateDataNew.category = locStUpdateDataNew.category.concat(categories[j].content.split(","));
					}
				}
				if (seeAlso != null) {
					result.entries[i].seeAlso = [];
					locStUpdateDataNew.seeAlso = [];
					for (j = 0; j < seeAlso.length; j++) {
						result.entries[i].seeAlso[j] = seeAlso[j].content;
						locStUpdateDataNew.seeAlso[j] = seeAlso[j].content;
					}
				}
				if (videoURL != null) {
					result.entries[i].video = videoURL;
					locStUpdateDataNew.video = videoURL;
				}
				locStPar = source + "_" + type + "_updates";
				var locStUpdateData = getLocalStorageData(locStPar);
				locStUpdateData[result.entries[i].link] = locStUpdateDataNew;
				localStorage[source + "_" + type + "_updates"] = JSON.stringify(locStUpdateData);
				showEntry(type, source, lang, result, i, 0);
				result.entries[i].storage.updateProcessed = 1;
				checkProcessedCount(source, type, result, lang, 1);
				return;
			} else {
				// update absent
				textUpdateAttempt = updateAttempt > 1 ? ", updateAttempt = " + updateAttempt : "";
				console.log("Update Absent. Record # " + (i + 1) + textUpdateAttempt + ", data = " + data);
				consoleMetas(doc);

				textUpdateAttempt = updateAttempt > 1 ? "/" + updateAttempt : "";
				document.getElementById("loadingSpanTitle").innerHTML = textUpdateRecord + " #" + (i + 1) + textUpdateAttempt + ".&nbsp;";
				result.entries[i].error = textUpdateAbsent+".";
				if (source == "cbs" || source == "nasa") {
					result.entries[i].media.origComment = result.entries[i].media.comment;
					result.entries[i].media.comment = textUpdateAbsent;
					result.entries[i].media.origUrl = result.entries[i].media.url;
					result.entries[i].media.url = "images/icons/error/no_image.png";
				}
				showEntry(type, source, lang, result, i, 0);
				result.entries[i].storage.updateProcessed = 1;
				checkProcessedCount(source, type, result, lang, 0);
				return;
			}
		},
		error: function(xhr) {
			if (skipUpdates == 1) return;
			textUpdateAttempt = (xhr.status == 0 || updateAttempt > 1) ? ", updateAttempt = " + updateAttempt : "";
			console.log("Update Not Available (" + xhr.status + "). Record # " + (i + 1) + textUpdateAttempt);
			if (xhr.status == 0 && updateAttempt < 5) { // 5 0-status attempts
				update(i, source, type, result, lang, updateAttempt + 1);
				return;
			}
			textUpdateAttempt = updateAttempt > 1 ? "/" + updateAttempt : "";
			document.getElementById("loadingSpanTitle").innerHTML = textUpdateRecord + " #" + (i + 1) + textUpdateAttempt + ".&nbsp;";
			if (source == "cbs" || source == "nasa") {
				result.entries[i].media.origComment = result.entries[i].media.comment;
				result.entries[i].media.comment = textUpdateLoadError + " (" + xhr.status + ")";
				result.entries[i].media.origUrl = result.entries[i].media.url;
				result.entries[i].media.url = "images/icons/error/no_image.png";
			}
			result.entries[i].error = textUpdateLoadError + " (" + xhr.status + "). <a href='javascript:location.reload();' class='standardb_red' onkeydown='if(event.key===\"Enter\" || event.key===\" \") { event.preventDefault(); this.click(); this.onmouseleave();}');>"+textReloadPage+"</a>";
			showEntry(type, source, lang, result, i, 0);
			result.entries[i].storage.updateProcessed = 1;
			checkProcessedCount(source, type, result, lang, 0);
			return;
		}
	});
}
// ------------- End of Update---------------- //

