SET NAMES UTF8;
DROP DATABASE IF EXISTS travel;
CREATE DATABASE travel CHARSET=UTF8;
USE travel;

/**个人信息表-travel_user**/
CREATE TABLE travel_user(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),          #用户名（昵称）
  upwd VARCHAR(32),           #用户密码
  user_name VARCHAR(20),      #真实姓名
  phone VARCHAR(11),          #电话号码
  gender int,                 #性别（1男0女）
  #address VARCHAR(128),      #用户地址*
  sign VARCHAR(128),          #个性签名
  pic VARCHAR(255)            #用户头像
);

/**首页轮播图表-travel_caro**/
CREATE TABLE travel_caro(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(255),           #轮播图片
  title VARCHAR(64),          #图片描述
  href VARCHAR(128)           #图片链接
);

/**甄选营地表（包含详情）-travel_camp**/
CREATE TABLE travel_camp(
  id INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(255),          #封面图片
  title VARCHAR(64),         #标题
  subtitle VARCHAR(128),     #小标题
  type int,                  #营地类型
  #（此处写1、2、3...代表不同地点类型）
  site VARCHAR(128),         #营地位置
  intro VARCHAR(255),        #详细介绍信息
  phone VARCHAR(11),         #联系方式（电话）
  share_time timestamp       #分享日期
);

/**我的收藏表-travel_collect**/
CREATE TABLE travel_collect(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,                   #用户id
  tid INT,                   #所收藏的景点id
  ident INT                  #标识信息
  #（甄选表0 分享表1）
);

/**地点类型表-travel_class**/
CREATE TABLE travel_class(
  id INT PRIMARY KEY AUTO_INCREMENT,
  type_name VARCHAR(32)      
  #此处表中添加数据时写具体地点类型，查找时按id顺序对应显示 
  #例：湖泊型
  #    山地型  
  #    城市型  查找时id=1 -> 湖泊型
);


