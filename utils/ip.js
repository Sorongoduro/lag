const request = require('postman-request')
const BASE_URL = 'https://api.ipify.org/'

let getIp = (callback) => {

    request(BASE_URL, (err, res, body) => {
        console.log(body)
        callback(body)
    })
}

module.exports = { getIp }