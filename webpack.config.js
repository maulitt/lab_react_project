const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index.bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        proxy: {
            '/api': {
                target: {
                    host: '127.0.0.1',
                    protocol: 'http:',
                    port: 3000,
                },
            },
        },
    },
};