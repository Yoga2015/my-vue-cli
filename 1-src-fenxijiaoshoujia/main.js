// 引入 Vue
import Vue from 'vue'
// 引入 App组件 ，它是所有组件的父组件
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建 Vue的实例 --- vm
new Vue({
  // el:'#app',     $mount()  和 el 有着同样的功能

  // 下面这行代码，完成了这个功能，将 App组件 放入（挂载到） 容器中
  render: h => h(App),

  // render : (createElement)=> { 
  //   return createElement('h1','你好！')
  // }

  // render: createElement => createElement('h1', '你好！')
  // render: q => q ('h1', '你好！')
  // render: h => h(App),

}).$mount('#app')
