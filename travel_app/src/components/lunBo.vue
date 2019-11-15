<template>
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(image, index) in img" :key="index">
      <img class="lunBo" v-lazy="image" />
      <button v-show="index ? hide : show">{{ text[0] }}</button>
      <button v-show="index ? show : hide">{{ text[1] }}</button>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  data() {
    return {
      text: ["即可出发", "立即赢取"],
      show: true,
      hide: false,
      img: [
        require("@/assets/images/2d98cfffc98b4e2893004e95570da5d1.jpg"),
        require("@/assets/images/1aaa5674ebe84d7cb0a3b301d521fbba.jpg")
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
