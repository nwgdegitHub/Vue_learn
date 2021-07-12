<template>
  <p>{{state}}</p>
  <button @click="myFn">点我</button>

  <son user="管理员" school="{adress:'浦东新区', money: 999}"/>
</template>

<script>

import {reactive,ref} from 'vue'
import Son from './Son.vue'

export default {
  name: 'App',
  setup(){

  },
  components: { Son }

}
</script>
<style>

</style>
