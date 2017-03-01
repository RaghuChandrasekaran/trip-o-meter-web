import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import loggerMiddleware from 'Utilities/request-logger';
import Logger from 'Utilities/logger';
import respond from 'Utilities/response-gen';
import { job as priceScrapper } from './tasks/priceScrapper';
import cost from './routes/cost';

export default () => {
  const app = express();
  const DOCS_STATIC_FOLDER = 'docs';
  const NODE_ENV = process.env.NODE_ENV;
  const showCoverage = ['development', 'test'].includes(NODE_ENV);
  const COVERAGE_FOLDER = showCoverage ? 'coverage/lcov-report' : '';
  const LOGGER = new Logger(' : Create-Server');

  LOGGER.info('App is starting...');

  app.use(cors());
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({
    extended: true,
  }));

  app.use('/docs', express.static(DOCS_STATIC_FOLDER));

  app.use('/coverage', express.static(COVERAGE_FOLDER));

  app.use(loggerMiddleware.assignId);
  app.use(loggerMiddleware.requestLogger);

  app.use('/cost', cost);

  /**
 * @apiDefine BadRequest
 *
 * @apiError BadRequest The request had invalid parameters.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error":{
 *          "message":"Reason"
 *         }
 *     }
 */
  /**
  * @apiDefine ServerFailure
  *
  * @apiError ServerFailure Internal Server Issue
  *
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 500 Internal Server Failure
  *    {
  *      "error":{
 *          "message":"Reason"
 *         }
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
   *    {
   *      status:"Success"
   *    }
   *
   * @apiError ServerFailure Internal Server Issue
   *
   * @apiUse ServerFailure
   */
  app.get('/status', (req, res, next) => {
    try {
      if (req.query.error) {
        const error = new Error('Testing error');
        throw error;
      } else {
        const response = { status: 'Success' };
        return respond.successResponse(res, response);
      }
    } catch (error) {
      return next(error);
    }
  });

  // disabled eslint as express error handler required calling
  // four parameters even though 'next' is not used
  // eslint-disable-next-line
  app.use((err, req, res, next) => {
    LOGGER.error(err);
    const message = err.message || 'Server Failure';
    const stack = __DEV__ ? err.stack : 'Check Logs';
    const response = { error: { message, stack } };
    return respond.errorResponse(res, response, 500);
  });

  app.use((req, res) => {
    respond.errorResponse(res, "Sorry can't find that!", 404);
  });

  priceScrapper.start();

  return app;
};
