<<<<<<< HEAD
import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import home from "@/views/home";
import my from "@/views/my";
import road from "@/views/road";
import lunBo from "@/components/lunBo";
import tabBar from "@/components/tabBar";
import search from "@/components/search";
<<<<<<< HEAD
import login from "@/components/login";
=======
import register from "@/components/register";
=======
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
>>>>>>> 4f79c45768a846991a9ac3dfc50e1045af6e93e1
>>>>>>> bc88ab9825a4ca2c442ecc218ced0ba86365828f

Vue.use(Router)

export default new Router({
  routes: [
    {
<<<<<<< HEAD
      path:"/register",
      name:"register",
      component:register
    },
    {
      path: "/",
      name: "HelloWorld",
=======
      path: '/',
      name: 'HelloWorld',
>>>>>>> 4f79c45768a846991a9ac3dfc50e1045af6e93e1
      component: HelloWorld
<<<<<<< HEAD
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
=======
>>>>>>> bc88ab9825a4ca2c442ecc218ced0ba86365828f
    }
  ]
})
