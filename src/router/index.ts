import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Ref from "@/views/1-ref.vue";
import Reactive from "@/views/2-reactive.vue";
import Computed from "@/views/3-computed.vue";
import Watch from "@/views/4-watch.vue";
import LifeCycle from "@/views/5-lifeCycle.vue";
import Deep from "@/views/6-deep.vue";
import Shallow from "@/views/7-shallow.vue";
import ToRef from "@/views/8-toRef.vue";
import ToRefs from "@/views/9-toRefs.vue";
import Test from "@/views/10-test.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/ref",
    name: "Ref",
    component: Ref,
  },
  {
    path: "/reactive",
    name: "Reactive",
    component: Reactive,
  },
  {
    path: "/computed",
    name: "Computed",
    component: Computed,
  },
  {
    path: "/watch",
    name: "Watch",
    component: Watch,
  },
  {
    path: "/lifeCycle",
    name: "LifeCycle",
    component: LifeCycle,
  },
  {
    path: "/deep",
    name: "Deep",
    component: Deep,
  },
  {
    path: "/shallow",
    name: "Shallow",
    component: Shallow,
  },
  {
    path: "/toRef",
    name: "ToRef",
    component: ToRef,
  },
  {
    path: "/toRefs",
    name: "ToRefs",
    component: ToRefs,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  },
];

// 创建路由，并暴露出去
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
