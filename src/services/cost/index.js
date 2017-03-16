import Logger from 'Utilities/logger';
import { getPrice as India } from './IN';

const LOGGER = new Logger(' : Cost Service');

function getPriceInIndia(query) {
  LOGGER.verbose(`Queried for ${query}`);
  return India(query);
}

function getCountries() {
  return { countries: ['India'] };
}

export { getPriceInIndia, getCountries };
