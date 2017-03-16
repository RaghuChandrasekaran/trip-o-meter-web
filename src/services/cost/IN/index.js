import Logger from 'Utilities/logger';
import fetch from 'Utilities/fetch';
import parser from 'Utilities/xml-parser';
import config from './config.json';

const LOGGER = new Logger(' : India-Price-Fetch-Service');
const priceMap = new Map();

export function getAllStates() {
  return config.stateList;
}

export function generateURL(type, state) {
  const statecode = config.states[state];
  const url = config.url;
  const time = new Date().getTime();
  switch (type) {
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

export function getData(url, key) {
  return fetch.get(url)
    .then(result => parser(result, extractFunction))
    .then(data => ({ key, data }));
}

export function createUrls() {
  const urlsMap = new Map();
  getAllStates().forEach((state) => {
    urlsMap.set(state, generateURL('cities', state));
  });
  urlsMap.set('capital', generateURL('capital', ''));
  urlsMap.set('metro', generateURL('metro', ''));
  return urlsMap;
}

export function getPrice(key) {
  const value = priceMap.get(key.toLowerCase());
  LOGGER.info(`Fetching data for ${key}`);
  return value || 'Data not found or fetched';
}

export function setPrice(key, value) {
  priceMap.set(key.toLowerCase(), value);
}
