const path = require('path');

module.exports = {
	mode: 'development',
	entry: './client/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					}
				}
			},
			{
				test: /.(css|scss)$/,
				exclude: /node_modules/,
				use: ['style-loader', 'css-loader'],
			}
		],
	},
	devServer: {
		publicPath: '/',
		contentBase: path.resolve(__dirname, 'client'),
		hot: true,
		proxy: {
			'/newText': 'http://localhost:3000',
		}
	},
	resolve: {
    extensions: ['.js', '.jsx'],
  },
}