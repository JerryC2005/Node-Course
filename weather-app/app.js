// console.log('starting')

// setTimeout(() => {
//     console.log('2 second timer')
// }, 2000)

// setTimeout(() => {
//     console.log('0 second timer')
// }, 0)

// console.log('stopping')

const request = require('request')
const url = 'https://api.weatherstack.com/current?access_key=b29dd97ab3599357b8f12972824b2df8&query=37.8267,-122.4233&units=f'

request({ url: url, json: true},(error, response) => {
    // console.log(response.body.current)
    let currentTemp = response.body.current.temperature;
    let feelsLikeTemp = response.body.current.feelslike;

    console.log(response.body.current.weather_descriptions[0] + `. It is currently ${currentTemp} degrees out. It feels like ${feelsLikeTemp} degrees out`)


})