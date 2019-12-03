<template>
  <div>
    <van-nav-bar
      v-show="hide"
      z-index="10"
      @click-left="fanHui"
      fixed="true"
      title="苏州太湖一号房车营地"
      left-arrow
    >
      <!-- <van-icon name="search" slot="right" /> -->
    <van-icon name="star-o" color="#000" slot="right" />
    </van-nav-bar>
    <div class="head">
      <img @click="fanHui" src="@/assets/images/fanHui.png" alt />
      <div>
        <img @click="Collecting" src="@/assets/images/shouCang.png" alt />
        <img src="@/assets/images/zhuanFa.png" alt />
      </div>
    </div>
    <div>
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, i) of list" :key="i">
          <img class="lunbo" :src="item.pic" alt />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="title">
      <van-tag mark color="#e0f523" style="color:#000;padding:3px 15px"
        >臻选</van-tag
      >
      <div class="label">
        <h6>{{lists.label1}}</h6>
        <h6>{{lists.label2}}</h6>
      </div>
      <h2>{{ lists.title }}</h2>
      <p>
        {{ lists.type }} |
        <span>{{ lists.subtitle }}</span>
      </p>
    </div>
    <!-- 地图 -->
    <div class="map">
      <div class="diTu">
        <p class="mask"></p>
      </div>
      <div class="zuoBiao">
        <img src="@/assets/images/diZhi.png" alt />
        <h6>
          {{ lists.address }}
          <van-icon name="arrow" color="#888" />
        </h6>
      </div>
      <div class="phone">
        <img src="@/assets/images/phone.png" alt />
        <h6>
          {{ lists.phone }}
          <van-icon name="arrow" color="#888" />
        </h6>
      </div>
      <router-link :to="{name:'map',params:{id:id}}" tag="p">
      <!--  map(id){
      this.$router.push({path:'map',query:{id:id}})
    } -->
        <img src="@/assets/images/daoHang.png" alt />
      </router-link>
    </div>
    <!-- 营地介绍 -->
    <div class="jieShao">
      <h3>营地介绍</h3>
      <p>{{ lists.intro }}</p>
      <button @click="gengDuo" class="btn">查看更多</button>
      <div v-show="show" class="gengDuo">
        <h2>营地介绍</h2>
        <h3>营地描述</h3>
        <p>{{ lists.intro }}</p>
        <van-icon class="icon" @click="yC" size="20" name="cross" />
      </div>
    </div>
    <!-- 营地设备 -->
    <dl>
      <dt>
        <h3>营地设备</h3>
      </dt>
      <dd>
        <div>
          <img src="@/assets/imgs/sofa.png" alt />
          <p>公共休息区</p>
        </div>
        <div>
          <img src="@/assets/imgs/wifi.png" alt />
          <p>免费WiFi</p>
        </div>
        <div>
          <img src="@/assets/imgs/eat.png" alt />
          <p>野餐区</p>
        </div>
        <div>
          <img src="@/assets/imgs/BBQ.png" alt />
          <p>烧烤设施</p>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
export default {
  props: ["id"],
  data() {
    return {
      show: false,
      hide: false,
      list: [
        {
          pic: require("@/assets/images/0d4fd1721b5f450d90171c24a465ee55.jpeg")
        },
        {
          pic: require("@/assets/images/f37297b8e0b343fc94138737b94464fc.png")
        },
        {
          pic: require("@/assets/images/291b76bb97ee4c62839077a5e49c85ff.jpg")
        }
      ],
      imgs: [],
      lists: []
    };
  },
  mounted() {
    window.onscroll = () => {
      var scroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (scroll >= 50) {
        this.hide = true;
      } else {
        this.hide = false;
      }
    };
  },
  methods: {
    Collecting() {
      Toast("已加入收藏");
    },
    gengDuo() {
      this.show = true;
    },
    yC() {
      this.show = false;
    },
    fanHui() {
      this.$router.push("/home");
    }
  },
  created() {
    var url = "details/camp/" + this.id; //接口地址
    this.axios
      .get(url)
      .then(res => {
        console.log(res);
        var obj = res.data.data[0];
        console.log(obj);
        // this.imgs=obj.imgs; 暂无
        this.lists = obj;

        // wwwwwwwo(╥﹏╥)o
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.head > div > img:last-child {
  position: absolute;
  left: 350px;
  top: 7px;
}
.head > div > img:first-child {
  position: absolute;
  top: 7px;
  left: 315px;
}
.head > div > img {
  background: rgba(0, 0, 0, 0.5);
  padding: 3px;
  border-radius: 50%;
}
.head > img {
  position: absolute;
  left: 10px;
  top: 7px;
}
.head {
  display: flex;
  align-items: center;
  z-index: 1;
  position: absolute;
  align-items: center;
  /* justify-content: space-between; */
}
.title .label{
  /* height: 18px; */
  /* display: inline-flex; */
  /* 自动换行 */
  word-break: break-all;
}
.title h6{
  white-space: nowrap;
}
.gengDuo > h2 {
  font-size: 0.9rem;
  margin: 20px 18px 10px;
}
.gengDuo > h3 {
  margin: 10px 18px;
}
.gengDuo > p {
  margin: 10px 18px;
  font-size: 0.8rem;
  text-indent: 25px;
}
.gengDuo {
  z-index: 10;
  position: fixed;
  float: left;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.97);
}
dl > dd {
  display: flex;
  text-align: center;
  margin: 10px 0;
  justify-content: space-around;
}
dl {
  background: #fff;
  margin-top: 10px;
  padding: 10px;
}
dl > dt > h3 {
  font-size: 1rem;
}
.jieShao > .btn {
  background: none;
  border: 1px solid #1ee1e5;
  color: #1ee1e5;
  border-radius: 50px;
  padding: 4px 15px;
  margin-left: 75%;
  margin-top: 15px;
}
.jieShao > p {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.jieShao > h3 {
  font-size: 1rem;
  margin: 5px 0;
}
.jieShao {
  padding: 10px;
  background: #fff;
}
.jieShao .icon {
  position: absolute;
  bottom: 50px;
  display: flex;
  justify-content: center;
  left: 0;
  right: 0;
}
.map > p > img {
  width: 25px;
  height: 25px;
  position: absolute;
  background: #1ee1e5;
  padding: 10px;
  right: -14px;
  top: 25px;
  border-radius: 2px;
}
.map > .zuoBiao > img {
  width: 20px;
  height: 20px;
  margin: 0 10px;
}
.map > .phone > img {
  width: 20px;
  height: 20px;
  margin: 0 10px;
}
.map > .phone {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 10px;
}
.map > .zuoBiao > h6 {
  width: 80%;
}
.map > .zuoBiao {
  display: flex;
  position: absolute;
  /* align-items: center; */
  top: 10px;
}
.map > div > .mask {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  z-index: 10;
}
.map {
  width: 90%;
  position: relative;
  box-shadow: 0 0 10px #c0bebe;
  border-radius: 5px;
  margin: 0 auto;
}
.map > .diTu {
  height: 100px;
  margin-top: 15px;
  background: url("../assets/images/map.png") no-repeat -30px -125px;
}
.title > p > span {
  color: #666;
}
.title > h2 {
  font-size: 1rem;
  margin-bottom: 7px;
}
.title > div > h6:first-child {
  margin-right: 10px;
}
.title > div > h6 {
  background: #e4eff6;
  border-radius: 5px;
  padding: 0 5px;
  margin: 10px 0;
  color: #0073bc;
}
.title > div {
  display: flex;
}
.title {
  padding: 10px;
  background: #fff;
}
.lunbo {
  width: 100%;
  height: 250px;
  z-index: 0;
  color: #e0f523;
}
</style>
