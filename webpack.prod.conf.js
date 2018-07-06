const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const base = require('./webpack.base.conf.js')

module.exports = merge(base, {
  mode: 'production',
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    })
  ]
})
