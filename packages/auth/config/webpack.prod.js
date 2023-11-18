const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')
const { default: merge } = require('webpack-merge')

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/auth/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'auth',
            filename: 'remoteEntry.js',
            exposes: {
                './AuthIndex': './src/bootstrap'
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig)