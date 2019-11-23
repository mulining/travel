<template>
  <div>
     <div class="title">
          <van-icon name="arrow-left" color="#000" size="17px" />
          <h4 style="font-weight: normal;">个人信息</h4>
          <span @click="save_info">保存</span>
     </div>
     <div class="tabout" style="margin-bottom: 8px;">
          <ol type="text">头 像</ol>
          <ol>
            <van-uploader :after-read="onRead" accept="image/*">
              <van-icon style="border-radius:50%;background-color:#ccc;" name="user-o" color="#666" size="45px" />
            </van-uploader>
          </ol>
     </div>
     <div class="tabout">昵 称
          <ol class="sign"><input class="signtext" type="text" placeholder="请设置"></ol>
     </div>
     <div class="tabout">姓 名
        <ol class="sign"><input class="signtext" type="text" placeholder="请设置"></ol>
     </div>
     <van-cell is-link @click="showPopup">性   别
         <ol style="float:right;" >{{value}}</ol>
     </van-cell>
     <van-popup position="bottom" style="height:170px" v-model="show1">
        <div  class="sex-box" style="font-size:16px;padding-left:10px">
          <p>性 别</p> 
          <van-icon @click="chacha" name="cross" size="20px"/>
        </div>
        <div @click="sexvalue" class="sex-box"><p>男</p></div>
        <div @click="sexvalue1" class="sex-box"><p>女</p></div>
        <div @click="sexvalue2" class="sex-box" style="border:none"><p>保密</p></div>
     </van-popup>
     <van-cell is-link @click="showPopup1">所在地区<ol class="choice">请选择</ol></van-cell>
     <van-popup position="bottom" v-model="show2">
        45444
     </van-popup>
     <div class="tabout">个性签名
      <ol class="sign"><input class="signtext" type="text" placeholder="请设置">
      </ol>
     </div>
     <van-popup position="bottom" v-model="show">
       
     </van-popup> 
  </div>
</template>

<script>
import areaList from "../assets/js/area.js";
import { Toast } from "vant";
import qs from "qs"
export default {
    name: "Address",
  data() {
    return {
        areaList,
      searchResult: [],
      uid:"",
      pic:"",
      un: "",
      p:"",
      u_n:"",
      g:"",
    //   a:"",
      s:"",
      files: {
        name: "",
        type: ""
      },
      headerImage: null,
      picValue: null,
      upImgUrl:null,
      show: false,
      show1: false,
      value:"",
      show2: false,
      list:["请选择","男","女","保密"],
    };
  },
  
  methods: {
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
    // 个人信息保存到数据库
    save_info(){
        var url = "user/personal";
        this.axios
        .post(
            url,
            qs.stringify({
                uid:this.uid,
                pic:this.pic,
                un: this.un,
                p:this.p,
                u_n:this.u_n,
                g:this.g,
                // a:this.a,
                s:this.s,
            })
        )
        // .then(res=>{console.log(res)})
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
    color:#999999;
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
