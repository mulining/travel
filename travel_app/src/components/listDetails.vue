<template>
  <div>
    <!-- 搜索框 -->
    <van-search
      :v-model="$store.getters.inputValue"
      placeholder="请输入搜索关键词"
      show-action
      @cancel="onCancel"
    />
    <!-- 详情列表 -->
    <div
      class="main"
      @click="details(item.id)"
      v-for="(item, i) of list"
      :key="i"
    >
      <img :src="item.pic" alt="" />
      <div>
        <h4 v-text="item.h4"></h4>
        <div>
          <p v-text="item.p1"></p>
          <p v-text="item.p2"></p>
          <p v-text="item.p3"></p>
        </div>
        <div class="diZhi">
          <img :src="item.diZhiPic" alt="" />
          <h6 v-text="item.h6"></h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      list: [
        {
          id: "1",
          pic: require("@/assets/images/1719929824.jpg"),
          h4: "北京日光山谷谈搜发现之旅",
          p1: "家庭游",
          p2: "情侣游",
          p3: "家庭游玩",
          diZhiPic: require("@/assets/images/diZhi1.png"),
          h6: "日光山谷 | 2天"
        },
        {
          pic: require("@/assets/images/1719929824.jpg"),
          h4: "北京日光山谷谈搜发现之旅",
          p1: "家庭游",
          p2: "情侣游",
          p3: "家庭游玩",
          diZhiPic: require("@/assets/images/diZhi1.png"),
          h6: "日光山谷 | 2天"
        },
        {
          pic: require("@/assets/images/1719929824.jpg"),
          h4: "北京日光山谷谈搜发现之旅",
          p1: "家庭游",
          p2: "情侣游",
          p3: "家庭游玩",
          diZhiPic: require("@/assets/images/diZhi1.png"),
          h6: "日光山谷 | 2天"
        }
      ]
    };
  },
  methods: {
    onCancel() {
      this.$router.push("/home");
    },
    details(id) {
      this[id]();
    },
    1() {
      this.$router.push("/travelDetails");
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style scoped>
.main > div > .diZhi > img {
  margin-right: 4px;
}
.main > div > .diZhi {
  margin-top: 25px;
  color: #888;
}
.main > div > div > p:nth-child(2) {
  margin: 0 5px;
}
.main > div > div > p {
  border: 1px solid #ddd;
  padding: 2px;
  color: #666;
}
.main > div > div {
  display: flex;
}
.main > div > h4 {
  font-size: 0.9rem;
  margin: 3px 0;
}
.main > img {
  width: 100px;
  height: 100px;
  margin-right: 10px;
}
.main {
  background: #fff;
  width: 95%;
  margin: 10px auto;
  display: flex;
  border-radius: 5px;
  box-shadow: 0 0 10px #eee;
}
</style>
