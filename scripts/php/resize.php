<?php

// check if logged in
if (session_status() !== PHP_SESSION_ACTIVE) {
	session_start();
}
if (($_SESSION['login'] ?? null) !== 'OK') {
    exit('not logged in');
}


//get the filename, replaceWhat, replaceTo, encoding from GET
$filename=$_GET["filename"];
$filename="../../".$filename; // add path from this script to root
$fileNum=$_GET["fileNum"];
$width=$_GET["width"];
$date = $_GET['date'] ?? '';

include 'secure.php';
include 'errorProcessing.php';

// ---------- log -------- //
if ($fileNum==0) {
    file_put_contents("logs/resize.log", "=== Resize log : Width: ".$width."px, ".$date." UTC ===".PHP_EOL);//, FILE_APPEND | LOCK_EX);    
}
// ---------- end of log -------- //
if (!is_file($filename) || !canReadPath($filename)) die("Unable to open file! - '".$filename."'");
$mime = getimagesize($filename);

if($mime['mime']=='image/png') { 
    if ($width==0) $width=$mime[0];
    $src_img = imagecreatefrompng($filename);
} elseif($mime['mime']=='image/jpg' || $mime['mime']=='image/jpeg' || $mime['mime']=='image/pjpeg') {
    if ($width==0) $width=$mime[0];
    $src_img = imagecreatefromjpeg($filename);
} else {

    // ---------- log -------- //
    file_put_contents("logs/resize.log", ($fileNum+1).". Skipped - ".substr($filename, 6).".".PHP_EOL, FILE_APPEND | LOCK_EX);
    // ---------- end of log -------- //

    echo 0;    
    return;
}
if ($width==$mime[0]) {
    
    // ---------- log -------- //
    file_put_contents("logs/resize.log", ($fileNum+1).". Not Processed, Width is already ".$width."px - ".substr($filename, 6).".".PHP_EOL, FILE_APPEND | LOCK_EX);
    // ---------- end of log -------- //

    echo 1;    
    return;
}


$old_x = imageSX($src_img);
$old_y = imageSY($src_img);



$thumb_w = $width;
$thumb_h = $old_y*($width/$old_x);



if($mime['mime']=='image/png') {


    $dst_img = imagecreatetruecolor($thumb_w, $thumb_h);
    imagesavealpha($dst_img, true);
    $color = imagecolorallocatealpha($dst_img, 0, 0, 0, 127);
    imagefill($dst_img, 0, 0, $color);
    imagecopyresampled($dst_img,$src_img,0,0,0,0,$thumb_w,$thumb_h,$old_x,$old_y); 
    //imagepng($img, 'test.png');
    
    $result = imagepng($dst_img,$filename,8);
}
if($mime['mime']=='image/jpg' || $mime['mime']=='image/jpeg' || $mime['mime']=='image/pjpeg') {

    $dst_img = ImageCreateTrueColor($thumb_w,$thumb_h);
    imagecopyresampled($dst_img,$src_img,0,0,0,0,$thumb_w,$thumb_h,$old_x,$old_y); 
    $result = imagejpeg($dst_img,$filename,80);

}

imagedestroy($dst_img); 
imagedestroy($src_img);


// ---------- log -------- //
file_put_contents("logs/resize.log", ($fileNum+1).". Resized to width =".$width."px - ".substr($filename, 6).".\n", FILE_APPEND | LOCK_EX);
// ---------- end of log -------- //

echo 1; 
