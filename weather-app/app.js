const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const command = process.argv[2]



if (!command) {
    return console.log('please input a location')
} else {
    geocode(command, (error, {latitude, longitude, location} = {}) => {
        if(error) {
            return console.log(error)
        }
    
        // console.log('Error', error)
        // console.log('data', data)
        
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
    
            console.log(location);
            console.log(forecastData);
        })
    })
    
}

