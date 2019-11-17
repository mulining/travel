<template>
  <div class="justgo">
    <!-- NavBar导航栏 -->
    <div>
      <van-nav-bar
        title="选择出行目的地"
        left-text=""
        left-arrow
        @click-left="fanHuiHome"
      />
    </div>
    <!-- Tab标签页 -->
    <div>
      <van-tabs v-model="activeName">
        <van-tab title="推荐" name="tj">
          <!-- treeSelect分类选择 -->
          <tree-select></tree-select>
        </van-tab>
        <van-tab title="境内" name="jn">
          <!-- treeSelect分类选择 -->
          <tree-select></tree-select>
        </van-tab>
        <van-tab title="境外" name="jw">
          <!-- treeSelect分类选择 -->
          <tree-select></tree-select>
        </van-tab>
      </van-tabs>
    </div>
    <!-- Tag标记 -->
    <div>

    </div>
    <!-- 下一步按钮 -->
    
    <div class="next">
      <router-link to="/login">下一步</router-link>
    </div>
  </div>
</template>

<script>
import treeSelect from "@/components/treeSelect";

export default {
  components:{
    treeSelect
  },
  data(){
    return {
      activeName: 'tj'
    };
  },
  methods: {
    fanHuiHome() {
      this.$router.push("/home");
    },

  }
}
</script>

<style scoped>
  .justgo{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .justgo > div.next{
    padding-top: 1px solid rgb(228, 46, 46);
  }
  .justgo > .next a {
    display: block;
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 15px;
    background: white;
  }
</style>
