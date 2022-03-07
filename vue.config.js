module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/mall'
    : '/'
  ,
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
