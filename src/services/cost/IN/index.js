import Logger from 'Utilities/logger';
import fetch from 'Utilities/fetch';
import parser from 'Utilities/xml-parser';
import config from './config.json';

const LOGGER = new Logger(' : India-Price-Fetch-Service');
const priceMap = new Map();

function getAllStates() {
  return config.stateList;
}

function generateURL(type, state) {
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

function getData(url, key) {
  return fetch.get(url)
    .then(result => parser(result, extractFunction))
    .then(data => ({ key, data }));
}

function createUrls() {
  const urlsMap = new Map();
  getAllStates().forEach((state) => {
    urlsMap.set(state, generateURL('cities', state));
  });
  urlsMap.set('capital', generateURL('capital', ''));
  urlsMap.set('metro', generateURL('metro', ''));
  return urlsMap;
}

async function populatePriceMap() {
  try {
    const dataPromises = [];
    LOGGER.info('Populating response price map for India');
    createUrls().forEach((value, key) => {
      LOGGER.debug(`Type: ${key} - URL: ${value}`);
      const fetchPromise = getData(value, key);
      dataPromises.push(fetchPromise);
    });
    const responses = await Promise.all(dataPromises);
    responses.forEach((value) => {
      LOGGER.debug(`Inserting data into map : ${value.key}`);
      priceMap.set(value.key, value.data);
    });
    priceMap.set('states', getAllStates());
  } catch (error) {
    LOGGER.error(error);
  }
  return priceMap;
}

function getPrice(key) {
  const value = priceMap.get(key);
  LOGGER.info(`Fetching data for ${key}`);
  return value || 'Data not found';
}

populatePriceMap();

export { getPrice, populatePriceMap };
