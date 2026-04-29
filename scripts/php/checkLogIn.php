<?php

include 'headers.php';
include 'errorProcessing.php';

// check if logged in
if (session_status() !== PHP_SESSION_ACTIVE) session_start();
echo ($_SESSION['login'] ?? '') === 'OK' ? '1' : '0';
exit;
