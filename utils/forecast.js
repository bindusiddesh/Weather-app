const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=a99fa89714fafb86fc94d8bbbc5107b9&query=${latitude},${longitude}&units=m`

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                Temperature : body.current.temperature,
                Feelslike : body.current.feelslike,
                Description: "it is currently "  + body.current.temperature  + " degrees out." + "it feels like " +  body.current.feelslike + " degrees"
            })
        }
    })
}

module.exports = forecast