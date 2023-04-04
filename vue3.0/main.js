// 1、引入 Vue
import Vue from 'vue';
// 2、引入 App组件 ，它是所有组件的父组件
import App from '@/App.vue';
// 3、关闭 vue的生产提示
Vue.config.productionTip = false;

// 创建 Vue实例对象  --- vm
new Vue({
  // 下面这行代码，完成了这个功能，将 App组件 放入（挂载到） 容器中
  render: h => h(App),
}).$mount('#app')