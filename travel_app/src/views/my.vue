<template>
  <div>
    <div class="title" v-if="$store.getters.login">
      <div class="yiDengLu">
        <router-link to="/pData" tag="div">
          <img :src="$store.getters.userpic"/>
        </router-link>
        <div style="padding-right:1rem">
          <h6>欢迎您</h6>
          <h5>
            {{ $store.getters.uname }}
            <router-link to="/pData" tag="p">
              <img src="@/assets/images/xiuGai.png" alt="" />
            </router-link>
          </h5>
          <p><router-link to="/pData" tag="p">{{$store.getters.getsign}}</router-link></p>
        </div>
      </div>
    </div>
    <div class="title" v-else>
      <div class="title-1">
        <router-link to="/login">
          <button>请登录</button>
        </router-link>
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
      <van-cell @click="Collecting" title="我的收藏" icon="star-o">
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
      <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->
      <van-cell title="推荐给好友" icon="share" is-link @click="showPopup">
        <van-icon
          slot="right-icon"
          name="arrow"
          style="line-height: inherit;"
        />
      </van-cell>
      <van-popup 
        v-model="show"
        position="bottom"
        :style="{ height: '20%' }">
          <!-- 这里是分享到哪里 -->
          <div class="shareItem">
            <van-image
              class="shareimg"
              width="100"
              height="100"
              lazy-load
              :src='require("../assets/imgs/weixin.png")'
              @click="share"
              data-name="weixin"
            >
            <!-- 加载中提示 -->
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
              <template v-slot:error>加载失败</template>
            </van-image>
            <van-image
            class="shareimg"
              width="100"
              height="100"
              lazy-load
              :src='require("../assets/imgs/QQ.png")'
              @click="share"
              data-name="qq"
              >
            <!-- 加载中提示 -->
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
              <template v-slot:error>加载失败</template>
            </van-image>
          </div>
        </van-popup>
      <router-link to="/setup">
          <van-cell title="设置" icon="setting">
            <van-icon
              slot="right-icon"
              name="arrow"
              style="line-height: inherit;"
            />
          </van-cell>
      </router-link>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import tabBar from "@/components/tabBar";
import { Dialog,Image,Toast } from 'vant';
export default {
  components: {
    tabBar
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    // 判断是否登录，并导航到指定位置的方法
    isLogin(backfun){
      if(this.$store.getters.login){
        backfun()
      }else{
        Dialog({ message: '您还没有登录，请先登录！' });
        this.$router.push("/login");
      }
    },
    Collecting() {
      this.isLogin(()=>{
        this.$router.push("/Collecting")
      })
    },
     showPopup() {
      this.isLogin(()=>{
        this.show = true;
      })
    },
    share(e){
      Toast("已分享")
    }
  }
};
</script>

<style scoped>
.title > div > div > h5 {
  font-size: 1rem;
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
  display: flex;
  justify-content: start;
}
.title > div > div > h5>p{
  display: flex;
  align-items: center;
  margin-left: 1rem;
}
.title > div > p > img:last-child {
  width: 1rem;
  height: 1rem;
  margin-top: 1.4rem;
  margin-left: 0.5rem;
}
.title > .yiDengLu {
  display: flex;
  align-items: center;
  padding-top: 2rem;
  padding-left: 1.5rem;
}
.title > div > div > img:first-child {
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
.title-1 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}
.title button {
  border: 1px solid whitesmoke;
  outline: 0;
  padding: 5px 15px;
  width: 120px;
  height: 38px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, 0.1);
  color: white;
}
/* .dingdan {
  .title>div>div>h5 {
    text-align: center;
    margin-top: 0.4rem;
  }

  .title>div>img:last-child {
    width: 1rem;
    height: 1rem;
    margin-top: 1.4rem;
    margin-left: 0.5rem;
  }

  .title>div {
    display: flex;
    padding-top: 2rem;
    padding-left: 1.5rem;
  }

  .title>div>img:first-child {
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

  .title-1 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
  }

  .title button {
    border: 1px solid whitesmoke;
    outline: 0;
    padding: 5px 15px;
    width: 120px;
    height: 38px;
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
.shareItem{
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.shareItem>.van-image{
  box-sizing: border-box;
  padding: 1rem;
  border: 1px solid rgb(231, 231, 231);
  border-radius: 4px;
  box-shadow: 2px 2px 7px -3px #ccc;
}

</style>
