var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

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
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/person/:id', (req, res) => {
    res.render('person', { id: req.params.id });
});

app.get('/api', (req, res) => {
    res.json({ firstname: 'John', lastname: 'Doe' });
});

// ===== start server
app.listen(port);