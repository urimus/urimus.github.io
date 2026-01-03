<?php

function secureFilename(string $filename) {
	$baseDir = realpath(__DIR__ . '/../../');
	if ($baseDir === false) return false;
	$filePath = realpath($filename);
	if ($filePath === false) return false;
	$baseDir = rtrim($baseDir, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR;
	return strpos($filePath, $baseDir) === 0;
}

?>