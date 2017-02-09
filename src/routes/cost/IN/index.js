import { Router } from 'express';
import priceFinder from './price-finder';

const router = Router();
const successResponse = { status: 'success' };

 /**
   * @api {get} /cost/IN/metro Cost in Metro Cities
   * @apiName GetMetro
   * @apiGroup India
   *
   *
   * @apiSuccess {String} status status of the response.
   * @apiSuccess {Array}  metro  List of metro cities and the prices of fuel
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "status": "success",
   *       "metro" : [{"city":"Dehradun","petrol":"74.69","diesel":"61.81"},{"city":"Chennai","petrol":"70.5","diesel":"60.74"}....]
   *     }
   *
   * @apiError BadRequest The request had invalid parameters.
   * @apiError ServerFailure Internal Server Issue
   *
   * @apiUse BadRequest
   */
router.get('/metro', (req, res, next) => {
  priceFinder.getData('metro', res, next, successResponse);
});


 /**
   * @api {get} /cost/IN/metro Cost in Capitals
   * @apiName GetCapital
   * @apiGroup India
   *
   *
   * @apiSuccess {String} status status of the response.
   * @apiSuccess {Array}  capital  List of capital cities and the prices of fuel
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "status": "success",
   *       "capital" : [{"city":"Dehradun","petrol":"74.69","diesel":"61.81"},{"city":"Chennai","petrol":"70.5","diesel":"60.74"}..]
   *     }
   *
   * @apiError BadRequest The request had invalid parameters.
   * @apiError ServerFailure Internal Server Issue
   *
   * @apiUse BadRequest
   */

router.get('/capital', (req, res, next) => {
  priceFinder.getData('capital', res, next, successResponse);
});

 /**
   * @api {get} /cost/IN/states Get all States
   * @apiName GetState
   * @apiGroup India
   *
   *
   * @apiSuccess {String} status status of the response.
   * @apiSuccess {Array}  state  List of available states
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "status": "success",
   *       "state" : ["Andhra Pradesh","Assam","Bihar","Chandigarh"...]
   *     }
   *
   * @apiError BadRequest The request had invalid parameters.
   * @apiError ServerFailure Internal Server Issue
   *
   * @apiUse BadRequest
   */

router.get('/states', (req, res) => {
  const state = priceFinder.getAllStates();
  res.status(200).send({ ...successResponse, state });
});

 /**
   * @api {get} /cost/IN/state/:stateName Cost in Cities
   * @apiName GetCitiesInState
   * @apiGroup India
   * @apiParam {stateName} stateName Name of state (Must match name received in /states)
   *
   * @apiSuccess {String} status status of the response.
   * @apiSuccess {Array}  cities  List of cities in the state and the prices of fuel
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "status": "success",
   *       "cities" : [{"city":"Nawada","petrol":"74.05","diesel":"63.09"},{"city":"Madhubani",...]
   *     }
   *
   * @apiError BadRequest The request had invalid parameters.
   * @apiError ServerFailure Internal Server Issue
   *
   * @apiUse BadRequest
   */

router.get('/state/:stateName', (req, res, next) => {
  const state = req.params.stateName;
  priceFinder.getData('cities', res, next, successResponse, state);
});

router.get('/', (req, res, next) => {
  if (req.query.error) {
    priceFinder.getData('', res, next);
  } else {
    res.status(200).send(successResponse);
  }
});

export default router;
