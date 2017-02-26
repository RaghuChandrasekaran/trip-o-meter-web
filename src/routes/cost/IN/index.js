import { Router } from 'express';
import ctrlHndler from 'Utilities/controller-handler';
import { getPriceInIndia as fetch } from '../../../controllers/cost';

const router = Router();
const resolver = {
  metro() {
    return ['metro'];
  },
  capital() {
    return ['capital'];
  },
  states() {
    return ['states'];
  },
  stateName(req) {
    return [req.params.stateName];
  },
};

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
  *       "metro" : [{"city":"Dehradun","petrol":"74.69","diesel":"61.81"},{"city":"Chennai","petrol":"70.5","diesel":"60.74"}....]
  *     }
  *
  * @apiError BadRequest The request had invalid parameters.
  * @apiError ServerFailure Internal Server Issue
  *
  * @apiUse BadRequest
  */
router.get('/metro', ctrlHndler(fetch, resolver.metro));

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
  *       "capital" : [{"city":"Dehradun","petrol":"74.69","diesel":"61.81"},{"city":"Chennai","petrol":"70.5","diesel":"60.74"}..]
  *     }
  *
  * @apiError BadRequest The request had invalid parameters.
  * @apiError ServerFailure Internal Server Issue
  *
  * @apiUse BadRequest
  */

router.get('/capital', ctrlHndler(fetch, resolver.capital));

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
  *       "state" : ["Andhra Pradesh","Assam","Bihar","Chandigarh"...]
  *     }
  *
  * @apiError BadRequest The request had invalid parameters.
  * @apiError ServerFailure Internal Server Issue
  *
  * @apiUse BadRequest
  */

router.get('/states', ctrlHndler(fetch, resolver.states));

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
  *       "cities" : [{"city":"Nawada","petrol":"74.05","diesel":"63.09"},{"city":"Madhubani",...]
  *     }
  *
  * @apiError BadRequest The request had invalid parameters.
  * @apiError ServerFailure Internal Server Issue
  *
  * @apiUse BadRequest
  */

router.get('/state/:stateName', ctrlHndler(fetch, resolver.stateName));

router.get('/', ctrlHndler(fetch, (req) => {
  const value = req.query.error ? [''] : [];
  return value;
}));

export default router;
