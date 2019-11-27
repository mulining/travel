<template>
  <div>
    <van-nav-bar
      v-show="hide"
      z-index="10"
      color="#000"
      @click-left="fanHui"
      fixed="true"
      title="产品详情"
      left-arrow
    >
      <van-icon
        style="margin-right:25px"
        name="star-o"
        color="#000"
        slot="right"
      />
    </van-nav-bar>
    <div class="head">
      <img @click="fanHui" src="@/assets/images/fanHui.png" alt />
      <div>
        <img src="@/assets/images/shouCang.png" alt />
        <img src="@/assets/images/zhuanFa.png" alt />
      </div>
    </div>
    <div class="title">
      <img src="@/assets/images/1719929824.jpg" alt="" />
      <div>
        <h1>北京日光山谷探索发现之旅</h1>
        <div>
          <p>家庭游</p>
          <P>情侣游</P>
          <p>家庭游玩</p>
        </div>
        <h5>出行日期：2019-11-30至2019-12-30</h5>
        <div>
          <img src="@/assets/images/diZhi.png" alt="" />
          <h6>日光山谷 | 2天</h6>
        </div>
      </div>
    </div>
    <div class="main">
      <h2>路线说明</h2>
      <div>
        <p>日光山谷的优美景色，先放出谍照让小伙伴们饱眼福哟</p>
        <img src="@/assets/images/q1.jpg" alt="" />
        <img src="@/assets/images/q1.jpg" alt="" />
        <img src="@/assets/images/q1.jpg" alt="" />
        <img src="@/assets/images/q1.jpg" alt="" />
        <img src="@/assets/images/q1.jpg" alt="" />
        <img src="@/assets/images/q1.jpg" alt="" />
        <img src="@/assets/images/q1.jpg" alt="" />
        <img src="@/assets/images/q1.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hide: false
    };
  },
  methods: {
    fanHui() {
      this.$router.push("/listDetails");
      window.scrollTo(0, 0);
    }
  },
  mounted() {
    window.onscroll = () => {
      var scroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (scroll >= 200) {
        this.hide = true;
      } else {
        this.hide = false;
      }
    };
  }
};
</script>

<style scoped>
.van-nav-bar .van-icon {
  color: #111 !important;
}
.main > div > img {
  width: 102%;
  height: 200px;
  margin: -4px;
}
.main > div > p {
  margin-bottom: 8px;
}
.main > div {
  width: 92%;
  margin: 0 auto;
}
.main {
  background: #fff;
  margin-top: 10px;
}
.main > h2 {
  text-align: center;
  font-size: 1.1rem;
  padding: 10px 0;
}
.title > div > div > h6 {
  color: #999;
}
.title > div > div > img {
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
.title > div > h5 {
  margin: 10px 0;
  color: #888;
}
.title > div {
  padding: 10px;
}
.title > div > h1 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}
.title > div > div > p:nth-child(2) {
  margin: 0 5px;
}
.title > div > div > p {
  border: 1px solid #ddd;
  padding: 2px;
  color: #666;
}
.title > div > div {
  display: flex;
  align-items: center;
}
.title {
  background: #fff;
}
.title > img {
  width: 100%;
  height: 250px;
}
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
  position: fixed;
  align-items: center;
  /* justify-content: space-between; */
}
</style>
