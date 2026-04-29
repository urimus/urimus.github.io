<?php

include 'noCache.php';
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

//get the q parameter from URL
$q=$_GET["q"];
$q="../../".$q; // add path from this script to root

$files = glob($q) ?: [];
foreach ($files as $file) {
	if (!is_file($file)) continue;
	if (!canReadPath($file)) continue;
	echo "1";
	exit;
}
echo "0";
