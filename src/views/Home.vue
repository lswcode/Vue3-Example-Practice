<template>
  <div class="home">
    <router-link class="a" to='/ref'>ref</router-link>
    <router-link class="a" to='/reactive'>reactive</router-link>
    <router-link class="a" to='/computed'>computed</router-link>
    <router-link class="a" to='/watch'>watch</router-link>
    <router-link class="a" to='/lifeCycle'>lifeCycle</router-link>
    <router-link class="a" to='/deep'>deep</router-link>
    <router-link class="a" to='/shallow'>shallow</router-link>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  setup() {
    return {};
  },
});
</script>

<style lang='less' scoped>
.a {
  margin-left: 40px;
  font-size: 30px;
}
</style>