const webpack = require('webpack');
const reporter = require('postcss-reporter');
const { appPath, appModulesPath } = require('./paths');
const getClientEnvironment = require('./env');

module.exports = function devConfig(env) {
		return {
				devtool: 'eval-source-map',
				entry: [
						'webpack-hot-middleware/client?reload=true',
				],
				module: {
						rules: [
								// local files: css modules
								{
										test: /\.css$/,
										use: [
												'style-loader',
												{
														loader: 'css-loader',
														options: {
																sourceMap: true,
																modules: true,
																localIdentName: '[local]',
														},
												},
												'postcss-loader',
										],
										include: appModulesPath,
								},
								// external css files
								{
										test: /\.css$/,
										use: ['style-loader', 'css-loader'],
										exclude: appModulesPath,
								}
						],
				},
				plugins: [
						new webpack.LoaderOptionsPlugin({
								options: {
										context: __dirname,
										postcss: [
												reporter(),
										],
								},
						}),
						new webpack.HotModuleReplacementPlugin(),
						new webpack.DefinePlugin(getClientEnvironment(env)),
				],
		};
};
