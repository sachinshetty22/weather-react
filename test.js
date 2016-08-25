var request = require("request");

var request = require('request');
// request = request.defaults({'proxy':'http://wpad.brillio.com:8083/proxy.pac'});

// request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage. 
//   }
// });

  request({
    uri: "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=4890b3d75ae50009288da60acc77994e",
    method: "GET",
    timeout: 10000,
    followRedirect: true,
    maxRedirects: 10,
    proxy:'http://wpad.brillio.com:8083/proxy.pac'
  }, function (error, response, body) {
    console.log(error);
    console.log(response);
    console.log(body);
    //res.send(body);
  });
