import axios from 'axios';

function get(url) {
  return axios.get(url).then(res => res.data);
}

export default { get };
