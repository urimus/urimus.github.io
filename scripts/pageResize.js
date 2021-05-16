function dispatchResize() {


	if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
		var evt = document.createEvent('UIEvents');
		evt.initUIEvent('resize', true, false, window, 0);
		window.dispatchEvent(evt);
	} else {
		window.dispatchEvent(new Event('resize'));
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

var onload_=true;
var currentOrientation;

addEvent(window, "resize", function(event) {
  processPageResize();
});


function processPageResize(){

// ------------------------- For Android ------------------------//
  var ua = navigator.userAgent.toLowerCase();
  var isAndroid = ua.indexOf("android") && ua.indexOf("mobile") > -1; 
  
  var orientationChanged=false;
  if (isAndroid) {
    var newOrientation=window.orientation;
    if (newOrientation != currentOrientation) orientationChanged=true;
  }

  if (isAndroid && !orientationChanged && !onload_) return true;
// ------------------------- End of For Android ------------------------//


//   Header Image
  var newImg = new Image();
  newImg.src = "icons/urmas.jpg";
  var hImgHeight = newImg.height;
  var hImgWidth = newImg.width;
  var hImgHeight = hImgHeight*(1000/hImgWidth);
//   End of Header Image
  if (typeof upperIntend === 'undefined') upperIntend=0;

  var h = Math.max(window.innerHeight, document.documentElement.clientHeight);
  var noScrollHeightMax=h-hImgHeight-84-upperIntend;

  var scrollDivHeight=menuHeight-upperIntend;
  if (noScrollHeightMax>scrollDivHeight) {scrollDivHeight=noScrollHeightMax;}

  // for html_editor_*.html only
  if (window.location.pathname.substr(0, 12)=="/html_editor") {
    document.getElementById("scrollDiv").setAttribute("style", "height:"+scrollDivHeight+"px;width: 718px; overflow:auto;");
    } else if (window.location.pathname.substr(0, 9)=="/news_bbc" || window.location.pathname.substr(0, 11)=="/news_lenta") {
	// transfered to onload/!onload
   } else {
    document.getElementById("scrollDiv").setAttribute("style", "height:"+scrollDivHeight+"px; overflow:auto;");
  }

  if (!onload_) {  // not onload_

    // for html_editor_*.html only
    if (window.location.pathname.substr(0, 12)=="/html_editor") {
      adjustTextareaAndEncodings();
    } else if (window.location.pathname.substr(0, 7)=="/index_") {
	adjustScrollDiv();
   } else if (window.location.pathname.substr(0, 9)=="/news_bbc" || window.location.pathname.substr(0, 11)=="/news_lenta") {
	if (allImagesLoaded==1) {
	    	document.getElementById("scrollDiv").setAttribute("style", "height:"+(scrollDivHeight)+"px;width: 710px; overflow:auto;");
		adjustScrollDiv();
	}
   } else {
	adjustScrollDiv();
   }
  } else { // onload
    // for regular htmls only (not html_editor, not index and not news)
    if (!(window.location.pathname.substr(0, 12)=="/html_editor" ||  window.location.pathname.substr(0, 7)=="/index_" || window.location.pathname.substr(0, 9)=="/news_bbc" || window.location.pathname.substr(0, 11)=="/news_lenta")) {
        if (typeof galleria2!=='undefined') {
            Galleria.ready(function() {adjustScrollDiv();});
	} else {
		adjustScrollDiv();
	} 
     } 
  }

// ------------------------- Onload is set to false ------------------------//
  if (onload_) onload_=false;
  if (orientationChanged || onload_) currentOrientation=window.orientation;
// ------------------------- End of Onload is set to false ------------------------//

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
		$( "#scrollDiv" ).css( "height", scrollDivHeightInit + "px");
		$( "#scrollDiv" ).css( "height", scrollDivHeightBeforeScrollBar+ "px");

		hasVerticalScrollbar=0;
		while (!hasVerticalScrollbar) {
			var scrollDivHeightBeforeScrollBar=parseInt($( "#scrollDiv" ).css( "height" ));
			$( "#scrollDiv" ).css( "height", (parseInt($( "#scrollDiv" ).css( "height" )) - 1) + "px");
			hasVerticalScrollbar = scrollDiv.scrollHeight > scrollDiv.clientHeight;
		}
		// 3. setting valueinit, setting value before scrollbar appear
//		$( "#scrollDiv" ).animate({height: scrollDivHeightInit + "px"}); // animate is used to ensure that height were setted
		$( "#scrollDiv" ).animate({height: scrollDivHeightBeforeScrollBar+ "px"}); // animate is used to ensure that height were setted
	}
// -------------- End of Contents Scroll Div Adjustment  ------------- //
}

function flashtext() {
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

  window.onerror = function(e, url, lineNr, columnNr, errorObj) {
	if ($("#loadingDivTitle")) {
		$("#loadingDivTitle").text(e+" in "+url+" at line "+lineNr+" column "+columnNr+".");
	}
    };


function loading() {
	if ($("#loadingDiv")) {
		if ($("#loadingDiv").text()==".") { $("#loadingDiv").text("..");
		} else if ($("#loadingDiv").text()=="..") { $("#loadingDiv").text("...");
		} else if ($("#loadingDiv").text()=="...") { $("#loadingDiv").text("....");
		} else if ($("#loadingDiv").text()=="....") { $("#loadingDiv").text(".....");
		} else if ($("#loadingDiv").text()==".....") { $("#loadingDiv").text(".");
		}
	}
} 

setInterval(function() {
	loading();
}, 500 );
setInterval(function() {
	flashtext();
}, 50 );

