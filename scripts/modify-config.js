/**
 * Created by Richard on 11/26/17.
 */
const fs = require('fs-extra');
const xml2js = require('xml2js');
const logger = require('./logger');
const config = require('../config/config-variables');

module.exports = ({ env, source, destination, version }) => {
		return new Promise((resolve, reject) => {
				fs.readFile(source, 'utf8', (errReadConfig, configData) => {
						if (errReadConfig) {
								logger.error(errReadConfig);
								reject();
						}
						
						// Parse XML to JS Obj
						xml2js.parseString(configData, (errParseConfig, xmlObject) => {
								if (errParseConfig) {
										logger.error(errParseConfig);
										reject();
								}
								
								const { name, id } = config[env];
								// Set version number and name
								const { widget } = xmlObject;
								widget.$.version = version;
								widget.$.id = id;
								widget.$['ios-CFBundleVersion'] = version;
								widget.name[0] = name;
								widget.description[0] = name;
								
								// Build XML from JS Obj
								const builder = new xml2js.Builder();
								const xml = builder.buildObject(xmlObject);
								
								// Write config.xml
								fs.writeFile(destination, xml, (errWriteConfig) => {
										if (errWriteConfig) {
												logger.error(errWriteConfig);
												reject();
										}
										logger.info(`Set version number: ${version} and name: ${config[env].name}`);
										resolve();
								});
						});
				});
		});
};
