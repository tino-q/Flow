const {
  get5DayForecast,
  getCurrentWeatherInfo,
} = require('../services/openWeather');
const {get} = require('lodash');

const weatherForecast = (request) =>
  get5DayForecast(get(request, 'params.city'));

const currentWeather = (request) =>
  getCurrentWeatherInfo(get(request, 'params.city'));

module.exports = {
  weatherForecast,
  currentWeather,
};
