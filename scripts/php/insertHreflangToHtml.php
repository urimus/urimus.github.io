<?php
return;
$dir = dirname(__DIR__,2);
$exclude = ['test.html','google5577016dee36085f.html'];
$files = scandir($dir);
$htmlFiles = [];

foreach($files as $file){
    if($file==='.'||$file==='..') continue;
    if(in_array(strtolower($file), array_map('strtolower', $exclude), true)) continue;
    $path = $dir.'/'.$file;
    if(is_file($path) && strtolower(pathinfo($file, PATHINFO_EXTENSION))==='html') $htmlFiles[] = $file;
}

$groups = [];
foreach($htmlFiles as $file){
    if(strtolower($file)==='index.html') continue;
    $baseName = preg_replace('/_(eng|rus|lat)\.html$/i', '', $file);
    if(!isset($groups[$baseName])) $groups[$baseName] = [];
    $groups[$baseName][] = $file;
}

function getHreflang($filename){
    if(preg_match('/_eng\.html$/i',$filename)) return 'en';
    if(preg_match('/_rus\.html$/i',$filename)) return 'ru';
    if(preg_match('/_lat\.html$/i',$filename)) return 'la';
    return null;
}

foreach($htmlFiles as $file){
    $path = $dir.'/'.$file;
    $html = file_get_contents($path);

    $html = preg_replace(
        '/^\s*(<!--\s*For Google Index\s*-->|<link\s+rel=["\']alternate["\']\s+hreflang=["\'][^"\']*["\']\s+href=["\'][^"\']*["\']\s*\/?>)\s*$/im',
        "\n",
        $html
    );

    $generated = "\n<!-- For Google Index -->\n";
    if(strtolower($file) !== 'index.html'){
        $baseName = preg_replace('/_(eng|rus|lat)\.html$/i','',$file);
        $hreflangs = [];
        foreach($groups[$baseName] as $f){
            $lang = getHreflang($f);
            if($lang) $hreflangs[$lang] = $f;
        }
        foreach(['en','la','ru'] as $lang){
            if(isset($hreflangs[$lang])) $generated .= "<link rel=\"alternate\" hreflang=\"$lang\" href=\"/{$hreflangs[$lang]}\">\n";
        }
        $generated .= "<link rel=\"alternate\" hreflang=\"x-default\" href=\"/index.html\">\n";
    } else {
        $generated .= "<link rel=\"alternate\" hreflang=\"x-default\" href=\"/index.html\">\n";
    }

    $insertPos = strpos($html, '<link rel="stylesheet" href="styles.css" type="text/css">');
    if($insertPos !== false){
        $insertPos += strlen('<link rel="stylesheet" href="styles.css" type="text/css">');
    } else {
        $insertPos = strpos($html, '<head>');
        if($insertPos !== false) $insertPos += 6;
    }

    if($insertPos !== false){
        $html = substr_replace($html, $generated, $insertPos, 0);
    }

    $html = preg_replace("/(\n{3,})/", "\n\n", $html);

    file_put_contents($path, $html);
}