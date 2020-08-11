const path = require('path');

module.exports = {
	mode: 'development',
	entry: 'index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.jsx?/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					}
				}
			}
		],
	},
	devServer: {
		publicPath: '/build/',
		hot: true,
	}
}