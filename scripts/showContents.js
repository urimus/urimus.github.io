function contentsLoad(lang) {

	var typeL="";
	var sortbyL="";
	var type="";
	var sortby="";
	var toRedirect=0;
	
	typeL=getParameterByName('type'); 
	sortbyL=getParameterByName('sortby');

	if (typeL && typeL!="") {
		if ( (lang=="eng" || lang=="rus") && (typeL=="aboutme" || typeL=="aboutwork" || typeL=="aboutphd" || typeL=="links" || typeL=="howto" || typeL=="music" || typeL=="movies" || typeL=="series" || typeL=="games" || typeL=="books" || typeL=="photos" || typeL=="amv" || typeL=="radio" || typeL=="stuff" || typeL=="anecdotes" || typeL=="heffalump" || typeL=="relaxation" || typeL=="software" || typeL=="satanism" || typeL=="wicca" || typeL=="falsifiability" || typeL=="psychology" || typeL=="countries" || typeL=="totalitarianism" || typeL=="personalities" || typeL=="news") || (lang=="lat" && (typeL=="aboutme" || typeL=="aboutwork" || typeL=="aboutphd" || typeL=="links" || typeL=="photos" || typeL=="amv" || typeL=="radio" || typeL=="stuff" || typeL=="news"))) {
			type=typeL;
		}
	} else {
		type="aboutme";
		toRedirect=1;
	}

	if (sortbyL=="" || sortbyL==null) {
		sortby="";
		toRedirect=1;
	} else {
		if (sortbyL=="name" || sortbyL=="date") sortby=sortbyL;
		if (sortbyL=="flag") {
			if ((lang=="eng" || lang=="rus") && (typeL=="music" || typeL=="movies" || typeL=="series" || typeL=="books")) {
				sortby=sortbyL;
			} else {
				sortby="name";
				toRedirect=1;
			}
		}
	}

	if (type=="") {
		if (lang=="rus") alert("Тип (Type) '"+typeL+"' Не Найден! Перенаправление....");
		if (lang=="eng") alert("Type '"+typeL+"' Not Found! Redirecting....");
		if (lang=="lat") alert("Genus (Type) '"+typeL+"' Non Inventum! Redirecting....");
		if (lang=="ger") alert("Typ (Type) '"+typeL+"' Nicht Gefunden! Umleiten....");
		type="aboutme";
		toRedirect=1;
	}


	if (sortby=="") {
		if (lang=="rus") alert("Тип Сортировки (Sortby) '"+sortbyL+"' Не Найден! Перенаправление....");
		if (lang=="eng") alert("Sort By Type '"+sortbyL+"' Not Found! Redirecting....");
		if (lang=="lat") alert("Ordino Genus (Sortby) '"+sortbyL+"' Non Inventum! Redirecting....");
		if (lang=="ger") alert("Sortiere Typ (Sortby) '"+sortbyL+"' Nicht Gefunden! Umleiten....");
		sortby="name";
		toRedirect=1;
	}
	if (toRedirect==1) window.location.href='index_'+lang+'.html?type='+type+'&sortby='+ sortby;
	
	showContents(type, sortby, lang);
	processPageResize(1);
}



// Flag
function mouseOutSortByName(sortbyTypeL) {
	if (sortbyTypeL=="name") {
		document.getElementById("sortby_name").className = "flag_selected";
	} else {
		document.getElementById("sortby_name").className = "flag_not_selected";
	}
}

// Flag
function mouseOutSortByDate(sortbyTypeL) {
	if (sortbyTypeL=="date") {
		document.getElementById("sortby_date").className = "flag_selected";
	} else {
		document.getElementById("sortby_date").className = "flag_not_selected";
	}
}

// Flag
function mouseOutSortByFlag(sortbyTypeL) {
	if (sortbyTypeL=="flag") {
		document.getElementById("sortby_flag").className = "flag_selected";
	} else {
		document.getElementById("sortby_flag").className = "flag_not_selected";
	}
}



function refreshContentsTabs(contentsTypeL) {

	contentsType=getParameterByName('type');
	if (contentsType=="aboutme" || contentsTypeL=="aboutme") mouseOut('aboutme', contentsTypeL, 'blue');
	if (contentsType=="aboutwork" || contentsTypeL=="aboutwork") mouseOut('aboutwork', contentsTypeL, 'blue');
	if (contentsType=="aboutphd" || contentsTypeL=="aboutphd") mouseOut('aboutphd', contentsTypeL, 'blue');
	if (contentsType=="links" || contentsTypeL=="links") mouseOut('links', contentsTypeL, 'blue');
	if (contentsType=="howto" || contentsTypeL=="howto") mouseOut('howto', contentsTypeL, 'blue');
	if (contentsType=="music" || contentsTypeL=="music") mouseOut('music', contentsTypeL, 'black');
	if (contentsType=="movies" || contentsTypeL=="movies") mouseOut('movies', contentsTypeL, 'black');
	if (contentsType=="series" || contentsTypeL=="series") mouseOut('series', contentsTypeL, 'black');
	if (contentsType=="games" || contentsTypeL=="games") mouseOut('games', contentsTypeL, 'black');
	if (contentsType=="books" || contentsTypeL=="books") mouseOut('books', contentsTypeL, 'red');
	if (contentsType=="photos" || contentsTypeL=="photos") mouseOut('photos', contentsTypeL, 'red');
	if (contentsType=="amv" || contentsTypeL=="amv") mouseOut('amv', contentsTypeL, 'black');
	if (contentsType=="radio" || contentsTypeL=="radio") mouseOut('radio', contentsTypeL, 'black');
	if (contentsType=="stuff" || contentsTypeL=="stuff") mouseOut('stuff', contentsTypeL, 'black');
	if (contentsType=="anecdotes" || contentsTypeL=="anecdotes") mouseOut('anecdotes', contentsTypeL, 'red');
	if (contentsType=="heffalump" || contentsTypeL=="heffalump") mouseOut('heffalump', contentsTypeL, 'red');
	if (contentsType=="relaxation" || contentsTypeL=="relaxation") mouseOut('relaxation', contentsTypeL, 'white');
	if (contentsType=="software" || contentsTypeL=="software") mouseOut('software', contentsTypeL, 'white');
	if (contentsType=="satanism" || contentsTypeL=="satanism") mouseOut('satanism', contentsTypeL, 'green');
	if (contentsType=="wicca" || contentsTypeL=="wicca") mouseOut('wicca', contentsTypeL, 'green');
	if (contentsType=="falsifiability" || contentsTypeL=="falsifiability") mouseOut('falsifiability', contentsTypeL, 'green');
	if (contentsType=="psychology" || contentsTypeL=="psychology") mouseOut('psychology', contentsTypeL, 'green');
	if (contentsType=="countries" || contentsTypeL=="countries") mouseOut('countries', contentsTypeL, 'green');
	if (contentsType=="totalitarianism" || contentsTypeL=="totalitarianism") mouseOut('totalitarianism', contentsTypeL, 'green');
	if (contentsType=="personalities" || contentsTypeL=="personalities") mouseOut('personalities', contentsTypeL, 'green');
	if (contentsType=="news" || contentsTypeL=="news") mouseOut('news', contentsTypeL, 'red');

}

function refreshSortByTabs(typeL, sortbyTypeL, lang) {
	sortbyType=getParameterByName('sortby');
	if (sortbyType=="name" || sortbyTypeL=="name") mouseOutSortByName(sortbyTypeL);
	if (sortbyType=="date" || sortbyTypeL=="date") mouseOutSortByDate(sortbyTypeL);

	if (lang=="eng" || lang=="rus") {
		if (typeL=="music" || typeL=="movies" || typeL=="series" || typeL=="books") {
			if (sortbyType=="flag" || sortbyTypeL=="flag") mouseOutSortByFlag(sortbyTypeL);
		} else {
			document.getElementById("sortby_flag").onmouseover="";
			document.getElementById("sortby_flag").onmouseout="";
			document.getElementById("sortby_flag").onclick="";
			document.getElementById("sortby_flag").onmouseover="";
			document.getElementById("sortby_flag_img").src="scripts/contents/icons/sortby/sortby_flag3.png";
		}
	}
}



function sortByDate(fileContentsL, lang, textColor){       
	
	var myDates = [];
	
	for (var i = 1; i < fileContentsL.length; i++) {
		str=fileContentsL[i];
	    // get date value
		var addedpos = str.indexOf("data-added=");
		if (addedpos == -1) { myDates.push(0); continue;} // no added set, automatically to the end of sorted array

		var q1 = str.indexOf("\"", addedpos+1);
		var q2 = str.indexOf("\"", q1+1);

		var textDate=str.substring(q1+1, q2);
		var textDay=textDate.substring(0, 2);
		if (lang=="eng" || lang=="lat") var textMonth=textDate.substring(8, 11);
		if (lang=="rus") var textMonth=textDate.substring(4, 7);
		if (lang=="eng" || lang=="lat") var textYear=textDate.substring(13, 17);
		if (lang=="rus") var textYear=textDate.substring(9, 13);

		if (lang=="eng" || lang=="lat") var textAllMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		if (lang=="rus") var textAllMonths = ["Янв", "Фев", "Мар", "Апр", "Мая", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];

		for (var j = 0; j < textAllMonths.length; j++) {
			if (textAllMonths[j]==textMonth) {
				textMonth=j;
				break;
			}
		}

		var mydate = new Date(textYear, textMonth, textDay);
		myDates.push(mydate);
	}

	// sort descending myDates and fileContents
	var len = myDates.length;
	for (var i = len-1; i>=0; i--){
		for(var j = 1; j<=i; j++){

			if(myDates[j-1]<myDates[j]){
				var temp = myDates[j-1];
				myDates[j-1] = myDates[j];
				myDates[j] = temp;
				// +1
				var temp = fileContentsL[j];
				fileContentsL[j] = fileContentsL[j+1];
				fileContentsL[j+1] = temp;
			}
		}
	}
   
	// make records newCol if added on the same day
	newCol="red";
	for (var i = len-2; i>=0; i--) {
		if (myDates[i+1]=="0") continue;
		if(myDates[i+1].valueOf()==myDates[i].valueOf()) {

			hasbull=0;
			for (var j = i; j>=0; j--) {
				if(myDates[j+1].valueOf()!=myDates[j].valueOf()) break;
				if (fileContentsL[j+1].indexOf("&#9679;")!=-1) hasbull=1;
				if (fileContentsL[j+1].indexOf("&#9900;")!=-1) hasbull=1;
				if (fileContentsL[j+2].indexOf("&#9679;")!=-1) hasbull=1;
				if (fileContentsL[j+2].indexOf("&#9900;")!=-1) hasbull=1;
			}
			if (hasbull) {i=j; continue;}

			hrefPos=fileContentsL[i+1].indexOf("a href");
			clsPos=fileContentsL[i+1].indexOf(">", hrefPos+1);
			cls2Pos=fileContentsL[i+1].indexOf("<", clsPos+1);
			titlei1=fileContentsL[i+1].substring(clsPos+1, cls2Pos);

			hrefPos=fileContentsL[i+2].indexOf("a href");
			clsPos=fileContentsL[i+2].indexOf(">", hrefPos+1);
			cls2Pos=fileContentsL[i+2].indexOf("<", clsPos+1);
			titlei2=fileContentsL[i+2].substring(clsPos+1, cls2Pos);

			if (titlei1==titlei2) continue;

			fileContentsL[i+1]="<font color='"+newCol+"'>"+fileContentsL[i+1]+"</font>";
			fileContentsL[i+2]="<font color='"+newCol+"'>"+fileContentsL[i+2]+"</font>";

		}
	}

	// add year separator
	var len = myDates.length;
	for (var i = len-2; i>=0; i--) {
		if (myDates[i+1]=="0") continue;
		if(myDates[i+1].getFullYear()!=myDates[i].getFullYear()) {
			textYearHTML="<table>";
			textYearHTML+="<tr>";
			textYearHTML+="<td width='50%'><table width='100%' cellpadding='0'><tr><td style='border-bottom: #ff8a00 1px solid;'></td></tr></table></td>";
			textYearHTML+="<td><div class='nimetus2_"+textColor+"'>"+myDates[i+1].getFullYear()+"</div></td>";
			textYearHTML+="<td width='100%'><table width='100%' cellpadding='0'><tr><td style='border-bottom: #ff8a00 1px solid;'></td></tr></table></td>";
			textYearHTML+="</tr>";
			textYearHTML+="</table>";
			fileContentsL.splice(i+2, 0, textYearHTML);
		}
	}

	if (len>1) {
		textYearHTML="<table>";
		textYearHTML+="<tr>";
		textYearHTML+="<td width='50%'><table width='100%' cellpadding='0'><tr><td style='border-bottom: #ff8a00 1px solid;'></td></tr></table></td>";
		textYearHTML+="<td><div class='nimetus2_"+textColor+"'>"+myDates[0].getFullYear()+"</div></td>";
		textYearHTML+="<td width='100%'><table width='100%' cellpadding='0'><tr><td style='border-bottom: #ff8a00 1px solid;'></td></tr></table></td>";
		textYearHTML+="</tr>";
		textYearHTML+="</table>";
		fileContentsL.splice(1, 0, textYearHTML);
	}
	return fileContentsL;
}


function sortByFlag(fileContentsL, lang){       
	
	var myFlags = [];
	var myTextFlags = [];
	fileContentsL2 = [];
	fileContentsL2.push(fileContentsL[0]); 

	zeroContents = [];

	for (var i = 1; i < fileContentsL.length; i++) {
		str=fileContentsL[i];
	    // get date value
		var flagpos = str.indexOf("data-country=");
		if (flagpos == -1) { zeroContents.push(str); continue;} // no country set, automatically to the end of sorted array

		var q1 = str.indexOf("\"", flagpos+1);
		var q2 = str.indexOf("\"", q1+1);

		textFlag=str.substring(q1+1, q2);


		textFlags=textFlag.split(";");
		if (textFlags.length>1) {
			for (var j = 0; j < textFlags.length; j++) {
				myFlags.push(getFlagTitle(textFlags[j], lang));
				myTextFlags.push(textFlags[j]);
				fileContentsL2.push(str);
			}
		} else {
			myFlags.push(getFlagTitle(textFlag, lang));
			myTextFlags.push(textFlag);
			fileContentsL2.push(str);
		}
	}
	

	// sort descending myDates and fileContents
	var len = myFlags.length;
	for (var i = len-1; i>=0; i--){
		for(var j = 1; j<=i; j++){
			if(myFlags[j-1]>myFlags[j]){
				var temp = myFlags[j-1];
				myFlags[j-1] = myFlags[j];
				myFlags[j] = temp;

				var temp = myTextFlags[j-1];
				myTextFlags[j-1] = myTextFlags[j];
				myTextFlags[j] = temp;
				// +1
				var temp = fileContentsL2[j];
				fileContentsL2[j] = fileContentsL2[j+1];
				fileContentsL2[j+1] = temp;
			}
		}
	}


	// add year separator
	var len = myFlags.length;
	for (var i = len-2; i>=0; i--) {
		if (myFlags[i+1]=="") continue;
		if(myFlags[i+1]!=myFlags[i]) {
			textFlagHTML="<table>";
			textFlagHTML+="<tr>";
			textFlagHTML+="<td width='50%'><table width='100%' cellpadding='0'><tr><td style='border-bottom: #ff8a00 1px solid;'></td></tr></table></td>";
			textFlagHTML+="<td><div class='nimetus2_"+textColor+"'>";
			textFlagHTML+='<img src="lang/all/'+myTextFlags[i+1]+'.gif" width="22" height="14"  title="'+myFlags[i+1]+'"style="vertical-align:middle;"/>' 
			textFlagHTML+="</div></td>";
			textFlagHTML+="<td width='100%'><table width='100%' cellpadding='0'><tr><td style='border-bottom: #ff8a00 1px solid;'></td></tr></table></td>";
			textFlagHTML+="</tr>";
			textFlagHTML+="</table>";
			fileContentsL2.splice(i+2, 0, textFlagHTML);
		}
	}

	if (len>1) {
		if (myFlags[0]!="") {
			textFlagHTML="<table>";
			textFlagHTML+="<tr>";
			textFlagHTML+="<td width='50%'><table width='100%' cellpadding='0'><tr><td style='border-bottom: #ff8a00 1px solid;'></td></tr></table></td>";
			textFlagHTML+="<td><div class='nimetus2_"+textColor+"'>";
			textFlagHTML+='<img src="lang/all/'+myTextFlags[0]+'.gif" width="22" height="14"  title="'+myFlags[0]+'"style="vertical-align:middle;"/>' 
			textFlagHTML+="</div></td>";
			textFlagHTML+="<td width='100%'><table width='100%' cellpadding='0'><tr><td style='border-bottom: #ff8a00 1px solid;'></td></tr></table></td>";
			textFlagHTML+="</tr>";
			textFlagHTML+="</table>";
			fileContentsL2.splice(1, 0, textFlagHTML);
		}
	}

	// if no coutry set then should be last
	textFlagHTML="<table width='100%'>";
	textFlagHTML+="<tr width='100%'>";
	textFlagHTML+="<td width='100%'><table width='100%' cellpadding='0'><tr><td style='border-bottom: #ff8a00 1px solid;'></td></tr></table></td>";
	textFlagHTML+="</tr>";
	textFlagHTML+="</table>";
	fileContentsL2.push(textFlagHTML);
	for (var i = 0; i < zeroContents.length; i++) {
		fileContentsL2.push(zeroContents[i]);
	}

	return fileContentsL2;
	
}


function showContents(type, sortby, lang) {

	refreshContentsTabs(type);
	refreshSortByTabs(type, sortby, lang);

	if (lang=="rus") {
		textLoadingImage="Читается Картинка";
		textSkip="Отменить";
	}
	if (lang=="eng") {
		textLoadingImage="Reading Image";
		textSkip="Skip";
	}
	if (lang=="lat") {
		textLoadingImage="Lectio Imagibus";
		textSkip="Saltus";
	}

	skipImageLoading=0;

// ------------- used for small text and sort by date, flag  ----------- //
	var textColor="blue";
	if (type=="aboutme" || type=="aboutwork" || type=="aboutphd" || type=="links" || type=="howto" ) textColor="blue";
	if (type=="music" || type=="movies" || type=="series" || type=="games" || type=="amv" || type=="radio" || type=="stuff") textColor="black_blue";
	if (type=="books" || type=="photos" || type=="anecdotes" || type=="heffalump" || type=="news") textColor="red_blue";
	if (type=="relaxation" || type=="software") textColor="white_blue";
	if (type=="satanism" || type=="wicca" || type=="falsifiability" || type=="psychology" || type=="countries" || type=="totalitarianism" || type=="personalities") textColor="green_blue";
// ------------- End of used for ----------- //

	var table = document.getElementById("contentstable");
	while(table.childNodes.length>0){table.removeChild(table.lastChild);}

	var row = table.insertRow(-1);
	var cell1 = row.insertCell(0);
	cell1.className = 'text_'+textColor;
	cell1.style.textAlign = 'center';

	cell1.innerHTML = "<b><div id='loadingDivTitle'>"+textLoadingImage+". "+"</div><div id='loadingDiv'>.</div></b>";


	loadingDivTitle=document.getElementById("loadingDivTitle");
	var a = document.createElement('a');
	a.setAttribute('href', "javascript:void(0);");
	a.setAttribute('class', 'standardb_'+textColor.split("_")[0]);
	a.innerText = textSkip;
	a.onclick = function () {
		skipImageLoading=1;
		showContents2(type, sortby, lang, textColor, null);
		return;
	}
	loadingDivTitle.appendChild(a);

// ------------- Loading Feed Image ----------- //

	feedURL="https://apod.com/feed.rss";
	feednami.load(feedURL, function(result){
		if (skipImageLoading==1) return;
		if(result.error){
			showContents2(type, sortby, lang, textColor, null);
			return;
		}

		showContents2(type, sortby, lang, textColor, result.feed.entries[0]);

	});

// ------------- End of Loading Feed Image ----------- //

}



function showContents2(type, sortby, lang, textColor, entry) {

	if (entry!=null) {
		feedMediaUrl=entry["enclosures"][0].url;
		feedMediaWidth=450;
		feedMediaTitle=entry.title;

		feedSummary=entry["rss:description"]["#"]+".";
		feedLink=entry.link;
	}

	var dataFileName="scripts/contents/" + type +"_" + lang +".txt";



	var xmlhttp;
	var lines;

	var table = document.getElementById("contentstable");
	while(table.childNodes.length>0){table.removeChild(table.lastChild);}

	var row = table.insertRow(-1);
	var cell1 = row.insertCell(0);
	cell1.className = 'text_'+textColor;
	cell1.style.textAlign = 'center';
	if (lang=="rus") cell1.innerHTML = "<b><div id='loadingDivTitle'>Читается Содержание</div><div id='loadingDiv'>.</div></b>";
	if (lang=="eng") cell1.innerHTML = "<b><div id='loadingDivTitle'>Reading Contents</div><div id='loadingDiv'>.</div></b>";
	if (lang=="lat") cell1.innerHTML = "<b><div id='loadingDivTitle'>Lectio Illa</div><div id='loadingDiv'>.</div></b>";

	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();               
	} else {               
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");               
	}

	xmlhttp.onreadystatechange = function () {               
		if (xmlhttp.readyState == 4) {                   

			 lines = xmlhttp.responseText;    //*here we get all lines from text file*
			 var fileContents = lines.split('\n'); 

			 for (var i = 0; i < fileContents.length; i++) { 
				 if (fileContents[i]== "") {
						fileContents.splice(i, 1);
						i--;
				}
			 }

			 if (sortby=="date") fileContents=sortByDate(fileContents, lang, textColor);
			 if (sortby=="flag" && (type=="music" || type=="movies" || type=="series" || type=="books")) fileContents=sortByFlag(fileContents, lang, textColor);

			 var table = document.getElementById("contentstable");
			 while(table.childNodes.length>0){table.removeChild(table.lastChild);}

			 var row = table.insertRow(-1);
			 var cell1 = row.insertCell(0);
			 cell1.innerHTML = fileContents[0];

			 var row = table.insertRow(-1);
			 var cell1 = row.insertCell(0);
			cell1.setAttribute('class', "text_"+textColor);
			cell1.setAttribute('style', 'padding-left:10px; padding-right:10px;');

// ------------- Showing Feed Image ----------- //
			if (entry!=null) {
				Figure=document.createElement("figure");
				Figure.setAttribute('style', 'display: flex; margin: 0px;');

				var Img=null;
				Img=document.createElement("img");
				Img.setAttribute('src', feedMediaUrl);
				Img.setAttribute('title', feedMediaTitle);

				Img.setAttribute('width', feedMediaWidth);
				Img.setAttribute('align', 'top');
				Img.setAttribute('style', 'padding-right:10px;padding-bottom:5px;');
				Img.onload = function () { 
					scrollDivHeight=calcScrollDivHeightMax();
					document.getElementById("scrollDiv").setAttribute("style", "height:"+scrollDivHeight+"px; overflow:auto;");
					adjustScrollDiv();
				}
				Figure.appendChild(Img);

				ImgCaption=document.createElement("figcaption");
				ImgCaption.setAttribute('class', "nimetus2_"+textColor);
				ImgCaption.innerHTML = "NASA Astronomy Picture of the Day ";
				var a = document.createElement('a');
				a.setAttribute('href', "/news_nasa_"+lang+".html?type=picture");
				a.setAttribute('class', 'standardb_blue');
				a.setAttribute('target', '_blank');
				Img2=document.createElement("img");
				Img2.setAttribute('src', "images/icons/feed/feed_icon.png");
				Img2.setAttribute('class', "thumbnail_image_both");
				if (lang=="eng" || lang=="lat") feedTitleText = "NASA Astronomy Picture of the Day Feed on this Page";
				if (lang=="rus") feedTitleText = "NASA Astronomy Picture of the Day Строка на этой Странице";
				Img2.setAttribute('title', feedTitleText);
				Img2.setAttribute('valign', "bottom");
				a.appendChild(Img2);
				ImgCaption.appendChild(a);

				Div=document.createElement("div");
				Div.innerHTML = "<br>";
				var a2 = document.createElement('a');
				a2.setAttribute('href', feedLink);
				a2.setAttribute('class', 'standardb_'+textColor.split("_")[0]);
				a2.setAttribute('target', '_blank');
				if (lang=="rus") textImage = "Картинка";
				if (lang=="eng") textImage = "Image";
				if (lang=="lat") textImage = "Imagio";
				a2.innerHTML = textImage;
				Div.appendChild(a2);
				Div.innerHTML = Div.innerHTML + " #1. "+feedSummary;
				Div.setAttribute('class', "text_"+textColor);
				Div.setAttribute('style', 'font-weight: normal;');
				ImgCaption.appendChild(Div);

				Figure.appendChild(ImgCaption);
				cell1.appendChild(Figure);
			}
// ------------- End of Showing Feed Image ----------- //

			 for (var i = 1; i < fileContents.length; i++) { 
				cell1.innerHTML = cell1.innerHTML+fileContents[i]+"\n";
			 }


			modStr=xmlhttp.getResponseHeader('Last-Modified');

			var row = table.insertRow(-1);
			var cell1 = row.insertCell(0);
			cell1.style = 'padding-left:10px; padding-right:10px; vertical-align: bottom;';
			cell1.style.textAlign = 'right';
			var date_div =  document.createElement("div");
			date_div.className = 'textsmall_'+textColor;
			date_div.style.textAlign = 'right';
			date_div.innerHTML = formatDate(modStr, lang);
			cell1.appendChild(date_div);

			if (entry==null) {
				scrollDivHeight=calcScrollDivHeightMax();
				document.getElementById("scrollDiv").setAttribute("style", "height:"+scrollDivHeight+"px; overflow:auto;");
				adjustScrollDiv();
			}

		}
	}

	xmlhttp.open("GET", dataFileName, true);
	xmlhttp.send();

}