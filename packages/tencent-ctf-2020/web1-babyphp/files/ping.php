<?php

$remote_ip = $_SERVER['REMOTE_ADDR'];
if($remote_ip !== "127.0.0.1") {
    echo "Can only be accessed on localhost";
    exit();
}
show_source(__FILE__);
extract($_POST);
$ip = $ip ? $ip : "127.0.0.1";


$ip = myescapeshellarg($ip);
$cmd = "ping -c 1 $ip";
system($cmd);

function myescapeshellarg($data){
    $data = str_replace("\"","\\\"", $data);
    $data = str_replace("'","\\'", $data);
    $data = str_replace(";","", $data);
    $data = str_replace("|","", $data);
    $data = str_replace("&","", $data);
    $data = str_replace(" ","", $data);
    $data = "\"$data\"";
    return $data;
}
