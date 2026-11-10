<?php

include 'headers.php';

$baseUrl = $_GET["baseUrl"] ?? '';
$baseUrl = strtolower(trim($baseUrl));
$baseUrl = rtrim($baseUrl, '/') . '/';
$bases = ['https://urimus.github.io/', 'https://urimus.wasmer.app/'];
if(!in_array($baseUrl, $bases, true)) $baseUrl = $bases[0];

$dir = dirname(__DIR__, 2);
$sitemapFile = 'sitemap.xml';
$robotsFile = 'robots.txt';

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

foreach($files as $file) {
	if($file === '.' || $file === '..' || in_array(strtolower($file), [strtolower($sitemapFile)], true)) continue;
	if(in_array($file, $exclude, true)) continue;

	$path = $dir.'/'.$file;
	if(is_file($path) && strtolower(pathinfo($file, PATHINFO_EXTENSION)) === 'html' && $file !== $allFile) {
		$loc = $baseUrl.$file;
		$lastmod = date('Y-m-d', filemtime($path));
		$sitemapLines[] = ['loc' => $loc, 'lastmod' => $lastmod];
		$htmlLinks[] = ['title' => filenameToTitle($file), 'url' => $loc];
	}
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

function buildRobotsTxt($baseUrl, $sitemapFile) {
	$robots  = "User-agent: *\n";
	$robots .= "Allow: /\n\n";
	$robots .= "Sitemap: {$baseUrl}{$sitemapFile}\n";
	return $robots;
}

file_put_contents($dir.'/'.$sitemapFile, buildSitemapXml($sitemapLines));
file_put_contents($dir.'/'.$robotsFile, buildRobotsTxt($baseUrl, $sitemapFile));

echo $baseUrl;