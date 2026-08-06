<?php
declare(strict_types=1);

/*
|------------------------------------------------------------------
| Secure Streaming Proxy (Hardened SSRF Protection)
|------------------------------------------------------------------
*/

/* ==================================================
	CONFIG
================================================== */

$allowedOrigins = [
	"https://urimus.github.io",
	"http://urimus3.royalwebhosting.net",
	"https://urimus3.royalwebhosting.net"
];

$connectTimeout = 8;
$requestTimeout = 20;
$maxRedirects = 5;

/* ==================================================
	CORS
================================================== */

$origin = $_SERVER["HTTP_ORIGIN"] ?? "";

if ($origin !== "") {

	if (!in_array($origin, $allowedOrigins, true)) {
		header("Access-Control-Allow-Origin: *");
		fail(403, "Origin not allowed");
	}

	header("Access-Control-Allow-Origin: $origin");
	header("Vary: Origin");
}

header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, If-None-Match, If-Modified-Since");
header("Access-Control-Expose-Headers: Content-Type, ETag, Last-Modified");
header("X-Content-Type-Options: nosniff");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
	http_response_code(204);
	exit;
}

/* ==================================================
	HELPERS
================================================== */

function fail(int $code, string $msg): never {
	http_response_code($code);
	header("Content-Type: text/plain; charset=utf-8");
	header("Cache-Control: no-store");
	exit($msg);
}

function normalizeUrl(string $url): string {

	$url = trim($url);

	if (!preg_match("~^https?://~i", $url)) {
		$url = "https://" . $url;
	}

	if (!filter_var($url, FILTER_VALIDATE_URL)) {
		fail(400, "Invalid URL");
	}

	return $url;
}

function isPublicIp(string $ip): bool {

	return (bool) filter_var(
		$ip,
		FILTER_VALIDATE_IP,
		FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE
	);
}

function resolveAndValidate(string $host): void {

	$records = dns_get_record($host, DNS_A + DNS_AAAA);

	if (!$records) {
		fail(400, "DNS resolution failed");
	}

	foreach ($records as $rec) {

		$ip = $rec["ip"] ?? $rec["ipv6"] ?? null;

		if (!$ip) {
			continue;
		}

		if (!isPublicIp($ip)) {
			fail(403, "Blocked IP");
		}
	}
}

/* ==================================================
	INPUT
================================================== */

if (!isset($_GET["url"])) {
	fail(400, "URL parameter required");
}

$url = normalizeUrl($_GET["url"]);

$parts = parse_url($url);

$scheme = strtolower($parts["scheme"] ?? "");
$host = $parts["host"] ?? "";
$port = $parts["port"] ?? null;

if (!in_array($scheme, ["http", "https"], true)) {
	fail(400, "Only HTTP/HTTPS allowed");
}

if (!$host) {
	fail(400, "Invalid host");
}

/* блокируем нестандартные порты */

if ($port !== null && !in_array($port, [80, 443], true)) {
	fail(403, "Port not allowed");
}

resolveAndValidate($host);

/* ==================================================
	CLIENT CACHE HEADERS
================================================== */

$clientETag = $_SERVER["HTTP_IF_NONE_MATCH"] ?? null;
$clientLastModified = $_SERVER["HTTP_IF_MODIFIED_SINCE"] ?? null;

$fallbackETag = 'W/"' . sha1($url) . '"';

/* ==================================================
	CURL INIT
================================================== */

$contentType = "application/octet-stream";

$httpStatus = null;
$headersSent = false;

$upstreamETag = null;
$upstreamLastModified = null;

$ch = curl_init();

$headers = [

    "Accept: */*",

    "Accept-Language: en-US,en;q=0.9",

    "Cache-Control: no-cache",

    "Pragma: no-cache",

];

if ($clientETag) {
	$headers[] = "If-None-Match: $clientETag";
}

if ($clientLastModified) {
	$headers[] = "If-Modified-Since: $clientLastModified";
}

curl_setopt_array($ch, [

	CURLOPT_URL => $url,

	CURLOPT_RETURNTRANSFER => false,
	CURLOPT_FOLLOWLOCATION => false,

	CURLOPT_CONNECTTIMEOUT => $connectTimeout,
	CURLOPT_TIMEOUT => $requestTimeout,

	CURLOPT_ENCODING => "",

	CURLOPT_USERAGENT =>
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",

	CURLOPT_HTTPHEADER => $headers,

	CURLOPT_SSL_VERIFYPEER => true,
	CURLOPT_SSL_VERIFYHOST => 2,

	CURLOPT_LOW_SPEED_LIMIT => 512,
	CURLOPT_LOW_SPEED_TIME => 5,
]);

/* ==================================================
	HEADER PARSER
================================================== */

$redirects = 0;

curl_setopt(
	$ch,
	CURLOPT_HEADERFUNCTION,
	function ($ch, $header)
	use (
		&$contentType,
		&$httpStatus,
		&$upstreamETag,
		&$upstreamLastModified,
		&$redirects,
		$maxRedirects
	) {

		$line = trim($header);

		if ($line === "") {
			return strlen($header);
		}

		if (preg_match("~HTTP/\S+\s+(\d+)~", $line, $m)) {
			$httpStatus = (int)$m[1];
		}

		if (stripos($line, "Location:") === 0) {

			if (++$redirects > $maxRedirects) {
				fail(508, "Too many redirects");
			}

			$location = trim(substr($line, 9));

			$parts = parse_url($location);

			if (!isset($parts["host"])) {
				fail(400, "Invalid redirect");
			}

			resolveAndValidate($parts["host"]);
		}

		if (stripos($line, "Content-Type:") === 0) {
			$contentType = trim(
				explode(";", substr($line, 13))[0]
			);
		}

		if (stripos($line, "ETag:") === 0) {
			$upstreamETag = trim(substr($line, 5));
		}

		if (stripos($line, "Last-Modified:") === 0) {
			$upstreamLastModified = trim(substr($line, 14));
		}

		return strlen($header);
	}
);

/* ==================================================
	STREAM
================================================== */

curl_setopt(
	$ch,
	CURLOPT_WRITEFUNCTION,
	function ($ch, $chunk)
	use (
		&$headersSent,
		&$contentType,
		&$httpStatus,
		&$upstreamETag,
		&$upstreamLastModified,
		$fallbackETag
	) {

		if ($httpStatus === null) {
			return strlen($chunk);
		}

		if ($httpStatus >= 400) {
			return strlen($chunk);
		}

		if (!$headersSent) {

			http_response_code(200);

			header("Content-Type: " . $contentType);

			header(
				"ETag: " .
				($upstreamETag ?? $fallbackETag)
			);

			if ($upstreamLastModified) {
				header(
					"Last-Modified: " .
					$upstreamLastModified
				);
			}

			header(
				"Cache-Control: public, max-age=0, must-revalidate"
			);

			header("Vary: Accept-Encoding");
			header("Accept-Ranges: none");

			$headersSent = true;
		}

		echo $chunk;

		flush();

		return strlen($chunk);
	}
);

/* ==================================================
	EXEC
================================================== */

$ok = curl_exec($ch);

if ($ok === false) {

	$err = curl_error($ch);

	curl_close($ch);

	fail(500, "cURL Error: " . $err);
}

$status = curl_getinfo($ch, CURLINFO_RESPONSE_CODE);

curl_close($ch);

/* ==================================================
	FINAL
================================================== */

if ($status === 304) {

	http_response_code(304);

	$etagToSend =
		$upstreamETag
		?? $clientETag
		?? $fallbackETag;

	header("ETag: " . $etagToSend);

	if ($upstreamLastModified) {
		header(
			"Last-Modified: " .
			$upstreamLastModified
		);
	}

	header(
		"Cache-Control: public, max-age=0, must-revalidate"
	);

	exit;
}

if ($status === 429) {
	fail(429, "Too Many Requests");
}

if ($status >= 400) {
	fail($status, "Upstream returned HTTP " . $status);
}