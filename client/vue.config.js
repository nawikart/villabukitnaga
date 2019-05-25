var webpack = require('webpack')

module.exports = {
    assetsDir: 'static',
    configureWebpack: {
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            'API_URL': JSON.stringify(process.env.API_URL)
          }
        })
      ]
    }
  }
  