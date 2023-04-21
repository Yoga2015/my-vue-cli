module.exports = {
  // 配置、开启 代理服务器 方式一
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // },

  // 配置、开启 代理服务器 方式二
  devServer: {
    proxy: {

      '/walking': {     // 匹配所有以 '/walking' 开头的请求路径
        target: 'http://localhost:5000',   // 代理目标的基础路径
        pathRewrite: { '^/walking': '' },  // 路径重写
        ws: true,    //  支持 websocket
        changeOrigin: true   // 可以说谎 用于控制请求头中的host值
      },

      '/demo': {     // 匹配所有以 '/demo' 开头的请求路径
        target: 'http://localhost:5001',   // 代理目标的基础路径
        pathRewrite: { '^/demo': '' },  // 路径重写
        ws: true,    //  支持 websocket
        changeOrigin: true   // 可以说谎 用于控制请求头中的host值
      },
      
    }
  }
}
