<?php
$BASE_DIR = realpath(__DIR__ . '/../../');

function securedAddPath($q){
	global $BASE_DIR;
	if (strpos($q, '..') !== false) {
		http_response_code(400);
		exit;
	}
	if (!preg_match('~^[a-zA-Z0-9_\-./*]+$~', $q)) {
		http_response_code(400);
		exit;
	}
	return $BASE_DIR . '/' . ltrim($q, '/');
}
function secureFilename($filename){
	global $BASE_DIR;
	$real = realpath($filename);
	if ($real === false || strpos($real, $BASE_DIR) !== 0) {
		return false;
	}
	return true;
}
?>