function contentsLoad(lang) {

	var typeL="";
	var sortbyL="";
	var type="";
	var sortby="";
	var toRedirect=0;
	
	typeL=getParameterByName('type'); 
	sortbyL=getParameterByName('sortby');
	
	if (typeL && typeL!="") {
		if ( (lang=="eng" || lang=="rus") && (typeL=="aboutme" || typeL=="aboutwork" || typeL=="phd" || typeL=="links" || typeL=="howto" || typeL=="music" || typeL=="movies" || typeL=="series" || typeL=="games" || typeL=="books" || typeL=="photos" || typeL=="amv" || typeL=="radio" || typeL=="stuff" || typeL=="anecdotes" || typeL=="heffalump" || typeL=="relaxation" || typeL=="software" || typeL=="satanism" || typeL=="wicca" || typeL=="falsifiability" || typeL=="psychology" || typeL=="countries" || typeL=="totalitarianism" || typeL=="personalities" || typeL=="news") || (lang=="lat" && (typeL=="aboutme" || typeL=="aboutwork" || typeL=="phd" || typeL=="links" || typeL=="photos" || typeL=="amv" || typeL=="radio" || typeL=="stuff" || typeL=="news"))) {
			type=typeL;
		}
	} else {
		type="aboutme";
		toRedirect=1;
	}

	if (sortbyL=="" || sortbyL==null) {
		sortby="name";
		toRedirect=1;
	} else {
		if (sortbyL=="name" || sortbyL=="date") {
			sortby=sortbyL;
		}
	}

	if (type=="") {
		if (lang=="rus") alert("Тип (Type) '"+typeL+"' Не Найден! Перенаправление....");
		if (lang=="eng") alert("Type '"+typeL+"' Not Found! Redirecting....");
		if (lang=="lat") {
			if (!(typeL=="howto" || typeL=="music" || typeL=="movies" || typeL=="games" || typeL=="books" || typeL=="anecdotes" || typeL=="relaxation"  || typeL=="software" || typeL=="satanism" || typeL=="wicca" || typeL=="falsifiability" || typeL=="psychology" || typeL=="countries" || typeL=="totalitarianism" || typeL=="personalities")) {
				alert("Genus (Type) '"+typeL+"' Non Inventum! Redirecting....");
			}
		}
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
	dispatchResize();
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


function refreshContentsTabs(contentsTypeL) {

    contentsType=getParameterByName('type');
    if (contentsType=="aboutme" || contentsTypeL=="aboutme") mouseOut('aboutme', contentsTypeL, 'blue');
    if (contentsType=="aboutwork" || contentsTypeL=="aboutwork") mouseOut('aboutwork', contentsTypeL, 'blue');
    if (contentsType=="phd" || contentsTypeL=="phd") mouseOut('phd', contentsTypeL, 'blue');
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

function refreshSortByTabs(sortbyTypeL) {
	sortbyType=getParameterByName('sortby');
    if (sortbyType=="name" || sortbyTypeL=="name") mouseOutSortByName(sortbyTypeL);
    if (sortbyType=="date" || sortbyTypeL=="date") mouseOutSortByDate(sortbyTypeL);
	
}



function sortByDate(fileContentsL){       
	
	var myDates = [];
	
	for (var i = 1; i < fileContentsL.length; i++) {
		str=fileContentsL[i];
	    // get date value
		var addedpos = str.indexOf("data-added=");
		if (addedpos == -1) { myDates.push(0); continue;} // no added set, automatically to the end of sorted array

		var q1 = str.indexOf("\"", addedpos+1);
		var q2 = str.indexOf("\"", q1+1);


/*
	    // get genre
		var genrepos = str.indexOf("data-genre=");
		if (genrepos != -1) { // genre set
			var q3 = str.indexOf("\"", genrepos+1);
			var q4 = str.indexOf("\"", q3+1);
			var textGenre=str.substring(q3+1, q4);
//			str=str.substring(0, q2-1)+", "+textGenre+"."+str.substring(q2);
			var linkpos = str.indexOf("<a href=");
			fileContentsL[i]=str.substring(0, linkpos)+textGenre+": "+str.substring(linkpos);
		}
*/
	

		var textDate=str.substring(q1+1, q2);
		var textDay=textDate.substring(0, 2);
	    	var textMonth=textDate.substring(8, 11);
	    	var textYear=textDate.substring(13, 17);
		var textAllMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		for (var j = 0; j < textAllMonths.length; j++) {
			if (textAllMonths[j]==textMonth) {
				textMonth=j;
				break;
			}
		}

		//new Date('2011-04-11T10:20:30Z').
		var mydate = new Date(textYear, textMonth,textDay);
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

/*
			clsPos=fileContentsL[i+1].indexOf("class =");
			q1Pos=fileContentsL[i+1].indexOf("\"", clsPos+1);
			q2Pos=fileContentsL[i+1].indexOf("\"", q1Pos+1);
			fileContentsL[i+1]=fileContentsL[i+1].substring(0, q1Pos+1)+"standardb_"+newCol+fileContentsL[i+1].substring(q2Pos);

			clsPos=fileContentsL[i+2].indexOf("class =");
			q1Pos=fileContentsL[i+2].indexOf("\"", clsPos+1);
			q2Pos=fileContentsL[i+2].indexOf("\"", q1Pos+1);
			fileContentsL[i+2]=fileContentsL[i+2].substring(0, q1Pos+1)+"standardb_"+newCol+fileContentsL[i+2].substring(q2Pos);
*/		

		}
	}


	// add year separator
	var len = myDates.length;
	for (var i = len-2; i>=0; i--) {
		if (myDates[i+1]=="0") continue;
		if(myDates[i+1].getFullYear()!=myDates[i].getFullYear()) {
			textYearHTML="<table>";
			textYearHTML+="<tr>";
			textYearHTML+="<td width='50%'><hr style='color:#ff8a00'></td>";
			textYearHTML+="<td><div class='nimetus2_blue'>"+myDates[i+1].getFullYear()+"</div></td>";
			textYearHTML+="<td width='100%'><hr style='color:#ff8a00'></td>";
			textYearHTML+="</tr>";
			textYearHTML+="</table>";
			fileContentsL.splice(i+2, 0, textYearHTML);
		}
	}

	if (len>1) {
		textYearHTML="<table>";
		textYearHTML+="<tr>";
		textYearHTML+="<td width='50%'><hr style='color:#ff8a00'></td>";
		textYearHTML+="<td><div class='nimetus2_blue'>"+myDates[0].getFullYear()+"</div></td>";
		textYearHTML+="<td width='100%'><hr style='color:#ff8a00'></td>";
		textYearHTML+="</tr>";
		textYearHTML+="</table>";
		fileContentsL.splice(1, 0, textYearHTML);
	}



	return fileContentsL;
	
}



// ----------------------- showContents --------- //


function showContents(type, sortby, lang) {


	refreshContentsTabs(type);
	refreshSortByTabs(sortby);

	

    var dataFileName="scripts/contents/" + type +"_" + lang +".txt";



// ------------- used for image alt text and small text ----------- //
			var textColor="blue";
			if (type=="aboutme" || type=="aboutwork" || type=="phd" || type=="links" || type=="howto" ) textColor="blue";
			if (type=="music" || type=="movies" || type=="series" || type=="games" || type=="amv" || type=="radio" || type=="stuff") textColor="black_blue";
			if (type=="books" || type=="photos" || type=="anecdotes" || type=="heffalump" || type=="news") textColor="red_blue";
			if (type=="relaxation" || type=="software") textColor="white_blue";
			if (type=="satanism" || type=="wicca" || type=="falsifiability" || type=="psychology" || type=="countries" || type=="totalitarianism" || type=="personalities") textColor="green_blue";
// ------------- End of used for image alt text and small text ----------- //




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
	} 
	else {               
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


			 if (sortby=="date") fileContents=sortByDate(fileContents);

			 var table = document.getElementById("contentstable");
			 while(table.childNodes.length>0){table.removeChild(table.lastChild);}

			 var row = table.insertRow(-1);
			 var cell1 = row.insertCell(0);
			 cell1.innerHTML = fileContents[0];

			 var row = table.insertRow(-1);
			 var cell1 = row.insertCell(0);
			 cell1.className = 'text_blue';
			 cell1.style = 'padding-left:10px; padding-right:10px; ';





// ----------------------- Get Random Image Link --------- //	

							dir = contentsImages();

							//		console.log(this.responseText);

							// random 0..dir.length-1
							randomDirIndex = Math.floor(Math.random()*dir.length);

							afremovImgs=59;
							brodskyImgs=9;
							catalinImgs=15;

							useAfremov=0; useBrodsky=0; useCatalin=0;
							if (randomDirIndex<afremovImgs) useAfremov=1;
							if (randomDirIndex>=afremovImgs && randomDirIndex<(afremovImgs+brodskyImgs)) useBrodsky=1;
							if (randomDirIndex>=(afremovImgs+brodskyImgs) && randomDirIndex<(afremovImgs+brodskyImgs+catalinImgs)) useCatalin=1;

							var image=dir[randomDirIndex];


							var altText="";

							if (useAfremov) {
								if (lang=="rus") altText="Картинка Леонид Афремов";
								if (lang=="eng") altText="Image of Leonid Afremov";
								if (lang=="lat") altText="Imaginibus Leonid Afremov";
							}
							if (useBrodsky) {
								if (lang=="rus") altText="Картинка Дина Бродски";
								if (lang=="eng") altText="Image of Dina Brodsky";
								if (lang=="lat") altText="Imaginibus Dina Brodsky";
							}
							if (useCatalin) {
								if (lang=="rus") altText="Картинка Габриэла и Каталин";
								if (lang=="eng") altText="Image of Gabriela and Cătălin";
								if (lang=="lat") altText="Imaginibus Gabriela et Cătălin";
							}





						 	var Img=document.createElement("img");
							Img.setAttribute('src', image);
							Img.setAttribute('class', "text_"+textColor);
							Img.setAttribute('alt', altText);
							Img.setAttribute('title', altText);
							Img.setAttribute('vspace', '5');
							Img.setAttribute('hspace', '5');
							Img.setAttribute('align', 'left');
							Img.setAttribute('width', '350');
							Img.setAttribute('style', 'padding-right:5px;');
							ImgLink = document.createElement('a');
							if (useAfremov) ImgLink.href = 'https://afremov.com/Art-deco/';
							if (useBrodsky) ImgLink.href = 'http://dinabrodsky.com/';
							if (useCatalin) ImgLink.href = ' https://www.etsy.com/shop/Catalin/items?section_id=6062935';

							ImgLink.target="_blank";
							ImgLink.appendChild(Img);
							cell1.appendChild(ImgLink);

// -----------------------End of  Get Random Image Link --------- //	

			 for (var i = 1; i < fileContents.length; i++) { 
				cell1.innerHTML = cell1.innerHTML+fileContents[i]+"\n";
			 }


			modStr=xmlhttp.getResponseHeader('Last-Modified');
			modStamp=new Date(modStr).getTime()/1000;

			var row = table.insertRow(-1);
			var cell1 = row.insertCell(0);
			cell1.style = 'padding-left:10px; padding-right:10px; vertical-align: bottom;';
			cell1.style.textAlign = 'right';
			var date_div =  document.createElement("div");
			date_div.className = 'textsmall_'+textColor;
			date_div.style.textAlign = 'right';
			date_div.innerHTML = formatDate(modStamp, lang);
			cell1.appendChild(date_div);



							$("<img/>").attr("src", image).css('display', 'none').load(function() { // image loaded


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
								document.getElementById("scrollDiv").setAttribute("style", "height:"+scrollDivHeight+"px; overflow:auto;");

	// --------------- End of re-set scroll div ------------ //

								adjustScrollDiv();
							});

				}
			}


	xmlhttp.open("GET", dataFileName, true);
	xmlhttp.send();

}


// ----------------------- End of showContents --------- //