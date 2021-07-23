<template>
  <div class="title">
    <h1>Page2</h1>
    <div class="test">测试</div>
  </div>
  <h2>name: {{ state.name }}</h2>
  <h2>age: {{ state.age }}</h2>
  <h2>wife: {{ state.wife }}</h2>
  <hr />
  <button @click="update">更新</button>
  <hr />
  <router-link to="/p3">跳转 </router-link>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "Page2",
  setup() {
    const state = ref({
      // ref也可以用来处理对象
      name: "tom", // 但是实际上是Vue将ref中的对象转换为reactive的代理对象，实际上还是使用了reactive
      age: 25, // 区别是ref使用对象时需要加上.value
      wife: {
        name: "marry",
        age: 22,
      },
    });
    console.log(state, state.value.wife); // 需要加上.value

    const update = () => {
      state.value.name += "-"; // 需要加上.value
      state.value.age += 1;
      state.value.wife.name += "-";
      state.value.wife.age += 2;
      console.log(state.value.wife.age);
    };

    // ---------------------------------------------
    const route = useRoute();
    console.log("Page2", route.params);
    console.log("Page2", route.query);
    return {
      state,
      update,
    };
  },
});
</script>

<style lang="less" scoped>
// 必须写上less才能使用less的语法，才能在父选择器中写子选择器
.title {
  color: gray;
  font-size: 25px;

  .test {
    color: aqua;
  }
}
</style>