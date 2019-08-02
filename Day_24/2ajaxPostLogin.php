<?php
	header("Content-type:text/html;charset=utf-8");
	
	$name = $_POST["username"];
	
	$conn = mysql_connect("localhost","root","root");
	
	mysql_select_db("my1904");
	
	$result = mysql_query("select * from student where stuname = '$name'",$conn);
	
	if(mysql_num_rows($result)==1){
		echo 1;
	}else{
		echo 0;
	}
?>