let fs = require('fs');

//1.fs.stat  检测是文件还是目录
// fs.stat('123.txt',function(err,stat){
// 	if(err){
// 		console.log("发生错误");
// 	}else{
// 		//判断是否为文件
// 		//console.log(stat.isFile());
// 		console.log(stat.isDirectory());
// 	}
// });

//2. fs.mkdir  创建目录
// fs.mkdir("mycss",function(err,stat){
//     console.log('创建目录成功');
// });

//3. fs.writeFile  创建写入文件
// fs.writeFile('123.txt','我是鲍东升',function(){
// 	
// });


//4.fs.appendFile 追加文件
// fs.appendFile("123.txt","我是隔壁的王昊元",function(err,stat){
//     
// });

//5.fs.readFile 读取文件
// fs.readFile("123.txt",function(err,data){
//     console.log(data);
// });

//6. fs.rmdir  删除目录
//fs.rmdir('mycss',function(){});

//7.fs.unlink删除文件
fs.unlink('index.html',function(){});