const request = require('postman-request')
const url = 'https://api.ipify.org?format=json'

let getIp = (callback) => {
    request(url, (err, res, body) => {
        callback(body)
    })
}

module.exports = { getIp }