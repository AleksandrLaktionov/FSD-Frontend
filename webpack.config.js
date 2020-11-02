const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
                test: /\.js$/i,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ],
            },
            {
                test: /\.(s[ac]ss|css)$/i,
                use: [
                    process.env.NODE_ENV !== 'production'
                    ? 'style-loader'
                    : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
           {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    'file-loader'
                ],
            },
            {
                test: /\.(ttf|woff|svg)$/i,
                use: [
                    'file-loader'
                ],
            },
            {
                test: /\.pug$/i,
                use: [
                    'pug-loader'
                ],
            }, 
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/index.pug'),
            filename: '[name].html',
        }),
        new MiniCssExtractPlugin({
            template: path.resolve(__dirname, './src/style/index.scss'),
            filename: '[name].css',
          }),
        new CleanWebpackPlugin(),
    ]
}