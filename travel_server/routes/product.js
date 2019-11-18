// 1.旅行首页轮播图
// 2.首页臻选营地请求

const express = require("express");
const router = express.Router();
const pool = require("../pool.js");

// 轮播图路由 
//请求方法get  接口:/index_slide
//数据表 : travel_caro
router.get("/index_slide",(req,res)=>{
  var sql = "SELECT img,title,href FROM travel_caro";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    if(result.length > 0){
      res.send({code:1,msg:"轮播图数据查询成功"});
    }else{
      res.send({code:-1,msg:"轮播图没有数据"});
    }
  });
});

// 首页臻选营地
//请求方法get  接口:/camp
//数据表 : travel_caro
// 请求的列有: pic/title/subtitle/type
router.get("/camp",(req,res)=>{
  var sql = "SELECT pic,title,subtitle,type FROM travel_caro";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    if(result.length){
      res.send({code:1,msg:"首页臻选营地查询成功!",data:result[0]});
    }else{
      res.send({code:-1,msg:"首页臻选营地查询失败!"});
    }
  });
});

// 导出
module.exports = router;