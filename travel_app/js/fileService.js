export default class File {
  filepath = ""; //文件路径
  filedata = ""; //要保存的数据
  fileObj = null; //ActiveXObject对象
  /**
 * 创建一个文件类，负责处理文件所有操作 
 */
  // 具体功能有：增删改查，插入数据，提取数据
  // 创建一个可以新建文件的对象，需要文件路径和文件数据
  constructor(path, data) {
    this.filepath = path; //这里要生成随机文件名称
    this.filedata = data;
    fileObj = new ActiveXObject('Scripting.FileSystemObject');
  }

  // 创建一个文件
  createFile = function () {//path表示在哪个目录下创建文件
    // filename 是要创建的文件名称
    let filename = new Date().getTime() + random();
    console.log(filename);
    // 创建文件
    this.filepath += "/" + filename;
    let f1 = fileObj.CreateFolder(this.filepath);
    console.log(f1);
  }

  // 设置文件数据
  setData = function () {

  }

  // 获取文件数据
  getData = function () {

  }

  // 删除文件
  delete() {
    (this.fileObj.DeleteFolder("C:\\Bogus"));
  }


  // 随机数生成函数
  random(range) {
    return parseInt(Math.random() * range)
  }

}