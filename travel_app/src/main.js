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
import { NavBar } from 'vant';
import "../src/assets/resetVui.css";
Vue.use(NavBar);
import { Tab, Tabs } from "vant";
Vue.use(Tab).use(Tabs);
import { TreeSelect } from "vant";
Vue.use(TreeSelect);
import { Grid, GridItem } from "vant";
Vue.use(Grid).use(GridItem);
import { Lazyload } from 'vant';
Vue.use(Lazyload);

Vue.use(Vant);

Vue.use(qs);
Vue.config.silent = true;
Vue.config.productionTip = false;
//注册Mintui
Vue.use(MintUI);
axios.defaults.baseURL = "http://127.0.0.1:5050";
// axios.defaults.baseURL = "http://tmaxtravel.applinzi.com:5050";
//axios 注册Vue
Vue.prototype.axios = axios;
//配置访问服务器的基础路径
axios.defaults.withCredentials = true;

// 创建存储对象
var store = new Vuex.Store({
  // 共享的数据
  state: {
    isLogin: false
  },

  // 修改共享数据
  mutations: {
    userLogin(state) {
      state.isLogin = true;
    }
  },

  // 获取共享数据(如果获取vuex共享只能用定义函数)
  getters: {
    login(state) {
      return state.isLogin;
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  store,
  template: "<App/>"
});
