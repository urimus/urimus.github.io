// ------------- Global Variables ---------------- //
timeoutVal=10000; // 10s
// ------------- End of Global Variables ---------------- //

// ------------- Initial ---------------- //
function newsLoad(lang) {

	var sourceL="";
	var source="";
	var toRedirect=0;
	
	sourceL=getParameterByName('source');
	if (sourceL && sourceL!="") {
		if (sourceL=="cbs" || sourceL=="nasa" || sourceL=="yahoo" || sourceL=="yonhap")  {
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
		|| source=="nasa" && (typeL=="releases" || typeL=="recent" || typeL=="image" || typeL=="technology" || typeL=="aeronautics" || typeL=="iss" || typeL=="artemis" || typeL=="picture") 
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



// ------------- Show Feed ---------------- //

function processShowFeedTitle(type, source, lang, result) {


// console.log(result);
	document.getElementById("scrollDiv").setAttribute("style", "height: "+(parseInt($( "#scrollDiv" ).css( "height" )))+"px; width: 711px; overflow:auto;");

	// ------------- Setting Texts ---------------- //
	// Records Text is in getRecordsText function
	if (lang == "rus"){
		textRssFeed="RSS Строка";
		if (source == "cbs" || source == "nasa" || source == "yahoo" || source == "yonhap") textRssFeed=textRssFeed+" (англ.)";
		textZero="Нет";
		textLocalCopy="Локальная Копия";
		textObtainedBy="Получено через";
	}

	if (lang == "eng" || lang == "lat"){
		textRssFeed="RSS Feed";
		textZero="No";
		textLocalCopy="Local Copy";
		textObtainedBy="Obtained by";
	}

	if (lang == "lat"){
		textZero="Non";
		textRssFeed="RSS Acies";
	}

	// ------------- End of Setting Texts ---------------- //

	var items=result.entries;
	var totalEntries=items.length;

	var table = document.getElementById("titletable");
	while(table.childNodes.length>0){table.removeChild(table.lastChild);}
	var row = table.insertRow(-1);	
	var cell1 = row.insertCell(0);
	cell1.setAttribute('class', 'nimetus_red');
	cell1.setAttribute('style', 'display: -webkit-flex;display: flex;align-items: center;');

	var aLogo = document.createElement('a');
	aLogo.setAttribute('href', result.link);
	aLogo.setAttribute('class', 'standardb_red');
	aLogo.setAttribute('target', '_blank');
	aLogo.style = 'padding-top:5px; padding-bottom:5px;';

	var Img=document.createElement("img");
	Img.setAttribute('src', result.image);
	Img.setAttribute('class', "thumbnail_image_png");
	Img.setAttribute('alt', result.title);
	Img.setAttribute('title', result.title);
	Img.setAttribute('align', 'left');
	Img.style = 'padding-bottom:5px;';
	aLogo.appendChild(Img);
	Img.onload = function () { 

		cell1.appendChild(aLogo);
		cell1.setAttribute('style', 'padding-top:5px;padding-bottom:5px;display: -webkit-flex;display: flex;align-items: center;');

		tabsHeight=parseInt($( "#tabstable" ).css( "height" ));
		newHeight=document.getElementById("scrollDiv").offsetHeight-this.height-tabsHeight+29;
		document.getElementById("scrollDiv").setAttribute("style", "height:"+newHeight+"px;width: 711px; overflow:auto;");

/*
		feedTitleHeight=parseInt($( "#feed_title" ).css( "height" ));
		scrollDivHeight=calcScrollDivHeightMax();
		document.getElementById("scrollDiv").setAttribute("style", "height:"+(scrollDivHeight - (feedTitleHeight+4))+"px;width: 711px; overflow:auto;");
*/

		cell1.innerHTML=cell1.innerHTML+"&nbsp;"+textRssFeed;

		if (source == "cbs" || source == "nasa" || source == "yahoo" || source == "yonhap") {
			var a = document.createElement('a');
			a.setAttribute('href', result.feedXML);
			a.setAttribute('class', 'standardb_red');
			a.setAttribute('target', '_blank');

			var Img=document.createElement("img");
			Img.setAttribute('class', "thumbnail_image_both");
			Img.setAttribute('src', "images/icons/feed/feed_icon.png");
			Img.setAttribute('align', 'left');
			if (typeof result.localCopy!=="undefined" && totalEntries>0) {
				textObtainedBy2="";
				if (result.localCopy.is==1) {
					textObtainedBy2=textObtainedBy+" "+textLocalCopy;
				} else {
					textObtainedBy2=textObtainedBy+" "+result.localCopy.type;
				}
				Img.setAttribute('alt', textObtainedBy2);
				Img.setAttribute('title', textObtainedBy2);
			}
			a.appendChild(Img);
			cell1.innerHTML=cell1.innerHTML+"&nbsp;";
			cell1.appendChild(a);
		} 
		totalEntriesText=totalEntries;
		if (totalEntries==0) totalEntriesText=textZero;

		cell1.innerHTML=cell1.innerHTML+",&nbsp;"+totalEntriesText+"&nbsp;"+getRecordsText(lang, totalEntries)+".";

		if (typeof result.localCopy!=="undefined" && result.localCopy.is==1) {
			textLocalCopy2=textLocalCopy+", "+formatDate(result.localCopy.recivedTime, lang)+", "+result.localCopy.type;

			var Img=document.createElement("img");
			Img.setAttribute('class', "text_red");
			Img.setAttribute('src', "images/icons/feed/local_copy.png");
			Img.setAttribute('alt', textLocalCopy2);
			Img.setAttribute('title', textLocalCopy2);

			cell1.innerHTML=cell1.innerHTML+"&nbsp;";
			cell1.appendChild(Img);

		}

		if (totalEntries>0) {
			if (source=="cbs" || (source=="nasa" && type!="image"&& type!="picture")) {
				locStPar=source+"_"+type+"_images";
				locStUpdateData=getLocalStorageData(locStPar);
				updateImages(0, source, type, result, locStUpdateData, lang);
			} else if ((source=="nasa" && (type=="image" || type=="picture")) || (source=="yahoo" && type=="sports")) {
				processShowFeedData(type, source, lang, result);
			}  else if (source == "yonhap" || (source=="yahoo" && type!="sports")) {
				locStPar=source+"_"+type+"_descriptions";
				locStUpdateData=getLocalStorageData(locStPar);
				updateDescription(0, source, type, result, locStUpdateData, lang);
			}
		}
	}
}



function processShowFeedData(type, source, lang, result) {

	var items=result.entries;
	var totalEntries=items.length;

	var table = document.getElementById("feedtable");
	while(table.childNodes.length>0){table.removeChild(table.lastChild);}
	var tableMainRow = table.insertRow(-1);
	tableMainRow.setAttribute('style', 'vertical-align:top; padding-top:10px;');

	showEntry(type, source, lang, items, 0, tableMainRow);

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

	if (lang=="rus") {
		textExpand="Развернуть";
		textCollapse="Свернуть";
	}
	if (lang=="eng") {
		textExpand="Expand";
		textCollapse="Collapse";
	}
	if (lang=="lat") {
		textExpand="Expando";
		textCollapse="Ruina";
	}

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
	extensionA.setAttribute('title', textExpand);
	extensionA.onclick  = function () { 
		// ▼- &#9660;   ▲- &#9650;
		if (this.innerHTML=="[▼]") { // expand
			summarySpan.innerHTML="&emsp;"+summaryDiv.dataset.summary;
			this.setAttribute('title', textCollapse);
			this.innerHTML="[&#9650;]";
		} else if (this.innerHTML=="[▲]") { // collapse
			wordsCount=summaryDiv.dataset.wordsCount;
			summary_words=summaryDiv.dataset.summary.split(" ");
			summarySpan.innerHTML="&emsp;"+formatSummary(summary_words, wordsCount);
			this.setAttribute('title', textExpand);
			this.innerHTML="[&#9660;]";
		}
	}
	extensionA.innerHTML = "[&#9660;]";

	var Pointer = document.createElement('a');
	summaryDiv.appendChild(Pointer);

	// show linesToShow lines of summary
//	currentLineTop=Pointer.offsetTop;
	for (k=0; k<summary_words.length; k++) {
		summarySpan.innerHTML="&emsp;"+formatSummary(summary_words, k+1);
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
					summarySpan.innerHTML="&emsp;"+formatSummary(summary_words, wordsCount);
					if (k2==0) currentLineTop=extensionA.offsetTop;
					if (extensionA.offsetTop!=currentLineTop) {
						if (Math.abs(extensionA.offsetTop-currentLineTop)<2) {
							currentLineTop=extensionA.offsetTop;
							continue;
						}
						if (linesCount==linesToShow) {  // remove last word
							wordsCount--;
							summaryDiv.dataset.wordsCount=wordsCount;
							summarySpan.innerHTML="&emsp;"+formatSummary(summary_words, wordsCount);
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
		summarySpan.innerHTML="&emsp;"+summaryDiv.dataset.summary;
	}
}



function showEntry(type, source, lang, items, i, tableMainRow) {


	// ------------- Setting Texts ---------------- //
	// Records Text is in getRecordsText function
	if (lang == "rus"){
		textSource="Источник:&nbsp;";
		textCategory="Категория:&nbsp;";
		textCategories="Категории:&nbsp;";
		textCreator="Создатель:&nbsp;";
		textCreators="Создатели:&nbsp;";
		textAuthor="Автор:&nbsp;";
		textAuthors="Авторы:&nbsp;";
		textMore="Ещё &#9658;"; // ►
		textSeeAlso="Смотри Так-же:&nbsp;";
		textLocalCopy="Локальная Копия";
		textObtainedBy="Получено через";
	}

	if (lang == "eng" || lang == "lat"){
		textSource="Source:&nbsp;";
		textCategory="Category:&nbsp;";
		textCategories="Categories:&nbsp;";
		textCreator="Creator:&nbsp;";
		textCreators="Creators:&nbsp;";
		textAuthor="Author:&nbsp;";
		textAuthors="Authors:&nbsp;";
		textMore="More &#9658;"; // ►
		textSeeAlso="See Also:&nbsp;";
		textLocalCopy="Local Copy";
		textObtainedBy="Obtained by";
	}

	if (lang == "lat"){
		textMore="Plus &#9658;"; // ►
		textSeeAlso="Vide Etiam:&nbsp;";
	}

	// ------------- End of Setting Texts ---------------- //


	var entry = items[i];
	var totalEntries=items.length;

// console.log(entry);

	var newsTable1Record = document.createElement('table');

	var row = newsTable1Record.insertRow(-1);
	var cell1 = row.insertCell(0);
	cell1.className = 'nimetus_red';
	cell1.innerHTML = (i+1)+". "+entry.title;

	var row = newsTable1Record.insertRow(-1);
	var cell1 = row.insertCell(0);
	cell1.className = 'text_red';
	cell1.style = 'padding-left:10px; padding-right:10px;';

	var Img=document.createElement("img");
	Img.setAttribute('class', "text_red");
	Img.setAttribute('alt', entry.media.comment);
	Img.setAttribute('title', entry.media.comment);
	Img.setAttribute('align', 'left');
	Img.setAttribute('width', entry.media.width);
	Img.setAttribute('style', 'padding-top:5px;padding-bottom:5px;');
	Img.setAttribute('src', "images/icons/feed/loading.gif");
	cell1.appendChild(Img);

	var preloadImg=document.createElement("img");
	preloadImg.dataset.failedAttempts=0;
	if (source=="nasa") {
		preloadImg.setAttribute('src', entry.media.url+"?w=450");
	} else {
		preloadImg.setAttribute('src', entry.media.url);
	}
	preloadImg.onload = function () {
		if (preloadImg.naturalWidth<preloadImg.width) {
			Img.width=preloadImg.naturalWidth;
			if (source == "nasa"|| source == "yahoo" || source == "cbs"|| source == "yonhap") {
				if (typeof entry.summary!== "undefined" && entry.summary!=null && entry.summary!="") formatSummaryDiv(lang, summaryDiv, entry);
			}
		}
		Img.src = preloadImg.src;
	}
	preloadImg.onerror= function () {
		preloadImg.dataset.failedAttempts=parseInt(preloadImg.dataset.failedAttempts)+1;
		if (parseInt(preloadImg.dataset.failedAttempts)>10) {
			if (typeof entry.media.origUrl!== 'undefined' && entry.media.origUrl!=entry.media.url) {
				preloadImg.dataset.failedAttempts=0;
				preloadImg.src=entry.media.origUrl;
			} else {
				Img.src = "images/icons/error/error.jpg";
			}
		} else {
			preloadImg.src = preloadImg.src;
		}
	}

	if (typeof entry.error!== "undefined" && entry.error!=null) {
		var Div = document.createElement('div');
		Div.setAttribute('class', "text_red");
		Div.innerHTML=entry.error;
		cell1.appendChild(Div);
	}

	if (typeof entry.summary!== "undefined" && entry.summary!=null && entry.summary!="") {
		var summaryDiv = document.createElement('div');
		summaryDiv.setAttribute('class', "text_red");
		summaryDiv.innerHTML="&emsp;"+entry.summary;
		cell1.appendChild(summaryDiv);
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
		Div.innerHTML="<P><b>"+textSource+"</b>"+Div.innerHTML;
		cell1.appendChild(Div);
	}
	if (typeof entry.author!=="undefined" && entry.author.length>0 && typeof entry.author[0]!=="undefined") {
		var Div = document.createElement('div');
		Div.setAttribute('class', "text_red");
		var outHTML="";
		if (entry.author.length>1) {
			outHTML="<P><b>"+textAuthors+"</b>"+entry.author[0];
			for (var j = 1; j < entry.author.length; j++) {
				outHTML=outHTML+", "+entry.author[j];
			}
		} else {
			outHTML="<P><b>"+textAuthor+"</b>"+entry.author[0];
		}
		Div.innerHTML=outHTML;
		cell1.appendChild(Div);
	}
	if (typeof entry.creator!=="undefined" && entry.creator.length>0 && typeof entry.creator[0]!=="undefined") {
		var Div = document.createElement('div');
		Div.setAttribute('class', "text_red");
		var outHTML="";
		if (entry.creator.length>1) {
			outHTML="<P><b>"+textCreators+"</b>"+entry.creator[0];
			for (var j = 1; j < entry.creator.length; j++) {
				outHTML=outHTML+", "+entry.creator[j];
			}
		} else {
			outHTML="<P><b>"+textCreator+"</b>"+entry.creator[0];
		}
		Div.innerHTML=outHTML;
		cell1.appendChild(Div);
	}
	if (typeof entry.category!=="undefined" && entry.category.length>0 && typeof entry.category[0]!=="undefined") {
		var Div = document.createElement('div');
		Div.setAttribute('class', "text_red");
		var outHTML="";
		if (entry.category.length>1) {
			outHTML="<P><b>"+textCategories+"</b>"+entry.category[0];
			for (var j = 1; j < entry.category.length; j++) {
				outHTML=outHTML+", "+entry.category[j];
			}
		} else {
			outHTML="<P><b>"+textCategory+"</b>"+entry.category[0];
		}
		Div.innerHTML=outHTML;
		cell1.appendChild(Div);
	}

	var Div = document.createElement('div');
	Div.setAttribute('class', "text_red");
	var a = document.createElement('a');
	a.setAttribute('href', entry.link);
	a.setAttribute('class', 'standardb_red');
	a.setAttribute('target', '_blank');
	a.innerHTML = textMore;
	Div.appendChild(a);
	Div.innerHTML="<P>"+Div.innerHTML;
	cell1.appendChild(Div);

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
		Div.innerHTML="<P>"+Div.innerHTML;
		cell1.appendChild(Div);
	}
				
	var date = document.createElement('div');
	date.className = 'textsmall_red';
	date.setAttribute("style", "text-align:right; padding-right:10px;");
	date.innerHTML = formatDate(entry.date_ms, lang);
	cell1.appendChild(date);

	var cell1=tableMainRow.insertCell(i);
	cell1.appendChild(newsTable1Record);
	if (source == "nasa" || source == "yahoo" || source == "cbs" || source == "yonhap") {
		if (i==0) {
			var cell2=tableMainRow.insertCell(1);
			newsTable1Record2 = newsTable1Record.cloneNode(true);
			cell2.appendChild(newsTable1Record2);
			if (typeof entry.summary!== "undefined" && entry.summary!=null && entry.summary!="") formatSummaryDiv(lang, summaryDiv, entry);
			cell2.removeChild(cell2.lastElementChild);
		} else {
			if (typeof entry.summary!== "undefined" && entry.summary!=null && entry.summary!="") formatSummaryDiv(lang, summaryDiv, entry);
		}
	}
	if (i+1 < totalEntries) showEntry(type, source, lang, items, i+1, tableMainRow);
}


function processEmptyFeed(type, source, lang, feedXML) {

	locStPar=source+"_"+type;
	if (typeof localStorage[locStPar]!=="undefined") {
		var result= {}
		var result= JSON.parse(localStorage[locStPar]);
		result.localCopy.is=1;
		processShowFeedTitle(type, source, lang, result);
		return;
	} 

	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();               
	} 
	else {               
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");               
	}

	xmlhttp.onreadystatechange = function () { 
		if (xmlhttp.readyState == 4) {

			data=xmlhttp.responseText;
//			data=JSON.parse(xmlhttp.responseText).contents;  

			if (data=="") {
				if (lang=="rus") textTimeout='Чтение '+feedXML+' неудачно - Тайм-аут '+(timeoutVal/1000)+'с. <a href="javascript:location.reload();" class = "standardb_red">Обновите Страницу</a>.';
				if (lang=="eng") textTimeout='Reading '+feedXML+' failed - Time-out'+(timeoutVal/1000)+'s. <a href="javascript:location.reload();" class = "standardb_red">Reload Page</a>.';
				if (lang=="lat") textTimeout='Lectio '+feedXML+' defecit - Time-out'+(timeoutVal/1000)+'s. <a href="javascript:location.reload();" class = "standardb_red">Reload Page</a>.';
				document.getElementById("loadingDivTitle").innerHTML = textTimeout;
/*
				scrollDivHeight=calcScrollDivHeightMax();
				document.getElementById("scrollDiv").setAttribute("style", "height:"+scrollDivHeight+"px; overflow:auto;");
				adjustScrollDiv();
*/
				return;
			}

			parser = new DOMParser();
			xmlDoc = parser.parseFromString(data,"text/xml");
			items=xmlDoc.getElementsByTagName("item");
			itemsCount=xmlDoc.getElementsByTagName("item").length;

			var result= {}
			result.feedXML=feedXML;
			result.title=xmlDoc.getElementsByTagName("channel")[0].getElementsByTagName("title")[0].childNodes[0].nodeValue;
			result.link=xmlDoc.getElementsByTagName("channel")[0].getElementsByTagName("link")[0].childNodes[0].nodeValue;
			if (source == "nasa") result.image="images/icons/feed/NASA_Worm_logo.png";
			if (source == "yahoo") result.image="images/icons/feed/yahoo_news_logo.png";
			result.entries=[];
			processShowFeedTitle(type, source, lang, result);
		}
	}

	Link="https://api.allorigins.win/raw?url="+encodeURIComponent(feedXML);
//	Link="https://api.codetabs.com/v1/proxy/?quest="+encodeURIComponent(feedXML);
//	Link="https://corsproxy.org/?"+encodeURIComponent(feedXML);
	xmlhttp.open("GET", Link, true);
	xmlhttp.timeout = timeoutVal;
	xmlhttp.send();

}

function generateTabs(type, source, lang) {

	tabs={};
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
		tabs["recent"]="Recent";
		tabs["image"]="Image of the Day";
		tabs["technology"]="Technology";
		tabs["aeronautics"]="Aeronautics";
		tabs["iss"]="Space Station";
		tabs["artemis"]="Artemis";
		tabs["picture"]="Picture of the Day";
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
	if (source == "yahoo") {
		textFeedSource = "Yahoo! News";
		menuDiv=document.getElementById("menu_26_5");
	}
	if (source == "yonhap") {
		textFeedSource = "Yonhap News Agency";
		menuDiv=document.getElementById("menu_26_4");
	}

	menuDiv.setAttribute('class', "menu_selected");
	menuDiv.setAttribute('onMouseOut', "this.className='menu_selected';");

	if (lang == "rus") textRssFeed="RSS Строка";
	if (lang == "eng") textRssFeed="RSS Feed";
	if (lang == "lat") textRssFeed="RSS Acies";

	feedTitle=document.getElementById("feedTitle");
	feedTitle.innerHTML=feedTitle.innerHTML+" &blacktriangleright; "+textFeedSource +" "+textRssFeed+" &blacktriangleright; "+tabs[type];

	keys=Object.keys(tabs);

	var table = document.getElementById("tabstable");
	while(table.childNodes.length>0){table.removeChild(table.lastChild);}
	
	rowsCount=Math.ceil(keys.length/5);
	scrollDivHeight=calcScrollDivHeightMax();
	scrollDivHeight=scrollDivHeight-rowsCount*27-8;
	document.getElementById("scrollDiv").setAttribute("style", "height:"+scrollDivHeight+"px; overflow:auto;");

	for (var i = 0; i<keys.length; i++) {
		if (i%5==0) {
			var row = table.insertRow(-1);
		}
		var cell1 = row.insertCell(i%5);
		cell1.style.width = '20%';
		cell1.style.textAlign = 'center';

		var Div = document.createElement('div');
		Div.style.margin = '2px';
		if (type==keys[i]) {
			Div.setAttribute('class', "menu_selected");
		} else {
			Div.setAttribute('class', "menu_not_selected_red");
		}
		Div.setAttribute('id', "feed_"+keys[i]);
		Div.setAttribute('onMouseOver', "this.className='menu_selected';");
		Div.setAttribute('onMouseOut', "mouseOut('"+keys[i]+"', '"+type+"');");
		divLink="news_"+lang+".html?source="+source+"&type="+keys[i];
		Div.setAttribute('onClick', "if (event.ctrlKey==1){ window.open('"+divLink+"'); } else { window.location.href='"+divLink+"'; };" );
		Div.innerHTML=tabs[keys[i]];
		cell1.appendChild(Div);
	}


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
		if (type=="picture") feedURL="https://apod.com/feed.rss";
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

	feedIconText="<a href='"+feedURL+"' class='standardb_red' target='_blank'><img src='images/icons/feed/feed_icon.png' class='thumbnail_image_both'  valign='middle'></a>";
	if (lang=="rus") readingText = "<b><div id='loadingDivTitle'>Читается Строка Новостей "+feedIconText+"</div><div id='loadingDiv'>.</div><div id='loadingSummary' style='padding-left:5px; padding-right:5px;'></div></b>";
	if (lang=="eng") readingText = "<b><div id='loadingDivTitle'>Reading News Feed "+feedIconText+"</div><div id='loadingDiv'>.</div><div id='loadingSummary' style='padding-left:5px; padding-right:5px;'></div></b>";
	if (lang=="lat") readingText = "<b><div id='loadingDivTitle'>Lectio Nuntium Acies "+feedIconText+"</div><div id='loadingDiv'>.</div><div id='loadingSummary' style='padding-left:5px; padding-right:5px;'></div></b>";

	var table = document.getElementById("feedtable");
	while(table.childNodes.length>0){table.removeChild(table.lastChild);}
	var row = table.insertRow(-1);
	var cell1 = row.insertCell(0);
	cell1.className = 'text_red';
	cell1.style.textAlign = 'center';
	cell1.innerHTML = readingText;

	window.onunhandledrejection = (event) => {
		var table2 = document.getElementById("feedtable");
		if (table2) {
			while(table2.childNodes.length>0){table2.removeChild(table2.lastChild);}
			var row = table2.insertRow(-1);
			var cell1 = row.insertCell(0);
			cell1.className = 'text_red';
			cell1.style.textAlign = 'center';
			cell1.innerHTML = "<b>"+event.reason.stack+"</b><br><a href='javascript:location.reload();' class = 'standardb_red'>Reload Page</a>";
			cell1.innerHTML = "<b>"+event.reason.stack+"</b><br><a href='javascript:location.reload();' class = 'standardb_red'>Обновите Страницу</a>";
		}
	}


	feednami.load(feedURL, function(result){
		if(result.error){
			document.getElementById("loadingDivTitle").innerHTML =  result.error.message +"  "+feedIconText;
			return;
		}
		if (result.feed.entries.length==0) {
			processEmptyFeed(type, source, lang, feedURL);
		} else {
			result.feedXML=feedURL;
			optimizeUpdateResult(type, source, lang, result);
		}
	});
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

//console.log(resultOrig);

	result={};
	result.feedXML=resultOrig.feedXML;
	if (source == "cbs") result.image="images/icons/feed/cbs_news_logo.png";
	if (source == "nasa") result.image="images/icons/feed/NASA_Worm_logo.png";
	if (source == "yahoo") result.image="images/icons/feed/yahoo_news_logo.png";
	if (source == "yonhap") result.image="images/icons/feed/yonhap_news_logo.png";

	result.entries=[];
	if (resultOrig.feed.entries.length==0) return result;


	if (source == "yahoo") result.title=resultOrig.feed.meta.image.title;
	if (source == "cbs" || source == "nasa" || source == "yonhap") result.title=resultOrig.feed.meta["rss:title"]["#"];
	result.link=resultOrig.feed.meta.link;

	items=resultOrig.feed.entries;

	for (var i=0; i<items.length; i++) {
		entry = items[i];
		result.entries[i]={};

		result.entries[i].title=entry.title;
		result.entries[i].media={};
		result.entries[i].media.comment="";
		if (source == "cbs") {
			result.entries[i].media.url=entry["rss:image"]["#"];
			result.entries[i].media.width=450;
			result.entries[i].summary=entry.description;
		}
		if (source == "nasa") {
			if (type=="image") {
				result.entries[i].media.url=entry["enclosures"][0].url;
				result.entries[i].media.width=450;
				result.entries[i].summary=entry.description;
			}  else if (type=="picture") {
				result.entries[i].media.url=entry["enclosures"][0].url;
				result.entries[i].media.width=450;
				result.entries[i].summary=entry["rss:description"]["#"]+".";
			} else {
				result.entries[i].media.url="https://science.nasa.gov/nasa-social-logo.webp";
				if (lang=="rus") result.entries[i].media.comment="Картинка не Определена";
				if (lang=="eng" || lang=="lat") result.entries[i].media.comment="Image Undefined";
				result.entries[i].media.width=450;
				result.entries[i].summary=entry["rss:description"]["#"];
			}
		}
		if (source == "yahoo") {
			if (entry["media:content"]==null) {
				result.entries[i].media.url="https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo-1200x1200.png";
				if (lang=="rus") result.entries[i].media.comment="Картинка не Определена";
				if (lang=="eng" || lang=="lat") result.entries[i].media.comment="Image Undefined";
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
					if (lang=="rus") result.entries[i].media.comment="Картинка не Определена";
					if (lang=="eng" || lang=="lat") result.entries[i].media.comment="Image Undefined";
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
			result.entries[i].media.url="https://r.yna.co.kr/global/home/v01/img/yonhapnews_logo_1200x800_en01.jpg"; 
			if (lang=="rus") result.entries[i].media.comment="Картинка не Определена";
			if (lang=="eng" || lang=="lat") result.entries[i].media.comment="Image Undefined";
			result.entries[i].media.width=450;
			if (entry.description!="(END)") {
				result.entries[i].summary=entry.description;
			}
		}

		if (result.entries[i].media.width>=450) result.entries[i].media.width=450;

		if (entry.comments!=null) {
			result.entries[i].media.comment=entry.comments;
		}

		result.entries[i].source={};

		result.entries[i].source.title=entry.source.title;
		result.entries[i].source.url=entry.source.url;

		if (typeof entry["dc:creator"]!=="undefined") {
			result.entries[i].creator=[];
			if (typeof entry["dc:creator"]["#"]!=="undefined") {
				result.entries[i].creator[0]=entry["dc:creator"]["#"];
			} else {
				for (var j=0; j<entry["dc:creator"].length; j++) {
					result.entries[i].creator[j]=entry["dc:creator"][j]["#"];
				}
			}
		}


		if (typeof entry["rss:category"]!=="undefined") {
			result.entries[i].category=[];
			if (typeof entry["rss:category"]["#"]!=="undefined") {
				result.entries[i].category[0]=entry["rss:category"]["#"];
			} else {
				for (var j = 0; j < entry["rss:category"].length; j++) {
					result.entries[i].category[j]=entry["rss:category"][j]["#"];
				}
			}
		}

		result.entries[i].link=entry.link;
		if (source != "yonhap"){
			result.entries[i].date_ms=entry.date_ms;
		} else {
			feeddate=entry["rss:pubdate"]["#"];
			mydate=new Date();
			mydate.setUTCFullYear(feeddate.substr(0,4));
			mydate.setUTCMonth(feeddate.substr(4,2)-1);
			mydate.setUTCDate(feeddate.substr(6,2));
			mydate.setUTCHours(feeddate.substr(8,2));
			mydate.setUTCMinutes(feeddate.substr(10,2));
			mydate.setUTCSeconds(feeddate.substr(12,2));
			mydate.setUTCMilliseconds(0);

			// subsr KST +9
			mydate.setTime(mydate.getTime() - (9*60*60*1000));

			result.entries[i].date_ms=mydate.getTime();
		}

	}
/* Feed can be stored locally
	if (source=="yahoo" && type=="world") {
		result.localCopy={};
		result.localCopy.recivedTime=Date.now();
		result.localCopy.type="Feednami";
		result_str=JSON.stringify(result);
		localStorage[source+"_"+type]=result_str;
	}
*/
	processShowFeedTitle(type, source, lang, result);
}
// ------------- End of Optimize---------------- //



// ------------- Update ---------------- //
function removeUnusedUpdates(type2, source, type, result, locStUpdateData) {

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
	localStorage[source+"_"+type+type2]=JSON.stringify(locStUpdateData);
}


function updateNextImage(i, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates) {
	if ((i+1)>=result.entries.length) {
		removeUnusedUpdates("_images", source, type, result, locStUpdateData);
		processShowFeedData(type, source, lang, result);
	} else {
		updateImages(i+1, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates);
	}
}


function updateImages(i, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates) {
	if (typeof corsProxyVer==="undefined") corsProxyVer=1;
	if (typeof skipUpdates==="undefined") skipUpdates=0;

	entry_link=result.entries[i].link;

	if (typeof locStUpdateData[entry_link]!== "undefined") {
		if (typeof locStUpdateData[entry_link].mediaUrl!== "undefined") {
			result.entries[i].media.url=locStUpdateData[entry_link].mediaUrl;
		}
		if (typeof locStUpdateData[entry_link].mediaComment!== "undefined") {
			result.entries[i].media.comment=locStUpdateData[entry_link].mediaComment;
		}
		updateNextImage(i, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates);
		return;
	}

	if (lang=="eng" || lang=="lat") textUpdateSkipped="Update Skipped.";
	if (lang=="rus") textUpdateSkipped="Обновление Отменено.";

	if (skipUpdates==1) {
		if (source=="nasa") {
			result.entries[i].media.comment=textUpdateSkipped;
			result.entries[i].media.url="images/icons/error/skipped.jpg";
		}
		result.entries[i].error=textUpdateSkipped;
		updateNextImage(i, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates);
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
			result.entries[i].media.comment=textUpdateSkipped;
			result.entries[i].media.url="images/icons/error/skipped.jpg";
		}
		result.entries[i].error=textUpdateSkipped;
		updateNextImage(i, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates);
	}
	document.getElementById("loadingDivTitle").innerHTML = textUpdateRecord+" #"+(i+1)+".&nbsp;";
	document.getElementById("loadingDivTitle").appendChild(a);


	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();               
	} 
	else {               
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");               
	}

	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4) {

			if (skipUpdates==1) return;
			mediaURL="";

			data= xmlhttp.responseText;  
//console.log("data="+data);

			loadingSummary=document.getElementById("loadingSummary");
			if (loadingSummary.innerHTML=="") {
				loadingSummary.innerHTML="#"+(i+1)+"&nbsp;-&nbsp;";
			} else {
				loadingSummary.innerHTML=loadingSummary.innerHTML+", #"+(i+1)+"&nbsp;-&nbsp;";
			}
			if (data=="") { // timeout
				loadingSummary.innerHTML=loadingSummary.innerHTML+"&#10008;";
				if (corsProxyVer==1 || corsProxyVer==2) {
					corsProxyVer++;
					updateImages(i, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates);
					return;
				} else {
					corsProxyVer=1;
					if (lang=="eng" || lang=="lat") result.entries[i].media.comment="Update Time-out.";
					if (lang=="rus") result.entries[i].media.comment="Тайм-аут Обновления.";
					result.entries[i].media.url="images/icons/error/timeout.jpg";
					if (lang=="eng" || lang=="lat") result.entries[i].error="Update Time-out. <a href='javascript:location.reload();' class = 'standardb_red'>Reload Page</a>";
					if (lang=="rus") result.entries[i].error="Тайм-аут Обновления. <a href='javascript:location.reload();' class = 'standardb_red'>Обновите Страницу</a>";
					updateNextImage(i, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates);
					return;
				}
			}

			var doc = (new DOMParser).parseFromString(data, "text/html");

			mediaURL="";
			property=doc.head.querySelector('meta[property="og:image"]');
			if (property != null) mediaURL=property.content;

			mediaComment="";
			property=doc.head.querySelector('meta[property="og:image:alt"]');
			if (property != null) mediaComment=property.content;

			if (mediaURL!="" && mediaURL!="/nasa-social-logo.webp") {
				qPos=mediaURL.indexOf("?");
				if (qPos!=-1) mediaURL=mediaURL.substr(0, qPos);
				loadingSummary.innerHTML=loadingSummary.innerHTML+"&#10004;";
			} else {
				mediaURL=result.entries[i].media.url;
				mediaComment=result.entries[i].media.comment;
				loadingSummary.innerHTML=loadingSummary.innerHTML+"?";
				console.log("Update Failed. Record # "+(i+1)+", data="+data);
			}
			result.entries[i].media.url=mediaURL;
			result.entries[i].media.comment=mediaComment;
			locStUpdateData[entry_link]={};
			locStUpdateData[entry_link].mediaUrl=mediaURL;
			locStUpdateData[entry_link].mediaComment=mediaComment;
			localStorage[source+"_"+type+"_images"]=JSON.stringify(locStUpdateData);

			corsProxyVer=1;
			updateNextImage(i, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates);

		}
	}

	if (corsProxyVer==1) link2="https://api.codetabs.com/v1/proxy/?quest="+encodeURIComponent(result.entries[i].link);
	if (corsProxyVer==2) link2="https://corsproxy.org/?"+encodeURIComponent(result.entries[i].link);
	if (corsProxyVer==3) link2="https://api.allorigins.win/raw?url="+encodeURIComponent(result.entries[i].link);

	xmlhttp.timeout = timeoutVal;
	xmlhttp.open("GET", link2, true);
	xmlhttp.send();

}

function updateNextDescription(i, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates) {
	if ((i+1)>= result.entries.length) {
		removeUnusedUpdates("_descriptions", source, type, result, locStUpdateData);
/*
		if (source=="yahoo" && type=="world") {
			result_str=JSON.stringify(result);
			localStorage[source+"_"+type]=result_str;
		}
*/
		processShowFeedData(type, source, lang, result);
	} else {
		updateDescription(i+1, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates);
	}
}



function updateDescription(i, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates) {
	if (typeof corsProxyVer==="undefined") corsProxyVer=1;
	if (typeof skipUpdates==="undefined") skipUpdates=0;

	entry_link=result.entries[i].link;

	if (typeof locStUpdateData[entry_link]!== "undefined") {
		result.entries[i].summary=locStUpdateData[entry_link].summary;
		if (typeof locStUpdateData[entry_link].mediaUrl!== "undefined") {
			result.entries[i].media.origUrl=result.entries[i].media.url;
			result.entries[i].media.url=locStUpdateData[entry_link].mediaUrl;
		}
		if (typeof locStUpdateData[entry_link].mediaComment!== "undefined") {
			result.entries[i].media.comment=locStUpdateData[entry_link].mediaComment;
		}
		if (typeof locStUpdateData[entry_link].category!== "undefined") {
			result.entries[i].category=[];
			for (var j=0; j<locStUpdateData[entry_link].category.length; j++) {
				result.entries[i].category[j]=locStUpdateData[entry_link].category[j];
			}
		}
		if (typeof locStUpdateData[entry_link].author!== "undefined") {
			result.entries[i].author=[];
			for (var j=0; j<locStUpdateData[entry_link].author.length; j++) {
				result.entries[i].author[j]=locStUpdateData[entry_link].author[j];
			}
		}
		if (typeof locStUpdateData[entry_link].seeAlso!== "undefined") {
			result.entries[i].seeAlso=[];
			for (var j=0; j<locStUpdateData[entry_link].seeAlso.length; j++) {
				result.entries[i].seeAlso[j]=locStUpdateData[entry_link].seeAlso[j];
			}
		}

		updateNextDescription(i, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates);
		return;
	}

	if (lang=="eng" || lang=="lat") textUpdateSkipped="Update Skipped.";
	if (lang=="rus") textUpdateSkipped="Обновление Отменено.";

	if (skipUpdates==1) {
		if (source=="yonhap") {
			result.entries[i].media.comment=textUpdateSkipped;
			result.entries[i].media.url="images/icons/error/skipped.jpg";
		}
		result.entries[i].error=textUpdateSkipped;
		updateNextDescription(i, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates);
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
		if (source=="yonhap") {
			result.entries[i].media.comment=textUpdateSkipped;
			result.entries[i].media.url="images/icons/error/skipped.jpg";
		}
		result.entries[i].error=textUpdateSkipped;
		updateNextDescription(i, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates);
	}
	document.getElementById("loadingDivTitle").innerHTML = textUpdateRecord+" #"+(i+1)+".&nbsp;";
	document.getElementById("loadingDivTitle").appendChild(a);

	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();               
	}  else {               
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");               
	}

	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4) {

			if (skipUpdates==1) return;

			data= xmlhttp.responseText;
//console.log(data);

			loadingSummary=document.getElementById("loadingSummary");
			if (loadingSummary.innerHTML=="") {
				loadingSummary.innerHTML="#"+(i+1)+"&nbsp;-&nbsp;";
			} else {
				loadingSummary.innerHTML=loadingSummary.innerHTML+", #"+(i+1)+"&nbsp;-&nbsp;";
			}
			if (data=="") { // timeout
				loadingSummary.innerHTML=loadingSummary.innerHTML+"&#10008;";
				if (corsProxyVer==1 || corsProxyVer==2) {
					corsProxyVer++;
					updateDescription(i, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates);
					return;
				} else {
					if (lang=="eng" || lang=="lat") result.entries[i].error="Update Time-out. <a href='javascript:location.reload();' class = 'standardb_red'>Reload Page</a>";
					if (lang=="rus") result.entries[i].error="Тайм-аут Обновления. <a href='javascript:location.reload();' class = 'standardb_red'>Обновите Страницу</a>";
					corsProxyVer=1;
					updateNextDescription(i, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates);
					return;
				}
			}

			var updateFailed=0;
			var doc = (new DOMParser).parseFromString(data, "text/html");

			if (source!="yonhap") {
				description="";
				property=doc.head.querySelector('meta[name="description"]');
				if (property != null) description=property.content;
				if (description=="") {
					property=doc.head.querySelector('meta[property="og:description"]');
					if (property != null) description=property.content;
				}
				if (description=="") {
					property=doc.head.querySelector('meta[name="twitter:description"]');
					if (property != null) description=property.content;
				}

				mediaURL="";
				property=doc.head.querySelector('meta[property="og:image"]');
				if (property != null) mediaURL=property.content;
				if (mediaURL!="") {
					qPos=mediaURL.indexOf("?");
					if (qPos!=-1) mediaURL=mediaURL.substr(0, qPos);
				} else {
					mediaURL=result.entries[i].media.url;
				}
				if (description=="") updateFailed=1;
			} else {
				description="";
				mediaURL="";
				categories="";
				authors="";
				seeAlso="";
				contentsPos=data.indexOf("CONTENT_DATA");
				if (contentsPos!=-1) {
					jsonPosSt=data.indexOf("JSON.stringify", contentsPos+1);
					jsonPosEd=data.indexOf("});", jsonPosSt+1);
					jsonText=data.substr(jsonPosSt+15, jsonPosEd-jsonPosSt-14);
					jsonDATA = JSON.parse(jsonText);
					mediaURL=jsonDATA.IMG;
					if (jsonDATA.BODY=="\n") {
						description="";
					} else {
						description=jsonDATA.BODY.replaceAll("\n", " <br>&emsp;");
					}

					properties=doc.head.querySelectorAll('meta[property="article:section"]');
					if (properties != null) categories=properties;
					properties=doc.head.querySelectorAll('meta[name="author"]');
					if (properties!= null) authors=properties;
					properties=doc.head.querySelectorAll('meta[property="og:see_also"]');
					if (properties!= null) seeAlso=properties;
				} else {
					updateFailed=1;
				}
			}

			if (updateFailed==0) {
				loadingSummary.innerHTML=loadingSummary.innerHTML+"&#10004;";
				result.entries[i].summary=description;
				locStUpdateData[entry_link]={};
				locStUpdateData[entry_link].summary=description;
				if (source=="yahoo" || source=="yonhap") {
					result.entries[i].media.origUrl=result.entries[i].media.url;
					if (mediaURL!="") {
						result.entries[i].media.url=mediaURL;
						locStUpdateData[entry_link].mediaUrl=mediaURL;
						result.entries[i].media.comment="";
						locStUpdateData[entry_link].mediaComment="";
					}
				}
				if (source=="yonhap") {
					if (categories!="") {
						result.entries[i].category=[];
						locStUpdateData[entry_link].category=[];
						for (var j=0; j<categories.length; j++) {
							result.entries[i].category[j]=categories[j].content;
							locStUpdateData[entry_link].category[j]=categories[j].content;
						}
					}
					if (authors!="") {
						result.entries[i].author=[];
						locStUpdateData[entry_link].author=[];
						for (var j=0; j<authors.length; j++) {
							result.entries[i].author[j]=authors[j].content;
							locStUpdateData[entry_link].author[j]=authors[j].content;
						}
					}
					if (seeAlso!="") {
						result.entries[i].seeAlso=[];
						locStUpdateData[entry_link].seeAlso=[];
						for (var j=0; j<seeAlso.length; j++) {
							result.entries[i].seeAlso[j]=seeAlso[j].content;
							locStUpdateData[entry_link].seeAlso[j]=seeAlso[j].content;
						}
					}
				}
				localStorage[source+"_"+type+"_descriptions"]=JSON.stringify(locStUpdateData);
			} else {
				if (lang=="eng" || lang=="lat") result.entries[i].error="Description Update Failed. <a href='javascript:location.reload();' class = 'standardb_red'>Reload Page</a>";
				if (lang=="rus") result.entries[i].error="Обновление Описания не Удалось. <a href='javascript:location.reload();' class = 'standardb_red'>Обновите Страницу</a>";
				loadingSummary.innerHTML=loadingSummary.innerHTML+"?";
				console.log("Update Failed. Record # "+(i+1)+", data="+data);
			}

			corsProxyVer=1;
			updateNextDescription(i, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates);
		}
	}

	if (corsProxyVer==1) link2="https://api.codetabs.com/v1/proxy/?quest="+encodeURIComponent(result.entries[i].link);
	if (corsProxyVer==2) link2="https://corsproxy.org/?"+encodeURIComponent(result.entries[i].link);
	if (corsProxyVer==3) link2="https://api.allorigins.win/raw?url="+encodeURIComponent(result.entries[i].link);

	xmlhttp.timeout = timeoutVal;
	xmlhttp.open("GET", link2, true);
	xmlhttp.send();

}
// ------------- End of Update---------------- //