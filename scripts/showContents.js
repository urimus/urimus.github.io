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
			textFlagHTML+='<img src="lang/all/'+myTextFlags[i+1]+'.gif" width="22" height="14"  title="'+myFlags[i+1]+'"style="vertical-align:middle;"/>' 
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
			textFlagHTML+='<img src="lang/all/'+myTextFlags[0]+'.gif" width="22" height="14"  title="'+myFlags[0]+'"style="vertical-align:middle;"/>' 
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
		tabs["heffalump"]='Слонопотам <font class="blinking_text" color="lightcoral"><sup>&#9760; Crimin &#9760;</sup></font>';
		tabs["relaxation"]="Расслабление";
		tabs["software"]="Программы";
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
		tabs["relaxation"]="Relaxation";
		tabs["software"]="Software";
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
	fontPos=tabs[type].indexOf("<font");
	if (fontPos !== -1) {
		tabtype2=tabs[type].substr(0,fontPos-1);
	}
	contentsTitle.innerHTML=contentsTitle.innerHTML+" &blacktriangleright; "+tabtype2;

	keys=Object.keys(tabs);

	var table = document.getElementById("tabstable");
	while(table.childNodes.length>0){table.removeChild(table.lastChild);}
	
	rowsCount=Math.ceil(keys.length/4);
	scrollDivHeight=calcScrollDivHeightMax();
	scrollDivHeight=scrollDivHeight-rowsCount*27-8;
	document.getElementById("scrollDiv").setAttribute("style", "height:"+scrollDivHeight+"px; overflow:auto;");

	for (var i = 0; i<keys.length; i++) {
		if (i%4==0) {
			var row = table.insertRow(-1);
		}
		var cell1 = row.insertCell(i%4);
		cell1.style.width = '25%';
		cell1.style.textAlign = 'center';

		var Div = document.createElement('div');
		Div.style.margin = '2px';
		if (type==keys[i]) {
			Div.setAttribute('class', "menu_selected");
		} else {
			Div.setAttribute('class', "menu_not_selected_"+tabsColor[keys[i]]);
		}
		Div.setAttribute('id', "contents_"+keys[i]);
		Div.setAttribute('onMouseOver', "this.className='menu_selected';");
		Div.setAttribute('onMouseOut', "mouseOut('"+keys[i]+"', '"+type+"', '"+tabsColor[keys[i]]+"');");
		sortby=encodeURIComponent(getParameterByName('sortby'));
		divLink="index_"+lang+".html?type="+keys[i]+"&sortby="+sortby;
		Div.setAttribute('onClick', "if (event.ctrlKey==1){ window.open('"+divLink+"'); } else { window.location.href='"+divLink+"'; };" );
		Div.innerHTML=tabs[keys[i]];
		cell1.appendChild(Div);
	}

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
function adjustContentsScrollDiv(adj) {
	if (typeof adj === 'undefined') adj=1;
	scrollDiv = document.getElementById('scrollDiv');
	scrollDivHeight=calcScrollDivHeightMax();
	tabsHeight=parseInt($( "#tabstable" ).css( "height" ));
	scrollDiv.setAttribute("style", "height:"+(scrollDivHeight-tabsHeight-8)+"px; overflow:auto;");
	if (adj==1) adjustScrollDiv();
}

function showContents(type, sortby, lang) {


	textColor=generateTabs(type, lang);
	refreshSortByTabs(type, sortby, lang);

	if (lang=="rus") {
		textLoadingContents="Читается Содержание";
		textLoadingFeed="Читается Строка Новостей";
		textLoadingImage="Читается Картинка";
		textSkip="Отменить";
		textImage = "Картинка";
	}
	if (lang=="eng") {
		textLoadingContents="Reading Contents";
		textLoadingFeed="Reading News Feed";
		textLoadingImage="Reading Image";
		textSkip="Skip";
		textImage = "Image";
	}
	if (lang=="lat") {
		textLoadingContents="Lectio Illa";
		textLoadingFeed="Lectio Nuntium Acies";
		textLoadingImage="Lectio Imagibus";
		textSkip="Saltus";
		textImage = "Imagio";
	}

	var xmlhttp;
	var lines;

	var table = document.getElementById("contentstable");
	while(table.childNodes.length>0){table.removeChild(table.lastChild);}

	var row = table.insertRow(-1);
	var cell1 = row.insertCell(0);
	cell1.className = 'text_'+textColor+"_blue";
	cell1.style.textAlign = 'center';
	cell1.innerHTML = "<b><div id='loadingDivTitle'>"+textLoadingContents+"</div><div id='loadingDiv'>.</div></b>";

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

			 if (sortby=="date") fileContents=sortByDate(fileContents, lang, textColor+"_blue");
			 if (sortby=="flag" && (type=="music" || type=="movies" || type=="series" || type=="books" || type=="junk" || type=="news")) fileContents=sortByFlag(fileContents, lang, textColor+"_blue");

			 var table = document.getElementById("contentstable");
			 while(table.childNodes.length>0){table.removeChild(table.lastChild);}

			 var row = table.insertRow(-1);
			 var cell1 = row.insertCell(0);
			cell1.className = 'text_'+textColor+"_blue";
			cell1.setAttribute('style', 'padding-left:10px;padding-right:10px;');
			 cell1.innerHTML = fileContents[0];



// ------------- Showing Feed Image ----------- //
			var rowLoading = table.insertRow(-1);
			var cellLoading = rowLoading.insertCell(0);
			cellLoading.className = 'text_'+textColor+"_blue";
			cellLoading.style.textAlign = 'center';

			cellLoading.innerHTML = "<b><div id='loadingDivTitle'>"+textLoadingFeed+". "+"</div><div id='loadingDiv'>.</div></b>";
			loadingDivTitle=document.getElementById("loadingDivTitle");

			adjustContentsScrollDiv(0);

			toSkip=0;
			var aSkip = document.createElement('a');
			aSkip.setAttribute('href', "javascript:void(0);");
			aSkip.setAttribute('class', 'standardb_'+textColor);
			aSkip.innerText = textSkip;
			aSkip.onclick = function () {
				rowLoading.deleteCell(0);
				adjustContentsScrollDiv();
				toSkip=1;
				return;
			}
			loadingDivTitle.appendChild(aSkip);
// ------------- End of Showing Feed Image ----------- //
// ------------- Loading Feed Image ----------- //


			feedURL="https://apod.com/feed.rss";
			feednami.load(feedURL, function(result) {

				if(result.error){
					rowLoading.deleteCell(0);
					adjustContentsScrollDiv();
					return;
				}

				if (toSkip==1) return;

				entry=result.feed.entries[0];
				loadingDivTitle.innerHTML = textLoadingImage+". ";
				loadingDivTitle.appendChild(aSkip);

				feedMediaUrl=entry["enclosures"][0].url+"?w=450";
				feedMediaWidth=450;
				feedMediaTitle=entry.title;

				feedSummary=entry["rss:description"]["#"]+".";
				feedLink=entry.link;

				var Img=null;
				Img=document.createElement("img");
				Img.setAttribute('align', 'top');
				Img.setAttribute('style', 'padding-right:10px;padding-bottom:5px;');
				Img.setAttribute('src', feedMediaUrl);
				Img.setAttribute('title', feedMediaTitle);
				Img.setAttribute('width', feedMediaWidth);
				Img.onload = function () {
					if (toSkip==1) return;

					Figure=document.createElement("figure");
					Figure.setAttribute('style', 'display: flex; margin: 0px; padding-left:10px; padding-right:10px;');
					Figure.appendChild(Img);

					ImgCaption=document.createElement("figcaption");
					ImgCaption.setAttribute('class', "nimetus2_"+textColor+"_blue");
					ImgCaption.innerHTML = "NASA Astronomy Picture of the Day ";
					var a = document.createElement('a');
					a.setAttribute('href', "/news_"+lang+".html?source=nasa&type=picture");
					a.setAttribute('class', 'standardb_blue');
					a.setAttribute('target', '_blank');
					Img2=document.createElement("img");
					Img2.setAttribute('src', "images/icons/feed/feed_icon.png");
					Img2.setAttribute('class', "thumbnail_image_both");
					if (lang=="eng" || lang=="lat") feedTitleText = "NASA Astronomy Picture of the Day Feed on this Page";
					if (lang=="rus") feedTitleText = "NASA Astronomy Picture of the Day Строка на этой Странице";
					Img2.setAttribute('title', feedTitleText);
					Img2.setAttribute('valign', "middle");
					a.appendChild(Img2);
					ImgCaption.appendChild(a);

					Div=document.createElement("div");
					Div.innerHTML = "<br>";
					var a2 = document.createElement('a');
					a2.setAttribute('href', feedLink);
					a2.setAttribute('class', 'standardb_'+textColor);
					a2.setAttribute('target', '_blank');
					a2.innerHTML = textImage+ " #1";
					Div.appendChild(a2);
					Div.innerHTML = Div.innerHTML + ". "+feedSummary;
					Div.setAttribute('class', "text_"+textColor+"_blue");
					Div.setAttribute('style', 'font-weight: normal;');
					ImgCaption.appendChild(Div);

					Figure.appendChild(ImgCaption);

					rowLoading.deleteCell(0);
					var cellLoading = rowLoading.insertCell(0);
					cellLoading.className = 'text_'+textColor+"_blue";
					cellLoading.appendChild(Figure);

					adjustContentsScrollDiv();
				}
				Img.onerror = function () {
					console.log("Loading Error - "+Img.src);
					rowLoading.deleteCell(0);
					adjustContentsScrollDiv();
				}
			});

// ------------- End of Loading Feed Image ----------- //

			 for (var i = 1; i < fileContents.length; i++) { 
				 var row = table.insertRow(-1);
				 var cell1 = row.insertCell(0);
				cell1.className = 'text_'+textColor+"_blue";
				cell1.setAttribute('style', 'padding-left:10px;padding-right:10px;');
				cell1.innerHTML = cell1.innerHTML+fileContents[i];
			 }


			modStr=xmlhttp.getResponseHeader('Last-Modified');

			var row = table.insertRow(-1);
			var cell1 = row.insertCell(0);
			cell1.style = 'padding-left:10px; padding-right:10px; padding-bottom:2px;';
			cell1.style.textAlign = 'right';
			var date_div =  document.createElement("div");
			date_div.className = 'textsmall_'+textColor+"_blue";
			date_div.style.textAlign = 'right';
			date_div.innerHTML = formatDate(modStr, lang);
			cell1.appendChild(date_div);

			adjustContentsScrollDiv();


		}
	}

	var dataFileName="scripts/contents/" + type +"_" + lang +".txt";
	xmlhttp.open("GET", dataFileName, true);
	xmlhttp.send();

}
