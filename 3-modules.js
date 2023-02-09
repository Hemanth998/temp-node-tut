//Modules - encapsulated code (only share minimum)
//commonJS library, every file is a module in node by default

const {name,sisterName} = require('./4-names');
const sayHello = require('./5-utils');
const data = require('./6-alternative-flavor');

require('./7-mind-storm');

console.log(data)

sayHello("Hemanth");
sayHello(name);
sayHello(sisterName);