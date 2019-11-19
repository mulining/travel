<template>
  <div>
    <div class="title">
      <van-row type="flex" justify="space-around">
        <van-col span="6">定制旅行家</van-col>
        <van-col span="6">
          <!-- <img src="../assets/images/全部.png" alt=""> -->
          <van-dropdown-menu active-color="#ee0a24">
            <van-dropdown-item
              font-size:111px
              v-model="value1"
              :options="option1"
            />
          </van-dropdown-menu>
        </van-col>
        <van-col span="6">
          <!-- <img src="../assets/images/转换.png" alt="">最热 -->
          <van-dropdown-menu active-color="#ee0a24">
            <van-dropdown-item v-model="value2" :options="option2" />
          </van-dropdown-menu>
        </van-col>
      </van-row>
    </div>
    <div class="neirong">
      <ul>
        <li v-for="(item, i) of list" :key="i">
          <img :src="item.pic" alt="" />
          <div class="pp">
            <p>{{ item.title }}</p>
            <p>
              <van-row>
                <van-col span="5">
                  <img src="../assets/images/icon-test-copy (2).png" alt="" />
                </van-col>
                <van-col span="14">
                  <span>定制旅行+</span>
                </van-col>
                <van-col span="5">
                  <img src="../assets/images/dianzan.png" alt="" />{{
                    item.likes
                  }}
                </van-col>
              </van-row>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import tabBar from "@/components/tabBar";
export default {
  components: { tabBar },
  created() {
    this.loadMore();
  },
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部", value: 0 },
        { text: "娱乐", value: 1 },
        { text: "休闲", value: 2 },
        { text: "探险", value: 3 }
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "最热", value: "b" },
        { text: "最新", value: "c" }
      ],
      list: []
    };
  },
  methods: {
    loadMore() {
      var url = "product/share";
      this.axios
        .get(url)
        .then(res => {
          this.list = this.list.concat(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.title {
  box-shadow: 0px 6px 10px #aaa;
}
.van-col--6 {
  margin-top: 20px;
  font-size: 15px;
}
.van-col--6 img {
  margin-left: 20px;
}
.van-dropdown-menu {
  background-color: transparent;
  height: 25px;
}
.neirong {
  padding-top: 20px;
  width: 95%;
  margin: 0 auto;
}
.neirong ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.neirong ul li {
  width: 48%;
  /* background-color: rgba(0, 0, 0, 0.1); */
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 5px 0 5px 0;
  height: 180px;
  overflow: hidden;
  position: relative;
}
/* .neirong ul li:nth-child(1) {
  height: 250px;
} */
.neirong ul li img {
  height: 139px;
  width: 100%;
  object-fit: cover;
}
.neirong ul li p {
  width: 171px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.neirong ul li p img {
  height: 16px;
  width: 16px;
}
.neirong ul li .pp {
  padding: 3px;
}
.neirong ul li p:nth-child(3) {
  padding-top: 7px;
}
.van-col--8 {
  width: 33%;
}
</style>
