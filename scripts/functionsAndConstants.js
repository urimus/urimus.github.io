function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function mouseOut(tabType, feedTypeL, col) {
    if (typeof col === 'undefined') col = "red"; 
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
		ch = str.charCodeAt(c);
		if(ch < 127)
		{
			re[j++] = ch & 0xFF;
			if (removeBomCheckSoFar(re)) return removeBom(str.substr(c+1));
		}
		else
		{
			st = [];    // clear stack
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
	// re - an array of bytes
	
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
		if (re[0]==43 && re[1]==47 && re[2]==118 && re[3]==56 && re[4]==45) return 1; // UTF-7 - 5
	}
	return 0;
}


function formatDate(date, lang) {

	// date can be:
	// undefined - Setting Date.now()
	// milliseconds - Unix Timestamp, Should be UTC timezone, other options should be developed additionally
	// string - standard date string

	if (typeof lang==="undefined") lang="eng";
	if (typeof date === 'undefined') date = Date.now().valueOf(); 

	// Time Zone Offset, is Local Computer time
	d = new Date();
	invertedOffset = -d.getTimezoneOffset();

	mydate = new Date(date);
	// Adding Offset
	mydate=new Date(mydate.getTime() + invertedOffset*60*1000);

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
		month = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн","Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"][mydate.getUTCMonth()];
		dayEnding="е";
		dayMonthSep=" ";
	}

	out = ("0"+mydate.getUTCDate()).slice(-2) + dayEnding + dayMonthSep + month + ', ' + mydate.getUTCFullYear() + ", " + ("0"+mydate.getUTCHours()).slice(-2) + ":" + ("0"+mydate.getUTCMinutes()).slice(-2) + ":" + ("0"+mydate.getUTCSeconds()).slice(-2) + " UTC";
	if (mydate.getTimezoneOffset() != 0) {
		if (invertedOffset>0) out = out + "+"+invertedOffset/60;
		if (invertedOffset<0) out = out + "-"+ (-invertedOffset/60);
/*
		if (invertedOffset>0) {out = out + "+"; positiveOffset=invertedOffset;}
		if (invertedOffset<0) {out = out + "-"; positiveOffset=-invertedOffset;}
		hourOffset=parseInt(positiveOffset/60);
		out = out + ("0"+hourOffset).slice(-2)+":";
		out = out + ("0"+parseInt(positiveOffset- hourOffset*60)).slice(-2);
*/
	}
	return out;
}

function adjustTextareaAndEncodings() {
	scrollDiv=document.getElementById('scrollDiv');
	encodingDiv=document.getElementById("encoding_div");
	if (scrollDiv.offsetParent === null || encodingDiv.offsetParent === null) return;
	$("#encoding_div" ).css("width", "600px");
// -------------- Automatic ScrollBar for Encodings Adjustment  Step 1------------- // - Adding Scroll Bar to Horizontal Scroll Div
	var hasHorizontalScrollbarInit = scrollDiv.scrollWidth > scrollDiv.clientWidth;
	if (!hasHorizontalScrollbarInit)  {
		hasHorizontalScrollbar=0;
		while (!hasHorizontalScrollbar) {
			$( "#encoding_div" ).css( "width", (parseInt($( "#encoding_div" ).css( "width" )) + 5) + "px");
			hasHorizontalScrollbar = scrollDiv.scrollWidth > scrollDiv.clientWidth;
		}
	}
// -------------- End of Automatic ScrollBar for Encodings Adjustment  Step 1 ------------- //
scrollBarWidth=scrollDiv.offsetHeight - scrollDiv.clientHeight;

// -------------- Automatic Text Area Height To Fit Screen  ------------- //
	var scrollDiv= document.getElementById('scrollDiv');
	var hasVerticalScrollbarInit = scrollDiv.scrollHeight > scrollDiv.clientHeight;
	if (hasVerticalScrollbarInit) {
		hasVerticalScrollbar=1;
		while (hasVerticalScrollbar) {
			$( "#textarea_area" ).css( "height", (parseInt($( "#textarea_area" ).css( "height" )) - 5) + "px");
			hasVerticalScrollbar = scrollDiv.scrollHeight > scrollDiv.clientHeight;
		}
		for(i=0; i<5;i++) {
			$( "#textarea_area" ).css( "height", (parseInt($( "#textarea_area" ).css( "height" )) + 1) + "px");
			hasVerticalScrollbar = scrollDiv.scrollHeight > scrollDiv.clientHeight;
			if (hasVerticalScrollbar) {$( "#textarea_area" ).css( "height", (parseInt($( "#textarea_area" ).css( "height" )) - 1) + "px"); break;}
		}
	} else {
		hasVerticalScrollbar=0;
		while (!hasVerticalScrollbar) {
			$( "#textarea_area" ).css( "height", (parseInt($( "#textarea_area" ).css( "height" )) + 5) + "px");
			hasVerticalScrollbar = scrollDiv.scrollHeight > scrollDiv.clientHeight;
		}
		for(i=0; i<5;i++) {
			$( "#textarea_area" ).css( "height", (parseInt($( "#textarea_area" ).css( "height" )) - 1) + "px");
			hasVerticalScrollbar = scrollDiv.scrollHeight > scrollDiv.clientHeight;
			if (!hasVerticalScrollbar) {break;}
		}
	}
// -------------- End of Automatic Text Area Height To Fit Screen  ------------- //

// -------------- Automatic ScrollBar for Encodings Adjustment  Step 2------------- //  Again Full version
	var hasHorizontalScrollbarInit = scrollDiv.scrollWidth > scrollDiv.clientWidth;
	if (hasHorizontalScrollbarInit) {
		hasHorizontalScrollbar=1;
		while (hasHorizontalScrollbar) {
			$( "#encoding_div" ).css( "width", (parseInt($( "#encoding_div" ).css( "width" )) - 5) + "px");
			hasHorizontalScrollbar = scrollDiv.scrollWidth > scrollDiv.clientWidth;
		}
		for(i=0; i<5;i++) {
			$( "#encoding_div" ).css( "width", (parseInt($( "#encoding_div" ).css( "width" )) + 1) + "px");
			hasHorizontalScrollbar = scrollDiv.scrollWidth > scrollDiv.clientWidth;
			if (hasHorizontalScrollbar) {$( "#encoding_div" ).css( "width", (parseInt($( "#encoding_div" ).css( "width" )) - 1) + "px"); break;}
		}
	} else {
		hasHorizontalScrollbar=0;
		while (!hasHorizontalScrollbar) {
			$( "#encoding_div" ).css( "width", (parseInt($( "#encoding_div" ).css( "width" )) + 5) + "px");
			hasHorizontalScrollbar = scrollDiv.scrollWidth > scrollDiv.clientWidth;
		}
		for(i=0; i<5;i++) {
			$( "#encoding_div" ).css( "width", (parseInt($( "#encoding_div" ).css( "width" )) - 1) + "px");
			hasHorizontalScrollbar = scrollDiv.scrollWidth > scrollDiv.clientWidth;
			if (!hasHorizontalScrollbar) {break;}
		}
	}
// -------------- End of Automatic ScrollBar for Encodings Adjustment  Step 2 ------------- //

// -------------- Manual ScrollBar for TextArea Height Adjustment ------------- //
$( "#textarea_area" ).css( "height", (parseInt($( "#textarea_area" ).css( "height" )) + scrollBarWidth) + "px");
// -------------- End of Manual ScrollBar for TextArea Height Adjustment ------------- //

	// set correct scoll position too
	// selEncodingPixelPosInEncodings - pixels from left to sel. encoding
	// encodingDiv.scrollWidth - total pixels in encodings
	// encodingDiv.clientWidth - adjusted encoding div width
	encodingDiv.scrollLeft = selEncodingPixelPosInEncodings - encodingDiv.clientWidth/2;
}



function formatBytes(bytes) {
	var units = ['B', 'KB', 'MB', 'GB', 'TB'];
	var i;
	for (i = 0; bytes >= 1024 && i < 4; i++) {
		bytes /= 1000;
	}
 	return bytes.toFixed(2) +" "+ units[i];
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

function showErrorImage(lang) {

	var table = document.getElementById("imagetable");
	while(table.childNodes.length>0){table.removeChild(table.lastChild);}

	if (lang=="eng") imageDesc="Just Image";
	if (lang=="rus") imageDesc="Просто Картинка";
	if (lang=="lat") imageDesc="Sicut Imago";

	var tableRow = table.insertRow(-1);
	var cell1=tableRow.insertCell(0);
	var ImgE=document.createElement("img");
	ImgE.setAttribute('class', "text_blue");
	ImgE.setAttribute('src', "images/icons/error/no_image.jpg");
	ImgE.setAttribute('alt', imageDesc);
	ImgE.setAttribute('title', imageDesc);
	ImgE.setAttribute('width', '100%');
	ImgE.onload  = function () { 
		scrollDivHeight=calcScrollDivHeightMax();
		document.getElementById("scrollDiv").setAttribute("style", "height:"+scrollDivHeight+"px; overflow:auto;");
		adjustScrollDiv();
	}
	cell1.appendChild(ImgE);
}



function showBlob(blobLink, i, item, lang){


	if (lang=="rus") {
		textImage="Картинка";
		textError = "Загрузка Картинки "+"#"+(i+1)+" не Удалась. <a href='javascript:location.reload();' class = 'standardb_blue'>Обновите Страницу</a>.";
	}
	if (lang=="eng") {
		textImage="Image";
		textError = "Image "+"#"+(i+1)+" Load Failed. <a href='javascript:location.reload();' class = 'standardb_blue'>Reload Page</a>.";
	}
	if (lang=="lat") {
		textImage="Image";
		textError = "Imago "+"#"+(i+1)+" Onus Defecit. <a href='javascript:location.reload();' class = 'standardb_blue'>Reload Page</a>.";
	}

	var Img=document.createElement("img");
	Img.src = blobLink;
	Img.setAttribute('class', "text_blue");
	Img.setAttribute('title', item.title);
	Img.setAttribute('alt', item.title);
	Img.setAttribute('width', '100%');
	Img.onerror  = function () { 
		document.getElementById("loadingDivTitle").innerHTML = textError;
		scrollDivHeight=calcScrollDivHeightMax();
		document.getElementById("scrollDiv").setAttribute("style", "height:"+scrollDivHeight+"px; overflow:auto;");
		adjustScrollDiv();
	}
	Img.onload  = function () { 

		var table = document.getElementById("imagetable");
		while(table.childNodes.length>0){table.removeChild(table.lastChild);}

		var tableRow = table.insertRow(-1);
		var cellImg=tableRow.insertCell(0);
		cellImg.appendChild(Img);

		var tableRow = table.insertRow(-1);
		var cell1=tableRow.insertCell(0);

		if (item.summary != null) summary_words=item.summary.split(" ");
		wordsCount=0;
		currentLineTop=0;

		linesToShow=4;
		linesCount=1;

		var Div = document.createElement('div');
		Div.setAttribute('class', "text_blue");

		var imageA = document.createElement('a');
		imageA.setAttribute('href', item.link);
		imageA.setAttribute('class', 'standardb_blue');
		imageA.setAttribute('target', '_blank');
		imageA.innerText = textImage;
		Div.appendChild(imageA);
		Div.innerHTML=Div.innerHTML+"&nbsp;#"+(i+1)+".";
		if (item.summary != null) {

			var summarySpan = document.createElement('span');
			summarySpan.setAttribute('class', "text_blue");
			summarySpan.setAttribute('id', "summary_span");
			summarySpan.innerHTML="&nbsp;";
			Div.appendChild(summarySpan);

			var extensionA = document.createElement('a');
			extensionA.setAttribute('href', "javascript:void(0);");
			extensionA.setAttribute('class', 'standardb_blue');
			extensionA.onclick  = function () { 
				// ▼- &#9660;   ▲- &#9650;
				if (this.innerHTML=="[▼]") { // expand
				summarySpan.innerHTML="&nbsp;"+item.summary;
					this.innerHTML="[&#9650;]";
				} else if (this.innerHTML=="[▲]") { // collapse
					summarySpan.innerHTML="&nbsp;"+formatSummary(summary_words, wordsCount);
					this.innerHTML="[&#9660;]";
				}
				scrollDivHeight=calcScrollDivHeightMax();
				document.getElementById("scrollDiv").setAttribute("style", "height:"+scrollDivHeight+"px; overflow:auto;");
				adjustScrollDiv();
			}
			extensionA.innerHTML = "[&#9660;]";

			var Pointer = document.createElement('a');
			Div.appendChild(Pointer);
			cell1.appendChild(Div);

			// show linesToShow lines of summary
			currentLineTop=Pointer.offsetTop;
			for (k=0; k<summary_words.length; k++) {
				summarySpan.innerHTML="&nbsp;"+formatSummary(summary_words, k+1);
				if (Pointer.offsetTop!=currentLineTop) {
					if (linesCount==linesToShow) {  // new pointer should be set
						summarySpan.innerHTML="";
						Div.removeChild(Pointer);
						Div.appendChild(extensionA);
						wordsCount=0;
						linesCount=1;

						// 2nd time with normal ponter
						currentLineTop=extensionA.offsetTop;
						for (k2=0; k2<summary_words.length; k2++) {
							wordsCount++;
							summarySpan.innerHTML="&nbsp;"+formatSummary(summary_words, wordsCount);
							if (extensionA.offsetTop!=currentLineTop) {
								if (linesCount==linesToShow) {  // remove last word
									wordsCount--;
									summarySpan.innerHTML="&nbsp;"+formatSummary(summary_words, wordsCount);
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
				Div.removeChild(Pointer);
				summarySpan.innerHTML="&nbsp;"+item.summary;
			}
		} else {
			cell1.appendChild(Div);
		}


		var tableRow = table.insertRow(-1);
		var cell1=tableRow.insertCell(0);
		var Div = document.createElement('div');
		Div.setAttribute('class', "textsmall_blue");
		Div.setAttribute('align', "right");
		Div.setAttribute("style", "padding-left:10px; padding-right:10px;");
		Div.innerHTML=formatDate(item.date_ms, lang);
		cell1.appendChild(Div);

		scrollDivHeight=calcScrollDivHeightMax();
		document.getElementById("scrollDiv").setAttribute("style", "height:"+scrollDivHeight+"px; overflow:auto;");
		adjustScrollDiv();

		URL.revokeObjectURL(blobLink);
	}

}


// image loading progress bar and contents
function loadImage(i, item, lang, textLoadingImage, textSkip, textSettingImage){

	if (window.XMLHttpRequest) {
		xmlHTTP = new XMLHttpRequest();               
	}  else {               
		xmlHTTP = new ActiveXObject("Microsoft.XMLHTTP");               
	}

	loadingDivTitle=document.getElementById("loadingDivTitle");
	var a = document.createElement('a');
	a.setAttribute('href', "javascript:void(0);");
	a.setAttribute('class', 'standardb_blue');
	a.innerText = textSkip;
	a.onclick = function () {
		xmlHTTP.timeout=0;
		showErrorImage(lang);
		return;
	}
	loadingDivTitle.innerHTML = textLoadingImage+" #"+(i+1)+" ("+formatBytes(item.enclosures[0].length)+"). ";
	loadingDivTitle.appendChild(a);


	xmlHTTP.onload = function(e) {

		loadingDivTitle=document.getElementById("loadingDivTitle");
		loadingDivTitle.innerHTML = textSettingImage+" #"+(i+1)+". ";
		loadingDivTitle.appendChild(a);

		var blob = new Blob([this.response]);

		// resizing blob to 450 px
		createImageBitmap(blob).then(
			function(imageBitmap) {
				console.log(imageBitmap);
				bmpWidth=imageBitmap.width;
				bmpHeight=imageBitmap.height;
				console.log(bmpWidth);
				console.log(bmpHeight);
				ratio = 450.0 / bmpWidth;
				var canvas = document.createElement("canvas");
				canvas.width = 450;
				canvas.height = bmpHeight*ratio;
				var ctx = canvas.getContext("2d");
				ctx.drawImage(imageBitmap, 0, 0, canvas.width, canvas.height);
				canvas.toBlob(function (blob) {
					localforage.setItem(item.enclosures[0].url, blob);
					blobLink= window.URL.createObjectURL(blob);
					showBlob(blobLink, i, item, lang);
				}, 'image/jpeg');
			},
			function(error) {
				console.log(error);
			},
		);
	};
	xmlHTTP.onprogress = function(e) {
		document.getElementById("loadingDivProgress").innerHTML = formatBytes(e.loaded);
	};
	xmlHTTP.onloadstart = function() {
		document.getElementById("loadingDivProgress").innerHTML = "0 B";
	};
	xmlHTTP.onerror = function() {
		document.getElementById("loadingDivTitle").innerHTML = textError;
	};
	url2="https://api.codetabs.com/v1/proxy/?quest="+item.enclosures[0].url;
//	if (corsProxyVer==2) url2="https://api.allorigins.win/raw?url="+item.enclosures[0].url;
	xmlHTTP.open('GET', url2, true);
	xmlHTTP.responseType = 'arraybuffer';
	xmlHTTP.send();
}


function updateAboutMeImage(lang, random) {
	if (typeof random=="undefined") random=0;

	processPageResize(1);

	localforage.config({
		name: 'urepinski_homepage',
		storeName: "nasa_image"
	});

	if (lang=="rus") {
		textLoadingImage="Читается Картинка";
		textLoadingFeed="Читается Строка Новостей";
		textSettingImage="Устанавливается Картинка";
		textSkip="Отменить";
	}
	if (lang=="eng") {
		textLoadingImage="Reading Image";
		textLoadingFeed="Reading News Feed";
		textSettingImage="Setting Image";
		textSkip="Skip";
	}
	if (lang=="lat") {
		textLoadingImage="Lectio Imagibus";
		textLoadingFeed="Lectio Nuntium Acies";
		textSettingImage="Occasum Imagibus";
		textSkip="Saltus";
	}

	var table = document.getElementById("imagetable");
	while(table.childNodes.length>0){table.removeChild(table.lastChild);}
	var row = table.insertRow(-1);
	var cellLoading = row.insertCell(0);
	cellLoading.className = 'text_blue';
	cellLoading.setAttribute('style', 'text-align:center; padding-top:10px;');
	cellLoading.innerHTML = "<b><div id='loadingDivTitle'></div><div id='loadingDivProgress'></div><div id='loadingDiv'>.</div></b>";

	loadingDivTitle=document.getElementById("loadingDivTitle");
	var a = document.createElement('a');
	a.setAttribute('href', "javascript:void(0);");
	a.setAttribute('class', 'standardb_blue');
	a.innerText = textSkip;
	a.onclick = function () {
		showErrorImage(lang);
		return;
	}
	loadingDivTitle.innerHTML = textLoadingFeed+". ";
	loadingDivTitle.appendChild(a);

	feedURL="https://www.nasa.gov/feeds/iotd-feed/";
	feednami.load(feedURL, function(result){

		if(result.error){
			showErrorImage(lang);
			return;
		}
		var items=result.feed.entries;
		var totalEntries=items.length;

		i=0;
		if (random!=0) i=Math.floor(Math.random()*totalEntries);

		loadingDivTitle=document.getElementById("loadingDivTitle");
		loadingDivTitle.innerHTML = textLoadingImage+" #"+(i+1)+". ";
		loadingDivTitle.appendChild(a);

		localforage.getItem(items[i].enclosures[0].url, function (err, value) {
			if (err !== null) {
				showErrorImage(lang);
				return;
			}
			if (value !== null) {
				blobLink= window.URL.createObjectURL(value);
				showBlob(blobLink, i, items[i], lang);
			} else {
				// new value must be stored
				loadImage(i, items[i], lang, textLoadingImage, textSkip, textSettingImage);
			}

		});


		// remove unusedRecords
		localforage.keys(function (err, keys) {
			var objToRemove=[];
			for (j=0; j<keys.length;  j++) {			
				recordExists=0;
				for (j2=0; j2<totalEntries;  j2++) {			
					if (items[j2].enclosures[0].url == keys[j]) {
						recordExists=1;
						break;
					}
				}
				if (recordExists==0) objToRemove.push(keys[j]);
			}
			for (j=0;j<objToRemove.length;j++) {	
				localforage.removeItem(objToRemove[j], function (err) {});
			}
		});

	});
}



