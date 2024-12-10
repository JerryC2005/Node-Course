const request = require('postman-request')

const forecast = (lat, long, callback) => {
    const url = `https://api.weatherstack.com/current?access_key=b29dd97ab3599357b8f12972824b2df8&query=${lat},${long}&units=f`


    request({ url , json:true}, (error, { body }) => {

        let currentTemp = body.current.temperature;
        let feelsLikeTemp = body.current.feelslike;

        if(error) {
            callback('unable to connect to location services' , undefined)
        } else if (body.error) {
            callback('unable to find location, try another search', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + `. It is currently ${currentTemp} degrees out. It feels like ${feelsLikeTemp} degrees out`)
        }
    })
}

module.exports = forecast;