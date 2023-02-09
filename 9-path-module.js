const path = require('path');

console.log(path.sep); //gives the platform's seperator

//To join and return a normalized path with the platform's seperator
const filePath = path.join('/content/','/subfolder/','test.txt');
console.log(filePath);

//To get basename : the last directory/ file name
const base = path.basename(filePath);
console.log(base);    //returns test.txt
console.log(path.basename('/content/subfolder'));  // returns subfolder

//to get the absolute path, path.resolve()
const absolutePath = path.resolve('subfolder');
console.log(absolutePath);
//what ever directory name is given as argument, it will be apppended to the absolute path
// don't use "/" etc in the arguments of path.resolve();