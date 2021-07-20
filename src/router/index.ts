import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Page1 from "@/views/Page1.vue"; // 为导入的组件命名，在下面的component中使用
import Page2 from "@/views/Page2.vue";
import Page3 from "@/views/Page3.vue";
import Page4 from "@/views/Page4.vue";
import Page5 from "@/views/Page5.vue";
import Page6 from "@/views/Page6.vue";
import Page7 from "@/views/Page7.vue";
import Page8 from "@/views/Page8.vue";
import Page9 from "@/views/Page9.vue";
import C1 from "@/views/c1.vue"; // 导入的组件名首字母必须大写
const routes: Array<RouteRecordRaw> = [
  {
    path: "/", // 这是一级路由，在App.vue根目录中使用路由占位符接收显示内容
    name: "Home", // 如果是二级路由，也就是子路由，会在指定的父路由中去查找路由占位符，然后显示
    component: Home,
  },
  {
    path: "/p1",
    name: "Page1", // 这个命名是为这一个路由信息取的名字
    // 作用 1  <router-view  name="Home"></router-view> 路由占位符使用name来获取指定组件
    // 2 push(name:'name')实现跳转,可以使用$route.name获取组件name值
    // 3 用于pramas传参的引入 pramas必须用name来引入 query可以用name或者path来引入
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
    children: [
      {
        path: "c1",
        name: "c1",
        component: C1,
      },
    ],
  },
  {
    path: "/p6",
    name: "Page6",
    component: Page6,
  },
  {
    path: "/p7",
    name: "Page7",
    component: Page7,
  },
  {
    path: "/p8",
    name: "Page8",
    component: Page8,
  },
  {
    path: "/p9",
    name: "Page9",
    component: Page9,
  },
];

// 创建路由，并暴露出去
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
