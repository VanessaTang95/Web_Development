//jshint esversion:6
//understand Module
// //console.log(module);
// console.log(__filename);
// console.log(__dirname);

const EventEmitter=require('events');

let url='http://fakeweb.io/log';

class Logger extends EventEmitter{
  log(message){
    //send an HTTP request
    console.log(message);
    //raise an event
    this.emit('messageLogged',{id:1,url:"http://"});
  }

}




module.exports=Logger;
//module.exports.endPoint=url;
