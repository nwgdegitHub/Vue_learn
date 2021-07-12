import { createApp } from 'vue'
// import App from './App.vue'

// import App from './components/08-toRaw/App.vue'


// import App from './components/09-markRaw/App.vue'
// import App3 from './components/01-Vue2和Vue3的比较/App3.vue'
// import App from './components/02-ref和reactive的区别/App.vue'
// import App2 from './components/03-递归和非递归监听/App2.vue'
// import App from './components/04-toRef/App.vue'
// import App from './components/05-toRefs/App.vue'

// import App from './components/10-豆瓣Top250/App.vue'
// import App from './components/07-ref获取元素/App.vue'
// import App from './components/11-计算型属性/App.vue'
// import App from './components/12-watch/App.vue'
// import App from './components/04-toRef/App.vue'

// import App from './components/05-toRefs/App.vue'
// import App from './components/13-组件传值/Father.vue'

// import App from './components/14-父组件调用子组件的方法/Father.vue'
import App from './components/15-自定义指令/App.vue'


import './index.css'

let app = createApp(App)

//自定义多个全局指令
app.directive('highlight3', {
    beforeMount(el, binding, vnode) {
      console.log(binding.value);
      el.style.color = binding.value.textColor
      el.style.background = binding.value.bg

    }
})

app.directive('highlight', {
    beforeMount(el, binding, vnode) {

      el.style.background = binding.value
    }
}).mount('#app')



// createApp(App).mount('#app') //等价于vue2的new Vue({})
