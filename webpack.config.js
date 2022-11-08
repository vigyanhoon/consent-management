const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const { env } = require('process')

module.exports = env => {

    return {
        entry: {
            main: path.resolve(__dirname, './src/index.js'),
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: '[name].bundle.js',
        },
        mode: env.mode,
        devServer: {
            historyApiFallback: true,
            static: './',
            open: true,
            compress: true,
            hot: true,
            port: 8080,
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'webpack Boilerplate',
                template: path.resolve(__dirname, './template/template.html'),
                filename: 'index.html',
            }),
            new CleanWebpackPlugin(),
            new webpack.HotModuleReplacementPlugin(),
        ],
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    resolve: {
                        extensions: [".js", ".jsx"]
                    },
                    use: ['babel-loader'],
                },
                {
                    test: /\.(scss|css)$/,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
    }
}