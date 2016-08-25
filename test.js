var request = require("request");

var fs = require('fs');
// request = request.defaults({'proxy':'http://wpad.brillio.com:8083/proxy.pac'});

// request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage. 
//   }
// });
var iconMap = {}
fs.readFile('./iconmap.json', function (err, data) {
  if (err) throw err;
  iconMap = JSON.parse(data);
});

request({
  uri: "http://api.openweathermap.org/data/2.5/weather?q=Bangalore,in&units=metric&appid=4890b3d75ae50009288da60acc77994e",
  method: "GET",
  timeout: 10000,
  followRedirect: true,
  maxRedirects: 10
}, function (error, response, body) {
  var heroData = JSON.parse(body);
  var weather = heroData.weather[0];
  var hero =
    {
      "currenttemp": heroData.main.temp,
      "city": heroData.name,
      "country": heroData.sys.country,
      "type": "C",
      "condition": weather.description,
      "conditioncode": weather.icon,
      "conditionicon": iconMap[weather.icon]
    }
  console.log(heroData);
  console.log(hero);
  //res.send(body);
  request({
    uri: "http://api.openweathermap.org/data/2.5/forecast/daily?q=Bangalore&units=metric&cnt=5&appid=4890b3d75ae50009288da60acc77994e",
    method: "GET",
    timeout: 10000,
    followRedirect: true,
    maxRedirects: 10
  }, function (error, response, body) {
    var forecastData = JSON.parse(body);
    forecastData = forecastData.list;
    forecastData.splice(0, 1);
    var forecast = [];
    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";

    var subblockColor = ["#e74c3c", "#f39c12", "#27ae60", "#16a085"];

    forecastData.forEach(function (element, index, array) {
      var date = new Date(element.dt * 1000);
      date = weekday[date.getDay()] + " " + date.getDate();
      var weather = element.weather[0];

      var tempdata = {
        "date": date,
        "type": "C",
        "min": element.temp.min,
        "max": element.temp.max,
        "condition": weather.description,
        "conditioncode": weather.icon,
        "conditionicon": iconMap[weather.icon],
        "backgroundColor": subblockColor[index]
      }
      forecast.push(tempdata);

    });
    console.log(forecast);

  });
});
