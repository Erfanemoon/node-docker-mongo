var mongoose = require('mongoose');

//{"air quality":"yellow","temperature":20,"sea conditions":3,"city":"Genova"},
var CitySchema = mongoose.Schema({
    city : String,
    air_quality : String,
    temperature:Number,
    sea_conditions:Number
})

module.exports = mongoose.model('cities' , CitySchema);