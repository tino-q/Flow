const {location} = require('./controllers/location');
const {getCurrentCity} = require('./middlewares/getCurrentCity');
const {
  weatherForecast,
  currentWeather,
} = require('./controllers/weather');
const {
  location: locationSchema,
  currentWeather: currentWeatherSchema,
//  weatherForecast: weatherForecastSchema,
} = require('./routeSchemas');

module.exports = function(fastify, opts, done) {
  fastify.route({
    method: 'GET',
    url: '/location',
    handler: location,
    schema: locationSchema,
  });

  fastify.route({
    method: 'GET',
    url: '/current/:city',
    handler: currentWeather,
    schema: currentWeatherSchema,
  });

  fastify.route({
    method: 'GET',
    url: '/current',
    preHandler: getCurrentCity,
    handler: currentWeather,
    // schema: currentWeatherSchema,
  });

  fastify.route({
    method: 'GET',
    url: '/forecast/:city',
    handler: weatherForecast,
    // schema: weatherForecastSchema,
  });

  fastify.route({
    method: 'GET',
    url: '/forecast',
    preHandler: getCurrentCity,
    handler: weatherForecast,
    // schema: weatherForecastSchema,
  });

  done();
};
