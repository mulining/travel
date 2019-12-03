// 二级页面详情表
const express = require("express");
const router = express.Router();
const pool = require("../pool.js");

// 臻选营地详情页
//请求方法get  接口:details/camp/id - id是对应的哪个数据的详细信息
//数据表 : travel_camp
// 请求的列有: pic/title/subtitle/type/site/intro/phone/share_time
//测试接口地址： 127.0.0.1:5050/details/camp/1
router.get("/camp/:id", (req, res) => {
  var id = Number(req.params.id);
  var data;
  var data1 = "" //负责用来存放所有结果
  var data2 = "" //负责用来存放所有结果
  var sql1 =
    "SELECT pic,title,subtitle,type,label1,label2,site,address,intro,phone,share_time FROM travel_camp WHERE id=?";
  var sql2 = "SELECT img1,img2,img3 FROM travel_scroll WHERE cid=?";       //查找图片
  var sql3 = "SELECT type_name FROM travel_class WHERE id=?";              //查找类型
  // 获取camp数据
  data = new Promise((resolve,reject)=>{
    pool.query(sql1, [id], (err, result) => {
      if (err) throw err;
      if(result.length >0){
        // 对象解构 -- 为了重组数据结构
        ({pic,title,subtitle,type,label1,label2,site,address,intro,phone,share_time} = result[0]);
        // console.log(result[0].pic); // ./static/imgs/1d39d3efc99d4800b99c81d4525c41e1.jpeg
        // 搜索对应类型
        //console.log(type); // 1
        var datas = {};
        datas.pic = [pic];
        datas.title = title;
        datas.subtitle = subtitle;
        datas.type = type;
        datas.label1 = label1;
        datas.label2 = label2;
        datas.site = site;
        datas.address = address;
        datas.intro = intro;
        datas.phone = phone;
        // console.log(result);
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
  // 方法一： 使用回调函数，为后边的两个查询创建两个回调函数，将获取到的数据传给下一个，在第一个查询到的.then中调用select函数，将res传入！
  // function select(res,callback1,callback2){
  //   var type = res.type;
  //   var type_name;
  //   pool.query(sql3,[type],(err,result)=>{
  //     if(err)throw err;
  //     if(result.length > 0){
  //       type_name = result[0].type_name;
  //       res.type = type_name;
  //       callback1(res);
  //     }
  //   });
  //   pool.query(sql2,[type],(err,result)=>{
  //     if(err)throw err;
  //     if(result.length > 0){
  //       ({img1,img2,img3} = result);
  //       var obj = result[0];
  //       for(var item in obj){
  //         res.pic.push(obj[item]);
  //       } //图片查到
  //       callback2(res);
  //     }
  //   });
  // }
  // function callback1(res){
  //   console.log(res);
  // }

  // function callback2(res){
  //   console.log(res);
  // }

});

// 用户搜索的查询结果
// 表travel_camp,表travel_shared
// 接口地址: http://127.0.0.1:5050/details/v1/result/1&0
// 使用前提: 需要传递的参数是,使用product.js文件下的/msglist/:keyword路由查到结果,返回id和type后再使用这个!
// 路由说明: resful- v1表示版本1,后面的才是真的接口地址!
// type值 --- [0~1]
router.get("/v1/result/:id&:type", (req, res) => {
  var id = req.params.id;
  var type = req.params.type;
  console.log(id, type);
  var sql = "";
  if (type == "0") {
    sql =
      "SELECT pic,title,subtitle,type,site,address,intro,phone,share_time FROM travel_camp WHERE id=?"; //臻选表
  } else if (type == "1") {
    sql =
      "SELECT uid,pic,title,subtitle,likes,share_time FROM travel_shared WHERE id=?"; //分享表
  }else{
    res.send({code:-2,msg:"参数范围错误!"});
    return;
  }
  pool.query(sql, [id], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.send({ code: 1, msg: "查询成功!", data: result });
    } else {
      res.send({ code: -1, msg: "查询失败!" });
    }
  });
});

module.exports = router;
