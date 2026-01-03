<?php
$dir = __DIR__;
$sitemapFile = 'sitemap.xml';
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

foreach ($files as $file) {
	if ($file === '.' || $file === '..' || $file === $sitemapFile) continue;
	if (in_array($file, $exclude)) continue;

	if (is_file($dir . '/' . $file) && strtolower(pathinfo($file, PATHINFO_EXTENSION)) === 'html') {
		$url = $xml->addChild('url');
		$url->addChild('loc', $baseUrl . $file);
		$url->addChild('lastmod', date('Y-m-d', filemtime($dir . '/' . $file)));
	}
}

$dom = new DOMDocument('1.0', 'UTF-8');
$dom->preserveWhiteSpace = false;
$dom->formatOutput = true;
$dom->loadXML($xml->asXML());

file_put_contents($dir . '/' . $sitemapFile, $dom->saveXML());

echo '<script>alert("Sitemap сгенерирован - ' . $dir . '/' . $sitemapFile . '");</script>';

