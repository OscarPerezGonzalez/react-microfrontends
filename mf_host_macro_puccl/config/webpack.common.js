require('dotenv').config()
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const TEMPLATE_OPTION = {
  template: './public/index.html',
  templateParameters: {
    title: 'Pantalla Unica',
  },
}

const isDevelopment = process.env.NODE_ENV !== 'production'

const globals = {
  BACKEND_SERVER: JSON.stringify(process.env.BACKEND_SERVER),
  NODE_ENV: JSON.stringify(process.env.NODE_ENV),
}

module.exports = {
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
    fallback: {
      fs: false,
      path: require.resolve('path-browserify'),
      process: false,
    },
    alias: {
      components: path.resolve(process.cwd(), 'src/components/'),
      hooks: path.resolve(process.cwd(), 'src/hooks/'),
      images: path.resolve(process.cwd(), 'src/images'),
      pages: path.resolve(process.cwd(), 'src/pages'),
      resources: path.resolve(process.cwd(), 'src/resources/'),
      routes: path.resolve(process.cwd(), 'src/routes/'),
      utils: path.resolve(process.cwd(), 'src/utils/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            envName: !isDevelopment ? 'production' : 'development',
          },
        },
      },

      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: [
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              ['@babel/plugin-proposal-private-methods', { loose: true }],
              '@babel/plugin-transform-runtime',
              // ['import', { libraryName: 'reactstrap', style: true }],
              'istanbul',
            ],
          },
        },
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: isDevelopment
              ? 'style-loader'
              : MiniCssExtractPlugin.loader,
          },
          { loader: 'css-loader' },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
                // modifyVars: themeVariables,
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              encoding: 'base64',
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(TEMPLATE_OPTION),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '..', 'public'),
          to: 'assets',
          globOptions: {
            ignore: [
              // Ignore all `html` files
              '**/*.html',
            ],
          },
        },
      ],
    }),
    new webpack.DefinePlugin(globals),
    new MiniCssExtractPlugin(),
  ],
}
