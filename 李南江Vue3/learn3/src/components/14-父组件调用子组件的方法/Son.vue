<template>
  <div class="main">
    <p>{{num}}</p>
    <p>{{conts}}</p>
    <button @click="sonFn2">点我</button>
  </div>

</template>

<script>

import {reactive,ref} from 'vue'



export default {
  name: 'App',
  setup(){

    let conts = ref("我是子组件");

    let num = ref(0)

    function sonFn(){
      conts.value = "我被父组件里调用了子组件的方法修改了数据";
    };

    const sonFn2 = ()=> {
      // alert("我是子组件阿")
      num.value += 1
    };

    return {conts, sonFn, sonFn2, num}
  }
}
</script>
<style>
  .main{
    width: 200px;
    height: 300px;
    border: 1px solid red;
  }
</style>
