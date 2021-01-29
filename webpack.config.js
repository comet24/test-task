const path = require("path");
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        publicPath: '/'
    },

    module: {
        rules: [
            //babel
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env',"@babel/preset-react"],
                        plugins : ["transform-class-properties", "@babel/transform-runtime"]
                    }
                }
            },

            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },



            // html loader (static html)
            {
                test: /\.html$/i,
                exclude: /(node_modules|bower_components)/,
                use: ["html-loader"],
            },



            {
                test: /\.(eot|woff|ttf)$/i,
                exclude: /(node_modules|bower_components)/,
                loader: "file-loader",
                options: {
                    outputPath: 'fonts',
                    name : "[contenthash].[ext]"
                }
            },


            {
                test: /\.(jpg|png|svg)$/i,
                exclude: /(node_modules|bower_components)/,
                loader: "file-loader",
                options: {
                    outputPath: 'images',
                    publicPath: "/images/",
                    name : "[contenthash].[ext]"
                }
            },
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        historyApiFallback: true,
    },


    mode: process.env.MODE==="development" ? "development" : "production",
    watch: process.env.MODE==="development" ? true : false,
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            template : "./src/html/index.html",
            filename: "index.html"
        }),

        new webpack.ProvidePlugin({
            React : 'react'
        }),
    ],

    resolve: {
        alias: {
            "@images": path.resolve(__dirname, 'src/static/images/'),
            "@static": path.resolve(__dirname, 'src/static/'),
            "@redux": path.resolve(__dirname, 'src/redux/'),
            "@comp": path.resolve(__dirname, 'src/components/'),
            "@middleware": path.resolve(__dirname, 'src/middleware/')
        }
    }
}

module.exports = config;