const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          strictMath: true,
        },
      },
    },
  },
  devServer: {
    port: 8081, // 修改端口为8081
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // 后端地址
        changeOrigin: true,
        // pathRewrite: { '^/api': '' }
      }
    }
  }
})