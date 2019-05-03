//jshint esversion:6

function loginButtonSetting() {
  //login section
  //disable the login button if no username input
  const loginButton = document.querySelector(".login button");
  const userNameField = document.querySelector(".login input");
  if (userNameField && loginButton) {

    loginButton.disabled = !userNameField.value;
    userNameField.addEventListener('input', (e) => {
      if (e.target.value) {
        loginButton.disabled = false;
      } else {
        loginButton.disabled = true;
      }
    });
  }
}

function sendButtonSetting() {

  //disable send button if no message input
  const sendButton = document.querySelector('.outgoing button');
  const sendField = document.querySelector('.to-send');
  if (sendButton && sendField) {
    sendButton.disabled = !sendField.value;
    sendField.addEventListener('input', (e) => {
      if (e.target.value) {
        sendButton.disabled = false;
      } else {
        sendButton.disabled = true;
      }
    });
  }
}

function sendMessages(e){
  const username=e.querySelector(".send input").value;
  const text=e.querySelector(".to-send").value;
  const timestamp=new Date();
  if(username && text ){
    document.querySelector(".to-send").value="";
    document.querySelector('.send button').disabled=true;
    fetch('/messages/',{
      method:'POST',
      headers:new Headers({'content-type':"application/json"}),
      body:JSON.stringify({username, text, timestamp})
    });
  }

}

function refreshUsers(){
  fetch('/users/')
  .then( response => {
    if( response.ok ){
      return response.json();
    }
    return response.json().then(err => Promise.reject(err));
  })
  .then(users =>{
    const usernames=users.map(username => `
      <li>
        <div class="user">
          <span class="username">${user}</span>
        </div>
      </li>
    `).join("");
    document.querySelector('.users').innerHTML=usernames;
  }).catch(err => status.innerText=err.error);
}

function refreshMessages(){
  fetch('/messages/')
  .then( response => {
    if( response.ok ){
      return response.json();
    }
    return response.json().then(error => Promise.reject(error));
  })
  .then(messages =>{
    const messageList=messages.map(message=>`<li>
      <div class="message">
        <div class="meta-info">
          <div class="sender-info">
            <span class="username">${message.sender}</span>
          </div>
          <div class="message-info">
            <span class="timestamp">${message.timestamp}</span>
          </div>
        </div>
        <p class="message-text">${message.text}</p>
      </div>
    </li>
  `).join("");
    document.querySelector('.messages').innerHTML=messageList;
  }).catch(error => status.innerText=error.error);
}


function refresh(){
  setInterval(()=>{
  refreshUsers();
  refreshMessages();
},5000);
}

(function iife() {
  'use strict';
  //login section
  loginButtonSetting();
  //chat section
  sendButtonSetting();

  //refresh
  //include update users and messages
  const currentRoute=document.querySelector(".login");
  if(!currentRoute){
    refresh();
  }

  //refresh sendButton
  const refreshButton=document.querySelector('.refresh button');
if(refreshButton){
  refreshButton.addEventListener('click', refresh);
}
  //send message

  const submitMessage=document.querySelector(".send");
  if(submitMessage){
    submitMessage.addEventListener('submit',e=>{
      e.preventDefault();//ban the original method
      sendMessages(e.target);
      refreshMessages();
      refreshUsers();
    });
  }

refresh();

})();
