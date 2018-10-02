//Webpack v4 Config

const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');

const eslintFriendlyFormatter = require('eslint-friendly-formatter');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: {
        index: './src/script.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin({}),
            new OptimizeCSSAssetsPlugin({})
        ]
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({}),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: devMode ? false : {
                removeComments: true,
                collapseWhitespace: true,
                conservativeCollapse: true
            }
        }),
        new CopyWebpackPlugin([
            { from: 'src/img/', to: 'img/' }
        ]),
        new ImageminPlugin({
            disable: devMode,
            test: /\.(jpe?g|png)$/i,
            optipng: {
                optimizationLevel: 7
            },
            plugins: [
                imageminMozjpeg({
                    quality: 90,
                    progressive: true
                })
            ]
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            enforce: 'pre',
            exclude: /node_modules/,
            options: {
                formatter: eslintFriendlyFormatter,
                emitWarning: false
            },
            loader: 'eslint-loader'
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.css$/,
            use: [
                devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        },
        {
            test: /\.(jpg|png)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'img/[name].[ext]'
                }
            }]
        }
        ]
    }
};
