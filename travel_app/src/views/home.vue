<template>
  <div>
    <!-- 搜索 -->
    <van-search
      id="d"
      placeholder="输入目的地，查找体验线路或营地"
      v-model="value"
    />
    <!-- 轮播 -->
    <lun-bo></lun-bo>
    <!-- 内容 -->
    <div class="ctn">
      <p>野奢·逸趣</p>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import lunBo from "@/components/lunBo";
import tabBar from "@/components/tabBar";
export default {
  components: { lunBo, tabBar },
  data() {
    return {
      value: ""
    };
  }
};
</script>

<style scoped>
.ctn {
  width: 95%;
  margin: 0 auto;
}
.van-search {
  position: absolute;
  z-index: 1;
  background-color: transparent !important;
  margin: 0 auto;
  width: 100%;
  color: #fff;
}
.van-search__content {
  background: rgb(49, 48, 48);
  opacity: 0.7;
}
.van-search .van-cell {
  width: 100%;
  margin: 0 auto;
}
.van-cell {
  color: #fff;
}
</style>
