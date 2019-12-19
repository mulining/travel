<template>
 <div>
   <van-nav-bar
    title="设置"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
  <van-cell title="清除缓存" @click="clearinfo">
            <van-icon
              slot="right-icon"
              name="arrow"
              style="line-height: inherit;"
            />
  </van-cell>
  <van-cell title="检查更新" @click="checkVer">
            <van-icon
              slot="right-icon"
              name="arrow"
              style="line-height: inherit;"
            />
  </van-cell>
  <van-cell title="关于我们">
            <van-icon
              slot="right-icon"
              name="arrow"
              style="line-height: inherit;"
            />
  </van-cell>
  <van-loading type="spinner" class="loading" v-if="isover"/>
  <div class="btn_box" v-if="$store.getters.login">
    <van-button type="danger" size="large" class="logout_btn" @click="logout">退出登录</van-button>
  </div>
 </div>
</template>

<script>
import { Dialog,Toast,Loading } from 'vant';
export default {
  data(){
    return {
      isover:false //控制“加载中”的显示与隐藏
    }
  },
  methods: {
    // 清除缓存
    clearinfo(){
      // 要弹出提示框提示确认
      Dialog.confirm({
        title:"温性提示",
        message:"清理后需要重新登录,确定要清理缓存么？"
      })
      .then(res=>{
        sessionStorage.clear();
        localStorage.clear();
        Toast("已清理缓存!");
      })
      .catch(err=>{
        // 已取消
        Toast("已取消");
      });
    },

    //检查更新 
    checkVer(){
      // 使用定时器，模拟检查更新
      this.isover = true;
      setTimeout(()=>{
        this.isover = false;
        // 弹出提示，当前已经是最新版本了
        Toast("当前以及是最新版本了!")
      },2000)
    },
    onClickLeft() {
      this.$router.push("/my");
    },
    onClickRight() {
      Toast('按钮');
    },
    logout(){
      // 退出登录
      // 提示：退出登录将清空所有本地加载的数据
      Dialog.confirm({
        title:'温馨提示',
        message:'客官,确定要退出登录嘛？'
      }).then(()=>{
        //确定退出
        Dialog.confirm({
          title: '温馨提示',
          message: '退出后是否清空本地数据？'
        }).then(() => {
          // 清空
          sessionStorage.clear();
          localStorage.clear();
          console.log(sessionStorage.getItem());
          this.$store.commit("userLogin",false);
          Dialog.close()
          Toast("已清空数据退出");
          //导航到登录页面
          this.$router.push('/home');
        }).catch(() => {
          // 不清空
          this.$store.commit("userLogin",false);
          Toast("已暂存数据退出");
          //导航到登录页面
          this.$router.push('/home');
        });
        // 如果用户同意,则清空本地所有数据,否则仅仅退出登录
      }).catch(()=>{
        //取消退出
        // 关闭当前对话框
        Dialog.close();
      });
    }
  }
} 
</script>

<style>
.btn_box{
  position: absolute;
  bottom: 2rem;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 1.5rem;
  box-sizing: border-box;
}

/* 加载中居中样式 */
.loading{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
