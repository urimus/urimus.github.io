<?
if (!isset($_SESSION)) {
    session_start();
}
$out = array();
if (isset($_SESSION['login']) && $_SESSION['login'] == "OK") {
	$out[] = '1';
} else {
	$out[] = '0';
}
echo (json_encode($out));
?>