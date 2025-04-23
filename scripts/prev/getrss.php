<?


// https://www.w3schools.com/php/php_ajax_rss_reader.asp


function getHtml($url, $post = null) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    if(!empty($post)) {
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
    } 
    $result = curl_exec($ch);
    curl_close($ch);
    return $result;
}

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



    $html=getHtml("https://www.bbc.com/russian");
    

    
    $xml="<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
    $xml=$xml."\n<?xml-stylesheet title=\"XSL_formatting\" type=\"text/xsl\" href=\"/shared/bsp/xsl/rss/nolsol.xsl\"?>";
    $xml=$xml."\n<rss xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:content=\"http://purl.org/rss/1.0/modules/content/\" xmlns:atom=\"http://www.w3.org/2005/Atom\" version=\"2.0\" xmlns:media=\"http://search.yahoo.com/mrss/\">";
    $xml=$xml."\n    <channel>";
    
    $xml=$xml."\n        <title><![CDATA[BBC News - Русская Служба]]></title>";
    $xml=$xml."\n        <description><![CDATA[BBC News - Русская Служба]]></description>";
    $xml=$xml."\n        <link>https://www.bbc.com/russian</link>";
    $xml=$xml."\n        <image>";
    $xml=$xml."\n            <url>http://news.bbcimg.co.uk/nol/shared/img/bbc_news_120x60.gif</url>";
    $xml=$xml."\n            <title>BBC News - Русская Служба</title>";
    $xml=$xml."\n            <link>https://www.bbc.com/russian</link>";
    $xml=$xml."\n        </image>";
    $xml=$xml."\n        <generator>RSS for Node</generator>";
    $xml=$xml."\n        <lastBuildDate>Fri, 18 May 2018 10:30:26 GMT</lastBuildDate>";
    $xml=$xml."\n        <copyright><![CDATA[Copyright: (C) British Broadcasting Corporation, see http://news.bbc.co.uk/2/hi/help/rss/4498287.stm for terms and conditions of reuse.]]></copyright>";
    $xml=$xml."\n        <language><![CDATA[ru]]></language>";
//    $recordsNum=substr_count($html,"class=\"Headline-sc-1dvfmi3-3 dnWhDh\">");



    $xml2="";

    $matchPos1=0;
    $recordsNum=0;

    while (1){
    
    
    $matchPos1_1=strpos($html , "class=\"css-1fm5tj-Headline", $matchPos1+1);
    $matchPos1_2=strpos($html , "class=\"css-1dq4glf-Headline", $matchPos1+1);


    
    if ($matchPos1_1===false && $matchPos1_2===false) break;

    if ($matchPos1_1===false) {
        $matchPos1=$matchPos1_2;
    } elseif ($matchPos1_2===false) {
        $matchPos1=$matchPos1_1;
    } else {
        if ($matchPos1_1<$matchPos1_2) $matchPos1=$matchPos1_1;
        if ($matchPos1_2<$matchPos1_1) $matchPos1=$matchPos1_2;
    }

    $recordsNum++;



    $xml2=$xml2."\n        <item>";


    $matchPos8=strpos($html, "<a href=\"", $matchPos1+1);
    $matchPos9=strpos($html, "\"", $matchPos8+strlen("<a href=\"")+1);
    $link=substr($html, $matchPos8+strlen("<a href=\""), $matchPos9-$matchPos8-strlen("<a href=\""));


        // media1
//        $matchPos_4=strpos($html, "data-width=\"", $matchPos1+1);
//        $matchPos_5=strpos($html, "\"", $matchPos_4+strlen("data-width=\"")+1);
        $mediaWIDTH=640;//substr($html, $matchPos_4+strlen("data-width=\""), $matchPos_5-$matchPos_4-strlen("data-width=\""));

//        $matchPos_6=strpos($html, "data-height=\"", $matchPos_5+1);
//        $matchPos_7=strpos($html, "\"", $matchPos_6+strlen("data-height=\"")+1);
        $mediaHEIGHT=480;//substr($html, $matchPos_6+strlen("data-height=\""), $matchPos_7-$matchPos_6-strlen("data-height=\""));


        // title
        $matchPos2=strpos($html, "class=\"", $matchPos1+1);
        $matchPos2_1=strpos($html, ">", $matchPos2+1);
        $matchPos3=strpos($html, "</a>", $matchPos2_1+1);
        $title=substr($html, $matchPos2_1+1, $matchPos3-$matchPos2_1-1);
        $xml2=$xml2."\n            <title><![CDATA[".html_entity_decode($title)."]]></title>";




        // descripttion
        
        $matchPos4_1=strpos($html, "class=\"css-13yxbmi-Summary", $matchPos3+1);
        $matchPos4_2=strpos($html, "class=\"css-k499s0-Summary", $matchPos3+1);
                                        

    if ($matchPos4_1===false && $matchPos4_2===false) {
        $matchPos5=$matchPos3;
        $description="";
        $matchPos4=false;
    } else {
        if ($matchPos4_1===false) {
            $matchPos4=$matchPos4_2;
            $matchPos4_len_add=-1;
        } elseif ($matchPos4_2===false) {
            $matchPos4=$matchPos4_1;
            $matchPos4_len_add=0;
        } else {
            if ($matchPos4_1<$matchPos4_2) {$matchPos4=$matchPos4_1; $matchPos4_len_add=0;}
            if ($matchPos4_2<$matchPos4_1) {$matchPos4=$matchPos4_2; $matchPos4_len_add=-1;}
        }
        

    }
    
    
    
    

        if ($matchPos4!==false) {
            

            $matchPos6=strpos($html, "class=\"css-1lm6xv9-StyledTimestamp", $matchPos3+1);
            if ($matchPos6<$matchPos4) {
                $matchPos4=false;
                $description="";
            } else {

                $matchPos5=strpos($html, "</p>", $matchPos4+1);
                $description=substr($html, $matchPos4+strlen("class=\"css-13yxbmi-Summary e1tfxkuo4\">")+$matchPos4_len_add, $matchPos5-$matchPos4-strlen("class=\"css-13yxbmi-Summary e1tfxkuo4\">")-$matchPos4_len_add);
            }
        }
        $xml2=$xml2."\n            <description><![CDATA[".html_entity_decode($description)."]]></description>";
        


        // pubDate
        $matchPos6=strpos($html, "class=\"css-1lm6xv9-StyledTimestamp", $matchPos5+1);
        $matchPos7=strpos($html, "</time>", $matchPos6+strlen("class=\"css-1lm6xv9-StyledTimestamp")+1);
        $pubDate=substr($html, $matchPos6+strlen("class=\"css-1lm6xv9-StyledTimestamp e4zesg50\">"), $matchPos7-$matchPos6-strlen("class=\"css-1lm6xv9-StyledTimestamp e4zesg50\">"));
//        date_default_timezone_set('UTC');
//        $date = new DateTime();
//        $date->setTimestamp(strtotime($pubDate));

        // links
//        $matchPos8=strpos($html, "<a href=\"", $matchPos7+1);
//        $matchPos9=strpos($html, "\"", $matchPos8+strlen("<a href=\"")+1);
//        $link=substr($html, $matchPos8+strlen("<a href=\""), $matchPos9-$matchPos8-strlen("<a href=\""));
        if (substr($link,0,21) == "https://www.bbc.co.uk" || substr($link,0,19) == "https://www.bbc.com") {
            $xml2=$xml2."\n            <link>".$link."</link>";
        } else {
            $xml2=$xml2."\n            <link>https://www.bbc.com".$link."</link>";            
        }
        $xml2=$xml2."\n            <guid isPermaLink=\"true\">https://www.bbc.com".$link."</guid>";        
        $xml2=$xml2."\n            <pubDate>".$pubDate."</pubDate>";

        
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

        
        $xml2=$xml2."\n        </item>";        

        // next cycle
//        $matchPos1=strpos($html , "class=\"Headline-sc-1dvfmi3-3 dnWhDh\">", $matchPos1+1);

    }

    $xml=$xml."\n        <ttl>".($recordsNum)."</ttl>";
    $xml=$xml.$xml2;
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
    if($xmlDoc->loadXML($xml)) {
        echo($xmlDoc->saveXML());
    }else{
        echo $xml;
    }




} else {
    
    
 // version 1
    $xmlDoc = new DOMDocument();
    $html=getHtml($xml);
    if($xmlDoc->loadXML($html)) {
        echo($xmlDoc->saveXML());
    }else{
        echo $html;
    }
  
 
    // version 2
/*
    $xmlDoc = new DOMDocument();
    $xmlDoc->load($xml);
    echo($xmlDoc->saveXML());
*/
}
//echo($xmlDoc->saveXML());


?>