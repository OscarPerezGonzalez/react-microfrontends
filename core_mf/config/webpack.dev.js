const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const devConfig = {
	mode: 'development',
	output: {
		publicPath: 'http://localhost:8081/',
	},
	devServer: {
		port: 8081,
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
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
}

module.exports = merge(commonConfig, devConfig)
