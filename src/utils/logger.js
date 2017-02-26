import winston from 'winston';

const defaultLvl = __DEV__ ? 'debug' : 'info';
const LOG_LEVEL = process.env.LOG_LEVEL || defaultLvl;

winston.level = LOG_LEVEL;

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
}

export default Logger;
