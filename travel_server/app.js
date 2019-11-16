//1:下载四个模块
//  express			web服务器
//  mysql				mysql驱动
//  cors				处理跨域
//  express-session	会话session对象
//2:vue_server_000/进入命令行
//  npm i mysql express express-session cors
//3:加载四个第三方模块
const express = require("express");
const cors = require("cors");
const session = require("express-session"); 
// 引入路由文件
const userRouter = require("./routes/user.js");
// 引入加密文件
const crypto = require("crypto");
const bodyParser = require("body-parser");


var app = express();

app.use(cors({
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  credentials:true  //每次请求验证
}))
//7:配置session环境
app.use(session({
  secret:"128位安全字符串",
  resave:true,         //请求更新数据 
  saveUninitialized:true//保存初始数据
}));
app.use(bodyParser.json());//还不懂有什么作用
app.use(bodyParser.urlencoded({//为post请求做处理!
  extended:true
}));


// 挂载路由器
app.use("/user",userRouter);



app.listen(5050);