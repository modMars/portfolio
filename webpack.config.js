const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			// favicon: './src/assets/favicon.ico',
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				// Los module loaders son utilizados para poder incluir en nuestro bundle cosas como archivos de css, imagenes, fonts, scss, babel, etc. La siguiente linea va a tomar los archivos que terminen en .css mediante una expresión regular y va a someterla a los loaders de primero a último, por ejemplo primero va a pasar por style-loader y lo que retorne ese loader se va a usar para el siguiente, y asi sucesivamente. Al final webpack espera que se retorne código de Javascript por el último loader de la cadena.
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
				type: 'asset/resource',
			},
		],
	},
}

//El haber hecho este procedimiento nos permite utilizar un import './style.css' en el archivo que depende de esa hoja de estilos, cuando nuestra página corra en la web lo que va a hacer el bundle es agregar la hoja de estilos completa dentro de una etiqueta <style> en el <head> de nuestro archivo html.
