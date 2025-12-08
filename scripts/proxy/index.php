<?php
$allowedOrigins = [
	"https://urimus.wasmer.app",
	"https://urimus.github.io",
	"http://urimus2.royalwebhosting.net",
	"https://proxy.wasmer.app"
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? ($_SERVER['HTTP_REFERER'] ?? '');
if ($origin === '') {
	$origin = 'https://proxy.wasmer.app';
}

$originHost = parse_url($origin, PHP_URL_HOST);
$allowed = false;
foreach ($allowedOrigins as $allowedOrigin) {
	$allowedHost = parse_url($allowedOrigin, PHP_URL_HOST);
	if (strcasecmp($originHost, $allowedHost) === 0) {
		$allowed = true;
		break;
	}
}

if (!$allowed) {
	http_response_code(403);
	exit("Origin not allowed");
}

if (!isset($_GET['url'])) {
	http_response_code(400);
	exit("URL parameter is required");
}

$url = trim($_GET['url']);

if (!preg_match('#^https?://#i', $url)) {
	$url = 'https://' . $url;
}

if (!filter_var($url, FILTER_VALIDATE_URL)) {
	http_response_code(400);
	exit("Invalid URL");
}

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
	exit("Access to local/private IPs is forbidden");
}

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0");
curl_setopt($ch, CURLOPT_TIMEOUT, 10);
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_ENCODING, '');

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$contentType = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);

if (curl_errno($ch)) {
	http_response_code(500);
	exit("cURL Error: " . curl_error($ch));
}

curl_close($ch);

if ($httpCode !== 0) {
	http_response_code($httpCode);
} else {
	http_response_code(500);
}

header("Access-Control-Allow-Origin: " . $origin);

if ($contentType) {
	header("Content-Type: " . $contentType);
}

echo $response;
?>
