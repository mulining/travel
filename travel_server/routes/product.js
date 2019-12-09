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
  console.log(1)
  pool.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result)
    if (result.length > 0) {
      res.send({ code: 1, msg: "轮播图数据查询成功", data: result });
    } else {
      res.send({ code: -1, msg: "轮播图没有数据" });
    }
  });
});

// 首页臻选营地
//请求方法get  接口:/camp/0/10
//数据表 : travel_caro
// 请求的列有: pic/title/subtitle/type
// 补充了id数据项（2019-11-29修改）

router.get("/camp", (req, res) => {
  var sql = "SELECT id,pic,title,subtitle,type FROM travel_camp LIMIT 4"; //限制显示前四个数据
  new Promise((resolve,reject)=>{
    pool.query(sql, (err, result) => {
      var data;
      if (err) throw err;
      if (result.length) {
        data = result;
      }
      resolve(data);
    });
  }).then(firstdata=>{
    if(!firstdata){
      res.send({ code: -1, msg: "首页臻选营地查询失败!" });
    }
    // console.log(result);//result数组
    var camps = [];//用于存放最终的结果
    for(let i = 0; i < firstdata.length; i++){
      camps.push(new Promise((resolve,reject)=>{
        let type = firstdata[i].type;//类型，根据类型编号查询类型
        let sql = `SELECT type_name FROM travel_class WHERE id=${type}`;
        pool.query(sql,(err,seconddata)=>{
          if(err)throw err;
          // 将这个数据组和起来
          firstdata[i].type = seconddata[0].type_name;
          // console.log(firstdata);
          resolve(firstdata);
        });
      }));
    }
    // 使用promise.all处理所有promise
    Promise.all(camps).then(result=>{
      res.send({ code: 1, msg: "首页臻选营地查询成功!", data: result[0] });
    });
  });//.then结尾
});//该路由结尾

// 正选营地更多分页查询！！！
// 接口地址：http://127.0.0.1:5050/pro/campmore?start=0&count=20
// 参数： start开始页面，count每页展示的数据条数！
// 算法：start=（当前页码-1）*每页的数据量；
router.get("/campmore", (req, res) => {
  var s = Number(req.query.start) || 0;
  var c = Number(req.query.count) || 10;
  var data,data1,data2;
  var sql1 = `SELECT id,pic,title,subtitle,type,label1,label2 FROM travel_camp LIMIT ?,?`; 
  var sql2 = "SELECT img1,img2,img3 FROM travel_scroll WHERE cid=?"; 
  var sql3 = "SELECT type_name FROM travel_class WHERE id=?";  
  data = new Promise((resolve,reject)=>{
    pool.query(sql1, [s,c], (err, result) => {
      if (err) throw err;
      if(result.length >0){
        // 对象解构 -- 为了重组数据结构
        ({id,pic,title,subtitle,type,label1,label2} = result[0]);
        // console.log(result[0].pic); // ./static/imgs/1d39d3efc99d4800b99c81d4525c41e1.jpeg
        // 搜索对应类型
        //console.log(type); // 1
        var datas = {};
        datas.id = id;
        datas.pic = [pic];
        datas.title = title;
        datas.subtitle = subtitle;
        datas.type = type;
        datas.label1 = label1;
        datas.label2 = label2;
        resolve(datas);
      }
    }); // pool.query结尾  //data1结尾
  }).then(mydata=>{
    // console.log(res);
    // 这里读取type值，查询type类型的内容
    // 方法二： 使用promise和promise.all相结合。promise.all是让一步程序同步进行的
    data1 = new Promise((resolve,reject)=>{
      var type = mydata.type;
      var type_name;
      pool.query(sql3,[type],(err,result)=>{
        if(err)throw err;
        if(result.length > 0){
          type_name = result[0].type_name;
          mydata.type = type_name;
        }
        resolve(mydata);
      });
    });
    data2 = new Promise((resolve,reject)=>{
      pool.query(sql2,[id],(err,result)=>{
        if(err)throw err;
        if(result.length > 0){
          ({img1,img2,img3} = result);
          var obj = result[0];
          for(var item in obj){
            mydata.pic.push(obj[item]);
          } //图片查到
        }
        resolve(mydata);
      });
    });
    Promise.all([data1,data2]).then(result=>{
      console.log(result);
      res.send({code:1,msg:"臻选数据查询成功！",result});
    });
    // 方法一：使用回调函数
    // select(res,callback1,callback2);
  });
});

//分享
// 请求方法get 接口：/share
// 数据表 ：travel_shared
// 请求的列表： pic/title/likes(点赞数)
router.get("/share", (req, res) => {
  var sql = "SELECT pic,title,likes,type FROM travel_shared";
  pool.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.send({ code: 1, msg: "网友分享数据查询完成！", data: result });
    } else {
      res.send({ code: -1, msg: "暂无网友分享数据！" });
    }
  });
});

// 查询 ---- 未完待续!!!....
// 查询一:当用户输入时,弹出下拉数据
// 接口地址 : http://127.0.0.1:5050/pro/msglist/上海
// 返回值: tabletype 是标识表标识 --> 0标识臻选表 1标识分享表
// 数据库: 1. travel_camp  2. travel_shared
// 返回的data中属性有 :
//    id - 每一个项目的id --> 用于details/v1/result路由传参的第一个参数
//    title - 标题  
//    type - 搜索到这条景点所属类型 --> 用户details/v1/result路由传参的第二个参数
//    tableC - 这条记录是来自于哪个表   0 代表travel_campbiao   1 代表travel_shared
router.get("/msglist/:keyword", (req, res) => {
  var keyword = req.params.keyword;
  if(!keyword.trim()){
    res.send({code:-2,msg:"缺少关键词"});
  }
  var k = "%" + keyword + "%"; //获取到用户输入的查询关键词
  var msg = []; //存储所有查询到的数据,并返回
  if (k.trim()) {
    var sql1 ="SELECT id,title,type FROM travel_camp WHERE title LIKE ? ";
    pool.query(sql1, [k], (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        for(var i = 0; i < result.length; i++){
          result[i].tableC = 0;//0 代表travel_campbiao  
          msg.push(result[i])
        }
      }
      var sql2 = "SELECT id,title,type FROM travel_shared WHERE title LIKE ?";
      pool.query(sql2, [k], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
          for(var i = 0; i < result.length; i++){
            result[i].tableC = 1;//1 代表travel_shared
            msg.push(result[i])
          }
        }
        if (msg.length > 0) {
          res.send({ code: 1, msg: "数据列表", data: msg });
        } else {
          res.send({ code: -1, msg: "暂无数据!" });
        }
      });
    });
  }
  
});


// 


// 导出
module.exports = router;
