const path = require('path');

const basePath = path.join(__dirname, '..');
const appPath = path.join(basePath, 'app');
const appModulesPath = path.join(basePath, 'app', 'modules');
const configPath = path.join(basePath, 'config');
const configXMLPath = path.join(configPath, 'config.xml');
const assetsPath = path.join(basePath, 'assets');
const getBuildPath = () => path.join(basePath, 'releases');
const getWwwPath = () => path.join(basePath, 'releases', 'www');

module.exports = { appPath, appModulesPath, configPath, configXMLPath, assetsPath, getBuildPath, getWwwPath };
