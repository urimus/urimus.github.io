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
$isImage=$_GET["isImage"];
$width=$_GET["width"];
$toJpg=$_GET["toJpg"];
$filename=$_GET["filename"];
$createFolder=$_GET["createFolder"];




// create folder if necessary
if ($createFolder && !is_dir("../../".$path."/")) mkdir("../../".$path."/", 0777, true);

$response = 0;
$mime = getimagesize('temp.file');

//$isImage=0;
//if(@is_array($mime)) $isImage=1;



if (!$isImage || $mime[2]==0) {//IMAGETYPE_UNKNOWN
    if(copy('temp.file',"../../".$path."/".$filename)){
        $response = 1;
    } 
    echo $response;
    unlink('temp.file');
    return;
}


    
if ($mime[0]!=$width || $toJpg) {



    if ($width==0) $width=$mime[0];
    


    switch ($mime[2]) {
            case 1://IMAGETYPE_GIF: // 1
            $src_img = imagecreatefromgif('temp.file');
            break;
        case 2://IMAGETYPE_JPEG: // 2
            $src_img = imagecreatefromjpeg('temp.file');
            break;
        case 3://IMAGETYPE_PNG: // 3
            $src_img = imagecreatefrompng('temp.file');
            break;
        case 6://IMAGETYPE_BMP: // 6
            $src_img = imagecreatefrombmp('temp.file');
            break;
        case 15://IMAGETYPE_WBMP: // 15
            $src_img = imagecreatefromwbmp('temp.file');
            break;
        case 16://IMAGETYPE_XBM: // 16
            $src_img = imagecreatefromwxbm('temp.file');
            break;
        case 18: //IMAGETYPE_COUNT: // 18
            $src_img = imagecreatefromwebp('temp.file');
            break;
        }
    
    
//    $src_img = imagecreatefromstring($_FILES['file']['tmp_name']);

    $old_x = imageSX($src_img);
    $old_y = imageSY($src_img);

    $thumb_w = $width;
    $thumb_h = $old_y*($width/$old_x);



    if ($mime[2]==3) { //IMAGETYPE_PNG
        $dst_img = imagecreatetruecolor($thumb_w, $thumb_h);
        imagesavealpha($dst_img, true);
        $color = imagecolorallocatealpha($dst_img, 0, 0, 0, 127);
        imagefill($dst_img, 0, 0, $color);
        imagecopyresampled($dst_img,$src_img,0,0,0,0,$thumb_w,$thumb_h,$old_x,$old_y); 
    } else {
        $dst_img = imagecreatetruecolor($thumb_w,$thumb_h);
        imagecopyresampled($dst_img,$src_img,0,0,0,0,$thumb_w,$thumb_h,$old_x,$old_y);         
    }


    if ($mime[2]==2 || $toJpg==1) { //IMAGETYPE_JPEG
        $result = imagejpeg($dst_img,"../../".$path."/".$filename,80);
    } else { // resize only
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


        switch ($mime[2]) {
                case 1://IMAGETYPE_GIF: // 1
                $result = imagegif($dst_img,"../../".$path."/".$filename,80);
                break;
            case 2://IMAGETYPE_JPEG: // 2

                break;
            case 3://IMAGETYPE_PNG: // 3
                $result = imagepng($dst_img,"../../".$path."/".$filename,8);
                break;
            case 6://IMAGETYPE_BMP: // 6
                $result = imagebmp($dst_img,"../../".$path."/".$filename,8);
                break;
            case 15://IMAGETYPE_WBMP: // 15
                $result = imagewbmp($dst_img,"../../".$path."/".$filename,8);
                break;
            case 16://IMAGETYPE_XBM: // 16
                $result = imagexbm($dst_img,"../../".$path."/".$filename,8);
                break;
            case 18://IMAGETYPE_COUNT: // 18
                $result = imagewebp($dst_img,"../../".$path."/".$filename,80);
                break;
        }
    }



    imagedestroy($dst_img);
    imagedestroy($src_img);
    unlink('temp.file');
    
    echo 3;
    return;
} else {
    // move_uploaded_file
    if(copy('temp.file',"../../".$path."/".$filename)){
        $response = 2;
    } 
    unlink('temp.file');
    echo $response;
    return;
}

echo 0;


?>