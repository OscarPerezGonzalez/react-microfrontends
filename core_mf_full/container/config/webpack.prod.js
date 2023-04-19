const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const domainAuth = process.env.PRODUCTION_HOST_AUTH
const domainCore = process.env.PRODUCTION_HOST_CORE

const prodConfig = {
	mode: 'production',
	output: {
		filename: '[name].[contenthash].js',
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'container',
			remotes: {
				core: `core@${domainCore}/core/remoteEntry.js`,
				auth: `auth@${domainAuth}/auth/remoteEntry.js`,
			},
			shared: packageJson.dependencies,
		}),
	],
}

module.exports = merge(commonConfig, prodConfig)
