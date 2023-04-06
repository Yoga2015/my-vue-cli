// ES6 默认暴露
export default {
  install(Vue) {
    // console.log('@@@install', Vue);

    // 全局过滤器
    Vue.filter('mySlice', function (value) {
      return value.slice(0, 2)
    });

    // 全局自定义指令 
    Vue.directive("mydirective", {
      // 自定义指令 与 元素 成功绑定时 （一上来）
      bind(el, binding) {
        el.value = binding.value
      },
      inserted(el) {
        el.focus()
      },
      update(el, binding) {
        el.value = binding.value
      },
    });

    // 全局mixin混合
    Vue.mixin({
      data() {
        return {
          x: 10,
          y: 12
        }
      }
    });

    // 给 Vue原型上添加一个方法(vm 和 vc 就都能用了)
    Vue.prototype.hello = () => {
      alert('你好！')
    }
  }
} 