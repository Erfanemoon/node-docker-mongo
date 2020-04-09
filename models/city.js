var mongoose = require('mongoose');

var CitySchema = mongoose.Schema({
    city : String,
    air_quality : String,
    temperature:Number,
    sea_conditions:Number
})

module.exports = mongoose.model('cities' , CitySchema);