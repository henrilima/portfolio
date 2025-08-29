const { defineConfig } = require('@vue/cli-service')
<<<<<<< HEAD
module.exports = defineConfig({
  transpileDependencies: true
})
=======

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.pdf$/,
          use: 'file-loader'
        }
      ]
    }
  }
})
>>>>>>> master
