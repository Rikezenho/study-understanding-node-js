var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

// ===== view engine
app.set('view engine', 'ejs');

// ===== middlewares
app.use(cookieParser());
app.use('/assets', express.static(__dirname + '/public'));
app.use('/', (req, res, next) => {
    console.log('Request Url: ' + req.url);
    next();
});

// ===== routes
apiController(app);
htmlController(app);

// ===== start server
app.listen(port);