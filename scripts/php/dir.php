<?php

//get the q parameter from URL
$q = $_GET['q'];
$qorig=$q;
$q="../../".$q; // add path from this script to root
$fileToShow=-1;
if (isset($_GET["fileToShow"])) $fileToShow=$_GET["fileToShow"];

include 'secure.php';
include 'errorProcessing.php';
include 'detectEncodingClass.php';

$out = array();
$c=0;

function processFile($filename, $c, $fileToShow){
	// pathinfo:
	// ['basename'] - Name + ext
	// ['extension'] - ext
	// ['filename'] - Name
	// ['dirname'] - Directory with LEADING ../
	$out_l = pathinfo($filename);
	$dirTrim=ltrim(ltrim($out_l["dirname"], "\.\./"), "\.\./");
	$out_l["correctDir"]=(strcmp($dirTrim, "") != 0) ? $dirTrim."/" : "";  // without "../../" in the beginning and with "/" after, if exists
	
	// DetectEncoding is very slow, for fileToShow only
	if ($fileToShow!=-1 && $c==$fileToShow) {
		$out_l["modified"]=filemtime($filename);
		$correctDir2=(strcmp($out_l["dirname"], "") != 0) ? $out_l["dirname"]."/" : "";
		$encoding_array = DetectEncoding::from_file($correctDir2.$out_l["basename"]);
		if (!isset($encoding_array[0])) $encoding_array[0]="Windows-1252";
		$out_l["encoding"]=$encoding_array[0];
		$out_l["first10bytes"]=DetectEncoding::first10bytes($correctDir2.$out_l["basename"]);
	}
    return $out_l;
}

foreach (glob($q, GLOB_BRACE) as $filename) {
	if (!is_file($filename)) continue;
    if (!canReadPath($filename)) continue;
	$out[] = processFile($filename, $c, $fileToShow);
	$c++;
}

if ($c==0) { // try search inside files
	foreach (glob("../../*", GLOB_BRACE) as $filename) {
		if (!is_file($filename)) continue;
		if (!canReadPath($filename)) continue;
		$file_contents=file_get_contents($filename);
		if ($file_contents===false) continue;
		$matchPos = strpos($file_contents, $qorig);
		if ($matchPos!==false) {
			$out[] = processFile($filename, $c, $fileToShow);
			$c++;
		}
	}
}

echo (json_encode($out)); 
