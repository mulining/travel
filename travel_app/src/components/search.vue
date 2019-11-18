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
      <ul v-show="hide">
        <li v-for="(item, i) of search" :key="i">
          <div>
            <span :class="yanSe">{{item.slice(item.toLowerCase,value.length)}}</span>
            <span>{{item.substr(value.length)}}</span>
          </div>
          <img src="@/assets/images/zuoShangJT.png" alt />
        </li>
      </ul>
      <dl v-show="reMen">
        <dt v-show="souSuo">
          <h4>历史搜索</h4>
          <img @click="shanChu" src="@/assets/images/laJi.png" alt />
        </dt>
        <dd class="d1" v-for="(item, i) of liShi" :key="i" v-show="yingC">{{liShi.join('')}}</dd>
        <dt>
          <h4>热门搜索</h4>
        </dt>
        <dd>
          <router-link to v-for="(item, i) of list" :key="i">
            <span @click="chengShi(item)" class="list">{{item.s}}</span>
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
      souSuo: false,
      hide: false,
      reMen: true,
      yingC: false,
      yanSe: { p: false },
      liShi: [],
      value: "",
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
      lists: ["百度", "百度网盘"]
    };
  },
  computed: {
    search() {
      if (this.value) {
        return this.lists.filter(value => {
          this.hide = true;
          this.reMen = false;
          this.yanSe.p = true;
          return value.includes(this.value);
        });
      } else {
        this.hide = false;
        this.reMen = true;
      }
    }
  },
  methods: {
    chengShi(item) {
      this.liShi.push(item.s);
      // i.concat(this.liShi);
      this.souSuo = true;
      this.yingC = true;
    },
    shanChu() {
      this.liShi.splice(0);
      this.souSuo = false;
    },
    onSearch(e) {
      if (this.liShi !== null) {
        this.yingC = true;
        var arr = this.liShi.push(e);
        String(arr);
      }
      if (this.liShi !== null) {
        this.souSuo = true;
      }
    },
    // 点击取消按钮时触发
    onCancel() {
      this.$router.push("/home");
    }
  }
};
</script>

<style scoped>
dl > dt > img {
  width: 20px;
  height: 20px;
}
dl > dt {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.d1 {
  font-size: 0.8rem;
  background: #eee;
  padding: 5px 10px;
  margin-right: 15px;
  border-radius: 20px 20px;
  display: inline-block;
  margin-top: 10px;
}
ul > li > img {
  width: 27px;
}
.p {
  color: rgb(202, 202, 202);
}
ul > li {
  border-bottom: 1px solid #f3e9e9;
  padding: 3px;
}
ul > li > div > span:first-child {
  margin-right: -3px;
}
ul > li > div > span {
  font-size: 0.8rem;
}
ul > li {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
ul {
  width: 97%;
  margin: 0 auto;
}
dl > dt > h4 {
  font-size: 1rem;
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
