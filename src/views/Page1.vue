<template>
  <h2>name: {{ state.name }}</h2>
  <h2>age: {{ state.age }}</h2>
  <h2>wife: {{ state.wife }}</h2>
  <hr />
  <button @click="update">更新</button>
</template>

<script lang='ts'>
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "Page1",
  setup() {
    const state = reactive({
      //定义state用来接收reactive方法返回的响应式代理对象
      name: "tom", //经过reactive处理后，被state接收的就是响应式对象数据了，称state为代理对象
      age: 25, // 如果操作代理对象state,目标对象中的数据也会随之变化,页面也就随之变化渲染
      wife: {
        name: "marry",
        age: 22,
      },
    });
    console.log(state, state.wife);

    const update = () => {
      state.name += "-"; // 操作数据时，直接使用xx.xx即可，不需要加.value
      state.age += 1;
      state.wife.name += "-";
      state.wife.age += 2;
    };
    return {
      state,
      update,
    };
  },
});

// reactive总结：只能用来创建对象类型的响应式数据，也就是键值对格式的响应式
// const xx = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
// 响应式转换是“深层的”：会影响对象内部所有嵌套的属性
// 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据就是响应式的
</script>