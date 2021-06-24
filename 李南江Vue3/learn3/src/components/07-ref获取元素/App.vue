<template>
  <p ref="box">我是p</p>
  <button @click="myFn">点我</button>
</template>

<script>

import {reactive,ref,onMouted} from 'vue'

export default {
  name: 'App',
  setup(){
    let box = ref(null)

    onMouted(()=>{
      console.log("onMouted",box.value);
    });

    console.log(box.value);


    return {box};
  }
}
</script>
