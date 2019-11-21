<template>
  <div>
    <div class="head" style="margin-bottom:0.8rem">
      <!-- 搜索 -->
      <div style="">
        <img @click="fanHui" src="@/assets/images/zuoJianTou.png" alt="" />
        <van-search
          @search="queDing"
          style="width:100%"
          placeholder="搜索城市或营地名称"
          v-model="value"
        />
      </div>
      <div class="diTu">
        <img src="@/assets/images/diTu.png" alt="" />
        <p>地图</p>
      </div>
      <!-- 下拉菜单 -->
      <van-dropdown-menu active-color="#18eaee">
        <router-link to="/home">
          <button class="btn">位置</button>
        </router-link>
        <van-dropdown-item v-model="value3" :options="option3" />
        <van-dropdown-item title="筛选" ref="item">
          <van-switch-cell v-model="switch1" title="全部" />
          <van-switch-cell v-model="switch2" title="城市型" />
          <van-switch-cell v-model="switch3" title="山地型" />
          <van-switch-cell v-model="switch4" title="湖泊型" />
          <van-switch-cell v-model="switch5" title="森林型" />
          <van-switch-cell v-model="switch6" title="平原型" />
          <van-button block type="info" @click="onConfirm">确认</van-button>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>
    <div class="main" v-for="(item, i) of list" :key="i">
      <van-swipe
        style="border-radius:5px;margin-top:0.8rem"
        :loop="false"
        :height="200"
      >
        <van-swipe-item v-for="(item, i) of lunBo" :key="i">
          <img style="width:100%" :src="item.pic" alt="" />
        </van-swipe-item>
      </van-swipe>
      <p v-text="item.p"></p>
      <dl>
        <dt>
          <h6 v-text="item.h1"></h6>
          <h6 v-text="item.h2"></h6>
          <h6 v-text="item.h3"></h6>
        </dt>
        <dd>
          <h5 v-text="item.h4"></h5>
          <h6>
            {{ item.h6 }}
            <span v-text="item.s"></span>
          </h6>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switch1: true,
      switch2: false,
      switch3: false,
      switch4: false,
      switch5: false,
      switch6: false,
      list: [
        {
          p: "精选",
          h1: "金迪士尼",
          h2: "距离市区1小时车程",
          h3: "距迪士尼地铁站1公里",
          h4: "上海邻家露营地",
          h6: "湖泊型 |",
          s: "野奢度假酒店 · 网红打卡地"
        },
        {
          p: "精选",
          h1: "金迪士尼",
          h2: "距离市区1小时车程",
          h3: "距迪士尼地铁站1公里",
          h4: "上海邻家露营地",
          h6: "湖泊型 |",
          s: "野奢度假酒店 · 网红打卡地"
        },
        {
          p: "精选",
          h1: "金迪士尼",
          h2: "距离市区1小时车程",
          h3: "距迪士尼地铁站1公里",
          h4: "上海邻家露营地",
          h6: "湖泊型 |",
          s: "野奢度假酒店 · 网红打卡地"
        }
      ],
      lunBo: [
        {
          pic: require("@/assets/images/u=3704064287,856200149&fm=26&gp=0.jpg")
        },
        {
          pic: require("@/assets/images/u=2730421875,2341573905&fm=26&gp=0.jpg")
        },
        {
          pic: require("@/assets/images/u=2137189422,197364613&fm=26&gp=0.jpg")
        },
        {
          pic: require("@/assets/images/u=769771342,520870808&fm=26&gp=0.jpg")
        },
        {
          pic: require("@/assets/images/u=1260138052,2561790311&fm=26&gp=0.jpg")
        },
        {
          pic: require("@/assets/images/u=4153368400,383764819&fm=26&gp=0.jpg")
        }
      ],
      hide: true,
      value3: 1,
      value3: 0,
      value2: 0,
      option2: [{ text: "123", value: 0 }],
      option3: [
        { text: "价格升序", value: 0 },
        { text: "热度排序", value: 1 }
      ]
    };
  },
  methods: {
    // 确认按钮
    queDing() {},
    fanHui() {
      this.$router.push("/home");
    },
    onConfirm() {
      this.$refs.item.toggle();
    }
  }
};
</script>

<style scoped>
.head > div:first-child > img {
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.9rem 0.5rem 0;
}
.head > div:first-child {
  background: #fff;
  display: flex;
}
.head > .diTu > img {
  width: 1rem;
  height: 1rem;
}
.head > .diTu {
  position: absolute;
  right: 20px;
  top: 15px;
  display: flex;
  font-size: 1rem;
  align-items: center;
  color: #1ee3a8;
}
.main dl > dd > h6 > span {
  color: #646464;
}
.main dl > dd > h5 {
  font-size: 1rem;
  margin: 0.3rem 0;
}
.main dl > dt > h6 {
  background: #e4eff6;
  border-radius: 4px;
  color: #0073bc;
  padding: 0.1rem;
}
.main dl > dt > h6:nth-child(2) {
  margin: 0 0.5rem;
}
.main dl {
  padding: 1rem;
  margin-bottom: 1rem;
}
.main dl > dt {
  display: flex;
}
.main p {
  position: absolute;
  top: 10px;
  left: 0px;
  background-image: linear-gradient(90deg, #856900, rgb(222, 250, 64));
  font-size: 0.1rem;
  border-radius: 10px 1px 14px 2px;
  color: #fff;
  padding: 2px 10px;
}
.main {
  background: #fff;
  box-shadow: 0px 7px 7px -7px #5e5e5e;
  margin-top: 10rem;
  width: 95%;
  border-radius: 5px;
  margin: 0 auto;
  position: relative;
}
html {
  background: #000 !important;
}
.head button {
  width: 4rem;
  height: 2rem;
  background: #fff;
  border: none;
  margin-right: 1.8rem;
  margin-top: 0.5rem;
  color: #323233;
  font-size: 15px;
  line-height: 18px;
}
</style>
