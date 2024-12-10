const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=b29dd97ab3599357b8f12972824b2df8&query=40,-75&units=f'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
        console.log(chunk)
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body);
    })

})

request.on('error', (error) => {
    console.log('an error', error)
})

request.end();