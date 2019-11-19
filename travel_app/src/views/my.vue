<template>
  <div>
    <div class="title">
      <router-link to="/reg">
        <button>请登录</button>
      </router-link>
    </div>
    <!-- <div class="dingdan">
      <p>我的订单</p>
      <van-grid :border="false" :column-num="4">
        <van-grid-item>
          <van-image :src="require('../assets/images/待支付.png')" />待支付
        </van-grid-item>
        <van-grid-item>
          <van-image :src="require('../assets/images/已支付.png')" />已支付
        </van-grid-item>
        <van-grid-item>
          <van-image :src="require('../assets/images/已取消.png')" />已取消
        </van-grid-item>
        <van-grid-item>
          <van-image :src="require('../assets/images/全部订单.png')" />全部订单
        </van-grid-item>
      </van-grid>
    </div> -->
    <div class="daohang">
      <van-cell title="我的游记" icon="photograph">
        <van-icon
          slot="right-icon"
          name="arrow"
          style="line-height: inherit;"
        />
      </van-cell>
      <van-cell title="我的收藏" icon="star-o">
        <van-icon
          slot="right-icon"
          name="arrow"
          style="line-height: inherit;"
        />
      </van-cell>
      <van-cell title="我的积分" icon="column">
        <van-icon
          slot="right-icon"
          name="arrow"
          style="line-height: inherit;"
        />
      </van-cell>
      <van-cell title="我的消息" icon="chat">
        <van-icon
          slot="right-icon"
          name="arrow"
          style="line-height: inherit;"
        />
      </van-cell>
    </div>
    <div class="tuijian">
      <van-cell title="推荐给好友" icon="share">
        <van-icon
          slot="right-icon"
          name="arrow"
          style="line-height: inherit;"
        />
      </van-cell>
      <van-cell title="设置" icon="setting">
        <van-icon
          slot="right-icon"
          name="arrow"
          style="line-height: inherit;"
        />
      </van-cell>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import tabBar from "@/components/tabBar";
export default {
  components: { tabBar }
};
</script>

<style scoped>
.title {
  width: 100%;
  height: 187px;
  background: url("../assets/images/0e838b2501d04ba8a8dd21f211d432fd.jpg");
  background-size: cover;
  z-index: 0;
}
.title button {
  border: 1px solid whitesmoke;
  outline: 0;
  padding: 5px 15px;
  width: 120px;
  height: 38px;
  margin-left: 130px;
  margin-top: 69px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.1);
  color: white;
}
/* .dingdan {
  width: 90%;
  height: 157px;
  margin: 0 auto;
  margin-top: -50px;
  z-index: 1;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 10px 18px #ccc;
}
.dingdan p {
  padding-top: 20px;
  margin-left: 20px;
  color: #aaa;
  margin-bottom: 15px;
  font-size: 17px;
} */
.van-image {
  width: 43px;
  height: 42px;
}
.van-cell__left-icon,
.van-cell__right-icon {
  font-size: 22px;
  color: rgb(119, 220, 245);
}
.van-cell__title,
.van-cell__value {
  font-size: 16px;
}
.tuijian {
  margin-top: 20px;
}
.daohang {
  z-index: 0;
  margin-top: 10px;
}
</style>
