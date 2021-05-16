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
	// seconds - Unix Timestamp, Should be UTC timezone, other options should be developed additionally
	// string - standard date string

	if (typeof lang==="undefined") lang="eng";


	// Time Zone Offset, is Local Computer time
	d = new Date();
	invertedOffset = -d.getTimezoneOffset();

	if (typeof date === 'undefined') { 
		date = Date.now().valueOf(); 
	} else {
		if (parseInt(date).toString().localeCompare(date)==0) date = date*1000; 
	}

	mydate = new Date(date);
	// Adding Offset
	mydate=new Date(mydate.getTime() + invertedOffset*60*1000 );

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

	out = ("0"+mydate.getUTCDate()).slice(-2) + dayEnding + dayMonthSep + month + ', ' + mydate.getUTCFullYear() + ", " + ("0"+mydate.getUTCHours()).slice(-2) + ":" + ("0"+mydate.getUTCMinutes()).slice(-2) + " UTC";
	if (mydate.getTimezoneOffset() != 0) {
		if (invertedOffset>0) {out = out + "+"; positiveOffset=invertedOffset;}
		if (invertedOffset<0) {out = out + "-"; positiveOffset=-invertedOffset;}
		hourOffset=parseInt(positiveOffset/60);
		out = out + ("0"+hourOffset).slice(-2)+":";
		out = out + ("0"+parseInt(positiveOffset- hourOffset*60)).slice(-2)+".";
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



function contentsImages(){ 

	dir=[];
							dir.push("scripts/contents/icons/afremov/1.jpeg");
							dir.push("scripts/contents/icons/afremov/2.jpeg");
							dir.push("scripts/contents/icons/afremov/3.jpeg");
							dir.push("scripts/contents/icons/afremov/4.jpeg");
							dir.push("scripts/contents/icons/afremov/5.jpeg");
							dir.push("scripts/contents/icons/afremov/6.jpeg");
							dir.push("scripts/contents/icons/afremov/7.jpeg");
							dir.push("scripts/contents/icons/afremov/8.jpeg");
							dir.push("scripts/contents/icons/afremov/9.png");
							dir.push("scripts/contents/icons/afremov/10.jpg");
							dir.push("scripts/contents/icons/afremov/11.jpg");
							dir.push("scripts/contents/icons/afremov/12.png");
							dir.push("scripts/contents/icons/afremov/13.jpeg");
							dir.push("scripts/contents/icons/afremov/14.jpeg");
							dir.push("scripts/contents/icons/afremov/15.jpeg");
							dir.push("scripts/contents/icons/afremov/16.jpeg");
							dir.push("scripts/contents/icons/afremov/17.jpeg");
							dir.push("scripts/contents/icons/afremov/18.jpg");
							dir.push("scripts/contents/icons/afremov/19.jpeg");
							dir.push("scripts/contents/icons/afremov/20.jpg");
							dir.push("scripts/contents/icons/afremov/21.jpg");
							dir.push("scripts/contents/icons/afremov/22.jpeg");
							dir.push("scripts/contents/icons/afremov/23.jpeg");
							dir.push("scripts/contents/icons/afremov/24.jpeg");
							dir.push("scripts/contents/icons/afremov/25.jpg");
							dir.push("scripts/contents/icons/afremov/26.jpg");
							dir.push("scripts/contents/icons/afremov/27.jpeg");
							dir.push("scripts/contents/icons/afremov/28.jpg");
							dir.push("scripts/contents/icons/afremov/29.jpeg");
							dir.push("scripts/contents/icons/afremov/30.jpg");
							dir.push("scripts/contents/icons/afremov/31.jpg");
							dir.push("scripts/contents/icons/afremov/32.jpeg");
							dir.push("scripts/contents/icons/afremov/33.jpeg");
							dir.push("scripts/contents/icons/afremov/34.jpeg");
							dir.push("scripts/contents/icons/afremov/35.jpg");
							dir.push("scripts/contents/icons/afremov/36.jpeg");
							dir.push("scripts/contents/icons/afremov/37.jpeg");
							dir.push("scripts/contents/icons/afremov/38.jpeg");
							dir.push("scripts/contents/icons/afremov/39.jpg");
							dir.push("scripts/contents/icons/afremov/40.jpeg");
							dir.push("scripts/contents/icons/afremov/41.jpeg");
							dir.push("scripts/contents/icons/afremov/42.jpg");
							dir.push("scripts/contents/icons/afremov/43.jpg");
							dir.push("scripts/contents/icons/afremov/44.jpg");
							dir.push("scripts/contents/icons/afremov/45.jpg");
							dir.push("scripts/contents/icons/afremov/46.jpg");
							dir.push("scripts/contents/icons/afremov/47.jpg");
							dir.push("scripts/contents/icons/afremov/48.jpg");
							dir.push("scripts/contents/icons/afremov/49.jpg");
							dir.push("scripts/contents/icons/afremov/50.jpg");
							dir.push("scripts/contents/icons/afremov/51.jpg");
							dir.push("scripts/contents/icons/afremov/52.jpeg");
							dir.push("scripts/contents/icons/afremov/53.jpg");
							dir.push("scripts/contents/icons/afremov/54.jpg");
							dir.push("scripts/contents/icons/afremov/55.jpeg");
							dir.push("scripts/contents/icons/afremov/56.jpg");
							dir.push("scripts/contents/icons/afremov/57.jpg");
							dir.push("scripts/contents/icons/afremov/58.jpeg");
							dir.push("scripts/contents/icons/afremov/59.jpeg");

							dir.push("scripts/contents/icons/brodsky/1.jpg");
							dir.push("scripts/contents/icons/brodsky/2.jpg");
							dir.push("scripts/contents/icons/brodsky/3.jpg");
							dir.push("scripts/contents/icons/brodsky/4.jpg");
							dir.push("scripts/contents/icons/brodsky/5.jpg");
							dir.push("scripts/contents/icons/brodsky/6.jpg");
							dir.push("scripts/contents/icons/brodsky/7.jpg");
							dir.push("scripts/contents/icons/brodsky/8.jpg");
							dir.push("scripts/contents/icons/brodsky/9.jpg");

							dir.push("scripts/contents/icons/catalin/1.jpg");
							dir.push("scripts/contents/icons/catalin/2.jpg");
							dir.push("scripts/contents/icons/catalin/3.jpg");
							dir.push("scripts/contents/icons/catalin/4.jpg");
							dir.push("scripts/contents/icons/catalin/5.jpg");
							dir.push("scripts/contents/icons/catalin/6.jpg");
							dir.push("scripts/contents/icons/catalin/7.jpg");
							dir.push("scripts/contents/icons/catalin/8.jpg");
							dir.push("scripts/contents/icons/catalin/9.jpg");
							dir.push("scripts/contents/icons/catalin/10.jpg");
							dir.push("scripts/contents/icons/catalin/11.jpg");
							dir.push("scripts/contents/icons/catalin/12.jpg");
							dir.push("scripts/contents/icons/catalin/13.jpg");
							dir.push("scripts/contents/icons/catalin/14.jpg");
							dir.push("scripts/contents/icons/catalin/15.jpg");
	return dir;
}