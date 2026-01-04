<?php

//get the q parameter from URL
$q=$_GET["q"];
$q="../../".$q; // add path from this script to root

include 'secure.php';

$dirs = glob($q, GLOB_ONLYDIR) ?: [];

foreach ($dirs as $dir) {
	if (!canReadPath($dir)) continue;
	echo 1;
	exit;
}
echo 0;
