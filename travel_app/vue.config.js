module.exports={
  chainWebpack:config=>{
    config.plugins.delete("prefetch") //删除所有js和link标签的预加载属性，禁止预加载
  }
}