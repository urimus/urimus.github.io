<?php
// check if logged in
if (session_status() !== PHP_SESSION_ACTIVE) {
	session_start();
}
if (($_SESSION['login'] ?? null) !== 'OK') {
    exit('not logged in');
}

include 'secure.php';
include 'errorProcessing.php';

//get the filename GET
$filename=$_GET["filename"];
$filename="../../".$filename; // add path from this script to root

if (!is_file($filename) || !canReadPath($filename)) die("Unable to open file! - '".$filename."'");
$file_contents=file_get_contents($filename);
echo $file_contents;
