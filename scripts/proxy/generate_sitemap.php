<?php
$dir = __DIR__;
$sitemapFile = 'sitemap.xml';
$allFile = 'all.html';
$baseUrl = 'https://urimus.wasmer.app/';

$exclude = [
	'index.html',
	'test.html',
	'google5577016dee36085f.html'
];

$files = scandir($dir);

$xml = new SimpleXMLElement('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>');

$indexFile = $dir . '/index.html';
$lastmodMain = file_exists($indexFile)
	? date('Y-m-d', filemtime($indexFile))
	: date('Y-m-d');

$url = $xml->addChild('url');
$url->addChild('loc', $baseUrl);
$url->addChild('lastmod', $lastmodMain);

$htmlLinks = [];

foreach ($files as $file) {

	if ($file === '.' || $file === '..' || $file === $sitemapFile) continue;
	if (in_array($file, $exclude)) continue;

	if (is_file($dir . '/' . $file) && strtolower(pathinfo($file, PATHINFO_EXTENSION)) === 'html') {

		$loc = $baseUrl . $file;
		if ($file === $allFile) {
			$lastmod = date('Y-m-d');
		} else {
			$lastmod = date('Y-m-d', filemtime($dir . '/' . $file));
		}

		$url = $xml->addChild('url');
		$url->addChild('loc', $loc);
		$url->addChild('lastmod', $lastmod);

		if ($file !== $allFile) {
			$htmlLinks[] = [
				'file' => $file,
				'url' => $loc
			];
		}
	}
}

$allExists = file_exists($dir . '/' . $allFile);

$allHtml = "<!DOCTYPE html>
<html lang='en'>
<head>
	<meta charset='UTF-8'>
	<title>All Pages</title>
</head>
<body>
	<h1>All Pages</h1>
	<ul>
	<li><a href=\"{$baseUrl}\">Home</a></li>";

foreach ($htmlLinks as $page) {
	$allHtml .= "<li><a href=\"{$page['url']}\">{$page['file']}</a></li>";
}

$allHtml .= "</ul>
</body>
</html>";

file_put_contents($dir . '/' . $allFile, $allHtml);

if (!$allExists) {
	$url = $xml->addChild('url');
	$url->addChild('loc', $baseUrl . $allFile);
	$url->addChild('lastmod', date('Y-m-d'));
}

$dom = new DOMDocument('1.0', 'UTF-8');
$dom->preserveWhiteSpace = false;
$dom->formatOutput = true;
$dom->loadXML($xml->asXML());

file_put_contents($dir . '/' . $sitemapFile, $dom->saveXML());

echo '<script>alert("Sitemap and all.html generated");</script>';