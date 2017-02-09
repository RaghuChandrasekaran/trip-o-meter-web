import fetch from '../../../utils/fetch';
import parser from '../../../utils/xml-parser';
import config from './config.json';

function generateURL(route, state) {
  const statecode = config.states[state];
  const url = config.url;
  const time = new Date().getTime();
  switch (route) {
    case 'capital':
      return `${url}${config.capital}?${time}`;
    case 'metro':
      return `${url}${config.metro}?${time}`;
    case 'cities':
      return `${url}${config.state}&statecode=${statecode}?${time}`;
    default:
      return '';
  }
}

function extractFunction(result) {
  return result.markers.marker.map(value => ({
    city: value.$.townname,
    petrol: value.$.ms,
    diesel: value.$.hsd,
  }));
}

async function getData(route, res, next, successResponse, state) {
  try {
    const url = generateURL(route, state);
    const data = await fetch.get(url)
      .then(result => parser(result, extractFunction));
    const response = {};
    response[route] = data;
    res.status(200).send({ ...successResponse, ...response });
  } catch (error) {
    next(error);
  }
}

function getAllStates() {
  return config.stateList;
}

export default { getData, getAllStates };
