<template>
  <div>Page6</div>
  <router-view name="Page3">777</router-view>
  <!-- 这样写是无效的，因为在路由js中，Page6并没有路由子组件，所以不会有组件被渲染到这个路由占位符中 -->
  <hr />
  <!-- 使用router-link标签进行页面跳转，其实就是a标签 -->
  <router-link to="/">7777</router-link>
  <!-- ----------------------------------------------------------------------- -->
  <h3>name:{{ state.name }}</h3>
  <h3>age:{{ state.age }}</h3>
  <h1 @click="change">change</h1>
  <hr />
  <h3>name:{{ name }}</h3>
  <h3>age:{{ age }}</h3>
  <h1 @click="changeToRefs2">changeToRefs</h1>
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

    const stateToRefs = reactive({
      name: "小黑",
      age: 27,
    });

    // const {name,age} = toRefs(stateToRefs) // toRefs处理的必须是响应式对象！toRefs实际上是把目标变成了ref响应式数据
    // const changeToRefs = function () {
    //     name.value += 'toRefs' // 注意：因为每个对象属性都变成了ref处理的响应式数据，所以要加上.value
    //     age.value += 100
    // }
    const changeToRefs2 = function () {
      stateToRefs.name += "toRefs!"; // 注意：因为每个对象属性都变成了ref处理的响应式数据，所以要加上.value
      stateToRefs.age += 1; // 虽然上面的name，age是const定义的，但是.value是对象的属性，即便是常量定义的，也可以更改
    };

    // -------------------------------------------------------------------------

    const change = function () {
      state.name += "变化";
      console.log(state); //返回的是: Proxy {name: "小白变化", age: 24}  这是响应式代理对象,Proxy是代理的意思，表示数据是代理对象
      console.log({
        ...state,
      }); // 这样写返回的才是正常对象格式
    };
    return {
      state,
      change,
      // name,
      // age,
      // changeToRefs
      //直接使用 ...state 不是响应式的数据，因为state整个对象才是响应式数据，扩展运算符提取出的单个属性是不能直接作为响应式数据使用，只能state.xx来使用
      ...toRefs(stateToRefs), // 这样就可以直接在模板中使用 name，age了，表示先使用toRefs把目标对象的每个属性都变成响应式，然后使用...扩展运算符把对象每个属性都提取出来
      changeToRefs2,
    };
  },
});

// 总结：
// toRefs：将响应式对象中所有属性包装为ref对象，并返回包含这些ref对象的普通对象，注意toRefs处理的必须是响应式对象！
// 注意：因为每个对象属性都变成了ref处理的响应式数据，所以要加上.value
// 总结：实际上toRefs就是为了能够解构赋值，然后直接使用对象中的属性，而不是xx.xx
</script>