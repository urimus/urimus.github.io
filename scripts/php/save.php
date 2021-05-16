<?


// check if logged in
if (!isset($_SESSION)) {
    session_start();
}
if (!(isset($_SESSION['login']) && $_SESSION['login'] == "OK")) {
	echo "not logged in";
	return;
}


//get the filename, q, encoding and wobom from POST
$filename=$_POST["filename"];
$data=$_POST["q"];
$encoding=$_POST["encoding"];

include 'saveClass.php';



$modified = Save::saveFile("../../".$filename, $encoding, $data);
echo $modified;



?>