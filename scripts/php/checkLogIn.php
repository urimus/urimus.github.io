<?
if (!isset($_SESSION)) {
    session_start();
}
if (isset($_SESSION['login']) && $_SESSION['login'] == "OK") {
	echo 1;
} else {
	echo 0;
}
?>