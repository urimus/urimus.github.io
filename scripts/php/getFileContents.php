<?

// check if logged in
if (!isset($_SESSION)) {
    session_start();
}
if (!(isset($_SESSION['login']) && $_SESSION['login'] == "OK")) {
	echo "not logged in";
	return;
}


//get the filename GET
$filename=$_GET["filename"];
$filename="../../".$filename; // add path from this script to root

if (!file_exists($filename) || !is_readable($filename)) die("Unable to open file! - '".$filename."'");
$file_contents=file_get_contents($filename);
echo $file_contents;

?>