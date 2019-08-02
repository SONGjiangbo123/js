<?php
	header("Content-type:text/html;charset=utf-8");
	$conn = mysql_connect("localhost","root","root");
	
	if($conn){
		echo "连接成功";
		mysql_select_db("my1904");
	}
	
	//增
	//mysql_query("insert into student values(888,'laowang','M',5)",$conn);
	//删
	//mysql_query("delete from student where stuid = 888",$conn);
	//改
	//mysql_query("update student set stuid=123 where stuname='小明'",$conn);
	
	$result = mysql_query("select * from student",$conn);
	
	$rows = mysql_num_rows($result);
	
	if($rows>0){
		//1.游标自动下移
		//2.对象的下标大小写敏感
		while($obj = mysql_fetch_assoc($result)){
			echo $obj["stuId"]. " ".$obj["stuName"];
		}
	}
	
// 	if($rows == 1){
// 		echo "成功";
// 	}else{
// 		echo "失败";
// 	}
	
	mysql_close($conn);
?>