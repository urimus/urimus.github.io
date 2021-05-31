<?php
session_start();


// define functions
if (!isset($_SESSION['database'])) {
   	$_SESSION['database']="data.txt";
}


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
        list($username, $phone, $task) = explode("_;_", $lines[$i]);
        echo "<tr><td>".htmlspecialchars($username, ENT_QUOTES)."</td><td>".htmlspecialchars($phone, ENT_QUOTES)."</td><td>".htmlspecialchars($task, ENT_QUOTES)."</td></tr>";
    }

    return $file_contents;
}

function addData($username, $email, $task) {
    file_put_contents($_SESSION['database'], $username."_;_".$email."_;_".$task."\n", FILE_APPEND | LOCK_EX);
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


if (isset($_POST['database'])) {
    $_SESSION['database']=$_POST['databaseName'];
}

if (isset($_POST['add'])) {
    if (!empty($_POST['name']) || !empty($_POST['phone']) || !empty($_POST['task'])) {
        if (empty($_POST['name'])) $_POST['name']="";
        if (empty($_POST['phone'])) $_POST['phone']="";
        if (empty($_POST['task'])) $_POST['task']="";
        addData($_POST['name'], $_POST['phone'], $_POST['task']);
    }
}



?>



<h2>Приложение - Форма Обратной Связи</h2>

<form action="index.php" method="post">
    


<table>
<tr>
    <td>Фаил для Сохранения/Показа:</td><td><input type="text" name="databaseName" value="<?php echo htmlspecialchars($_SESSION['database'], ENT_QUOTES); ?>"></td>
    <td><input type="submit" name="database" value="Установить"></td>
</tr>
</table>
    
<table>
<tr>
    <td>Имя:</td><td><input type="text" name="name"></td>
    <td>Телефон:</td><td><input type="text" name="phone"></td>
    <td>Обращение:</td><td><input type="text" name="task"></td>
    <td><input type="submit" name="add" value="Добавить Обращение"></td>
</tr>
</table>


<table class="tasktable">
  <tr>
    <th>Имя Пользователя</th>
    <th>Телефон</th>
    <th>Обращение</th>
  </tr>

  <?php printData(); ?>

</table>



</form>



</body>
</html>



