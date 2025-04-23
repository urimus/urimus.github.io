function contentsLoad(lang) {

	var typeL="";
	var sortbyL="";
	var type="";
	var sortby="";
	var toRedirect=0;
	
	typeL=getParameterByName('type'); 
	sortbyL=getParameterByName('sortby');

	if (typeL && typeL!="") {
		if ( (lang=="eng" || lang=="rus") && (typeL=="aboutme" || typeL=="aboutwork" || typeL=="aboutphd" || typeL=="links" || typeL=="howto" || typeL=="music" || typeL=="movies" || typeL=="series" || typeL=="games" || typeL=="books" || typeL=="photos" || typeL=="amv" || typeL=="junk" || typeL=="stuff" || typeL=="anecdotes" || typeL=="heffalump" || typeL=="relaxation" || typeL=="software" || typeL=="satanism" || typeL=="wicca" || typeL=="falsifiability" || typeL=="psychology" || typeL=="countries" || typeL=="totalitarianism" || typeL=="personalities" || typeL=="news") || (lang=="lat" && (typeL=="aboutme" || typeL=="aboutwork" || typeL=="aboutphd" || typeL=="links" || typeL=="photos" || typeL=="amv" || typeL=="junk" || typeL=="stuff" || typeL=="news"))) {
			type=typeL;
		}
		if (lang=="lat" && (typeL=="howto" || typeL=="music" || typeL=="movies" || typeL=="series" || typeL=="games" || typeL=="books" || typeL=="anecdotes" || typeL=="heffalump" || typeL=="relaxation" || typeL=="software" || typeL=="satanism" || typeL=="wicca" || typeL=="falsifiability" || typeL=="psychology" || typeL=="countries" || typeL=="totalitarianism" || typeL=="personalities")) {
			type="aboutme";
			toRedirect=1;
		}
	} else {
		toRedirect=1;
	}

	if (sortbyL=="" || sortbyL==null) {
		toRedirect=1;
	} else {
		if (sortbyL=="name" || sortbyL=="date") sortby=sortbyL;
		if (sortbyL=="flag") {
			if (typeL=="music" || typeL=="movies" || typeL=="series" || typeL=="books" || typeL=="junk" || typeL=="news") {
				sortby=sortbyL;
			} else {
				sortby="name";
				toRedirect=1;
			}
		}
	}

	if (type=="") {
		if (lang=="rus") alert("Тип (Type) '"+typeL+"' Не Действителен! Перенаправление....");
		if (lang=="eng") alert("Type '"+typeL+"' Not Valid! Redirecting....");
		if (lang=="lat") alert("Genus (Type) '"+typeL+"' Non Validus! Redirecting....");
		type="aboutme";
		toRedirect=1;
	}


	if (sortby=="") {
		if (lang=="rus") alert("Тип Сортировки (Sortby) '"+sortbyL+"' Не Действителен! Перенаправление....");
		if (lang=="eng") alert("Sort By Type '"+sortbyL+"' Not Valid! Redirecting....");
		if (lang=="lat") alert("Ordino Genus (Sortby) '"+sortbyL+"' Non Validus! Redirecting....");
		sortby="name";
		toRedirect=1;
	}
	if (toRedirect==1) {
		window.location.href='index_'+lang+'.html?type='+type+'&sortby='+ sortby;
		return;
	}

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


function refreshSortByTabs(typeL, sortbyTypeL, lang) {
	sortbyType=getParameterByName('sortby');
	if (sortbyType=="name" || sortbyTypeL=="name") mouseOutSortByName(sortbyTypeL);
	if (sortbyType=="date" || sortbyTypeL=="date") mouseOutSortByDate(sortbyTypeL);

	if (typeL=="music" || typeL=="movies" || typeL=="series" || typeL=="books" || typeL=="junk" || typeL=="news") {
		if (sortbyType=="flag" || sortbyTypeL=="flag") mouseOutSortByFlag(sortbyTypeL);
	} else {
		document.getElementById("sortby_flag").onmouseover="";
		document.getElementById("sortby_flag").onmouseout="";
		document.getElementById("sortby_flag").onclick="";
		document.getElementById("sortby_flag").onmouseover="";
		document.getElementById("sortby_flag_img").src="scripts/contents/icons/sortby/sortby_flag3.png";
	}
}

function correctPadding(line){

	// remove init padding
	var spanStpos = line.indexOf("<span");
	if (spanStpos!= -1) {
		var spanStpos2 = line.indexOf(">", 5);
		if (spanStpos2!= -1) {
			var spanEndpos = line.indexOf("</span>");
			if (spanEndpos!= -1) {
				line = line.substr(spanStpos2+1, spanEndpos-spanStpos2-1);
			}
		}
	}

	// add padding
	line="<span style='padding-left:10px;'>"+line+"</span>";
	return line;
}

function sortByDate(fileContentsL, lang, textColor){       
	
	var myDates = [];
	
	for (var i = 1; i < fileContentsL.length; i++) {

		fileContentsL[i]=correctPadding(fileContentsL[i]);

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
			textYearHTML="<table cellpadding='0' cellspacing='0'>";
			textYearHTML+="<tr>";
			textYearHTML+="<td width='50%'><table width='100%' cellpadding='0' cellspacing='0'><tr><td style='border-bottom: #ff8a00 4px double; border-top: transparent 4px double;'></td></tr></table></td>";
			textYearHTML+="<td><div class='nimetus2_"+textColor+"' style='padding-left:2px; padding-right:2px;'>"+myDates[i+1].getFullYear()+"</div></td>";
			textYearHTML+="<td width='100%'><table width='100%' cellpadding='0' cellspacing='0'><tr><td style='border-bottom: #ff8a00 4px double; border-top: transparent 4px double;'></td></tr></table></td>";
			textYearHTML+="</tr>";
			textYearHTML+="</table>";
			fileContentsL.splice(i+2, 0, textYearHTML);
		}
	}

	if (len>1) {
		textYearHTML="<table cellpadding='0' cellspacing='0'>";
		textYearHTML+="<tr>";
		textYearHTML+="<td width='50%'><table width='100%' cellpadding='0' cellspacing='0'><tr><td style='border-bottom: #ff8a00 4px double; border-top: transparent 4px double;'></td></tr></table></td>";
		textYearHTML+="<td><div class='nimetus2_"+textColor+"' style='padding-left:2px; padding-right:2px;'>"+myDates[0].getFullYear()+"</div></td>";
		textYearHTML+="<td width='100%'><table width='100%' cellpadding='0' cellspacing='0'><tr><td style='border-bottom: #ff8a00 4px double; border-top: transparent 4px double;'></td></tr></table></td>";
		textYearHTML+="</tr>";
		textYearHTML+="</table>";
		fileContentsL.splice(1, 0, textYearHTML);
	}

	return fileContentsL;
}


function sortByFlag(fileContentsL, lang, textColor){       
	
	var myFlags = [];
	var myTextFlags = [];
	fileContentsL2 = [];
	fileContentsL2.push(fileContentsL[0]); 

	zeroContents = [];

	for (var i = 1; i < fileContentsL.length; i++) {

		fileContentsL[i]=correctPadding(fileContentsL[i]);

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
			textFlagHTML="<table cellpadding='0' cellspacing='0'>";
			textFlagHTML+="<tr>";
			textFlagHTML+="<td width='50%'><table width='100%' cellpadding='0' cellspacing='0'><tr><td style='border-bottom: #ff8a00 4px double; border-top: transparent 4px double;'></td></tr></table></td>";
			textFlagHTML+="<td><div class='nimetus2_"+textColor+"' style='padding-left:2px; padding-right:2px;'>";
			textFlagHTML+='<img src="lang/all/'+myTextFlags[i+1]+'.gif" width="30" title="'+myFlags[i+1]+'"style="vertical-align:middle;"/>' 
			textFlagHTML+="</div></td>";
			textFlagHTML+="<td width='100%'><table width='100%' cellpadding='0' cellspacing='0'><tr><td style='border-bottom: #ff8a00 4px double; border-top: transparent 4px double;'></td></tr></table></td>";
			textFlagHTML+="</tr>";
			textFlagHTML+="</table>";
			fileContentsL2.splice(i+2, 0, textFlagHTML);
		}
	}

	if (len>1) {
		if (myFlags[0]!="") {
			textFlagHTML="<table cellpadding='0' cellspacing='0'>";
			textFlagHTML+="<tr>";
			textFlagHTML+="<td width='50%'><table width='100%' cellpadding='0' cellspacing='0'><tr><td style='border-bottom: #ff8a00 4px double; border-top: transparent 4px double;'></td></tr></table></td>";
			textFlagHTML+="<td><div class='nimetus2_"+textColor+"' style='padding-left:2px; padding-right:2px;'>";
			textFlagHTML+='<img src="lang/all/'+myTextFlags[0]+'.gif" width="30" title="'+myFlags[0]+'"style="vertical-align:middle;"/>' 
			textFlagHTML+="</div></td>";
			textFlagHTML+="<td width='100%'><table width='100%' cellpadding='0' cellspacing='0'><tr><td style='border-bottom: #ff8a00 4px double; border-top: transparent 4px double;'></td></tr></table></td>";
			textFlagHTML+="</tr>";
			textFlagHTML+="</table>";
			fileContentsL2.splice(1, 0, textFlagHTML);
		}
	}

	// if no coutry set then should be last
	textFlagHTML="<table width='100%'>";
	textFlagHTML+="<tr width='100%'>";
	textFlagHTML+="<td width='100%'><table width='100%' cellpadding='0' cellspacing='0'><tr><td style='border-bottom: #ff8a00 4px double; border-top: transparent 4px double;'></td></tr></table></td>";
	textFlagHTML+="</tr>";
	textFlagHTML+="</table>";
	fileContentsL2.push(textFlagHTML);
	for (var i = 0; i < zeroContents.length; i++) {
		fileContentsL2.push(zeroContents[i]);
	}

	return fileContentsL2;
}



function generateTabs(type, lang) {

	tabs={};
	tabs2={};
	if (lang=="rus") {
		tabs["aboutme"]="Обо мне";
		tabs["aboutwork"]="О Моей Работе";
		tabs["aboutphd"]="О моём PhD";
		tabs["links"]="Ссылки";
		tabs["howto"]='How-to <font class="blinking_text" color="fuchsia"><sup>&#10038; No Entry &#10038;</sup></font>';
		tabs["music"]='Музыка <font class="blinking_text" color="purple"><sup>&#9765; Vampiric &#9765;</sup></font>';
		tabs["movies"]='Фильмы <font class="blinking_text" color="DodgerBlue"><sup>&#128142; Unique &#128142;</sup></font>';
		tabs["series"]='Сериалы <font class="blinking_text" color="MediumSlateBlue"><sup>&#9880; Forbidden &#9880;</sup></font>';
		tabs["games"]="Игры";
		tabs["books"]="Книги";
		tabs["photos"]="Фото/Картинки";
		tabs["amv"]="AMV";
		tabs["junk"]="Мусор";
		tabs["stuff"]='Барахло <font class="blinking_text" color="red"><sup>&#9889; Evil &#9889;</sup></font>';
		tabs["anecdotes"]="Анекдоты";
		tabs["heffalump"]='Слонопотам <font class="blinking_text" style="font-size:98%;" color="lightcoral"><sup>&#9760; Criminal &#9760;</sup></font>';
		tabs2["relaxation"]="Вещества Для Расслабления";
		tabs["relaxation"]="Вещества Для";
		tabs2["software"]="Разработка Программного Обеспечения";
		tabs["software"]="Разработка";
		tabs["satanism"]="Сатанизм";
		tabs["wicca"]="Викка";
		tabs["falsifiability"]="Фальсифицируемость";
		tabs["psychology"]="Психология";
		tabs["countries"]="Страны";
		tabs["totalitarianism"]="Тоталитаризм";
		tabs["personalities"]="Деятели";
		tabs["news"]="Новости";
	}
	if (lang=="eng") {
		tabs["aboutme"]="About Me";
		tabs["aboutwork"]="About My Work";
		tabs["aboutphd"]="About my PhD";
		tabs["links"]="Links";
		tabs["howto"]='How-to <font class="blinking_text" color="fuchsia"><sup>&#10038; No Entry &#10038;</sup></font>';
		tabs["music"]='Music <font class="blinking_text" color="purple"><sup>&#9765; Vampiric &#9765;</sup></font>';
		tabs["movies"]='Movies <font class="blinking_text" color="DodgerBlue"><sup>&#128142; Unique &#128142;</sup></font>';
		tabs["series"]='Series <font class="blinking_text" color="MediumSlateBlue"><sup>&#9880; Forbidden &#9880;</sup></font>';
		tabs["games"]="Games";
		tabs["books"]="Books";
		tabs["photos"]="Photos/Images";
		tabs["amv"]="AMV";
		tabs["junk"]="Junk";
		tabs["stuff"]='Stuff <font class="blinking_text" color="red"><sup>&#9889; Evil &#9889;</sup></font>';
		tabs["anecdotes"]="Anecdotes";
		tabs["heffalump"]='Heffalump <font class="blinking_text" color="lightcoral"><sup>&#9760; Criminal &#9760;</sup></font>';
		tabs2["relaxation"]="Substances For Relaxation";
		tabs["relaxation"]="Substances For";
		tabs["software"]="Software Development";
		tabs["satanism"]="Satanism";
		tabs["wicca"]="Wicca";
		tabs["falsifiability"]="Falsifiability";
		tabs["psychology"]="Psychology";
		tabs["countries"]="Countries";
		tabs["totalitarianism"]="Totalitarianism";
		tabs["personalities"]="Personalities";
		tabs["news"]="News";
	}
	if (lang=="lat") {
		tabs["aboutme"]="Circa Mihi";
		tabs["aboutwork"]="Circa Mihi Opus";
		tabs["aboutphd"]="Circa Mei PhD";
		tabs["links"]="Relatio";
		tabs["photos"]="Photo/Imaginibus";
		tabs["amv"]="AMV";
		tabs["junk"]="Junk";
		tabs["stuff"]='Effercio <font class="blinking_text" color="red"><sup>&#9889; Evil &#9889;</sup></font>';
		tabs["news"]="Nuntium";
	}

	tabsColor={};
	tabsColor["aboutme"]="blue";
	tabsColor["aboutwork"]="blue";
	tabsColor["aboutphd"]="blue";
	tabsColor["links"]="blue";
	tabsColor["howto"]="blue";
	tabsColor["music"]="black";
	tabsColor["movies"]="black";
	tabsColor["series"]="black";
	tabsColor["games"]="black";
	tabsColor["books"]="red";
	tabsColor["photos"]="red";
	tabsColor["amv"]="black";
	tabsColor["junk"]="black";
	tabsColor["stuff"]="black";
	tabsColor["anecdotes"]="red";
	tabsColor["heffalump"]="red";
	tabsColor["relaxation"]="white";
	tabsColor["software"]="white";
	tabsColor["satanism"]="green";
	tabsColor["wicca"]="green";
	tabsColor["falsifiability"]="green";
	tabsColor["psychology"]="green";
	tabsColor["countries"]="green";
	tabsColor["totalitarianism"]="green";
	tabsColor["personalities"]="green";
	tabsColor["news"]="red";

	contentsTitle=document.getElementById("contentsTitle");
	tabtype2=tabs[type];
	if (type=="relaxation" || (lang=="rus" && type=="software")) tabtype2=tabs2[type];
	fontPos=tabtype2.indexOf("<font");
	if (fontPos !== -1) {
		tabtype2=tabtype2.substr(0,fontPos-1);
	}
	contentsTitle.innerHTML=contentsTitle.innerHTML+" &blacktriangleright; "+tabtype2;

	keys=Object.keys(tabs);

	var table = document.getElementById("tabstable");
	while(table.childNodes.length>0){table.removeChild(table.lastChild);}
	
	rowsCount=Math.ceil(keys.length/4);
/*
	scrollDivHeight=calcScrollDivHeightMax();
	scrollDivHeight=scrollDivHeight-rowsCount*27-8;
	document.getElementById("scrollDiv").setAttribute("style", "height:"+scrollDivHeight+"px; overflow:auto;");
*/
	for (var i = 0; i<keys.length; i++) {
		if (i%4==0) {
			var row = table.insertRow(-1);
		}
		var cell1 = row.insertCell(i%4);
		cell1.style.width = '25%';
		cell1.style.textAlign = 'center';

		var Div = document.createElement('div');
		Div.dataset.shortTitle=tabs[keys[i]];
		if (typeof tabs2[keys[i]]!=="undefined") Div.dataset.fullTitle=tabs2[keys[i]];
		Div.style.margin = '2px';
		if (type==keys[i]) {
			Div.setAttribute('class', "menu_selected");
		} else {
			Div.setAttribute('class', "menu_not_selected_"+tabsColor[keys[i]]);
		}
		Div.setAttribute('id', "contents_"+keys[i]);
		Div.setAttribute('onMouseOver', "this.className='menu_selected'; if(typeof this.dataset.fullTitle!=='undefined') this.innerHTML=this.dataset.fullTitle;");
		Div.setAttribute('onMouseOut', "mouseOut('"+keys[i]+"', '"+type+"', '"+tabsColor[keys[i]]+"'); if(typeof this.dataset.fullTitle!=='undefined') this.innerHTML=this.dataset.shortTitle;");
		sortby=encodeURIComponent(getParameterByName('sortby'));
		divLink="index_"+lang+".html?type="+keys[i]+"&sortby="+sortby;
		Div.setAttribute('onClick', "if (event.ctrlKey==1){ window.open('"+divLink+"'); } else { window.location.href='"+divLink+"'; };" );
		Div.innerHTML=tabs[keys[i]];
		cell1.appendChild(Div);
	}


	var Div = document.createElement('div');
	Div.setAttribute('id', "information_div");

	var a = document.createElement('a');
	a.setAttribute('href', "javascript:showInformation('"+lang+"');");

	var Img = document.createElement('img');
	Img.setAttribute('src', "images/icons/different/information.png");
	if (lang=="eng" || lang=="lat") {
		Img.setAttribute('alt', "Version Information.");
		Img.setAttribute('title', "Version Information.");
	}
	if (lang=="rus") {
		Img.setAttribute('alt', "Информация о Версии.");
		Img.setAttribute('title', "Информация о Версии.");
	}
	Img.setAttribute('id', "information_img");
	Img.setAttribute('width', "30");
	Img.setAttribute('height', "30");
	Img.setAttribute('class', "thumbnail_image_blue_png");

	a.appendChild(Img);
	Div.appendChild(a);
	table.appendChild(Div);

	table.style.position = 'relative';
	Div.style.position = 'absolute';
	Div.style.right = '2px';
	Div.style.bottom = '-9px';

	adjustContentsScrollDiv();

	return tabsColor[type];
/*

	<td align="center" width="25%" >
		  <div id="contents_aboutme" 
		  onMouseOver="this.className='menu_selected';" 
		  onMouseOut="mouseOut('aboutme', getParameterByName('type'), 'blue');" 
                  	 onClick="
                        if (event.ctrlKey==1){
                                window.open('index_lat.html?type=aboutme&sortby='+encodeURIComponent(getParameterByName('sortby')));
                        } else {
                                window.location.href='index_lat.html?type=aboutme&sortby='+encodeURIComponent(getParameterByName('sortby'));
                        };"		    
		  class="menu_not_selected_blue">
		  Circa Mihi</div>
    </td>
*/
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
			if (lang=='rus') infoText="Карта Сайта Версия 1.0. Создано - 22е Янв, 2018, Последнее Изменение - ";
			if (lang=='eng') infoText="Site Map Version 1.0. Created At - 22nd of Jan, 2018, Last Modification - ";
			if (lang=='lat') infoText="Pagina Tabula Verso 1.0. Creatus - 22nd of Jan, 2018, Ultimo Modificatio - ";
			alert(infoText+formatDate(modStr, lang)+".");
		}
	};
	var dataFileName="scripts/showContents.js";
	xmlhttp2.open("GET", dataFileName, true);
	xmlhttp2.send();
}



function adjustContentsScrollDiv() {
	scrollDiv = document.getElementById('scrollDiv');
	scrollDivHeight=calcScrollDivHeightMax();
	tabsHeight=parseInt($( "#tabstable" ).css( "height" ));

	// 1. Setting ScrollDiv to menuHeight
	// 2. If has scrollDiv then to Max
	// 3. If does not have scrollDiv then to 100%

	// 1
	scrollDiv.setAttribute("style", "height:"+(menuHeight-tabsHeight-8)+"px; overflow:auto;");

	// 2
	var hasVerticalScrollBar = scrollDiv.scrollHeight > scrollDiv.clientHeight;
	if (hasVerticalScrollBar) {
		scrollDiv.setAttribute("style", "height:"+(scrollDivHeight-tabsHeight-8)+"px; overflow:auto;");
		// 3
		var hasVerticalScrollBar = scrollDiv.scrollHeight > scrollDiv.clientHeight;
		if (!hasVerticalScrollBar) {
			scrollDiv.setAttribute("style", "height:100%; width: 711px; overflow:auto;");
		}
	}

/*
	scrollDiv.setAttribute("style", "height:"+(scrollDivHeight-tabsHeight-8)+"px; overflow:auto;");
	var hasVerticalScrollBar = scrollDiv.scrollHeight > scrollDiv.clientHeight;
	if (!hasVerticalScrollBar) {
		scrollDiv.setAttribute("style", "height:100%; overflow:auto;");
		if ((parseInt($( "#scrollDiv" ).css( "height" ))+tabsHeight+8)<menuHeight) {
			scrollDiv.setAttribute("style", "height:"+(menuHeight-tabsHeight-8)+"px; overflow:auto;");
		}
	}
*/
}

function showContents(type, sortby, lang) {


	textColor=generateTabs(type, lang);
	refreshSortByTabs(type, sortby, lang);

	if (window.XMLHttpRequest) {
		var xmlhttp = new XMLHttpRequest();               
	} else {               
		var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");               
	}

	xmlhttp.onreadystatechange = function () {               
		if (xmlhttp.readyState == 4) {                   

			var lines = xmlhttp.responseText;    //*here we get all lines from text file*
			var fileContents = lines.split('\n'); 

			for (var i = 0; i < fileContents.length; i++) { 
				if (fileContents[i]== "") {
						fileContents.splice(i, 1);
						i--;
				}
			}

			if (sortby=="date") fileContents=sortByDate(fileContents, lang, textColor+"_blue");
			if (sortby=="flag" && (type=="music" || type=="movies" || type=="series" || type=="books" || type=="junk" || type=="news")) fileContents=sortByFlag(fileContents, lang, textColor+"_blue");

			var table = document.getElementById("contentstable");
			while(table.childNodes.length>0){table.removeChild(table.lastChild);}

			for (var i = 0; i < fileContents.length; i++) { 
				var row = table.insertRow(-1);
				var cell1 = row.insertCell(0);
				cell1.className = 'text_'+textColor+"_blue";
				if (i==0) {
					cell1.setAttribute('style', 'padding-left:10px;padding-right:10px;text-align: center;');
				} else {
					cell1.setAttribute('style', 'padding-left:10px;padding-right:10px;');
				}
				cell1.innerHTML = fileContents[i];
			}

			adjustContentsScrollDiv();


		}
	}

	var dataFileName="scripts/contents/" + type +"_" + lang +".txt";
	xmlhttp.open("GET", dataFileName, true);
	xmlhttp.send();

}
