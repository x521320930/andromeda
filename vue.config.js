const assetsDir = 'static';

module.exports = {
  publicPath: './',
  assetsDir: assetsDir,
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/dev-api': {
        target: `http://127.0.0.1:7001`,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/dev-api': ''
        }
      }
    }
  },
  chainWebpack(config) {
    config.set('name', '夏艺洹博客');
    // 移除 prefetch 插件
    config.plugins.delete('prefetch');
  }
};
