<template>
  <!-- TreeSelect分类选择 -->
  <van-tree-select class="treeSelect"
  height="135vw"
  :items="items[id]" 
  :active-id.sync="activeIds"
  :main-active-index.sync="activeIndex">
    <template slot="content" >
      <!-- 此id值控制左侧切换 --> 
      <grid v-if="activeIndex === 0" :grid="id"></grid>
      <grid v-if="activeIndex === 1" :grid="id+3"></grid>
      <grid v-if="activeIndex === 2" :grid="id+6"></grid>
      <grid v-if="activeIndex === 3" :grid="id+9"></grid>
      <grid v-if="activeIndex === 4" :grid="id+12"></grid>
      <grid v-if="activeIndex === 5" :grid="id+15"></grid>
    </template>
  </van-tree-select>
</template>

<script>
import grid from "@/components/grid";
export default {
  components:{
    grid
  },
  props:[
    "id"
  ],
  data(){
    return {
      activeIndex: 0,
      items: [
        [{ text: '美食购物 / 6' },{ text: '蜜月度假 / 6' },{ text: '当季热门 / 7' },{ text: '趣野极限 / 6' },{ text: '亲子旅行 / 6' },{ text: '历史文化 / 6' },],
        [{ text: '推荐城市 / 8' }, { text: '北京市 / 1' },{ text: '上海市 / 1' },{ text: '台湾省 / 6' },],
        [{ text: '亚洲 / 14' }, { text: '欧洲 / 9' },{ text: '非洲 / 6' },{ text: '北美洲 / 6' },{ text: '南美洲 / 3' },{ text: '大洋洲 / 6' },]
      ],
      activeIds: [[],[],[]],
    }
  },
}
</script>

<style scoped>
  .treeSelect .van-sidebar-item--select{
    border-color: transparent;
    color: #4bcedd;
  }
</style>
