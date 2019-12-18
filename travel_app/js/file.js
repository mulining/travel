/**
 * 创建一个文件类，负责处理文件所有操作 
 */ 
// 具体功能有：增删改查，插入数据，提取数据
// 创建一个可以新建文件的对象，需要文件路径和文件数据
// let filepath = ""; //文件路径
// let filedata = ""; //要保存的数据
// let fileObj = null; //ActiveXObject对象


  function File(path){
    this.filepath = path; //这里要生成随机文件名称
      //支持-通过ActiveXObject的一个新实例来创建XMLHttpRequest对象
      this.fileObj = new ActiveXObject("Scripting.FileSystemObject");
      console.log(this.fileObj)
    //不支持
  }


// 创建一个文件
File.prototype.createFile = function(){//path表示在哪个目录下创建文件
  // filename 是要创建的文件名称
  let filename = new Date().getTime() + random();
  console.log(filename);
  // 创建文件
  path += "/"+this.filename;
  if(!fso.FolderExists(path)){
    var f1 = this.fileObj.CreateFolder(path);
  }else{
    this.createFile();
  }
  console.log(f1);
}

// 设置文件数据
File.prototype.setData = function(){

}

// 获取文件数据
File.prototype.getData = function(){

}

// 删除文件
File.prototype.delete = function(){

  fso.DeleteFolder ("C:\\Bogus");
}


// 随机数生成函数
function random(range){
  return parseInt(Math.random()*range)
}

export { File }
 