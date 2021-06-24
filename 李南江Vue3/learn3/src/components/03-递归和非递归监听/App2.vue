<template>
 <div id="app">
   <p>{{state.a}}</p>
   <p>{{state.gf.b}}</p>
   <p>{{state.gf.f.c}}</p>
   <p>{{state.gf.f.s.d}}</p>
   <button @click="myFn">点我</button>

   <p>{{state2.a}}</p>
   <p>{{state2.gf.b}}</p>
   <p>{{state2.gf.f.c}}</p>
   <p>{{state2.gf.f.s.d}}</p>
   <button @click="myFn2">点我2</button>


   <p>{{state3.a}}</p>
   <p>{{state3.gf.b}}</p>
   <p>{{state3.gf.f.c}}</p>
   <p>{{state3.gf.f.s.d}}</p>
   <button @click="myFn3">点我3</button>

 </div>



</template>

<script>

/**
* 1.默认情况，ref/reactive都是递归监听
* 2.数据量比较大时，递归监听耗性能
* 3.非递归监听
*
*/
import {shallowRef, shallowReactive, triggerRef} from 'vue'


export default {
 name: 'App2',
 setup(){

   let state = shallowReactive({
     a: 'a',
     gf: {
       b: 'b',
       f: {
         c: 'c',
         s: {
           d: 'd'
         }
       }
     }
   })

   function myFn(){
     // state.a = '1';
     state.gf.b = '2';
     state.gf.f.c = '3';
     state.gf.f.s.d = '4'; //这里注释第一层 可以看到UI没有刷新 说明没有往下递归


     //带不带.value 都无效
     // state = {
     //   a: '101',
     //   gf: {
     //     b: '2',
     //     f: {
     //       c: '3',
     //       s: {
     //         d: '4'
     //       }
     //     }
     //   }
     // }



   }

   //注意，通过shallowRef（）创建数据，监听.value， 并不是第一层的变化
   let state2 = shallowRef({
     a: 'a',
     gf: {
       b: 'b',
       f: {
         c: 'c',
         s: {
           d: 'd'
         }
       }
     }
   })

   function myFn2(){
     // 不带.value 无效修改
     state2.value = {
       a: '101',
       gf: {
         b: '2',
         f: {
           c: '3',
           s: {
             d: '4'
           }
         }
       }
     }

     // state2.value.a = 111; //报错

     console.log(state2.value);

   }

//triggerRef 的作用是 根据传入的数据主动更新UI
   let state3 = shallowRef({
     a: 'a',
     gf: {
       b: 'b',
       f: {
         c: 'c',
         s: {
           d: 'd'
         }
       }
     }
   })
  function myFn3(){

    state3.value.gf.f.s.d = '4'
    triggerRef(state3); //通过 triggerRef() 改变 state3中的第4层数据
    console.log(state3); //注意： 没有triggerReactive（）, 所原来是shallowReactive包装的数据，无法操作
  }
   return {state, myFn, state2, myFn2, state3, myFn3}

 }
}
</script>
