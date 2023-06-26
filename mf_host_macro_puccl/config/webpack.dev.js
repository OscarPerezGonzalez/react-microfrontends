require('dotenv').config()
const webpack = require('webpack')
const { merge } = require('webpack-merge')
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
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        core: `core@${process.env.HOST_MF_CORE}`,
      },
      shared: {
        react: {
          import: 'react', 
          shareKey: 'react',
          shareScope: 'default',
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
