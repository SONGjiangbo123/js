<?php
	//mysql_connect("服务器地址","用户名","用户密码");
	header("Content-type:text/html;charset=utf-8");
	//登录数据库
	$conn = mysql_connect("localhost","root","root");
	if($conn){
		echo "连接成功";
		//连接数据库
		mysql_select_db("my1904");
	}
	
	//增删查改万能方法
	//参数1:sql语句   参数2:连接对象
	mysql_query("insert into student values(1,'王昊元','M',25)",$conn);
	
	mysql_close($conn);
?>