const fs = require('fs-extra');
const { exec } = require('child-process-promise');
const logger = require('./logger');

const copy = (source, target) => {
		return new Promise((resolve, reject) => {
				fs.copy(source, target, (err) => {
						if (err) {
								reject(`failed moving ${source} file`);
						}
						resolve();
				});
		});
};

const runCommand = (cmd, logResult = true) => {
		return exec(cmd, { maxBuffer: 10000 * 1024 })
			.then((res) => {
					if (logResult) {
							console.info(res.stdout); // eslint-disable-line no-console
					}
					return res.stdout;
			})
			.catch((err) => {
					logger.error(err); // eslint-disable-line no-console
					return Promise.reject(err);
			});
};

module.exports = { copy, runCommand };
