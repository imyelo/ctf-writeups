<?php
    echo "There is a ping.php";
    $password="ACmvXfSFUayohrLB";
    if(isset($_POST['password'])){
        if (strcmp($_POST['password'],$password) == 0) {
            echo "Right!!!login success";
            include($_REQUEST['path']);
            exit();
        }
        else{
            echo "Wrong password..";
        }
    }
?>

<!--
    $password="****************";
     if(isset($_POST['password'])){
        if (strcmp($_POST['password'], $password) == 0) {
            echo "Right!!!login success";
            include($_REQUEST['path']);
            exit();
        } else {
            echo "Wrong password..";
        }
-->
