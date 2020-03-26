module.exports = {
  chainWebpack(config) {
    config.set('name', '夏艺洹博客');
    // 移除 prefetch 插件
    config.plugins.delete('prefetch');
  }
};
