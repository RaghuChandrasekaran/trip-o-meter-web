import { getPrice as India } from './IN';

function getPriceInIndia(query) {
  return India(query);
}

function getCountries() {
  return { countries: ['India'] };
}

export { getPriceInIndia, getCountries };
