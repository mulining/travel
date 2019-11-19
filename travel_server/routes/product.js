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
  var sql = "SELECT pic,title,subtitle,type FROM travel_caro LIMIT 4";//限制显示前四个数据
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

// 查询 
// 查询一:当用户输入时,弹出下拉数据
// 接口地址 : http://127.0.0.1:5050/pro/msglist/上海
// 返回值: tabletype 是标识表标识 --> 0标识臻选表 1标识分享表
router.get("/msglist/:keyword",(req,res)=>{
  var k = "%"+req.params.keyword+"%";//获取到用户输入的查询关键词
  if(k.trim()){
    var sql = "SELECT id,title,tabletype FROM travel_camp WHERE title LIKE ? UNION SELECT id,title,tabletype FROM travel_shared WHERE title LIKE ?";
    pool.query(sql,[k,k],(err,result)=>{
      if(err)throw err;
      if(result.length > 0){
        res.send({code:1,msg:"数据列表",data:result});
      }else{
        res.send({code:-1,msg:"暂无数据!"});
      }
    });
  }
});

// 导出
module.exports = router;
