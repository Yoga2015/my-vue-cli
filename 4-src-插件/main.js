// 导入 Vue
import Vue from 'vue'

// 导入 App组件，它是所有组件的父组件
import App from '@/App.vue'

// 1、引入 插件
import plugins from './plugins.js'

// 关闭 Vue的生产环境提示
Vue.config.productionTip = false

// 2、应用（使用）插件
Vue.use(plugins)

// 创建 Vue 的实例 vm
new Vue({
  render: h => h(App)
}).$mount('#app')