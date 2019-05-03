//jshint esversion:6
const express=require('express');
const app=express();
const PORT=3000;

const words=require('./words.js');
const gameWeb=require('./gamepage.js');

const currentUser=[];

app.use(express.static("./public"));

app.get('/',(req,res)=>{
  res.send(gameWeb.gamePage(words));
});

app.post('/game',express.urlencoded({extended:false}),(req,res)=>{
  let guessWord=req.body.guessField;
  let guessResult=words.judge(guessWord);
  words.addPreviousGuess(guessResult.previousGuess);
  words.addTexts(guessResult);
    res.redirect('/');
});

//restart game
app.post('/',(req,res)=>{
  words.previousGuessList.length=0;
  words.texts.length=0;
  delete words.secretWord;
  res.send(gameWeb.gamePage(words));

});
app.listen(PORT,()=>console.log(`Listening on http://localhost:${PORT}`));
