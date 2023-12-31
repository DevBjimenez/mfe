const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')
const { default: merge } = require('webpack-merge')

const domain = process.env.PRODUCTION_DOMAIN

const configProd = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketingApp: `marketing@${domain}/marketing/latest/remoteEntry.js`,
                authApp: `auth@${domain}/auth/latest/remoteEntry.js`,
                dashboardApp: `dashboard@${domain}/dashboard/latest/remoteEntry.js`
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, configProd)