<?php
include 'headers.php';
include 'secure.php';
include 'errorProcessing.php';

// check if logged in
if (session_status() !== PHP_SESSION_ACTIVE) {
	session_start();
}
if (($_SESSION['login'] ?? null) !== 'OK') {
	echo "not logged in";
	exit;
}

//get the filename GET
$filename=$_GET["filename"];
$filename="../../".$filename; // add path from this script to root

if (!is_file($filename) || !canReadPath($filename)) {
	echo "Unable to open file! - '".$filename."'";
	exit;
}
$file_contents=file_get_contents($filename);
echo $file_contents;
