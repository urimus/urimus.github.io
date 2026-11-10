<?php
$logDir = __DIR__ . '/logs';
$logFile = $logDir . '/errors.log';
if (!is_dir($logDir)) mkdir($logDir, 0755, true);

ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', $logFile);
error_reporting(E_ALL);

set_error_handler(function ($severity, $message, $file, $line) {
	if (!(error_reporting() & $severity)) return false;

	$type = match ($severity) {
		E_NOTICE, E_USER_NOTICE => 'NOTICE',
		E_WARNING, E_USER_WARNING => 'WARNING',
		default => 'OTHER',
	};

	error_log(sprintf('[%s] %s in %s:%d%s', $type, $message, basename($file), $line, PHP_EOL), 3, $GLOBALS['logFile']);

	return true;
});

register_shutdown_function(function () use ($logFile) {
	$e = error_get_last();
	if (!$e) return;

	if ($e['type'] & (E_ERROR | E_PARSE | E_CORE_ERROR | E_COMPILE_ERROR | E_RECOVERABLE_ERROR)) {
		error_log(sprintf('[FATAL] %s in %s:%d%s', $e['message'], basename($e['file']), $e['line'], PHP_EOL), 3, $logFile);

		if (!headers_sent()) {
			http_response_code(500);
			header('X-PHP-Error: 1');
			header('X-PHP-Message: ' . rawurlencode($e['message']));
			header('X-PHP-File: ' . rawurlencode(basename($e['file'])));
			header('X-PHP-Line: ' . $e['line']);
		}
		exit;
	}
});
