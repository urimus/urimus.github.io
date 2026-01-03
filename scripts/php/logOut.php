<?
if (!isset($_SESSION)) {
    session_start();
}
$_SESSION['login']="";
unset($_SESSION['login']);

?>