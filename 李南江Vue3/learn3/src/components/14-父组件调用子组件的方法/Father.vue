<template>
  <son ref="RefChild"/>
  <p>{{num}}</p>
  <button @click="fnCallChild">点我调子组件里的方法</button>


</template>

<script>

import {reactive,ref} from 'vue'
import Son from './Son.vue'

export default {
  name: 'App',
  setup(){

    let RefChild = ref(null);

    const fnCallChild = ()=>{
      RefChild.value.sonFn();

      num.value *= 2
    };

    let num = ref(1)

    return {RefChild, fnCallChild, num};

  },
  components: { Son }

}
</script>
<style>

</style>
