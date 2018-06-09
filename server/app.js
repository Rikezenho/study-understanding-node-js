var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    
    var html = fs.createReadStream(__dirname + '/index.htm', 'utf8');
    html.pipe(res);

}).listen(1337, '127.0.0.1');