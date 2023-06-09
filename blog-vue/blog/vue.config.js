module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/api": {
        // target: "http://192.168.100.10:8082",
        target: "http://127.0.0.1:8082",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    },
    port:8081,
    disableHostCheck: true
  },
  configureWebpack: {//调试代码用，正式发布时应删除。
    devtool: 'source-map'
  },
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false
  }
};
