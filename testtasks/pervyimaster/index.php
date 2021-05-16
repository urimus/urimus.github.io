<?php
session_start();
  include "SimpleXLSX.php";

  include "dbconnect.php";
 $conn = OpenCon();
//echo "Connected Successfully\n";
 

/*


$sql = "DROP TABLE tblproduct;";
if ($conn->query($sql) === TRUE) {
	echo "Table tblproduct deleted successfully\n";
} else {
	echo "Error deleting table: " . $conn->error."\n";
}
 
 
 $sql = "DROP TABLE tblcategories;";
if ($conn->query($sql) === TRUE) {
	echo "Table tblcategories deleted successfully\n";
} else {
	echo "Error deleting table: " . $conn->error."\n";
}


$sql = "DROP TABLE tblproviders;";
if ($conn->query($sql) === TRUE) {
	echo "Table tblproviders deleted successfully\n";
} else {
	echo "Error deleting table: " . $conn->error."\n";
}


$sql = "CREATE TABLE `tblproduct` (
  `id` INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `name` text, 
  `code` text,
  `providerId` INT(6),
  `measureU` text,
  `amount` INT(8),
  `comment` text,
  `createTime` text,
  `modifTime` text,
  `categoryId` INT(6),
  `image` text,
  `price` double(10,2)
) ENGINE=InnoDB";

if ($conn->query($sql) === TRUE) {
	echo "Table tblproduct created successfully\n";
} else {
	echo "Error creating table: " . $conn->error."\n";
}


$sql = "CREATE TABLE `tblcategories` (
  `id` INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `name` text
) ENGINE=InnoDB";

if ($conn->query($sql) === TRUE) {
	echo "Table tblcategories created successfully\n";
} else {
	echo "Error creating table: " . $conn->error."\n";
}

$sql = "CREATE TABLE `tblproviders` (
  `id` INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `name` text
) ENGINE=InnoDB";

if ($conn->query($sql) === TRUE) {
	echo "Table tblproviders created successfully\n";
} else {
	echo "Error creating table: " . $conn->error."\n";
}



$sql = "INSERT INTO `tblcategories` (`name`) VALUES
('КОНДИЦИОНИРОВАНИЕ'),
('ВЕНТИЛЯЦИЯ'),
('РАСХОДНЫЕ МАТЕРИАЛЫ');";

if ($conn->query($sql) === TRUE) {
	echo "To table tblproduct records added successfully\n";
} else {
	echo "Error adding records : " . $conn->error."\n";
}


$sql = "INSERT INTO `tblproviders` (`name`) VALUES
('Элита'),
('Valtec'),
('ЮМА'),
('Rockwool'),
('K-Flex');";

if ($conn->query($sql) === TRUE) {
	echo "To table tblproviders records added successfully\n";
} else {
	echo "Error adding records : " . $conn->error."\n";
}



$sql = "INSERT INTO `tblproduct` (`name`, `code`, `providerId`, `measureU`, `amount`, `comment`, `createTime`, `modifTime`, `categoryId`, `image`, `price`) VALUES
('FinePix Pro2 3D Camera', '3DcAM01', 1, 'шт', 10, '', now(), now(), 1, 'product-images/camera.jpg', 1500.00),
('EXP Portable Hard Drive', 'USB02', 1, 'шт', 5, '', now(), now(), 1, 'product-images/external-hard-drive.jpg', 800.00),
('Luxury Ultra thin Wrist Watch', 'wristWear03', 1, 'шт', 1, '', now(), now(), 1, 'product-images/watch.jpg', 300.00),
('XP 1155 Intel Core Laptop', 'LPN45', 1, 'шт', 9, '', now(), now(), 1, 'product-images/laptop.jpg', 800.00);";

if ($conn->query($sql) === TRUE) {
	echo "To table tblproduct records added successfully\n";
} else {
	echo "Error adding records : " . $conn->error."\n";
}




if ( $xlsx = SimpleXLSX::parse('specs/10Ф-ОВ.СО. Ферма — Кондиц. изол., труба медная и др..xlsx') ) {
	echo "Excel readed successfully";
    $columns="";
	$c=0;


    foreach ($xlsx->rows() as $elt) {
		
		$sql = "INSERT INTO `tblproduct` (`name`, `code`, `providerId`, `measureU`, `amount`, `comment`, `createTime`, `modifTime`, `categoryId`, `image`, `price`) VALUES ";
		if (intval($elt[0])==0) continue;
		$columnCount=count($elt);
		$sql=$sql."(";
		for ($i = 0; $i < $columnCount-1; $i++) {
			if ($i==0 || $i==3) continue;
			if ($i==4) { // provider
				$sql=$sql."1, ";
				continue;
			}
			$sql=$sql."'".addslashes($elt[$i])."', ";
		}
		$sql=$sql.$elt[$columnCount-1]."now(), now(), 1, 'product-images/no_image.jpg', 0.0);";

		if ($conn->query($sql) === TRUE) {
			echo "New record created successfully\n";
		} else {
			echo "Error: " . $sql . $conn->error."\n";
		}
		$c++;
    }
}

*/



?>



<?php
     
	 
// read categories
	$sql="SELECT * FROM tblcategories ORDER BY id ASC";
	$result = $conn->query($sql);
	$categories_array=[];
	
	if ($result->num_rows > 0) {
		while($row=mysqli_fetch_assoc($result)) {
			$categories_array[] = $row;
		}	
	}
	
	$sql="SELECT * FROM tblproviders ORDER BY id ASC";
	$result = $conn->query($sql);
	$providers_array=[];
	
	if ($result->num_rows > 0) {
		while($row=mysqli_fetch_assoc($result)) {
			$providers_array[] = $row;
		}	
	}
?> 
   


<!DOCTYPE html>

<HTML>
<HEAD>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<TITLE>Первый Мастер - Поиск Продуктов</TITLE>
<link href="style.css" type="text/css" rel="stylesheet" />
<!-- Background Images Script -->
<script src="scripts/jquery/jquery.js"></script>
<script src="scripts/functions.js"></script>
<script> 
  
// Access the array elements 
var categoriesJS =  
    <?php echo json_encode($categories_array); ?>;
       
var providersJS =  
    <?php echo json_encode($providers_array); ?>; 
	   

</script> 



</HEAD>
<BODY onload="processLoad();">
<div style="padding: 40px;">

	<div class="txt-heading">Каталог</div>
	<table cellspacing="0" cellpadding="0" border="0" >
		<tr>
			<td align="center">
				<div style = cursor:default
                  id="menu_1"
                  onMouseOver="showSubMenu(this, categoriesJS, 'category');" 
                  onMouseOut="this.className='menu_not_selected_blue'" 
                  onClick="showSubMenu(this);"
                  class="menu_not_selected_blue">
				Категории</div>
			</td>
			<td align="center">
				<div style = cursor:default
                  id="menu_1"
                  onMouseOver="showSubMenu(this, providersJS, 'provider');" 
                  onMouseOut="this.className='menu_not_selected_blue'" 
                  onClick="showSubMenu(this);"
                  class="menu_not_selected_blue">
				Поставщики</div>
			</td>
		</tr>
		
	</table>

	<div class="txt-heading">Поиск</div>
	<div style="padding-right:3px; padding-top:10px">Искать похожее на </div>
	<div style="padding-top:10px"><input type="text" id="searchPatt" class="input_text" value="" onkeydown="if (event.keyCode == 13) processSearch();"/><input type="button" class="btnSearchAction" value="Ураа!!!"  onClick="processSearch();"/></div>


	<div class="txt-heading">Корзина</div>
	<a id="btnEmpty" href="javascript:processEmpty();">Очистить Корзину</a>
	<?php
	include "showCart.php";
	?>



		<div class="txt-heading">Продукты</div>
		
		
<?php
	$sql="";
	$patt=$_GET["patt"];
	$category_id=$_GET["category_id"];
	$provider_id=$_GET["provider_id"];
	$error_add="";
	if((!empty($patt) && $patt!="") || (!empty($category_id) && $category_id!="") || (!empty($provider_id) && $provider_id!="")) {
		if (!empty($patt) && $patt!="") {
			$error_add=$patt;
			if ($patt=="*") {
				$sql="SELECT * FROM tblproduct ORDER BY id ASC";
			} else {
				$sql="SELECT * FROM tblproduct WHERE name LIKE '%".$conn->real_escape_string($patt)."%' OR code LIKE '%".$conn->real_escape_string($patt)."%' ORDER BY id ASC";
			}
		}
		
		if (!empty($category_id) && $category_id!="") {
			$category_name="";
			for ($i = 0; $i < count($categories_array); $i++) {
				if ($categories_array[$i]["id"]==$category_id) {$category_name=$categories_array[$i]["name"]; break;}
			}
			$error_add="Категория ".$category_name;
			$sql="SELECT * FROM tblproduct WHERE categoryId='".$conn->real_escape_string($category_id)."' ORDER BY id ASC";
		}
		
		if (!empty($provider_id) && $provider_id!="") {
			$provider_name="";
			for ($i = 0; $i < count($providers_array); $i++) {
				if ($providers_array[$i]["id"]==$provider_id) {$provider_name=$providers_array[$i]["name"]; break;}
			}
			$error_add="Поставщик ".$category_name;
			$sql="SELECT * FROM tblproduct WHERE providerId='".$conn->real_escape_string($provider_id)."' ORDER BY id ASC";
		}

		$result = $conn->query($sql);
		include "showProduct.php";
	} else {
?>
<div class="section_note">Результатов не найдено</div>
<?php 			
	}
	CloseCon($conn);
?>
</div>
</BODY>
</HTML>