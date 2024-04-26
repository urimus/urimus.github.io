<?


// https://www.w3schools.com/php/php_ajax_rss_reader.asp

//get the q parameter from URL
$q=$_GET["q"];

//find out which feed was selected




if($q=="top_bbc") { $xml=("http://feeds.bbci.co.uk/news/rss.xml"); }
elseif($q=="world_bbc") { $xml=("http://feeds.bbci.co.uk/news/world/rss.xml"); }
elseif($q=="uk_bbc") { $xml=("http://feeds.bbci.co.uk/news/uk/rss.xml"); }
elseif($q=="business_bbc") { $xml=("http://feeds.bbci.co.uk/news/business/rss.xml"); }
elseif($q=="politics_bbc") { $xml=("http://feeds.bbci.co.uk/news/politics/rss.xml"); }
elseif($q=="health_bbc") { $xml=("http://feeds.bbci.co.uk/news/health/rss.xml"); }
elseif($q=="education_bbc") { $xml=("http://feeds.bbci.co.uk/news/education/rss.xml"); }
elseif($q=="science_bbc") { $xml=("http://feeds.bbci.co.uk/news/science_and_environment/rss.xml"); }
elseif($q=="technology_bbc") { $xml=("http://feeds.bbci.co.uk/news/technology/rss.xml"); }
elseif($q=="entertainment_bbc") { $xml=("http://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml"); }


elseif($q=="lenta") { $xml=("https://lenta.ru/rss/news"); }

if ($q=="russian_bbc") {



    $html=file_get_contents("https://www.bbc.com/russian/news");
    

    
    $xml="<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
    $xml=$xml."\n<?xml-stylesheet title=\"XSL_formatting\" type=\"text/xsl\" href=\"/shared/bsp/xsl/rss/nolsol.xsl\"?>";
    $xml=$xml."\n<rss xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:content=\"http://purl.org/rss/1.0/modules/content/\" xmlns:atom=\"http://www.w3.org/2005/Atom\" version=\"2.0\" xmlns:media=\"http://search.yahoo.com/mrss/\">";
    $xml=$xml."\n    <channel>";
    
    $xml=$xml."\n        <title><![CDATA[BBC News - Русская Служба]]></title>";
    $xml=$xml."\n        <description><![CDATA[BBC News - Русская Служба]]></description>";
    $xml=$xml."\n        <link>https://www.bbc.com/russian/news</link>";
    $xml=$xml."\n        <image>";
    $xml=$xml."\n            <url>http://news.bbcimg.co.uk/nol/shared/img/bbc_news_120x60.gif</url>";
    $xml=$xml."\n            <title>BBC News - Русская Служба</title>";
    $xml=$xml."\n            <link>https://www.bbc.com/russian/news</link>";
    $xml=$xml."\n        </image>";
    $xml=$xml."\n        <generator>RSS for Node</generator>";
    $xml=$xml."\n        <lastBuildDate>Fri, 18 May 2018 10:30:26 GMT</lastBuildDate>";
    $xml=$xml."\n        <copyright><![CDATA[Copyright: (C) British Broadcasting Corporation, see http://news.bbc.co.uk/2/hi/help/rss/4498287.stm for terms and conditions of reuse.]]></copyright>";
    $xml=$xml."\n        <language><![CDATA[ru]]></language>";
    $recordsNum=substr_count($html,"<div class=\"dove-item faux-block-link\" >");

    
    $xml=$xml."\n        <ttl>".($recordsNum+1)."</ttl>";
    

    
    $matchPos1=strpos($html , "<div class=\"buzzard faux-block-link\">");
    
    
        $xml=$xml."\n        <item>";




        // media1
        $matchPos_4=strpos($html, "width=\"", $matchPos1+1);
        $matchPos_5=strpos($html, "\"", $matchPos_4+strlen("width=\"")+1);
        $mediaWIDTH=substr($html, $matchPos_4+strlen("width=\""), $matchPos_5-$matchPos_4-strlen("width=\""));

        $matchPos_6=strpos($html, "height=\"", $matchPos_5+1);
        $matchPos_7=strpos($html, "\"", $matchPos_6+strlen("height=\"")+1);
        $mediaHEIGHT=substr($html, $matchPos_6+strlen("height=\""), $matchPos_7-$matchPos_6-strlen("height=\""));


        // title
        $matchPos2=strpos($html, "<span class=\"title-link__title-text\">", $matchPos1+1);
        $matchPos3=strpos($html, "</span>", $matchPos2+1);
        $title=substr($html, $matchPos2+strlen("<span class=\"title-link__title-text\">"), $matchPos3-$matchPos2-strlen("<span class=\"title-link__title-text\">"));
        $xml=$xml."\n            <title><![CDATA[".html_entity_decode($title)."]]></title>";


        // descripttion
        $matchPos4=strpos($html, "<p class=\"buzzard__summary\">", $matchPos3+1);
        $matchPos5=strpos($html, "</p>", $matchPos4+1);
        $description=substr($html, $matchPos4+strlen("<p class=\"buzzard__summary\">"), $matchPos5-$matchPos4-strlen("<p class=\"buzzard__summary\">"));
        $xml=$xml."\n            <description><![CDATA[".html_entity_decode($description)."]]></description>";



        // pubDate
        $matchPos6=strpos($html, "data-seconds=\"", $matchPos5+1);
        $matchPos7=strpos($html, "\"", $matchPos6+strlen("data-seconds=\"")+1);
        $pubDate=substr($html, $matchPos6+strlen("data-seconds=\""), $matchPos7-$matchPos6-strlen("data-seconds=\""));
        date_default_timezone_set('UTC');
        $date = new DateTime();
        $date->setTimestamp($pubDate);

        // links
        $matchPos8=strpos($html, "<a href=\"", $matchPos7+1);
        $matchPos9=strpos($html, "\"", $matchPos8+strlen("<a href=\"")+1);
        $link=substr($html, $matchPos8+strlen("<a href=\""), $matchPos9-$matchPos8-strlen("<a href=\""));
        $xml=$xml."\n            <link>https://www.bbc.com".$link."</link>";
        $xml=$xml."\n            <guid isPermaLink=\"true\">https://www.bbc.com".$link."</guid>";        
        $xml=$xml."\n            <pubDate>".$date->format('D, d M Y H:i:s')." UTC"."</pubDate>";

        $xml=$xml."\n        </item>";     
    

    $matchPos1=strpos($html , "<div class=\"dove-item faux-block-link\" >");

    for ($i=0;$i<$recordsNum;$i++){


        $xml=$xml."\n        <item>";


        // media1
        $matchPos_4=strpos($html, "data-width=\"", $matchPos1+1);
        $matchPos_5=strpos($html, "\"", $matchPos_4+strlen("data-width=\"")+1);
        $mediaWIDTH=substr($html, $matchPos_4+strlen("data-width=\""), $matchPos_5-$matchPos_4-strlen("data-width=\""));

        $matchPos_6=strpos($html, "data-height=\"", $matchPos_5+1);
        $matchPos_7=strpos($html, "\"", $matchPos_6+strlen("data-height=\"")+1);
        $mediaHEIGHT=substr($html, $matchPos_6+strlen("data-height=\""), $matchPos_7-$matchPos_6-strlen("data-height=\""));


        // title
        $matchPos2=strpos($html, "<span class=\"title-link__title-text\">", $matchPos1+1);
        $matchPos3=strpos($html, "</span>", $matchPos2+1);
        $title=substr($html, $matchPos2+strlen("<span class=\"title-link__title-text\">"), $matchPos3-$matchPos2-strlen("<span class=\"title-link__title-text\">"));
        $xml=$xml."\n            <title><![CDATA[".html_entity_decode($title)."]]></title>";


        // descripttion
        $matchPos4=strpos($html, "class=\"faux-block-link__overlay-link\" tabindex=\"-1\" aria-hidden=\"true\">", $matchPos3+1);
        $matchPos5=strpos($html, "</a>", $matchPos4+1);
        $description=substr($html, $matchPos4+strlen("class=\"faux-block-link__overlay-link\" tabindex=\"-1\" aria-hidden=\"true\">"), $matchPos5-$matchPos4-strlen("class=\"faux-block-link__overlay-link\" tabindex=\"-1\" aria-hidden=\"true\">"));
        $xml=$xml."\n            <description><![CDATA[".html_entity_decode($description)."]]></description>";
        

        // pubDate
        $matchPos6=strpos($html, "data-seconds=\"", $matchPos1+1);
        $matchPos7=strpos($html, "\"", $matchPos6+strlen("data-seconds=\"")+1);
        $pubDate=substr($html, $matchPos6+strlen("data-seconds=\""), $matchPos7-$matchPos6-strlen("data-seconds=\""));
        date_default_timezone_set('UTC');
        $date = new DateTime();
        $date->setTimestamp($pubDate);

        // links
        $matchPos8=strpos($html, "<a href=\"", $matchPos7+1);
        $matchPos9=strpos($html, "\"", $matchPos8+strlen("<a href=\"")+1);
        $link=substr($html, $matchPos8+strlen("<a href=\""), $matchPos9-$matchPos8-strlen("<a href=\""));
        $xml=$xml."\n            <link>https://www.bbc.com".$link."</link>";
        $xml=$xml."\n            <guid isPermaLink=\"true\">https://www.bbc.com".$link."</guid>";        
        $xml=$xml."\n            <pubDate>".$date->format('D, d M Y H:i:s')." UTC"."</pubDate>";

        
        // media 2

//        $htmlSub=file_get_contents('https://www.bbc.com'.$link);
//        $matchPos_2=strpos($htmlSub, "<meta property=\"og:image\" content=\"");
//        $matchPos_3=strpos($htmlSub, "\"", $matchPos_2+strlen("<meta property=\"og:image\" content=\"")+1);
//        $mediaURL=substr($htmlSub, $matchPos_2+strlen("<meta property=\"og:image\" content=\""), $matchPos_3-$matchPos_2-strlen("<meta property=\"og:image\" content=\""));
//        if (! @getimagesize($mediaURL)) $mediaURL="icons/no_image2.jpg";
//        $xml=$xml."\n            <media:thumbnail width=\"".$mediaWIDTH."\" height=\"".$mediaHEIGHT."\" url=\"".$mediaURL."\"/>";
        
//        $matchPos_2=strpos($htmlSub, "<meta property=\"og:image:alt\" content=\"");
//        $matchPos_3=strpos($htmlSub, "\"", $matchPos_2+strlen("<meta property=\"og:image:alt\" content=\"")+1);
//        $mediaComment=substr($htmlSub, $matchPos_2+strlen("<meta property=\"og:image:alt\" content=\""), $matchPos_3-$matchPos_2-strlen("<meta property=\"og:image:alt\" content=\""));
//        $xml=$xml."\n            <comments>".$mediaComment."</comments>";

        
        $xml=$xml."\n        </item>";        

        // next cycle
        $matchPos1=strpos($html , "<div class=\"dove-item faux-block-link\" >", $matchPos1+1);

    }


//        <item>
//            <title><![CDATA[Israel's Gaza response 'wholly disproportionate' - UN rights chief]]></title>
//            <description><![CDATA[The UN rights chief sharply attacks Israel for killing Palestinians "caged in a toxic slum".]]></description>
//            <link>http://www.bbc.co.uk/news/world-middle-east-44167900</link>
//            <guid isPermaLink="true">http://www.bbc.co.uk/news/world-middle-east-44167900</guid>
//            <pubDate>Fri, 18 May 2018 10:04:19 GMT</pubDate>
//            <media:thumbnail width="976" height="549" url="http://c.files.bbci.co.uk/107E/production/_101622240_9bd4483b-b7c3-4cda-af86-dec96b0f6ffc.jpg"/>
//        </item>
    
    $xml=$xml."\n    </channel>";
    $xml=$xml."\n</rss>";
    file_put_contents("../logs/bbc_russian.rss", "\xEF\xBB\xBF".$xml);
    
    $xmlDoc = new DOMDocument();
    $xmlDoc->loadXML($xml);
    echo($xmlDoc->saveXML());




} else {
    $xmlDoc = new DOMDocument();
    $xmlDoc->load($xml);
    echo($xmlDoc->saveXML());
}
//echo($xmlDoc->saveXML());


?>