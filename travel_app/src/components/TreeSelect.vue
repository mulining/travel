<template>
  <!-- TreeSelect分类选择 -->
  <van-tree-select
  height="143vw"
  :items="items[1]"
  :main-active-index.sync="activeIndex">
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
      items: [
        [{ text: '美食购物 / 6' }, { text: '蜜月度假 / 6' }],
        [{ text: '购物 / 7' }, { text: '蜜月 / 9' }],
        [{ text: '美食 / 4' }, { text: '度假 / 5' }]
      ]
    }
  },
}
</script>

<style scoped>

</style>
