const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  publicPath: '/qhong.github.io/dist/', // 设置公共路径
  devServer: {
    port: 80,
    https: false,
    open: false,
  },
  lintOnSave: false,
  productionSourceMap: false,
  configureWebpack: {
    output: {
      // 确保输出路径正确
      filename: '[name].[hash].js',
      chunkFilename: '[name].[hash].js',
    },
    plugins: [
      new CompressionPlugin({
        algorithm: 'gzip',
        test: /\.js$|\.html$|\.css$/,
        filename: '[path].gz[query]',
        minRatio: 1,
        threshold: 10240,
        deleteOriginalAssets: false,
      }),
    ],
  },
};



// const CompressionPlugin = require('compression-webpack-plugin')
//
// module.exports = {
//   devServer: {
//     port: 80,
//     https: false,
//     open: false
//   },
//   lintOnSave: false,
//   productionSourceMap: false,
//   configureWebpack: {
//     plugins: [
//       new CompressionPlugin({
//         algorithm: 'gzip',
//         test: /\.js$|\.html$|\.css$/,
//         filename: '[path].gz[query]',
//         minRatio: 1,
//         threshold: 10240,
//         deleteOriginalAssets: false
//       })
//     ]
//   }
// }

