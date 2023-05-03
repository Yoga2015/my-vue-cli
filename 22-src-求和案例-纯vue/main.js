// 1、导入 Vue
import Vue from 'vue'

// 2、导入 App组件，它是所有组件的父组件
import App from '@/App.vue'

// 5、导入 vue-resource
import vueResource from 'vue-resource'

// 3、关闭 Vue的生产环境提示
Vue.config.productionTip = false

// 6、使用 vueResource
Vue.use(vueResource)

// 4、创建 Vue 的实例 vm
new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this  // 安装、创建 全局事件总线
  }
}).$mount('#app')