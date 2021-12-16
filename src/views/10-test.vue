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
    <div ref="testRef" class="testDiv">目标区域内</div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref, onMounted, onUnmounted } from "vue";
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
    // ----------1 直接添加对象属性，测试页面是否更新-----------------------------------------------------
    const clickFun = () => {
      state.testArr[6] = 7;
      (state.testObj as any).city = "杭州"; // vue3中可以直接使用xx.xx添加对象属性，并触发页面更新，vue2中必须使用vue.set()才能实现
    };

    // ------------2 测试封装组件---------------------------------------------
    const { x, y } = getMousePositionFun();

    // ------------3 测试contains----------------------------------------------------------
    const testRef = ref<null | HTMLElement>(null); // 定义泛型，可能会没被使用，则是null，使用后的类型就是一个HTML标签
    onMounted(() => {
      document.addEventListener("click", testFun);
    });
    onUnmounted(() => {
      document.removeEventListener("click", testFun);
    });
    const testFun = (e: MouseEvent) => {
      // 给事件参数定义类型为鼠标事件
      if (testRef.value?.contains(e.target as HTMLElement)) {
        // 使用类型断言，TS编辑器不知道，但是我们可以确定这个是一个HTMLElement类型
        console.log("在目标区域内");
      } else {
        console.log("在目标区域外");
      }
    };
    return {
      state,
      x,
      y,
      clickFun,
      testRef,
    };
  },
});
</script>

<style lang='less' scoped>
div {
  margin-bottom: 20px;
}
.testDiv {
  width: 200px;
  height: 200px;
  background-color: rgb(37, 222, 255);
}
</style>