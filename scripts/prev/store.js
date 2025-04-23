
function processEmptyFeed(type, source, lang, feedXML, turn) {
	if (typeof turn==="undefined") turn=1;

	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();               
	} 
	else {               
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");               
	}

	xmlhttp.onreadystatechange = function () {               
		if (xmlhttp.readyState == 4) {                   
			data= xmlhttp.responseText;  
			if (turn==1) data= JSON.parse(xmlhttp.responseText).contents; 

			parser = new DOMParser();
			xmlDoc = parser.parseFromString(data,"text/xml");
			items=xmlDoc.getElementsByTagName("item");
			itemsCount=xmlDoc.getElementsByTagName("item").length;
			if (itemsCount==0) {
				if (turn==1 || turn==2) {
					processEmptyFeed(type, source, lang, feedXML, turn+1);
				}
				if (turn==3) {
					locStPar=source+"_"+type;
					if (typeof localStorage[locStPar]!=="undefined") {
						var result= {}
						var result= JSON.parse(localStorage[locStPar]);
						result.localCopy.is=1;
						processShowFeed(type, source, lang, result);
					} else {
						var result= {}
						result.feedXML=feedXML;
						result.title=xmlDoc.getElementsByTagName("channel")[0].getElementsByTagName("title")[0].childNodes[0].nodeValue;
						result.link=xmlDoc.getElementsByTagName("channel")[0].getElementsByTagName("link")[0].childNodes[0].nodeValue;
						if (source == "yahoo") result.image="images/icons/feed/yahoo_news_logo.png";
						if (source == "bbc") result.image="images/icons/feed/bbc_news_logo.png";
						if (source == "nasa") result.image="images/icons/feed/NASA_Worm_logo.png";
						result.entries=[];
						processShowFeed(type, source, lang, result);
					}

				}
			} else {
				result={};
				result.feedXML=feedXML;
				result.title=xmlDoc.getElementsByTagName("channel")[0].getElementsByTagName("title")[0].childNodes[0].nodeValue;
				result.link=xmlDoc.getElementsByTagName("channel")[0].getElementsByTagName("link")[0].childNodes[0].nodeValue;
				if (source == "yahoo") result.image="images/icons/feed/yahoo_news_logo.png";
				if (source == "bbc") result.image="images/icons/feed/bbc_news_logo.png";
				if (source == "nasa") result.image="images/icons/feed/NASA_Worm_logo.png";
				result.entries=[];

				items=xmlDoc.getElementsByTagName("item");

				for (var i=0; i<items.length; i++) {
					result.entries[i]={};
					entry = items[i];
					result.entries[i].title=entry.getElementsByTagName("title")[0].childNodes[0].nodeValue;
//console.log(entry);
					result.entries[i].media={};

					if (source == "bbc") {
						result.entries[i].media.url="images/icons/feed/bbc_news.jpg";
						result.entries[i].media.width=450;
						result.entries[i].summary=entry.getElementsByTagName("description")[0].childNodes[0].nodeValue;
					}
					if (source == "nasa") {
						if (type!="image") {
							result.entries[i].media.url="images/icons/feed/nasa_news.png";
							result.entries[i].media.width=450;
							result.entries[i].summary=entry.getElementsByTagName("rss:description")[0].childNodes[0].nodeValue;
						} else {
							result.entries[i].media.url=entry["enclosures"][0].url;
							result.entries[i].media.width=450;
							result.entries[i].summary=entry.getElementsByTagName("description")[0].childNodes[0].nodeValue;
						}
					}
					if (source == "yahoo") {
						if (typeof entry.getElementsByTagName("media:content")[0] === "undefined") {
							result.entries[i].media.url="images/icons/feed/yahoo_news.jpg";
						} else {
							result.entries[i].media.url=entry.getElementsByTagName("media:content")[0].getAttribute("url");
						}
						result.entries[i].media.width=450;
						result.entries[i].summary=null;
					}
					if (result.entries[i].media.width>=450) result.entries[i].media.width=450;

					if (typeof entry.getElementsByTagName("source")[0] !== "undefined") {
						result.entries[i].source={};
						result.entries[i].source.title=entry.getElementsByTagName("source")[0].childNodes[0].nodeValue;
						result.entries[i].source.url=entry.getElementsByTagName("source")[0].getAttribute("url");
					}

					result.entries[i].link=entry.getElementsByTagName("link")[0].childNodes[0].nodeValue;
					result.entries[i].date_ms=Date.parse(entry.getElementsByTagName("pubDate")[0].childNodes[0].nodeValue);

				}
				if (source=="yahoo" && type=="world") {
					result.localCopy={};
					result.localCopy.recivedTime=Date.now();
					result.localCopy.type="XMLHttpRequest:"+turn;
					result_str=JSON.stringify(result);
					localStorage[source+"_"+type]=result_str;
					result.localCopy.is=0;
				}
				processShowFeed(type, source, lang, result);
			}
		}
	}

	if (turn==1) Link="https://api.allorigins.win/get?url="+feedXML;
	if (turn==2) Link="https://api.allorigins.win/raw?url="+feedXML;
	if (turn==3) Link="https://test.cors.workers.dev/?"+feedXML;
	xmlhttp.open("GET", Link, true);
	xmlhttp.timeout = timeoutVal;
	xmlhttp.ontimeout = function () {  $("#loadingDivTitle").html(textTimeout(feedXML, lang)); }
	xmlhttp.send();

}


function isSignatureMatch(bytes, sig) {

	if (Array.isArray(sig)) {
		for (let i = 0; i < sig.length; i++) {
			if (bytes[i] != sig[i]) return false;
		}
		return true;
	}

	if (typeof sig === "string") {
		for (let i = 0; i < sig.length; i++) {
			if (bytes[i] != sig.charCodeAt(i).toString(16)) return false;
		}
		return true;
	}

	return false;
}


//	get file type using magic numbers - more accurate
//	Magic numbers - https://gist.github.com/leommoore/f9e57ba2aa4bf197ebc5

	var fileReader = new FileReader();
	fileReader.onload = function(event) {
		arrayBuffer = event.target.result;
		arr1 = new Uint8Array(arrayBuffer );
		var bytes = [];
		for (let i = 0; i < 12; i++) {
			bytes[i]=arr1[i].toString(16);
		}

//console.log(bytes);



		isImage=0;
		imagetype="";
		if (isSignatureMatch(bytes, "BM")) {isImage=1; imagetype="bmp";}
		if (isSignatureMatch(bytes, "SIMPLE")) {isImage=1; imagetype="fits";}
		if (isSignatureMatch(bytes, "GIF8")) {isImage=1; imagetype="gif";}
		if (isSignatureMatch(bytes, "GKSM")) {isImage=1; imagetype="gks";}
		if (isSignatureMatch(bytes, ["01", "da"])) {isImage=1; imagetype="rgb";}
		if (isSignatureMatch(bytes, ["f1", "00", "40", "bb"])) {isImage=1; imagetype="itc";}
		if (isSignatureMatch(bytes, ["ff", "d8", "ff", "e0"])) {isImage=1; imagetype="jpg";}
		if (isSignatureMatch(bytes, "IIN1")) {isImage=1; imagetype="nif";}
		if (isSignatureMatch(bytes, "VIEW")) {isImage=1; imagetype="pm";}
		if (isSignatureMatch(bytes, ["89", "50", "4e", "47"])) {isImage=1; imagetype="png";}
		if (isSignatureMatch(bytes, "%!")) {isImage=1; imagetype="[e]ps";}
		if (isSignatureMatch(bytes, ["59", "a6", "6a", "95"])) {isImage=1; imagetype="ras";}
		if (isSignatureMatch(bytes, ["4d", "4d", "00", "2a"])) {isImage=1; imagetype="tif";}
		if (isSignatureMatch(bytes, ["49", "49", "2a", "00"])) {isImage=1; imagetype="tif";}
		if (isSignatureMatch(bytes, "gimp xcf")) {isImage=1; imagetype="xcf";}
		if (isSignatureMatch(bytes, "#FIG")) {isImage=1; imagetype="fig";}
		if (isSignatureMatch(bytes, "/* XPM */")) {isImage=1; imagetype="xpm";}

		if (isSignatureMatch(bytes, "RIFF")) {isImage=1; imagetype="webp";}
		if (isSignatureMatch(bytes, "WEBP")) {isImage=1; imagetype="webp";}
		if (isSignatureMatch(bytes, ["0", "0", "0", "1c", "66", "74", "79", "70", "61", "76", "69", "66"])) {isImage=1; imagetype="avif";}
		if (isSignatureMatch(bytes, ["0", "0", "0", "20", "66", "74", "79", "70", "61", "76", "69", "66"])) {isImage=1; imagetype="avif";}

	};
	fileReader.readAsArrayBuffer(file.slice(0,12));