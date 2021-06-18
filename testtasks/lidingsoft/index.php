<?php
session_start();

  include "dbconnect.php";
 $conn = OpenCon();
//echo "Connected Successfully\n";
 


/*

$sql = "DROP TABLE guestbook;";
if ($conn->query($sql) === TRUE) {
	echo "Table guestbook deleted successfully\n";
} else {
	echo "Error deleting table: " . $conn->error."\n";
}
 
 

$sql = "CREATE TABLE `guestbook` (
  `id` INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `name` text, 
  `email` text,
  `phone` text,
  `dateIn` BIGINT,
  `dateOut` BIGINT,
  `comment` text,
  `payd` boolean
) ENGINE=InnoDB";

if ($conn->query($sql) === TRUE) {
	echo "Table guestbook created successfully\n";
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



function addData($conn, $name, $email, $phone, $timestampIn, $timestampOut, $comment) {
	$sql = "INSERT INTO `guestbook` (`name`, `email`, `phone`, `dateIn`, `dateOut`, `comment`, `payd`) VALUES
	('".$name."', '".$email."', '".$phone."', ".$timestampIn.", ".$timestampOut.", '".$comment."', false);";
	$conn->query($sql);
}



function getData($conn) {
// read guestbook
	$sql="SELECT id, name, email, phone, dateIn, dateOut, comment, payd FROM guestbook ORDER BY id ASC";
	$result=$conn->query($sql);
	
	$guestbook_array=[];

	if ($result->num_rows > 0) {
		while($row=mysqli_fetch_assoc($result)) {
			$guestbook_array[] = $row;
		}	
	}
	return $guestbook_array;
}

function saveData($conn) {
	
	$guestbook_array=getData($conn);
	
	for ($i = 0; $i < count($guestbook_array); $i++) {
		
		$commentName='comment'.$guestbook_array[$i]['id'];
		if (isset($_POST[$commentName]) && $guestbook_array[$i]['comment'] != $_POST[$commentName]) {
			$sql = "UPDATE guestbook SET comment='".$_POST[$commentName]."' WHERE id=".$guestbook_array[$i]['id'];
			$conn->query($sql);
			echo $conn->error;
		}

	
		$paydName='ispayd'.$guestbook_array[$i]['id'];
		if ($guestbook_array[$i]['payd']==true && !isset($_POST[$paydName])) {
			$sql = "UPDATE guestbook SET payd=false WHERE id=".$guestbook_array[$i]['id'];
			$conn->query($sql);
			echo $conn->error;
		}
		if ($guestbook_array[$i]['payd']==false && isset($_POST[$paydName])) {
			$sql = "UPDATE guestbook SET payd=true WHERE id=".$guestbook_array[$i]['id'];
			$conn->query($sql);
			echo $conn->error;
		}
	}
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


function printData($conn) {
	
    $guestbook_array=getData($conn);
	$currentPage=getCurrentPage();

	
	$cycleEnd=0;
	if ($currentPage*5 > count($guestbook_array)) {
		$cycleEnd=count($guestbook_array);
	} else {
		$cycleEnd=$currentPage*5;
	}
	
	$out = "";
    for ($i = ($currentPage-1)*5; $i < $cycleEnd; $i++) {
        $out = $out."<tr><td>".htmlspecialchars($guestbook_array[$i]['name'], ENT_QUOTES)."</td>";
        $out = $out."<td>".htmlspecialchars($guestbook_array[$i]['email'], ENT_QUOTES)."</td>";
        $out = $out."<td>".htmlspecialchars($guestbook_array[$i]['phone'], ENT_QUOTES)."</td>";
		if ($guestbook_array[$i]['dateIn']==0) {
			$out = $out."<td>-</td>";
		} else {
			$out = $out."<td>".date("d.m.Y", $guestbook_array[$i]['dateIn'])."</td>";
		}
		if ($guestbook_array[$i]['dateOut']==0) {
			$out = $out."<td>-</td>";
		} else {
			$out = $out."<td>".date("d.m.Y", $guestbook_array[$i]['dateOut'])."</td>";
		}		
		if (isLoggedIn()) {
			$out = $out."<td><input type='text' name='comment".$guestbook_array[$i]['id']."' value='".htmlspecialchars($guestbook_array[$i]['comment'], ENT_QUOTES)."'></td>";
			$onclickCheck="";
		} else {
			$out = $out."<td>".htmlspecialchars($guestbook_array[$i]['comment'], ENT_QUOTES)."</td>";
			$onclickCheck=" onclick='return false;'";
		}
		$checked="";
		if ($guestbook_array[$i]['payd']==true) $checked=" checked";
		$out = $out."<td><input type='checkbox' name='ispayd".$guestbook_array[$i]['id']."' ".$checked.$onclickCheck."></td></tr>";

    }
    return $out;
}


function printPagination($conn) {
	
	
	$sql="SELECT id FROM guestbook";
	$result=$conn->query($sql);
	$recordsNum=$result->num_rows;
	if ($recordsNum<=5) return;
	
	$currentPage=getCurrentPage();
	
	$c=1;
	$out="";
    for ($i = 0; $i < $recordsNum; $i=$i+5) {
        if ($c!=$currentPage) {
			$out = $out."<a href='".$_SERVER['PHP_SELF']."?page=".$c."'>".$c."</a> ";
		} else {
			$out = $out.$c." ";
		}
		$c++;
    }
    return $out;
}



//can be used
// var guestbookJS =  <php> echo json_encode($guestbook_array); </php>


?>




   


<!DOCTYPE html>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>ООО ЛидингСофт - Гостевая Книга</title>


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

if (isset($_POST['logout'])) {
    logOut();
}

if (isset($_POST['login'])) {
    if (!empty($_POST['logusername']) && !empty($_POST['logpassword'])) {
        logIn($_POST['logusername'], $_POST['logpassword']);
    }
}

if (isset($_POST['add'])) {
		
	if (($timestampIn = strtotime($_POST['dateIn'])) === false) {
		$timestampIn=0;
	}
	if (($timestampOut = strtotime($_POST['dateOut'])) === false) {
		$timestampOut=0;
	}
	addData($conn, $_POST['name'], $_POST['email'], $_POST['phone'], $timestampIn, $timestampOut, $_POST['comment']);
}


if (isset($_POST['save'])) {
    saveData($conn);
}

?>


<h2>ООО ЛидингСофт - Гостевая Книга</h2>

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
    <td>Имя:</td><td><input type="text" name="name"></td>
    <td>е-mail:</td><td><input type="text" name="email"></td>
    <td>Телефон:</td><td><input type="text" name="phone"></td>
    <td>Дата Заезда:</td><td><input type="text" name="dateIn" value="<?php echo date('d.m.Y'); ?>"></td>
    <td>Дата Выезда:</td><td><input type="text" name="dateOut" value="<?php echo date('d.m.Y'); ?>"></td>
    <td>Комментарий:</td><td><input type="text" name="comment"></td>
    <td><input type="submit" name="add" value="Добавить Запись"></td>
</tr>
</table>



<table class="tasktable">
  <tr>
    <th>Имя Пользователя</th>
    <th>е-mail</th>
    <th>Телефон</th>
    <th>Дата Заезда</th>
    <th>Дата Выезда</th>
    <th>Комментарий</th>
    <th>Оплачено</th>
  </tr>

<?php echo printData($conn); ?>

</table>

<?php if (isLoggedIn()){ ?>	
<input type='submit' name='save' value='Сохранить'>
<?php } ?>
<br>
<?php echo "Пагинация: ".printPagination($conn); ?>

</form>

<?php 			
	CloseCon($conn);
?>

</body>
</html>