<?


// check if logged in
if (!isset($_SESSION)) {
    session_start();
}
if (!(isset($_SESSION['login']) && $_SESSION['login'] == "OK")) {
	echo "not logged in";
	return;
}


//get the filename, ... from POST
$path=$_GET["path"];
$filename=$_GET["filename"];
$createFolder=$_GET["createFolder"];


// create folder if necessary
if ($createFolder && !is_dir("../../".$path."/")) mkdir("../../".$path."/", 0777, true);

copy($_FILES['file']['tmp_name'], "../../".$path."/".$filename);

echo 1;
return;


?>