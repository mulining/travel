<template>
  <div>
    <div class="title">
      <van-row type="flex" justify="space-around">
        <van-col span="6">定制旅行家</van-col>
        <van-col span="6">
          <!-- <img src="../assets/images/全部.png" alt=""> -->
          <van-dropdown-menu active-color="#ee0a24">
            <van-dropdown-item @change="change"
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
        <li v-for="(item, i) of mylist" :key="i" @click="goRoadShare">
          <div>
            <img :src="item.pic" alt="" />
            <div class="pp">
              <p>{{ item.title }}</p>
            </div>
          </div>
          <p class="pb">
            <span>
              <img src="../assets/images/icon-test-copy (2).png" alt="" />
              <span>定制旅行+</span>
            </span>
            <span>
              <img src="../assets/images/dianzan.png" alt="" />{{item.likes}}
            </span>
          </p>
        </li>
      </ul>
      <router-link to="./share">
        <div class="share" style="color:#00bcd4">
          <van-icon class="plus_icon" name="plus"/>
        </div>
      </router-link>
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
      mylist:[],
      list: [],
      loading:false,
      finished:false,
    };
  },
  // mounted() {
  //   let h=document.getElementsByTagName("img");
  //   console.log(h[0].);
  // },
  methods: {
    goRoadShare(){
      this.$router.push('/roadShare');
      window.scrollTo(0,0);
    },
    // onLoad(){
    //   setTimeout(()=>{
    //     for(let i=0;i<10;i++){
    //       this.list.push(this.mylist.length+1);
    //     }
    //     this.loading=false;
    //     if(this.mylist.length>=20){
    //       this.finished=true;
    //     }
    //   },500);
    // },
    loadMore() {
      var url = "pro/share";
      this.axios
        .get(url)
        .then(res => {
          this.list = this.list.concat(res.data.data);
          this.mylist = this.list;
        })
        .catch(err => {
          console.log(err);
        });
    },
    change(){
      var value = this.value1;
      var mylist = [];
      console.log(this.mylist)
       console.log(value);
      switch(value){
        case 0://不执行任何操作
        mylist=this.list;
        break;
        case 1://娱乐
          // 将属于这个类的数据，存入mylist中！
          for(var item of this.list){
            if(item.type == 1){
              mylist.push(item);
            }
          }
          console.log(mylist);
          console.log(this.list);
          break;
        case 2://娱乐
          for(var item of this.list){
            if(item.type == 2){
              mylist.push(item);
              
            }
          }
          console.log(mylist);
          console.log(this.list);
          break;
        case 3://娱乐
          for(var item of this.list){
            if(item.type == 3){
              mylist.push(item);
            }
          }
          console.log(mylist);
          console.log(this.list);
          break;
      }
      // 将结果在给了data中的mylist
      this.mylist = mylist;
      console.log(this.mylist);
    }
  }
};
</script>

<style scoped>
.title {
  position: fixed;
  width: 100%;
  box-shadow: 0px 6px 10px #aaa;
  top: 0px;
  z-index: 1;
  background: #fff;
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
  margin-top: 35px;
}
.neirong ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  height: auto;
}
.neirong ul li {
  width: 48%;
  /* background-color: rgba(0, 0, 0, 0.1); */
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 5px 0 5px 0;
  /* height: 200px; */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.neirong ul li img {
  /* height: 139px; */
  max-height: 240px;
  width: 100%;
  object-fit: cover;
}
.neirong ul li p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /* white-space: nowrap; */
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.neirong ul li p.pb img {
  height: 16px;
  width: 16px;
}
.neirong ul li .pp {
  padding: 3px 3px 10px;
}
.neirong .pb{
  display: flex;
  justify-content: space-between;
  padding: 10px 5px;
  
}
.share{
  background-color:#05c1bc;
  width: 35px;
  height: 35px;
  position: fixed;
  top: 565px;
  right: 20px;
  border-radius: 5px;
}
.plus_icon{
  font-size: 25px; 
  color: #fff; 
  padding: 15%;
  font-weight: 800;
}
</style>
