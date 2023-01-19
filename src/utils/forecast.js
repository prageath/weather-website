const request = require('request')

const forecast = (lon, lat, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=75b128a39b6da47c4dde41328e8f1cb4&query='+ lon +','+ lat +'&units=m'

    request({url, json: true}, (error, {body}) => {

        if(error){
            callback('Unable to connect with weather services.')
        }
        else if(body.error){
            callback(body.error.info)
        }
        else{
            const data = body.current
            const msg = data.weather_descriptions[0] + '. It is currently ' + data.temperature + ' degrees out. It feels like ' + data.feelslike + ' degrees out. Humidity is ' + data.humidity + '.'

            callback(undefined, msg)
        }
    })

}

module.exports = forecast