const HtmlWebpackPlugin = require('html-webpack-plugin');
const { appPath, getWwwPath } = require('./paths');

module.exports = function baseConfig(env) {
		return {
				entry: [
						appPath,
				],
				output: {
						path: getWwwPath(env),
						filename: 'bundle.js',
				},
				resolve: {
						extensions: ['.js', '.jsx'],
				},
				module: {
						rules: [
								{
										test: /\.jsx?$/,
										include: appPath,
										loader: 'babel-loader',
										options: {
												cacheDirectory: true,
										},
								},
								{
										exclude: [
												/\.html$/,
												/\.(js|jsx)$/,
												/\.css$/,
												/\.json$/,
												/\.svg$/,
										],
										loader: 'url-loader',
										options: {
												name: 'static/[name].[ext]',
										},
								},
								{
										test: /\.svg$/,
										loader: 'file-loader',
										options: {
												name: 'static/[name].[ext]',
										},
								},
						],
				},
				plugins: [
						new HtmlWebpackPlugin({
								template: './index.html',
								inject: 'body',
								title: 'News App',
						}),
				],
		};
};
