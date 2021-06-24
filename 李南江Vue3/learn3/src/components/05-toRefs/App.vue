<template>
  <p>{{state.name}}</p>
  <button @click="myFn">点我</button>
</template>

<script>

import {reactive,ref,toRefs} from 'vue'

export default {
  name: 'App',
  setup(){
    let obj = {name: 'lw', age: 18};
    let state = toRefs(obj);
    console.log(obj);
    console.log(state);


    function myFn(){
      state.name.value = "zhangsan"
      state.age.value = 999

      console.log(obj); //此时原始数据也跟着变了
      console.log(state);
    }

    return {state, myFn}

  }
}
</script>
