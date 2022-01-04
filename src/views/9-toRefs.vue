<template>
  <div>toRefs</div>
  <h />
  <h3>name: {{ name }}</h3>
  <h3>age: {{ age }}</h3>
  <button @click="change">改变</button>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "",
  setup() {
    const state = reactive({
      name: "小白",
      age: 24,
    });

    let x = toRefs(state); // 返回一个对象，对象中的每个属性都是ref格式的响应式数据，可以使用解构赋值单独取出，也可以使用...全部一次性取出
    let { age, name } = x; // 解构赋值，单独取出想要使用的属性
    console.log(x);
    console.log(age.value);
    const change = () => {
      age.value += age.value; // 第一种，使用toRefs转换后，可以直接修改age和name，但是需要加上.value(因为toRef是将响应式对象中的属性全部转换为ref格式)
      name.value += name.value;
      // state.name += state.name; // 第二种:使用这个方式也可以改变响应式数据state中的name和age
      // state.age += state.age;
    };
    return {
      // age, // 第一种方法，使用解构赋值单独指定数据
      // name,
      change,
      ...toRefs(state), // 第二种方式使用...扩展运算符取出全部数据
      // reactive直接使用...扩展运算符，解构出来的属性会失去响应式，此时需要使用toRefs
    };
  },
});
</script>