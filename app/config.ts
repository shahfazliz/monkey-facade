/**
 * @author Jor-El
 * @module app/config.ts
 * @description This file contains constants and variables used across the application.
 * @param {string[]} ALLOWED_APP_FILES_EXTENSIONS List of allowed file extensions for the application to modify.
 * @param {string} APP_DESCRIPTION Description of the application.
 * @param {string} APP_NAME Name of the application.
 * @param {string} APP_ROOT_PATH Root path of the application.
 * @param {string} APP_VERSION Version of the application.
 * @returns {{ALLOWED_APP_FILES_EXTENSIONS: string[], APP_DESCRIPTION: string, APP_NAME: string, APP_ROOT_PATH: string, APP_VERSION: string}} Object containing the configuration variables.
 * @example
 * const { ALLOWED_APP_FILES_EXTENSIONS, APP_DESCRIPTION, APP_NAME, APP_ROOT_PATH, APP_VERSION } = require('./config');
 */

const ALLOWED_APP_FILES_EXTENSIONS = ['js', 'jsx', 'ts', 'tsx', 'json'];
const APP_DESCRIPTION = 'Monkey Facade';
const APP_NAME = 'Monkey Facade';
const APP_VERSION = '1.0.0';
const HEADER_HEIGHT = 60;
const NAVBAR_WIDTH = 200;

export {
  ALLOWED_APP_FILES_EXTENSIONS,
  APP_DESCRIPTION,
  APP_NAME,
  APP_VERSION,
  HEADER_HEIGHT,
  NAVBAR_WIDTH,
};
