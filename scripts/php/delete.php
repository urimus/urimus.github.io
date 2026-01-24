<?php

include 'errorProcessing.php';


// check if logged in
if (session_status() !== PHP_SESSION_ACTIVE) {
	session_start();
}
if (($_SESSION['login'] ?? null) !== 'OK') {
    exit('not logged in');
}

//get the filename, q, encoding and wobom from POST
$filename=$_GET["filename"];
$filename="../../".$filename; // add path from this script to root

if (unlink($filename)) {
    echo 1;
} else {
    echo 0;
}
