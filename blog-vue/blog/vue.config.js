module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8082",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    },
    port:8081,
    disableHostCheck: true
  },
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false
  }
};
