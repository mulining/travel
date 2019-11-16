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
import qs from 'qs';

Vue.use(Vant);

Vue.use(qs);
Vue.config.productionTip = false;
//注册Mintui
Vue.use(MintUI);
//axios 注册Vue
Vue.prototype.axios = axios;
//配置访问服务器的基础路径
axios.defaults.baseURL = "http://127.0.0.1:5050";
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
