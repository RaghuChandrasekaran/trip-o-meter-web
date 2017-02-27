import respond from 'Utilities/response-gen';

/**
 * Handles controller execution and responds to user
 * @param promise Controller Promise that resolves to the response.
 * @param params A function (req, res, next), all of which are optional
 * that maps our desired controller parameters.
 */
// eslint-disable-next-line
const controllerHandler = (promise, params) => async (req, res, next) => {
  const boundParams = params ? params(req, res, next) : [];
  try {
    const response = await promise(...boundParams);
    return respond.successResponse(res, response);
  } catch (error) {
    return next(error);
  }
};
export default controllerHandler;
