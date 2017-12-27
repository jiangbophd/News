const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const morgan = require('morgan');
const yargs = require('yargs');
const proxy = require('proxy-middleware');
const url = require('url');
const config = require('./webpack.config.babel');
const { getWwwPath } = require('./webpack/paths');

const { env, target } = yargs.argv;
const logger = console;
const port = 3010;
const host = 'localhost';
const app = express();
const buildPath = getWwwPath();
const indexHtmlPath = path.join(buildPath, 'index.html');
const backendUrl = env === 'dev' ? require('./config/dev').API_ENDPOINT : require('./config/production').API_ENDPOINT;

const webpackConfig = config({ env, target });
const compiler = webpack(webpackConfig);
const middleware = webpackMiddleware(compiler, {
		publicPath: webpackConfig.output.publicPath,
		contentBase: 'app',
		stats: {
				colors: true,
				timings: true,
				chunks: false,
		},
});

app.use(morgan('dev'));
app.use(middleware);
app.use(webpackHotMiddleware(compiler));
app.get(/^((?!\/api).)*$/, (req, res) => {
		res.write(middleware.fileSystem.readFileSync(indexHtmlPath));
		res.end();
});
app.use('/api', proxy(url.parse(`${backendUrl}`)));
app.listen(port, host, (err) => {
		if (err) {
				logger.log(err);
		}
		logger.info('==> Open up http://%s:%s in your browser.', host, port);
});
