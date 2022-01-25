var express = require('express');
var router = express.Router();
const ip = require('../utils/ip')

/* GET home page. */
router.get('/', (req, res, next) => {
  ip.getIp((ips) => {
    res.render('index', {
      ips
    })
  })
});

module.exports = router;
