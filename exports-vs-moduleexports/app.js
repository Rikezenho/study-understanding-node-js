var greet = require('./greet');
var greet2 = require('./greet2');
greet2.greet();

/**
 * 
 * Conclusion:
 * NEVER use exports instead module.exports.
 * It's easier and avoid errors.
 */