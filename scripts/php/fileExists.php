<?

//if (strcmp($out_l["basename"],$out_l["basenameFresh"])!=0) {

//get the q parameter from URL
$q=$_GET["q"];
$q="../../".$q; // add path from this script to root

$out = array();
$fileExists = array_filter(glob($q, GLOB_ONLYDIR), 'is_file');
$out[] = count($fileExists);
/*
foreach (array_filter(glob($q, GLOB_ONLYDIR), 'is_file')  as $filename) {
	$out["dirname"] = $filename;
}
*/
echo (json_encode($out)); 
?>