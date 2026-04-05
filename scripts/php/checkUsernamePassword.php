<?php

include 'errorProcessing.php';

//get the parameters from URL
$username=$_GET["username"];
$date = $_GET['date'] ?? '';

if ($username=="b16_21398790") {
	if (session_status() !== PHP_SESSION_ACTIVE) session_start();

	$logDir = __DIR__ . '/logs';
	$logFile = $logDir . '/errors.log';
	if (!is_dir($logDir)) {
		mkdir($logDir, 0755, true);
	}
	file_put_contents($logFile, "=== Log Started: " . $date . " ===" . PHP_EOL);

	$_SESSION['login']="OK";
	echo 1;
} else {
	echo 0;
}
