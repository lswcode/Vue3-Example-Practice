<template>
    <div>Page6</div>
    <router-view name="Page3">777</router-view>
    <!-- 这样写是无效的，因为在路由js中，Page6并没有路由子组件，所以不会有组件被渲染到这个路由占位符中 -->
    <hr>
    <router-link to="/">7777</router-link>
</template>

<script lang='ts'>
    import {
        defineComponent,
    } from 'vue'

    export default defineComponent({
        name: '',
        setup() {

            return {

            }
        },
    })
</script>