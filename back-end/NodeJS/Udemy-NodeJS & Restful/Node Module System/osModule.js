//jshint esversion:6
const os=require('os');

var totalMemory= os.totalmem();
var freeMemory= os.freemem();

console.log(`total memory is :${totalMemory}`);
console.log(`free memory is :${freeMemory}`);
