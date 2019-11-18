import home from "@/views/home";
import my from "@/views/my";
import road from "@/views/road";
import test from "@/views/test";
import lunBo from "@/components/lunBo";
import tabBar from "@/components/tabBar";
import search from "@/components/search";
import login from "@/components/login";
import register from "@/components/register";
import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";

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
      path: "/test",
      name: "test",
      component: test
    },
    {
      path: "/lunBo",
      name: "lunBo",
      component: lunBo
    },
    {
      path: "/login",
      name: "login",
      component: login
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
    }
  ]
});
