//使用express框架，get,post，链接服务器

//框架
var express = require('express');
var app = express();
//链接数据库模块
var mysql = require("mysql");
var http = require("http")
//连接服务器配置.......................................................................
//function createConnection() {
//	var connection = mysql.createConnection({
//		host: 'localhost',
//		user: 'root',
//		password: '',
//		database: 'lefengwang'
//	});
//	return connection;
//}

function randomNum(min, max) {
	var num = Math.floor(Math.random() * (max - min + 1)) + min;
	return num;
}


//fs 读写文件   
//不需要连接服务器也能读取写入
var fs = require("fs"); //文件系统
app.get('/readFile', function(req, res) {
	console.log(111)
	res.append('Access-Control-Allow-Origin', "*");
					//路径               文件内容
	fs.readFile('swiperImg.json', (err, data) => {
		if(err) throw err;
		//把缓冲流(数据)转化为字符串
		//请求一定要有res.send输出，不然会请求失败
		res.send(data.toString())
		console.log(data.toString());
	});

})

//监听该端口..............................................................................
var server = app.listen(3000, function() {
	//测试
	//测试
	var host = server.address().address
	var port = server.address().port
	console.log("应用实例，访问地址为 http://%s:%s", host, port)
})