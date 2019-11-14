<template>
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(image, index) in images" :key="index">
      <img class="lunBo" v-lazy="image" />
      <button v-if="index ? hide : show">即刻出发</button>
      <button v-else>立即赢取</button>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      hide: false,
      images: [
        require("@/assets/2d98cfffc98b4e2893004e95570da5d1.jpg"),
        require("@/assets/1aaa5674ebe84d7cb0a3b301d521fbba.jpg")
      ]
    };
  }
};
</script>

<style scoped>
button {
  color: rgb(236, 229, 229);
  font-size: 0.95rem;
  background: transparent;
  padding: 5px;
  width: 110px;
  border-radius: 5px;
  border: 1px solid rgb(236, 229, 229);
  position: absolute;
  bottom: 20px;
  left: 30px;
}
.lunBo {
  width: 100%;
  height: 250px;
}
</style>
