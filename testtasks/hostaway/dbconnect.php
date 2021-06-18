<?php

function OpenCon()
 {
    // insert your data here
 $dbhost = "sql305.mipropia.com";
 $dbuser = "mipc_28915967";
 $dbpass = "Weed4Good";
 $db = "mipc_28915967_db";
 $conn = new mysqli($dbhost, $dbuser, $dbpass,$db) or die("Connect failed: %s\n". $conn -> error);
 
 return $conn;
 }
 
function CloseCon($conn)
 {
 $conn -> close();
 }
?>