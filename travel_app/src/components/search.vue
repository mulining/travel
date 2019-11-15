<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
      <dl>
        <dt>
          <h4>热门搜索</h4>
        </dt>
        <dd>
          <router-link to="" v-for="(item, i) of list" :key="i">
            <span class="list" v-text="item.s"></span>
          </router-link>
        </dd>
      </dl>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { s: "新西兰" },
        { s: "加拿大" },
        { s: "欧洲" },
        { s: "海南" },
        { s: "长白山" },
        { s: "北京" },
        { s: "乌鲁木齐" },
        { s: "南京" },
        { s: "温泉" },
        { s: "宁波" },
        { s: "东钱湖" },
        { s: "黄山" },
        { s: "扬州" }
      ],
      value: ""
    };
  },
  methods: {
    //确定搜索时触发
    onSearch() {},
    //点击取消按钮时触发
    onCancel() {
      this.$router.push("/home");
    }
  }
};
</script>

<style scoped>
dl > dt > h4 {
  margin-bottom: 10px;
}
.list {
  border: 1px solid #ddd;
  font-size: 0.8rem;
  padding: 2px 8px;
  color: #777;
  margin: 10px 8px 0 0px;
  display: block;
}
dl > dd {
  display: flex;
  flex-wrap: wrap;
}
dl {
  width: 93%;
  margin: 8px auto 0;
}
</style>
