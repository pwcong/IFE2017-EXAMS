var webpack = require('webpack');
var path = require('path');

module.exports = {

	entry: './src/index.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['react', 'es2015', 'stage-0']
				}
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader"
				]
			},
			{
				test: /\.json$/,
				use: 'json-loader'
			}

		]
	},
	devtool: 'source-map',
	devServer: {
		port: 3000,
		inline: true,
		publicPath: '/build/'
	}
}