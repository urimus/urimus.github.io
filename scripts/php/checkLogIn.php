<?php

include 'errorProcessing.php';

// check if logged in
if (session_status() !== PHP_SESSION_ACTIVE) session_start();
exit((($_SESSION['login'] ?? null) === 'OK') ? '1' : '0');
