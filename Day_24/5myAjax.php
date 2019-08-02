<?php
	header("Content-type:text/html;charset=utf-8");
	
	$name = $_REQUEST["name"];
	$pwd = $_REQUEST["pwd"];
	
	echo $name." ".$pwd;
?>