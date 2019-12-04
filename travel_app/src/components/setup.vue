<template>
 <div>
   <van-nav-bar
    title="设置"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
  <van-cell title="清除缓存">
            <van-icon
              slot="right-icon"
              name="arrow"
              style="line-height: inherit;"
            />
  </van-cell>
  <van-cell title="检查更新">
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
 </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.push("/my");
    },
    onClickRight() {
      Toast('按钮');
    }
  }
} 
</script>

<style>

</style>
