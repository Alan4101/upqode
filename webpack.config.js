'use strict';
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const src = path.resolve(__dirname + "src/fonts");

module.exports = {
    mode: 'development',
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.app.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(ttf|eot|svg|gif|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                include: src,
                use:  [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({filename: 'style.css'})
    ]
};