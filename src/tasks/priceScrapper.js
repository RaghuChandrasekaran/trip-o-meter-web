import scheduler from 'Utilities/scheduler';
import Logger from 'Utilities/logger';
import * as indiaService from '../services/cost/IN';

let RESPONSE_LOADED = false;

const LOGGER = new Logger(' : Price Scarpper Task');

function setResponseLoaded(value = false) {
  RESPONSE_LOADED = value;
}

function populateCities() {
  indiaService.getAllStates().forEach((state) => {
    const cities = indiaService.getPrice(state);
    cities.forEach((city) => {
      indiaService.setPrice(city.city, city);
    });
  });
}

async function populatePriceMap(checkError = false) {
  try {
    if (checkError) {
      throw new Error('Testing error');
    }
    const dataPromises = [];
    LOGGER.info('Populating response price map for India');
    indiaService.createUrls().forEach((value, key) => {
      LOGGER.debug(`Type: ${key} - URL: ${value}`);
      const fetchPromise = indiaService.getData(value, key);
      dataPromises.push(fetchPromise);
    });
    const responses = await Promise.all(dataPromises);
    responses.forEach((value) => {
      LOGGER.debug(`Inserting data into map : ${value.key}`);
      indiaService.setPrice(value.key, value.data);
    });
    indiaService.setPrice('states', indiaService.getAllStates());
    populateCities();
    setResponseLoaded(true);
    return true;
  } catch (error) {
    LOGGER.error(error);
    setResponseLoaded(false);
    return false;
  }
}

function checkIfResponseLoaded() {
  return RESPONSE_LOADED;
}

const job = scheduler(populatePriceMap);

export { job, checkIfResponseLoaded, populatePriceMap };
