const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        UI_kit: './js/index.js'
    },
    output: {
        filename: `./js/${filename('js')}`,
        path: path.resolve(__dirname, 'dist'),
        publicPath: ''
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'dist'),
        index: 'UI_kit.html',
        open: true,
        compress: true,
        hot: true,
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.pug'),
            filename: `${filename('html')}`,
            minify: {
                collapseWhitespace: isProd,
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `./css/${filename('css')}`
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'src/assets/'),
                to: path.resolve(__dirname, 'dist/assets/'),
                toType: "dir"
            }]
        })
    ],
    devtool: isProd ? false : 'source-map',
    module: {
        rules: [{
                test: /\.html$/i,
                loader: 'html-loader'
            },

            {
                test: /\.pug$/i,
                loader: 'pug-loader'
            },

            {
                test: /\.(s[ac]ss|css)$/i,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: (resourcePath, context) => {
                                return path.relative(path.dirname(resourcePath), context) + '/';
                            }
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },

            {
                test: /\.(?:|png|jpe?g|gif|svg)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: `./img/${filename('[ext]')}`
                    }
                }]
            },

            {
                test: /\.(?:|ttf|woff|woff2|otf|eot)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: `./fonts/${filename('[ext]')}`
                    }
                }]
            },

            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ],
            }
        ]
    }
};