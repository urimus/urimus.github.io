<?

//if (strcmp($out_l["basename"],$out_l["basenameFresh"])!=0) {

//get the q parameter from URL
$q=$_GET["q"];

include 'detectEncodingClass.php';

$out = array();
foreach (array_filter(glob($q, GLOB_BRACE), 'is_file')  as $filename) {
	// pathinfo:
	// ['basename'] - Name + ext
	// ['extension'] - ext
	// ['filename'] - Name
	// ['dirname'] - Directory with LEADING ../
	$out_l = pathinfo($filename);
	$out_l["modified"]=filemtime($filename);
	$dirTrim=ltrim(ltrim($out_l["dirname"], "\.\./"), "\.\./");
	$out_l["correctDir"]=(strcmp($dirTrim, "") != 0) ? $dirTrim."/" : "";  // without "../../" in the beginning and with "/" after, if exists
	$correctDir2=(strcmp($out_l["dirname"], "") != 0) ? $out_l["dirname"]."/" : "";
	$encoding_array = DetectEncoding::from_file($correctDir2.$out_l["basename"]);
	if (!isset($encoding_array[0])) $encoding_array[0]="Windows-1252";
	$out_l["encoding"]=$encoding_array[0];
//	$out_l["guesses"]=$encoding_array;
	$out[] = $out_l;
}
echo (json_encode($out)); 
?>