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
      <van-tabs line-height="5px" color="#52e0f05e" v-model="activeName" class="container">
        <van-tab title="推荐" name="tj">
          <!-- treeSelect分类选择 -->
          <tree-select :id="0"></tree-select>
        </van-tab>
        <van-tab title="境内" name="jn">
          <!-- treeSelect分类选择 -->
          <tree-select :id="1"></tree-select>
        </van-tab>
        <van-tab title="境外" name="jw">
          <!-- treeSelect分类选择 -->
          <tree-select :id="2"></tree-select>
        </van-tab>
      </van-tabs>
    </div>
    <!-- 下一步按钮 -->
    <div class="next">
      <!-- Tag标记 -->
      <div class="check">
        选择目的地...
      </div>
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
      activeName: 'tj',
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
    justify-content: flex-end;
  }
  .justgo > .next{
    width: 100%;
    height: 90px;
    position: fixed;
    bottom: 0px;
  }
  /* 下一步按钮 */
  .justgo > .next a{
    color: #4bcedd;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    display: block;
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 15px;
    background-color: #fff;
  }
  /* 选择目的地 */
  .justgo .check{
    height: 40px;
    line-height: 40px;
    border-top: 1px solid #ddd;
    font-size: 15px;
    color: #ccc;
    background-color: #fff;
    padding-left: 10px;
  }
  .justgo .van-nav-bar .van-icon {
    color: inherit;
  }
  .justgo .container{
    height: 100%;
  }
</style>
