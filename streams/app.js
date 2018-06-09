var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt', {
    encoding: 'utf8',
    highWaterMark: 32 * 1024 // size of the buffer
});

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', (chunk) => {
    console.log(chunk);
    writable.write(chunk);
});