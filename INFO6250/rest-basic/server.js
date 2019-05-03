//jshint esversion:6

const express = require('express');
const app = express();
const PORT = 5000;

const chat = require('./chat');
const chatWeb = require('./chat-web');

app.use(express.static('./public'));


app.get('/', (req, res) => {
  const { username } = req.query;
  if ( username && chat.users[username] ) {
    res.send(chatWeb.chatPage(chat,username));
  } else {
    res.redirect('/login');
  }
});

app.post('/chat', express.urlencoded({ extended: false }), (req, res) => {
  const { text, username } = req.body;
  if ( username ) {
    chat.addMessage({ sender: username, text, timestamp: new Date() });
    res.redirect(`/?username=${username}`);
  } else {
    res.redirect('/login');
  }
});


app.get('/login', (req, res) => {
  res.send( chatWeb.loginPage() );
});

app.post('/login', express.urlencoded({ extended: false }), (req, res) => {
  const { username } = req.body;
  if ( username ) {
    chat.addUser({ username });
    res.redirect(`/?username=${username}`);
  } else {
    res.redirect('/login');
  }
});

app.post('/logout', express.urlencoded({ extended: false }), (req, res) => {
  const { username } = req.body;
  if ( username ) {
    chat.removeUser({ username });
  }
  res.redirect('/login');
});

app.get('/users/',(req,res)=>{
    res.json(chat.users);
});

app.get('/messages/',(req,res)=>{
    res.json(chat.messages);

});

app.post('/messages/',express.json(),(req,res) => {
  let { text,username } = req.body;
  if(!username){
    res.status(400).json({error: `'username' is required!`});
  }else if(!text){
    res.status(400).json({error: `'message' is required`});
  }else if(!chat.users[username]){
    res.status(404).json({error: `user ${username} doesn't exist!`});
  }else{
    chat.addMessage({sender:username,text,timestamp:new Date()});
    res.json(chat.messages);
  }
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
