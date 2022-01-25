const request = require('postman-request')
const url = 'http://ip-api.com/json/'

let getIp = (callback) => {
    request(url, (err, res, body) => {
        callback(body)
    })
}

module.exports = { getIp }