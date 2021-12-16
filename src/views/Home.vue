<template>
  <div class="home">
    <router-link class="a" to='/ref'>ref</router-link>
    <router-link class="a" to='/reactive'>reactive</router-link>
    <router-link class="a" to='/computed'>computed</router-link>
    <router-link class="a" to='/watch'>watch</router-link>
    <router-link class="a" to='/lifeCycle'>lifeCycle</router-link>
    <router-link class="a" to='/deep'>deep</router-link>
    <router-link class="a" to='/shallow'>shallow</router-link>
    <router-link class="a" to='/toRef'>toRef</router-link>
    <router-link class="a" to='/toRefs'>toRefs</router-link>
    <router-link class="a" to='/test'>test</router-link>
    <TeleportCom />
    <Watch :obj='obj' />
  </div>
</template>

<script lang='ts'>
import TeleportCom from "@/components/TeleportCom.vue";
import Watch from "@/views/4-watch.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  components: { TeleportCom, Watch },
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