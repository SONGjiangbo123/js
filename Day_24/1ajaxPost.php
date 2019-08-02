<?php
	header("Content-type:text/html;charset=utf-8");
	
	$name = $_POST["name"];
	$pwd = $_POST["pwd"];
	
	echo $name." ".$pwd;
?>