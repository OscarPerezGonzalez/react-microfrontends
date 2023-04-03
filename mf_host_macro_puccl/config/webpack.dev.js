require('dotenv').config()
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const ESLintPlugin = require('eslint-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const path = require('path')

const commonConfig = require('./webpack.common')

const deps = require('../package.json').dependencies

const port = process.env.SERVER_PORT

const devConfig = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: [
    path.resolve(__dirname, '..', 'src', 'index.js'),
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true',
  ],
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: '[name].[contenthash].js',
    publicPath: `http://localhost:${port}/`,
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new ESLintPlugin(),
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        login: 'login@http://localhost:3001/remoteEntry.js',
        registro: 'registro@http://localhost:3002/remoteEntry.js',
      },
      shared: {
        react: {
          import: 'react', // the "react" package will be used a provided and fallback module
          shareKey: 'react', // under this name the shared module will be placed in the share scope
          shareScope: 'default', // share scope with this name will be used
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}

module.exports = merge(commonConfig, devConfig)
