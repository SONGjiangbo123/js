<?php
	header("Content-type:text/html;charset=utf-8");
	
	$page = $_GET["page"];
	
	if($page == 1){
		echo "震惊了！！！王昊元昨晚...";
	}else if($page == 2){
		echo "熬夜写代码.";
	}
?>