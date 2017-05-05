const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=ef996ae5b40201e7fe54e061dde5d8f9&units=metric';

module.exports = {
    getTemp: function (location) {
        let encodedLocation = encodeURIComponent(location);
        let request = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(request).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }

        }, function (err) {
            throw new Error(err.message);
        });
    }
};