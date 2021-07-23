<template>
  <div>Page8</div>
  <div>{{ y }}</div>
  <h1 @click="fun1">change</h1>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Page8",
  setup() {
    let x = 100;
    let y = ref(x);
    const fun1 = () => {
      y.value = 700;
      console.log(y.value); // 700  ref响应式代理对象是深拷贝，不会影响原数据
      console.log(x); // 100
    };
    return {
      y,
      fun1,
    };
  },
});
</script>