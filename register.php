<?php
$mysqli = mysqli_connect('localhost','root', '' ,'mysql');

if(isset($_POST['submit'])) {	
    $name = mysqli_real_escape_string($mysqli, $_POST['Username']);
    $password = mysqli_real_escape_string($mysqli, $_POST['Password']);
    $username = mysqli_real_escape_string($mysqli, $_POST['Email']);
    
    $result = mysqli_query($mysqli, "INSERT INTO final_users (Username, Password, Email) VALUES('$username', '$password','$msg')");
    header("Location: new.html");
}else{
    echo 'some error';
}