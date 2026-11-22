<?php
return;
include 'headers.php';

$DEBUG_MODE = false;

$dir = dirname(__DIR__, 2);

$files = $DEBUG_MODE
	? [$dir.'/test.html']
	: glob($dir.'/*.html');

foreach($files as $path) {
	if(!is_file($path)) continue;

	$html = file_get_contents($path);
	$original = $html;

	$html = preg_replace_callback(
		'~<img\b[^>]*>(.*?)(?=</td>|</a>|$)~is',
		function($matches) {
			$content = $matches[1];

			// Проверяем первый тег после img
			if(!preg_match('~^(\s*)<p\b[^>]*>~i', $content, $p)) {
				return $matches[0];
			}

			// Удаляем первый открывающий <p>
			$content = substr_replace($content, '', strlen($p[1]), strlen($p[0]) - strlen($p[1]));

			// Удаляем первый закрывающий </p>
			$content = preg_replace('~</p\s*>~i', '', $content, 1);

			return str_replace($matches[1], $content, $matches[0]);
		},
		$html
	);

	if($html !== $original) {
		file_put_contents($path, $html);
		echo "Updated: ".basename($path)."<br>";
	}
}
echo "modifyHTML.php Completed.<br>";
