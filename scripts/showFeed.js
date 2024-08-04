// ------------- Global Variables ---------------- //
timeoutVal=10000; // 10s
// ------------- End of Global Variables ---------------- //

// ------------- Initial ---------------- //
function newsLoad(source, lang) {

	var typeL="";
	var type="";
	var toRedirect=0;
	
	typeL=getParameterByName('type');
	if (typeL && typeL!="") {
		if (source=="bbc" && (typeL=="top" || typeL=="world" || typeL=="uk" || typeL=="business" || typeL=="politics" || typeL=="health" || typeL=="education" || typeL=="science" || typeL=="technology" || typeL=="entertainment") 
		|| source=="nasa" && (typeL=="releases" || typeL=="recent" || typeL=="image" || typeL=="technology" || typeL=="aeronautics" || typeL=="iss" || typeL=="artemis" || typeL=="picture") 
		|| source=="yahoo" && (typeL=="top" || typeL=="world" || typeL=="us" || typeL=="politics" || typeL=="health" || typeL=="finance" || typeL=="science" || typeL=="sports" || typeL=="entertainment" || typeL=="lifestyle"))  {
			type=typeL;
		}
	} else {
		type="top";
		toRedirect=1;
	}

	if (type=="") {
		if (lang=="rus") alert("Тип (Type) '"+typeL+"' Не Найден! Перенаправление....");
		if (lang=="eng") alert("Type '"+typeL+"' Not Found! Redirecting....");
		if (lang=="lat") alert("Genus (Type) '"+typeL+"' Non Inventum! Redirecting....");
		toRedirect=1;
	}
	if (toRedirect==1) { // restore
	    	if (source=="bbc") {
			window.location.href='news_bbc_'+lang+'.html?type=top';
		}
	    	if (source=="nasa") {
			window.location.href='news_nasa_'+lang+'.html?type=releases';
		}
	    	if (source=="yahoo") {
			window.location.href='news_yahoo_'+lang+'.html?type=top';
		}
	}

	showFeed(type, source, lang);
	processPageResize(1);
}


function refreshFeedTabs(feedTypeL, col) {

	feedType=getParameterByName('type');

	if (feedType=="top" || feedTypeL=="top") mouseOut("top", feedTypeL, col);
	if (feedType=="world" || feedTypeL=="world") mouseOut("world", feedTypeL, col);
	if (feedType=="uk" || feedTypeL=="uk") mouseOut("uk", feedTypeL, col);
	if (feedType=="business" || feedTypeL=="business") mouseOut("business", feedTypeL, col);
	if (feedType=="politics" || feedTypeL=="politics") mouseOut("politics", feedTypeL, col);
	if (feedType=="health" || feedTypeL=="health") mouseOut("health", feedTypeL, col);
	if (feedType=="education" || feedTypeL=="education") mouseOut("education", feedTypeL, col);
	if (feedType=="science" || feedTypeL=="science") mouseOut("science", feedTypeL, col);
	if (feedType=="technology" || feedTypeL=="technology") mouseOut("technology", feedTypeL, col);
	if (feedType=="entertainment" || feedTypeL=="entertainment") mouseOut("entertainment", feedTypeL, col);

	if (feedType=="1" || feedTypeL=="1") mouseOut("1", feedTypeL, col);
	if (feedType=="2" || feedTypeL=="2") mouseOut("2", feedTypeL, col);
	if (feedType=="3" || feedTypeL=="3") mouseOut("3", feedTypeL, col);
	if (feedType=="4" || feedTypeL=="4") mouseOut("4", feedTypeL, col);
	if (feedType=="5" || feedTypeL=="5") mouseOut("5", feedTypeL, col);
	if (feedType=="6" || feedTypeL=="6") mouseOut("6", feedTypeL, col);
	if (feedType=="7" || feedTypeL=="7") mouseOut("7", feedTypeL, col);
	if (feedType=="8" || feedTypeL=="8") mouseOut("8", feedTypeL, col);
	if (feedType=="9" || feedTypeL=="9") mouseOut("9", feedTypeL, col);
	if (feedType=="10" || feedTypeL=="10") mouseOut("10", feedTypeL, col);

	if (feedType=="us" || feedTypeL=="us") mouseOut("us", feedTypeL, col);
	if (feedType=="finance" || feedTypeL=="finance") mouseOut("finance", feedTypeL, col);
	if (feedType=="sports" || feedTypeL=="sports") mouseOut("sports", feedTypeL, col);
	if (feedType=="lifestyle" || feedTypeL=="lifestyle") mouseOut("lifestyle", feedTypeL, col);

	if (feedType=="releases" || feedTypeL=="releases") mouseOut("releases", feedTypeL, col);
	if (feedType=="recent" || feedTypeL=="recent") mouseOut("recent", feedTypeL, col);
	if (feedType=="image" || feedTypeL=="image") mouseOut("image", feedTypeL, col);
	if (feedType=="aeronautics" || feedTypeL=="aeronautics") mouseOut("aeronautics", feedTypeL, col);
	if (feedType=="iss" || feedTypeL=="iss") mouseOut("iss", feedTypeL, col);
	if (feedType=="artemis" || feedTypeL=="artemis") mouseOut("artemis", feedTypeL, col);
	if (feedType=="picture" || feedTypeL=="picture") mouseOut("picture", feedTypeL, col);

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
	document.getElementById("scrollDiv").setAttribute("style", "height: "+(parseInt($( "#scrollDiv" ).css( "height" )))+"px; width: 710px; overflow:auto;");

	// ------------- Setting Texts ---------------- //
	// Records Text is in getRecordsText function
	if (lang == "rus"){
		textRssFeed="RSS Строка";
		if (source == "bbc" || source == "nasa" || source == "yahoo") textRssFeed=textRssFeed+" (англ.)";
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


	document.getElementById("feed_title").innerHTML = "";
	document.getElementById("feed_title").setAttribute('style', 'display: -webkit-flex;display: flex;align-items: center;');

	var aLogo = document.createElement('a');
	aLogo.setAttribute('href', result.link);
	aLogo.setAttribute('class', 'standardb_red');
	aLogo.setAttribute('target', '_blank');
	aLogo.style = 'padding-top:5px; padding-bottom:5px;';

	var Img=document.createElement("img");
	Img.setAttribute('src', result.image);
	Img.setAttribute('class', "thumbnail_image_both");
	Img.setAttribute('alt', result.title);
	Img.setAttribute('title', result.title);
	Img.setAttribute('align', 'left');
	Img.style = 'padding-bottom:5px;';
	aLogo.appendChild(Img);
	Img.onload = function () { 

		document.getElementById("feed_title").appendChild(aLogo);
		$("#feed_title_row").show();
		newHeight=document.getElementById("scrollDiv").offsetHeight-this.height-19;
		document.getElementById("scrollDiv").setAttribute("style", "height:"+newHeight+"px;width: 710px; overflow:auto;");

/*
		feedTitleHeight=parseInt($( "#feed_title" ).css( "height" ));
		scrollDivHeight=calcScrollDivHeightMax();
		document.getElementById("scrollDiv").setAttribute("style", "height:"+(scrollDivHeight - (feedTitleHeight+4))+"px;width: 710px; overflow:auto;");
*/

		document.getElementById("feed_title").innerHTML=document.getElementById("feed_title").innerHTML+"&nbsp;"+textRssFeed;

		if (source == "bbc" || source == "nasa" || source == "yahoo") {
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
			} else {
				Img.setAttribute('alt', textRssFeed);
				Img.setAttribute('title', textRssFeed);
			}
			a.appendChild(Img);
			document.getElementById("feed_title").innerHTML=document.getElementById("feed_title").innerHTML+"&nbsp;";
			document.getElementById("feed_title").appendChild(a);
		} 
		totalEntriesText=totalEntries;
		if (totalEntries==0) totalEntriesText=textZero;

		document.getElementById("feed_title").innerHTML=document.getElementById("feed_title").innerHTML+",&nbsp;"+totalEntriesText+"&nbsp;"+getRecordsText(lang, totalEntries)+".";

		if (typeof result.localCopy!=="undefined" && result.localCopy.is==1) {
			textLocalCopy2=textLocalCopy+", "+formatDate(result.localCopy.recivedTime, lang)+", "+result.localCopy.type;

			var Img=document.createElement("img");
			Img.setAttribute('class', "text_red");
			Img.setAttribute('src', "images/icons/feed/local_copy.png");
			Img.setAttribute('alt', textLocalCopy2);
			Img.setAttribute('title', textLocalCopy2);

			document.getElementById("feed_title").innerHTML=document.getElementById("feed_title").innerHTML+"&nbsp;";
			document.getElementById("feed_title").appendChild(Img);

		}
		if (totalEntries>0) {
			if (source=="nasa" && type!="image"&& type!="picture") {
				locStPar=source+"_"+type+"_images";
				locStUpdateData=getLocalStorageData(locStPar);
				updateImages(0, source, type, result, locStUpdateData, lang);
			} else if (source=="bbc" || (source=="yahoo" && type=="sports") || (source=="nasa" && (type=="image" || type=="picture"))) {
				processShowFeedData(type, source, lang, result);
			}  else if (source=="yahoo" && type!="sports") {
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


function showEntry(type, source, lang, items, i, tableMainRow) {


	// ------------- Setting Texts ---------------- //
	// Records Text is in getRecordsText function
	if (lang == "rus"){
		textSource="Источник:&nbsp;";
		textCategory="Категория:&nbsp;";
		textCategories="Категории:&nbsp;";
		textCreator="Создатель:&nbsp;";
		textCreators="Создатели:&nbsp;";
		textMore="Ещё >>";
		textLocalCopy="Локальная Копия";
		textObtainedBy="Получено через";
	}

	if (lang == "eng" || lang == "lat"){
		textSource="Source:&nbsp;";
		textCategory="Category:&nbsp;";
		textCategories="Categories:&nbsp;";
		textCreator="Creator:&nbsp;";
		textCreators="Creators:&nbsp;";
		textMore="More >>";
		textLocalCopy="Local Copy";
		textObtainedBy="Obtained by";
	}

	if (lang == "lat"){
		textMore="Plus >>";
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
	
	imagesrc=entry.media.url;
	if (source=="nasa") imagesrc=entry.media.url+"?w=450";

	if (source=="yahoo" || source=="nasa") {
		var messageDiv1 = document.createElement('span');
		messageDiv1.setAttribute('class', "text_red");
		messageDiv1.dataset.loadingAttempt = 0;
		if (lang == "eng" || lang == "lat") messageDiv1.innerHTML="Loading ";
		if (lang == "rus") messageDiv1.innerHTML="Загружается ";
		cell1.appendChild(messageDiv1);

		var aImage = document.createElement('a');
		aImage.setAttribute('href', "'"+imagesrc+"'");
		aImage.setAttribute('class', 'standardb_red');
		aImage.setAttribute('target', '_blank');
		if (lang == "eng" || lang == "lat") aImage.innerHTML = "Image ";
		if (lang == "rus") aImage.innerHTML = "Картинка ";
		cell1.appendChild(aImage);

		var messageDiv2 = document.createElement('span');
		messageDiv2.setAttribute('class', "text_red");
		messageDiv2.innerHTML=" ";
		cell1.appendChild(messageDiv2);

		var aReload = document.createElement('a');
		aReload.setAttribute('href', "javascript:void(0);");
		aReload.setAttribute('class', 'standardb_red');
		if (lang == "eng" || lang == "lat") aReload.setAttribute('title', 'Reload');
		if (lang == "rus") aReload.setAttribute('title', 'Перезагрузить');
		aReload.innerHTML = "&circlearrowleft;";
		aReload.onclick = function () {
			Img.onerror();
		}
		cell1.appendChild(aReload);

		var messageDiv3 = document.createElement('span');
		messageDiv3.setAttribute('class', "text_red");
		messageDiv3.innerHTML=" <span class='loadingDiv'>.</span>";
		cell1.appendChild(messageDiv3);
	}


	var Img=document.createElement("img");
	Img.setAttribute('class', "text_red");
	Img.setAttribute('alt', entry.media.comment);
	Img.setAttribute('title', entry.media.comment);
	Img.setAttribute('vspace', '5');
	Img.setAttribute('hspace', '5');
	Img.setAttribute('align', 'left');
	Img.setAttribute('width', entry.media.width);
	Img.setAttribute('style', 'padding-right:5px;');
	Img.setAttribute('loading', 'lazy');
	Img.setAttribute('src', imagesrc);
	Img.onload = function () {

		if (source=="yahoo" || source=="nasa") {
			messageDiv1.style.display = "none";
			aImage.style.display = "none";
			messageDiv2.style.display = "none";
			aReload.style.display = "none";
			messageDiv3.style.display = "none";
		}

		var scrollDiv = document.getElementById('scrollDiv');
		var hasVerticalScrollbar = scrollDiv.scrollHeight > scrollDiv.clientHeight;
		if (hasVerticalScrollbar) {
			feedTitleHeight=parseInt($( "#feed_title" ).css( "height" ));
			scrollDivHeight=calcScrollDivHeightMax();
			scrollDiv.setAttribute("style", "height:"+(scrollDivHeight - (feedTitleHeight+4))+"px;width: 710px; overflow:auto;");
			adjustScrollDiv();
		}
	}
	Img.onerror= function () {
		if (source=="nasa") {
			Img.src = "images/icons/error/error.jpg";
		} else {
			if (source=="yahoo") {
				messageDiv1.dataset.loadingAttempt=parseInt(messageDiv1.dataset.loadingAttempt)+1;

				if (lang == "eng" || lang == "lat") messageDiv1.innerHTML="";
				if (lang == "rus") messageDiv1.innerHTML="Ошибка Загрузки ";

				if (lang == "rus") aImage.innerHTML = "Картинки ";

				if (lang == "eng" || lang == "lat") messageDiv2.innerHTML=" Loading Error. ReLoading x";
				if (lang == "rus") messageDiv2.innerHTML=". Перезагрузка x";
				messageDiv2.innerHTML=messageDiv2.innerHTML+messageDiv1.dataset.loadingAttempt+" ";

				aReload.onclick = function () {
					Img.src = Img.src;
					messageDiv1.dataset.loadingAttempt=parseInt(messageDiv1.dataset.loadingAttempt)+1;
						if (lang == "eng" || lang == "lat") messageDiv2.innerHTML=" Loading Error. ReLoading x";
						if (lang == "rus") messageDiv2.innerHTML=". Перезагрузка x";
						messageDiv2.innerHTML=messageDiv2.innerHTML+messageDiv1.dataset.loadingAttempt+" ";
				}

			}
			Img.src = Img.src;
		}
	}
	cell1.appendChild(Img);

	if (entry.summary!=null) {
		var Div = document.createElement('div');
		Div.setAttribute('class', "text_red");
		if (entry.summary==null) {
			Div.innerHTML="";
		} else {
			Div.innerHTML="<P>"+entry.summary;
		}
		cell1.appendChild(Div);
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
				
	var row = newsTable1Record.insertRow(-1);
	var cell1 = row.insertCell(0);				
	var date = document.createElement('div');
	date.className = 'textsmall_red';
	date.style.textAlign = 'right';
	date.innerHTML = formatDate(entry.date_ms, lang);
	cell1.appendChild(date);

	var cell1=tableMainRow.insertCell(i);
	cell1.appendChild(newsTable1Record);
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
				scrollDivHeight=calcScrollDivHeightMax();
				document.getElementById("scrollDiv").setAttribute("style", "height:"+scrollDivHeight+"px; overflow:auto;");
				adjustScrollDiv();
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
			if (source == "yahoo") result.image="images/icons/feed/yahoo_news_logo.png";
			if (source == "bbc") result.image="images/icons/feed/bbc_news_logo.png";
			if (source == "nasa") result.image="images/icons/feed/NASA_Worm_logo.png";
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


function showFeed(type, source, lang) {

	refreshFeedTabs(type);

	var table = document.getElementById("feedtable");
	while(table.childNodes.length>0){table.removeChild(table.lastChild);}
	var row = table.insertRow(-1);
	var cell1 = row.insertCell(0);
	cell1.className = 'text_red';
	cell1.style.textAlign = 'center';
	if (lang=="rus") cell1.innerHTML = "<b><div id='loadingDivTitle'>Читается Строка Новостей</div><div id='loadingDiv'>.</div><div id='loadingSummary'></div></b>";
	if (lang=="eng") cell1.innerHTML = "<b><div id='loadingDivTitle'>Reading News Feed</div><div id='loadingDiv'>.</div><div id='loadingSummary'></div></b>";
	if (lang=="lat") cell1.innerHTML = "<b><div id='loadingDivTitle'>Lectio Nuntium Acies</div><div id='loadingDiv'>.<div id='loadingSummary'></div></div></b>";

	feedURL="";
	if (source == "bbc") {
		if (type=="top") feedURL="http://feeds.bbci.co.uk/news/rss.xml";
		if (type=="world") feedURL="http://feeds.bbci.co.uk/news/world/rss.xml";
		if (type=="uk") feedURL="http://feeds.bbci.co.uk/news/uk/rss.xml";
		if (type=="business") feedURL="http://feeds.bbci.co.uk/news/business/rss.xml";
		if (type=="politics") feedURL="http://feeds.bbci.co.uk/news/politics/rss.xml";
		if (type=="health") feedURL="http://feeds.bbci.co.uk/news/health/rss.xml";
		if (type=="education") feedURL="http://feeds.bbci.co.uk/news/education/rss.xml";
		if (type=="science") feedURL="http://feeds.bbci.co.uk/news/science_and_environment/rss.xml";
		if (type=="technology") feedURL="http://feeds.bbci.co.uk/news/technology/rss.xml";
		if (type=="entertainment") feedURL="http://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml";

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


	feednami.load(feedURL, function(result){
		if(result.error){
			document.getElementById("loadingDivTitle").innerHTML =  result.error;
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
	if (source == "yahoo") result.image="images/icons/feed/yahoo_news_logo.png";
	if (source == "bbc") result.image="images/icons/feed/bbc_news_logo.png";
	if (source == "nasa") result.image="images/icons/feed/NASA_Worm_logo.png";

	result.entries=[];
	if (resultOrig.feed.entries.length==0) return result;


	if (source == "bbc" || source == "yahoo") result.title=resultOrig.feed.meta.image.title;
	if (source == "nasa") result.title=resultOrig.feed.meta["rss:title"]["#"];
	result.link=resultOrig.feed.meta.link;

	items=resultOrig.feed.entries;

	for (var i=0; i<items.length; i++) {
		entry = items[i];
		result.entries[i]={};

		result.entries[i].title=entry.title;
		result.entries[i].media={};
		result.entries[i].media.comment="";
		if (source == "bbc") {
			result.entries[i].media.url=entry["media:thumbnail"]["@"].url;
			result.entries[i].media.width=entry["media:thumbnail"]["@"].width;
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
				result.entries[i].media.url="images/icons/error/not_available.jpg";
					if (lang=="rus") result.entries[i].media.comment="Картинка не Определена";
					if (lang=="eng" || lang=="lat") result.entries[i].media.comment="Image Undefined";
				result.entries[i].media.width=450;
				result.entries[i].summary=entry["rss:description"]["#"];
			}
		}
		if (source == "yahoo") {
			if (entry["media:content"]==null) {
				result.entries[i].media.url="images/icons/error/not_available.jpg";
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
					result.entries[i].media.url="images/icons/error/not_available.jpg";
					if (lang=="rus") result.entries[i].media.comment="Картинка не Определена";
					if (lang=="eng" || lang=="lat") result.entries[i].media.comment="Image Undefined";
				} else {
					q1Pos=desc2.indexOf('"', imgPos+1);
					q2Pos=desc2.indexOf('"', q1Pos+1);
					result.entries[i].media.url=desc2.substring(q1Pos+1, q2Pos);
				}
			}
			result.entries[i].summary=entry.summary;

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
		result.entries[i].date_ms=entry.date_ms;

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
			matchPosQ=entry_link.indexOf("?");
			if (matchPosQ!=-1) entry_link=result.entries[i].link.substr(0, matchPosQ);
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
	matchPosQ=entry_link.indexOf("?");
	if (matchPosQ!=-1) entry_link=result.entries[i].link.substr(0, matchPosQ);

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
	if (skipUpdates==1) {
		if (lang=="eng" || lang=="lat") result.entries[i].media.comment="Update Skipped";
		if (lang=="rus") result.entries[i].media.comment="Обновление Отменено";
		result.entries[i].media.url="images/icons/error/skipped.jpg";
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
		if (lang=="eng" || lang=="lat") result.entries[i].media.comment="Update Skipped";
		if (lang=="rus") result.entries[i].media.comment="Обновление Отменено";
		result.entries[i].media.url="images/icons/error/skipped.jpg";
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
					if (lang=="eng" || lang=="lat") result.entries[i].media.comment="Image Undefined";
					if (lang=="rus") result.entries[i].media.comment="Картинка не Определена";
					result.entries[i].media.url="images/icons/error/not_available.jpg";
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

			if (mediaURL!="") {
				qPos=mediaURL.indexOf("?");
				if (qPos!=-1) mediaURL=mediaURL.substr(0, qPos);

				result.entries[i].media.url=mediaURL;
				result.entries[i].media.comment=mediaComment;

				locStUpdateData[entry_link]={};
				locStUpdateData[entry_link].mediaUrl=mediaURL;
				locStUpdateData[entry_link].mediaComment=mediaComment;
				localStorage[source+"_"+type+"_images"]=JSON.stringify(locStUpdateData);
				loadingSummary.innerHTML=loadingSummary.innerHTML+"&#10004;";
			} else {
				if (lang=="eng" || lang=="lat") result.entries[i].media.comment="Image Undefined";
				if (lang=="rus") result.entries[i].media.comment="Картинка не Определена";
				result.entries[i].media.url="images/icons/error/not_available.jpg";
				loadingSummary.innerHTML=loadingSummary.innerHTML+"?";
			}

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

	if (typeof result.entries[i].summary!== "undefined" && result.entries[i].summary!= null) {
		updateNextDescription(i, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates);
		return;
	}


	entry_link=result.entries[i].link;
	matchPosQ=entry_link.indexOf("?");
	if (matchPosQ!=-1) entry_link=result.entries[i].link.substr(0, matchPosQ);

	if (typeof locStUpdateData[entry_link]!== "undefined") {
		result.entries[i].summary=locStUpdateData[entry_link].summary;
		if (typeof locStUpdateData[entry_link].mediaUrl!== "undefined") {
			result.entries[i].media.url=locStUpdateData[entry_link].mediaUrl;
		}
		updateNextDescription(i, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates);
		return;
	}

	if (lang=="eng" || lang=="lat") textUpdateSkipped="Update Skipped.";
	if (lang=="rus") textUpdateSkipped="Обновление Отменено.";

	if (skipUpdates==1) {
		result.entries[i].summary=textUpdateSkipped;
		if (lang=="eng" || lang=="lat") result.entries[i].media.comment="Update Skipped";
		if (lang=="rus") result.entries[i].media.comment="Обновление Отменено";
		result.entries[i].media.url="images/icons/error/skipped.jpg";
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
		result.entries[i].summary=textUpdateSkipped;
		if (lang=="eng" || lang=="lat") result.entries[i].media.comment="Update Skipped";
		if (lang=="rus") result.entries[i].media.comment="Обновление Отменено";
		result.entries[i].media.url="images/icons/error/skipped.jpg";
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
					if (lang=="eng" || lang=="lat") result.entries[i].media.comment="Image Undefined";
					if (lang=="rus") result.entries[i].media.comment="Картинка не Определена";
					result.entries[i].media.url="images/icons/error/not_available.jpg";
					if (lang=="eng" || lang=="lat") result.entries[i].summary="Update Time-out. <a href='javascript:location.reload();' class = 'standardb_red'>Reload Page</a>";
					if (lang=="rus") result.entries[i].summary="Тайм-аут Обновления. <a href='javascript:location.reload();' class = 'standardb_red'>Обновите Страницу</a>";
					corsProxyVer=1;
					updateNextDescription(i, source, type, result, locStUpdateData, lang, corsProxyVer, skipUpdates);
					return;
				}
			}

			var doc = (new DOMParser).parseFromString(data, "text/html");

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

			if (description!="") {
				result.entries[i].summary=description;
				locStUpdateData[entry_link]={};
				locStUpdateData[entry_link].summary=description;
				localStorage[source+"_"+type+"_descriptions"]=JSON.stringify(locStUpdateData);
				loadingSummary.innerHTML=loadingSummary.innerHTML+"&#10004;";
			} else {
				if (lang=="eng" || lang=="lat") description="Description Update Failed. <a href='javascript:location.reload();' class = 'standardb_red'>Reload Page</a>";
				if (lang=="rus") description="Обновление Описания не Удалось. <a href='javascript:location.reload();' class = 'standardb_red'>Обновите Страницу</a>";
				result.entries[i].summary=description;
				loadingSummary.innerHTML=loadingSummary.innerHTML+"?";
				console.log("Update Failed. Record # "+(i+1)+", data="+data);
			}

			mediaURL="";
			property=doc.head.querySelector('meta[property="og:image"]');
			if (property != null) mediaURL=property.content;
			if (mediaURL!="") {
				qPos=mediaURL.indexOf("?");
				if (qPos!=-1) mediaURL=mediaURL.substr(0, qPos);
				result.entries[i].media.url=mediaURL;
				locStUpdateData[entry_link].mediaUrl=mediaURL;
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