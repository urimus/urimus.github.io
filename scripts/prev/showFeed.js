


feedType="";

function newsLoad() {

      document.getElementById("feed_world").onclick();

      window.dispatchEvent(new Event('resize'));

}





function mouseOutBusiness(feedTypeL) {
    if (feedTypeL=="business_bbc" || feedTypeL=="business_sky") {
      document.getElementById("feed_business").className = "menu_selected";
    } else {
      document.getElementById("feed_business").className = "menu_not_selected_red";
    }
}
function mouseOutEntertainment(feedTypeL) {
    if (feedTypeL=="entertainment_bbc" || feedTypeL=="entertainment_sky") {
      document.getElementById("feed_entertainment").className = "menu_selected";
    } else {
      document.getElementById("feed_entertainment").className = "menu_not_selected_red";
    }

}

function mouseOutScience(feedTypeL) {
    if (feedTypeL=="science_bbc") {
      document.getElementById("feed_science").className = "menu_selected";
    } else {
      document.getElementById("feed_science").className = "menu_not_selected_red";
    }
}

function mouseOutStrange(feedTypeL) {
    if (feedTypeL=="strange_sky") {
      document.getElementById("feed_strange").className = "menu_selected";
    } else {
      document.getElementById("feed_strange").className = "menu_not_selected_red";
    }
}

function mouseOutTechnology(feedTypeL) {
    if (feedTypeL=="technology_bbc" || feedTypeL=="technology_sky") {
      document.getElementById("feed_technology").className = "menu_selected";
    } else {
      document.getElementById("feed_technology").className = "menu_not_selected_red";
    }
}

function mouseOutWorld(feedTypeL) {
    if (feedTypeL=="world_bbc" || feedTypeL=="world_sky") {
      document.getElementById("feed_world").className = "menu_selected";
    } else {
      document.getElementById("feed_world").className = "menu_not_selected_red";
    }
}

function refreshFeedTabs(feedTypeL) {
    if (feedType=="world_bbc" || feedTypeL=="world_bbc") mouseOutWorld(feedTypeL);
    if (feedType=="world_sky" || feedTypeL=="world_sky") mouseOutWorld(feedTypeL);

    if (feedType=="technology_bbc" || feedTypeL=="technology_bbc") mouseOutTechnology(feedTypeL);
    if (feedType=="technology_sky" || feedTypeL=="technology_sky") mouseOutTechnology(feedTypeL);

    if (feedType=="science_bbc" || feedTypeL=="science_bbc") mouseOutScience(feedTypeL);
    if (feedType=="strange_sky" || feedTypeL=="strange_sky") mouseOutStrange(feedTypeL);

    if (feedType=="entertainment_bbc" || feedTypeL=="entertainment_bbc") mouseOutEntertainment(feedTypeL);
    if (feedType=="entertainment_sky" || feedTypeL=="entertainment_sky") mouseOutEntertainment(feedTypeL);

    if (feedType=="business_bbc" || feedTypeL=="business_bbc") mouseOutBusiness(feedTypeL);
    if (feedType=="business_sky" || feedTypeL=="business_sky") mouseOutBusiness(feedTypeL);

}



   function showFeed(showLess, type, lang) {


     textRssFeed="";
     textRecords="";
     textShowAll="";
     textShow="";
     textOnly="";
     textMore="";
     feedAddr="";


     if (lang=="rus"){
        textRssFeed="RSS Строка (англ.)";
        textRecords="Записей";
        textShowAll="Показать Все";
        textShow="Показать";
        textOnly="Только";
        textMore="Ещё >>";
     }

     if (lang=="eng"){
        textRssFeed="RSS Feed";
        textRecords="Records";
        textShowAll="Show All";
        textShow="Show";
        textOnly="Only";
        textMore="More >>";
     }


     if (lang=="ger"){
        textRssFeed="RSS F&uuml;ttern (ingl.)";
        textRecords="Eintr&auml;ge";
        textShowAll="Alle Anzeigen";
        textShow="Zeigen";
        textOnly="Nur";
        textMore="Mehr >>";
     }




     if (type=="world_bbc") feedAddr="http://feeds.bbci.co.uk/news/world/rss.xml";
     if (type=="technology_bbc") feedAddr="http://feeds.bbci.co.uk/news/technology/rss.xml";
     if (type=="science_bbc") feedAddr="http://feeds.bbci.co.uk/news/science_and_environment/rss.xml";
     if (type=="entertainment_bbc") feedAddr="http://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml";
     if (type=="business_bbc") feedAddr="http://feeds.bbci.co.uk/news/business/rss.xml";


     if (type=="world_sky") feedAddr="http://feeds.skynews.com/feeds/rss/world.xml";
     if (type=="technology_sky") feedAddr="http://feeds.skynews.com/feeds/rss/technology.xml";
     if (type=="strange_sky") feedAddr="http://feeds.skynews.com/feeds/rss/strange.xml";
     if (type=="entertainment_sky") feedAddr="http://feeds.skynews.com/feeds/rss/entertainment.xml";
     if (type=="business_sky") feedAddr="http://feeds.skynews.com/feeds/rss/business.xml";




     if (feedType!=type) refreshFeedTabs(type);


     feedType=type;



     var xhr = new XMLHttpRequest();


    xhr.onreadystatechange = function(){
        if (xhr.readyState==4 && xhr.status==200)
        {
            var result = JSON.parse(xhr.responseText);

            if(result.status == 'ok'){

           var totalEntries=result.items.length;
           if (showLess) {numFeeds=10;} else {numFeeds=totalEntries;}
           var table = document.getElementById("feedtable");
           while(table.childNodes.length>0){table.removeChild(table.lastChild);}

// ------------- Feeds Title ----------------
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            cell1.className = 'nimetus_red';
	    var a = document.createElement('a');
	    a.setAttribute('href', result.feed.link);
	    a.setAttribute('class', 'standardb_red');
	    a.setAttribute('target', '_blank');
	    a.innerHTML = "&quot;" + result.feed.title + "&quot;"
            cell1.appendChild(a);

            if (showLess) {
               cell1.innerHTML = cell1.innerHTML+" "+textRssFeed+", "+numFeeds+" "+textRecords+" (<a href='#' class = 'standardb_red' onClick='showFeed(false, \""+type+"\", \""+lang+"\");return false;'>"+textShowAll+" / "+totalEntries+"</a>) :";
            } else {
               cell1.innerHTML = cell1.innerHTML+" "+textRssFeed+", "+numFeeds+" "+textRecords+" (<a href='#' class = 'standardb_red' onClick='showFeed(true, \""+type+"\", \""+lang+"\");return false;'>"+textShow+" 10 "+textOnly+"</a>) :";
            }
// ------------- End of Feeds Title --------------



          for (var i = 0; i < numFeeds; i++) { // ------------- Cycle over feeds ----------------
// ------------- Reading Data ----------------
            var entry = result.items[i];

            mediaThumbnailUrl = (entry.thumbnail ? entry.thumbnail : "icons/no_image2.jpg"); // Just the url

	    var mydate = entry.pubDate;

//            var mydate = new Date(entry.pubDate);
//            var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][mydate.getUTCMonth()];
//            mydate = mydate.getUTCDate() + "th of " + month + ', ' + mydate.getUTCFullYear() + ", " + mydate.getUTCHours() + ":" + mydate.getUTCMinutes() + " UTC.";

// ------------- End of Reading Data ----------------



// ------------- Setting Data ----------------
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            cell1.innerHTML = "<br><br>";

            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            cell1.className = 'nimetus_red';
            cell1.innerHTML = (i+1)+". "+entry.title;

            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            cell1.className = 'text_red';
            cell1.style = 'padding-left:10px; padding-right:10px;';

            var Img=document.createElement("img");
	    Img.setAttribute('src', mediaThumbnailUrl);
	    Img.setAttribute('alt', entry.title);
	    Img.setAttribute('title', entry.title);
	    Img.setAttribute('vspace', '5');
	    Img.setAttribute('hspace', '5');
	    Img.setAttribute('align', 'left');

            var lastTypeThree = type.substr(type.length - 3);
            if (lastTypeThree == "bbc") Img.setAttribute('width', '450');
            if (lastTypeThree == "sky") Img.setAttribute('width', '70');

	    Img.setAttribute('style', 'padding-right:5px;');
            cell1.appendChild(Img);

            cell1.innerHTML = cell1.innerHTML+"<P>"+entry.content;

	    var a = document.createElement('a');
	    a.setAttribute('href', entry.link);
	    a.setAttribute('class', 'standardb_red');
	    a.setAttribute('target', '_blank');
	    a.innerHTML = textMore;
            cell1.appendChild(a);

            cell1.innerHTML = cell1.innerHTML+"</img>";

	    var date = document.createElement('div');
            date.className = 'textsmall_red';
            date.style.textAlign = 'right';
            date.innerHTML = mydate;
            cell1.appendChild(date);

// ------------- End of Setting Data ----------------

          } // ------------- End of Cycle over feeds ----------------


            }
        }
    };


    xhr.open('GET','http://api.rss2json.com/v1/api.json?rss_url='+feedAddr,true);
    xhr.send(); 


    }




