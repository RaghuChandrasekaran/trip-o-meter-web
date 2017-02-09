import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import cost from './routes/cost';

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

  app.use(morgan(logLevel));

  app.use('/cost', cost);

  /**
 * @apiDefine BadRequest
 *
 * @apiError BadRequest The request had invalid parameters.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "status": "error",
 *       "message": "reason"
 *     }
 */
   /**
 * @apiDefine ServerFailure
 *
 * @apiError ServerFailure Internal Server Issue
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Bad Request
 *     {
 *       "status": "error",
 *       "message": "Server Failure"
 *     }
 */

  /**
   * @api {get} /status Get Server Status
   * @apiName GetStatus
   * @apiGroup Status
   *
   *
   * @apiSuccess {String} status status of the server
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "status": "success"
   *     }
   *
   * @apiError ServerFailure Internal Server Issue
   *
   * @apiUse ServerFailure
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
