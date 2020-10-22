const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'./dist'),
        publicPath: 'dist'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
              loader: 'babel-loader',
              exclude: '/node_modules/',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-proposal-object-rest-spread']
              }
            }
          }]
      },
    devServer: {
        overlay: true
    }
}