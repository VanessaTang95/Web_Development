//jshint esversion:6
const express = require('express');
const app = express();
const PORT = 3000;

const chat = require('./chat');
const chatWeb = require('./chat-web');
const loginWeb=require('./login-web');


app.use(express.static('./public'));

//1st step:loading the home page
app.get('/', (req, res) => {
  if(!chat.currentUser ){
    res.redirect('/login');
  }else{
  res.send(chatWeb.chatPage(chat));
  delete chat.currentUser;
}
});

//2nd step: checking login or no & login
app.get('/login',(req,res)=>{
    res.send(loginWeb.loginPage());
});

//login
  app.post('/login',express.urlencoded({extended:false}),(req,res)=>{
    chat.currentUser=String(req.body.userName);
    chat.addUsers(chat.currentUser);
    res.redirect('/');

  });

//3rd step: send message
app.post('/chat', express.urlencoded({ extended: false }), (req, res) => {
  let sender;
  sender=req.body.userName;
  const text  = req.body.text;
  chat.addMessage({ sender, text, timestamp: new Date() });
  chat.currentUser=sender;
  res.redirect('/');
});

//4th step: Logout
app.post('/logout', express.urlencoded({ extended: false }),(req,res)=>{
  chat.deleteUsers(req.body.userName);
  res.redirect('/');
});

//4.1th step:Refresh
app.post('/', express.urlencoded({ extended: false }),(req,res)=>{
chat.currentUser=req.body.userName;
  res.redirect('/');
});


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
