import winston from 'winston';
import fs from 'fs';

const defaultLvl = __DEV__ ? 'debug' : 'info';
const LOG_LEVEL = process.env.LOG_LEVEL || defaultLvl;
const MAX_SIZE = 5000000;
const MAX_FILES = 5;
const INFO_LOG = 'app-logs.log';
const logDir = 'logs';

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

winston.level = LOG_LEVEL;

const consoleTransportOpts = {
  level: LOG_LEVEL,
  colorize: true,
};
const fileTransportOpts = {
  level: LOG_LEVEL,
  name: 'File',
  filename: `${logDir}/${INFO_LOG}`,
  maxsize: MAX_SIZE,
  maxFiles: MAX_FILES,
  handleExceptions: true,
  humanReadableUnhandledException: true,
};

winston.configure({
  transports: [
    new (winston.transports.Console)(consoleTransportOpts),
    new (winston.transports.File)(fileTransportOpts),
  ],
});

function Logger(metadata) {
  this.metadata = metadata;
  this.info = (message) => {
    winston.log('info', message, this.metadata);
  };
  this.error = (message) => {
    winston.log('error', message, this.metadata);
  };
  this.debug = (message) => {
    winston.log('debug', message, this.metadata);
  };
  this.verbose = (message) => {
    winston.log('verbose', message, this.metadata);
  };
}

export default Logger;
