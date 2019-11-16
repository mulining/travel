import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import home from "@/views/home";
import my from "@/views/my";
import road from "@/views/road";
import lunBo from "@/components/lunBo";
import tabBar from "@/components/tabBar";
import search from "@/components/search";
import register from "@/components/register";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:"/register",
      name:"register",
      component:register
    },
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/lunBo",
      name: "lunBo",
      component: lunBo
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
