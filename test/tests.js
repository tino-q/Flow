const tap = require('tap');
const buildFastify = require('../app');
const nock = require('nock');
const got = require('got');
const {get, isString} = require('lodash');
const {
  buenosAiresLocationResponse,
  errorResponse: ipApiErrorResponse,
} = require('./fixtures/ipApi');
const {
  buenosAiresCurrentWeatherResponse,
  buenosAiresForecastResponse,
  errorResponse: openWeatherErrorResponse,
} = require('./fixtures/openWeather');
const {
  IP_API_JSON_BASE_URL,
  OPEN_WEATHER_API_BASE_URL,
  OPEN_WEATHER_API_KEY,
} = require('../config/environment');

tap.test('GET `/` route', (t) => {
  const fastify = buildFastify();
  t.tearDown(() => fastify.close());
  fastify.listen(0, (err) => {
    t.error(err);
    got(`http://localhost:${fastify.server.address().port}/v1`)
        .json().then((response) => {
          t.strictEqual(get(response, 'name'), 'flow');
          t.strictEqual(get(response, 'version'), '1.0.0');
          t.true(isString(get(response, 'uptime')));
          t.done();
        });
  });
});


tap.test(`GET \`/location\` a bad request to service 
  should be returned as an internal server error`, (t) => {
  const fastify = buildFastify();
  nock(IP_API_JSON_BASE_URL)
      .get('/')
      .reply(400);

  t.tearDown(() => fastify.close());
  fastify.inject({
    method: 'GET',
    url: '/v1/location',
  }, (err, response) => {
    t.equal(response.statusCode, 500);
    t.end();
  });
});

tap.test(`GET \`/location\` ip api fail response`, (t) => {
  const fastify = buildFastify();
  nock(IP_API_JSON_BASE_URL)
      .get('/')
      .reply(200, ipApiErrorResponse);

  t.tearDown(() => fastify.close());
  fastify.inject({
    method: 'GET',
    url: '/v1/location',
  }, (err, response) => {
    t.equal(response.statusCode, 503);
    t.deepEqual(response.json(), {
      message: 'IP-API failure',
    });
    t.end();
  });
});

tap.test('GET `/location` route', (t) => {
  const fastify = buildFastify();
  nock(IP_API_JSON_BASE_URL)
      .get('/')
      .reply(200, buenosAiresLocationResponse);

  t.tearDown(() => fastify.close());
  fastify.inject({
    method: 'GET',
    url: '/v1/location',
  }, (err, response) => {
    t.deepEqual(response.json(), buenosAiresLocationResponse);
    t.end();
  });
});

tap.test('GET `/current` route', (t) => {
  const fastify = buildFastify();
  const city = 'Buenos Aires';
  const params = new URLSearchParams({
    appid: OPEN_WEATHER_API_KEY,
    q: city,
  });

  nock(IP_API_JSON_BASE_URL)
      .get('/')
      .reply(200, buenosAiresLocationResponse);

  nock(OPEN_WEATHER_API_BASE_URL)
      .get('/weather')
      .query(params)
      .reply(200, buenosAiresCurrentWeatherResponse);

  t.tearDown(() => fastify.close());
  fastify.inject({
    method: 'GET',
    url: `/v1/current`,
  }, (err, response) => {
    t.deepEqual(response.json(), buenosAiresCurrentWeatherResponse);
    t.end();
  });
});

tap.test('GET `/current/:city` route', (t) => {
  const fastify = buildFastify();
  const city = 'Buenos Aires';
  const params = new URLSearchParams({
    appid: OPEN_WEATHER_API_KEY,
    q: city,
  });

  nock(OPEN_WEATHER_API_BASE_URL)
      .get('/weather')
      .query(params)
      .reply(200, buenosAiresCurrentWeatherResponse);

  t.tearDown(() => fastify.close());
  fastify.inject({
    method: 'GET',
    url: `/v1/current/${city}`,
  }, (err, response) => {
    t.deepEqual(response.json(), buenosAiresCurrentWeatherResponse);
    t.end();
  });
});

tap.test('GET `/current/:city` route openWeather fail response', (t) => {
  const fastify = buildFastify();
  const city = 'Buenos Aires';
  const params = new URLSearchParams({
    appid: OPEN_WEATHER_API_KEY,
    q: city,
  });

  nock(OPEN_WEATHER_API_BASE_URL)
      .get('/weather')
      .query(params)
      .reply(200, openWeatherErrorResponse);

  t.tearDown(() => fastify.close());
  fastify.inject({
    method: 'GET',
    url: `/v1/current/${city}`,
  }, (err, response) => {
    t.deepEqual(response.json(), {message: 'OpenWeather failure'});
    t.end();
  });
});

tap.test('GET `/forecast` route', (t) => {
  const fastify = buildFastify();
  const city = 'Buenos Aires';
  const params = new URLSearchParams({
    appid: OPEN_WEATHER_API_KEY,
    q: city,
  });

  nock(IP_API_JSON_BASE_URL)
      .get('/')
      .reply(200, buenosAiresLocationResponse);

  nock(OPEN_WEATHER_API_BASE_URL)
      .get('/forecast')
      .query(params)
      .reply(200, buenosAiresForecastResponse);

  t.tearDown(() => fastify.close());
  fastify.inject({
    method: 'GET',
    url: `/v1/forecast`,
  }, (err, response) => {
    t.deepEqual(response.json(), buenosAiresForecastResponse);
    t.end();
  });
});

tap.test('GET `/forecast/:city` route', (t) => {
  const fastify = buildFastify();
  const city = 'Buenos Aires';
  const params = new URLSearchParams({
    appid: OPEN_WEATHER_API_KEY,
    q: city,
  });

  nock(OPEN_WEATHER_API_BASE_URL)
      .get('/forecast')
      .query(params)
      .reply(200, buenosAiresForecastResponse);

  t.tearDown(() => fastify.close());
  fastify.inject({
    method: 'GET',
    url: `/v1/forecast/${city}`,
  }, (err, response) => {
    t.deepEqual(response.json(), buenosAiresForecastResponse);
    t.end();
  });
});

