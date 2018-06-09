// utf-8 default
var buf = new Buffer('Hello', 'utf8');
// >> convert it to binary data

console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

buf.write('wo');
console.log(buf.toString());
