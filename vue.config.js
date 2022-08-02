const { defineConfig } = require('@vue/cli-service')

const webpack = require('webpack');

module.exports = defineConfig({
  configureWebpack: {
    // Set up all the aliases we use in our app.
    devtool: 'source-map',
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  transpileDependencies: ['vuex-persist']

})
