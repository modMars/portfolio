const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		//Set up output bundle name and path
		filename: 'main.bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	plugins: [
		//Add HTML template to dist
		new HtmlWebPackPlugin({
			template: './src/index.html',
			favicon: './src/assets/favicon.ico',
		}),
	],
	module: {
		rules: [
			{
				//Add css loading
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				//Add asset loading
				test: /\.(png|svg|jpg|jpeg|gif|webp|pdf|txt)$/i,
				type: 'asset/resource',
			},
			{
				//Add support for html path loading e.g: img src="path"
				test: /\.(html)$/,
				use: ['html-loader'],
			},
		],
	}, //Add HTML reload support for live server
	devServer: {
		watchFiles: ['src/*.html'],
		hot: true,
	},
}
