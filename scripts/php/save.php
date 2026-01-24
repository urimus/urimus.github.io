<?php
// check if logged in
if (session_status() !== PHP_SESSION_ACTIVE) {
	session_start();
}
if (($_SESSION['login'] ?? null) !== 'OK') {
    exit('not logged in');
}


//get the filename, q, encoding and wobom from POST
$filename=$_POST["filename"];
$filename="../../".$filename; // add path from this script to root
$data=$_POST["q"];
$encoding=$_POST["encoding"];

include 'errorProcessing.php';
include 'saveClass.php';
include 'detectEncodingClass.php';

$out = array();

$modified = Save::saveFile($filename, $encoding, $data);
$first10bytes=DetectEncoding::first10bytes($filename);

$out["modified"]=$modified;
$out["first10bytes"]=$first10bytes;
echo (json_encode($out)); 
