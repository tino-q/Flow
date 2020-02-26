const got = require('got');
const {get} = require('lodash');
const {
  IP_API_JSON_BASE_URL,
} = require('../../config/environment');

const getCurrentLocationInfo = (ip) =>
  got(`${IP_API_JSON_BASE_URL}/${ip}`).json().then((response) => {
    if (get(response, 'status') == 'success') {
      return response;
    }
    return Promise.reject({
      statusCode: 503,
      message: 'IP-API failure',
    });
  });


module.exports = {getCurrentLocationInfo};
