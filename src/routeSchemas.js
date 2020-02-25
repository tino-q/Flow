module.exports = {
  location: {
    description: 'Get location information based on your IP',
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          'status': {type: 'string'},
          'country': {type: 'string'},
          'countryCode': {type: 'string'},
          'region': {type: 'string'},
          'regionName': {type: 'string'},
          'city': {type: 'string'},
          'zip': {type: 'string'},
          'lat': {type: 'number'},
          'lon': {type: 'number'},
          'timezone': {type: 'string'},
          'isp': {type: 'string'},
          'org': {type: 'string'},
          'as': {type: 'string'},
        },
      },
    },
  },
  currentWeather: {
    description: 'Get current weather information',
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          'coord': {
            type: 'object',
            properties: {
              'lat': {type: 'number'},
              'lon': {type: 'number'},
            },
          },
          'weather': {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                'id': {type: 'number'},
                'main': {type: 'string'},
                'description': {type: 'string'},
                'icon': {type: 'string'},
              },
            },
          },
          'base': {type: 'string'},
          'main': {
            type: 'object',
            properties: {
              'temp': {type: 'number'},
              'feels_like': {type: 'number'},
              'temp_min': {type: 'number'},
              'temp_max': {type: 'number'},
              'pressure': {type: 'number'},
              'humidity': {type: 'number'},
            },
          },
          'visibility': {type: 'number'},
          'wind': {
            type: 'object',
            properties: {
              'speed': {type: 'number'},
              'deg': {type: 'number'},
            },
          },
          'clouds': {
            type: 'object',
            properties: {
              'all': {type: 'number'},
            },
          },
          'dt': {type: 'number'},
          'sys': {
            type: 'object',
            properties: {
              'type': {type: 'number'},
              'id': {type: 'number'},
              'country': {type: 'string'},
              'sunrise': {type: 'number'},
              'sunset': {type: 'number'},
            },
          },
          'timezone': {type: 'number'},
          'id': {type: 'number'},
          'name': {type: 'string'},
          'cod': {type: 'number'},
        },
      },
    },
  },
  weatherForecast: {
    description: 'Get five day forecast information',
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          'cod': {type: 'string'},
          'message': {type: 'number'},
          'cnt': {type: 'number'},
          'list': {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                'dt': {type: 'number'},
                'main': {
                  type: 'object',
                  properties: {
                    'temp': {type: 'number'},
                    'feels_like': {type: 'number'},
                    'temp_min': {type: 'number'},
                    'temp_max': {type: 'number'},
                    'pressure': {type: 'number'},
                    'sea_level': {type: 'number'},
                    'grnd_level': {type: 'number'},
                    'humidity': {type: 'number'},
                    'temp_kf': {type: 'number'},
                  },
                },
                'weather': {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      'id': {type: 'number'},
                      'main': {type: 'string'},
                      'description': {type: 'number'},
                      'icon': {type: 'number'},
                    },
                  },
                },
                'clouds': {
                  type: 'object',
                  properties: {
                    'all': {type: 'number'},
                  },
                },
                'wind': {
                  type: 'object',
                  properties: {
                    'speed': {type: 'number'},
                    'deg': {type: 'number'},
                  },
                },
                'sys': {
                  type: 'object',
                  properties: {
                    'pod': {type: 'string'},
                  },
                },
                'dt_txt': {type: 'string'},
              },
            },
          },
          'city': {
            type: 'object',
            properties: {
              'id': {type: 'number'},
              'name': {type: 'city'},
              'coord': {
                type: 'object',
                properties: {
                  'lat': {type: 'number'},
                  'lon': {type: 'number'},
                },
              },
              'country': {type: 'string'},
              'population': {type: 'number'},
              'timezone': {type: 'number'},
              'sunrise': {type: 'number'},
              'sunset': {type: 'number'},
            },
          },
        },
      },
    },
  },
};
