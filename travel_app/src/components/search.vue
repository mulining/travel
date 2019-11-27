<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @input="alertMsg"
        @search="onSearch"
        @cancel="onCancel"
      />
      <ul v-show="hide">
        <li v-for="(item, i) of lists" :key="i">
          <div class="alertText">
            <span :class="yanSe">{{
              item.title.slice(item.title.toLowerCase, value.length)
            }}</span>
            <span>{{ item.title.substr(value.length) }}</span>
          </div>
          <img src="@/assets/images/zuoShangJT.png" alt />
          <div
            @click="totap"
            class="mm"
            :data-id="item.id"
            :data-tablec="item.tableC"
            :data-type="item.type"
          >
            <!-- 空的遮罩 -->
            <!-- <div class="mask"></div> -->
          </div>
        </li>
      </ul>
      <dl v-show="reMen">
        <dt v-show="souSuo">
          <h4>历史搜索</h4>
          <img @click="shanChu" src="@/assets/images/laJi.png" alt />
        </dt>
        <dd class="d1" v-for="(item, i) of liShi" :key="i" v-show="yingC">
          {{ liShi.join("") }}
        </dd>
        <dt>
          <h4>热门搜索</h4>
        </dt>
        <dd>
          <router-link to v-for="(item, i) of list" :key="i">
            <span @click="chengShi(item)" class="list">{{ item.s }}</span>
          </router-link>
        </dd>
      </dl>
    </form>
  </div>
</template>

<script>
import funs from "@/assets/js/funs";
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
      lists: []
    };
  },
  created() {
    funs.getSearch(this.k, res => {
      console.log(res.data);
    });
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
      this.$router.push("/listDetails");
    },
    // 下拉列表
    alertMsg() {
      // 当用户输入时触发
      this.hide = true;
      // 获取当前的关键词
      var k = this.value;
      // 当数据存在才发送请求
      if (k.trim()) {
        // 发送ajax请求数据
        funs.getSearch(k, res => {
          // 获取到数据,将数据显示到下拉列表中
          console.log(res.data.data);
          this.lists = res.data.data;
        });
      } else {
        this.lists = null;
        this.hide = false;
      }
      // 并显示到下拉菜单
    },
    totap(e) {
      // 获取id和type
      var id = e.target.dataset.id;
      var type = e.target.dataset.type;
      var tableC = e.target.dataset.tablec;
      console.log(id, type, tableC);
      console.log(e.target.dataset);
      this.$router.push("/travelDetails");

      // +++++++++++++++++++++++++++++++++++++++++
      // 请求details下的路由 传递id type tableC数据查找对应的数据,并显示到新的页面!
      // +++++++++++++++++++++++++++++++++++++++++
      // this.$router.push("/fdadfd/fda/id=1&type=1&tableC=0");
    },
    // 点击取消按钮时触发
    onCancel() {
      this.$router.push("/home");
    }
  }
};
</script>

<style scoped>
/* .mask {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  right: 0;
} */
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
  border-bottom: 1px solid #f3e9e9;
  padding: 3px;
}
ul {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: fixed;
  top:55px;
  background: #fff;
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
/* 下拉列表的文字长度 */
.alertText {
  width: 260px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
/* 空的遮罩 */
.mm {
  position: absolute;
  width: 97%;
  height: 34px;
  /* background: #ccc; */
}
</style>
