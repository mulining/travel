// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import axios from "axios";
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import Vant from "vant";
import "vant/lib/index.css";
import qs from "qs";
import Vuex from "vuex";


Vue.use(Vuex);

import AMap from "vue-amap";
Vue.use(AMap);

// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德key
  key: "a8150cdda6e90ce9529c9fa3558979b6",
  // 插件集合 （插件按需引入）
  plugin: [
    "AMap.Geolocation",
    "AMap.Scale",
    "AMap.OverView",
    "AMap.ToolBar",
    "AMap.MapType"
  ],
  v: "1.4.4",
  uiVersion: "1.0"
});

Vue.prototype.AMap = AMap;

//即刻出发
import { NavBar } from "vant";
import "../src/assets/resetVui.css";
Vue.use(NavBar);
import { Tab, Tabs } from "vant";
Vue.use(Tab).use(Tabs);
import { TreeSelect } from "vant";
Vue.use(TreeSelect);
import { Grid, GridItem } from "vant";
Vue.use(Grid).use(GridItem);
import { Lazyload } from "vant";
Vue.use(Lazyload);
import { Dialog } from 'vant';
Vue.use(Dialog);

Vue.use(Vant);

Vue.use(qs);
Vue.config.silent = true;
Vue.config.productionTip = false;
//注册Mintui
Vue.use(MintUI);
axios.defaults.baseURL = "http://127.0.0.1:5050";
axios.defaults.withCredentials = true;

// axios.defaults.baseURL = "http://webtravelapp.applinzi.com";
//axios 注册Vue
Vue.prototype.axios = axios;
//配置访问服务器的基础路径

// 创建存储对象
var store = new Vuex.Store({
  // 共享的数据
  state: {
    uid:"",
    isLogin: false,
    pic: require("@/assets/images/piKaQiu.jpg"), //共享初始化用户头像数据
    nick: "游客",
    value: "",
    sign:""
  },

  // 修改共享数据
  mutations: {
    userLogin(state,isLogin) {
      state.isLogin = isLogin;
    },
    nickName(state, nick) {
      state.nick = nick;
    },
    upic(state, url) {
      state.pic = true;
    },
    fixUserInfo(state,obj){
      console.log(201)
      console.log(obj);
      if(obj.id){
        state.uid = obj.id;
        localStorage.setItem("uid",obj.id);
      }
      state.pic = obj.pic || require("@/assets/images/piKaQiu.jpg");
      state.nick = obj.nick || "新用户001";
      state.sign = obj.sign || " 即使没有风，我也可以飞舞。即使逆着别人的方向，我也可以前进。"
      localStorage.setItem("uid"+obj.id+"pic",state.pic);
      localStorage.setItem("uid"+obj.id+"nick",state.nick);
      localStorage.setItem("uid"+obj.id+"sign",state.sign);
    }
  },

  // 获取共享数据(如果获取vuex共享只能用定义函数)
  getters: {
    getUid(state){
      return state.uid;
    },
    login(state) {
      return state.isLogin;
    },
    userpic(state) {
      return state.pic;
    },
    uname(state) {
      return state.nick;
    },
    getsign(state){
      return state.sign;
    },
    inputValue(state) {
      return state.value;
    },
    getUserInfo(state){
      return state;
    }
  }
});
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: {
    App
  },
  store,
  template: "<App/>"
});
