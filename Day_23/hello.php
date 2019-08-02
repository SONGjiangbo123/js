<?php
	header("Content-type:text/html;charset=utf-8");
	$name = $_GET["name"];
	$pwd = $_GET["pwd"];
	
	if($name == "xiaoming"){
		echo "hehe";
	}else if($name == "laowang"){
		echo "xixi";
	}
?>