<template>
  <div class="head">
    <img @click="fanHui" src="@/assets/images/fanHui.png" alt />
    <div>
      <img @click="Collecting" src="@/assets/images/save.png" alt :class="backColor"/>
      <img src="@/assets/images/share.png" alt />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);

export default {
  data(){
    return{
      backColor:{
        select:false,
      }
    }
  },
  methods: {
    Collecting() {
      if(!this.backColor.select){
        this.backColor.select=true;
        Toast("已加入收藏");
        console.log(this.backColor.select)
        return; 
      }else{
        this.backColor.select=false;
        Toast("已取消收藏");
        console.log(this.backColor.select)
        return;
      }
    },
    fanHui() {
      this.$router.push("./road");
    }
  },
}
</script>

<style scoped>
.head div > img:last-child {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.head div > img:first-child {
  width: 20px;
  height: 20px;
  margin-right: 2px;
}
.head div > img {
  background: rgba(255, 255, 255, 0.5);
  padding: 3px;
  border-radius: 50%;
}
/*左侧返回图标*/ 
.head > img {
  padding: 0px 10px;
  margin-top: -10px;
}
.head {
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 1;
  position: fixed;
  justify-content: space-between;
  top: 10px;
}
.head .select{
  background: yellow;
}
</style>
