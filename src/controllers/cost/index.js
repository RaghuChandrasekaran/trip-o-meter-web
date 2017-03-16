import * as costService from '../../services/cost';

function getPriceInIndia(query) {
  if (query === '') {
    throw new Error('Key can\'t be blank');
  }
  return Promise.resolve()
    .then(() => {
      const response = {};
      response[query] = costService.getPriceInIndia(query);
      return response;
    });
}

function getCountries() {
  return Promise.resolve()
    .then(() => costService.getCountries());
}

export { getPriceInIndia, getCountries };
