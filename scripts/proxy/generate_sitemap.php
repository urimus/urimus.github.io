<?php
$dir = __DIR__;
$sitemapFile = 'sitemap.xml';
$allFile = 'all.html';
$baseUrl = 'https://urimus.wasmer.app/';

function filenameToTitle($file) {
	$name = pathinfo($file, PATHINFO_FILENAME);
	return ucfirst(str_replace(['-', '_'], ' ', $name));
}

$exclude = ['index.html','test.html','google5577016dee36085f.html'];

$files = scandir($dir);
$htmlLinks = [];

$indexFile = $dir.'/index.html';
$lastmodMain = file_exists($indexFile) ? date('Y-m-d', filemtime($indexFile)) : date('Y-m-d');

$sitemapLines = [];
$sitemapLines[] = ['loc' => $baseUrl, 'lastmod' => $lastmodMain];
$sitemapLines[] = ['loc' => $baseUrl.$allFile, 'lastmod' => date('Y-m-d')];

foreach($files as $file) {
	$path = $dir . '/' . $file;

	if (
		$file === '.' || 
		$file === '..' || 
		strtolower($file) === strtolower($sitemapFile) || 
		in_array($file, $exclude, true) || 
		!is_file($path) || 
		strtolower(pathinfo($file, PATHINFO_EXTENSION)) !== 'html' || 
		$file === $allFile
	) continue;

	$loc = $baseUrl.$file;
	$lastmod = date('Y-m-d', filemtime($path));
	$sitemapLines[] = ['loc' => $loc, 'lastmod' => $lastmod];
	$htmlLinks[] = ['title' => filenameToTitle($file), 'url' => $loc];
}

usort($htmlLinks, function($a, $b) { return strcmp($a['title'], $b['title']); });

function buildSitemapXml($urls) {
	$xml = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
	$xml .= "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n";
	foreach($urls as $url) {
		$xml .= "\t<url>\n";
		$xml .= "\t\t<loc>{$url['loc']}</loc>\n";
		$xml .= "\t\t<lastmod>{$url['lastmod']}</lastmod>\n";
		$xml .= "\t</url>\n";
	}
	$xml .= "</urlset>\n";
	return $xml;
}

function buildAllHtml($links, $baseUrl) {
	$html = "<!DOCTYPE html>\n<html lang='en'>\n<head>\n\t<meta charset='UTF-8'>\n\t<title>Site Map</title>\n</head>\n<body>\n";
	$html .= "\t<h1>Site Map</h1>\n\t<ul>\n";
	$html .= "\t\t<li><a href=\"{$baseUrl}\">Home</a></li>\n";
	foreach($links as $page) {
		$title = htmlspecialchars($page['title']);
		$url = htmlspecialchars($page['url']);
		$html .= "\t\t<li><a href=\"{$url}\">{$title}</a></li>\n";
	}
	$html .= "\t</ul>\n</body>\n</html>\n";
	return $html;
}

file_put_contents($dir.'/'.$sitemapFile, buildSitemapXml($sitemapLines));
file_put_contents($dir.'/'.$allFile, buildAllHtml($htmlLinks, $baseUrl));

echo '<script>alert("Sitemap and all.html generated with pretty formatting");</script>';