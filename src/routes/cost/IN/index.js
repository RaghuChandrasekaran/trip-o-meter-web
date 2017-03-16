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
  cityName(req) {
    return [req.params.cityName];
  },
};

/**
  * @api {get} /cost/IN/metro Cost in Metro Cities
  * @apiVersion 1.0.0
  * @apiName GetMetro
  * @apiGroup India
  *
  *
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
  * @apiVersion 1.0.0
  * @apiName GetCapital
  * @apiGroup India
  *
  *
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
  * @apiVersion 1.0.0
  * @apiName GetState
  * @apiGroup India
  *
  *
  * @apiSuccess {Array}  state  List of available states
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     {
  *       "states" : ["Andhra Pradesh","Assam","Bihar","Chandigarh"...]
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
  * @apiVersion 1.0.0
  * @apiName GetCitiesInState
  * @apiGroup India
  * @apiParam {String} stateName Name of state (Must match name received in /states)
  *
  * @apiSuccess {Array}  stateName  List of cities in the state and the prices of fuel
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     {
  *       "Bihar" : [{"city":"Nawada","petrol":"74.05","diesel":"63.09"},{"city":"Madhubani",...]
  *     }
  *
  * @apiError BadRequest The request had invalid parameters.
  * @apiError ServerFailure Internal Server Issue
  *
  * @apiUse BadRequest
  */

router.get('/state/:stateName', ctrlHndler(fetch, resolver.stateName));

/**
  * @api {get} /cost/IN/city/:cityName Cost in City
  * @apiVersion 1.0.0
  * @apiName GetPriceInCity
  * @apiGroup India
  * @apiParam {String} cityName Name of City
  *
  * @apiSuccess {Object}  cityName Object of Price details
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     {
  *       "Nawada" : {"city":"Nawada","petrol":"74.05","diesel":"63.09"}
  *     }
  *
  * @apiError BadRequest The request had invalid parameters.
  * @apiError ServerFailure Internal Server Issue
  *
  * @apiUse BadRequest
  */

router.get('/city/:cityName', ctrlHndler(fetch, resolver.cityName));

router.get('/', ctrlHndler(fetch, (req) => {
  const value = req.query.error ? [''] : [];
  return value;
}));

export default router;
