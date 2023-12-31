const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin
const packageJson = require('../package.json')
const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8080/'
    },
    devServer: {
        port: 8080,
        historyApiFallback: true
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            filename: 'remoteEntry.js',
            remotes: {
                marketingApp: 'marketing@http://localhost:8081/remoteEntry.js',
                authApp: 'auth@http://localhost:8082/remoteEntry.js',
                dashboardApp: 'dashboard@http://localhost:8083/remoteEntry.js'
            },
            shared: packageJson.dependencies
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}

module.exports = merge(commonConfig, devConfig)