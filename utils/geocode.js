const request = require('postman-request')

const geocode = (address, callback) => {
    const url = `http://api.positionstack.com/v1/forward?access_key=cef25cb906a8449d46865ee154a64c5d&query=${address}&limit=1`

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude : body.data[0].latitude,
                 longitude : body.data[0].longitude,
                 location : body.data[0].name
            })
        }
    })
}

module.exports = geocode