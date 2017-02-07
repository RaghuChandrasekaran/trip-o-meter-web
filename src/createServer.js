import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import price from './routes/price';

export default () => {
  const app = express();
  const DOCS_STATIC_FOLDER = 'docs';
  const COVERAGE_FOLDER = 'coverage/lcov-report';
  const logLevel = __DEV__ ? 'dev' : 'short';
  const NODE_ENV = process.env.NODE_ENV;
  const showCoverage = ['development', 'test'].includes(NODE_ENV);

  app.use(cors());
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({
    extended: true,
  }));

  app.use('/', express.static(DOCS_STATIC_FOLDER));

  if (showCoverage) {
    app.use('/coverage', express.static(COVERAGE_FOLDER));
  }

  app.use('/price', price);

  app.use(morgan(logLevel));

  /**
   * @api {get} /status Get Status
   * @apiName Status
   * @apiGroup Status
   *
   *
   * @apiSuccess {String} status status of the response.
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "status": "success"
   *     }
   *
   * @apiError Error Server Failure.
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 500 Server Failure
   *     {
   *       "status": "error",
   *       "message":"Server Failure"
   *     }
   */
  app.get('/status', (req, res, next) => {
    try {
      if (req.query.error) {
        throw new Error('Testing error');
      } else {
        return res.status(200).send({ status: 'success' });
      }
    } catch (error) {
      return next(error);
    }
  });

  // disabled eslint as express error handler required calling
  // four parameters even though 'next' is not used
  // eslint-disable-next-line
  app.use((err, req, res, next) => {
    console.log(err);
    const message = err.info || 'Server Failure';
    const stack = __DEV__ ? err.stack : 'Check Logs';
    const response = {
      status: 'error',
      message,
      stack,
    };
    res.status(500).send(response);
  });

  app.use((req, res) => {
    res.status(404).send("Sorry can't find that!");
  });

  return app;
};
