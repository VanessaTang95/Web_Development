//jshint esversion:6

const EventEmitter=require('events');


//register a listener
emitter.on('messageLogged',(arg) => {
  console.log('listener called', arg);
});

const log=require('./logger');
const logger=new Logger();
logger.log('message');
