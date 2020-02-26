const ipApi = require('../services/ipApi');

const location = async (request, reply) => {
  // do interesting stuff with ipApi's response
  // for now just return it as is.
  return ipApi.getCurrentLocationInfo(request.ip);
};

module.exports = {location};
