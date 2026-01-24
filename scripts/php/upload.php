<?php
// check if logged in
if (session_status() !== PHP_SESSION_ACTIVE) {
	session_start();
}
if (($_SESSION['login'] ?? null) !== 'OK') {
    exit('not logged in');
}


//get the path, createFolder from POST
$path=$_GET["path"];
$path="../../".$path; // add path from this script to root
$createFolder=$_GET["createFolder"];

include 'errorProcessing.php';

// create folder if necessary
if ($createFolder && !is_dir($path."/")) mkdir($path."/", 0777, true);

copy($_FILES['file']['tmp_name'], $path."/".$_FILES['file']['name']);

echo 1;
