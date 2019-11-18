// 1.旅行首页轮播图
// 2.首页臻选营地请求

const express = require("express");
const router = express.Router();
const pool = require("../pool.js");

// 轮播图路由
//请求方法get  接口:/index_slide
//数据表 : travel_caro
router.get("/index_slide", (req, res) => {
  var sql = "SELECT img,title,href FROM travel_caro";
  pool.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.send({ code: 1, msg: "轮播图数据查询成功" });
    } else {
      res.send({ code: -1, msg: "轮播图没有数据" });
    }
  });
});

// 首页臻选营地
//请求方法get  接口:/camp
//数据表 : travel_caro
// 请求的列有: pic/title/subtitle/type
router.get("/camp", (req, res) => {
  var sql = "SELECT pic,title,subtitle,type FROM travel_caro";
  pool.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length) {
      res.send({ code: 1, msg: "首页臻选营地查询成功!", data: result[0] });
    } else {
      res.send({ code: -1, msg: "首页臻选营地查询失败!" });
    }
  });
});


//分享
// 请求方法get 接口：/share
// 数据表 ：travel_shared
// 请求的列表： pic/title/likes(点赞数)
router.get("/share",(req,res)=>{
  var sql = "SELECT pic,title,likes FROM travel_shared"
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    if(result.length > 0){
      res.send({code:1,msg:"网友分享数据查询完成！",data:result});
    }else{
      res.send({code:-1,msg:"暂无网友分享数据！"});
    }
  });
});


// 导出
module.exports = router;
