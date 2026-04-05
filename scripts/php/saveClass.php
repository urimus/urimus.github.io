<?php

include_once "getBom.php";

/**
 * This class writes (saves) any file on the server.
 * Example: 
 * $modified = Save::saveFile("path/to/some/file.txt", "UTF-8", $data);
 */
class Save {

	static function saveFile($filename, $encoding, $data) {
	    if ($encoding!==null) {
		    $encoding_c=$encoding;
		    if (substr($encoding,0,5)=='UTF-7') $encoding_c='UTF-7';
	    } else {
			$encoding_c='UTF-8';
		}

		$myfile = fopen($filename, "w");

		if ($myfile === false) { // create directory if not exists and try to write again or die
			$pos = strrpos($filename, '/');
			if ($pos === false) {
				die("Unable to open file! - '".$filename."'");
			} else {
				$dir=substr($filename, 0, $pos);
				self::mkdir_r($dir);
			}
		}
		$myfile = fopen($filename, "w") or die("Unable to open file! - '".$filename."'");

		if ($encoding!==null) {
		    $data2 = mb_convert_encoding($data, $encoding_c);
		    fwrite($myfile, getBom($encoding_c).removeBom($data2));
		} else {
		    fwrite($myfile, $data);
		}
		
		fclose($myfile);
        return filemtime($filename);
	}




	static private function mkdir_r($dirName, $rights=0777){
		$dirs = explode('/', $dirName);
		$dir='';
		foreach ($dirs as $part) {
			$dir.=$part.'/';
			if (!is_dir($dir) && strlen($dir)>0)
				mkdir($dir, $rights);
		}
		return;
	}

}
