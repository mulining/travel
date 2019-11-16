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
import register from "@/components/register";
=======
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
>>>>>>> 4f79c45768a846991a9ac3dfc50e1045af6e93e1

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
    }
  ]
})
