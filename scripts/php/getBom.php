<?php

// Unicode BOM is U+FEFF, but after encoded, it will look like this.
define ('UTF32_BIG_ENDIAN_BOM'   , chr(0x00) . chr(0x00) . chr(0xFE) . chr(0xFF));
define ('UTF32_LITTLE_ENDIAN_BOM', chr(0xFF) . chr(0xFE) . chr(0x00) . chr(0x00));
define ('UTF16_BIG_ENDIAN_BOM'   , chr(0xFE) . chr(0xFF));
define ('UTF16_LITTLE_ENDIAN_BOM', chr(0xFF) . chr(0xFE));
define ('UTF8_BOM'               , chr(0xEF) . chr(0xBB) . chr(0xBF));
define ('UTF7_BOM1'              , chr(0x2B) . chr(0x2F) . chr(0x76) . chr(0x38));
define ('UTF7_BOM2'              , chr(0x2B) . chr(0x2F) . chr(0x76) . chr(0x39));
define ('UTF7_BOM3'              , chr(0x2B) . chr(0x2F) . chr(0x76) . chr(0x2B));
define ('UTF7_BOM4'              , chr(0x2B) . chr(0x2F) . chr(0x76) . chr(0x2F));
define ('UTF7_BOM5'              , chr(0x2B) . chr(0x2F) . chr(0x76) . chr(0x38) . chr(0x2D));
define ('UTF1_BOM'               , chr(0xF7) . chr(0x64) . chr(0x4C));
define ('UTFEBCDIC_BOM'          , chr(0xDD) . chr(0x73) . chr(0x66) . chr(0x73));
define ('SCSU_BOM'               , chr(0x0E) . chr(0xFE) . chr(0xFF));
define ('BOCU1_BOM'              , chr(0xFB) . chr(0xEE) . chr(0x28));
define ('GB18030_BOM'            , chr(0x84) . chr(0x31) . chr(0x95) . chr(0x33));

function getBom($encoding='UTF-8'){
	$bom="";
	if ($encoding == 'UTF-8') $bom = UTF8_BOM;
	if ($encoding == 'UTF-32') $bom = UTF32_BIG_ENDIAN_BOM;
	if ($encoding == 'UTF-32BE') $bom = UTF32_BIG_ENDIAN_BOM;
	if ($encoding == 'UTF-32LE') $bom = UTF32_LITTLE_ENDIAN_BOM;
	if ($encoding == 'UTF-16') $bom = UTF16_BIG_ENDIAN_BOM;
	if ($encoding == 'UTF-16BE') $bom = UTF16_BIG_ENDIAN_BOM;
	if ($encoding == 'UTF-16LE') $bom = UTF16_LITTLE_ENDIAN_BOM;
	if ($encoding == 'UTF-7') $bom = UTF7_BOM1;
	if ($encoding == 'UTF-7-1') $bom = UTF7_BOM1;
	if ($encoding == 'UTF-7-2') $bom = UTF7_BOM2;
	if ($encoding == 'UTF-7-3') $bom = UTF7_BOM3;
	if ($encoding == 'UTF-7-4') $bom = UTF7_BOM4;
	if ($encoding == 'UTF-7-5') $bom = UTF7_BOM5;
	if ($encoding == 'UTF-1') $bom = UTF1_BOM;
	if ($encoding == 'UTF-EBCDIC') $bom = UTFEBCDIC_BOM;
	if ($encoding == 'SCSU') $bom = SCSU_BOM;
	if ($encoding == 'BOCU-1') $bom = BOCU1_BOM;
	if ($encoding == 'GB-18030') $bom = GB18030_BOM;
	return $bom;
}

function removeBom($text){
    $bom = UTF8_BOM;
	if (0 === strncmp($text, $bom, strlen($bom))) return preg_replace("/^$bom/", '', $text);
    $bom = UTF32_BIG_ENDIAN_BOM;
	if (0 === strncmp($text, $bom, strlen($bom))) return preg_replace("/^$bom/", '', $text);
    $bom = UTF32_LITTLE_ENDIAN_BOM;
	if (0 === strncmp($text, $bom, strlen($bom))) return preg_replace("/^$bom/", '', $text);
    $bom = UTF16_BIG_ENDIAN_BOM;
	if (0 === strncmp($text, $bom, strlen($bom))) return preg_replace("/^$bom/", '', $text);
    $bom = UTF16_LITTLE_ENDIAN_BOM;
	if (0 === strncmp($text, $bom, strlen($bom))) return preg_replace("/^$bom/", '', $text);
    $bom = UTF7_BOM1;
	if (0 === strncmp($text, $bom, strlen($bom))) return preg_replace("/^$bom/", '', $text);
    $bom = UTF7_BOM2;
	if (0 === strncmp($text, $bom, strlen($bom))) return preg_replace("/^$bom/", '', $text);
    $bom = UTF7_BOM3;
	if (0 === strncmp($text, $bom, strlen($bom))) return preg_replace("/^$bom/", '', $text);
    $bom = UTF7_BOM4;
	if (0 === strncmp($text, $bom, strlen($bom))) return preg_replace("/^$bom/", '', $text);
    $bom = UTF7_BOM5;
	if (0 === strncmp($text, $bom, strlen($bom))) return preg_replace("/^$bom/", '', $text);
    $bom = UTF1_BOM;
	if (0 === strncmp($text, $bom, strlen($bom))) return preg_replace("/^$bom/", '', $text);
    $bom = UTFEBCDIC_BOM;
	if (0 === strncmp($text, $bom, strlen($bom))) return preg_replace("/^$bom/", '', $text);
    $bom = SCSU_BOM;
	if (0 === strncmp($text, $bom, strlen($bom))) return preg_replace("/^$bom/", '', $text);
    $bom = BOCU1_BOM;
	if (0 === strncmp($text, $bom, strlen($bom))) return preg_replace("/^$bom/", '', $text);
    $bom = GB18030_BOM;
	if (0 === strncmp($text, $bom, strlen($bom))) return preg_replace("/^$bom/", '', $text);
 	
	return $text;

}
