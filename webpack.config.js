const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
        },
        {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
        },
    ]},
    // mode: 'development',
    // devServer: {
    //     historyApiFallback: true,
    //     contentBase: path.resolve(__dirname, './dist'),
    //     open: true,
    //     compress: true,
    //     hot: true,
    //     port: 8080,
    // },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/index.html'),
            filename: '[name].html',
        }),
        new CleanWebpackPlugin(),
        // new webpack.HotModuleReplacement(),
    ],
}