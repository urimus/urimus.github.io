<?


// check if logged in
if (!isset($_SESSION)) {
    session_start();
}
if (!(isset($_SESSION['login']) && $_SESSION['login'] == "OK")) {
	echo "not logged in";
	return;
}

//get the filename, q, encoding and wobom from POST
$path=$_GET["path"];
$width=$_GET["width"];


$response = 0;
$mime = getimagesize($_FILES['file']['tmp_name']);

if($mime['mime']=='image/png') { 
    if ($width==0) $width=$mime[0];
    $src_img = imagecreatefrompng($_FILES['file']['tmp_name']);
} elseif($mime['mime']=='image/jpg' || $mime['mime']=='image/jpeg' || $mime['mime']=='image/pjpeg') {
    if ($width==0) $width=$mime[0];
    $src_img = imagecreatefromjpeg($_FILES['file']['tmp_name']);
} elseif($mime['mime']=='image/webp') {
    if ($width==0) $width=$mime[0];
    $src_img = imagecreatefromwebp($_FILES['file']['tmp_name']);
} else {
    if(move_uploaded_file($_FILES['file']['tmp_name'],"../../".$path."/".$_FILES['file']['name'])){
        $response = 1;
    } 
    echo $response;
    return;
}

if ($mime[0]!=$width) {

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
        $result = imagepng($dst_img,"../../".$path."/".$_FILES['file']['name'],8);
    }
    if($mime['mime']=='image/jpg' || $mime['mime']=='image/jpeg' || $mime['mime']=='image/pjpeg') {
        $dst_img = ImageCreateTrueColor($thumb_w,$thumb_h);
        imagecopyresampled($dst_img,$src_img,0,0,0,0,$thumb_w,$thumb_h,$old_x,$old_y); 
        $result = imagejpeg($dst_img,"../../".$path."/".$_FILES['file']['name'],80);

    }
    if($mime['mime']=='image/webp') {
        $dst_img = ImageCreateTrueColor($thumb_w,$thumb_h);
        imagecopyresampled($dst_img,$src_img,0,0,0,0,$thumb_w,$thumb_h,$old_x,$old_y); 
        $result = imagewebp($dst_img,"../../".$path."/".$_FILES['file']['name'],80);
    }

    imagedestroy($dst_img);
    imagedestroy($src_img);
    
    echo 2;
} else {
    if(move_uploaded_file($_FILES['file']['tmp_name'],"../../".$path."/".$_FILES['file']['name'])){
        $response = 1;
    } 
    echo $response;
}



?>