var Emitter = require('events');
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, () => {
  console.log('Somewhere, someone said hello.');
});

emtr.on(eventConfig.GREET, () => {
  console.log('A greeting ocurred.');
});

console.log('Hello!');
emtr.emit(eventConfig.GREET);