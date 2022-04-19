const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    host: "localhost", //局域网和本地访问
    port: "1088",
    hot: true, //热部署
    open: true, //自动打开浏览器
    historyApiFallback: true,
// overlay: {
//   warning: false,
//   error: true
// },
//代理
proxy: {
    "/api": {
        target: "http://localhost:1022", //目标代理服务器地址
        changeOrigin: true,  //允许跨域
        ws: true,
        pathRewrite: {
            "^/api": ""
        }
    }
}
},

})