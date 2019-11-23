// 
var mysql = require("mysql");
// var pool = mysql.createPool({
//   host:"w.rdc.sae.sina.com.cn",
//   user:"4z135x2jk5",
//   password:"4l1j0k400x23xj253hy5h2h1x3klhm24w2ix011z",
//   database:"app_tmaxtravel",
//   port:3306,
//   connectionLimit:20
// })

var pool = mysql.createPool({
 host:"127.0.0.1",
 user:"root",
 password:"",
 database:"travel",
 port:3306,
 connectionLimit:20
})
module.exports = pool;