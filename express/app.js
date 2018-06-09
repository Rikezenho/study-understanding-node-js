var express = require('express');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var app = express();


var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

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
// var john = Person({
//     firstname: 'John',
//     lastname: 'Doe',
//     address: '555 Main St.'
// });

// john.save((err) => {
//     if (err) throw err;
//     console.log('Person saved!');
// });

// var jane = Person({
//     firstname: 'Jane',
//     lastname: 'Doe',
//     address: '555 Main St.'
// });

// jane.save((err) => {
//     if (err) throw err;
//     console.log('Person saved!');
// });

// ===== view engine
app.set('view engine', 'ejs');

// ===== middlewares
app.use(cookieParser());
app.use('/assets', express.static(__dirname + '/public'));
app.use('/', (req, res, next) => {
    console.log('Request Url: ' + req.url);

    Person.find({}, (err, users) => {
        if (err) throw err;
        console.log(users);
    });

    next();
});

// ===== routes
apiController(app);
htmlController(app);

// ===== start server
app.listen(port);