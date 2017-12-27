/**
 * Created by Richard on 11/26/17.
 */
const chalk = require('chalk');

const info = msg => console.log(chalk.green.bold(msg)); // eslint-disable-line no-console
const error = msg => console.error(chalk.red(msg)); // eslint-disable-line no-console

module.exports = { info, error };
