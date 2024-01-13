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


// media 2


$out = array();


//$q=str_replace("www.bbc.co.uk", "www.bbc.com", $q);

        $htmlSub=getHtml($q);

        $matchPos_2=strpos($htmlSub, "property=\"og:image\" content=\"");
        $matchPos_3=strpos($htmlSub, "\"", $matchPos_2+strlen("property=\"og:image\" content=\"")+1);
        $mediaURL=substr($htmlSub, $matchPos_2+strlen("property=\"og:image\" content=\""), $matchPos_3-$matchPos_2-strlen("property=\"og:image\" content=\""));
        curl_setopt($mediaURL, CURLOPT_NOBODY, true);
        curl_exec($ch);
        $retcode = curl_getinfo($mediaURL, CURLINFO_HTTP_CODE);
        // $retcode >= 400 -> not found, $retcode = 200, found.
        if ($retcode==400) $mediaURL="icons/no_image2.jpg";
        curl_close($ch);



//$out['$htmlSub']=$htmlSub;

        $out['url']=$mediaURL;


        $matchPos_2=strpos($htmlSub, "property=\"og:image:alt\" content=\"");
        $matchPos_3=strpos($htmlSub, "\"", $matchPos_2+strlen("property=\"og:image:alt\" content=\"")+1);
        $mediaComment=substr($htmlSub, $matchPos_2+strlen("property=\"og:image:alt\" content=\""), $matchPos_3-$matchPos_2-strlen("property=\"og:image:alt\" content=\""));

        $out['comment']=$mediaComment;

        

//echo ($q); 
echo (json_encode($out)); 


?>