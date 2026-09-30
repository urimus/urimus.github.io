<?php

include 'headers.php';

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
rrmdir($q);


 function rrmdir($dir, $delDir=false) { 
   if (is_dir($dir)) { 
     $objects = scandir($dir); 
     foreach ($objects as $object) { 
       if ($object != "." && $object != "..") { 
         if (is_dir($dir."/".$object))
           rrmdir($dir."/".$object, true);
         else
           unlink($dir."/".$object); 
       } 
     }
     if ($delDir) rmdir($dir); 
   }
 }
