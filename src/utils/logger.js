import winston from 'winston';

const TEST_ENV = process.env.NODE_ENV === 'test';
const defaultLvl = (__DEV__ && !TEST_ENV) ? 'debug' : 'info';
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
