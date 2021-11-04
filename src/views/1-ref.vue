<template>
  <div class="home">这里是主页: {{ num }}</div>
  <div @click="numFun">点击加一</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "",
  setup() {
    const num = ref(0);
    function numFun() {
      num.value++;
    }
    return {
      num,
      numFun,
    };
  },
});

// ref使用总结：
// ref是一个函数,作用:定义一个响应式的数据,返回的是一个Ref对象,对象中有一个value属性
// ref括号中的数据只是普通数据，经过ref处理后，返回的是响应式数据
// 如果需要对数据进行操作,需要使用该Ref对象调用value属性的方式进行数据的操作
// 模版中是不需要使用.value属性的写法
// 一般用来定义基本类型的响应式数据
</script>