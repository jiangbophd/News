const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const getClientEnvironment = require('./env');
const { appPath, appModulesPath } = require('./paths');

module.exports = function prdConfig(env) {
		return {
				devtool: 'source-map',
				module: {
						rules: [
								{
										test: /\.(js|jsx)$/,
										enforce: 'pre',
										include: appPath,
								},
								{
										test: /\.css$/,
										use: ExtractTextPlugin.extract({
												fallback: 'style-loader',
												use: [
														{
																loader: 'css-loader',
																options: {
																		modules: true,
																		localIdentName: '[name]---[local]---[hash:base64:5]',
																},
														},
														'postcss-loader',
												],
										}),
										include: appModulesPath,
								},
								{
										test: /\.css$/,
										use: ['style-loader', 'css-loader'],
										exclude: appModulesPath,
								},
								{
										test: /\.pdf$/,
										loader: 'file-loader',
										options: {
												name: 'static/[name].[ext]',
										},
								},
						],
				},
				plugins: [
						new webpack.LoaderOptionsPlugin({
								options: {
										context: __dirname,
										postcss: [
												autoprefixer({
														browsers: [
																'>1%',
																'last 4 versions',
																'Firefox ESR',
																'not ie < 9', // React doesn't support IE8 anyway
														],
												}),
										],
								},
						}),
						new webpack.LoaderOptionsPlugin({
								minimize: true,
						}),
						new webpack.DefinePlugin(getClientEnvironment(env)),
						env !== 'dev' ?
							new webpack.optimize.UglifyJsPlugin({
									sourceMap: true,
									compress: {
											screw_ie8: true, // React doesn't support IE8
											warnings: false,
									},
									mangle: {
											screw_ie8: true,
									},
									output: {
											comments: false,
											screw_ie8: true,
									},
							}) : () => {},
						new ExtractTextPlugin({
								filename: 'styles.css',
								disable: false,
								allChunks: true,
						}),
				],
		};
};
