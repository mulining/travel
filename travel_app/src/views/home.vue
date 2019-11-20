<template>
  <div>
    <my-header></my-header>
    <!-- 搜索 -->
    <router-link to="/search">
      <van-search
        id="d"
        placeholder="输入目的地，查找体验线路或营地"
        v-model="value"
      />
    </router-link>
    <!-- 轮播 -->
    <lun-bo></lun-bo>
    <!-- 内容 -->
    <div class="ctn">
      <p class="yeShe">野奢·逸趣</p>
      <ul class="main">
        <li>
          <img src="@/assets/images/e42461a81f764d7b997cfce51fe5e5c8.jpg" alt />
          <div class="fangChe">
            <p>房车出行必备</p>
            <p>星空下露营，圆一个房车梦</p>
          </div>
        </li>
        <li class="mainRight">
          <div>
            <img
              src="@/assets/images/6388f48e1e134324a1934a964b11b892.png"
              alt
            />
            <p>100%最美新西兰</p>
          </div>
          <div>
            <img
              src="@/assets/images/0e838b2501d04ba8a8dd21f211d432fd.jpg"
              alt
            />
            <p>耶稣露营新玩法</p>
          </div>
        </li>
      </ul>
      <ul class="mainBottom">
        <li>
          <p>东八区的这里没有时差，也不是你想象的模样</p>
          <p>16983·阅读</p>
        </li>
        <li>
          <img src="@/assets/images/283f55f175924b99bfa35431a9f7c5b9.jpg" alt />
        </li>
      </ul>
      <router-link to="/road">
        <button class="but">看看别人怎么玩</button>
      </router-link>
      <p class="yeShe">臻选营地</p>
      <div class="yD">
        <div class="yingDi" v-for="(item, i) of yingDi" :key="i">
          <a href="javascript:;">
            <div>
              <img :src="item.pic" alt />
              <p :class="sst[i]" v-text="item.p1"></p>
            </div>
            <h6 v-text="item.h6"></h6>
            <h3 v-text="item.h3"></h3>
            <h5 v-text="item.h5"></h5>
          </a>
        </div>
      </div>
      <router-link to="/more">
        <button class="but">查看更多臻选营地</button>
      </router-link>
      <dl class="gaoFen">
        <dt>
          <p class="yeShe">高分旅行体验</p>
        </dt>
        <dd v-for="(item, i) of list" :key="i">
          <div>
            <img :src="item.pic" alt />
          </div>
          <div>
            <h5 v-text="item.h5"></h5>
            <h6 v-text="item.h6"></h6>
          </div>
        </dd>
      </dl>
      <router-link to="">
        <button class="but">查看所有体验线路</button>
      </router-link>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import lunBo from "@/components/lunBo";
import tabBar from "@/components/tabBar";
import myHeader from "@/components/myHeader";
export default {
  components: { lunBo, tabBar, myHeader },
  data() {
    return {
      list: [
        {
          pic: require("@/assets/images/20161201134748_79150.jpg"),
          h5: "半山之上 隐秘静悠 | 汤山温泉 房车露营2日游",
          h6: "江浙泸周末去这里"
        },
        {
          pic: require("@/assets/images/20161201134748_79150.jpg"),
          h5: "半山之上 隐秘静悠 | 汤山温泉 房车露营2日游",
          h6: "江浙泸周末去这里"
        }
      ],
      sst: [, "ss2", "ss2", "ss2"],
      yingDi: [
        {
          pic: require("@/assets/images/33dbdef8721143ac817cbd229cd02e98.jpg"),
          p1: "上新",
          h6: "毗邻太湖 踏春游玩好去处",
          h3: "苏州太湖一号房车营地",
          h5: "湖泊型"
        },
        {
          pic: require("@/assets/images/thumb_600_auto_10d5080e34df7930e6dc3a5ce72697b6.jpg"),
          p1: "臻选",
          h6: "迪士尼附近 网红打卡圣地",
          h3: "上海领家露营地",
          h5: "湖泊型"
        },
        {
          pic: require("@/assets/images/0d4fd1721b5f450d90171c24a465ee55.jpeg"),
          p1: "臻选",
          h6: "环境优雅 适合家庭亲子",
          h3: "北京日光山谷露营地",
          h5: "城市型"
        },
        {
          pic: require("@/assets/images/200512000000t7inhD54B_R_300_225.jpg"),
          p1: "臻选",
          h6: "呼吸纯氧 青山相伴 风景秀丽",
          h3: "途居黄山露营地",
          h5: "山地型"
        }
      ],
      value: ""
    };
  }
};
</script>

<style scoped>
.gaoFen > dd > div:last-child > p {
  color: #666;
  font-size: 1rem;
  margin-top: 10px;
}
.gaoFen > dd > div:last-child > h6 {
  font-size: 0.5rem;
  background: rgb(209, 225, 236);
  color: #51b1ee;
  width: 120px;
  text-align: center;
  border-radius: 2px;
  margin-top: 25px;
  padding: 2px 0;
}
.gaoFen > dd > div:last-child {
  width: 60%;
}
.gaoFen > dd:nth-child(2) {
  border-bottom: 1px solid #aaa;
}
.gaoFen > dd {
  display: flex;
  justify-content: space-between;
  height: 120px;
  margin-bottom: 20px;
}
.gaoFen > dd > div:first-child {
  width: 37%;
}
.gaoFen > dd > div:first-child > img {
  width: 100%;
  height: 100px;
}
.ss2 {
  background-image: linear-gradient(
    90deg,
    #856900,
    rgb(222, 250, 64)
  ) !important;
  color: #000 !important;
}
.yD {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.yingDi > a > h5 {
  color: rgb(133, 127, 127);
  font-size: 0.7rem;
  border: 1px solid rgb(109, 106, 109);
  width: 43px;
  text-align: center;
}
.yingDi > a > h3 {
  color: #000;
  margin: 5px 0;
}
.yingDi > a > h6 {
  font-size: 0.7rem;
  color: rgb(248, 97, 97);
}
.yingDi > a > div > p {
  position: absolute;
  top: 10px;
  left: 0px;
  background: #ee6a6a;
  /* border-top-right-radius: 15px;
  border-bottom-right-radius: 15px; */
  font-size: 0.1rem;
  border-radius: 10px 1px 14px 2px;
  color: #fff;
  padding: 2px 10px;
}
.yingDi > a > div {
  position: relative;
}
.yingDi > a > div > img {
  width: 100%;
  height: 125px;
}
.yingDi > a {
  margin-bottom: 10px;
}
.yingDi {
  width: 48%;
  display: flex;
}
.zhenXuan {
  font-size: 1.3rem;
  margin: 10px 0;
}
.but {
  width: 100%;
  padding: 7px 0;
  background: #fff;
  border: 1px solid rgb(179, 176, 176);
  border-radius: 3px;
  margin: 20px 0;
  color: #000;
  font-size: 1rem;
}
.mainBottom > li:last-child > img {
  width: 100%;
  border-radius: 3px;
}
.mainBottom > li > p:last-child {
  font-size: 0.5rem;
  margin-top: 30px;
  color: rgb(109, 106, 109);
}
.mainBottom > li > p:first-child {
  font-size: 0.9rem;
}
.mainBottom > li:last-child {
  width: 38%;
}
.mainBottom > li:first-child {
  width: 60%;
}
.mainBottom {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.main > .mainRight > div:last-child > p {
  position: absolute;
  top: 107px;
  right: 40px;
  font-size: 1rem;
  color: rgb(247, 245, 245);
}
.main > .mainRight > div > img {
  width: 100%;
  height: 63px;
  border-radius: 3px;
}
.main > li .fangChe > p:first-child {
  color: #000;
  font-size: 1rem;
}
.main > li .fangChe > p:last-child {
  font-size: 0.1rem;
  color: rgb(46, 44, 46);
}
.main > li .fangChe {
  position: absolute;
  top: 85px;
  left: 10px;
  z-index: 1;
}
.main > .mainRight > div:first-child > p {
  position: absolute;
  top: 38px;
  right: 40px;
  font-size: 1rem;
  color: rgb(247, 245, 245);
}
/* .main > li:last-child div > img {
  width: 100%;
  height: 100px;
} */
.main > li:first-child > img {
  width: 100%;
  height: 130px;
  border-radius: 3px;
}
.main > li {
  width: 49%;
}
.main {
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: space-between;
}
.yeShe {
  font-size: 1.3rem;
  margin: 10px 0;
}
.ctn {
  width: 90%;
  margin: 0 auto;
}
.van-search {
  position: absolute;
  z-index: 1;
  background-color: transparent !important;
  margin: 0 auto;
  width: 100%;
  color: #fff;
}
.van-search__content {
  background: rgb(44, 37, 37);
  opacity: 0.7;
}
.van-search .van-cell {
  width: 100%;
  margin: 0 auto;
}
.van-cell {
  color: #fff;
}
</style>
