<?

// check if logged in
if (!isset($_SESSION)) {
    session_start();
}
if (!(isset($_SESSION['login']) && $_SESSION['login'] == "OK")) {
	echo "not logged in";
	return;
}


copy($_FILES['file']['tmp_name'], 'temp.file');

$mime = getimagesize($_FILES['file']['tmp_name']);

$isImage=0;
if(@is_array($mime)) $isImage=1;

if ($isImage) {
    $out = array ('isImage'=>$isImage, 'type'=>$mime[2],'width'=>$mime[0], 'mime'=>$mime['mime']);
} else {
    $out = array ('isImage'=>false);
}

echo json_encode($out);

//echo $mime['mime'];
/*
[IMAGETYPE_GIF] => 1
[IMAGETYPE_JPEG] => 2
[IMAGETYPE_PNG] => 3
[IMAGETYPE_SWF] => 4
[IMAGETYPE_PSD] => 5
[IMAGETYPE_BMP] => 6
[IMAGETYPE_TIFF_II] => 7
[IMAGETYPE_TIFF_MM] => 8
[IMAGETYPE_JPC] => 9
[IMAGETYPE_JP2] => 10
[IMAGETYPE_JPX] => 11
[IMAGETYPE_JB2] => 12
[IMAGETYPE_SWC] => 13
[IMAGETYPE_IFF] => 14
[IMAGETYPE_WBMP] => 15
[IMAGETYPE_JPEG2000] => 9
[IMAGETYPE_XBM] => 16
[IMAGETYPE_ICO] => 17
[IMAGETYPE_UNKNOWN] => 0
[IMAGETYPE_COUNT] => 18
*/
?>