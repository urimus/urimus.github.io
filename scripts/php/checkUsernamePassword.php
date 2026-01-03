<?
//get the username parameter from URL
$username=$_GET["username"];

if ($username=="b16_21398790") {
	if (!isset($_SESSION)) {
		session_start();
	}
	$_SESSION['login']="OK";
	echo 1;
} else {
	echo 0;
}
?>