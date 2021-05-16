<?php
session_start();

// define functions

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

function getData() {
    if (!file_exists("data.txt")) file_put_contents("data.txt","");
    $file_contents=file_get_contents("data.txt");
    if (empty($file_contents)) $file_contents="";
    return $file_contents;
}


function printData() {
    $file_contents=getData();
    $lines=explode("\n", $file_contents);
    for ($i = 0; $i < count($lines)-1; $i++) {
        list($username, $email, $complete, $task) = explode("_;_", $lines[$i]);
        echo "<tr><td>".$username."</td><td>".$email."</td>"."</td>";
        if (isLoggedIn()) {
            echo "<td><input type='text' name='task".$i."' value='".$task."'></td>";
            $checked="";
            if ($complete=="1") $checked=" checked";
            echo "<td><input type='checkbox' name='iscomplete[]' value='".$i."' $checked></td>";
        } else {
            echo "<td>".$task."</td>";
        }
    }

    return $file_contents;
}

function addData($username, $email, $task) {
    $file_contents=getData();
    file_put_contents("data.txt", $username."_;_".$email."_;_0_;_".$task."\n".$file_contents);
}

function saveData() {
    $file_contents=getData();
    $lines=explode("\n", $file_contents);
    $out="";
    for ($i = 0; $i < count($lines)-1; $i++) {
        list($username, $email, $complete, $task) = explode("_;_", $lines[$i]);
        $ischecked="0";
        if (isset($_POST['iscomplete'])) {
            for ($j = 0; $j < count($_POST['iscomplete']); $j++) {
                if ($_POST['iscomplete'][$j]==$i) {
                    $ischecked="1"; break;
                }
            }
        }
        $out=$out.$username."_;_".$email."_;_".$ischecked."_;_".$_POST['task'.$i]."\n";
    }
    file_put_contents("data.txt", $out);
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

if (isset($_POST['logout'])) {
    logOut();
}

if (isset($_POST['login'])) {
    if (!empty($_POST['logusername']) && !empty($_POST['logpassword'])) {
        logIn($_POST['logusername'], $_POST['logpassword']);
    }
}

if (isset($_POST['add'])) {
    if (!empty($_POST['username']) || !empty($_POST['email']) || !empty($_POST['task'])) {
        if (empty($_POST['username'])) $_POST['username']="";
        if (empty($_POST['email'])) $_POST['email']="";
        if (empty($_POST['task'])) $_POST['task']="";
        addData($_POST['username'], $_POST['email'], $_POST['task']);
    }
}


if (isset($_POST['save'])) {
    saveData();
}

?>



<h2>Приложение - Задачник</h2>

<form action="index.php" method="post">
    


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
    <td>Имя Пользователя:</td><td><input type="text" name="username"></td>
    <td>е-mail:</td><td><input type="text" name="email"></td>
    <td>Текст Задачи:</td><td><input type="text" name="task"></td>
    <td><input type="submit" name="add" value="Добавить Задачу"></td>
</tr>
</table>


<table class="tasktable">
  <tr>
    <th>Имя Пользователя</th>
    <th>е-mail</th>
    <th>Текст Задачи</th>
    <?php if (isLoggedIn()) echo "<th>Выполнено</th>" ?>
  </tr>

  <?php printData(); ?>

</table>

  <?php 
    if (isLoggedIn()) {
        echo "<input type='submit' name='save' value='Сохранить'>";
    }
  ?>


</form>



</body>
</html>



