<template>
  <div>toRefs</div>
  <h />
  <h3>name: {{ name }}</h3>
  <h3>age: {{ age }}</h3>

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
    // 使用reactive创建的响应式对象，使用state.xx来操作单个属性，有点臃肿，可以使用...扩展运算符，把属性全部解构出来
    // 直接使用...解构reactive，解构出来的属性会失去响应式，此时需要使用toRefs
    return {
      ...toRefs(state), // 这样就可以直接在模板中使用name，age了，表示先使用toRefs把目标对象的每个属性都转换成ref格式的响应式数据，然后使用...扩展运算符把对象每个属性都提取出来
    };
  },
});
</script>