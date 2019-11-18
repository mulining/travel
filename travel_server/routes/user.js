// 用户路由文件
const express = require("express");
const pool = require("../pool.js");
const router = express.Router();
//手机短信验证码引入的文件
const crypto = require("crypto"); //加密算法文件
const http = require("http");
const querystring = require("querystring");

// 将从网易获取到的key传入!
// ServerApi("08426d8e5fcb42dcb9bd66bf06a27c40","6efda25230824950b54943a7f5683350");

// 身份验证方法
function verify(uid) {
  // 判断用户是否登录, 如果登录,返回true,否则返回false
  if (!uid) {
    res.send({ code: -2, msg: "用户未登录,请登录!" });
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
    res.send({ code: -2, msg: "用户名不能为空" });
    return;
  }
  if (!upwd) {
    res.send({ code: -3, msg: "密码不能为空" });
    return;
  }
  // 具体格式放在前端验证
  var sql = "INSERT INTO travel_user(uname,upwd) VALUES(?,md5(?))";
  pool.query(sql, [uname, upwd], (err, result) => {
    if (err) throw err;
    if (result.affectedRows > 0) {
      res.send({ code: 1, msg: "注册成功!" });
    } else {
      res.send({ code: -1, msg: "注册失败!" });
    }
  });
});

// 用户登录 post
// 方式一:(用户名/密码) 接口: /login
router.post("/login", (req, res) => {
  var uname = req.query.uname;
  var upwd = req.query.upwd;
  if (!uname) {
    res.send({ data: -2, msg: "用户名不能为空!" });
    return;
  }
  if (!upwd) {
    res.send({ data: -3, msg: "密码不能为空!" });
    return;
  }
  // 正则验证放在前端页面
  var sql = "SELECT id FROM travel_user WHERE uname=? AND upwd=md5(?)";
  pool.query(sql, [uname, upwd], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      // 将uid存入req.session
      req.session.uid = result[0].id;
      res.send({ code: 1, msg: "登录成功!" });
    } else {
      res.send({ code: -1, msg: "登录失败!" });
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
  var uid = req.session.uid,
    un = req.query.uname,
    p = req.query.phone,
    u_n = req.query.user_name,
    g = req.query.gender,
    a = req.query.address,
    s = req.query.sign,
    pic = req.query.pic;
  if (verify(req)) {
    // 这里是说明用户处于登录状态,可以执行数据录入
    var sql =
      "UPDATE travel_personal SET uname=?,phone=?,user_name=?,gender=?,address=?,sign=?,pic=? WHERE uid=?";
    pool.query(sql, [un, p, u_n, g, a, s, pic, uid], (err, result) => {
      if (err) throw err;
      if (result.affectedRows > 0) {
        res.send({ code: 1, msg: "个人信息修改成功!" });
      } else {
        res.send({ code: -1, msg: "个人信息修改失败!" });
      }
    });
  }
});

// 用户个人信息获取 get 接口: /personal
router.get("/personal", (req, res) => {
  var uid = req.session.uid;
  if (!uid) {
    res.send({ code: -2, msg: "用户未登录,请登录!" });
    return;
  }
  var sql = "SELECT FROM WHERE uid=?";
  pool.query(sql, [uid], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.send({ code: 1, msg: "查询成功!", data: result });
    } else {
      res.send({ code: -1, msg: "用户数据为空!" });
    }
  });
});
// 用户

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> e2f4c99975dec9d16045a34d78f4461220d117dd
