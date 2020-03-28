const webpack = require("webpack");
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: {
       home: path.resolve(__dirname, './src/index.js'),
    },
    mode: 'development',
    devServer: {
    contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }, 
            {
                test: /\.html$/,
                use: {
                loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                /**/
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader' 
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jQuery',
            jQuery: 'jQuery'
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname,"./src/index.html")
        }), 
        new VueLoaderPlugin()
    ],
}