// 用户路由文件
const express = require("express");
const pool = require("../pool.js");
const router = express.Router();
//手机短信验证码引入的文件
const crypto = require("crypto"); //加密算法文件
const http = require("http");
const querystring = require("querystring");
const mkdir = require("../js/file");
const fs = require("fs");
const path = require("path")

// 用户默认的头像地址
const user_compic = "./userData/common/pic.txt"
// 将从网易获取到的key传入!
// ServerApi("08426d8e5fcb42dcb9bd66bf06a27c40","6efda25230824950b54943a7f5683350");

// 身份验证方法
function verify(uid,res) {
  // 判断用户是否登录, 如果登录,返回true,否则返回false
  if (!uid) {
    res.send({
      code: -2,
      msg: "用户未登录,请登录!"
    });
    return false;
  }
  return true;
}

// resful格式 接口: /reg
// 用户注册 post增加数据(用户名/密码)
router.post("/reg", (req, res) => {
  var uname = req.body.uname;
  var upwd = req.body.upwd;
  if (!uname) {
    res.send({
      code: -2,
      msg: "用户名不能为空"
    });
    return;
  }
  if (!upwd) {
    res.send({
      code: -3,
      msg: "密码不能为空"
    });
    return;
  }
  // 具体格式放在前端验证
  var sql = "INSERT INTO travel_user(uname,upwd) VALUES(?,md5(?))";
  pool.query(sql, [uname, upwd], (err, result) => {
    if (err) throw err;
    if (result.affectedRows > 0) {
      // 调用创建文件夹方法
      createFile({uname,upwd},(fileres)=>{
        if(fileres.affectedRows>0)
          res.send({
            code: 1,
            msg: "注册成功!"
          });
      });
    } else {
      res.send({
        code: -1,
        msg: "注册失败!"
      });
    }
  });
});


/**
 * createFile
 * 创建用户文件方法
 * obj对象接受-> 用户名、密码、和要存入的头像数据
 * */ 
function createFile(obj,callback){
  // 创建用户个人文件夹，用于存放个人信息
  let dirname = "../userData/"//路径
  let filename = new Date().getTime() + parseInt(Math.random()*1000); //文件名称
  let uname = obj.uname;
  let upwd = obj.upwd;
  let pic = obj.pic || "";
  dirname =dirname + filename + "/images";//将路径拼接完成
  pathname = path.isAbsolute(dirname) ? dirname : path.join(__dirname, dirname+"/pic.txt");
  // 创建新的图片文件夹
  new Promise((resolve,reject)=>{
    mkdir(dirname) //创建文件夹
    resolve();
  })
  .then(thens=>{
    // 3.创建txt文件，
    fs.appendFileSync(pathname,pic); //这里要是绝对路径！
  })
  // 将文件名称存入对应的用户表中
  var sql = "UPDATE travel_user SET userfloder=? WHERE uname=? AND upwd=md5(?)";
  pool.query(sql,[filename,uname,upwd],(err,result)=>{
    if(err)throw err;
    callback(result)//回调函数
  });
}


// 用户登录 post
// 方式一:(用户名/密码) 接口: /login
router.post("/login", (req, res) => {
  var uname = req.body.uname;
  var upwd = req.body.upwd;
  if (!uname) {
    res.send({
      data: -2,
      msg: "用户名不能为空!"
    });
    return;
  }
  if (!upwd) {
    res.send({
      data: -3,
      msg: "密码不能为空!"
    });
    return;
  }
  // 正则验证放在前端页面
  var sql = "SELECT id FROM travel_user WHERE uname=? AND upwd=md5(?)";
  pool.query(sql, [uname, upwd], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      // 将uid存入req.session
      req.session.uid = result[0].id;
      res.send({
        code: 1,
        msg: "登录成功!",
        uid:result[0].id
      });
    } else {
      res.send({
        code: -1,
        msg: "登录失败!"
      });
    }
  });
});
// 方式二:(手机号)     接口: /phone
router.post("/phone", (req, res) => {});
// 其他
// 登录注册一体化,当用户使用手机登录时,会先检查该用户是否存在,不存在就直接创建该用户,存在就直接,登录
//  post   接口: rlbyphone
router.post("/rlbyphone", (req, res) => {
  res.setHeader(
    "Content-Type",
    "application/x-www-form-urlencoded;charset=utf-8"
  );
});


// 用户个人信息录入 post 接口: /personal
router.post("/personal", (req, res) => {
  var id = req.session.uid,
  //un = decodeURIComponent(req.body.uname) || "",//用户名--账号
  p = req.body.phone,
  u_n = decodeURIComponent(req.body.user_name) || "",//用户真实姓名
  n = decodeURIComponent(req.body.nick) || "",//昵称
  g = decodeURIComponent(req.body.gender) || "保密",
  // a = req.body.address,
  s = decodeURIComponent(req.body.sign) || "这个人很懒，什么也没留下~",
  pic = req.body.pic || "";//头像路径
  if(g == "男"){
    g = 1
  }else if(g == "女"){
    g = 0
  }else{
    g = 2
  }
  if(!verify(id,res)) return;
    // 需要对图片 - 解码base64
    // if(pic){
      // 解码
      // 将用户头像数据存入对应的用户个人文件夹
      var mypath = "../userData/"
      // 查询用户的个人文件夹名称
      var filesql = "SELECT userfloder FROM travel_user WHERE id=?";
      var filename = "";
      pool.query(filesql,[id],(err,result)=>{
        if(err)throw err;
        if(result.length>0){
          filename = result[0].userfloder;
        }
        mypath =mypath + filename + "/images";//将路径拼接完成
        pathname = path.isAbsolute(mypath) ? mypath : path.join(__dirname, mypath+"/pic.txt");
        // 创建新的图片文件夹
        new Promise((resolve,reject)=>{
          mkdir(mypath) //创建文件夹
          resolve();
        })
        .then(thens=>{
          // 3.创建txt文件，
          fs.appendFileSync(pathname,pic); //这里要是绝对路径！
        })
      });
    // }
  
    // 这里是说明用户处于登录状态,可以执行数据录入
    var sql =
      "UPDATE travel_user SET nick=?,phone=?,user_name=?,gender=?,sign=?,pic=? WHERE id=?";
    // address=?,
    pool.query(sql, [n,p,u_n, g, s, pic, id], (err, result) => {
      if (err) throw err;
      console.log(result)
      if (result.affectedRows > 0) {
        res.send({ code: 1, msg: "个人信息修改成功!" });
      } else {
        res.send({ code: -1, msg: "个人信息修改失败!" });
      }
    });
});


// 用户个人信息获取 get 接口: /personal
router.get("/personal", (req, res) => {
  let uid = req.session.uid;
  let dirpath = "../userData/"; //相对路径
  let imagename = "";

  if(!verify(uid,res)) return;
  
  var sql = "SELECT id,user_name,nick,phone,gender,sign,userfloder FROM travel_user WHERE id=?";
  pool.query(sql, [uid], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      imagename = result[0].userfloder; //获取文件名称
      let datapath = `./userData/${imagename}/images/pic.txt`//用户路径
      readData(datapath,(picdata)=>{//这里是接收到的数据
        console.log(picdata)
        if(!picdata){ //如果用户图片数据不存在，则使用默认的头像数据
          readData(user_compic,(defa)=>{
            // 将默认的数据信息赋值
            if(!defa){
              console.log("公共头像数据缺失，请联系管理员！");
              return;
            }
            result[0].pic = defa;
          })
        }
        result[0].pic = picdata; //将图片数据保存到结果集中
        res.send({
          code: 1,
          msg: "查询成功!",
          data: result[0]
        });
      })
    } else {
      res.send({
        code: -1,
        msg: "用户数据为空!"
      });
    }
  });
});
// 用户



// 封装读取文件数据的方法
function readData(path,callback){
  fs.readFile(path,"utf-8",(err,data)=>{//这里接收到的数据是buffer数据，需要转换一下
    if(err) throw err;
    console.log(data)
    callback(data);
  })
}


module.exports = router;
