<html>
    <title>Where</title>
    
<?php
    error_reporting(0);
    if(!$_GET[file]){echo '<a href="./index.php?file=show.php"></a>';}
    $file=$_GET['file'];
    if(strstr($file,"../")||stristr($file,"tp")||stristr($file,"input")||stristr($file,"data")){
        echo "NANI?";
        exit();
    }
    include($file);
?>
</html>

