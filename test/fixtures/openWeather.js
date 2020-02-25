const buenosAiresCurrentWeatherResponse = {
  'coord': {
    'lon': -58.38,
    'lat': -34.61,
  },
  'weather': [
    {
      'id': 800,
      'main': 'Clear',
      'description': 'clear sky',
      'icon': '01d',
    },
  ],
  'base': 'stations',
  'main': {
    'temp': 299.16,
    'feels_like': 298.6,
    'temp_min': 298.15,
    'temp_max': 300.37,
    'pressure': 1009,
    'humidity': 57,
  },
  'visibility': 10000,
  'wind': {
    'speed': 4.1,
    'deg': 350,
  },
  'clouds': {
    'all': 0,
  },
  'dt': 1582556470,
  'sys': {
    'type': 1,
    'id': 8232,
    'country': 'AR',
    'sunrise': 1582536963,
    'sunset': 1582583875,
  },
  'timezone': -10800,
  'id': 3435910,
  'name': 'Buenos Aires',
  'cod': 200,
};

const buenosAiresForecastResponse = {
  'cod': '200',
  'message': 0,
  'cnt': 40,
  'list': [
    {
      'dt': 1582567200,
      'main': {
        'temp': 301.71,
        'feels_like': 299.5,
        'temp_min': 301.53,
        'temp_max': 301.71,
        'pressure': 1005,
        'sea_level': 1005,
        'grnd_level': 1004,
        'humidity': 38,
        'temp_kf': 0.18,
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01d',
        },
      ],
      'clouds': {
        'all': 0,
      },
      'wind': {
        'speed': 4.41,
        'deg': 22,
      },
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2020-02-24 18:00:00',
    },
    {
      'dt': 1582578000,
      'main': {
        'temp': 302.39,
        'feels_like': 301.76,
        'temp_min': 302.25,
        'temp_max': 302.39,
        'pressure': 1004,
        'sea_level': 1004,
        'grnd_level': 1002,
        'humidity': 37,
        'temp_kf': 0.14,
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01d',
        },
      ],
      'clouds': {
        'all': 0,
      },
      'wind': {
        'speed': 2.25,
        'deg': 6,
      },
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2020-02-24 21:00:00',
    },
    {
      'dt': 1582588800,
      'main': {
        'temp': 300.84,
        'feels_like': 299.28,
        'temp_min': 300.75,
        'temp_max': 300.84,
        'pressure': 1005,
        'sea_level': 1005,
        'grnd_level': 1003,
        'humidity': 40,
        'temp_kf': 0.09,
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01n',
        },
      ],
      'clouds': {
        'all': 0,
      },
      'wind': {
        'speed': 3.49,
        'deg': 21,
      },
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2020-02-25 00:00:00',
    },
    {
      'dt': 1582599600,
      'main': {
        'temp': 298.92,
        'feels_like': 296.69,
        'temp_min': 298.87,
        'temp_max': 298.92,
        'pressure': 1006,
        'sea_level': 1006,
        'grnd_level': 1005,
        'humidity': 42,
        'temp_kf': 0.05,
      },
      'weather': [
        {
          'id': 803,
          'main': 'Clouds',
          'description': 'broken clouds',
          'icon': '04n',
        },
      ],
      'clouds': {
        'all': 61,
      },
      'wind': {
        'speed': 4.01,
        'deg': 249,
      },
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2020-02-25 03:00:00',
    },
    {
      'dt': 1582610400,
      'main': {
        'temp': 297.23,
        'feels_like': 297,
        'temp_min': 297.23,
        'temp_max': 297.23,
        'pressure': 1006,
        'sea_level': 1006,
        'grnd_level': 1005,
        'humidity': 54,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10n',
        },
      ],
      'clouds': {
        'all': 75,
      },
      'wind': {
        'speed': 2.23,
        'deg': 179,
      },
      'rain': {
        '3h': 0.19,
      },
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2020-02-25 06:00:00',
    },
    {
      'dt': 1582621200,
      'main': {
        'temp': 295.8,
        'feels_like': 293.05,
        'temp_min': 295.8,
        'temp_max': 295.8,
        'pressure': 1008,
        'sea_level': 1008,
        'grnd_level': 1006,
        'humidity': 52,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10n',
        },
      ],
      'clouds': {
        'all': 100,
      },
      'wind': {
        'speed': 4.94,
        'deg': 220,
      },
      'rain': {
        '3h': 0.13,
      },
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2020-02-25 09:00:00',
    },
    {
      'dt': 1582632000,
      'main': {
        'temp': 295.21,
        'feels_like': 292.16,
        'temp_min': 295.21,
        'temp_max': 295.21,
        'pressure': 1010,
        'sea_level': 1010,
        'grnd_level': 1008,
        'humidity': 46,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 804,
          'main': 'Clouds',
          'description': 'overcast clouds',
          'icon': '04d',
        },
      ],
      'clouds': {
        'all': 100,
      },
      'wind': {
        'speed': 4.38,
        'deg': 164,
      },
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2020-02-25 12:00:00',
    },
    {
      'dt': 1582642800,
      'main': {
        'temp': 291.14,
        'feels_like': 290.1,
        'temp_min': 291.14,
        'temp_max': 291.14,
        'pressure': 1012,
        'sea_level': 1012,
        'grnd_level': 1011,
        'humidity': 67,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10d',
        },
      ],
      'clouds': {
        'all': 100,
      },
      'wind': {
        'speed': 2.27,
        'deg': 235,
      },
      'rain': {
        '3h': 2.31,
      },
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2020-02-25 15:00:00',
    },
    {
      'dt': 1582653600,
      'main': {
        'temp': 294.75,
        'feels_like': 293.77,
        'temp_min': 294.75,
        'temp_max': 294.75,
        'pressure': 1011,
        'sea_level': 1011,
        'grnd_level': 1010,
        'humidity': 53,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10d',
        },
      ],
      'clouds': {
        'all': 100,
      },
      'wind': {
        'speed': 2.12,
        'deg': 114,
      },
      'rain': {
        '3h': 1.38,
      },
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2020-02-25 18:00:00',
    },
    {
      'dt': 1582664400,
      'main': {
        'temp': 294.7,
        'feels_like': 292.25,
        'temp_min': 294.7,
        'temp_max': 294.7,
        'pressure': 1010,
        'sea_level': 1010,
        'grnd_level': 1008,
        'humidity': 58,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01d',
        },
      ],
      'clouds': {
        'all': 0,
      },
      'wind': {
        'speed': 4.8,
        'deg': 60,
      },
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2020-02-25 21:00:00',
    },
    {
      'dt': 1582675200,
      'main': {
        'temp': 294.02,
        'feels_like': 291.17,
        'temp_min': 294.02,
        'temp_max': 294.02,
        'pressure': 1011,
        'sea_level': 1011,
        'grnd_level': 1010,
        'humidity': 66,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01n',
        },
      ],
      'clouds': {
        'all': 0,
      },
      'wind': {
        'speed': 6.01,
        'deg': 66,
      },
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2020-02-26 00:00:00',
    },
    {
      'dt': 1582686000,
      'main': {
        'temp': 293.19,
        'feels_like': 290.1,
        'temp_min': 293.19,
        'temp_max': 293.19,
        'pressure': 1013,
        'sea_level': 1013,
        'grnd_level': 1011,
        'humidity': 62,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01n',
        },
      ],
      'clouds': {
        'all': 4,
      },
      'wind': {
        'speed': 5.54,
        'deg': 64,
      },
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2020-02-26 03:00:00',
    },
    {
      'dt': 1582696800,
      'main': {
        'temp': 292.63,
        'feels_like': 290.6,
        'temp_min': 292.63,
        'temp_max': 292.63,
        'pressure': 1014,
        'sea_level': 1014,
        'grnd_level': 1012,
        'humidity': 58,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01n',
        },
      ],
      'clouds': {
        'all': 2,
      },
      'wind': {
        'speed': 3.36,
        'deg': 104,
      },
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2020-02-26 06:00:00',
    },
    {
      'dt': 1582707600,
      'main': {
        'temp': 292.58,
        'feels_like': 290.79,
        'temp_min': 292.58,
        'temp_max': 292.58,
        'pressure': 1015,
        'sea_level': 1015,
        'grnd_level': 1013,
        'humidity': 65,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01n',
        },
      ],
      'clouds': {
        'all': 0,
      },
      'wind': {
        'speed': 3.74,
        'deg': 116,
      },
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2020-02-26 09:00:00',
    },
    {
      'dt': 1582718400,
      'main': {
        'temp': 293.07,
        'feels_like': 291.31,
        'temp_min': 293.07,
        'temp_max': 293.07,
        'pressure': 1016,
        'sea_level': 1016,
        'grnd_level': 1014,
        'humidity': 65,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01d',
        },
      ],
      'clouds': {
        'all': 1,
      },
      'wind': {
        'speed': 3.91,
        'deg': 123,
      },
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2020-02-26 12:00:00',
    },
    {
      'dt': 1582729200,
      'main': {
        'temp': 296.06,
        'feels_like': 293.7,
        'temp_min': 296.06,
        'temp_max': 296.06,
        'pressure': 1015,
        'sea_level': 1015,
        'grnd_level': 1014,
        'humidity': 49,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01d',
        },
      ],
      'clouds': {
        'all': 0,
      },
      'wind': {
        'speed': 4.09,
        'deg': 99,
      },
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2020-02-26 15:00:00',
    },
    {
      'dt': 1582740000,
      'main': {
        'temp': 297.32,
        'feels_like': 295.38,
        'temp_min': 297.32,
        'temp_max': 297.32,
        'pressure': 1013,
        'sea_level': 1013,
        'grnd_level': 1012,
        'humidity': 43,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 801,
          'main': 'Clouds',
          'description': 'few clouds',
          'icon': '02d',
        },
      ],
      'clouds': {
        'all': 17,
      },
      'wind': {
        'speed': 3.15,
        'deg': 51,
      },
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2020-02-26 18:00:00',
    },
    {
      'dt': 1582750800,
      'main': {
        'temp': 295.28,
        'feels_like': 291.59,
        'temp_min': 295.28,
        'temp_max': 295.28,
        'pressure': 1013,
        'sea_level': 1013,
        'grnd_level': 1012,
        'humidity': 60,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01d',
        },
      ],
      'clouds': {
        'all': 0,
      },
      'wind': {
        'speed': 7.07,
        'deg': 96,
      },
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2020-02-26 21:00:00',
    },
    {
      'dt': 1582761600,
      'main': {
        'temp': 294.5,
        'feels_like': 290.62,
        'temp_min': 294.5,
        'temp_max': 294.5,
        'pressure': 1015,
        'sea_level': 1015,
        'grnd_level': 1013,
        'humidity': 60,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01n',
        },
      ],
      'clouds': {
        'all': 0,
      },
      'wind': {
        'speed': 7,
        'deg': 90,
      },
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2020-02-27 00:00:00',
    },
    {
      'dt': 1582772400,
      'main': {
        'temp': 293.94,
        'feels_like': 291.39,
        'temp_min': 293.94,
        'temp_max': 293.94,
        'pressure': 1016,
        'sea_level': 1016,
        'grnd_level': 1014,
        'humidity': 64,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01n',
        },
      ],
      'clouds': {
        'all': 0,
      },
      'wind': {
        'speed': 5.31,
        'deg': 81,
      },
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2020-02-27 03:00:00',
    },
    {
      'dt': 1582783200,
      'main': {
        'temp': 292.98,
        'feels_like': 290.6,
        'temp_min': 292.98,
        'temp_max': 292.98,
        'pressure': 1015,
        'sea_level': 1015,
        'grnd_level': 1013,
        'humidity': 60,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01n',
        },
      ],
      'clouds': {
        'all': 0,
      },
      'wind': {
        'speed': 4.21,
        'deg': 53,
      },
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2020-02-27 06:00:00',
    },
    {
      'dt': 1582794000,
      'main': {
        'temp': 291.27,
        'feels_like': 288.27,
        'temp_min': 291.27,
        'temp_max': 291.27,
        'pressure': 1015,
        'sea_level': 1015,
        'grnd_level': 1014,
        'humidity': 61,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01n',
        },
      ],
      'clouds': {
        'all': 0,
      },
      'wind': {
        'speed': 4.54,
        'deg': 347,
      },
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2020-02-27 09:00:00',
    },
    {
      'dt': 1582804800,
      'main': {
        'temp': 292.05,
        'feels_like': 289.46,
        'temp_min': 292.05,
        'temp_max': 292.05,
        'pressure': 1015,
        'sea_level': 1015,
        'grnd_level': 1014,
        'humidity': 52,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01d',
        },
      ],
      'clouds': {
        'all': 0,
      },
      'wind': {
        'speed': 3.32,
        'deg': 347,
      },
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2020-02-27 12:00:00',
    },
    {
      'dt': 1582815600,
      'main': {
        'temp': 298.25,
        'feels_like': 296.16,
        'temp_min': 298.25,
        'temp_max': 298.25,
        'pressure': 1014,
        'sea_level': 1014,
        'grnd_level': 1013,
        'humidity': 35,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01d',
        },
      ],
      'clouds': {
        'all': 0,
      },
      'wind': {
        'speed': 2.52,
        'deg': 30,
      },
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2020-02-27 15:00:00',
    },
    {
      'dt': 1582826400,
      'main': {
        'temp': 300.05,
        'feels_like': 297.34,
        'temp_min': 300.05,
        'temp_max': 300.05,
        'pressure': 1012,
        'sea_level': 1012,
        'grnd_level': 1011,
        'humidity': 31,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01d',
        },
      ],
      'clouds': {
        'all': 0,
      },
      'wind': {
        'speed': 3.32,
        'deg': 56,
      },
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2020-02-27 18:00:00',
    },
    {
      'dt': 1582837200,
      'main': {
        'temp': 300.4,
        'feels_like': 298.47,
        'temp_min': 300.4,
        'temp_max': 300.4,
        'pressure': 1010,
        'sea_level': 1010,
        'grnd_level': 1009,
        'humidity': 32,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01d',
        },
      ],
      'clouds': {
        'all': 0,
      },
      'wind': {
        'speed': 2.48,
        'deg': 77,
      },
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2020-02-27 21:00:00',
    },
    {
      'dt': 1582848000,
      'main': {
        'temp': 298.42,
        'feels_like': 296.48,
        'temp_min': 298.42,
        'temp_max': 298.42,
        'pressure': 1012,
        'sea_level': 1012,
        'grnd_level': 1010,
        'humidity': 44,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01n',
        },
      ],
      'clouds': {
        'all': 0,
      },
      'wind': {
        'speed': 3.71,
        'deg': 50,
      },
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2020-02-28 00:00:00',
    },
    {
      'dt': 1582858800,
      'main': {
        'temp': 297.74,
        'feels_like': 295.55,
        'temp_min': 297.74,
        'temp_max': 297.74,
        'pressure': 1012,
        'sea_level': 1012,
        'grnd_level': 1010,
        'humidity': 48,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01n',
        },
      ],
      'clouds': {
        'all': 0,
      },
      'wind': {
        'speed': 4.39,
        'deg': 25,
      },
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2020-02-28 03:00:00',
    },
    {
      'dt': 1582869600,
      'main': {
        'temp': 296.23,
        'feels_like': 292.26,
        'temp_min': 296.23,
        'temp_max': 296.23,
        'pressure': 1010,
        'sea_level': 1010,
        'grnd_level': 1009,
        'humidity': 42,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01n',
        },
      ],
      'clouds': {
        'all': 0,
      },
      'wind': {
        'speed': 5.53,
        'deg': 356,
      },
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2020-02-28 06:00:00',
    },
    {
      'dt': 1582880400,
      'main': {
        'temp': 294.77,
        'feels_like': 290.69,
        'temp_min': 294.77,
        'temp_max': 294.77,
        'pressure': 1012,
        'sea_level': 1012,
        'grnd_level': 1010,
        'humidity': 45,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01n',
        },
      ],
      'clouds': {
        'all': 0,
      },
      'wind': {
        'speed': 5.58,
        'deg': 355,
      },
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2020-02-28 09:00:00',
    },
    {
      'dt': 1582891200,
      'main': {
        'temp': 296.26,
        'feels_like': 292.47,
        'temp_min': 296.26,
        'temp_max': 296.26,
        'pressure': 1013,
        'sea_level': 1013,
        'grnd_level': 1011,
        'humidity': 42,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 802,
          'main': 'Clouds',
          'description': 'scattered clouds',
          'icon': '03d',
        },
      ],
      'clouds': {
        'all': 33,
      },
      'wind': {
        'speed': 5.29,
        'deg': 344,
      },
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2020-02-28 12:00:00',
    },
    {
      'dt': 1582902000,
      'main': {
        'temp': 302.41,
        'feels_like': 299.92,
        'temp_min': 302.41,
        'temp_max': 302.41,
        'pressure': 1013,
        'sea_level': 1013,
        'grnd_level': 1011,
        'humidity': 34,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01d',
        },
      ],
      'clouds': {
        'all': 0,
      },
      'wind': {
        'speed': 4.34,
        'deg': 335,
      },
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2020-02-28 15:00:00',
    },
    {
      'dt': 1582912800,
      'main': {
        'temp': 303.76,
        'feels_like': 301.53,
        'temp_min': 303.76,
        'temp_max': 303.76,
        'pressure': 1010,
        'sea_level': 1010,
        'grnd_level': 1009,
        'humidity': 32,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 801,
          'main': 'Clouds',
          'description': 'few clouds',
          'icon': '02d',
        },
      ],
      'clouds': {
        'all': 22,
      },
      'wind': {
        'speed': 4.07,
        'deg': 40,
      },
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2020-02-28 18:00:00',
    },
    {
      'dt': 1582923600,
      'main': {
        'temp': 303.24,
        'feels_like': 300.81,
        'temp_min': 303.24,
        'temp_max': 303.24,
        'pressure': 1008,
        'sea_level': 1008,
        'grnd_level': 1008,
        'humidity': 34,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 802,
          'main': 'Clouds',
          'description': 'scattered clouds',
          'icon': '03d',
        },
      ],
      'clouds': {
        'all': 33,
      },
      'wind': {
        'speed': 4.57,
        'deg': 49,
      },
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2020-02-28 21:00:00',
    },
    {
      'dt': 1582934400,
      'main': {
        'temp': 302.39,
        'feels_like': 298.99,
        'temp_min': 302.39,
        'temp_max': 302.39,
        'pressure': 1010,
        'sea_level': 1010,
        'grnd_level': 1008,
        'humidity': 33,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 801,
          'main': 'Clouds',
          'description': 'few clouds',
          'icon': '02n',
        },
      ],
      'clouds': {
        'all': 17,
      },
      'wind': {
        'speed': 5.44,
        'deg': 22,
      },
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2020-02-29 00:00:00',
    },
    {
      'dt': 1582945200,
      'main': {
        'temp': 299.98,
        'feels_like': 298.86,
        'temp_min': 299.98,
        'temp_max': 299.98,
        'pressure': 1012,
        'sea_level': 1012,
        'grnd_level': 1010,
        'humidity': 39,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10n',
        },
      ],
      'clouds': {
        'all': 93,
      },
      'wind': {
        'speed': 2.35,
        'deg': 340,
      },
      'rain': {
        '3h': 0.13,
      },
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2020-02-29 03:00:00',
    },
    {
      'dt': 1582956000,
      'main': {
        'temp': 297.65,
        'feels_like': 295.68,
        'temp_min': 297.65,
        'temp_max': 297.65,
        'pressure': 1012,
        'sea_level': 1012,
        'grnd_level': 1010,
        'humidity': 44,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10n',
        },
      ],
      'clouds': {
        'all': 71,
      },
      'wind': {
        'speed': 3.46,
        'deg': 39,
      },
      'rain': {
        '3h': 0.44,
      },
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2020-02-29 06:00:00',
    },
    {
      'dt': 1582966800,
      'main': {
        'temp': 295.89,
        'feels_like': 293.3,
        'temp_min': 295.89,
        'temp_max': 295.89,
        'pressure': 1014,
        'sea_level': 1014,
        'grnd_level': 1012,
        'humidity': 52,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 500,
          'main': 'Rain',
          'description': 'light rain',
          'icon': '10n',
        },
      ],
      'clouds': {
        'all': 38,
      },
      'wind': {
        'speed': 4.75,
        'deg': 3,
      },
      'rain': {
        '3h': 0.63,
      },
      'sys': {
        'pod': 'n',
      },
      'dt_txt': '2020-02-29 09:00:00',
    },
    {
      'dt': 1582977600,
      'main': {
        'temp': 296.75,
        'feels_like': 293.94,
        'temp_min': 296.75,
        'temp_max': 296.75,
        'pressure': 1015,
        'sea_level': 1015,
        'grnd_level': 1013,
        'humidity': 51,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 801,
          'main': 'Clouds',
          'description': 'few clouds',
          'icon': '02d',
        },
      ],
      'clouds': {
        'all': 19,
      },
      'wind': {
        'speed': 5.29,
        'deg': 352,
      },
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2020-02-29 12:00:00',
    },
    {
      'dt': 1582988400,
      'main': {
        'temp': 302.08,
        'feels_like': 301.54,
        'temp_min': 302.08,
        'temp_max': 302.08,
        'pressure': 1015,
        'sea_level': 1015,
        'grnd_level': 1013,
        'humidity': 37,
        'temp_kf': 0,
      },
      'weather': [
        {
          'id': 800,
          'main': 'Clear',
          'description': 'clear sky',
          'icon': '01d',
        },
      ],
      'clouds': {
        'all': 0,
      },
      'wind': {
        'speed': 2,
        'deg': 25,
      },
      'sys': {
        'pod': 'd',
      },
      'dt_txt': '2020-02-29 15:00:00',
    },
  ],
  'city': {
    'id': 3435910,
    'name': 'Buenos Aires',
    'coord': {
      'lat': -34.6132,
      'lon': -58.3772,
    },
    'country': 'AR',
    'population': 1000000,
    'timezone': -10800,
    'sunrise': 1582536962,
    'sunset': 1582583874,
  },
};

const errorResponse = {
  'cod': '500',
};

module.exports = {
  buenosAiresCurrentWeatherResponse,
  buenosAiresForecastResponse,
  errorResponse,
};
