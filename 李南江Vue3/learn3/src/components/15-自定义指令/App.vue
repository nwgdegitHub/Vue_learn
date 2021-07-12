<template>
  <p v-highlight="'red'">1.在main.js定义全局指令,你看我屌不?</p>
  <p v-highlight="'yellow'">2.在App.vue定义局部指令</p>
  <p v-highlight3="{'bg':'orange', 'textColor':'white'}" class="third">3.在main.js定义另一个全局指令</p>
  <p v-highlight4="'pink'">4.在App.vue定义另一个局部指令</p>

</template>

<script>

import {reactive,ref} from 'vue'

export default {
  name: 'App',
  setup(){

  },
  directives: {
    highlight2: {
        beforeMount(el, binding, vnode) {
          el.style.background = binding.value;
        },
    },
    highlight4: {
        beforeMount(el, binding, vnode) {
          el.style.background = binding.value;
        },
    }

  }
}
</script>
<style>
  .third{
    /* color: white */
  }
</style>
