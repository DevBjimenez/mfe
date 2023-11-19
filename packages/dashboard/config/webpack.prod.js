const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')
const { default: merge } = require('webpack-merge')

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/dashboard/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'dashboard',
            filename: 'remoteEntry.js',
            exposes: {
                './DashboardIndex': './src/bootstrap'
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig)