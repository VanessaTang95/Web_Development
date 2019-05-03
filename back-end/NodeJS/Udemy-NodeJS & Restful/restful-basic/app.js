//jshint esversion:6

const express=require('express');
const app=express();
const PORT=3000;

app.get('/',(req,res)=>{
  //the callback function
  res.send("Hello World");

});


app.get('/api/courses',(req,res)=>{
  res.send();
});




app.listen(PORT,() => console.log(`Lisening on port ${PORT}`));
