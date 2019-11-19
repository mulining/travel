<template>
  <!-- TreeSelect分类选择 -->
  <van-tree-select
  height="145vw"
  :items="items"
  :main-active-index.sync="activeIndex"
  >
    <template slot="content">
      <van-image v-if="activeIndex === 0" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
      <grid v-if="activeIndex === 1"></grid>
    </template>
  </van-tree-select>
</template>

<script>
import grid from "@/components/grid";
export default {
  components:{
    grid
  },
  data(){
    return {
      activeIndex: 0,
      items: [{ text: '美食购物 / 6' }, { text: '蜜月度假 / 6' }]
    }
  },
}
</script>

<style>

</style>
