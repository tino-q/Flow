require('dotenv').config();
const createFastify = require('fastify');
const routes = require('./src/routes');
const swagger = require('fastify-swagger');
const statusPlugin = require('fastify-status');

const swaggerOptions = {
  routePrefix: '/v1/documentation',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Martin Queija\'s Flow location & weather API',
      description: `Demonstration application for Flow which \
      provides IP inferred location information and current \
      weather or forecast (location based or queried by city name)`,
      version: '0.1.0',
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'Find more info here',
    },
    host: 'localhost',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
};

const errorHandler = (error, _request, reply) =>
  reply
      .status(error.statusCode || 500)
      .send({message: error.message});

const buildFastify = () => {
  const fastify = createFastify({logger: true});
  fastify.register(swagger, swaggerOptions);
  fastify.register(routes, {prefix: '/v1'});
  fastify.register(statusPlugin, {endpoint: '/v1', hide: false});
  fastify.setErrorHandler(errorHandler);
  fastify.ready(() => fastify.swagger());
  return fastify;
};

module.exports = buildFastify;
