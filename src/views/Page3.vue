<template>
    <h2>计算属性和监视</h2>
    <h1>计算属性：{{fullName1}}</h1>
    <hr>
    <h1>侦听器：{{text}}</h1>
    <h1 @click="change">改变</h1>
</template>

<script lang='ts'>
    import {
        defineComponent,
        ref,
        reactive,
        computed,
        watch,
        // watchEffect,

    } from 'vue'

    export default defineComponent({
        name: 'Page3',
        setup() {
            const user = reactive({
                firstName: '东方',
                lastName: '不败',
            })
            const fullName1 = computed(() => { //用一个变量接收计算后的值，然后写进模板，与vue2差不多
                return user.firstName + '77777' + user.lastName
            })
            // --------------------------------------------------------------------------
            let text = ref('原始文字') // 这个和之前的那些变量都是在声明的同时就赋值，此时会自动类型推断，所以可以不手动写类型

            const change = () => {
                text.value = '发生改变'
            }
            watch(
                text, // 监听text值，uesr也可以侦听,但是user.firstName,user.lastName不是响应式的数据，不能侦听
                // (newValue, oldValue) => { //这两个参数也可以不写，直接进行其它操作
                //     console.log(newValue, oldValue);
                // }
                () => {
                    console.log('监听的text值发生改变');
                }
            )
            return {
                fullName1,
                text,
                change
            }

        },
    })
    // computed和watch
    // 1 computed变化不大，只是变成自己声明变量接收computed返回的值
    // 2 watch中有两个参数：第一个参数是要监听的值，第二个参数是一个回调函数
    // 在回调函数中可以获得新值和旧值，是两个对象
    // 3 注意watch只能侦听响应式数据，uesr可以侦听，但是user.firstName,user.lastName不是响应式的数据，不能侦听

    //  如果需要同时监听多个值，使用数组格式
    // watch(
    //   [first,second],
    //  ([newFirst,newSecond], [oldFirst,oldSecond]) => { 回调函数中第一个数组为监听的数组的新值 ....
    //    // .....
    //   },
    // );
</script>