<?php
session_start();
include "dbconnect.php";
$conn = OpenCon();

$action=$_GET["action"];
$id=$_GET["id"];
$q=$_GET["q"];

echo "action=".$action."\n";
echo "id=".$id."\n";
echo "q=".$q."\n";


if(!empty($action)) {
switch($action) {
	case "add":
		if(!empty($q)) {
			$sql="SELECT * FROM tblproduct WHERE id='".$conn->real_escape_string($id)."'";
			$result = $conn->query($sql);
			$productById=[];
			if ($result->num_rows > 0) { 
				while($row=mysqli_fetch_assoc($result)) {
					$productById[] = $row;
				}
			}
		
		
			$itemArray = array($productById[0]["id"]=>array('id'=>$productById[0]["id"], 'name'=>$productById[0]["name"], 'code'=>$productById[0]["code"], 'quantity'=>$q, 'price'=>$productById[0]["price"], 'image'=>$productById[0]["image"]));
			
			if(!empty($_SESSION["cart_item"])) {
				if(in_array($productById[0]["id"],array_keys($_SESSION["cart_item"]))) {
					foreach($_SESSION["cart_item"] as $k => $v) {
							if($productById[0]["id"] == $k) {
								if(empty($_SESSION["cart_item"][$k]["quantity"])) {
									$_SESSION["cart_item"][$k]["quantity"] = 0;
								}
								$_SESSION["cart_item"][$k]["quantity"] += $q;
							}
					}
				} else {
					$_SESSION["cart_item"] = array_merge($_SESSION["cart_item"],$itemArray);
				}
			} else {
				$_SESSION["cart_item"] = $itemArray;
			}
		}
	break;
	case "remove":
		if(!empty($_SESSION["cart_item"])) {
			foreach($_SESSION["cart_item"] as $k => $v) {
					if($id == $k)
						unset($_SESSION["cart_item"][$k]);				
					if(empty($_SESSION["cart_item"]))
						unset($_SESSION["cart_item"]);
			}
		}
	break;
	case "empty":
		unset($_SESSION["cart_item"]);
	break;	
}
}


CloseCon($conn);

?>