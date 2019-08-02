//引入模块
let http = require('http'); //src = 'http' 模块化开发

//创建服务器，等价于原来的阿帕奇
http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
	
	res.write("我是老王");
	
	res.end("你好，隔壁的王昊元");
}).listen(8888);

console.log("heihei");