//jshint esversion:6
const express=require('express');
const app=express();
const Port=5000;

const receipes=require("./receipe");
const webPage=require("./webPage");

app.use(express.static("./public"));

app.get('/',(req,res)=>{
  res.send(webPage.homePage());
});

app.get('/addReceipe',(req,res)=>{
  res.send(webPage.addInfoPage());
});

app.post('/addReceipe',express.urlencoded({extended:false}),(req,res)=>{
  const {title, ingredients,instruction}=req.body;
  receipes.addReceipe({title,ingredients,instruction});
  res.redirect('/');
});

app.get("/receipes",express.urlencoded({extended:false}),(req,res)=>{

  const receipeName=req.query.title;
  console.log(receipeName);
  res.send(webPage.detailPage(receipeName));
});





app.listen(Port,()=>{console.log(`Server is running on ${Port}`);});
