const { argv } = require('yargs');
const packageJSON = require('../package.json');
const { runCommand, copy } = require('./utils');
const updateConfigXml = require('./modify-config');
const logger = require('./logger');

const { platform, update, env, target } = argv;
const paths = require('../webpack/paths');

let p = Promise.resolve();
if (!update) {
		logger.info(`Cleaning the releases directory`);
		p = runCommand(`rimraf releases`);
}
p
	.then(() => {
			logger.info(`Building the client for ${env}`);
			return runCommand(`BABEL_ENV=${env} webpack --env.env=${env} --env.target=${target}`);
	})
	.then(() => {
			logger.info('Setting config.xml environment variables');
			return updateConfigXml({
					source: paths.configXMLPath,
					destination: `${paths.getBuildPath()}/config.xml`,
					version: packageJSON.version.trim(),
					env,
			});
	})
	.then(() => {
			logger.info('Copying app icons');
			return copy(paths.assetsPath, `${paths.getBuildPath()}/assets/`);
	})
	.then(() => {
			if (update) {
					logger.info('Prepare cordova');
					return runCommand(`cd ${paths.getWwwPath()} && cordova prepare`);
			}
			logger.info(`Adding platform ${platform}`);
			return runCommand(`cd ${paths.getWwwPath()} && cordova platform add ${platform}`);
	})
	.then(() => {
			if (!update) {
					logger.info('Building cordova for device');
					return runCommand(`cd ${paths.getWwwPath()} && cordova build ${platform}`, false);
			}
			return null;
	})
	.then(() => {
			logger.info(`Build ${platform} Success!!`);
	});
