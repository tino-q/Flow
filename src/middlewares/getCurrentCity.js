const {getCurrentLocationInfo} = require('../services/ipApi');
const {assign} = require('lodash');

const getCurrentCity = (request, reply, next) =>
  getCurrentLocationInfo(request.ip)
      .then(({city}) => assign(request.params, {city}));

module.exports = {getCurrentCity};
