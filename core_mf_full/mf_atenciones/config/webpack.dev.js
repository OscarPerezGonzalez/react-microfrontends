require('dotenv').config()
const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')
const Dotenv = require('dotenv-webpack')

const devConfig = {
	mode: 'development',
	output: {
		publicPath: process.env.HOST_MICROFRONT,
	},
	devServer: {
		port: process.env.PORT,
		historyApiFallback: true,
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'core',
			filename: 'remoteEntry.js',
			exposes: {
				'./CoreApp': './src/bootstrap',
			},
			shared: packageJson.dependencies,
		}),
		new Dotenv(),
	],
}

module.exports = merge(commonConfig, devConfig)
