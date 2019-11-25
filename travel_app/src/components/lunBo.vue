<template>
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(image, index) in img" :key="index">
      <img class="lunBo" :src="image.img" />
      <button @click="justGo" v-show="index ? hide : show">{{ text[0] }}</button>
      <button v-show="index ? show : hide">{{ text[1] }}</button>
    </van-swipe-item>
  </van-swipe>
</template>
<script>
import funs from "@/assets/js/funs";
export default {
  data() {
    return {
      text: ["即刻出发", "立即赢取"],
      show: true,
      hide: false,
      img: []
    };
  },
  methods: {
    justGo() {
      this.$router.push("/justGo");
    }
  },
  created() {
    funs.getHome(res => {
      var obj = res.data;
      this.img = obj.data;
    });
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
