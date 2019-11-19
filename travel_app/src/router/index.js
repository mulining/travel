import home from "@/views/home";
import my from "@/views/my";
import road from "@/views/road";
import test from "@/views/test";
import lunBo from "@/components/lunBo";
import tabBar from "@/components/tabBar";
import search from "@/components/search";
import justGo from "@/components/justGo";
import reg from "@/components/reg";
import register from "@/components/register";
import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import myHeader from "@/components/myHeader";
import treeSelect from "@/components/treeSelect";
import grid from "@/components/grid";
import login from "@/components/login";
import personal from "@/components/personal";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/register",
      name: "register",
      component: register
    },
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/personal",
      name: "personal",
      component: personal
    },
    {
      path: "/test",
      name: "test",
      component: test
    },
    {
      path: "/myHeader",
      name: "myHeader",
      component: myHeader
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/justGo",
      name: "justGo",
      component: justGo
    },
    {
      path: "/lunBo",
      name: "lunBo",
      component: lunBo
    },
    {
      path: "/reg",
      name: "reg",
      component: reg
    },
    {
      path: "/my",
      name: "my",
      component: my
    },
    {
      path: "/search",
      name: "search",
      component: search
    },
    {
      path: "/tabBar",
      name: "tabBar",
      component: tabBar
    },
    {
      path: "/road",
      name: "road",
      component: road
    },
    {
      path: "/home",
      name: "home",
      component: home
    },
    {
      path: "/treeSelect",
      name: "treeSelect",
      component: treeSelect
    },
    {
      path: "/grid",
      name: "grid",
      component: grid
    }
  ]
});
