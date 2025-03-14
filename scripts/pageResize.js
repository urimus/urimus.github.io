function dispatchOrientationChange() {
	if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
		var evt = document.createEvent('UIEvents');
		evt.initUIEvent('change', true, false, screen.orientation, 0);
		screen.orientation.dispatchEvent(evt);
	} else {
		screen.orientation.dispatchEvent(new Event('change'));
	}
}

var addEvent = function(object, type, callback) {
	if (object == null || typeof(object) == 'undefined') return;
	if (object.addEventListener) {
		object.addEventListener(type, callback, false);
	} else if (object.attachEvent) {
		object.attachEvent("on" + type, callback);
	} else {
		object["on"+type] = callback;
	}
};

addEvent(window, "resize", function(event) {
	processPageResize(0);
});
addEvent(screen.orientation, "change", function(event) {
	processPageResize(0, 1);
});

function calcScrollDivHeightMax(){
//   Header Image
	var newImg = new Image();
	newImg.src = "images/icons/urmas.jpg";
	var hImgHeight = newImg.height;
	var hImgWidth = newImg.width;
	var hImgHeight = hImgHeight*(1000/hImgWidth);
//   End of Header Image

	var h = Math.min(window.innerHeight, document.documentElement.clientHeight);
	if (window.location.pathname!="/" && window.location.pathname!="/index.html") {
		var noScrollHeightMax=h-hImgHeight-84;//84
	} else {
		var noScrollHeightMax=h-hImgHeight-65;//65
	}
	var scrollDivHeight=menuHeight;
	if (noScrollHeightMax>scrollDivHeight) {scrollDivHeight=noScrollHeightMax;}
	return scrollDivHeight;
}


function processPageResize(isLoad, orientationChanged){

	if (typeof isLoad === "undefined") isLoad=1;
	if (typeof orientationChanged === "undefined") orientationChanged=0;

// ------------------------- For Android ------------------------//
// do not process if Android and Not Load and Not Orientation Changed
	var ua = navigator.userAgent.toLowerCase();
	isAndroid = ua.indexOf("android") && ua.indexOf("mobile") > -1; 
//	if (isAndroid && isLoad==1) dispatchOrientationChange();
	if (isAndroid && isLoad==0 && orientationChanged==0) return true; 
// ------------------------- End of For Android ------------------------//

	scrollDivHeight=calcScrollDivHeightMax();
	var scrollDiv = document.getElementById('scrollDiv');

	if (isLoad==0) {  // not isLoad
		if (typeof(scrollDiv) !== 'undefined' && scrollDiv != null) {
			if (window.location.pathname.substr(0, 5)=="/news") {
				if (document.getElementById('feedtable').innerHTML!="") adjustFeedScrollDiv(0);
			} else if (window.location.pathname.substr(0, 12)=="/html_editor") {
				if (document.getElementById('textarea_area').value!="") adjustTextareaAndEncodings();
			} else if (window.location.pathname.substr(0, 9)=="/about_me") {
				scrollDiv.setAttribute("style", "height:"+scrollDivHeight+"px; overflow:auto;");
				adjustScrollDiv();
			} else if (window.location.pathname.substr(0, 7)=="/index_") {
				if (document.getElementById('contentstable').innerHTML!="") adjustContentsScrollDiv(1);
			} else if (window.location.pathname=="/" || window.location.pathname=="/index.html") {
				scrollDiv.setAttribute("style", "height:"+scrollDivHeight+"px; overflow:auto;");
			} else {
				if (typeof galleria2==='undefined') {
					scrollDiv.setAttribute("style", "height:"+scrollDivHeight+"px; overflow:auto;");
					adjustScrollDiv();
				}
			}
		}
	} else { // isLoad
		// for regular htmls only (not html_editor, not index and not news)
		if (!(window.location.pathname.substr(0, 12)=="/html_editor"
		||  window.location.pathname.substr(0, 7)=="/index_"
		||  window.location.pathname.substr(0, 9)=="/about_me"
		|| window.location.pathname.substr(0, 5)=="/news")) {
			if (typeof(scrollDiv) !== 'undefined' && scrollDiv != null) {
				scrollDiv.setAttribute("style", "height:"+scrollDivHeight+"px; overflow:auto;");
			}
			if (window.location.pathname!="/" && window.location.pathname!="/index.html") {
				if (typeof galleria2!=='undefined') {
					Galleria.ready(function() {adjustScrollDiv();});
				} else {
					adjustScrollDiv();
				}
			}
		} 
	}


	var swidth=(window.innerWidth-$(window).width());
	var w = window.innerWidth;
	var imageWidth=(w-swidth-1000)/2;


	var prevImg=document.getElementById("imgBgStar");
	if (prevImg) document.body.removeChild(prevImg);
	var prevImg=document.getElementById("imgBg");
	if (prevImg) document.body.removeChild(prevImg);

	if (imageWidth >= 50) {
		var Img=document.createElement("img");
		Img.setAttribute('id', 'imgBg');
		Img.setAttribute('class', 'backgroundImage');
		Img.setAttribute('src', imgBgSrc);
		if (imageWidth < 600/window.devicePixelRatio) {
			Img.setAttribute('width', imageWidth);
		} else {
			Img.setAttribute('width', 600/window.devicePixelRatio);
		}
		Img.style.display = "inline-block";
		document.body.appendChild(Img);


		var Img=document.createElement("img");
		Img.setAttribute('id', 'imgBgStar');
		Img.setAttribute('class', 'backgroundImageStar');
		Img.setAttribute('src', imgBgStarSrc);
		if (imageWidth < 300/window.devicePixelRatio) {
			Img.setAttribute('width', imageWidth);
		} else {
			Img.setAttribute('width', 300/window.devicePixelRatio);
		}
		Img.style.display = "inline-block";
		document.body.appendChild(Img);
	}
}


function adjustScrollDiv() {
	var scrollDiv= document.getElementById('scrollDiv');

	var hasVerticalScrollbarInit = scrollDiv.scrollHeight > scrollDiv.clientHeight;
// -------------- Automatic Contents Scroll Div Adjustment  ------------- //
	scrollDivHeightInit=parseInt($( "#scrollDiv" ).css( "height" ));
	if (!hasVerticalScrollbarInit) {
		hasVerticalScrollbar=0;
		// 1. getting scrollbar
		while (!hasVerticalScrollbar) {
			var scrollDivHeightBeforeScrollBar=parseInt($( "#scrollDiv" ).css( "height" ));
			$( "#scrollDiv" ).css( "height", (parseInt($( "#scrollDiv" ).css( "height" )) - 5) + "px");
			hasVerticalScrollbar = scrollDiv.scrollHeight > scrollDiv.clientHeight;
		}
		// 2. setting value init, setting value before scrollbar appear and getting scrollbar with step 1
		$( "#scrollDiv" ).css( "height", scrollDivHeightBeforeScrollBar+ "px");

		hasVerticalScrollbar=0;
		while (!hasVerticalScrollbar) {
			var scrollDivHeightBeforeScrollBar=parseInt($( "#scrollDiv" ).css( "height" ));
			$( "#scrollDiv" ).css( "height", (parseInt($( "#scrollDiv" ).css( "height" )) - 1) + "px");
			hasVerticalScrollbar = scrollDiv.scrollHeight > scrollDiv.clientHeight;
		}
		// 3. setting valueinit, setting value before scrollbar appear
//		$( "#scrollDiv" ).animate({height: scrollDivHeightInit + "px"}); // animate
		$( "#scrollDiv" ).css({height: scrollDivHeightBeforeScrollBar+ "px"});
	}
// -------------- End of Contents Scroll Div Adjustment  ------------- //
}

function flashText() {
	if (document.getElementsByClassName("blinking_text")) {
		ele2=document.getElementsByClassName("blinking_text");
		for (var i = 0; i<ele2.length; i++) {
			if (typeof ele2[i].dataset.value==='undefined') {
				newOp=Math.floor(Math.random()*11)/10.0;
				dir=Math.floor(Math.random()*2);
				if (dir==0) ele2[i].dataset.value=newOp-0.1;
				if (dir==1) ele2[i].dataset.value=newOp+0.1;
				ele2[i].style.opacity=newOp;
			} else {
				if (ele2[i].style.opacity==0.0) {
					ele2[i].dataset.value=0.0;
					ele2[i].style.opacity=0.1;
				} else if (ele2[i].style.opacity==1.0){
					ele2[i].dataset.value=1.0;
					ele2[i].style.opacity=0.9;
				} else {
					if (ele2[i].style.opacity>ele2[i].dataset.value) { // inc
						ele2[i].dataset.value=ele2[i].style.opacity;
						ele2[i].style.opacity=parseFloat(ele2[i].style.opacity)+0.1;
					}
					if (ele2[i].style.opacity<ele2[i].dataset.value) { // dec
						ele2[i].dataset.value=ele2[i].style.opacity;
						ele2[i].style.opacity=parseFloat(ele2[i].style.opacity)-0.1;
					}
				}
			}
		}
	}
}

/*
window.onerror = function(e, url, lineNr, columnNr, errorObj) {
	console.log(e+" in "+url+" at line "+lineNr+" column "+columnNr+".");
};
*/

function loading() {
	if (document.getElementById("loadingDiv")) {
		if ($("#loadingDiv").text().slice(-1)==".") $("#loadingDiv").text($("#loadingDiv").text()+".");
		if ($("#loadingDiv").text().slice(-6)=="......") $("#loadingDiv").text($("#loadingDiv").text().slice(0, -5));
	}
	if (document.getElementsByClassName("loadingDiv")) {
		ele2=document.getElementsByClassName("loadingDiv");
		for (var i = 0; i<ele2.length; i++) {
			ele=ele2[i];
			if (ele.innerText.slice(-1)==".") ele.innerText=ele.innerText+".";
			if (ele.innerText.slice(-6)=="......") ele.innerText=ele.innerText.slice(0, -5);
		}
	}
} 
function animatedText() {
	if (document.getElementsByClassName("animatedText")) {
		ele2=document.getElementsByClassName("animatedText");
		for (var i = 0; i<ele2.length; i++) {
			text=ele2[i].innerHTML;
			fontStPos = text.indexOf("<font");
			fontStEndPos = text.indexOf(">", fontStPos);
			fontEndPos = text.indexOf("</font>");
			textBeforeFont=text.substr(0, fontStPos);
			textInFont=text.substr(fontStEndPos+1, 1);
			textAfterFont=text.substr(fontEndPos+7);
			newHightlightpos=fontStPos+1;
			if (fontEndPos==text.length-7) newHightlightpos=0;
			text2=ele2[i].innerText;
			newAnimatedtext=text2.substr(0, newHightlightpos) +'<font color="#ff8a00">'+text2.substr(newHightlightpos,1)+"</font>"+text2.substr(newHightlightpos+1);
			ele2[i].innerHTML=newAnimatedtext;
		}
	}
} 


setInterval(function() {
	loading();
}, 500 );
setInterval(function() {
	animatedText();
}, 250 );
setInterval(function() {
	flashText();
}, 50 );
