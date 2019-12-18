// 关键词搜索的函数 -- 返回类型名称
const pool = require("../pool");
function searchType(id,callback){
    // 这里查询类型
    let Typesql = "SELECT type_name FROM travel_class WHERE id=?" 
    pool.query(Typesql,[id],(err,result)=>{
        if(err) throw err;
        callback(result[0]);//可以查到
    })
}


// export {searchType}
// module.exports = {searchType};
module.exports = searchType;