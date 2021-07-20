<template>
  <div class="home">
    这里是主页: {{num}}
  </div>
  <div @click="numFun">点击加一</div>
</template>

<script lang="ts">
  import {
    defineComponent, // 需要使用什么就导入什么
    ref // vue3中使用组件需要引入defineComponent,以正确推断setup()组件的参数类型,目的是定义一个组件,内部可以传入一个配置对象
  } from 'vue';

  export default defineComponent({
    name: 'Home',
    //  在Vue3中依然可以使用data和methods配置, 但建议使用新语法
    setup() { // setup是组合API的入口函数，相当于vue2的data和methods，data和methods的内容都写在这里面
      const num = ref(0)
      // ref是一个函数,作用:定义一个响应式的数据,返回的是一个Ref对象,对象中有一个value属性
      // num接收的是ref方法返回的响应式对象，ref括号中的数据只是普通数据，经过ref处理后，返回的是响应式数据
      // 如果操作这个num响应式数据,目标中的数据会随之变化,页面也就随之变化渲染

      function numFun() { // 函数也写在这里
        // num++ 报错,num是一个对象，不能直接这样使用变量值，需要加上.value才能操作变量的值
        num.value++
      }
      return {
        num,
        numFun
      }
    }
  });

  // ref使用总结：
  // ref是一个函数,作用:定义一个响应式的数据,返回的是一个Ref对象,对象中有一个value属性
  // 如果需要对数据进行操作,需要使用该Ref对象调用value属性的方式进行数据的操作
  // 模版中是不需要使用.value属性的写法
  // 一般用来定义基本类型的响应式数据
</script>