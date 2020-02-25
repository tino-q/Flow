const {
  OPEN_WEATHER_API_BASE_URL,
  OPEN_WEATHER_API_KEY,
} = require('../../config/environment');
const got = require('got');
const {get} = require('lodash');

const searchParams = (city) => new URLSearchParams([
  ['q', city],
  ['appid', OPEN_WEATHER_API_KEY],
]);

const validateResponse = async (response) => {
  if (get(response, 'cod') == '200') {
    return response;
  }
  return Promise.reject({
    statusCode: 503,
    message: 'OpenWeather failure',
  });
};

const getCurrentWeatherInfo = (city) =>
  got(
      `${OPEN_WEATHER_API_BASE_URL}/weather`,
      {searchParams: searchParams(city)},
  )
      .json()
      .then(validateResponse);

const get5DayForecast = (city) => got(
    `${OPEN_WEATHER_API_BASE_URL}/forecast`,
    {searchParams: searchParams(city)},
)
    .json()
    .then(validateResponse);

module.exports = {
  getCurrentWeatherInfo,
  get5DayForecast,
};
