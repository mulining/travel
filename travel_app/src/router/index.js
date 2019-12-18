// import home from "@/views/home";
// import my from "@/views/my";
// import road from "@/views/road";
// import test from "@/views/test";
// import lunBo from "@/components/lunBo";
// import tabBar from "@/components/tabBar";
// import search from "@/components/search";
// import justGo from "@/components/justGo";
// import reg from "@/components/reg";
// import register from "@/components/register";
import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from "@/components/HelloWorld";
// import myHeader from "@/components/myHeader";
// import treeSelect from "@/components/treeSelect";
// import grid from "@/components/grid";
// import login from "@/components/login";
// import personal from "@/components/personal";
// import more from "@/components/more";
// import pData from "@/components/pData";
// import map from "@/components/map";
// import zhenxuan1 from "@/components/zhenxuan1";
// import city from "@/components/city";
// import listDetails from "@/components/listDetails";
// import travelDetails from "@/components/travelDetails";
// import share from "@/components/share";
// import setup from "@/components/setup"
// import myPlace from "@/components/myPlace";
// import Collecting from "@/components/Collecting";

// 懒加载实现步骤二： 
Vue.use(Router);

export default new Router({
  routes: [
    // 主页
    {
      path: "/",
      name: "home",
      // component: home
      component: ()=> import(/*webpackChunkName: "home"*/'../views/home')
    },
    // 主页默认显示home
    {
      path: "/home",
      name: "home",
      // component: home
      component: ()=> import(/*webpackChunkName: "home"*/'../views/home')
    },
    {
      path: "/roadShare",
      name: "roadShare",
      // component: roadShare
      component: ()=> import(/*webpackChunkName: "roadShare"*/'../components/roadShare')
    },
    {
      path:"/myPlace",
      name:"myplace",
      // component:myPlace
      component: ()=> import(/*webpackChunkName: "myPlace"*/'../components/myPlace')//动态懒加载配置1！
    },
    {
      path:"/setup",
      name:"setup",
      // component:setup
      component: ()=> import(/*webpackChunkName: "setup"*/'../components/setup')
    },
    {
       path: "/share",
      name: "share",
      //  component: share
      component: ()=> import(/*webpackChunkName: "share"*/'../components/share')
     },
    {
      path: "/zhenxuan1/:id",
      name: "zhenxuan1",
      // component: zhenxuan1,
      component: ()=> import(/*webpackChunkName: "zhenxuan1"*/'../components/zhenxuan1'),
      props: true
    },
    {
      path: "/Collecting",
      name: "Collecting",
      // component: Collecting
      component: ()=> import(/*webpackChunkName: "Collecting"*/'../components/Collecting')
    },
    {
      path: "/HelloWorld",
      name: "HelloWorld",
      // component: HelloWorld
      component: ()=> import(/*webpackChunkName: "HelloWorld"*/'../components/HelloWorld')
    },
    {
      path: "/listDetails/:lid",
      name: "listDetails",
      // component: listDetails
      component: ()=> import(/*webpackChunkName: "listDetails"*/'../components/listDetails'),
      props:true
    },
    {
      path: "/travelDetails",
      name: "travelDetails",
      // component: travelDetails
      component: ()=> import(/*webpackChunkName: "travelDetails"*/'../components/travelDetails')
    },
    {
      path: "/register",
      name: "register",
      // component: register
      component: ()=> import(/*webpackChunkName: "register"*/'../components/register')
    },
    {
      path: "/map/:id",
      name: "map",
      // component: map
      component: ()=> import(/*webpackChunkName: "map"*/'../components/map')
    },
    {
      path: "/personal",
      name: "personal",
      // component: personal
      component: ()=> import(/*webpackChunkName: "personal"*/'../components/personal')
    },
    {
      path: "/test",
      name: "test",
      // component: test
      component: ()=> import(/*webpackChunkName: "test"*/'../views/test')
    },
    {
      path: "/myHeader",
      name: "myHeader",
      // component: myHeader
      component: ()=> import(/*webpackChunkName: "myHeader"*/'../components/myHeader')
    },
    // {
    //   path: "/city",
    //   name: "city",
    //   // component: city
    //   component: ()=> import(/*webpackChunkName: "city"*/'../views/ity')
    // },
    {
      path: "/login",
      name: "login",
      // component: login
      component: ()=> import(/*webpackChunkName: "login"*/'../components/login')
    },
    {
      path: "/pData",
      name: "pData",
      // component: pData
      component: ()=> import(/*webpackChunkName: "pData"*/'../components/pData')
    },
    {
      path: "/more",
      name: "more",
      // component: more
      component: ()=> import(/*webpackChunkName: "more"*/'../components/more')
    },
    {
      path: "/justGo",
      name: "justGo",
      // component: justGo
      component: ()=> import(/*webpackChunkName: "justGo"*/'../components/justGo')
    },
    {
      path: "/lunBo",
      name: "lunBo",
      // component: lunBo
      component: ()=> import(/*webpackChunkName: "lunBo"*/'../components/lunBo')
    },
    {
      path: "/reg",
      name: "reg",
      // component: reg
      component: ()=> import(/*webpackChunkName: "reg"*/'../components/reg')
    },
    {
      path: "/my",
      name: "my",
      // component: my
      component: ()=> import(/*webpackChunkName: "my"*/'../views/my')
    },
    {
      path: "/search",
      name: "search",
      // component: search
      component: ()=> import(/*webpackChunkName: "search"*/'../components/search')
    },
    {
      path: "/tabBar",
      name: "tabBar",
      // component: tabBar
      component: ()=> import(/*webpackChunkName: "tabBar"*/'../components/tabBar')
    },
    {
      path: "/road",
      name: "road",
      // component: road
      component: ()=> import(/*webpackChunkName: "road"*/'../views/road')
    },
    {
      path: "/treeSelect",
      name: "treeSelect",
      // component: treeSelect
      component: ()=> import(/*webpackChunkName: "treeSelect"*/'../components/treeSelect')
    },
    {
      path: "/grid",
      name: "grid",
      // component: grid
      component: ()=> import(/*webpackChunkName: "grid"*/'../components/grid')
    }
  ]
});
