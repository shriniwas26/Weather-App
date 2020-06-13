const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const ACCESS_KEY = "a5402c6f4cb5df630a4a09cda47fcdf2"
    const url = 'http://api.weatherstack.com/current?access_key=' + ACCESS_KEY +
        '&query=' + latitude + ',' + longitude

    // const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(
                undefined,
                'The temperature is: ' + body.current.temperature + "C. Humidity is: " + body.current.humidity + '%.'
            )
        }
    })
}

module.exports = forecast