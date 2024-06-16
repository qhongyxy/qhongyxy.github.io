const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  devServer: {
    port: 80,
    https: false,
    open: false
  },
  lintOnSave: false,
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        algorithm: 'gzip',
        test: /\.js$|\.html$|\.css$/,
        filename: '[path].gz[query]',
        minRatio: 1,
        threshold: 10240,
        deleteOriginalAssets: false
      })
    ]
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/qhong.github.io/dist/'
    : '/'
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

