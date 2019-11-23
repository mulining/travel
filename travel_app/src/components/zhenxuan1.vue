<template>
  <div>
    <div class="head">
      <img @click="fanHui" src="@/assets/images/fanHui.png" alt="" />
      <div>
        <img src="@/assets/images/shouCang.png" alt="" />
        <img src="@/assets/images/zhuanFa.png" alt="" />
      </div>
    </div>
    <div>
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, i) of list" :key="i">
          <img class="lunbo" :src="item.pic" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="title">
      <van-tag mark color="#e0f523" style="color:#000;padding:3px 15px"
        >臻选</van-tag
      >
      <div>
        <h6>处太湖一号露营公园内</h6>
        <h6>距市区1小时车程</h6>
      </div>
      <h2>苏州太湖一号房车营地</h2>
      <p>湖泊型 | <span>BBQ · 烧烤轰趴 · 儿童乐园 · 适合野餐</span></p>
    </div>
    <div class="map">
      <div class="diTu">
        <p class="mask"></p>
      </div>
      <div class="zuoBiao">
        <img src="@/assets/images/diZhi.png" alt="" />
        <h6>
          江苏省苏州市金阊区镇湖镇北太湖大道1699号
          <van-icon name="arrow" color="#888" />
        </h6>
      </div>
      <div class="phone">
        <img src="@/assets/images/phone.png" alt="" />
        <h6>
          110-110
          <van-icon name="arrow" color="#888" />
        </h6>
      </div>
      <router-link to="/map" tag="p">
        <img src="@/assets/images/daoHang.png" alt="" />
      </router-link>
    </div>
    <div class="jieShao">
      <h3>营地介绍</h3>
      <p>
        苏州太湖一号房车露营公园隶属于苏州盖普房车露营管理有限公司旗下营地项目，立足苏州西部，依托高新区镇湖原生态环境条件。公司占地170余亩，现为国家五星级汽车露营地。项目充分体现“生态、绿色、休闲”特色，倡导时尚的户外露营生活。太湖一号房车营地内共建设90个
      </p>
      <button @click="gengDuo" class="btn">查看更多</button>
      <div v-show="show" class="gengDuo">
        <h2>营地介绍</h2>
        <h3>营地描述</h3>
        <p>
          苏州太湖一号房车露营公园隶属于苏州盖普房车露营管理有限公司旗下营地项目，立足苏州西部，依托高新区镇湖原生态环境条件。公司占地170余亩，现为国家五星级汽车露营地。项目充分体现“生态、绿色、休闲”特色，倡导时尚的户外露营生活。太湖一号房车营地内共建设90个标准房车营位，45辆营地房车，每个营位除配备水电、排污接口以及野餐、水池、烧烤架等基础设备外，以便露营着使用。
        </p>
        <van-icon
          @click="hide"
          size="20"
          style="top:410px;left:163px"
          name="cross"
        />
      </div>
    </div>
    <dl>
      <dt>
        <h3>营地设备</h3>
      </dt>
      <dd>
        <div>
          <img src="@/assets/images/xiuXi.png" alt="" />
          <p>公共休息区</p>
        </div>
        <div>
          <img src="@/assets/images/xiuXi.png" alt="" />
          <p>公共休息区</p>
        </div>
        <div>
          <img src="@/assets/images/xiuXi.png" alt="" />
          <p>公共休息区</p>
        </div>
        <div>
          <img src="@/assets/images/xiuXi.png" alt="" />
          <p>公共休息区</p>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      list: [
        {
          pic: require("@/assets/images/0d4fd1721b5f450d90171c24a465ee55.jpeg")
        },
        {
          pic: require("@/assets/images/f37297b8e0b343fc94138737b94464fc.png")
        },
        { pic: require("@/assets/images/291b76bb97ee4c62839077a5e49c85ff.jpg") }
      ]
    };
  },
  methods: {
    gengDuo() {
      this.show = true;
    },
    hide() {
      this.show = false;
    },
    fanHui() {
      this.$router.push("/home")
    }
  }
};
</script>

<style scoped>
.head > div > img:last-child {
  position: absolute;
  left:350px;
  top: 7px;
}
.head > div > img:first-child {
  position: absolute;
  top: 7px;
  left:315px;
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
.gengDuo > h2 {
  font-size: 0.9rem;
  margin: 10px 0;
}
.gengDuo > p {
  width: 93%;
  margin-top: 10px;
  font-size: 0.8rem;
}
.gengDuo {
  z-index: 10;
  padding: 10px;
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
