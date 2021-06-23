import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Page1 from "@/views/Page1.vue"; // 为导入的组件命名，在下面的component中使用
import Page2 from "@/views/Page2.vue";
import Page3 from "@/views/Page3.vue";
import Page4 from "@/views/Page4.vue";
import Page5 from "@/views/Page5.vue";
import Page6 from "@/views/Page6.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/", // 这是一级路由，在App.vue根目录中使用路由占位符接收显示内容
    name: "Home", // 如果是二级路由，也就是子路由，会在指定的父路由中去查找路由占位符，然后显示
    component: Home,
  },
  {
    path: "/p1",
    name: "Page1", // 这个命名是为这一个路由信息取得名字
    // 作用 1  <router-view  name="Home"></router-view> 路由占位符使用name来获取指定组件
    // 2 可以使用$router.name获取组件name值
    // 3 用于pramas传参的引入 pramas必须用name来引入 query可以用name或者path来引入
    // path: '/register/:id/:name'   params:{id:10,name:'lili'}}"  这两个里面的name就是这个name
    component: Page1,
  },
  {
    path: "/p2",
    name: "Page2",
    component: Page2,
  },
  {
    path: "/p3",
    name: "Page3",
    component: Page3,
  },
  {
    path: "/p4",
    name: "Page4",
    component: Page4,
  },
  {
    path: "/p5",
    name: "Page5",
    component: Page5,
  },
  {
    path: "/p6",
    name: "Page6",
    component: Page6,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
