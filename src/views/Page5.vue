<template>
  <div>x:{{ x }}</div>
  <div>y:{{ y }}</div>
  <router-view></router-view>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import useMousePosition from "./hooks/useMousePosition"; // 先导入
import { useRoute } from "vue-router";

export default defineComponent({
  name: "Page5",
  setup() {
    const route = useRoute();
    console.log("父路由", route.params);
    // console.log(useMousePosition()); // 这个函数返回的值是一个对象
    const { x, y } = useMousePosition(); // 先调用该函数，获取函数的返回值，然后使用解构赋值直接获取 x,y 值
    return {
      x,
      y,
    };
  },
});
</script>