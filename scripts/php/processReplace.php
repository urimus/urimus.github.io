<?php
// check if logged in
if (session_status() !== PHP_SESSION_ACTIVE) {
	session_start();
}
if (($_SESSION['login'] ?? null) !== 'OK') {
    exit('not logged in');
}


//get the filename, replaceWhat, replaceTo, encoding from GET
$filename=$_GET["filename"];
$filename="../../".$filename; // add path from this script to root
$fileNum=$_GET["fileNum"];
$replaceWhat=$_GET["replaceWhat"];
$replaceTo=$_GET["replaceTo"];
$filesProcessed=$_GET["filesProcessed"];
$date = $_GET['date'] ?? '';

include 'secure.php';
include 'errorProcessing.php';
include 'saveClass.php';
include 'detectEncodingClass.php';

if (!is_file($filename) || !canReadPath($filename)) die("Unable to open file! - '".$filename."'");
$file_contents=file_get_contents($filename);

// ---------- log -------- //
if ($fileNum==0) {
    file_put_contents("logs/replace.log", "=== Replace log : Replacement: ".PHP_EOL.$replaceWhat.PHP_EOL." to ".PHP_EOL.$replaceTo.PHP_EOL.$date." ===".PHP_EOL);//, FILE_APPEND | LOCK_EX);    
}
// ---------- end of log -------- //


$matchPos = strpos($file_contents, $replaceWhat);

if ($matchPos===false) { // lines normalization
	$file_contents = str_replace("\r\n", "\n", $file_contents);
	$replaceWhat = str_replace("\r\n", "\n", $replaceWhat);
	$replaceTo = str_replace("\r\n", "\n", $replaceTo);
	$matchPos = strpos($file_contents, $replaceWhat);
}

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
    file_put_contents("logs/replace.log", $filesProcessed.". Processed - ".substr($filename, 6).$replacementInfo.".".PHP_EOL, FILE_APPEND | LOCK_EX);
} else {
    file_put_contents("logs/replace.log", "-. Skipped - ".substr($filename, 6).".".PHP_EOL, FILE_APPEND | LOCK_EX);
}

// ---------- end of log -------- //
echo (json_encode($out)); 
