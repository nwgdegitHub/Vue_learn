<template>
<div id="app"></div>

  <p>使用ref: {{age1}}</p>
  <p>使用reactive： {{age2.value}}</p>
  <button @click="changeRef">改变ref方式</button>
  <button @click="changeReactive">改变reactive方式</button>

  <p>如果ref({num: 999}) 则不用使用.value: {{age3.num}}</p>
  <p>reactive(100) 则不用使用.value: {{age4}}</p>
</template>

<script>

import {ref, reactive, isRef, isReactive} from 'vue'

export default {
  name: 'App',
  setup(){
    const age1 = ref(18); //实质是reactive({value: 18})
    const age2 = reactive({value: 19})

    //一般ref用来包装简单的数据 reactive用来包装obj/arr 不要下面这么用
    const age3 = ref({num: 999})
    const age4 = reactive(101)

    function changeRef(){
      age1.value = 188
      age3.num = 888 //无效
      console.log(isRef(age1));

    }
    function changeReactive(){
      age2.value = 199
      // age4 = 201 //报错
      // age4.value = 201//报错
      console.log(isReactive(age2));
    }


    return {age1, age2, changeRef, changeReactive, age3, age4}

    // ref本质还是reactive, 但是和reactive的区别是：在template中使用不需要 count.value， 直接用count。在template外修改时需要用count.value = xxx
    // 如果ref({}) 则不用使用.value
// 而reactive 在template中不会自动添加value, 修改时需要用count.value = xxx
  },
  mounted() {

  },

}
</script>
