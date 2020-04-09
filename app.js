var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var bodyParser = require('body-parser');
require('dotenv/config')

//Import routes
var postRoute = require('./routes/posts/posts');
//middleware
app.use(bodyParser.json());

app.use('/posts' , postRoute);
app.get('/',(req,res)=>{
    res.send('I am foocking here');
});

//Routes

app.listen(3000);


//db connection
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true },
    ()=>{console.log('connected to db')});

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback () {
      console.log("database opened ...");
    });
    
    exports.cities = function(req,res) {
      res.render('cities');
    };
