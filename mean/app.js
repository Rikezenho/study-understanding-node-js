var express = require('express');
var mongoose = require('mongoose');
var app = express();

var port = process.env.PORT || 3000;

// ===== mongoose
mongoose.connect('mongodb://root:test12345@ds119682.mlab.com:19682/addressbook');
var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

var Person = mongoose.model('Person', personSchema);

// ===== view engine
app.set('view engine', 'ejs');

// ===== middlewares
app.use('/assets', express.static(__dirname + '/public'));
app.use('/', (req, res, next) => {
    console.log('Request Url: ' + req.url);

    // Person.find({}, (err, users) => {
    //     if (err) throw err;
    //     console.log(users);
    // });

    next();
});

// ===== routes
app.get('/', (req, res) => {
    res.render('index');
});

// ===== start server
app.listen(port);