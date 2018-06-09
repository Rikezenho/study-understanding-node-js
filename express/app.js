var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<html><head><title>Teste</title></head><body><h1>Hello world!</h1></body></html>')
});

app.get('/person/:id', (req, res) => {
    res.send('<html><head><title>Teste</title></head><body><h1>Person: ' + req.params.id + '</h1></body></html>')
});

app.get('/api', (req, res) => {
    res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);