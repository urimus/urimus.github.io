allImagesLoaded=0;

function newsLoad(source, lang) {

    var typeL="";
    var type="";
    var toRedirect=0;
	
//    var url = new URL(window.location);
    typeL=getParameterByName('type');
    if (typeL && typeL!="") {
        if (source=="bbc" && (typeL=="top" || typeL=="world" || typeL=="uk" || typeL=="business" || typeL=="politics" || typeL=="health" || typeL=="education" || typeL=="science" || typeL=="technology" || typeL=="entertainment") 
	|| source=="bbcrussian" && (typeL=="top" || typeL=="russia" || typeL=="world" || typeL=="features" || typeL=="cluster" || typeL=="special" || typeL=="documentaries" || typeL=="papers" || typeL=="section")
	|| source=="lenta" && (typeL=="russia" || typeL=="world" || typeL=="ussr" || typeL=="finances" || typeL=="business" || typeL=="power" || typeL=="science" || typeL=="culture" || typeL=="sport" || typeL=="internet" || typeL=="valuables" || typeL=="travelling" || typeL=="live" || typeL=="69" || typeL=="cultlight" || typeL=="economy" || typeL=="house" || typeL=="natproj" || typeL=="motor")) {
            type=typeL;
        }
     } else {
	type="world";
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
				window.location.href='news_bbc_'+lang+'.html?type=world';
			}
		    	if (source=="bbcrussian") {
				window.location.href='news_bbcrussian_'+lang+'.html?type=world';
			}
		    	if (source=="lenta") {
				window.location.href='news_lenta_'+lang+'.html?type=world';
			}
			
		}

	showFeed(type, source, lang);
	dispatchResize();
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

    if (feedType=="russia" || feedTypeL=="russia") mouseOut("russia", feedTypeL, col);
    if (feedType=="ussr" || feedTypeL=="ussr") mouseOut("ussr", feedTypeL, col);
    if (feedType=="finances" || feedTypeL=="finances") mouseOut("finances", feedTypeL, col);
    if (feedType=="power" || feedTypeL=="power") mouseOut("power", feedTypeL, col);
    if (feedType=="culture" || feedTypeL=="culture") mouseOut("culture", feedTypeL, col);
    if (feedType=="sport" || feedTypeL=="sport") mouseOut("sport", feedTypeL, col);
    if (feedType=="internet" || feedTypeL=="internet") mouseOut("internet", feedTypeL, col);
    if (feedType=="valuables" || feedTypeL=="valuables") mouseOut("valuables", feedTypeL, col);
    if (feedType=="travelling" || feedTypeL=="travelling") mouseOut("travelling", feedTypeL, col);
    if (feedType=="live" || feedTypeL=="live") mouseOut("live", feedTypeL, col);
    if (feedType=="69" || feedTypeL=="69") mouseOut("69", feedTypeL, col);
    if (feedType=="cultlight" || feedTypeL=="cultlight") mouseOut("cultlight", feedTypeL, col);
    if (feedType=="economy" || feedTypeL=="economy") mouseOut("economy", feedTypeL, col);
    if (feedType=="house" || feedTypeL=="house") mouseOut("house", feedTypeL, col);
    if (feedType=="natproj" || feedTypeL=="natproj") mouseOut("natproj", feedTypeL, col);
    if (feedType=="motor" || feedTypeL=="motor") mouseOut("motor", feedTypeL, col);

    if (feedType=="features" || feedTypeL=="features") mouseOut("features", feedTypeL, col);
    if (feedType=="cluster" || feedTypeL=="cluster") mouseOut("cluster", feedTypeL, col);
    if (feedType=="special" || feedTypeL=="special") mouseOut("special", feedTypeL, col);
    if (feedType=="documentaries" || feedTypeL=="documentaries") mouseOut("documentaries", feedTypeL, col);
    if (feedType=="papers" || feedTypeL=="papers") mouseOut("papers", feedTypeL, col);
    if (feedType=="section" || feedTypeL=="section") mouseOut("section", feedTypeL, col);
}

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



function updateBbcImages(recordsNum, cImage) {

	var Img = document.getElementById("img"+cImage);
	var Link = document.getElementById("link"+cImage);
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();               
	} 
	else {               
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");               
	}

	xmlhttp.onreadystatechange = function () {               
		if (xmlhttp.readyState == 4) {                   
			data= xmlhttp.responseText;  


			searchStr="property=\"og:image\" content=\"";
			matchPos=data.indexOf(searchStr);
			matchPos2=data.indexOf("\"",matchPos + searchStr.length);
			mediaURL=data.substr(matchPos+searchStr.length, matchPos2-matchPos-searchStr.length);

			searchStr="property=\"og:image:alt\" content=\"";
			matchPos=data.indexOf(searchStr);
			matchPos2=data.indexOf("\"",matchPos + searchStr.length);
			mediaComment=data.substr(matchPos+searchStr.length, matchPos2-matchPos-searchStr.length);
			// decode html
			mediaComment=$("<textarea/>").html(mediaComment).text();

			if (mediaURL) Img.setAttribute('src', mediaURL);
			Img.setAttribute('alt', mediaComment);
			Img.setAttribute('title', mediaComment);

			if ((cImage+1)>= recordsNum) {
				adjustScrollDiv();
			} else {
				updateBbcImages(recordsNum, cImage+1);
			}
		}
	}
//https://cors-anywhere.herokuapp.com/
//https://secret-ocean-49799.herokuapp.com/
	xmlhttp.open("GET", 'https://secret-ocean-49799.herokuapp.com/'+Link.href, true);
	xmlhttp.send();

}




function processShowFeed(type, source, lang, result) {

// console.log(result);

	textRssFeed="";
	textRecords="";
	textMore="";


	images_loaded=0;


			// ------------- Setting Texts ---------------- //
			// Records Text is in getRecordsText function
			if (lang == "rus"){
				textRssFeed="RSS Строка";
				if (source == "bbc") { textRssFeed=textRssFeed+" (англ.)"; }
				textMore="Ещё >>";
			}

			if (lang == "eng" || lang == "lat"){
				textRssFeed="RSS Feed";
				if (source == "bbcrussian" || source == "lenta") { textRssFeed=textRssFeed+" (rus.)"; }
				textMore="More >>";
			}

			// ------------- End of Setting Texts ---------------- //

			var items=result.feed.entries;

			// ------------- For Lenta only -------------- //
			if (source == "lenta") {
				var items2 = [];
				cRussia=0; cWorld=0; cUssr=0; 	cFinances=0; cBusiness=0; cPower=0; cScience=0; cCulture=0; cSport=0; cInternet=0; cValuables=0; cTravelling=0; cLive=0; c69=0; cCultlight=0; cEconomy=0; cHouse=0; cNatproj=0; cMotor=0;
				for (var i = 0; i < items.length; i++) { // ------------- Keep curret category only ----------------
					var entry = items[i];

		
					if (entry.categories.length != 0) {
						var category= entry.categories[0];

						if (type == "russia" && category == "Россия") { items2.push(entry);
						} else if (type == "world" && category == "Мир") { items2.push(entry);
						} else if (type == "ussr" && category == "Бывший СССР") { items2.push(entry);
						} else if (type == "finances" && category == "Финансы") { items2.push(entry);
						} else if (type == "business" && category == "Бизнес") { items2.push(entry);
						} else if (type == "power" && category == "Силовые структуры") { items2.push(entry);
						} else if (type == "science" && category == "Наука и техника") { items2.push(entry);
						} else if (type == "culture" && category == "Культура") { items2.push(entry);
						} else if (type == "sport" && category == "Спорт") { items2.push(entry);
						} else if (type == "internet" && category == "Интернет и СМИ") { items2.push(entry);
						} else if (type == "valuables" && category == "Ценности") { items2.push(entry);
						} else if (type == "travelling" && category == "Путешествия") { items2.push(entry);
						} else if (type == "live" && category == "Из жизни") { items2.push(entry);
						} else if (type == "69" && category == "69-я параллель") { items2.push(entry);
						} else if (type == "cultlight" && category == "Культпросвет") { items2.push(entry);
						} else if (type == "economy" && category == "Экономика") { items2.push(entry);
						} else if (type == "house" && category == "Дом") { items2.push(entry);
						} else if (type == "natproj" && category == "Нацпроекты") { items2.push(entry);
						} else if (type == "motor" && category == "Мотор") { items2.push(entry);
						} else {
							if (category != "Россия" &&
								category != "Мир" &&
								category != "Бывший СССР" &&
								category != "Финансы" &&
								category != "Бизнес" &&
								category != "Силовые структуры" &&
								category != "Наука и техника" &&
								category != "Культура" &&
								category != "Спорт" &&
								category != "Интернет и СМИ" &&
								category != "Ценности" &&
								category != "Путешествия" &&
								category != "Из жизни" &&
								category != "69-я параллель" &&
								category != "Культпросвет" &&
								category != "Крым" &&
								category != "Экономика" &&
								category != "Дом" &&
								category != "Нацпроекты" &&
								category != "Мотор"
							)
							console.log(category);
						}

						if (category == "Россия") cRussia++;
						if (category == "Мир") cWorld++;
						if (category == "Бывший СССР") cUssr++;
						if (category == "Финансы") cFinances++;
						if (category == "Бизнес") cBusiness++;
						if (category == "Силовые структуры") cPower++;
						if (category == "Наука и техника") cScience++;
						if (category == "Культура") cCulture++;
						if (category == "Спорт") cSport++;
						if (category == "Интернет и СМИ") cInternet++;
						if (category == "Ценности") cValuables++;
						if (category == "Путешествия") cTravelling++;
						if (category == "Из жизни") cLive++
						if (category == "69-я параллель") c69++;
						if (category == "Культпросвет") cCultlight++;
						if (category == "Экономика") cEconomy++;
						if (category == "Дом") cHouse++;
						if (category == "Нацпроекты") cNatproj++;
						if (category == "Мотор") cMotor++;
					}
			    	}
			    	items=items2;

			    	showRecordsNum("russia", cRussia, lang);
			    	showRecordsNum("world", cWorld, lang);
			    	showRecordsNum("ussr", cUssr, lang);
			    	showRecordsNum("finances", cFinances, lang);
			    	showRecordsNum("business", cBusiness, lang);
			    	showRecordsNum("power", cPower, lang);
			    	showRecordsNum("science", cScience, lang);
			    	showRecordsNum("culture", cCulture, lang);
			    	showRecordsNum("sport", cSport, lang);
			    	showRecordsNum("internet", cInternet, lang);
			    	showRecordsNum("valuables", cValuables, lang);
			    	showRecordsNum("travelling", cTravelling, lang);
			    	showRecordsNum("live", cLive, lang);
			    	showRecordsNum("69", c69, lang);
			    	showRecordsNum("cultlight", cCultlight, lang);
		           	showRecordsNum("economy", cEconomy, lang);
		           	showRecordsNum("house", cHouse, lang);
		           	showRecordsNum("natproj", cNatproj, lang);
		           	showRecordsNum("motor", cMotor, lang);
			}

			// ------------- END of For Lenta only -------------- //

			var totalEntries=items.length;

			var table = document.getElementById("feedtable");
			while(table.childNodes.length>0){table.removeChild(table.lastChild);}


			// ------------- Feeds Title ---------------- //
			var a = document.createElement('a');
			a.setAttribute('href', result.feed.meta.link);
			a.setAttribute('class', 'standardb_red');
			a.setAttribute('target', '_blank');
			a.innerHTML = result.feed.meta.title;
			document.getElementById("feed_title").innerHTML = "";
			document.getElementById("feed_title").appendChild(a);
			document.getElementById("feed_title").innerHTML=document.getElementById("feed_title").innerHTML+" "+textRssFeed+", "+totalEntries+" "+getRecordsText(lang, totalEntries)+".";
			$("#feed_title_row").show();

// --------------- re-set scroll div ------------ //
//   Header Image
  var newImg = new Image();
  newImg.src = "icons/urmas.jpg";
  var hImgHeight = newImg.height;
  var hImgWidth = newImg.width;
  var hImgHeight = hImgHeight*(1000/hImgWidth);
//   End of Header Image

  var h = Math.max(window.innerHeight, document.documentElement.clientHeight);
  var noScrollHeightMax=h-hImgHeight-99-upperIntend;

  var scrollDivHeight=menuHeight-upperIntend;

   if (noScrollHeightMax>scrollDivHeight) {scrollDivHeight=noScrollHeightMax;}
   titleAdditIntend=parseInt($( "#feed_title_row" ).css( "height" ));
   document.getElementById("scrollDiv").setAttribute("style", "height:"+(scrollDivHeight-titleAdditIntend)+"px;width: 710px; overflow:auto;");
// --------------- End of re-set scroll div ------------ //

			// ------------- End of Feeds Title -------------- //

			var tableMainRow = table.insertRow(-1);


			for (var i = 0; i < totalEntries; i++) { // ------------- Cycle over feeds ---------------- //
				// ------------- Reading Data ---------------- //

				var entry = items[i];



				// https://stackoverflow.com/questions/28409615/read-media-thumbnail-rss-feed-with-jquery
				if (source == "lenta") {
					var mediaThumbnailUrl=entry.enclosures[0]["url"];
					var mediaThumbnailWidth=entry.enclosures[0]["length"];
				}
				if (source == "bbc") {
					var mediaThumbnailUrl="icons/bbc_news.jpg";
					var mediaThumbnailWidth=450;
				}
				if (source == "bbcrussian") {
					var mediaThumbnailUrl=entry.url;
					var mediaThumbnailWidth=entry.width;
				}

				mediaThumbnailUrl = (mediaThumbnailUrl ? mediaThumbnailUrl : "icons/no_image2.jpg"); // Just the url

				// ------------- End of Reading Data ---------------- //


				// ------------- Setting Data ---------------- //


				var mediaTitle="";
				if (entry.comments!=null) mediaTitle=entry.comments;


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
				Img.setAttribute('id', "img"+i);
				Img.setAttribute('class', "text_red");
				Img.setAttribute('src', mediaThumbnailUrl);
				Img.setAttribute('alt', mediaTitle);
				Img.setAttribute('title', mediaTitle);
				Img.setAttribute('vspace', '5');
				Img.setAttribute('hspace', '5');
				Img.setAttribute('align', 'left');

				if (!mediaThumbnailWidth || mediaThumbnailWidth >=450) {
				   Img.setAttribute('width', '450');
				} else {
				   Img.setAttribute('width', mediaThumbnailWidth);
				}

				Img.setAttribute('style', 'padding-right:5px;');
				cell1.appendChild(Img);


				cell1.innerHTML = cell1.innerHTML+"<P>"+entry.description;


				var a = document.createElement('a');
				a.setAttribute('id', "link"+i);
				a.setAttribute('href', entry.link);
				a.setAttribute('class', 'standardb_red');
				a.setAttribute('target', '_blank');
				a.innerHTML = textMore;
				cell1.appendChild(a);

				
				var row = newsTable1Record.insertRow(-1);
				var cell1 = row.insertCell(0);				
				var date = document.createElement('div');
				date.className = 'textsmall_red';
				date.style.textAlign = 'right';
				date.innerHTML = formatDate(entry.date_ms/1000, lang);

				cell1.appendChild(date);
				var cell1=tableMainRow.insertCell(i);
//				cell1.setAttribute('class', 'text_red');
				cell1.appendChild(newsTable1Record);


				$("<img/>").attr("src", mediaThumbnailUrl).css('display', 'none').load(function() {
					images_loaded++;
					if (images_loaded >= totalEntries) {
						allImagesLoaded=1;
                                                if (source=="bbc") {
							updateBbcImages(totalEntries, 0);
						} else {
							adjustScrollDiv();
						}
					}
				});

				// ------------- End of Setting Data ---------------- //

			} // ------------- End of Cycle over feeds ---------------- //

}




function processBbcRussian(type, source, lang) {


	if (lang=="rus") errorM = 'Читение https://www.bbc.com/russian неудачно. <a href="javascript:location.reload();" class = "standardb_red">Обновите Страницу</a>.';
	if (lang=="eng") errorM = 'Reading https://www.bbc.com/russian failed. <a href="javascript:location.reload();" class = "standardb_red">Reload Page</a>.';
	if (lang=="lat") errorM = 'Lectio https://www.bbc.com/russian defecit. <a href="javascript:location.reload();" class = "standardb_red">Reload Page</a>.';



	result=[];
	result.feed=[];
	result.feed.meta=[];

	result.feed.meta.title="BBC News | Русская Служба";
	result.feed.meta.link="https://www.bbc.com/russian";

	result.feed.entries=[];

	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();               
	} 
	else {               
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");               
	}

	xmlhttp.onreadystatechange = function () {               
		if (xmlhttp.readyState == 4) {
			if (xmlhttp.status != 200) { 
				$("#loadingDivTitle").html(errorM);
				return;
			}
    
			data= xmlhttp.responseText;  

			shPos=data.indexOf("window.SIMORGH_DATA=");
			shPos2=data.indexOf("</script>", shPos+1);
			sh=data.substr(shPos+20, shPos2-shPos-20);
			shJson=JSON.parse(sh);
//console.log(shJson);

			newSectionHtml=document.getElementById('feed_section').innerHTML;
			newClusterHtml=document.getElementById('feed_cluster').innerHTML;

			items=[];
			cTop=0; cSpecial=0; cRussia=0; cWorld=0; cFeatures=0; cCluster=0; cDocumentaries=0; cPapers=0; cSection=0;
			for(var i = 0; i < shJson.pageData.content.groups.length; i++ ) {
				if (shJson.pageData.content.groups[i].title=="Top stories") {
					cTop=shJson.pageData.content.groups[i].items.length;
					if (type=="top") items=shJson.pageData.content.groups[i].items;
				} else if (shJson.pageData.content.groups[i].title=="Special reports 1") {
					cSpecial=shJson.pageData.content.groups[i].items.length;
					if (type=="special") items=shJson.pageData.content.groups[i].items;
				} else if (shJson.pageData.content.groups[i].title=="В России") {
					cRussia=shJson.pageData.content.groups[i].items.length;
					if (type=="russia") items=shJson.pageData.content.groups[i].items;
				} else if (shJson.pageData.content.groups[i].title=="В мире") {
					cWorld=shJson.pageData.content.groups[i].items.length;
					if (type=="world") items=shJson.pageData.content.groups[i].items;
				} else if (shJson.pageData.content.groups[i].title=="Не пропустите") {
					cFeatures=shJson.pageData.content.groups[i].items.length;
					if (type=="features") items=shJson.pageData.content.groups[i].items;
				} else if (shJson.pageData.content.groups[i].title=="Cluster 1") {
					cCluster=shJson.pageData.content.groups[i].items.length;
					if (type=="cluster") items=shJson.pageData.content.groups[i].items;
					newClusterHtml=shJson.pageData.content.groups[i].strapline.name;
				} else if (shJson.pageData.content.groups[i].title=="BBC Documentaries") {
					cDocumentaries=shJson.pageData.content.groups[i].items.length;
					if (type=="documentaries") items=shJson.pageData.content.groups[i].items;
				} else if (shJson.pageData.content.groups[i].title=="The papers") {
					cPapers=shJson.pageData.content.groups[i].items.length;
					if (type=="papers") items=shJson.pageData.content.groups[i].items;
				} else if (shJson.pageData.content.groups[i].title=="Section 1") {
					cSection=shJson.pageData.content.groups[i].items.length;
					if (type=="section") items=shJson.pageData.content.groups[i].items;
					newSectionHtml=shJson.pageData.content.groups[i].strapline.name;
				} else {
					if (shJson.pageData.content.groups[i].title!="Useful links" && shJson.pageData.content.groups[i].title!="Social media links") {
						console.log(shJson.pageData.content.groups[i].title);
					}
				}
			}

			showRecordsNum("top", cTop, lang);
			showRecordsNum("special", cSpecial, lang);
			showRecordsNum("russia", cRussia, lang);
			showRecordsNum("world", cWorld, lang);
			showRecordsNum("features", cFeatures, lang);
			showRecordsNum("cluster", cCluster, lang, newClusterHtml);
			showRecordsNum("documentaries", cDocumentaries, lang);
			showRecordsNum("papers", cPapers, lang);
			showRecordsNum("section", cSection, lang, newSectionHtml);


			for (var i=0; i<items.length; i++) {

				result.feed.entries[i]=[];

				// Link
				if (typeof items[i].locators !=="undefined") {
					link=items[i].locators.assetUri;
				} else {
					link=items[i].uri;
				}
				if (link.substr(0,21) == "https://www.bbc.co.uk" || link.substr(0,19) == "https://www.bbc.com") {
					// link already has header
				} else {
					link="https://www.bbc.com"+link;
				}
				result.feed.entries[i].link=link;

				// Title
				if (typeof items[i].headlines!=="undefined") {
					result.feed.entries[i].title=items[i].headlines.headline;
				} else {
					result.feed.entries[i].title=items[i].name;
				}

				// Descripttion
				result.feed.entries[i].description=items[i].summary;

				// pubDate
				result.feed.entries[i].date_ms=items[i].timestamp;

				result.feed.entries[i].comments=items[i].indexImage.altText;
				result.feed.entries[i].url=items[i].indexImage.href;
				result.feed.entries[i].width=items[i].indexImage.width;

			}
			processShowFeed(type, source, lang, result);

		}
	}
//https://cors-anywhere.herokuapp.com/
//https://secret-ocean-49799.herokuapp.com/
	xmlhttp.open("GET", 'https://secret-ocean-49799.herokuapp.com/https://www.bbc.com/russian', true);
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
	if (lang=="rus") cell1.innerHTML = "<b><div id='loadingDivTitle'>Читается Строка Новостей</div><div id='loadingDiv'>.</div></b>";
	if (lang=="eng") cell1.innerHTML = "<b><div id='loadingDivTitle'>Reading News Feed</div><div id='loadingDiv'>.</div></b>";
	if (lang=="lat") cell1.innerHTML = "<b><div id='loadingDivTitle'>Lectio Nuntium Acies</div><div id='loadingDiv'>.</div></b>";


	feedURL="";
	if (source == "lenta") feedURL="https://lenta.ru/rss/news";
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

	if (source == "bbcrussian") {
		processBbcRussian(type, source, lang);
	} else {
		feednami.load(feedURL,function(result){
			if(result.error){
				$("#loadingDivTitle").text(result.error);
				return;
			}
			processShowFeed(type, source, lang, result);
		});
	}
}


function checkImage (src, good, bad) {
    var img = new Image();
    img.onload = good; 
    img.onerror = bad;
    img. src = src;
}