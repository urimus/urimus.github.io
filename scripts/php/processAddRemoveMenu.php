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
$action=$_GET["action"];
$fileNum=$_GET["fileNum"];
$date = $_GET['date'] ?? '';

include 'secure.php';
include 'errorProcessing.php';
include 'saveClass.php';
include 'detectEncodingClass.php';


// ---------- log -------- //
if ($fileNum==0) {
    file_put_contents("logs/".$action.".log", "=== Add/Remove Menu log: " .$date." ===".PHP_EOL);//, FILE_APPEND | LOCK_EX);    
}
// ---------- end of log -------- //

if (substr($filename, -10)=="index.html") { // skip
	$out = array();
	$out['modified']=filemtime($filename);
	$out['statisticsTimesReplaced']=0;
	
	// ---------- log -------- //
	$status="Skipped";
	$replacementInfo="";
	file_put_contents("logs/".$action.".log", ($fileNum+1).". ".$status." - ".substr($filename, 6).$replacementInfo.".".PHP_EOL, FILE_APPEND | LOCK_EX);
	// ---------- end of log -------- //
	
	echo (json_encode($out)); 
	return;
}

if (!is_file($filename) || !canReadPath($filename)) die("Unable to open file! - '".$filename."'");
$file_contents=file_get_contents($filename);


/// --------------- on the top
$matchPos = strpos($file_contents, "var menuHeight=");
$matchPos2 = strpos($file_contents, "*", $matchPos);
$matchPos3 = strpos($file_contents, ";", $matchPos2);
$menuHeightInit1=substr($file_contents, $matchPos+strlen("var menuHeight="), $matchPos2-$matchPos-strlen("var menuHeight="));
$menuHeightInit2=substr($file_contents, $matchPos+strlen("var menuHeight=")+strlen($menuHeightInit1)+1, $matchPos3-$matchPos2-1);

$menuHeightInt1=intval($menuHeightInit1);
$menuHeightInt2=intval($menuHeightInit2);
if ($action=="addMenu") $menuHeightInt2_new=$menuHeightInit2+1;
if ($action=="removeMenu") $menuHeightInt2_new=$menuHeightInit2-1;

$lineNrs = array();

$statisticsTimesReplaced=0;
if ($matchPos!==false) {
	$statisticsTimesReplaced++;
	$lineNrs[]=substr_count(substr($file_contents, 0, $matchPos),"\n");
	$file_contents=substr($file_contents, 0, $matchPos)."var menuHeight=".$menuHeightInt1."*".$menuHeightInt2_new.substr($file_contents, $matchPos3);
}

$menuHeightInt=$menuHeightInt1*$menuHeightInt2_new;

// ---------------- second part
$matchPos4 = strpos($file_contents, "style=\"height:");
$matchPos5 = strpos($file_contents, "px;", $matchPos4);
$menuHeightInitBottom1=substr($file_contents, $matchPos4+strlen("style=\"height:"), $matchPos5-$matchPos4-strlen("style=\"height:"));
$menuHeightIntBottom1=intval($menuHeightInitBottom1);

if ($action=="addMenu") $menuHeightInt=$menuHeightIntBottom1+$menuHeightInt1;
if ($action=="removeMenu") $menuHeightInt=$menuHeightIntBottom1-$menuHeightInt1;



if ($matchPos4!==false) {
	$statisticsTimesReplaced++;
	$lineNrs[]=substr_count(substr($file_contents, 0, $matchPos4),"\n");
	$file_contents=substr($file_contents, 0, $matchPos4)."style=\"height:".$menuHeightInt.substr($file_contents, $matchPos5);
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
$status="Skipped";
$replacementInfo="";
if ($statisticsTimesReplaced>0) {
    if ($action=="addMenu") $status="Added Menu";
    if ($action=="removeMenu") $status="Removed Menu";
    $replacementInfo=" - ".$statisticsTimesReplaced." Replacement(s), Line #(s) -";
    $replacementInfo=$replacementInfo." ".$lineNrs[0];
    for ($i = 1; $i < $statisticsTimesReplaced; $i++) {
        $replacementInfo=$replacementInfo.", ".$lineNrs[$i];
    } 
}
file_put_contents("logs/".$action.".log", ($fileNum+1).". ".$status." - ".substr($filename, 6).$replacementInfo.".".PHP_EOL, FILE_APPEND | LOCK_EX);
// ---------- end of log -------- //


echo (json_encode($out)); 
