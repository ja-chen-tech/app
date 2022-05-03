module.exports = {
  productionSourceMap:false,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  //代理跨域
  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.98.123.211',
      }
    }
  },
  publicPath:'./',  // 执行 npm run build 统一配置路径
  lintOnSave:false ,//关闭语法检查
  configureWebpack: config => {
    // 为生产环境修改配置...
    if (process.env.NODE_ENV === 'production') {
        config.mode = 'production';
        // 打包文件大小配置
        config.performance = {
          maxEntrypointSize: 10000000,
          maxAssetSize: 30000000
        }
    }
},
};
