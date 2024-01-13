<?
//get the username parameter from URL
$username=$_GET["username"];

$out = array();
if ($username=="b16_21398790") {
	if (!isset($_SESSION)) {
		session_start();
	}
	$_SESSION['login']="OK";
	$out[] = '1';
} else {
	$out[] = '0';
}
echo (json_encode($out));
?>