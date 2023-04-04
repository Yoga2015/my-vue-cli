module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/index/main.js',
      // 关闭语法检查  比如当你 定义了一个变量、函数，但是没有使用，也不会报错！
      lintOnSave: false,
    }
  }
}



// 如果 你 想 个性化的定制 脚手架 vue-cli  ，就在  myvueapp 项目 根目录下 新建 vue.config.js 。
// vue 最终会把 vue.config.js 输送给 webpack, webpack 是基于 node.js，node.js 所采用的模块化是 commonJs，

// 在 vue.config.js 中 进行 自定义 配置 ，即重写 配置，
// 因为 vue 最终会把 vue.config.js  中的 自定义 配置 合并到 webpack 中，合成一体