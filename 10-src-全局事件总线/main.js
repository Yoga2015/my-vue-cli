// 导入 Vue
import Vue from 'vue'

// 导入 App组件，它是所有组件的父组件
import App from '@/App.vue'

// 关闭 Vue的生产环境提示
Vue.config.productionTip = false


// window.x = { a: 1, b: 2 }

// VueComponent.prototype.__proto__ === Vue.prototype

// Vue.prototype.x = { a: 1, b: 2 }   会报错！

// console.log(Vue.prototype);   // $emit、 $on  、 $off

// const Demo = Vue.extend({})

// const d = new Demo()

// Vue.prototype.x = d


// 创建 Vue 的实例 vm
new Vue({
  render: h => h(App),
  beforeCreate() {
    // Vue.prototype.x = this
    Vue.prototype.$bus = this   // 安装全局事件总线
    console.log(this);
  },
}).$mount('#app')


// const vm = new Vue({
//   render: h => h(App),
//   beforeCreate() {
//     Vue.prototype.x = this
//   },
// }).$mount('#app')

// Vue.prototype.x = vm