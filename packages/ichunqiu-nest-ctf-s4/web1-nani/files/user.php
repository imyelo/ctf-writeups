<?php
class convent{
	var $warn = "No hacker.";
	function __destruct(){
		eval($this->warn);
	}
	function __wakeup(){
		foreach(get_object_vars($this) as $k => $v) {
			$this->$k = null;
		}
	}
}
$cmd = $_POST[cmd];
unserialize($cmd);
?>
