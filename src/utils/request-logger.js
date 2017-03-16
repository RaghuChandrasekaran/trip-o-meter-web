import morgan from 'morgan';
import uuid from 'uuid/v4';
import Logger from 'Utilities/logger';

const LOGGER = new Logger(' : Request Logger');

morgan.token('responseId', req => req.responseId);

const requestLogger = morgan((tokens, req, res) => [
  tokens.method(req, res),
  tokens.url(req, res),
  tokens.status(req, res),
  tokens.res(req, res, 'content-length'), '-',
  tokens['response-time'](req, res), 'ms',
  tokens.responseId(req, res),
].join(' '));

const assignId = (req, res, next) => {
  const responseId = uuid();
  LOGGER.verbose(`Generated UUID : ${responseId}`);
  // eslint-disable-next-line
  req.responseId = responseId;
  res.setHeader('responseId', responseId);
  next();
};

export default { requestLogger, assignId };
