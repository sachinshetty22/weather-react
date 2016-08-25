var express = require('express');
var router = express.Router();
var request = require("request");
var fs = require('fs');
//request.defaults({'proxy':'http://wpad.brillio.com:8083/proxy.pac'});
/* GET users listing. */
router.get('/', function (req, res, next) {
  fs.readFile('./dataformat.json', function (err, data) {
    if (err) throw err;
    console.log(data);
    res.send(data);
  });

});

module.exports = router;
