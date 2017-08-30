const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const path = require('path')
module.exports = merge(base, {
  // 这允许webpack以node适用方式处理动态导入，并且还会在编译Vue组件时，告知vue-loader
  // 输送面向服务器代码
  target: 'node',
  // 对bundle renderer 提供 source-map 支持
  devtool: '#source-map',
  entry: './src/entry-server.js',
  // 告知 server bundle 适用node风格导出模块
  output: {
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    alias: {
      'index-server': path.resolve(__dirname, '../src/api/index-server')
    }
  },
  // https://webpack.js.org/configuration/externals/#externals
  // https://github.com/liady/webpack-node-externals
  // 处理化应用陈旭依赖模块、可以使服务器构建速度更快，并生成较小的bundle文件
  externals: nodeExternals({
    // 不需要处理化webpack需要处理的依赖模块
    whitelist: /\.(css|less)$/
  }),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    }),
    // 这是将服务器的整个输出
    // 构建为单个 JSON 文件的插件。
    // 默认文件名为 `vue-ssr-server-bundle.json`
    new VueSSRServerPlugin()
  ]
})
