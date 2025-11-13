<?php
$dir = __DIR__;
$sitemapFile = 'sitemap.xml';
$baseUrl = 'https://urimus.wasmer.app/';

$files = scandir($dir);

$xml = new SimpleXMLElement('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>');

foreach ($files as $file) {
	if ($file === '.' || $file === '..' || $file === $sitemapFile) continue;
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
$xmlString = $dom->saveXML();

// Приводим отступы к табуляции и добавляем переносы строк
$xmlString = preg_replace('/^(\s+)/m', str_repeat("\t", 1), $xmlString);
$xmlString = str_replace(array("\r\n", "\r"), "\n", $xmlString);

file_put_contents($dir . '/' . $sitemapFile, $xmlString);

echo "Sitemap сгенерирован с читаемыми отступами и переносами строк!";
?>
