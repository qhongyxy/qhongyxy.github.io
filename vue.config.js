// const CompressionPlugin = require('compression-webpack-plugin');
//
// module.exports = {
//   devServer: {
//     port: 80, // 开发服务器端口号
//     https: false, // 是否启用 HTTPS
//     open: false // 是否在启动时自动打开浏览器
//   },
//   lintOnSave: false, // 是否在保存时进行代码检查
//   productionSourceMap: false, // 是否在生产环境下生成 source map
//   publicPath: '/qhong.github.io/', // 应用的基础路径（GitHub 仓库名称，两边的 / 不能省略）
//   outputDir: 'dist', // 打包输出目录（不配置默认为 dist）
//   assetsDir: 'static', // 静态资源（js、css 等）存放路径，相对 outputDir
//   transpileDependencies: [], // 对依赖进行转译的数组，可以指定需要转译的依赖包
//   configureWebpack: {
//     plugins: [
//       new CompressionPlugin({
//         algorithm: 'gzip', // 使用 gzip 压缩算法
//         test: /\.js$|\.html$|\.css$/, // 需要压缩的文件类型
//         filename: '[path].gz[query]', // 压缩后的文件名格式
//         minRatio: 1, // 压缩比例（压缩后/压缩前大小）
//         threshold: 10240, // 只有大小大于该值的文件才会被压缩
//         deleteOriginalAssets: false // 是否删除原始文件
//       })
//     ]
//   }
// };



const CompressionPlugin = require('compression-webpack-plugin')

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
  }
}

