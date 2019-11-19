<template>
  <div>
    <div class="title">
      <div>
        <img
          src="@/assets/images/u=1724821872,4223408992&fm=26&gp=0.jpg"
          alt=""
        />
        <div>
          <h6>欢迎您</h6>
          <h5>***</h5>
        </div>
        <img src="@/assets/images/xiuGai.png" alt="" />
      </div>
    </div>
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
.title > div > div > h5 {
  text-align: center;
  margin-top: 0.4rem;
}
.title > div > img:last-child {
  width: 1rem;
  height: 1rem;
  margin-top: 1.4rem;
  margin-left: 0.5rem;
}
.title > div {
  display: flex;
  padding-top: 2rem;
  padding-left: 1.5rem;
}
.title > div > img:first-child {
  width: 3.5rem;
  height: 3.5rem;
  margin-right: 1rem;
  border-radius: 50%;
}
.title {
  width: 100%;
  color: #fff;
  height: 170px;
  background: url("../assets/images/0e838b2501d04ba8a8dd21f211d432fd.jpg");
  background-size: cover;
  z-index: 0;
}
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
