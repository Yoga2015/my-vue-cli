// 1、引入 Vue
import Vue from 'vue'

// 2、引入 App组件，它是所有组件的父组件
import App from '@/App.vue'

// 5、引入 ElementUI
// import ElementUI from 'element-ui';

// 6、引入 ElementUI 全部样式
// import 'element-ui/lib/theme-chalk/index.css';

// 8、按需引入 
import { Button, DatePicker } from 'element-ui';

Vue.component(Button.name, Button);     // 全局注册 Button 组件
Vue.component(DatePicker.name, DatePicker);     // 全局注册 Button 组件

// 3、关闭 Vue的生产环境提示
Vue.config.productionTip = false

// 7、使用 ElementUI
// Vue.use(ElementUI)

// 4、创建 Vue 的实例 vm
new Vue({
  render: h => h(App),
}).$mount('#app')