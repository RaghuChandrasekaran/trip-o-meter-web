import Logger from 'Utilities/logger';
import createServer from './createServer';

const port = process.env.PORT || 3001;
const LOGGER = new Logger(' : App Starter');
const app = createServer();

app.listen(port, (err) => {
  if (err) {
    LOGGER.error(err);
  }

  if (__DEV__) {
    LOGGER.debug('App in development mode');
  }

  LOGGER.info(`App listening on port ${port}`);
});
