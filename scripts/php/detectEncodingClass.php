<?php

include_once 'getBom.php';

/**
 * This class try to guess the proper encoding of a string/file.
 * Example: 
 * $encoding_array = DetectEncoding::from_string("Feliz nuevo!");
 * $encoding_array = DetectEncoding::from_file("path/to/some/file.txt");
 */
class DetectEncoding {
	
	private static $filename;
	private static $first15bytes;
	
	/**
	 * Try to detect non UTF encodings
	 * @return array all provable encodings
	 */
	private static function detect_non_uft_encoding($text) {
		$guesses = array();
		foreach(mb_list_encodings() as $item) {
			//avoid checking for UTF, 'pass' & 'auto' encodings
			if ($item === 'pass' || $item === 'auto' || strripos($item, 'UTF')!==false ){
				continue;
			}
			$sample = @iconv($item, $item, $text);
			if (strlen($sample) & md5($sample)==md5($text)) { 
				$guesses[] = $item;
			}
		}
		return $guesses;
	}

	/**
	 * A simple way to detect UTF-8/16/32 of string by its BOM (not work with string or file without BOM)
	 * @return string|false encoding found
	 */
	static function detectUftEncoding($text){
		$first2 = substr($text, 0, 2);
		$first3 = substr($text, 0, 3);
		$first4 = substr($text, 0, 4);
		$first5 = substr($text, 0, 5);
		
		if ($first3 == UTF8_BOM) return 'UTF-8';
		elseif ($first4 == UTF32_BIG_ENDIAN_BOM) return 'UTF-32BE';
		elseif ($first4 == UTF32_LITTLE_ENDIAN_BOM) return 'UTF-32LE';
		elseif ($first2 == UTF16_BIG_ENDIAN_BOM) return 'UTF-16BE';
		elseif ($first2 == UTF16_LITTLE_ENDIAN_BOM) return 'UTF-16LE';
		elseif ($first4 == UTF7_BOM1) return 'UTF-7-1';
		elseif ($first4 == UTF7_BOM2) return 'UTF-7-2';
		elseif ($first4 == UTF7_BOM3) return 'UTF-7-3';
		elseif ($first4 == UTF7_BOM4) return 'UTF-7-4';
		elseif ($first5 == UTF7_BOM5) return 'UTF-7-5';
		elseif ($first3 == UTF1_BOM) return 'UTF-1';
		elseif ($first4 == UTFEBCDIC_BOM) return 'UTF-EBCDIC';
		elseif ($first3 == SCSU_BOM) return 'SCSU';
		elseif ($first3 == BOCU1_BOM) return 'BOCU-1';
		elseif ($first4 == GB18030_BOM) return 'GB-18030';
		return false;
	}

	
	/**
	 * Try to detect all provable encodings from a given string
	 * @return array with encoding guesses
	 */
	static function from_string($text, $default_encoding = 'UTF-8'){
		$default_guess = array($default_encoding);
		if (empty($text)) return $default_guess;
		$guesses = self::detect_non_uft_encoding($text);
		$uft = self::detectUftEncoding($text);
		if ($uft){
			array_unshift($guesses, $uft);
		}
		//put the default encoding at the top
		if (in_array($default_encoding, $guesses)){
			$guesses = array_diff($guesses, $default_guess);
			array_unshift($guesses, $default_encoding);
		}
		// if (sizeof($guesses)==0) $guesses = array($default_encoding);
		return $guesses;
	}
	
	/**
	 * Save file's 15 bytes to save processing time
	 * @return none
	 */
	static function setbytes($filename) {
		if (!isset(self::$filename) || self::$filename !== $filename || !isset(self::$first15bytes)) {
			self::$filename = $filename;
			$file=fopen($filename,'r');
			self::$first15bytes = fread($file, 15);
			fclose($file);
		}
	}
	
	
	/**
	 * Try to detect all provable encodings from a given file
	 * By first 15 bytes of file
	 * @return array with encoding guesses
	 * return self::from_string(file_get_contents($filename,'r')); // too slow
	 * return self::from_string(fgets(fopen($filename,'r'))); // first line
	 */
	static function from_file($filename) {
		self::setbytes($filename);
	    return self::from_string(self::$first15bytes); // first 15 bytes
	}
	
	/**
	 * Get first 10 bytes of file and return them as hex array (with ... if 11 byte exists)
	 * @return hex array
	 * file_get_contents($filename,'r'); // too slow
	 * fgets(fopen($filename,'r')); // first line
	 */
	static function first10bytes($filename) {
		self::setbytes($filename);
		$out = array();
		$first11bytes=substr(self::$first15bytes,0,11);
		for ($i = 0; $i < strlen($first11bytes); $i++){
			if ($i==10){
				$out[]="...";
			} else {
				$byte=dechex(ord($first11bytes[$i]));
				$out[]=str_repeat('0', 2 - strlen($byte)).$byte;
			}
		}
		return $out;
	}

}
