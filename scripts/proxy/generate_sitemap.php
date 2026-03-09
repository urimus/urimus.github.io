<?php
$dir=__DIR__;
$sitemapFile='sitemap.xml';
$allFile='all.html';
$baseUrl='https://urimus.wasmer.app/';

function filenameToTitle($file){
	$name=pathinfo($file,PATHINFO_FILENAME);
	return ucfirst(str_replace(['-','_'],' ',$name));
}

$exclude=['index.html','test.html','google5577016dee36085f.html'];

$files=scandir($dir);
$htmlLinks=[];

$indexFile=$dir.'/index.html';
$lastmodMain=file_exists($indexFile)?date('Y-m-d',filemtime($indexFile)):date('Y-m-d');

$sitemapLines=[];
$sitemapLines[]="<url><loc>{$baseUrl}</loc><lastmod>{$lastmodMain}</lastmod></url>";
$sitemapLines[]="<url><loc>{$baseUrl}{$allFile}</loc><lastmod>".date('Y-m-d')."</lastmod></url>";

foreach($files as $file){
	if($file==='.'||$file==='..'||in_array(strtolower($file),[strtolower($sitemapFile)],true)) continue;
	if(in_array($file,$exclude,true)) continue;

	$path=$dir.'/'.$file;
	if(is_file($path) && strtolower(pathinfo($file,PATHINFO_EXTENSION))==='html' && $file!==$allFile){
		$loc=$baseUrl.$file;
		$lastmod=date('Y-m-d',filemtime($path));
		$sitemapLines[]="<url><loc>{$loc}</loc><lastmod>{$lastmod}</lastmod></url>";
		$htmlLinks[]=['title'=>filenameToTitle($file),'url'=>$loc];
	}
}

usort($htmlLinks,function($a,$b){return strcmp($a['title'],$b['title']);});

$allHtml="<html lang='en'><head><meta charset='UTF-8'><title>Site Map</title></head><body><h1>Site Map</h1><ul><li><a href=\"{$baseUrl}\">Home</a></li>";
foreach($htmlLinks as $page){
	$title=htmlspecialchars($page['title']);
	$url=htmlspecialchars($page['url']);
	$allHtml.="<li><a href=\"{$url}\">{$title}</a></li>";
}
$allHtml.="</ul></body></html>";

file_put_contents($dir.'/'.$allFile,$allHtml);

$sitemapXml="<?xml version=\"1.0\" encoding=\"UTF-8\"?><urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">".implode('',$sitemapLines)."</urlset>";

file_put_contents($dir.'/'.$sitemapFile,$sitemapXml);

echo '<script>alert("Sitemap and all.html generated");</script>';