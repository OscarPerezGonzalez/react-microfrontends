require('dotenv').config()
const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')
const Dotenv = require('dotenv-webpack')

const devConfig = {
	mode: 'development',
	output: {
		publicPath: process.env.HOST_CONTAINER,
	},
	devServer: {
		port: process.env.PORT_CONTAINER,
		historyApiFallback: true,
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'container',
			remotes: {
				core: `core@${process.env.HOST_MF_CORE}`,
				auth: `auth@${process.env.HOST_MF_AUTH}`,
			},
			shared: packageJson.dependencies,
		}),
		new Dotenv(),
	],
}

module.exports = merge(commonConfig, devConfig)
