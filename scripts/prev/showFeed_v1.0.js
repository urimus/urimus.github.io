// ------------- Global Variables ---------------- //
loadedCount=0;
// ------------- End of Global Variables ---------------- //

function feedIconText(feedURL, lang) {
	if (lang == "rus") textRssFeed="RSS Строка (англ.)";
	if (lang == "eng") textRssFeed="RSS Feed";
	if (lang == "lat") textRssFeed="RSS Acies (angl.)";
	return "<a href='"+feedURL+"' class='standardb_red' target='_blank'><img src='images/icons/feed/feed_icon.png' title='"+textRssFeed+"' class='thumbnail_image_red_both'  valign='middle' onload='javascript:adjustFeedScrollDiv();'></a>";
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

	showFeed(type, source, lang);
	processPageResize(1);
}

function showRecordsNum(type, recordsNum, lang, newCaption) {
	document.getElementById('feed_'+type).setAttribute("title", recordsNum+" "+getRecordsText(lang, recordsNum));
	if (typeof newCaption !== 'undefined') {
		document.getElementById('feed_'+type).innerHTML=newCaption;
	}
	if (recordsNum==0) {
		document.getElementById('feed_'+type).onmouseout = function(){mouseOut(type, encodeURIComponent(getParameterByName('type')), 'black');}
		document.getElementById('feed_'+type).onmouseout();
	}
}
// ------------- End of Initial ---------------- //


function adjustFeedScrollDiv() {

	scrollDiv = document.getElementById('scrollDiv');
	scrollDivHeight=calcScrollDivHeightMax();

	tabsHeight=document.getElementById('tabstable').offsetHeight;
	feedTitleHeight=document.getElementById('titletable').offsetHeight;
	feedMessageHeight=document.getElementById('messagetable').offsetHeight;
	feedHeight=document.getElementById('feedtable').offsetHeight;


	// 1. Setting ScrollDiv to Max
	// 2. If does not have scrollBar and feedHeight!=0 then to 100%

	// 1
	scrollDiv.setAttribute("style", "height:"+(scrollDivHeight-tabsHeight-feedTitleHeight-feedMessageHeight-8)+"px; width: 711px; overflow:auto;");

	// 2
	var hasVerticalScrollBar = scrollDiv.scrollHeight > scrollDiv.clientHeight;
	if (!hasVerticalScrollBar && feedHeight!=0) {
		scrollDiv.setAttribute("style", "height:100%; width: 711px; overflow:auto;");
	}

}

// ------------- Show Feed ---------------- //

function showFeedTitle(type, source, lang, result, locStUpdateData) {


// console.log(result);

	// ------------- Setting Texts ---------------- //
	if (lang == "rus") {
		textRssFeed="RSS Строка (англ.)";
		textOutputRecords="Вывод Строки Новостей";
	}
	if (lang == "eng") {
		textRssFeed="RSS Feed";
		textOutputRecords="Outputing News Feed";
	}
	if (lang == "lat") {
		textRssFeed="RSS Acies (angl.)";
		textOutputRecords="Produco Nuntium Acies";
	}
	// ------------- End of Setting Texts ---------------- //

	document.getElementById("loadingDivTitle").innerHTML = textOutputRecords+" "+feedIconText(result.feedXML, lang);

	var preloadImg=document.createElement("img");
	preloadImg.setAttribute('src', result.image);
	preloadImg.onload = function () {

		var totalEntries=result.entries.length;

		var table = document.getElementById("titletable");
		while(table.childNodes.length>0){table.removeChild(table.lastChild);}
		var row = table.insertRow(-1);	
		var cell1 = row.insertCell(0);
		cell1.setAttribute('class', 'nimetus_red');
		cell1.setAttribute('style', 'padding-top:5px;padding-bottom:5px;display: -webkit-flex;display: flex;align-items: center;');

		var aLogo = document.createElement('a');
		aLogo.setAttribute('href', result.link);
		aLogo.setAttribute('class', 'standardb_red');
		aLogo.setAttribute('target', '_blank');
		aLogo.style = 'padding-top:5px; padding-bottom:5px;';

		var Img=document.createElement("img");
		Img.setAttribute('src', preloadImg.src);
		Img.setAttribute('class', "thumbnail_image_red_png");
		Img.setAttribute('alt', result.description);
		Img.setAttribute('title', result.description);
		Img.setAttribute('align', 'left');
		Img.setAttribute('style', 'padding-bottom:5px;');
		aLogo.appendChild(Img);
		cell1.appendChild(aLogo);

		cell1.innerHTML=cell1.innerHTML+"&nbsp;"+textRssFeed+"&nbsp;"+feedIconText(result.feedXML, lang);
		cell1.innerHTML=cell1.innerHTML+",&nbsp;<span id='loadedCount'>0/</span>"+totalEntries+"&nbsp;"+getRecordsText(lang, totalEntries)+"<span id='failedCountTitle'></span>";
		if (lang == "rus") textLastBuildDate="Последняя Сборка:&nbsp;";
		if (lang == "eng") textLastBuildDate="Last Build:&nbsp;";
		if (lang == "lat") textLastBuildDate="Ultima Aedificatio:&nbsp;";
		cell1.innerHTML=cell1.innerHTML+"&nbsp;"+"<img src='images/icons/feed/build.png' title='"+textLastBuildDate+formatDate(result.date_ms, lang)+"' valign='middle' onload='javascript:adjustFeedScrollDiv();'>";
		if (result.copyright!= null) {
			cell1.innerHTML=cell1.innerHTML+"&nbsp;"+"<img src='images/icons/feed/copyright.png' title='"+result.copyright+"' valign='middle' onload='javascript:adjustFeedScrollDiv();'>";
		}
		cell1.innerHTML=cell1.innerHTML+".";

		if (source=="nasa" && type=="image") {
			if (lang == "rus") textPre="От";
			if (lang == "eng") textPre="By";
			if (lang == "lat") textPre="Ab";
			cell1.innerHTML=cell1.innerHTML+' '+textPre+' Brian Dunbar&nbsp;<a href="mailto:brian.dunbar@nasa.gov" class="standardb_red" target="_blank"><img valign="middle" title="brian.dunbar@nasa.gov" class="thumbnail_image_red_both" src="images/icons/feed/mailto.png"></a>';

		}

		var table2 = document.getElementById("messagetable");
		if (table2) {
				var cell1 = table2.rows[0].cells[0];
				cell1.setAttribute("style", "text-align: center; padding-bottom: 10px;");
		}

		adjustFeedScrollDiv();
		showFeedData(type, source, lang, result, locStUpdateData);
	}

	adjustFeedScrollDiv();
}


function showFeedData(type, source, lang, result, locStUpdateData) {

	var items=result.entries;
	var totalEntries=items.length;

	if (totalEntries>0) {
		var table = document.getElementById("feedtable");
		table.setAttribute('style', 'border-spacing: 2px 0;');
		var tableMainRow = table.insertRow(-1);
		tableMainRow.setAttribute('style', 'vertical-align:top;');
		tableMainRow.setAttribute('id', 'tableMainRow');

		if (result.totalUpdated == result.entries.length || (source=="nasa" && type=="image") || (source=="yahoo" && type=="sports") || source == "phys.org" || source == "space.com" || source == "wired") {
			$("#processedDiv").hide();
			var table2 = document.getElementById("messagetable");
			while(table2.childNodes.length>0){table2.removeChild(table2.lastChild);}
			adjustFeedScrollDiv();
			for (i=0; i<totalEntries;  i++) {
				showEntry(type, source, lang, items[i], totalEntries, i, 1);
			}
			adjustFeedScrollDiv();
		} else {
			for (i=0; i<totalEntries;  i++) {
				if (result.entries[i].updateProcessed==1) {
					showEntry(type, source, lang, items[i], totalEntries, i, 1);
				}
			}
			if (lang=="rus") textUpdateRecords="Обновление Записей";
			if (lang=="eng") textUpdateRecords="Updating Records";
			if (lang=="lat") textUpdateRecords="Updating Monumentum";
			document.getElementById("loadingDivTitle").innerHTML = textUpdateRecords;
			$("#processedDiv").show(0, function(){
				 adjustFeedScrollDiv();
			});

			if (source=="cbs" || (source=="nasa" && type!="image") || source == "yonhap" || (source=="yahoo" && type!="sports")) {
				update(0, source, type, result, locStUpdateData, lang);
			}
		}
	}
}


function formatSummary(summary_arr, words) {
	var summaryToShow="";
	var j;
	for (j=0; j<words&& j<summary_arr.length;  j++) {
		if (j==summary_arr.length-1) {
			summaryToShow=summaryToShow+summary_arr[j];
		} else {
			summaryToShow=summaryToShow+summary_arr[j]+" ";
		}
	}
	return summaryToShow;
}


function formatSummaryDiv(lang, summaryDiv, entry) {

	summaryDiv.dataset.summary=entry.summary;

	summary_words=entry.summary.split(" ");
	wordsCount=0;
	currentLineTop=0;

	linesCount=1;
	linesToShow=4;

	summaryDiv.replaceChildren();

	var summarySpan = document.createElement('span');
	summarySpan.setAttribute('class', "text_red");
	summarySpan.innerHTML="";
	summaryDiv.innerHTML="";
	summaryDiv.appendChild(summarySpan);

	var extensionA = document.createElement('a');
	extensionA.setAttribute('href', "javascript:void(0);");
	extensionA.setAttribute('class', 'standardb_red');
	extensionA.onclick  = function () { 
		// ▼- &#9660;   ▲- &#9650;
		if (this.innerHTML=="[▼]") { // expand
			summarySpan.innerHTML=summaryDiv.dataset.summary;
			this.innerHTML="[&#9650;]";
		} else if (this.innerHTML=="[▲]") { // collapse
			wordsCount=summaryDiv.dataset.wordsCount;
			summary_words=summaryDiv.dataset.summary.split(" ");
			summarySpan.innerHTML=formatSummary(summary_words, wordsCount);
			this.innerHTML="[&#9660;]";
		}
		adjustFeedScrollDiv();
	}
	extensionA.innerHTML = "[&#9660;]";

	var Pointer = document.createElement('a');
	summaryDiv.appendChild(Pointer);

	// show linesToShow lines of summary
//	currentLineTop=Pointer.offsetTop;
	for (k=0; k<summary_words.length; k++) {
		summarySpan.innerHTML=formatSummary(summary_words, k+1);
		if (k==0) currentLineTop=Pointer.offsetTop;
		if (Pointer.offsetTop!=currentLineTop) {
			if (Math.abs(Pointer.offsetTop-currentLineTop)<2) {
				currentLineTop=Pointer.offsetTop;
				continue;
			}
			if (linesCount==linesToShow) {  // new pointer should be set
				summarySpan.innerHTML="";
				summaryDiv.removeChild(Pointer);
				summaryDiv.appendChild(extensionA);
				wordsCount=0;
				linesCount=1;

				// 2nd time with normal ponter
//				currentLineTop=extensionA.offsetTop;
				for (k2=0; k2<summary_words.length; k2++) {
					wordsCount++;
					summarySpan.innerHTML=formatSummary(summary_words, wordsCount);
					if (k2==0) currentLineTop=extensionA.offsetTop;
					if (extensionA.offsetTop!=currentLineTop) {
						if (Math.abs(extensionA.offsetTop-currentLineTop)<2) {
							currentLineTop=extensionA.offsetTop;
							continue;
						}
						if (linesCount==linesToShow) {  // remove last word
							wordsCount--;
							summaryDiv.dataset.wordsCount=wordsCount;
							summarySpan.innerHTML=formatSummary(summary_words, wordsCount);
							break;
						} else {
							currentLineTop=extensionA.offsetTop;
							linesCount++;
						}
					}
				}
				break;
			} else {
				currentLineTop=Pointer.offsetTop;
				linesCount++;
			}
		}
	}
	if (k==summary_words.length) {
		summaryDiv.removeChild(Pointer);
		summarySpan.innerHTML=summaryDiv.dataset.summary;
	}
}



function showEntry(type, source, lang, entry, totalEntries, i, appendEntry) {

	if (typeof appendEntry === 'undefined') appendEntry=1;

	// ------------- Setting Texts ---------------- //
	// Records Text is in getRecordsText function
	if (lang == "rus"){
		textSource="Источник:&nbsp;";
		textCategory="Категория:&nbsp;";
		textCategories="Категории:&nbsp;";
		textCreator="Создатель:&nbsp;";
		textCreators="Создатели:&nbsp;";
		textSubject="Предмет:&nbsp;";
		textMore="Ещё";
		textSeeAlso="Смотри Так-же:&nbsp;";
		textLoadingAttempt="Попытка Загрузки: ";
		textShow="Показать";
		textHide="Скрыть";
		textVideo="Видео";
	}

	if (lang == "eng" || lang == "lat"){
		textSource="Source:&nbsp;";
		textCategory="Category:&nbsp;";
		textCategories="Categories:&nbsp;";
		textCreator="Creator:&nbsp;";
		textCreators="Creators:&nbsp;";
		textSubject="Subject:&nbsp;";
		textMore="More";
		textSeeAlso="See Also:&nbsp;";
		textLoadingAttempt="Loading Attempt: ";
		textShow="Show";
		textHide="Hide";
		textVideo="Video";
	}

	if (lang == "lat"){
		textMore="Plus";
		textSeeAlso="Vide Etiam:&nbsp;";
		textShow="Demonstrare";
		textHide="Abscondere";
	}

	// ------------- End of Setting Texts ---------------- //


// console.log(entry);

	var tableMainRow = document.getElementById("tableMainRow");
	if (appendEntry==1) {
		var cell1=tableMainRow.insertCell(-1);
	} else {
		var cell1=tableMainRow.insertCell(i);
	}
	var contentsDiv = document.createElement('div');
	contentsDiv.setAttribute('style', "display:inline-block; width:"+entry.media.width+"px; padding:10px; border: 1px solid #de8e8e;");	
	cell1.appendChild(contentsDiv);

	if (typeof entry.error!== "undefined" && entry.error!=null) {
		var Div = document.createElement('div');
		Div.setAttribute('class', "text_red");
		Div.innerHTML="&#128165; "+entry.error;
		contentsDiv.appendChild(Div);
	}

	var Div = document.createElement('div');
	Div.setAttribute('class', "nimetus3_red");
	Div.innerHTML= (i+1)+". "+entry.title;
	contentsDiv.appendChild(Div);

	var imageDiv = document.createElement('div');
	contentsDiv.appendChild(imageDiv);

	var Img=document.createElement("img");
	Img.setAttribute('class', "text_red");
	Img.setAttribute('align', 'left');
	Img.setAttribute('width', entry.media.width);
	Img.setAttribute('style', 'margin-top:5px; margin-bottom:5px; background-color: rgb(222, 142, 142, 0.0);');
	Img.setAttribute('src', "images/icons/feed/loading.gif");
	Img.setAttribute('alt', textLoadingAttempt+"1");
	Img.setAttribute('title', textLoadingAttempt+"1");
	Img.onload = function () {
		adjustFeedScrollDiv();
	}
	imageDiv.appendChild(Img);

	if (typeof entry.additMediaUrl!== "undefined") {
		var extensionImgA = document.createElement('a');
		extensionImgA.setAttribute('href', "javascript:void(0);");
		extensionImgA.setAttribute('class', 'standardb_red');
		extensionImgA.setAttribute('align', 'right');
		extensionImgA.onclick  = function () { 
			// ▼- &#9660;   ▲- &#9650;
			if (this.innerHTML=="[▼]") { // expand
				for (var j=0; j<entry.additMediaUrl.length; j++) {
					Img2=document.createElement("img");
					Img2.setAttribute('class', "text_red");
					Img2.setAttribute('align', 'left');
					Img2.setAttribute('width', entry.media.width);
					Img2.setAttribute('style', 'margin-top:5px; margin-bottom:5px; background-color: rgb(222, 142, 142, 0.0);');
					if (source=="nasa" || source=="phys.org"|| source=="yonhap") {
						Img2.setAttribute('src', entry.additMediaUrl[j]+"?w=450");
					} else {
						Img2.setAttribute('src', entry.additMediaUrl[j]);
					}
					Img2.onload = function () {
						additImgWidth=Img.width;
						if (this.naturalWidth<Img.width) additImgWidth=this.naturalWidth;
						this.width=additImgWidth;
						adjustFeedScrollDiv();
					}
					imageDiv.appendChild(Img2);
				}
				this.innerHTML="[&#9650;]";
				showMoreDiv.innerHTML=textHide+" "+entry.additMediaUrl.length+" "+textMore+" ";
				showMoreDiv.setAttribute('style', "text-align: right;");
				showMoreDiv.appendChild(this);
			} else if (this.innerHTML=="[▲]") { // collapse
				for (var j=0; j<entry.additMediaUrl.length; j++) {
					imageDiv.removeChild(imageDiv.lastChild);
				}
				this.innerHTML="[&#9660;]";
				showMoreDiv.innerHTML=textShow+" "+entry.additMediaUrl.length+" "+textMore+" ";
				showMoreDiv.setAttribute('style', "padding-bottom:5px; text-align: right;");
				showMoreDiv.appendChild(this);
			}
			adjustFeedScrollDiv();
		}
		extensionImgA.innerHTML = "[&#9660;]";

		var showMoreDiv = document.createElement('div');
		showMoreDiv.setAttribute('class', "text_red");
		showMoreDiv.setAttribute('style', "padding-bottom:5px; text-align: right;");
		showMoreDiv.innerHTML=textShow+" "+entry.additMediaUrl.length+" "+textMore+" ";
		showMoreDiv.appendChild(extensionImgA);
		imageDiv.appendChild(showMoreDiv);

		// preload
		preloadImgArr=[];
		for (var j=0; j<entry.additMediaUrl.length; j++) {
			preloadImgArr[j]=document.createElement("img");
			if (source=="nasa" || source=="phys.org"|| source=="yonhap") {
				preloadImgArr[j].setAttribute('src', entry.additMediaUrl[j]+"?w=450");
			} else {
				preloadImgArr[j].setAttribute('src', entry.additMediaUrl[j]);
			}
		}
	}

	if (typeof entry.video!== "undefined") {
		var extensionVideoA = document.createElement('a');
		extensionVideoA.setAttribute('href', "javascript:void(0);");
		extensionVideoA.setAttribute('class', 'standardb_red');
		extensionVideoA.setAttribute('align', 'right');
		extensionVideoA.onclick  = function () { 
			// ▼- &#9660;   ▲- &#9650;
			if (this.innerHTML=="[▼]") { // expand
			        var ifrm = document.createElement("iframe");
				ifrm.setAttribute('class', "text_red");
				ifrm.setAttribute('align', 'left');
				ifrm.setAttribute('width', entry.media.width);
				ifrm.setAttribute('style', 'margin-top:5px; margin-bottom:5px; border:0px; background-color: rgb(222, 142, 142, 0.0); aspect-ratio:16/9;');
				ifrm.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; fullscreen; gyroscope; picture-in-picture');
				ifrm.setAttribute('allowfullscreen', '');
				if (source=="cbs") {
					ifrm.setAttribute("src", "https://www.livereacting.com/tools/hls-player-embed?url="+entry.video);
//					ifrm.setAttribute("src", "https://hlsplayer.net/embed?type=m3u8&src="+entry.video);
//					ifrm.setAttribute("src", "https://cdn.theoplayer.com/demos/iframe/theoplayer.html?autoplay=false&muted=false&preload=none&src="+entry.video);
				} else {
					ifrm.setAttribute("src", entry.video);
				}
				ifrm.onload = function () {
					videoWidth=Img.width;
					if (this.naturalWidth<Img.width) videoWidth=this.naturalWidth;
					this.width=videoWidth;
					adjustFeedScrollDiv();
				}
				imageDiv.appendChild(ifrm);
				this.innerHTML="[&#9650;]";
				showMoreDiv.innerHTML=textHide+" "+textVideo+" ";
				showMoreDiv.setAttribute('style', "text-align: right;");
				showMoreDiv.appendChild(this);
			} else if (this.innerHTML=="[▲]") { // collapse
				imageDiv.removeChild(imageDiv.lastChild);
				this.innerHTML="[&#9660;]";
				showMoreDiv.innerHTML=textShow+" "+textVideo+" ";
				showMoreDiv.setAttribute('style', "padding-bottom:5px; text-align: right;");
				showMoreDiv.appendChild(this);
			}
			adjustFeedScrollDiv();
		}
		extensionVideoA.innerHTML = "[&#9660;]";

		var showMoreDiv = document.createElement('div');
		showMoreDiv.setAttribute('class', "text_red");
		showMoreDiv.setAttribute('style', "padding-bottom:5px; text-align: right;");
		showMoreDiv.innerHTML=textShow+" "+textVideo+" ";
		showMoreDiv.appendChild(extensionVideoA);
		imageDiv.appendChild(showMoreDiv);

		// preload
		preloadVideo=document.createElement("iframe");
		preloadVideo.setAttribute('src', entry.video);
	}

	var preloadImg=document.createElement("img");
	preloadImg.dataset.failedAttempts=0;
	preloadImg.dataset.isOrigUrl=0;
	if (source=="nasa" || source=="phys.org"|| source=="yonhap") {
		preloadImg.setAttribute('src', entry.media.url+"?w=450");
	} else {
		preloadImg.setAttribute('src', entry.media.url);
	}
	preloadImg.setAttribute('alt', entry.media.comment);
	preloadImg.setAttribute('title', entry.media.comment);

	preloadImg.onload = function () {
		loadedCount++;
		if (loadedCount==totalEntries) {
			document.getElementById("loadedCount").innerHTML="";
		} else {
			document.getElementById("loadedCount").innerHTML=loadedCount+"/";
		}
		if (preloadImg.naturalWidth<450) { // preloadImg.width
			Img.width=preloadImg.naturalWidth;
			contentsDiv.setAttribute('style', "display:inline-block; width:"+Img.width+"px; padding:10px; border: 1px solid #de8e8e;");
			if (typeof entry.summary!== "undefined" && entry.summary!=null && entry.summary!="") {
				formatSummaryDiv(lang, summaryDiv, entry);
			}
		}
		Img.setAttribute('alt', preloadImg.alt);
		Img.setAttribute('title', preloadImg.title);
		Img.setAttribute('style', 'margin-top:5px; margin-bottom:5px; background-color: rgb(222, 142, 142, 0.0);');
		Img.src = preloadImg.src;
		if (source=="yahoo") clearInterval(preloadInterval);
		adjustFeedScrollDiv();
	}
	preloadImg.onerror= function () {
		failedAttemptsInt=parseInt(preloadImg.dataset.failedAttempts)+1;
		isOrigUrl=parseInt(preloadImg.dataset.isOrigUrl);
		preloadImg.dataset.failedAttempts=failedAttemptsInt;
		if (failedAttemptsInt>=10) {
			if (typeof entry.media.origUrl!== 'undefined' && entry.media.origUrl!=entry.media.url && isOrigUrl==0) {
				Img.setAttribute('alt', textLoadingAttempt+"1");
				Img.setAttribute('title', textLoadingAttempt+"1");
				Img.setAttribute('style', 'margin-top:5px; margin-bottom:5px; background-color: rgb(222, 142, 142, 0.0);');
				preloadImg.dataset.failedAttempts=0;
				preloadImg.dataset.isOrigUrl=1;
				preloadImg.src=entry.media.origUrl;
				if (typeof result.entries[i].media.origComment!=="undefined") {
					preloadImg.alt=result.entries[i].media.origComment;
					preloadImg.title=result.entries[i].media.origComment;
				}
				if (source=="yahoo")  {
					clearInterval(preloadInterval);
					preloadInterval=setInterval(preloadImg.onerror, 5000);
				}
			} else {
				Img.setAttribute('alt', '');
				Img.setAttribute('title', '');
				Img.src = "images/icons/error/error.jpg";
				if (source=="yahoo") clearInterval(preloadInterval);
				adjustFeedScrollDiv();
			}
		} else {
			Img.setAttribute('alt', textLoadingAttempt+(failedAttemptsInt+1));
			Img.setAttribute('title', textLoadingAttempt+(failedAttemptsInt+1));
			Img.setAttribute('style', 'margin-top:5px; margin-bottom:5px; background-color: rgb(222, 142, 142, '+failedAttemptsInt/9.0+');');
			if (isOrigUrl==0) {
				if (source=="nasa" || source=="phys.org" || source=="yonhap") {
					preloadImg.setAttribute('src', entry.media.url+"?w=450#"+new Date().getTime());
				} else {
					preloadImg.setAttribute('src', entry.media.url+"#"+new Date().getTime());
				}
			} else {
				preloadImg.setAttribute('src', entry.media.origUrl+"#"+new Date().getTime());
			}
//			preloadImg.src = preloadImg.src;
			if (source=="yahoo")  {
				clearInterval(preloadInterval);
				preloadInterval=setInterval(preloadImg.onerror, 5000);
			}
		}
	}
	if (source=="yahoo") var preloadInterval=setInterval(preloadImg.onerror, 5000);

	if (typeof entry.summary!== "undefined" && entry.summary!=null && entry.summary!="") {
		var summaryDiv = document.createElement('div');
		summaryDiv.setAttribute('class', "text_red");
		summaryDiv.setAttribute('style', 'display:inline-block;');
		contentsDiv.appendChild(summaryDiv);
		formatSummaryDiv(lang, summaryDiv, entry);
	}
	if (typeof entry.subject!== "undefined" && entry.subject!=null && entry.subject!="") {
		var Div = document.createElement('div');
		Div.setAttribute('class', "text_red");
		Div.innerHTML="<b>"+textSubject+"</b>"+entry.subject;
		contentsDiv.appendChild(Div);
	}
	if (typeof entry.source!=="undefined" && typeof entry.source.title!=="undefined") {
		var Div = document.createElement('div');
		Div.setAttribute('class', "text_red");
		var a = document.createElement('a');
		a.setAttribute('href', entry.source.url);
		a.setAttribute('class', 'standardb_red');
		a.setAttribute('target', '_blank');
		a.innerText = entry.source.title;
		Div.appendChild(a);
		Div.innerHTML="<b>"+textSource+"</b>"+Div.innerHTML;
		contentsDiv.appendChild(Div);
	}
	if (typeof entry.creator!=="undefined" && entry.creator.length>0 && typeof entry.creator[0]!=="undefined") {
		var Div = document.createElement('div');
		Div.setAttribute('class', "text_red");
		if (entry.creator.length>1) {
			Div.innerHTML="<b>"+textCreators+"</b>";
			Div.innerHTML=Div.innerHTML+entry.creator[0];
			if (typeof entry.creatorEmail!=="undefined" && typeof entry.creatorEmail[0]!=="undefined") {
				Div.innerHTML=Div.innerHTML+'&nbsp;<a href="mailto:'+entry.creatorEmail[0]+'" class="standardb_red" target="_blank"><img valign="middle" title="'+entry.creatorEmail[0]+'" class="thumbnail_image_red_both" src="images/icons/feed/mailto.png"></a>';
			}
			for (var j=1; j<entry.creator.length; j++) {
				Div.innerHTML=Div.innerHTML+",&nbsp;"+entry.creator[j];
				if (typeof entry.creatorEmail!=="undefined" && typeof entry.creatorEmail[j]!=="undefined") {
					Div.innerHTML=Div.innerHTML+'&nbsp;<a href="mailto:'+entry.creatorEmail[j]+'" class="standardb_red" target="_blank"><img valign="middle" title="'+entry.creatorEmail[j]+'" class="thumbnail_image_red_both" src="images/icons/feed/mailto.png"></a>';
				}
			}
		} else {
			Div.innerHTML="<b>"+textCreator+"</b>"+entry.creator[0];
			if (typeof entry.creatorEmail!=="undefined" && typeof entry.creatorEmail[0]!=="undefined") {
				Div.innerHTML=Div.innerHTML+'&nbsp;<a href="mailto:'+entry.creatorEmail[0]+'" class="standardb_red" target="_blank"><img valign="middle" title="'+entry.creatorEmail[0]+'" class="thumbnail_image_red_both" src="images/icons/feed/mailto.png"></a>';
			}
		}
		contentsDiv.appendChild(Div);
	}
	if (typeof entry.category!=="undefined" && entry.category.length>0 && typeof entry.category[0]!=="undefined") {
		if (entry.category[0]=="") entry.category[0]="-"; 
		var Div = document.createElement('div');
		Div.setAttribute('class', "text_red");
		if (entry.category.length>1) {
			Div.innerHTML="<b>"+textCategories+"</b>"+entry.category.join(", ");
		} else {
			Div.innerHTML="<b>"+textCategory+"</b>"+entry.category[0];
		}
		contentsDiv.appendChild(Div);
	}

	var Div = document.createElement('div');
	Div.setAttribute('class', "text_red");
	var a = document.createElement('a');
	a.setAttribute('href', entry.link);
	a.setAttribute('class', 'standardb_red');
	a.setAttribute('target', '_blank');
	a.innerHTML = textMore+" &#9658;"; // ►
	Div.appendChild(a);
	contentsDiv.appendChild(Div);

	if (typeof entry.seeAlso!=="undefined" && entry.seeAlso.length>0 && typeof entry.seeAlso[0]!=="undefined") {
		var Div = document.createElement('div');
		Div.setAttribute('class', "text_red");
		Div.innerHTML="<b>"+textSeeAlso+"</b>";
		for (var j = 0; j < entry.seeAlso.length; j++) {
			var a = document.createElement('a');
			a.setAttribute('href', entry.seeAlso[j]);
			a.setAttribute('class', 'standardb_red');
			a.setAttribute('target', '_blank');
			if (j>0) a.setAttribute('style', "padding-left:5px;");
			a.innerHTML = "&#9658;"; // ►
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

	tabs={};
	tabs2={};
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
//		tabs["all"]="All Stories";
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
	menuDiv.setAttribute('onMouseOut', "this.className='menu_selected';");

	if (lang == "rus") textRssFeed="RSS Строка";
	if (lang == "eng") textRssFeed="RSS Feed";
	if (lang == "lat") textRssFeed="RSS Acies";

	if (source=="phys.org") {
		if (type=="all") tabtype2="All Stories";
		if (type=="earth" || type=="environment") {
			tabtype2="Earth"+" &blacktriangleright; "+tabs[type];
		}
		if (type=="archaeology" || type=="economics" || type=="education" || type=="mathematics" || type=="other" || type=="political"  || type=="social") {
			tabtype2="Other Sciences"+" &blacktriangleright; "+tabs[type];
			if (type=="economics") tabtype2="Other Sciences"+" &blacktriangleright; "+tabs2[type];
		}
		if (type=="bio" || type=="nanomaterials" || type=="nanophysics") {
			tabtype2="Nanotechnology"+" &blacktriangleright; "+tabs[type];
		}
		if (type=="condensed" || type=="general" || type=="optics" || type=="plasma" || type=="quantum" || type=="soft" || type=="superconductivity") {
			tabtype2="Physics"+" &blacktriangleright; "+tabs[type];
		}
		if (type=="astrobiology" || type=="astronomy" || type=="planetary" || type=="space") {
			tabtype2="Astronomy & Space"+" &blacktriangleright; "+tabs[type];
		}
		if (type=="agriculture" || type=="biotechnology" || type=="cell" || type=="ecology" || type=="evolution" || type=="molecular" || type=="otherb" || type=="paleontology" || type=="plants" || type=="veterinary") {
			tabtype2="Biology"+" &blacktriangleright; "+tabs[type];
			if (type=="cell" || type=="molecular" || type=="paleontology" || type=="veterinary") {
				tabtype2="Biology"+" &blacktriangleright; "+tabs2[type];
			}
		}
		if (type=="analytical" || type=="biochemistry" || type=="materials" || type=="otherc" || type=="polymers") {
			tabtype2="Chemistry"+" &blacktriangleright; "+tabs[type];
			if (type=="analytical") tabtype2="Chemistry"+" &blacktriangleright; "+tabs2[type];
		}
	} else if (source=="space.com" && type=="all") {
		tabtype2="All Stories";
	} else if (source=="nasa" && type=="recent" || source=="wired" && type=="ai") {
		tabtype2=tabs2[type];
	} else {
		tabtype2=tabs[type];
	}

	if (lang=="rus") textNews="Новости";
	if (lang=="eng") textNews="News";
	if (lang=="lat") textNews="Nuntium";


	feedTitle=document.getElementById("feedTitle");
	feedTitle.innerHTML=textNews+" &blacktriangleright; "+textFeedSource +" "+textRssFeed+" &blacktriangleright; "+tabtype2;

	keys=Object.keys(tabs);

	var table = document.getElementById("tabstable");
	while(table.childNodes.length>0){table.removeChild(table.lastChild);}
	
	rowsCount=Math.ceil(keys.length/5);
	if (source=="phys.org") rowsCount++;
/*
	scrollDivHeight=calcScrollDivHeightMax();
	scrollDivHeight=scrollDivHeight-rowsCount*27-8;
	document.getElementById("scrollDiv").setAttribute("style", "height:"+scrollDivHeight+"px; overflow:auto;");
*/

	if (source=="phys.org") {
		var row = table.insertRow(-1);
		var cell1 = row.insertCell(0);

		var tabssubtable1 = document.createElement('table');
		tabssubtable1.setAttribute('cellpadding', "0px;");
		tabssubtable1.setAttribute('cellspacing', "0px;");
		tabssubtable1.setAttribute('width', "100%;");
		var subrow = tabssubtable1 .insertRow(-1);
		var subcell = subrow.insertCell(0);

		subcell.setAttribute('style', "width: 280px; display: inline-block; textAlign: left; margin:2px;");
		var Div = document.createElement('div');
		Div.setAttribute('id', "menu_26_1");
		Div.setAttribute('onMouseOver', "showSubMenu(this, '"+lang+"', 'news');");
		Div.setAttribute('onMouseOut', "this.className='menu_not_selected_red'");
		Div.setAttribute('onClick', "showSubMenu(this, '"+lang+"', 'news');" );
		Div.setAttribute('class', "menu_not_selected_red");
		Div.setAttribute('style', "padding-left: 5px;");
		if (lang=="eng") Div.innerHTML="&#9679; Phys.org RSS Feed";
		if (lang=="rus") Div.innerHTML="&#9679; Phys.org RSS Строка";
		if (lang=="lat") Div.innerHTML="&#9679; Phys.org RSS Acies";
		subcell.appendChild(Div);
		cell1.appendChild(tabssubtable1);
		table.setAttribute("onMouseOver", "");
	}

	var tabssubtable2 = document.createElement('table');
	tabssubtable2.setAttribute('cellpadding', "0px;");
	tabssubtable2.setAttribute('cellspacing', "0px;");
	tabssubtable2.setAttribute('width', "100%;");

	for (var i = 0; i<keys.length; i++) {
		if (i%5==0) {
			var subrow = tabssubtable2.insertRow(-1);
		}
		var subcell = subrow.insertCell(i%5);
		subcell.style.width = '20%';
		if (keys.length<5) subcell.style.display= 'inline-block';
		subcell.style.textAlign = 'center';

		var Div = document.createElement('div');
		Div.dataset.shortTitle=tabs[keys[i]];
		if (typeof tabs2[keys[i]]!=="undefined") Div.dataset.fullTitle=tabs2[keys[i]];
		Div.style.margin = '2px';
		if (type==keys[i]) {
			Div.setAttribute('class', "menu_selected");
		} else {
			Div.setAttribute('class', "menu_not_selected_red");
		}
		Div.setAttribute('id', "feed_"+keys[i]);
		Div.setAttribute('onMouseOver', "this.className='menu_selected'; if(typeof this.dataset.fullTitle!=='undefined') this.innerHTML=this.dataset.fullTitle;");
		Div.setAttribute('onMouseOut', "mouseOut('"+keys[i]+"', '"+type+"'); if(typeof this.dataset.fullTitle!=='undefined') this.innerHTML=this.dataset.shortTitle;");
		divLink="news_"+lang+".html?source="+source+"&type="+keys[i];
		Div.setAttribute('onClick', "if (event.ctrlKey==1){ window.open('"+divLink+"'); } else { window.location.href='"+divLink+"'; };" );
		Div.innerHTML=tabs[keys[i]];
		subcell.appendChild(Div);
	}

	var row = table.insertRow(-1);
	var cell1 = row.insertCell(0);
	cell1.appendChild(tabssubtable2);

	var Div = document.createElement('div');
	Div.setAttribute('id', "information_div");

	var a = document.createElement('a');
	a.setAttribute('href', "javascript:showInformation('"+lang+"');");

	var Img = document.createElement('img');
	Img.setAttribute('src', "images/icons/html_editor/information_red.png");
	if (lang=="eng" || lang=="lat") {
		Img.setAttribute('alt', "Version Information");
		Img.setAttribute('title', "Version Information");
	}
	if (lang=="rus") {
		Img.setAttribute('alt', "Информация о Версии");
		Img.setAttribute('title', "Информация о Версии");
	}
	Img.setAttribute('id', "information_img");
	Img.setAttribute('class', "thumbnail_image_red_png");

	a.appendChild(Img);
	Div.appendChild(a);
	table.appendChild(Div);

	table.style.position = 'relative';
	Div.style.position = 'absolute';
	Div.style.right = '2px';
	if (keys.length%5==0) {
		Div.style.bottom = '-36px';
	} else {
		Div.style.bottom = '-9px';
	}

	adjustFeedScrollDiv();
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
			if (lang=='rus') infoText="Строка Новостей Версия 1.0. Создано - 22е Янв, 2018, Последнее Изменение - ";
			if (lang=='eng') infoText="News Feed Version 1.0. Created At - 22nd of Jan, 2018, Last Modification - ";
			if (lang=='lat') infoText="Nuntium Acies Verso 1.0. Creatus - 22nd of Jan, 2018, Ultimo Modificatio - ";
			alert(infoText+formatDate(modStr, lang)+".");
		}
	};
	var dataFileName="scripts/showFeed.js";
	xmlhttp2.open("GET", dataFileName, true);
	xmlhttp2.send();
}

function loadFeednami(type, source, lang, feedURL, loadAttempt) {
	window.onunhandledrejection = (event) => {
		if (loadAttempt<10) {
			loadAttempt++;
			loadFeednami(type, source, lang, feedURL, loadAttempt);
		} else {
			var table2 = document.getElementById("messagetable");
			if (table2) {
				while(table2.childNodes.length>0){table2.removeChild(table2.lastChild);}
				var row = table2.insertRow(-1);
				var cell1 = row.insertCell(0);
				cell1.className = 'text_red';
				cell1.setAttribute("style", "text-align: center; padding-top: 10px; padding-bottom: 10px;");
				if (lang=="eng" || lang=="lat") textReload="Reload Page";
				if (lang=="rus") {
					textReload="Обновите Страницу";
					textFeed = "Строка Новостей ";
				}
				if (lang=="eng") textFeed = "News Feed ";
				if (lang=="lat") textFeed = "Nuntium Acies ";

				cell1.innerHTML = textFeed+feedIconText(feedURL, lang)+"<br><b>"+event.reason.stack+"</b><br><a href='javascript:location.reload();' class = 'standardb_red'>"+textReload+"</a>";
			}
		}
		return;
	}

	feednami.load(feedURL, function(result){
		if(result.error){
			document.getElementById("loadingDivTitle").innerHTML =  result.error.message +"  "+feedIconText(feedURL, lang);
			document.getElementById("loadingDiv").setAttribute("style", "display:none");
			return;
		}
		result.feedXML=feedURL;
		optimizeUpdateResult(type, source, lang, result,);
	});
}


function showFeed(type, source, lang) {


	generateTabs(type, source, lang);

	feedURL="";
	if (source == "cbs") {
		if (type=="top") feedURL="https://www.cbsnews.com/latest/rss/main";
		if (type=="us") feedURL="https://www.cbsnews.com/latest/rss/us";
		if (type=="politics") feedURL="https://www.cbsnews.com/latest/rss/politics";
		if (type=="world") feedURL="https://www.cbsnews.com/latest/rss/world";
		if (type=="health") feedURL="https://www.cbsnews.com/latest/rss/health";
		if (type=="moneywatch") feedURL="https://www.cbsnews.com/latest/rss/moneywatch";
		if (type=="science") feedURL="https://www.cbsnews.com/latest/rss/science";
		if (type=="technology") feedURL="https://www.cbsnews.com/latest/rss/technology";
		if (type=="entertainment") feedURL="https://www.cbsnews.com/latest/rss/entertainment";
		if (type=="space") feedURL="https://www.cbsnews.com/latest/rss/space";
	}

	if (source == "nasa") {
		if (type=="releases") feedURL="https://www.nasa.gov/news-release/feed/";
		if (type=="recent") feedURL="https://www.nasa.gov/feed/";
		if (type=="image") feedURL="https://www.nasa.gov/feeds/iotd-feed/";
		if (type=="technology") feedURL="https://www.nasa.gov/technology/feed/";
		if (type=="aeronautics") feedURL="https://www.nasa.gov/aeronautics/feed/";
		if (type=="iss") feedURL="https://www.nasa.gov/missions/station/feed/";
		if (type=="artemis") feedURL="https://www.nasa.gov/missions/artemis/feed/";
	}

	if (source == "phys.org") {
		if (type=="all") feedURL="https://phys.org/rss-feed/";

		if (type=="earth") feedURL="https://phys.org/rss-feed/earth-news/earth-sciences/";
		if (type=="environment") feedURL="https://phys.org/rss-feed/earth-news/environment/";

		if (type=="archaeology") feedURL="https://phys.org/rss-feed/science-news/archaeology-fossils/";
		if (type=="economics") feedURL="https://phys.org/rss-feed/science-news/economics-business/";
		if (type=="education") feedURL="https://phys.org/rss-feed/science-news/education/";
		if (type=="mathematics") feedURL="https://phys.org/rss-feed/science-news/mathematics/";
		if (type=="other") feedURL="https://phys.org/rss-feed/science-news/sci-other/";
		if (type=="political") feedURL="https://phys.org/rss-feed/science-news/political-science/";
		if (type=="social") feedURL="https://phys.org/rss-feed/science-news/social-sciences/";

		if (type=="bio") feedURL="https://phys.org/rss-feed/nanotech-news/bio-medicine/";
		if (type=="nanomaterials") feedURL="https://phys.org/rss-feed/nanotech-news/nano-materials/";
		if (type=="nanophysics") feedURL="https://phys.org/rss-feed/nanotech-news/nano-physics/";

		if (type=="condensed") feedURL="https://phys.org/rss-feed/physics-news/materials/";
		if (type=="general") feedURL="https://phys.org/rss-feed/physics-news/physics/";
		if (type=="optics") feedURL="https://phys.org/rss-feed/physics-news/optics-photonics/";
		if (type=="plasma") feedURL="https://phys.org/rss-feed/physics-news/plasma/";
		if (type=="quantum") feedURL="https://phys.org/rss-feed/physics-news/quantum-physics/";
		if (type=="soft") feedURL="https://phys.org/rss-feed/physics-news/soft-matter/";
		if (type=="superconductivity") feedURL="https://phys.org/rss-feed/physics-news/superconductivity/";

		if (type=="astrobiology") feedURL="https://phys.org/rss-feed/space-news/astrobiology/";
		if (type=="astronomy") feedURL="https://phys.org/rss-feed/space-news/astronomy/";
		if (type=="planetary") feedURL="https://phys.org/rss-feed/space-news/planetary-sciences/";
		if (type=="space") feedURL="https://phys.org/rss-feed/space-news/space-exploration/";

		if (type=="agriculture") feedURL="https://phys.org/rss-feed/biology-news/agriculture/";
		if (type=="biotechnology") feedURL="https://phys.org/rss-feed/biology-news/biotechnology/";
		if (type=="cell") feedURL="https://phys.org/rss-feed/biology-news/microbiology/";
		if (type=="ecology") feedURL="https://phys.org/rss-feed/biology-news/ecology/";
		if (type=="evolution") feedURL="https://phys.org/rss-feed/biology-news/evolution/";
		if (type=="molecular") feedURL="https://phys.org/rss-feed/biology-news/molecular-computational/";
		if (type=="otherb") feedURL="https://phys.org/rss-feed/biology-news/biology-other/";
		if (type=="paleontology") feedURL="https://phys.org/rss-feed/biology-news/paleontology/";
		if (type=="plants") feedURL="https://phys.org/rss-feed/biology-news/plants-animals/";
		if (type=="veterinary") feedURL="https://phys.org/rss-feed/biology-news/veterinary-medicine/";

		if (type=="analytical") feedURL="https://phys.org/rss-feed/chemistry-news/analytical-chemistry/";
		if (type=="biochemistry") feedURL="https://phys.org/rss-feed/chemistry-news/biochemistry/";
		if (type=="materials") feedURL="https://phys.org/rss-feed/chemistry-news/materials-science/";
		if (type=="otherc") feedURL="https://phys.org/rss-feed/chemistry-news/chemistry-other/";
		if (type=="polymers") feedURL="https://phys.org/rss-feed/chemistry-news/polymers/";
	}

	if (source == "space.com") {
		if (type=="all") feedURL="https://www.space.com/feeds.xml";
	}

	if (source == "wired") {
		if (type=="top") feedURL="https://www.wired.com/feed/rss";
		if (type=="business") feedURL="https://www.wired.com/feed/category/business/latest/rss";
		if (type=="ai") feedURL="https://www.wired.com/feed/tag/ai/latest/rss";
		if (type=="culture") feedURL="https://www.wired.com/feed/category/culture/latest/rss";
		if (type=="gear") feedURL="https://www.wired.com/feed/category/gear/latest/rss";
		if (type=="ideas") feedURL="https://www.wired.com/feed/category/ideas/latest/rss";
		if (type=="science") feedURL="https://www.wired.com/feed/category/science/latest/rss";
		if (type=="security") feedURL="https://www.wired.com/feed/category/security/latest/rss";
		if (type=="backchannel") feedURL="https://www.wired.com/feed/category/backchannel/latest/rss";
		if (type=="guides") feedURL="https://www.wired.com/feed/tag/wired-guide/latest/rss";
	}

	if (source == "yahoo") {
		if (type=="top") feedURL="https://www.yahoo.com/news/rss";
		if (type=="world") feedURL="https://news.yahoo.com/rss/world";
		if (type=="us") feedURL="https://news.yahoo.com/rss/us";
		if (type=="politics") feedURL="https://news.yahoo.com/rss/politics";
		if (type=="health") feedURL="https://news.yahoo.com/rss/health";
		if (type=="finance") feedURL="https://finance.yahoo.com/news/rssindex";
		if (type=="science") feedURL="https://news.yahoo.com/rss/science";
		if (type=="sports") feedURL="https://sports.yahoo.com/cycling/rss";
		if (type=="entertainment") feedURL="https://www.yahoo.com/entertainment/rss";
		if (type=="lifestyle") feedURL="https://www.yahoo.com/lifestyle/rss";
	}

	if (source == "yonhap") {
		if (type=="all") feedURL="https://en.yna.co.kr/RSS/news.xml";
		if (type=="national") feedURL="https://en.yna.co.kr/RSS/national.xml";
		if (type=="northkorea") feedURL="https://en.yna.co.kr/RSS/nk.xml";
		if (type=="economy") feedURL="https://en.yna.co.kr/RSS/economy-finance.xml";
		if (type=="biz") feedURL="https://en.yna.co.kr/RSS/biz.xml";
		if (type=="culture") feedURL="https://en.yna.co.kr/RSS/culture.xml";
		if (type=="sports") feedURL="https://en.yna.co.kr/RSS/sports.xml";
	}

	// passed - &#9989;
	// failed - &#10062;
	infoText="<div id='loadingDiv'>.</div><div id='processedDiv' style='display:none'><div>#&#128202;: <span id='processedCount'>0</span> | #&#128681;: <span id='leftCount'>0</span></div><div>#&#9989;: <span id='passedCount'>0</span></div><div>#&#10062;: <span id='failedCount'>0</span></div></div>";

	if (lang=="rus") readingText = "<b><div id='loadingDivTitle'>Читается Строка Новостей "+feedIconText(feedURL, lang)+"</div>"+infoText+"</b>";
	if (lang=="eng") readingText = "<b><div id='loadingDivTitle'>Reading News Feed "+feedIconText(feedURL, lang)+"</div>"+infoText+"</b>";
	if (lang=="lat") readingText = "<b><div id='loadingDivTitle'>Lectio Nuntium Acies "+feedIconText(feedURL, lang)+"</div>"+infoText+"</b>";

	var preloadImg=document.createElement("img");
	preloadImg.setAttribute('src', 'images/icons/feed/feed_icon.png');
	preloadImg.onload = function () {
		var table = document.getElementById("messagetable");
		while(table.childNodes.length>0){table.removeChild(table.lastChild);}
		var row = table.insertRow(-1);
		var cell1 = row.insertCell(0);
		cell1.className = 'text_red';
		cell1.setAttribute("style", "text-align: center; padding-top: 10px; padding-bottom: 10px;");
		cell1.innerHTML = readingText;
		adjustFeedScrollDiv();
		loadFeednami(type, source, lang, feedURL, 1);
	}
}

// ------------- End of ShowFeed ---------------- //


// ------------- Functions ---------------- //

function getRecordsText(lang, recordsNum) {
	if (lang == "rus"){
		numFeedsTextLast1=recordsNum.toString().slice(-1);
		numFeedsTextLast2="";
		if (recordsNum>9) numFeedsTextLast2=recordsNum.toString().slice(-2);
		if (numFeedsTextLast1 == 1) {
			if (numFeedsTextLast2!=11) {
				textRecords="Запись";
			} else {
				textRecords="Записей";
			}
		} else if (numFeedsTextLast1 == 2 || numFeedsTextLast1 == 3 || numFeedsTextLast1 == 4) {
			if (numFeedsTextLast2!=12 && numFeedsTextLast2!=13 && numFeedsTextLast2!=14) {
				textRecords="Записи";
			} else {
				textRecords="Записей";
			}
		} else {
			textRecords="Записей";
		}
	}

	if (lang == "eng"){
		if (recordsNum== 1) {
			textRecords="Record";
		} else {
			textRecords="Records";					
		}
	}

	if (lang == "lat"){
		if (recordsNum== 1) {
			textRecords="Monumentum";
		} else {
			textRecords="Tabula";					
		}
	}

	return textRecords;
}

function getLocalStorageData(par) {
	if (typeof localStorage[par]==="undefined") {
		return {};
	} else {
		return JSON.parse(localStorage[par]);
	}
}

// ------------- End of Functions ---------------- //



// ------------- Optimize ---------------- //


function optimizeUpdateResult(type, source, lang, resultOrig) {

//  console.log(resultOrig);

	result={};
	result.feedXML=resultOrig.feedXML;
	if (source == "cbs") result.image="images/icons/feed/cbs_news_logo.png";
	if (source == "nasa") result.image="images/icons/feed/NASA_Worm_logo.png";
	if (source == "phys.org") result.image="images/icons/feed/phys_org_logo.png";
	if (source == "space.com") result.image="images/icons/feed/space_com_logo.png";
	if (source == "wired") result.image="images/icons/feed/wired_logo.png";
	if (source == "yahoo") result.image="images/icons/feed/yahoo_news_logo.png";
	if (source == "yonhap") result.image="images/icons/feed/yonhap_news_logo.png";

	result.totalUpdated=0;
	locStUpdateData={};

	if (source=="cbs" || (source=="nasa" && type!="image") || source == "yonhap" || (source=="yahoo" && type!="sports")) {
		locStPar=source+"_"+type+"_updates";
		locStUpdateData=getLocalStorageData(locStPar);
	}

	result.entries=[];
	if (resultOrig.feed.entries.length==0) return result;

	result.title=resultOrig.feed.meta.title;
	result.description=resultOrig.feed.meta.description;
	if (source=="wired" && type!="top") result.description=result.title;
	result.link=resultOrig.feed.meta.link;
	if (resultOrig.feed.meta.date != null) {
		result.date_ms=new Date(resultOrig.feed.meta.date).getTime();
	}
	if (resultOrig.feed.meta.copyright!= null) {
		result.copyright=resultOrig.feed.meta.copyright;
	}

	items=resultOrig.feed.entries;

	for (var i=0; i<items.length; i++) {
		entry = items[i];
		result.entries[i]={};

		result.entries[i].title=entry.title;
		result.entries[i].media={};
		result.entries[i].media.comment="";
		if (source == "cbs") {
			if (entry["rss:image"]!=null) {
				result.entries[i].media.url=entry["rss:image"]["#"];
			} else {
				result.entries[i].media.url="https://assets1.cbsnewsstatic.com/hub/i/r/2015/04/29/340c23e5-e5a3-40ef-bf68-dcc84ef47c4b/thumbnail/1200x630/6e2e666786e7a06c8786e0cd609401f5/restrictedimagesub.jpg";
				if (lang=="rus") result.entries[i].media.comment="Картинка Отсутствует";
				if (lang=="eng" || lang=="lat") result.entries[i].media.comment="Image Absent";
			}
			result.entries[i].media.width=450;
			result.entries[i].summary=entry.description;
		}
		if (source == "nasa") {
			if (type=="image") {
				result.entries[i].media.url=entry["enclosures"][0].url;
				result.entries[i].media.width=450;
				result.entries[i].summary=entry.description;
			} else {
				// https://www.nasa.gov/wp-content/uploads/2024/04/nasa_meatball_4.png
				result.entries[i].media.url="https://www.nasa.gov/wp-content/uploads/2024/08/meatball-w-black-background.webp";
				if (lang=="rus") result.entries[i].media.comment="Картинка Отсутствует";
				if (lang=="eng" || lang=="lat") result.entries[i].media.comment="Image Absent";
				result.entries[i].media.width=450;
				result.entries[i].summary=entry["rss:description"]["#"];
			}
		}
		if (source == "phys.org") {
			if (entry["media:thumbnail"]!=null) {
				result.entries[i].media.url=entry["media:thumbnail"]["@"].url;
				// auto update for phys.org
				tmbPos= result.entries[i].media.url.indexOf("tmb/");
				if (tmbPos!=-1) {
					result.entries[i].updateProcessed=1;
					result.totalUpdated++;
					result.entries[i].media.origUrl=result.entries[i].media.url;
					result.entries[i].media.origComment="";
					filename=result.entries[i].media.url.substr(tmbPos+4);
					result.entries[i].media.url="https://scx2.b-cdn.net/gfx/news/"+filename;
				}
			} else {
				result.entries[i].media.url=""; // todo
				if (lang=="rus") result.entries[i].media.comment="Картинка Отсутствует";
				if (lang=="eng" || lang=="lat") result.entries[i].media.comment="Image Absent";
			}
			result.entries[i].media.width=450;
			result.entries[i].summary=entry.description;
		}
		if (source == "space.com") {
			if (entry.image!=null && entry.image.url!=null) {
				result.entries[i].media.url=entry.image.url;
				result.entries[i].media.comment=entry["media:content"]["media:text"]["#"];
				if (lang=="rus") result.entries[i].media.comment=result.entries[i].media.comment+"<br>&bull;&nbsp;Кредит: ";
				if (lang=="eng" || lang=="lat") result.entries[i].media.comment=result.entries[i].media.comment+"<br>&bull;&nbsp;Credit: ";
				result.entries[i].media.comment=result.entries[i].media.comment+entry["media:content"]["media:credit"]["#"];
			} else {
				result.entries[i].media.url=""; // todo
				if (lang=="rus") result.entries[i].media.comment="Картинка Отсутствует";
				if (lang=="eng" || lang=="lat") result.entries[i].media.comment="Image Absent";
			}
			result.entries[i].media.width=450;
			result.entries[i].summary=entry.summary;
		}
		if (source == "wired") {
			if (entry.image!=null && entry.image.url!=null) {
				// check if video or image
				isVideo=0;
				videos = ["mp4", "3gp", "ogg"];
				dotPos=entry.image.url.lastIndexOf(".");
				if (dotPos!=-1) {
					ext=entry.image.url.substr(dotPos+1);
					if (videos.includes(ext)) isVideo=1;
				}
				if (isVideo==0) {
					result.entries[i].media.url=entry.image.url;
				} else {
					result.entries[i].media.url="images/icons/feed/video.jpg";
					if (lang=="rus") result.entries[i].media.comment="Запись Содержит Видео";
					if (lang=="eng") result.entries[i].media.comment="Record Contains Video";
					if (lang=="lat") result.entries[i].media.comment="Recordatio Continet Video";
					result.entries[i].video=entry.image.url;
				}
			} else {
				result.entries[i].media.url=""; // todo
				if (lang=="rus") result.entries[i].media.comment="Картинка Отсутствует";
				if (lang=="eng" || lang=="lat") result.entries[i].media.comment="Image Absent";
			}
			result.entries[i].media.width=450;
			result.entries[i].summary=entry.summary;
		}
		if (source == "yahoo") {
			if (entry["media:content"]==null) {
				result.entries[i].media.url="https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo-1200x1200.png";
				if (lang=="rus") result.entries[i].media.comment="Картинка Отсутствует";
				if (lang=="eng" || lang=="lat") result.entries[i].media.comment="Image Absent";
			} else {
				result.entries[i].media.url=entry["media:content"]["@"].url;
			}
			result.entries[i].media.width=450;
			if (type=="sports") {
				desc2=entry.description;
				entry.description=entry.summary;
				imgPos = desc2.indexOf("<img");
				if (imgPos==-1) {
					result.entries[i].media.url="https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo-1200x1200.png";
					if (lang=="rus") result.entries[i].media.comment="Картинка Отсутствует";
					if (lang=="eng" || lang=="lat") result.entries[i].media.comment="Image Absent";
				} else {
					q1Pos=desc2.indexOf('"', imgPos+1);
					q2Pos=desc2.indexOf('"', q1Pos+1);
					result.entries[i].media.url=desc2.substring(q1Pos+1, q2Pos);
					result.entries[i].media.comment="";
				}
			}
			result.entries[i].summary=entry.summary;
		}
		if (source == "yonhap") {
			if (typeof entry.enclosures === "undefined" || typeof entry.enclosures[0] === "undefined" || entry.enclosures[0].url==null) {
				result.entries[i].media.url="https://r.yna.co.kr/global/home/v01/img/yonhapnews_logo_1200x800_en01.jpg"; 
				if (lang=="rus") result.entries[i].media.comment="Картинка Отсутствует";
				if (lang=="eng" || lang=="lat") result.entries[i].media.comment="Image Absent";
			} else {
				result.entries[i].media.url=entry.enclosures[0].url;
				if (entry.enclosures.length>1) {
					result.entries[i].additMediaUrl=[];
					for (var j=1; j<entry.enclosures.length; j++) {
						result.entries[i].additMediaUrl[j-1]=entry.enclosures[j].url;
					}
				}
			}
			result.entries[i].media.width=450;
			if (entry.description!="(END)") {
				result.entries[i].summary=entry.description;
			}
		}

		if (result.entries[i].media.width>=450) result.entries[i].media.width=450;

		if (entry.comments!=null) {
			result.entries[i].media.comment=entry.comments;
		}

		if (typeof entry.source!=="undefined") {
			result.entries[i].source={};
			result.entries[i].source.title=entry.source.title;
			result.entries[i].source.url=entry.source.url;
		}

		if (typeof entry["dc:creator"]!=="undefined") {
			result.entries[i].creator=[];
			if (source!="wired") {
				if (typeof entry["dc:creator"]["#"]!=="undefined") {
					result.entries[i].creator[0]=entry["dc:creator"]["#"];
				} else {
					for (var j=0; j<entry["dc:creator"].length; j++) {
						result.entries[i].creator[j]=entry["dc:creator"][j]["#"];
					}
				}
			} else {
				result.entries[i].creator=entry["dc:creator"]["#"].split(",");
				for (var j=0; j<result.entries[i].creator.length; j++) {
					result.entries[i].creator[j]=result.entries[i].creator[j].trim();
				}
			}
		}
		if (typeof entry["rss:author"]!=="undefined") {
			result.entries[i].creator=[];
			result.entries[i].creatorEmail=[];
			if (typeof entry["rss:author"].name!=="undefined") {
				result.entries[i].creator[0]=entry["rss:author"].name;
				result.entries[i].creatorEmail[0]=entry["rss:author"].email;
			} else {
				for (var j=0; j<entry["rss:author"].length; j++) {
					result.entries[i].creator[j]=entry["rss:author"][j].name;
					result.entries[i].creatorEmail[j]=entry["rss:author"][j].email;
				}
			}
		}

		if (typeof entry["rss:category"]!=="undefined" && source!="wired") {
			result.entries[i].category=[];
			if (typeof entry["rss:category"]["#"]!=="undefined") {
				result.entries[i].category[0]=entry["rss:category"]["#"];
			} else {
				for (var j = 0; j < entry["rss:category"].length; j++) {
					result.entries[i].category[j]=entry["rss:category"][j]["#"];
				}
			}
		}

		if (typeof entry["media:keywords"]!=="undefined") {
			result.entries[i].category=[];
			result.entries[i].category=entry["media:keywords"]["#"].split(",");
			for (var j=0; j<result.entries[i].category.length; j++) {
				result.entries[i].category[j]=result.entries[i].category[j].trim();
			}
		}

		if (typeof entry["dc:subject"]!=="undefined") {
			result.entries[i].subject=entry["dc:subject"]["#"];
		}

		result.entries[i].link=entry.link;
		result.entries[i].date_ms=entry.date_ms;

		// ---------------- Prevous Updates Load --------------------- //

		result.entries[i].updateProcessed=0;

		if (source=="cbs" || (source=="nasa" && type!="image") || source == "yonhap" || (source=="yahoo" && type!="sports")) { 
			if (typeof locStUpdateData[entry.link] !== "undefined") {
				result.entries[i].updateProcessed=1;
				result.totalUpdated++;
				if (typeof locStUpdateData[entry.link].summary !== "undefined") {
					result.entries[i].summary=locStUpdateData[entry.link].summary;
				}
				if (typeof locStUpdateData[entry.link].mediaUrl !== "undefined") {
					result.entries[i].media.origUrl=result.entries[i].media.url;
					result.entries[i].media.url=locStUpdateData[entry.link].mediaUrl;
				}
				if (typeof locStUpdateData[entry.link].mediaComment !== "undefined") {
					result.entries[i].media.origComment=result.entries[i].media.comment;
					result.entries[i].media.comment=locStUpdateData[entry.link].mediaComment;
				}
				if (typeof locStUpdateData[entry.link].category !== "undefined") {
					result.entries[i].category=[];
					for (var j=0; j<locStUpdateData[entry.link].category.length; j++) {
						result.entries[i].category[j]=locStUpdateData[entry.link].category[j];
					}
				}
				if (typeof locStUpdateData[entry.link].seeAlso !== "undefined") {
					result.entries[i].seeAlso=[];
					for (var j=0; j<locStUpdateData[entry.link].seeAlso.length; j++) {
						result.entries[i].seeAlso[j]=locStUpdateData[entry.link].seeAlso[j];
					}
				}
				if (typeof locStUpdateData[entry.link].video !== "undefined") {
					result.entries[i].video=locStUpdateData[entry.link].video;
				}
			}
		}
		// ---------------- End of Prevous Updates Load --------------------- //

	}

	// ---------------- Sort Feed by Date Desc --------------------- //
	var len = result.entries.length;
	for (var i = len-1; i>=0; i--){
		for(var j = 1; j<=i; j++){
			if(result.entries[j-1].date_ms<result.entries[j].date_ms){
				var temp = result.entries[j-1];
				result.entries[j-1] = result.entries[j];
				result.entries[j] = temp;
			}
		}
	}
	if (resultOrig.feed.meta.date == null) {
		result.date_ms=result.entries[0].date_ms;
	}
	// ---------------- End of Sort Feed by Date Desc --------------------- //

	document.getElementById("processedCount").innerHTML=result.totalUpdated;
	document.getElementById("leftCount").innerHTML=result.entries.length-result.totalUpdated;
	showFeedTitle(type, source, lang, result, locStUpdateData);
}
// ------------- End of Optimize---------------- //



// ------------- Update ---------------- //
function removeUnusedUpdates(source, type, result, locStUpdateData, lang) {

	if (lang=="rus") textPostprocessing="Постобработка Обновления";
	if (lang=="eng" || lang=="lat") textPostprocessing="Update Postprocessing";
	document.getElementById("loadingDivTitle").innerHTML = textPostprocessing;

	var objToRemove=[];
	var i;
	for (var key in locStUpdateData) {
		objInUse=0;
		for (i=0;i<result.entries.length;i++) {
			entry_link=result.entries[i].link;
			if (key==entry_link) {
				objInUse=1;
				break;
			}
		}
		if (objInUse==0) objToRemove.push(key);
	}
	for (i=0;i<objToRemove.length;i++) {	
		delete locStUpdateData[objToRemove[i]];
	}
	localStorage[source+"_"+type+"_updates"]=JSON.stringify(locStUpdateData);

	$("#processedDiv").hide();
	var table2 = document.getElementById("messagetable");
	while(table2.childNodes.length>0){table2.removeChild(table2.lastChild);}
	adjustFeedScrollDiv();
}


function consoleMetas(doc) {

	// console.log metas
	metas=doc.getElementsByTagName('meta');
	for(var j = 0; j < metas.length; j++) {
		toLog="meta["+j+"]: ";
		for(var k = 0; k < metas[j].attributes.length; k++) {
			toLog=toLog+metas[j].attributes[k].name+"="+metas[j].attributes[k].nodeValue+", ";
		}
		console.log(toLog);
	}
}

function updateNext(i, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates) {
	if (result.entries[i].updateProcessed == 0) showEntry(type, source, lang, result.entries[i], result.entries.length, i, 0);
	if ((i+1)>= result.entries.length) {
		removeUnusedUpdates(source, type, result, locStUpdateData, lang);
	} else {
		update(i+1, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates);
	}
}



function update(i, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates) {
	if (typeof corsProxyVer==="undefined") corsProxyVer=1;
	if (typeof skipUpdates==="undefined") skipUpdates=0;

	entry_link=result.entries[i].link;

	if (result.entries[i].updateProcessed == 1) {
		updateNext(i, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates);
		return;
	}

	if (lang=="eng" || lang=="lat") textUpdateSkipped="Update Skipped.";
	if (lang=="rus") textUpdateSkipped="Обновление Отменено.";

	if (skipUpdates==1) {
		if (source=="nasa") {
			result.entries[i].media.origComment=result.entries[i].media.comment;
			result.entries[i].media.comment=textUpdateSkipped;
			result.entries[i].media.origUrl=result.entries[i].media.url;
			result.entries[i].media.url="images/icons/error/skipped.jpg";
		}
		result.entries[i].error=textUpdateSkipped;
		updateNext(i, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates);
		return;
	}


	if (lang=="rus") {textUpdateRecord="Обновление Записи"; textSkip="Отменить";}
	if (lang=="eng") {textUpdateRecord="Updating Record"; textSkip="Skip";}
	if (lang=="lat") {textUpdateRecord="Updating Monumentum"; textSkip="Saltus";}

	var a = document.createElement('a');
	a.setAttribute('href', "javascript:void(0);");
	a.setAttribute('class', 'standardb_red');
	a.innerText = textSkip;
	a.onclick = function () {
		skipUpdates=1;
		if (source=="nasa") {
			result.entries[i].media.origComment=result.entries[i].media.comment;
			result.entries[i].media.comment=textUpdateSkipped;
			result.entries[i].media.origUrl=result.entries[i].media.url;
			result.entries[i].media.url="images/icons/error/skipped.jpg";
		}
		result.entries[i].error=textUpdateSkipped;
		xhr.abort();
		updateNext(i, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates);
	}
	document.getElementById("loadingDivTitle").innerHTML = textUpdateRecord+" #"+(i+1)+"/"+corsProxyVer+".&nbsp;";
	document.getElementById("loadingDivTitle").appendChild(a);

	corsProxyVerMax=8;
	if (corsProxyVer==1) link2=entry_link;
	if (corsProxyVer==2) link2="https://corsproxy.io/?url="+entry_link;
	if (corsProxyVer==3) link2="https://test.cors.workers.dev/?"+entry_link;
	if (corsProxyVer==4) link2="https://proxy.corsfix.com/?"+entry_link;
	if (corsProxyVer==5) link2="https://api.cors.lol/?url="+entry_link;
	if (corsProxyVer==6) link2="https://cors-anywhere.herokuapp.com/"+entry_link;
	if (corsProxyVer==7) link2="https://api.codetabs.com/v1/proxy/?quest="+entry_link;
	if (corsProxyVer==8) link2="https://api.allorigins.win/raw?url="+entry_link;

	timeoutVal=10000;
	if (corsProxyVer==corsProxyVerMax) timeoutVal=0;

	var xhr = $.ajax({
		type: "GET",
		url: link2,
		cache: true,
		timeout: timeoutVal,
		success: function(data){

			if (skipUpdates==1) return;

//console.log(data);

			var doc = (new DOMParser).parseFromString(data, "text/html");

//			console.log("Update Found. Record # "+(i+1)+", corsProxyVer="+corsProxyVer+",\nmetas="+consoleMetas(doc));


			mediaURL=null;
			property=doc.querySelector('meta[property="og:image"]');
			if (property != null) mediaURL=property.content;

			description=null;
			property=doc.head.querySelector('meta[name="description"]');
			if (property != null) description=property.content;
			if (description==null) {
				property=doc.head.querySelector('meta[property="og:description"]');
				if (property != null) description=property.content;
			}
			if (description==null) {
				property=doc.head.querySelector('meta[name="twitter:description"]');
				if (property != null) description=property.content;
			}

			if (description==null || mediaURL==null) {
				searchDoc=doc;

				mediaURL=null;
				property=searchDoc.querySelector('meta[property="og:image"]');
				if (property != null) mediaURL=property.content;

				property=searchDoc.querySelector('meta[name="description"]');
				if (property != null) description=property.content;
				if (description==null) {
					property=searchDoc.head.querySelector('meta[property="og:description"]');
					if (property != null) description=property.content;
				}
				if (description==null) {
					property=searchDoc.head.querySelector('meta[name="twitter:description"]');
					if (property != null) description=property.content;
				}
			} else {
				searchDoc=doc.head;
			}

			if (source=="yonhap") {
				contentsPos=data.indexOf("CONTENT_DATA");
				if (contentsPos!=-1) {
					jsonPosSt=data.indexOf("JSON.stringify", contentsPos+1);
					jsonPosEd=data.indexOf("});", jsonPosSt+1);
					jsonText=data.substr(jsonPosSt+15, jsonPosEd-jsonPosSt-14);
					jsonDATA = JSON.parse(jsonText);
					if (jsonDATA.BODY=="\n") {
						description="";
					} else {
						descriptions=jsonDATA.BODY.split("\n");
						for (var j=0; j<descriptions.length; j++) {
							descriptions[j]=descriptions[j].trim();
						}
						description="&emsp;"+descriptions.join(" <br>&emsp;");
					}
				} else {
					description=null;
				}
			}

			if (description!=null && mediaURL!=null) {
				// update found

				if (mediaURL!=null) {
					qPos=mediaURL.indexOf("?");
					if (qPos!=-1) mediaURL=mediaURL.substr(0, qPos);
				} else {
					mediaURL=result.entries[i].media.url;
				}

				mediaComment=null;
				property=searchDoc.querySelector('meta[property="og:image:alt"]');
				if (property != null) mediaComment=property.content;

				categories=null;
				properties=searchDoc.querySelectorAll('meta[name="keywords"]');
				if (properties != null) categories=properties;
				if (categories==null) {
					properties=doc.head.querySelectorAll('meta[property="article:section"]');
					if (properties != null) categories=properties;
				}

				seeAlso=null;
				properties=doc.head.querySelectorAll('meta[property="og:see_also"]');
				if (properties!= null) seeAlso=properties;

				videoURL=null;
				property=searchDoc.querySelector('meta[property="og:video"]');
				if (property != null) videoURL=property.content;
				if (videoURL==null) {
					property=searchDoc.querySelector('meta[property="og:video:url"]');
					if (property != null) videoURL=property.content;
				}

				passedCount=document.getElementById("passedCount");
				passedCount.innerHTML=parseInt(passedCount.innerHTML)+1;
				processedCount=document.getElementById("processedCount");
				processedCount.innerHTML=parseInt(processedCount.innerHTML)+1;
				document.getElementById("leftCount").innerHTML=result.entries.length-parseInt(processedCount.innerHTML);

				locStUpdateData[entry_link]={};
				if (description!=null) {
					result.entries[i].summary=description;
					locStUpdateData[entry_link].summary=description;
				}
				result.entries[i].media.origUrl=result.entries[i].media.url;
				if (mediaURL!=null) {
					result.entries[i].media.url=mediaURL;
					locStUpdateData[entry_link].mediaUrl=mediaURL;
					result.entries[i].media.comment="";
					locStUpdateData[entry_link].mediaComment="";
				}
				if (mediaComment!=null) {
					result.entries[i].media.comment=mediaComment;
					locStUpdateData[entry_link].mediaComment=mediaComment;
				}
				if (categories!=null) {
					result.entries[i].category=[];
					locStUpdateData[entry_link].category=[];
					for (var j=0; j<categories.length; j++) {
						result.entries[i].category=result.entries[i].category.concat(categories[j].content.split(","));
						locStUpdateData[entry_link].category=locStUpdateData[entry_link].category.concat(categories[j].content.split(","));
					}
				}
				if ( seeAlso!=null) {
					result.entries[i].seeAlso=[];
					locStUpdateData[entry_link].seeAlso=[];
					for (var j=0; j<seeAlso.length; j++) {
						result.entries[i].seeAlso[j]=seeAlso[j].content;
						locStUpdateData[entry_link].seeAlso[j]=seeAlso[j].content;
					}
				}
				if (videoURL!=null) {
					result.entries[i].video=videoURL;
					locStUpdateData[entry_link].video=videoURL;
				}
				localStorage[source+"_"+type+"_updates"]=JSON.stringify(locStUpdateData);
				corsProxyVer=1;
				updateNext(i, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates);
				return;
			} else {
				// update absent

				console.log("Update Absent. Record # "+(i+1)+", corsProxyVer="+corsProxyVer+", data="+data);
				consoleMetas(doc);
				if (corsProxyVer>=1 && corsProxyVer<corsProxyVerMax) {
					corsProxyVer++;
					update(i, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates);
					return;
				} else {
					failedCount=document.getElementById("failedCount");
					failedCountInt=parseInt(failedCount.innerHTML)+1;
					failedCount.innerHTML=failedCountInt;
					failedCountTitle=document.getElementById("failedCountTitle");
					failedCountTitle.innerHTML="&nbsp;(#&#10062;: "+failedCountInt+")";

					processedCount=document.getElementById("processedCount");
					processedCount.innerHTML=parseInt(processedCount.innerHTML)+1;
					document.getElementById("leftCount").innerHTML=result.entries.length-parseInt(processedCount.innerHTML);
					if (lang=="eng" || lang=="lat") result.entries[i].error="Update Absent.";
					if (lang=="rus") result.entries[i].error="Обновление Отсутствует.";
					corsProxyVer=1;
					updateNext(i, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates);
					return;
				}
			}

		},
		error: function(xhr){

			if (skipUpdates==1) return;

			console.log("Update Time-Out Occurred. Record # "+(i+1)+", corsProxyVer="+corsProxyVer);
			if (corsProxyVer>=1 && corsProxyVer<corsProxyVerMax) {
				corsProxyVer++;
				update(i, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates);
				return;
			} else {
				failedCount=document.getElementById("failedCount");
				failedCountInt=parseInt(failedCount.innerHTML)+1;
				failedCount.innerHTML=failedCountInt;
				failedCountTitle=document.getElementById("failedCountTitle");
				failedCountTitle.innerHTML="&nbsp;(#&#10062;: "+failedCountInt+")";

				processedCount=document.getElementById("processedCount");
				processedCount.innerHTML=parseInt(processedCount.innerHTML)+1;
				document.getElementById("leftCount").innerHTML=result.entries.length-parseInt(processedCount.innerHTML);
				if (lang=="eng" || lang=="lat") result.entries[i].error="Update Time-Out. <a href='javascript:location.reload();' class = 'standardb_red'>Reload Page</a>";
				if (lang=="rus") result.entries[i].error="Тайм-Аут Обновления. <a href='javascript:location.reload();' class = 'standardb_red'>Обновите Страницу</a>";
				corsProxyVer=1;
				updateNext(i, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates);
				return;
			}
		}
	}); 

}
// ------------- End of Update---------------- //
