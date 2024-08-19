<?


// check if logged in
if (!isset($_SESSION)) {
    session_start();
}
if (!(isset($_SESSION['login']) && $_SESSION['login'] == "OK")) {
	echo "not logged in";
	return;
}


/*
 function rrmdir($dir) { 
   if (is_dir($dir)) { 
     $objects = scandir($dir);
     foreach ($objects as $object) { 
       if ($object != "." && $object != "..") { 
         if (is_dir($dir. DIRECTORY_SEPARATOR .$object) && !is_link($dir."/".$object))
           rrmdir($dir. DIRECTORY_SEPARATOR .$object);
         else
           unlink($dir. DIRECTORY_SEPARATOR .$object); 
       } 
     }
     rmdir($dir); 
   } 
 }
rrmdir('../../images/icons/t');
*/

//get the filename, ... from POST
$path=$_GET["path"];
$createFolder=$_GET["createFolder"];


// create folder if necessary
if ($createFolder && !is_dir("../../".$path."/")) mkdir("../../".$path."/", 0777, true);

copy($_FILES['file']['tmp_name'], "../../".$path."/".$_FILES['file']['name']);

echo 1;
return;


?>