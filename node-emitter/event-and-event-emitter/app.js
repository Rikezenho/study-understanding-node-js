var Emitter = require('events');

var emitter = new Emitter();

emitter.on('greet', function () {
    console.log('Somewhere, someone said hello.');
});

emitter.on('greet', function () {
    console.log('A greeting ocurred!');
});

console.log('Hello!');

emitter.emit('greet');