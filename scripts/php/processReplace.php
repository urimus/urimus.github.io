<?

// check if logged in
if (!isset($_SESSION)) {
    session_start();
}
if (!(isset($_SESSION['login']) && $_SESSION['login'] == "OK")) {
	echo "not logged in";
	return;
}

//get the filename, replaceWhat, replaceTo, encoding from GET
$filename=$_GET["filename"];
$fileNum=$_GET["fileNum"];
$replaceWhat=$_GET["replaceWhat"];
$replaceTo=$_GET["replaceTo"];

include 'saveClass.php';
$file_contents=file_get_contents($filename) or die("Unable to open file! - '".$filename."'");
// ---------- log -------- //
date_default_timezone_set('UTC');
if ($fileNum==0) {
    file_put_contents("../logs/replace.log", "\n-------------- Replacement ".$replaceWhat." -> ".$replaceTo.", ".date("dS")." of ".date("F, Y, H:i:s")." UTC --------------\n");//, FILE_APPEND | LOCK_EX);    
}
// ---------- end of log -------- //

// prev - 
 $matchPos = strpos($file_contents, $replaceWhat);
// new


//$matchPos = strpos($file_contents, "id=\"menu_");




$lineNrs = array();
$statisticsTimesReplaced=0;
while ($matchPos!==false) {
	$statisticsTimesReplaced++;
	$lineNrs[]=substr_count(substr($file_contents, 0, $matchPos),"\n");


/*
    // remove prev style=
    $prevstylepos=strrpos(substr($file_contents, 0, $matchPos), "style = cursor:default", -1);
    $file_contents=substr($file_contents, 0, $prevstylepos).substr($file_contents, $matchPos);

    $opdivendpos=strpos($file_contents, ">", $matchPos+1);
    $csdivpos=strpos($file_contents, "</div>", $opdivendpos+1);
    $nbspsearch=substr($file_contents, $matchPos, $csdivpos-$matchPos);
    $nbspcount=substr_count($nbspsearch, "&nbsp;");
    
   

    if ($nbspcount>0) {
        $nbsppos=strpos($file_contents, "&nbsp;", $opdivendpos+1);

        while ($nbsppos!==false) {
            $file_contents=substr($file_contents, 0, $nbsppos).substr($file_contents, $nbsppos+6);
            $nbsppos=strpos($file_contents, "&nbsp;", $nbsppos);
            if ($nbsppos>$csdivpos) break;
        }
        $file_contents=substr($file_contents, 0, $opdivendpos)."\n		  style=\"padding-left: ".($nbspcount*5)."px;\"".substr($file_contents, $opdivendpos);
    }

    $matchPos = strpos($file_contents, "id=\"menu_", $matchPos+1);
*/

	$file_contents=substr($file_contents, 0, $matchPos).$replaceTo.substr($file_contents, $matchPos+strlen($replaceWhat));
	$matchPos = strpos($file_contents, $replaceWhat, $matchPos+strlen($replaceTo));



}
$modified=0;
if ($statisticsTimesReplaced>0) {
    $modified = Save::saveFile($filename, null, $file_contents);
} else {
    $modified=filemtime($filename);
}
$out = array();
$out['modified']=$modified;
$out['statisticsTimesReplaced']=$statisticsTimesReplaced;

// ---------- log -------- //
$status="Skipped";
$replacementInfo="";
if ($statisticsTimesReplaced>0) {
    $status="Processed";
    $replacementInfo=" - ".$statisticsTimesReplaced." Replacement(s), Line #(s) -";
    $replacementInfo=$replacementInfo." ".$lineNrs[0];
    for ($i = 1; $i < $statisticsTimesReplaced; $i++) {
        $replacementInfo=$replacementInfo.", ".$lineNrs[$i];
    } 
}
file_put_contents("../logs/replace.log", ($fileNum+1).". ".$status." - ".substr($filename, 6).$replacementInfo.".\n", FILE_APPEND | LOCK_EX);
// ---------- end of log -------- //
echo (json_encode($out)); 

?>