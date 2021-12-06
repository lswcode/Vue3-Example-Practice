<template>
  <div class="">
    <h1>Test测试</h1>
    <div v-for="(item,index) in state.testArr" :key="index">
      {{item}}
    </div>
    <hr>
    <div>{{state.testObj}}</div>
    <button @click="clickFun">添加数组元素和对象属性</button>
    <hr>
    <h1>鼠标点击的坐标: {{x}}--{{y}}</h1>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive } from "vue";
import { getMousePositionFun } from "@/utils/getMousePosition";

export default defineComponent({
  name: "",
  setup() {
    const state = reactive({
      testArr: [1, 2, 3, 4, 5, 6],
      testObj: {
        name: "小白",
        age: 27,
      },
    });
    const clickFun = () => {
      state.testArr[6] = 7;
      (state.testObj as any).city = "杭州"; // vue3中可以直接使用xx.xx添加对象属性，并触发页面更新，vue2中必须使用vue.set()才能实现
    };
    const { x, y } = getMousePositionFun();

    return {
      state,
      x,
      y,
      clickFun,
    };
  },
});
</script>

<style lang='less' scoped>
div {
  margin-bottom: 20px;
}
</style>