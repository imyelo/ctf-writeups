<?php
        echo "POST[cmd] 这次我们玩过滤好了。";
        $b = $_POST['cmd'];
        if (strpos($b,'cut') === false && isset($b)){
                die("没抓到重点");
        }
        if (strpos($b,'ls') !== false){
                die("你挺能绕的...但不是这个意思啊...");
        }
        if (strpos($b,'cat') !== false){
                die("你挺能绕的...但不是这个意思啊...");
        }
        if (strpos($b,'rm') !== false){
                die("你挺能绕的...但不是这个意思啊...");
        }
        if (strpos($b,'whoami') !== false){
                die("你挺能绕的...但不是这个意思啊...");
        }
        if (strpos($b,'mv') !== false){
                die("你挺能绕的...但不是这个意思啊...");
        }
        if (strpos($b,'id') !== false){
                die("你挺能绕的...但不是这个意思啊...");
        }
        if (strpos($b,'>') !== false){
                die("这你都能想到？我也想到了...");
        }
        if (strpos($b,',') !== false){
                die("这你都能想到？我也想到了...");
        }
        $c = str_replace("flag.txt","pNHYVfirTGWAIygv.txt",$b);
        eval(exec($c));
?>

<!--
        eval(exec($c));//read flag.txt But no cat!！！
-->
