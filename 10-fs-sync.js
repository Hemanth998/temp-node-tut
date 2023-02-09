const {readFileSync,writeFileSync} = require('fs');

console.log("start");
const first = readFileSync('./content/first.txt','utf8');   //reads file synchronously
const second = readFileSync('./content/second.txt','utf8');


writeFileSync('./content/fs-sync-result.txt',`The result is ${first} and ${second}`,{flag:'a'});  //writes file sync

console.log("done with the task");
console.log("starting the next task");