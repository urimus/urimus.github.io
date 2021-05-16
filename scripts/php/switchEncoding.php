<?

//get the q, encoding and encodingOriginal from POST
$data=$_POST["q"];
$encoding=$_POST["encoding"];
$encodingSwitchTo=$_POST["encodingSwitchTo"];


// string mb_convert_encoding ( string $str , string $to_encoding [, mixed $from_encoding = mb_internal_encoding() ] )
echo mb_convert_encoding($data, $encodingSwitchTo, $encoding);



?>