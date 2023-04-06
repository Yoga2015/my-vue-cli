// 导入 Vue
import Vue from 'vue'

// 导入 App组件，它是所有组件的父组件
import App from '@/App.vue'

// 导入 mixin 混合 模块
import { hunhe, hunhe2 } from './mixin.js'

// 关闭 Vue的生产环境提示
Vue.config.productionTip = false

Vue.mixin(hunhe)
Vue.mixin(hunhe2)

// 创建 Vue 的实例 vm
new Vue({
  render: h => h(App)
}).$mount('#app')