<template>
  <div v-if="isRouterAlive">
     <div class="title">
       <router-link to="/my">
          <van-icon name="arrow-left" color="#000" size="17px" />
       </router-link>
          <h4 style="font-weight: normal;">个人信息</h4>
          <router-link to="/my">
            <span @click="save_info" style="color:#000;">保存</span>
          </router-link>
     </div>
     <div class="tabout" style="margin-bottom: 8px;padding:6px 16px">
          <ol type="text">头 像</ol>
          <ol style="display:flex;align-items: center;">
            <van-uploader :after-read="onRead" accept="image/*">
              <img :src="$store.getters.userpic" style="width:55px;border-radius:50%;" ref="goodsImg"/>
            </van-uploader>
            <van-icon name="arrow" style="color:#444;size:20px" />
          </ol>
     </div>
     <div class="tabout">昵 称
          <ol class="sign"><input class="signtext" v-model="nick" type="text" placeholder="请设置昵称"></ol>
     </div>
     <div class="tabout">姓 名
        <ol class="sign"><input class="signtext" v-model="uname" type="text" placeholder="请设置真实姓名"></ol>
     </div>
     <van-cell is-link @click="showPopup">性   别
         <ol style="float:right;color:#555;" >{{value}}</ol>
     </van-cell>
     <div class="tabout">手机号
        <ol class="sign"><input class="signtext" v-model="phone" type="text" placeholder="请输入您的手机号"></ol>
     </div>
     <van-popup position="bottom" style="height:170px" v-model="show1">
        <div  class="sex-box" style="font-size:16px;padding-left:10px">
          <p>性 别</p> 
          <van-icon @click="chacha" name="cross" size="20px"/>
        </div>
        <div @click="sexvalue" class="sex-box"><p>男</p></div>
        <div @click="sexvalue1" class="sex-box"><p>女</p></div>
        <div @click="sexvalue2" class="sex-box" style="border:none"><p>保密</p></div>
     </van-popup>
     <van-cell is-link @click="showPopup1">所在地区<ol class="choice">{{cty_value}}</ol></van-cell>
     <van-popup position="bottom" v-model="show2">
        <van-area  :area-list="areaList" @confirm="myresult"/>
        
     </van-popup>
     <div class="tabout">个性签名
      <ol class="sign"><input class="signtext" v-model="s" type="text" placeholder="请设置">
      </ol>
     </div>
     <!-- 测试代码 ↓-->
     <van-popup position="bottom" v-model="show">
       
     </van-popup> 
  </div>
</template>

<script>
import areaList from "../assets/js/area.js";
import { Toast,Dialog } from "vant";
import qs from "qs"
export default {
    name: "Address",
  data() {
    return {
      cty_value:"",//所在地区
      areaList,
      searchResult: [],
      uid:"",
      pic:"",
      nick:"",//昵称
      uname:"",//姓名
      p:"",
      u_n:"",
      g:"",
      s:"",//个性签名
      phone:"",//手机号
      files: {
        name: "",
        type: ""
      },
      headerImage: null,
      picValue: null,
      upImgUrl:null,
      show: false,
      show1: false,
      value:"",//性别
      show2: false,
      list:["请选择","男","女","保密"],
      // 上传的图片
      Imagefiles:[],
      isRouterAlive:true //页面刷新控制器
    };
  },
  created:function(){
    // 请求个人数据
    this.pleaseData()
  },
  methods: {
    pleaseData(){
      console.log(JSON.parse(sessionStorage.store))
    },
    onRead(file) {
        console.log(file);
        //将原图片显示为选择的图片
        this.$refs.goodsImg.src = file.content;
        this.Imagefiles = file;
    },
    // 截取blob字符串的兼容性问题方法
    sliceBlob(blob, start, end, type) {
      type = type || blob.type;
      if (blob.mozSlice) {
          return blob.mozSlice(start, end, type);
      } else if (blob.webkitSlice) {
          return blob.webkitSlice(start, end ,type);
      } else {
          throw new Error("This doesn't work!");
      }
    },
      // 个人信息:获取详细地址方法
    myresult(e){
      this.cty_value = e[0].name+"-"+e[1].name+"-"+e[2].name
        console.log(this.cty_value);
        return{}
    },
    showPopup() {
      this.show1 = true;
    },
    showPopup1() {
      this.show2 = true;
    },
    showPopup2() {
      this.show = true;
    },
    showPopup3() {
      this.show = true;
    },
    chacha(){
      this.show1=false;
    },
    sexvalue(){
      this.value = this.list[1],
      this.chacha() 
    },
     sexvalue1(){
      this.value = this.list[2]
      this.chacha()
    }, 
    sexvalue2(){
      this.value = this.list[3]
      this.chacha()
    },
    // 这里需要在
    // 个人信息保存到数据库
    save_info(){
        // 1.上传头像
        var imgContent = this.Imagefiles.content;
        var url = "user/personal";
        this.axios
        .post(
            url,
            qs.stringify({
                pic : imgContent,
                nick : encodeURIComponent(this.nick),
                user_name : encodeURIComponent(this.uname),
                gender : this.value,
                cty_value : encodeURIComponent(this.cty_value),
                sign : encodeURIComponent(this.s),
                phone : this.phone
            })
        )
        .then(res=>{
          Toast("上传成功!");
          // 更新vuex中的数据
          var obj = {
            pic : imgContent,
            nick : this.nick,
            sign : this.s
          }
          this.$store.commit("fixUserInfo",obj)
        })
        .catch(err=>{
          Toast("上传失败，请重新上传!");
        })
    },
    // 刷新
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
    
  }
};
</script>

<style scoped>
  .title{
    padding: 15px 8px;
    font-size: 16px;
    margin-bottom: 8px;
    align-items: center;
    line-height: 1.8;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
  }
  .van-cell__value{
   display: flex;
    justify-content: space-between;
  }
  .choice,.sign{
    color:#555;
  }
  .tabout{
    align-items: center;
    padding: 10px 16px;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    border-bottom: 1px solid#eeeeee91;
    background-color: #fff;
    justify-content: space-between;
    }
    .signtext{
    height: auto;
    width:260px;
    padding-right:20px;
    text-align: end;
    }
    .signpic{
    background-color:#eee; 
    width:60px;height:60px; 
    border-radius: 50%;
    }
    .sex-box{
      display: flex;
      justify-content: space-between;
      padding: 10px 18px;
      font-size: 14px;
      color: black;
      border-bottom: 1px solid #ddd;
    }
    
</style>
