<template>
  <div>
    <!-- 搜索框 -->
    <van-search
      :v-model="$store.getters.inputValue"
      :value="this.lname"
      readonly
      show-action
      @cancel="onCancel"
    >
    </van-search>
    <!-- 详情列表 -->
    <div
      class="main"
      @click="toDetails"
      v-for="(item, i) of list"
      :key="i"
    >
      <img :src="item.pic[0]" alt="" />
      <div class="det">
        <div>
          <h4 v-text="item.title"></h4>
          <div class="type">
            <p v-text="item.type"></p>
            <p v-text="item.label1"></p>
            <p v-text="item.label2"></p>
          </div>
        </div>
        <div class="diZhi">
          <img :src="require('../assets/images/diZhi.png')" alt="" />
          <h6 v-text="item.address"></h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import funs from "@/assets/js/funs";
export default {
  data() {
    return {
      value: "",
      list: [],
      lname: ""
    };
  },
  methods: {
    onCancel() {
      this.$router.push("/search");
    },
    toDetails(){
      this.$router.push("/zhenxuan1/"+1);
    }
  },
  created() {
    var url="details/camp/"+this.$route.params.lid;
    var lname=this.$route.params.lname;
    this.lname=lname;
    this.axios
    .get(url)
    .then(res=>{
      // console.log(res.data);
      var obj=res.data.result;
      console.log(obj);
      this.list=obj;
    })
    .catch(err=>{
      console.log(err);
    })
  },
};
</script>

<style scoped>
.main > div > .diZhi > img {
  width: 16px;
  height: 16px;
  margin-top: 2px;
}
.main > div > .diZhi {
  display: flex;
  margin-top: 3px;
  color: #888;
}
.main .det{
  width: 63%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 8px 0;
}
.main > div h6{
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.main > div div > p:nth-child(2) {
  margin: 1px 2px;
}
.main > div div > p {
  border: 1px solid #ddd;
  padding: 2px;
  color: #666;
  margin: 1px 0;
}
.main > div .type {
  display: flex;
  flex-wrap: wrap;
}
.main > div h4 {
  font-size: 15.5px;
  margin: 0 0 4px;
}
.main > img {
  width: 100px;
  height: 100px;
  margin: 10px;
}
.main {
  background: #fff;
  width: 95%;
  margin: 10px auto;
  display: flex;
  border-radius: 5px;
  box-shadow: 0 0 10px #eee;
}
</style>
