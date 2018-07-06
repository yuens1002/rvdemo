const merge = require('webpack-merge')
const base = require('./webpack.base.conf.js')

module.exports = merge(base, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }
        ]
      }, {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      }

    ]
  }

})
