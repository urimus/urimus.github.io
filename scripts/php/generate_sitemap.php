<?php
// Путь к корню сайта
$rootDir = __DIR__; // текущая папка
$baseURL = "https://urimus.wasmer.app/"; // базовый URL сайта

$urls = [];

// Рекурсивная функция для поиска HTML-файлов
function scanDirForHTML($dir, &$urls, $baseURL, $rootDir) {
    $files = scandir($dir);
    foreach ($files as $file) {
        if ($file === '.' || $file === '..') continue;
        $fullPath = $dir . DIRECTORY_SEPARATOR . $file;

        if (is_dir($fullPath)) {
            scanDirForHTML($fullPath, $urls, $baseURL, $rootDir);
        } elseif (pathinfo($file, PATHINFO_EXTENSION) === 'html') {
            $relativePath = str_replace($rootDir, '', $fullPath);
            $relativePath = str_replace(DIRECTORY_SEPARATOR, '/', $relativePath);
            $urls[] = rtrim($baseURL, '/') . $relativePath;
        }
    }
}

// Сканируем папку
scanDirForHTML($rootDir, $urls, $baseURL, $rootDir);

// Генерация sitemap.xml
$sitemap  = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
$sitemap .= "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n";

foreach ($urls as $url) {
    $sitemap .= "  <url>\n";
    $sitemap .= "    <loc>$url</loc>\n";
    $sitemap .= "  </url>\n";
}

$sitemap .= "</urlset>";

// Сохраняем файл sitemap.xml
file_put_contents($rootDir . DIRECTORY_SEPARATOR . "sitemap2.xml", $sitemap);

echo "Готово! Найдено " . count($urls) . " HTML страниц.\n";
?>
