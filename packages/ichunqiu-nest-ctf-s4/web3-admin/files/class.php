<?php
error_reporting(E_ALL & ~E_NOTICE);
 
class Read{//fffffflag.php
    public $file;
    public function __toString(){
        if(isset($this->file)){
            echo file_get_contents($this->file);    
        }
        return "Awwwwwwwwwww man";
    }
}
?>
