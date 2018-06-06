var obj = {
  name: 'John Doe',
  greet: function () {
    console.log(`Hello ${this.name}!`);
  }
};

obj.greet();

// call and apply change the way this behavior works
// - call pass parameters by comma
// obj.greet.call({ name: 'Peter Doe' }, param, param2)
obj.greet.call({ name: 'Jane Doe' });
// - apply pass parameters by array
// obj.greet.apply({ name: 'Peter Doe' }, [param, param2])
obj.greet.apply({ name: 'Peter Doe' });