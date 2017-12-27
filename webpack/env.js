const { configPath } = require('./paths');

function getClientEnvironment(env) {
		const envConfig = require(`${configPath}/${env}`);
		const config = Object.assign({}, envConfig);
		
		return Object.keys(config).reduce((acc, key) => {
				return Object.assign(acc, { [key]: JSON.stringify(config[key]) });
		}, {});
}

module.exports = getClientEnvironment;
