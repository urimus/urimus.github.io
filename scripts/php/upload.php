<?


// check if logged in
if (!isset($_SESSION)) {
    session_start();
}
if (!(isset($_SESSION['login']) && $_SESSION['login'] == "OK")) {
	echo "not logged in";
	return;
}


//get the path, createFolder from POST
$path=$_GET["path"];
$path="../../".$path; // add path from this script to root
$createFolder=$_GET["createFolder"];


// create folder if necessary
if ($createFolder && !is_dir($path."/")) mkdir($path."/", 0777, true);

copy($_FILES['file']['tmp_name'], $path."/".$_FILES['file']['name']);

echo 1;

?>