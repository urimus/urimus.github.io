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
$filename=$_GET["filename"];

if (unlink("../../".$filename)) {
    echo 1;
} else {
    echo 0;
}


?>