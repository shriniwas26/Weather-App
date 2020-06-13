const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode("Eindhoven", (error, data) => {
    console.log("Error: " + error)
    console.log("Data: " + JSON.stringify(data))
})

forecast(51.43444, 5.48417, (error, data) => {
    console.log("Error: " + error)
    console.log("Data: " + data)
})