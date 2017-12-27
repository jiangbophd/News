const merge = require('webpack-merge');
const baseConfig = require('./webpack/webpack.base.config');
const devConfig = require('./webpack/webpack.dev.config');
const prdConfig = require('./webpack/webpack.prd.config');

module.exports = function webpackConfig({ env, target }) {
		if (target === 'device') {
				return merge.smart(baseConfig(env), prdConfig(env));
		}
		return merge.smart(baseConfig(env), devConfig(env));
};
