<?php

//get the q parameter from URL
$q=$_GET["q"];
$q="../../".$q; // add path from this script to root

include 'secure.php';
include 'errorProcessing.php';

$files = glob($q) ?: [];
foreach ($files as $file) {
	if (!is_file($file)) continue;
	if (!canReadPath($file)) continue;
	echo 1;
	exit;
}
echo 0;
