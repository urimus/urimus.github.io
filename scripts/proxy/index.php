<?php

$allowedOrigins = [
	"https://urimus.wasmer.app",
	"https://urimus2.wasmer.app",
	"https://urimus.github.io",
	"http://urimus2.royalwebhosting.net"
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$currentHost = $_SERVER['HTTP_HOST'] ?? '';

// --- CORS ВСЕГДА ---
function sendCors($origin, $allowedOrigins, $currentHost) {
	$originHost = parse_url($origin, PHP_URL_HOST);
	$allowed = false;

	foreach ($allowedOrigins as $allowedOrigin) {
		$allowedHost = parse_url($allowedOrigin, PHP_URL_HOST);
		if (strcasecmp($originHost, $allowedHost) === 0) {
			$allowed = true;
			break;
		}
	}

	if (!$allowed && strcasecmp($originHost, $currentHost) === 0) {
		$allowed = true;
	}

	if ($allowed && $origin) {
		header("Access-Control-Allow-Origin: " . $origin);
	} else {
		header("Access-Control-Allow-Origin: *");
	}

	header("Access-Control-Allow-Methods: GET, OPTIONS");
	header("Access-Control-Allow-Headers: Content-Type");
	header("Vary: Origin");

	return $allowed;
}

$allowed = sendCors($origin, $allowedOrigins, $currentHost);

// --- PREFLIGHT ---
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
	http_response_code(204);
	exit;
}

// --- ORIGIN CHECK ---
if (!$allowed && $origin) {
	http_response_code(403);
	echo "Origin not allowed";
	exit;
}

// --- URL ---
if (!isset($_GET['url'])) {
	http_response_code(400);
	echo "URL parameter is required";
	exit;
}

$url = trim($_GET['url']);

if (!preg_match('#^https?://#i', $url)) {
	$url = 'https://' . $url;
}

if (!filter_var($url, FILTER_VALIDATE_URL)) {
	http_response_code(400);
	echo "Invalid URL";
	exit;
}

// --- SSRF защита ---
$host = parse_url($url, PHP_URL_HOST);
$ips = gethostbynamel($host) ?: [];

$hasPublic = false;
foreach ($ips as $ip) {
	if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
		$hasPublic = true;
		break;
	}
}

if (!$hasPublic) {
	http_response_code(403);
	echo "Access to local/private IPs is forbidden";
	exit;
}

// --- CURL (усиленный под Yahoo) ---
$ch = curl_init();

curl_setopt_array($ch, [
	CURLOPT_URL => $url,
	CURLOPT_RETURNTRANSFER => true,
	CURLOPT_FOLLOWLOCATION => true,
	CURLOPT_TIMEOUT => 20,

	// поддержка сжатия
	CURLOPT_ENCODING => 'gzip, deflate, br',

	// браузерный User-Agent
	CURLOPT_USERAGENT => "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/122 Safari/537.36",

	CURLOPT_HTTPHEADER => [
		"Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
		"Accept-Language: en-US,en;q=0.9",
		"Cache-Control: no-cache",
		"Pragma: no-cache",
		"Upgrade-Insecure-Requests: 1"
	],

	// иногда нужно для Yahoo / CDN
	CURLOPT_SSL_VERIFYPEER => false,
	CURLOPT_SSL_VERIFYHOST => false,

	// пробуем HTTP/2
	CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_2_0
]);

$response = curl_exec($ch);

// --- CURL ERROR ---
if ($response === false) {
	http_response_code(500);
	echo "CURL ERROR: " . curl_error($ch);
	curl_close($ch);
	exit;
}

$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$contentType = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);

curl_close($ch);

// --- STATUS ---
http_response_code($httpCode ?: 500);

// --- CONTENT TYPE ---
if ($contentType) {
	header("Content-Type: " . $contentType);
}

// --- OUTPUT ---
echo $response;