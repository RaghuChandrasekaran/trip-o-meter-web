import axios from 'axios';
import Logger from 'Utilities/logger';

const LOGGER = new Logger(' : Fetch-Library');

/**
 * Wrapper for HTTP get using axios
 * @param {String} url
 */
function get(url) {
  LOGGER.debug(`Getting data from ${url}`);
  return axios.get(url)
    .then(res => res.data);
}

export default { get };
