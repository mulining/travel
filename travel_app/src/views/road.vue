<template>
  <div>
    <div class="title">
      <van-row type="flex" justify="space-around">
        <van-col span="6">定制旅行家</van-col>
        <van-col span="6">
          <!-- <img src="../assets/images/全部.png" alt=""> -->
          <van-dropdown-menu active-color="#ee0a24">
            <van-dropdown-item font-size:111px v-model="value1" :options="option1" />
          </van-dropdown-menu>
        </van-col>
        <van-col span="6">
          <!-- <img src="../assets/images/转换.png" alt="">最热 -->
          <van-dropdown-menu active-color="#ee0a24">
            <van-dropdown-item v-model="value2" :options="option2" />
          </van-dropdown-menu>
        </van-col>
      </van-row>
    </div>
    <div class="neirong">
        <ul>
          <li>
            <img src="../assets/imgs/8a61fb85d7074616bff5a6283de4a12e.jpeg" alt="">
            <p>带你领略新西兰100%pureLand七大房车营地</p>
            <p>
              <van-row>
                  <van-col span="5">
                     <img src="../assets/images/icon-test-copy (2).png" alt="">
                  </van-col>
                  <van-col span="14">
                    <span>定制旅行+</span>
                  </van-col>
                  <van-col span="5">
                    <img src="../assets/images/dianzan.png" alt="">3
                  </van-col>
              </van-row> 
            </p>
            
          </li>
          <li></li>
        </ul>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import tabBar from "@/components/tabBar";
export default {
  components: { tabBar },
  created(){
    this.loadMore();
  },
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部", value: 0 },
        { text: "娱乐", value: 1 },
        { text: "休闲", value: 2 },
        { text: "探险", value: 3 }
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "最热", value: "b" },
        { text: "最新", value: "c" }
      ]
    };
  },
  methods:{
    loadMore(){
      var url = "";
    }
  }
};
</script>

<style scoped>
.title{
  box-shadow: 0px 6px 10px #aaa;
}
.van-col--6 {
  margin-top: 20px;
  font-size: 15px;
}
.van-col--6 img {
  margin-left: 20px;
}
.van-dropdown-menu {
  background-color: transparent;
  height: 25px;
}
.neirong{
  padding-top:20px;
  width:95%;
  margin:0 auto;
}
.neirong ul{
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.neirong ul li{
  width:48%;
  height:200px;
  /* background-color: rgba(0, 0, 0, 0.1); */
  border:1px solid #ccc;
  border-radius: 5px;
}
.neirong ul li:nth-child(1){
  height:250px;
}
.neirong ul li img{
  height:180px;
  width:171px;
}
.neirong ul li p img{
  height:16px;
  width: 16px;
}
.neirong ul li p:nth-child(3){
  padding-top:7px;
}
.van-col--8{
  width: 33%;
}
</style>

