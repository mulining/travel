// 二级页面详情表
const express = require("express");
const router = express.Router();
const pool = require("../pool.js");

// 臻选营地详情页
//请求方法get  接口:details/camp
//数据表 : travel_caro
// 请求的列有: pic/title/subtitle/type/site/intro/phone/share_time

router.get("/camp",(req,res)=>{
  var sql = "SELECT pic,title,subtitle,type,site,intro,phone,share_time FROM travel_caro";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    if(result.length){
      res.send({code:1,msg:"臻选营地查询成功!",data:result[0]});
    }else{
      res.send({code:-1,msg:"臻选营地查询失败!"});
    }
  });
});

module.exports = router;