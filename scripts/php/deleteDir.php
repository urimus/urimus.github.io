<?php
//get the q parameter from URL
$q=$_GET["q"];
rrmdir($q);


 function rrmdir($dir, $delDir=0) { 
   if (is_dir($dir)) { 
     $objects = scandir($dir); 
     foreach ($objects as $object) { 
       if ($object != "." && $object != "..") { 
         if (is_dir($dir."/".$object))
           rrmdir($dir."/".$object, 1);
         else
           unlink($dir."/".$object); 
       } 
     }
     if ($delDir==1) rmdir($dir); 
   }
 }
