module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      // extensions: ['.js', '.vue', '.css'],
      //别名配置
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
