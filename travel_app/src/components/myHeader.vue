<template>
  <div id="header" v-show="show">
    <router-link to="/search">
      <van-search placeholder="请输入搜索关键词" v-model="value" />
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      show: false
    };
  },
  mounted() {
    window.onscroll = () => {
      var scroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (scroll >= 200) {
        // header.style.display = "block";
        this.show = true;
      } else {
        this.show = false;
      }
    };
  }
};
</script>

<style scoped>
#header > div {
  width: 100%;
}
#header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  animation: change 1s 1ms;
  animation-fill-mode: both;
}
@keyframes change {
  0% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}
</style>