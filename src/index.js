/* eslint-disable global-require, import/first */
/* global window, document */

import './polyfills';
// CAUTION!
// Use `import` only for modules that don't use logging, or the log appenders will be created before
// they are configured below.
import { getLogger, setConfig as setLogConfig } from '@mobilex/log';
import { databaseLocalConfiguration } from '@mobilex/database-local';
import { mobilex } from '../package.json';

const onCordova = Boolean(window.cordova);
if (!onCordova) {
  // File logging only works on Cordova
  setLogConfig({ appenders: { file: false } });
}

const logger = getLogger('@mobilex/database');

async function copyDatabaseToDevice() {
  const dbName = 'mip.db';
  const deviceLocation = 0; // Device-local, see https://github.com/an-rahulpandey/cordova-plugin-dbcopy#copy
  const dbPlugin = window.plugins.sqlDB;

  // Delete old database from device
  try {
    await new Promise((resolve, reject) =>
      dbPlugin.remove(dbName, deviceLocation, resolve, reject)
    );
    logger.debug('Deleted old database from device.');
  } catch (e) {
    // Error to delete usually simply means that there is not database on the device.
  }

  // Copy database to device
  try {
    await new Promise((resolve, reject) =>
      dbPlugin.copy(dbName, deviceLocation, resolve, reject)
    );
  } catch (error) {
    logger.error('Error copying database to device.', error);
  }
}

async function load() {
  if (onCordova) {
    await new Promise(resolve =>
      document.addEventListener('deviceready', resolve, false)
    );
    await copyDatabaseToDevice();
  }
  try {
    // Intentional deep require
    const {
      init,
      Locale,
    } = require('@mobilex/localization/src/initialization');
    const resourceLocales = mobilex.localization.resourceLocales.map(
      Locale.fromString
    );
    const fallbackLocales = mobilex.localization.fallbackLocales.map(
      Locale.fromString
    );
    await init({ bundlePrefix: 'locale', resourceLocales, fallbackLocales });
  } catch (error) {
    logger.error('Error loading language.', error);
  }
  databaseLocalConfiguration.databaseUrl = mobilex.databaseMockUrl;
  logger.info(
    'Database mock is from ' + databaseLocalConfiguration.databaseUrl
  );
  require('./mock-local-storage');
  require('./render');
}

load();
