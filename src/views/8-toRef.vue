<template>
  <h1>toRef</h1>
  <button @click="updateFun">change</button>
  <h2>{{ name }}</h2>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRef } from "vue";

export default defineComponent({
  name: "ToRef",
  setup() {
    const state = reactive({
      // 一开始使用reactive创建一个响应式对象
      // 但是之后只需要对该对象中的某一个属性进行响应式（即模板中只单独用到这一个属性)，那么可以使用toRef来解决
      name: "小白",
      age: 24,
    });

    const name = toRef(state, "name"); // 第一个参数是对象，第二个参数是对象的某个属性，将对象中的某一个属性变成响应式对象
    const updateFun = () => {
      name.value += "-"; // toRef/toRefs实际上是把目标变成了ref数据，所以使用时必须加上.value，模板中除外
    };
    return {
      name,
      updateFun,
    };
    // toRef和toRefs 处理响应式数据时，返回的也是响应式的数据
    // 作用: 将reactive响应式对象中的单个属性或全部属性转换为ref格式
  },
});
</script>