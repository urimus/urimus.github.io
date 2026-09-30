<?php

function canReadPath($path) {
	$baseDir = realpath(dirname(__DIR__, 2));
	if ($baseDir === false) return false;
	$realPath = realpath($path);
	if ($realPath === false || !is_readable($realPath)) return false;
	$baseDir = rtrim($baseDir, DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR;
	return strpos($realPath, $baseDir) === 0;
}
