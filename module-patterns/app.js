var greet1 = require('./greet1.js');
greet1();

var greet2 = require('./greet2.js').greet;
greet2();

var greet3 = require('./greet3.js');
greet3.greet();

var greet3b = require('./greet3.js');
greet3b.greet();

var greet4 = require('./greet4.js');
var greetr4 = new greet4;
greetr4.greet();

var greet5 = require('./greet5.js').greet;
greet5();