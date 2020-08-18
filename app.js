var weather = require('./weather.js');

var cities = ["Palaiseau", "Paris", "Lomé", "Berlin"]

cities.forEach(function(city) {    
    weather.get(city);
});