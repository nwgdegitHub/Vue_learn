<template>
  <p>{{b}}</p>
  <button @click="myFn">点我</button>
</template>

<script>

import {reactive,ref,computed, onMounted} from 'vue'

export default {
  name: 'App',
  setup(){

    let a = ref(9)

    let b = computed( ()=> {
      console.log("跟踪了a, 计算型属性是否会变化？会");
      return a.value + 1
    } )

    function myFn(){
      a.value = a.value * 2
    };

    //在异步请求中改变跟踪变量是否会影响 计算型属性
    onMounted(()=>{
      async function test2(){
        setTimeout(function(){
          console.log("你会在5秒后看到我");
          a.value = a.value * 3
        }, 5000)

      };
      test2();
    })



    return {a, b, myFn};

  }
}
</script>
<style>

</style>
