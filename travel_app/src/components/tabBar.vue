<template>
  <div style="margin-bottom:60px;">
    <van-tabbar active-color="#44F9C3" route v-model="active">
      <van-tabbar-item replace to="/home">
        <span>首页</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? shouYe.active : shouYe.inactive"
        />
      </van-tabbar-item>
      <van-tabbar-item replace to="/road">
        <span>路上</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? luShang.active : luShang.inactive"
        />
      </van-tabbar-item>
      <van-tabbar-item replace to="/my">
        <span>我的</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? woDe.active : woDe.inactive"
        />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      shouYe: {
        active: require("@/assets/images/shouYeActive.png"),
        inactive: require("@/assets/images/shouYe.png")
      },
      luShang: {
        active: require("@/assets/images/luShangActive.png"),
        inactive: require("@/assets/images/luShang.png")
      },
      woDe: {
        active: require("@/assets/images/woDeActive.png"),
        inactive: require("@/assets/images/woDe.png")
      }
    };
  }
};
</script>

<style scoped></style>
