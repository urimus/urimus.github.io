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
$filename="../../".$filename; // add path from this script to root
$fileNum=$_GET["fileNum"];
$replaceWhat=$_GET["replaceWhat"];
$replaceTo=$_GET["replaceTo"];
$filesProcessed=$_GET["filesProcessed"];


include 'saveClass.php';
include 'detectEncodingClass.php';

$file_contents=file_get_contents($filename) or die("Unable to open file! - '".$filename."'");
// ---------- log -------- //
date_default_timezone_set('UTC');
if ($fileNum==0) {
    file_put_contents("../logs/replace.log", "\n-------------- Replacement: \n".$replaceWhat."\n to \n".$replaceTo."\n".date("dS")." of ".date("F, Y, H:i:s")." UTC --------------\n");//, FILE_APPEND | LOCK_EX);    
}
// ---------- end of log -------- //


$matchPos = strpos($file_contents, $replaceWhat);
// new



$lineNrs = array();
$statisticsTimesReplaced=0;
while ($matchPos!==false) {
	$statisticsTimesReplaced++;
	$lineNrs[]=substr_count(substr($file_contents, 0, $matchPos),"\n");

	$file_contents=substr($file_contents, 0, $matchPos).$replaceTo.substr($file_contents, $matchPos+strlen($replaceWhat));
	$matchPos = strpos($file_contents, $replaceWhat, $matchPos+strlen($replaceTo));



}
$modified=0;


if ($statisticsTimesReplaced>0) {
	$encoding_array = DetectEncoding::from_file($filename);
	if (!isset($encoding_array[0])) $encoding_array[0]="Windows-1252";
    $modified = Save::saveFile($filename, $encoding_array[0], $file_contents);
} else {
    $modified=filemtime($filename);
}
$first10bytes=DetectEncoding::first10bytes($filename);

$out = array();
$out['modified']=$modified;
$out['statisticsTimesReplaced']=$statisticsTimesReplaced;
$out["first10bytes"]=$first10bytes;

// ---------- log -------- //
$replacementInfo="";
if ($statisticsTimesReplaced>0) {
    $filesProcessed=$filesProcessed+1;
    $replacementInfo=" - ".$statisticsTimesReplaced." Replacement(s), Line #(s) -";
    $replacementInfo=$replacementInfo." ".$lineNrs[0];
    for ($i = 1; $i < $statisticsTimesReplaced; $i++) {
        $replacementInfo=$replacementInfo.", ".$lineNrs[$i];
    } 
    file_put_contents("../logs/replace.log", $filesProcessed.". Processed - ".substr($filename, 6).$replacementInfo.".\n", FILE_APPEND | LOCK_EX);
} else {
    file_put_contents("../logs/replace.log", "-. Skipped - ".substr($filename, 6).".\n", FILE_APPEND | LOCK_EX);
}

// ---------- end of log -------- //
echo (json_encode($out)); 

?>