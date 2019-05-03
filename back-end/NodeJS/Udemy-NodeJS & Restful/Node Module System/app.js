//jshint esversion:6
//global objects!
// console.log(); //global in JS
//
// setTimeout(); //call delay
// clearTimeout();
//
// setInterval();// call delay recursively
// clearInterval();
//
//
// //In browser, call global functions via window objects
// window.console.log();
// //window can be omitted
//
// //Node don't have window function, but we have glocal object instead
// global.setTimeout();
//
// let message="";
// console.log(global.message);//which give undefined

//we should decline building variables in global scope otherwise it might be overwrite by otherwise
//define it into module, very like the package in JAVA

//use Module and store the variable in const to prevent overwrite
const log = require('./logger');

// console.log(logger);

log('message');
