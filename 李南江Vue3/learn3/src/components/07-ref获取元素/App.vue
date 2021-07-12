<template>
  <p ref="box">我是p</p>
  <button @click="myFn">点我</button>
</template>

<script>

import {reactive,ref,onMounted} from 'vue'

export default {
  name: 'App',
  setup(){
    let box = ref(null) //参数不传 或者传null

    onMounted(()=>{
      console.log("onMounted",box.value);
    });

    console.log(box.value);


    return {box};
  }
}
</script>
