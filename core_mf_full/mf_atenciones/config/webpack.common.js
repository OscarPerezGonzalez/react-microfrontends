const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
	  },
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env', '@babel/preset-flow'],
						plugins: ['@babel/plugin-transform-runtime'],
					},
				},
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: 'ts-loader'
			},
			{
				test: /\.(css|s(a|c)ss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.svg$/,
				use:{
				  loader: "@svgr/webpack",
				}
			  },
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(gif|jpg|png)$/,
				use:{
				  loader: "file-loader",
				}
			  }
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
}
