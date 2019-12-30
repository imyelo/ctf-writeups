<?php
    show_source(__FILE__);
    include "flag.php";
    $a = @$_REQUEST['hello'];
    $seed = @$_REQUEST['seed'];
    $key = @$_REQUEST['key'];

    mt_srand($seed);
    $true_key = mt_rand();
    if ($key == $true_key){
        echo "Key Confirm";
    }
    else{
        die("Key Error");
    }
    eval( "var_dump($a);");
?>
