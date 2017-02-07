import fetch from '../../../utils/fetch';
import parser from '../../../utils/xml-parser';
import config from './config.json';

function generateURL(route) {
  switch (route) {
    case 'capital':
      return `${config.url}${config.capital}?${new Date().getTime()}`;
    case 'metro':
      return `${config.url}${config.metro}?${new Date().getTime()}`;
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

export default async function getData(route, res, next) {
  try {
    const url = generateURL(route);
    const data = await fetch.get(url)
      .then(result => parser(result, extractFunction));
    const response = { status: 'success' };
    response[route] = data;
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
}
