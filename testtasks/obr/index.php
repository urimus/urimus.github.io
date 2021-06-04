<?php
session_start();


// define functions
$_SESSION['database']="data.txt";
if (empty($_POST['nameFilter'])) {$nameFilter="";} else {$nameFilter=$_POST['nameFilter'];}
$_SESSION['nameFilter']=$nameFilter;
if (empty($_POST['emailFilter'])) {$emailFilter="";} else {$emailFilter=$_POST['emailFilter'];}
$_SESSION['emailFilter']=$emailFilter;
if (empty($_POST['dateFilter'])) {$dateFilter=date("d.m.Y");} else {$dateFilter=$_POST['dateFilter'];}
$_SESSION['dateFilter']=$dateFilter;



function getData($filename) {
    if (!file_exists($filename)) file_put_contents($filename,"");
    $file_contents=file_get_contents($filename);
    if (empty($file_contents)) $file_contents="";
    return $file_contents;
}


function printData() {
    $file_contents=getData($_SESSION['database']);
    $lines=explode("\n", $file_contents);
    for ($i = 0; $i < count($lines)-1; $i++) {
        if ($lines[$i]=="") continue;
        list($username, $email, $task, $date) = explode("_;_", $lines[$i]);
		if ($_SESSION['nameFilter']!="" && $username!=$_SESSION['nameFilter']) continue;
		if ($_SESSION['emailFilter']!="" && $email!=$_SESSION['emailFilter']) continue;
		if ($_SESSION['dateFilter']!="" && $date!=$_SESSION['dateFilter']) continue;
        echo "<tr><td>".htmlspecialchars($username, ENT_QUOTES)."</td><td>".htmlspecialchars($email, ENT_QUOTES)."</td><td>".htmlspecialchars($task, ENT_QUOTES)."</td><td>".htmlspecialchars($date, ENT_QUOTES)."</td></tr>";
    }

    return $file_contents;
}

function addData($username, $email, $task) {
    file_put_contents($_SESSION['database'], $username."_;_".$email."_;_".$task."_;_".date("d.m.Y")."\n", FILE_APPEND | LOCK_EX);
}

?>




<!DOCTYPE html>

<html>

<head>
<title></title> 
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link rel="shortcut icon" href="" type="image/ico" />

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

<body>

<?php

$message="";

if (isset($_POST['setFilter'])) {
    $_SESSION['database']=$_POST['databaseName'];
}

if (isset($_POST['add'])) {
	$proceedAdd=1;
	if (empty($_POST['name'])) {$message="Имя обязательно."; $proceedAdd=0;}
	if ($proceedAdd && empty($_POST['email'])) {$message="Email обязателен."; $proceedAdd=0;}
	if ($proceedAdd && empty($_POST['task'])) {$message="Вопрос обязателен."; $proceedAdd=0;}
    if ($proceedAdd) {
        addData($_POST['name'], $_POST['email'], $_POST['task']);
    }
}

?>



<h2>Приложение - Форма Обратной Связи</h2>

<form action="index.php" method="post">
    

<table>
<tr>
    <td>Фильтр по Имени:</td><td><input type="text" name="nameFilter" value="<?php echo htmlspecialchars($_SESSION['nameFilter'], ENT_QUOTES); ?>"></td>
    <td>по Email:</td><td><input type="text" name="emailFilter" value="<?php echo htmlspecialchars($_SESSION['emailFilter'], ENT_QUOTES); ?>"></td>
    <td>по Дате:</td><td><input type="text" name="dateFilter" value="<?php echo htmlspecialchars($_SESSION['dateFilter'], ENT_QUOTES); ?>"></td>
    <td><input type="submit" name="setFiler" value="Установить"></td>
</tr>
</table>
    
<table>
<tr>
    <td>Имя:</td><td><input type="text" name="name" value="<?php echo htmlspecialchars($_POST['name'], ENT_QUOTES); ?>"></td>
    <td>Email:</td><td><input type="text" name="email" value="<?php echo htmlspecialchars($_POST['email'], ENT_QUOTES); ?>"></td>
    <td>Вопрос:</td><td><input type="text" name="task" value="<?php echo htmlspecialchars($_POST['task'], ENT_QUOTES); ?>"></td>
    <td><input type="submit" name="add" value="Добавить Обращение"></td>
</tr>
</table>


<table class="tasktable">
  <tr>
    <th>Имя Пользователя</th>
    <th>Email</th>
    <th>Обращение</th>
    <th>Дата Добавления</th>
  </tr>

  <?php printData(); ?>

</table>



</form>

<?php
if ($message!="") {
	echo "<script>alert(\"".$message."\");</script>";
}
?>

</body>
</html>



