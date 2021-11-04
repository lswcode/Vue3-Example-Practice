<template>
  <div>Page9</div>
  <div>{{ y }}</div>
  <h1 @click="fun1">change</h1>
</template>

<script lang='ts'>
import { defineComponent, toRef, reactive } from "vue";

export default defineComponent({
  name: "Page8",
  setup() {
    let obj = {
      uname: "小白",
      age: 24,
    };
    let x = reactive(obj);
    let y = toRef(x, "uname"); //  注意：如果toRef和toRefs处理的不是响应式对象，那返回的对象改变不会改变页面，所以只有处理原本就是响应式的对象才能返回响应式的数据
    const fun1 = () => {
      y.value = "小明";
      console.log(obj.uname); // toRef,toRefs和reactive都是浅拷贝，拷贝的是原对象的地址，修改响应式代理对象会改变原数据
    };
    return {
      y,
      fun1,
    };
  },
});
</script>