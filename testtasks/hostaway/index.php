<?php
session_start();

  include "dbconnect.php";
 $conn = OpenCon();
//echo "Connected Successfully\n";
 	if (!isset($_SESSION)) {
		session_start();
	}
	
	if (isset($_POST['recordsPerPage'])) {
		$_SESSION['itemsPerPage']=$_POST['recordsPerPage'];
	} else {
		$_SESSION['itemsPerPage']=5;
	}


/*

$sql = "DROP TABLE phonebook;";
if ($conn->query($sql) === TRUE) {
	echo "Table phonebook deleted successfully\n";
} else {
	echo "Error deleting table: " . $conn->error."\n";
}
 
$sql = "CREATE TABLE `phonebook` (
  `id` INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `firstname` text,
  `lastname` text,
  `countrycode` text,
  `timezone` text,
  `phone` text,
  `insertedOn` BIGINT,
  `updatedOn` BIGINT
) ENGINE=InnoDB";

if ($conn->query($sql) === TRUE) {
	echo "Table phonebook created successfully\n";
} else {
	echo "Error creating table: " . $conn->error."\n";
}

*/


function isLoggedIn() {
	if (!isset($_SESSION)) {
		session_start();
	}
	if ($_SESSION['login']=="OK") return 1;
	return 0;
}


function logIn($username, $pass) {
    if ($username=="admin" && $pass=="123") {
	    if (!isset($_SESSION)) {
	    	session_start();
	    }
	    $_SESSION['login']="OK";
	    return 1;
    } else {
	    return 0;
    }
}

function logOut() {
    if (!isset($_SESSION)) {
    	session_start();
    }
    $_SESSION['login']="";
    return 1;
}



function addData($conn, $firstname, $lastname, $countrycode, $timezone, $phone) {
	$updatedOn=0;
	$insertedOn=strtotime("now");
	$sql = "INSERT INTO `phonebook` (`firstname`, `lastname`, `countrycode`, `timezone`, `phone`, `insertedOn`, `updatedOn`) VALUES
	('".$firstname."', '".$lastname."', '".$countrycode."', '".$timezone."', '".$phone."', ".$insertedOn.", ".$updatedOn.");";
	$conn->query($sql);
	echo $conn->error;
}



function getData($conn, $searchid="", $searchfirstname="", $searchlastname="") {

	$where="";
	if ($searchid=="" && $searchfirstname=="" && $searchlastname=="") {
		$where="";
	} else {
		if ($searchid!="") {
			$where=" WHERE id = ".$conn->real_escape_string($searchid);
		} elseif ($searchfirstname!="") {
			$where=" WHERE firstname LIKE '%".$conn->real_escape_string($searchfirstname)."%'";
		} elseif ($searchlastname!="") {
			$where=" WHERE lastname LIKE '%".$conn->real_escape_string($searchlastname)."%'";
		}
	}
	$sql="SELECT id, firstname, lastname, countrycode, timezone, phone, insertedOn, updatedOn FROM phonebook".$where." ORDER BY id ASC";
	$result=$conn->query($sql);
	echo $conn->error;
	
	$phonebook_array=[];

	if ($result->num_rows > 0) {
		while($row=mysqli_fetch_assoc($result)) {
			$phonebook_array[] = $row;
		}	
	}
	return $phonebook_array;
}

function saveData($conn) {
	

	$phonebook_array=getData($conn);
	
	$message="";
	
	// check if valid
	$err=0;
	for ($i = 0; $i < count($phonebook_array); $i++) {
		$firstnameName='firstname'.$phonebook_array[$i]['id'];
		if (isset($_POST[$firstnameName]) && $phonebook_array[$i]['fitstname'] != $_POST[$firstnameName]) {
			list ($message, $err) = checkName($_POST[$firstnameName]);
			if ($err) break;
		}

		$contrycodeName='countrycode'.$phonebook_array[$i]['id'];
		if (isset($_POST[$contrycodeName]) && $phonebook_array[$i]['contrycode'] != $_POST[$contrycodeName]) {
			list ($message, $err) = checkCountryCode($_POST[$contrycodeName]);
			if ($err) break;
		}
		$timezoneName='timezone'.$phonebook_array[$i]['id'];
		if (isset($_POST[$timezoneName]) && $phonebook_array[$i]['timezone'] != $_POST[$timezoneName]) {
			list ($message, $err) = checkTimeZone($_POST[$timezoneName]);
			if ($err) break;
		}
		$phoneName='phone'.$phonebook_array[$i]['id'];
		if (isset($_POST[$phoneName]) && $phonebook_array[$i]['phone'] != $_POST[$phoneName]) {
			list ($message, $err) = checkPhone($_POST[$phoneName]);
			if ($err) break;
		}
	}
	
	//save
	if (!$err) {
		for ($i = 0; $i < count($phonebook_array); $i++) {
			$firstnameName='firstname'.$phonebook_array[$i]['id'];
			if (isset($_POST[$firstnameName]) && $phonebook_array[$i]['firstname'] != $_POST[$firstnameName]) {
				$sql = "UPDATE phonebook SET firstname='".$_POST[$firstnameName]."', updatedOn=".strtotime("now")." WHERE id=".$phonebook_array[$i]['id'];
				$conn->query($sql);
				echo $conn->error;
			}
			$lastnameName='lastname'.$phonebook_array[$i]['id'];
			if (isset($_POST[$lastnameName]) && $phonebook_array[$i]['lastname'] != $_POST[$lastnameName]) {
				$sql = "UPDATE phonebook SET lastname='".$_POST[$lastnameName]."', updatedOn=".strtotime("now")." WHERE id=".$phonebook_array[$i]['id'];
				$conn->query($sql);
				echo $conn->error;
			}
			$contrycodeName='contrycode'.$phonebook_array[$i]['id'];
			if (isset($_POST[$contrycodeName]) && $phonebook_array[$i]['contrycode'] != $_POST[$contrycodeName]) {
				$sql = "UPDATE phonebook SET contrycode='".$_POST[$contrycodeName]."', updatedOn=".strtotime("now")." WHERE id=".$phonebook_array[$i]['id'];
				$conn->query($sql);
				echo $conn->error;
			}
			$timezoneName='timezone'.$phonebook_array[$i]['id'];
			if (isset($_POST[$timezoneName]) && $phonebook_array[$i]['timezone'] != $_POST[$timezoneName]) {
				$sql = "UPDATE phonebook SET timezone='".$_POST[$timezoneName]."', updatedOn=".strtotime("now")." WHERE id=".$phonebook_array[$i]['id'];
				$conn->query($sql);
				echo $conn->error;
			}
			$phoneName='phone'.$phonebook_array[$i]['id'];
			if (isset($_POST[$phoneName]) && $phonebook_array[$i]['phone'] != $_POST[$phoneName]) {
				$sql = "UPDATE phonebook SET phone='".$_POST[$phoneName]."', updatedOn=".strtotime("now")." WHERE id=".$phonebook_array[$i]['id'];
				$conn->query($sql);
				echo $conn->error;
			}
		}
	}
	return $message;

}

function getCurrentPage() {
	$currentPage=0;
	if (isset($_GET['page'])) {
		if (is_numeric($_GET['page']) && $_GET['page']>0) {
			$currentPage=$_GET['page'];
		} else {
			$currentPage=1;
		}
	} else {
		$currentPage=1;
	}
	return $currentPage;
}




function printData($conn, $searchid="", $searchfirstname="", $searchlastname="") {
	
	
	
    $phonebook_array=getData($conn, $searchid, $searchfirstname, $searchlastname);

	$currentPage=getCurrentPage();

	$itemsPerPage=$_SESSION['itemsPerPage'];

	$cycleEnd=0;
	
	if ($currentPage*$itemsPerPage > count($phonebook_array)) {
		$cycleEnd=count($phonebook_array);
	} else {
		$cycleEnd=$currentPage*$itemsPerPage;
	}
	
	$out = "";
    for ($i = ($currentPage-1)*$itemsPerPage; $i < $cycleEnd; $i++) {
		$out = $out."<tr>";
		
		$out = $out."<td>".htmlspecialchars($phonebook_array[$i]['id'], ENT_QUOTES)."</td>";

		if (isLoggedIn()) {
			$out = $out."<td><input type='text' name='firstname".$phonebook_array[$i]['id']."' value='".htmlspecialchars($phonebook_array[$i]['firstname'], ENT_QUOTES)."'></td>";
		} else {
			$out = $out."<td>".htmlspecialchars($phonebook_array[$i]['firstname'], ENT_QUOTES)."</td>";
		}

		if (isLoggedIn()) {
			$out = $out."<td><input type='text' name='lastname".$phonebook_array[$i]['id']."' value='".htmlspecialchars($phonebook_array[$i]['lastname'], ENT_QUOTES)."'></td>";
		} else {
			$out = $out."<td>".htmlspecialchars($phonebook_array[$i]['lastname'], ENT_QUOTES)."</td>";
		}
		if (isLoggedIn()) {
			$out = $out."<td><input type='text' name='countrycode".$phonebook_array[$i]['id']."' value='".htmlspecialchars($phonebook_array[$i]['countrycode'], ENT_QUOTES)."'></td>";
		} else {
			$out = $out."<td>".htmlspecialchars($phonebook_array[$i]['countrycode'], ENT_QUOTES)."</td>";
		}
		if (isLoggedIn()) {
			$out = $out."<td><input type='text' name='timezone".$phonebook_array[$i]['id']."' value='".htmlspecialchars($phonebook_array[$i]['timezone'], ENT_QUOTES)."'></td>";
		} else {
			$out = $out."<td>".htmlspecialchars($phonebook_array[$i]['timezone'], ENT_QUOTES)."</td>";
		}
		if (isLoggedIn()) {
			$out = $out."<td><input type='text' name='phone".$phonebook_array[$i]['id']."' value='".htmlspecialchars($phonebook_array[$i]['phone'], ENT_QUOTES)."'></td>";
		} else {
			$out = $out."<td>".htmlspecialchars($phonebook_array[$i]['phone'], ENT_QUOTES)."</td>";
		}
		
		$dateTimeZoneMoscow = new DateTimeZone("Europe/Moscow");
		$dateTimeServ = new DateTime("now");
		$timeOffset = $dateTimeZoneMoscow->getOffset($dateTimeServ);
		
		$out = $out."<td>".gmdate("d.m.Y H:i:s", ($phonebook_array[$i]['insertedOn']+$timeOffset))." (MSK)</td>";

		if ($phonebook_array[$i]['updatedOn']==0) {
			$out = $out."<td>-</td>";
		} else {
			$out = $out."<td>".gmdate("d.m.Y H:i:s", ($phonebook_array[$i]['updatedOn']+$timeOffset))." (MSK)</td>";
		}
		
		
		
		if (isLoggedIn()){
			$out = $out."<td><input type='submit' name='del".$phonebook_array[$i]['id']."' value='Удалить'></td>";
		}
		$out = $out."</tr>";
    }

    return $out;

}


function printPagination($conn, $searchid="", $searchfirstname="", $searchlastname="") {
	
	
	$itemsPerPage=$_SESSION['itemsPerPage'];
	
	
	$where="";
	if ($searchid=="" && $searchfirstname=="" && $searchlastname=="") {
		$where="";
	} else {
		if ($searchid!="") {
			$where=" WHERE id = ".$conn->real_escape_string($searchid);
		} elseif ($searchfirstname!="") {
			$where=" WHERE firstname LIKE '%".$conn->real_escape_string($searchfirstname)."%'";
		} elseif ($searchlastname!="") {
			$where=" WHERE lastname LIKE '%".$conn->real_escape_string($searchlastname)."%'";
		}
	}
	
	
	$sql="SELECT id FROM phonebook".$where;
	$result=$conn->query($sql);
	echo $conn->error;
	$recordsNum=$result->num_rows;
	//if ($recordsNum<=$itemsPerPage) return;
	
	$currentPage=getCurrentPage();
	
	$c=1;
	$out="";
    for ($i = 0; $i < $recordsNum; $i=$i+$itemsPerPage) {
        if ($c!=$currentPage) {
			$out = $out."<a href='".$_SERVER['PHP_SELF']."?page=".$c."'>".$c."</a> ";
		} else {
			$out = $out.$c." ";
		}
		$c++;
    }
    $out = "Пагинация: ".$out;
	
	$out = $out." Записей на Странице: ";
	$out = $out."<select name='recordsPerPage' onchange='this.form.submit()'>";
	$selected="";
	if ($_SESSION['itemsPerPage']==5) $selected=" selected";
	$out = $out."<option value='5'".$selected.">5</option>";
	$selected="";
	if ($_SESSION['itemsPerPage']==10) $selected=" selected";
	$out = $out."<option value='10'".$selected.">10</option>";
	$selected="";
	if ($_SESSION['itemsPerPage']==15) $selected=" selected";
	$out = $out."<option value='15'".$selected.">15</option>";
	$selected="";
	if ($_SESSION['itemsPerPage']==20) $selected=" selected";
	$out = $out."<option value='20'".$selected.">20</option>";
	$out = $out."</select>";
	return $out;
}


function checkName($name) {
	if (empty($name)) return array ("Имя Должно Быть Указано.", 1);
	return array ("", 0);
}


function checkPhone($phone) {
	if (empty($phone)) return array ("Телефон Должен Быть Указан.", 1);
	
	$legalChars = array("+", "-", " ");
	$phone = str_replace($legalChars, "", $phone);
	if (!is_numeric($phone)) return array ("В Телефоне Допускаются Только Цифры и Символы '+', '-', ' '.", 1);
	return array ("", 0);
}


function checkCountryCode($countryCode) {
	if (empty($countryCode)) return array ("", 0);

	$countrycodeMatch=0;
	$json = file_get_contents('https://api.hostaway.com/countries');
	$countries = json_decode($json);
	foreach ($countries->result as $key => $val) {
		if (strtolower($key)==strtolower($countryCode)) {
			$countrycodeMatch=1;
			break;
		}
	}
	unset($json, $countries);
	if (!$countrycodeMatch) return array ("Неверный Код Страны.", 1);

	return array ("", 0);
}



function checkTimeZone($timeZone) {
	if (empty($timeZone)) return array ("", 0);

	$timezoneMatch=0;
	$json = file_get_contents('https://api.hostaway.com/timezones');
	$timezones = json_decode($json);
	foreach ($timezones->result as $key => $val) {
		if (strtolower($key)==strtolower($timeZone)) {
			$timezoneMatch=1;
			break;
		}
	}
	unset($json, $timezones);
	if (!$timezoneMatch) return array ("Неверная Временная Зона.", 1);

	return array ("", 0);
}

//can be used
// var guestbookJS =  <php> echo json_encode($guestbook_array); </php>


?>




   


<!DOCTYPE html>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Hostaway - Телефонная Книга</title>


<style>
.tasktable table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.tasktable td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

.tasktable tr:nth-child(even) {
  background-color: #dddddd;
}
</style>


</head>
<body onload="">


<?php

$message="";

if (isset($_POST['logout'])) {
    logOut();
}

if (isset($_POST['login'])) {
    if (!empty($_POST['logusername']) && !empty($_POST['logpassword'])) {
        logIn($_POST['logusername'], $_POST['logpassword']);
    }
}

if (isset($_POST['add'])) {
		
	$err=0;
	
	list ($message, $err) = checkName($_POST['firstname']);

	if (!$err) {
		list ($message, $err) = checkPhone($_POST['phone']);
	}
	
	if (!$err) {
		list ($message, $err) = checkCountryCode($_POST['countrycode']);
	}
	
	if (!$err) {
		list ($message, $err) = checkTimeZone($_POST['timezone']);
	}
	
	if (!$err) addData($conn, $_POST['firstname'], $_POST['lastname'], $_POST['countrycode'], $_POST['timezone'], $_POST['phone']);

}


if (isset($_POST['save'])) {
    $message=saveData($conn);
}


foreach ($_POST as $key => $value) {
	if (substr($key,0,3)=="del") {
		$id=substr($key,3);
		$sql = "DELETE FROM `phonebook` WHERE id=".$id;
		$conn->query($sql);
		echo $conn->error;
	}
}


?>


<h2>Hostaway - Телефонная Книга</h2>


<form action="index.php?page=<?php echo getCurrentPage(); ?>" method="post">
    


<table>
<tr>
    <?php if (isLoggedIn()) {?>
        <td>Вы вошли как admin.</td><td><input type="submit" name="logout" value="Выход"></td>    
    <?php } else {?>
    <td>Имя Пользователя:</td><td><input type="text" name="logusername"></td>
    <td>Пароль:</td><td><input type="password" name="logpassword"></td>
    <td><input type="submit" name="login" value="Вход"></td>
    <?php }?>
</tr>
</table>


<table>
<tr>
    <td>Имя:</td><td><input type="text" name="firstname"></td>
    <td>Фамилия:</td><td><input type="text" name="lastname"></td>
    <td>Код Страны:</td><td><input type="text" name="countrycode"></td>
    <td>Временная Зона:</td><td><input type="text" name="timezone"></td>
    <td>Телефон:</td><td><input type="text" name="phone"></td>
    <td><input type="submit" name="add" value="Добавить Запись"></td>
</tr>
</table>


<table>
<tr>
    <td>Id:</td><td><input type="text" name="searchid"></td>
    <td>Имя:</td><td><input type="text" name="searchfirstname"></td>
    <td>Фамилия:</td><td><input type="text" name="searchlastname"></td>
    <td><input type="submit" name="search" value="Поиск"></td>
</tr>
</table>


<font color="red"><?php echo $message; ?></font>

<?php 
if (isset($_POST['search'])) {
	if (!empty($_POST['searchid'])) {
		echo "Поиск по Id - ".htmlspecialchars($_POST['searchid'], ENT_QUOTES);
	} elseif (!empty($_POST['searchfirstname'])) {
		echo "Поиск по Имени - ".htmlspecialchars($_POST['searchfirstname'], ENT_QUOTES);
	} elseif (!empty($_POST['searchlastname'])) {
		echo "Поиск по Фамилии - ".htmlspecialchars($_POST['searchlastname'], ENT_QUOTES);
	} else {
		echo "Вся Таблица.";		
	}
} else {
	echo "Вся Таблица.";
}
?>


<table class="tasktable">
  <tr>
    <th>Id</th>
    <th>Имя</th>
    <th>Фамилия</th>
    <th>Код Страны</th>
    <th>Временная Зона</th>
    <th>Телефон</th>
    <th>Добавлено</th>
    <th>Изменено</th>
  </tr>

<?php 
if (isset($_POST['search'])) {
	echo printData($conn, $_POST['searchid'], $_POST['searchfirstname'], $_POST['searchlastname']);
} else {
	echo printData($conn);
}

?>

</table>

<?php if (isLoggedIn()){ ?>	
<input type='submit' name='save' value='Сохранить'>
<?php } ?>
<br>


<?php 
if (isset($_POST['search'])) {
	echo printPagination($conn, $_POST['searchid'], $_POST['searchfirstname'], $_POST['searchlastname']);
} else {
	echo printPagination($conn); 
}

?>

</form>

<?php 			
	CloseCon($conn);
?>

</body>
</html>