const request = require('postman-request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const command = process.argv[2]

if (!command) {
    return console.log('please input a location')
} else {
    geocode(command, (error, data) => {
        if(error) {
            return console.log(error)
        }
    
        // console.log('Error', error)
        // console.log('data', data)
        
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
    
    
            console.log(data.location);
            console.log(forecastData);
        })
    })
    
}

