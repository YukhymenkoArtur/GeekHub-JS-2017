const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PATH = {
    source: path.join(__dirname, 'js/todo'),
    build: path.join(__dirname, 'build'),
    template: path.join(__dirname, 'index.html')
};

module.exports = {
    entry: PATH.source + '/index.js',
    output: {
        path: PATH.build,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            title: 'Webpack app'
        }),
    ]
};