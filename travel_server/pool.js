var mysql = require("mysql");
//var pool = mysql.createPool({
//	host     : process.env.MYSQL_HOST,
//    port     : process.env.MYSQL_PORT,
//    user     : process.env.ACCESSKEY,
//    password : process.env.SECRETKEY,
//    database : 'app_' + process.env.APPNAME
//	connectionLimit:20
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