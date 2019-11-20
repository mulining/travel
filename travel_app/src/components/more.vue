<template>
  <div>
    <div class="head">
      <van-search placeholder="请输入搜索关键词" v-model="value" />
      <van-dropdown-menu active-color="#ee0a24">
        <router-link to="/home"
          ><van-dropdown-item toggle="hide" v-model="value1" :options="option1"
        /></router-link>
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
      </van-dropdown-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hide:true,
      value1: 0,
      option1: [{ text: "位置", value: 0 }]
    };
  },
};
</script>

<style scoped></style>
