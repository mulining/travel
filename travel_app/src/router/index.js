import home from "@/views/home";
import my from "@/views/my";
import road from "@/views/road";
import lunBo from "@/components/lunBo";
import tabBar from "@/components/tabBar";
import search from "@/components/search";
import justGo from "@/components/justGo";
import login from "@/components/login";
import register from "@/components/register";
import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
<<<<<<< HEAD
import myHeader from "@/components/myHeader";
=======
import treeSelect from "@/components/treeSelect";
import grid from "@/components/grid";
>>>>>>> 008970e8ebb45a5ad47b0bf990e9553887fee9b7

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
<<<<<<< HEAD
      path: "/myHeader",
      name: "myHeader",
      component: myHeader
=======
      path: "/justGo",
      name: "justGo",
      component: justGo
>>>>>>> 008970e8ebb45a5ad47b0bf990e9553887fee9b7
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
