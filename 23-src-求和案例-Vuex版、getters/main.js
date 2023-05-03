// 1、引入 Vue
import Vue from 'vue'

// 2、引入 App组件，它是所有组件的父组件
import App from '@/App.vue'

// 5、引入Vuex
// import Vuex from 'vuex'

// 7、引入 store
import store from './store/index.js'

// 3、关闭 Vue的生产环境提示
Vue.config.productionTip = false

// 6、使用 Vuex
// Vue.use(Vuex)

// 4、创建 Vue 的实例 vm
new Vue({
  render: h => h(App),
  store,    // 
  beforeCreate() {
    Vue.prototype.$bus = this  // 安装、创建 全局事件总线
  }
}).$mount('#app')