<template>
  <h2>name: {{ state.name }}</h2>
  <h2>age: {{ state.age }}</h2>
  <hr />
  <button @click="update">更新</button>
</template>

<script lang='ts'>
import { defineComponent, watch, reactive } from "vue";

export default defineComponent({
  name: "",
  setup() {
    const state = reactive({
      name: "小白",
      age: 18,
    });
    watch(
      state, //  注意: watch只能侦听响应式数据，state.name不算响应式数据，需要使用函数格式才能监听响应式对象的属性
      (n, o) => {
        //这两个参数也可以不写，第一个是变化后的新数据，第二个是原数据
        console.log(n, o);
      }
    );
    watch(
      () => state.age, //  监听对象中的属性时，使用函数格式，return对象属性
      (n, o) => {
        console.log("旧的值: ", o, "----", "新的值: ", n);
      }
    );
    watch(
      [() => state.age, () => state.name], //  监听多个数据，使用数组格式
      (n, o) => {
        // 监听数组时，n和o的值也是数组
        console.log("监听多个数据：", "旧的值: ", o, "----", "新的值: ", n);
      }
    );
    const update = () => {
      state.name += "改变";
      state.age += 1;
    };
    return {
      state,
      update,
    };
  },
});

// 1 watch有2个参数
// 第一个参数是监听的数据对象，可以是变量，对象，数组或者函数
// 第二个参数是数据改变时的回调函数, 有2个参数, 第一个是改变后的新数据, 第二个是改变前的旧数据

// 2 注意: watch只能侦听响应式数据，但是state.name是对象内部的值，它本身不算响应式数据，但它变化会触发页面重新渲染，因为它变化时代表state变化，state是响应式数据

//  如果需要同时监听多个值，使用数组格式
// watch(
//   [first,second],
//  ([nFirst,nSecond], [oFirst,oSecond]) => { 回调函数中第一个数组为监听的数组的新值 ....
//    // .....
//   },
// );
</script>
