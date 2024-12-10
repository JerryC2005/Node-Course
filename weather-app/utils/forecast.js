const request = require('postman-request')

const forecast = (lat, long, callback) => {
    const url = `https://api.weatherstack.com/current?access_key=b29dd97ab3599357b8f12972824b2df8&query=${lat},${long}&units=f`


    request({ url: url, json:true}, (error, response) => {

        let currentTemp = response.body.current.temperature;
        let feelsLikeTemp = response.body.current.feelslike;

        if(error) {
            callback('unable to connect to location services' , undefined)
        } else if (response.body.error) {
            callback('unable to find location, try another search', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + `. It is currently ${currentTemp} degrees out. It feels like ${feelsLikeTemp} degrees out`)
        }
    })
}

module.exports = forecast;