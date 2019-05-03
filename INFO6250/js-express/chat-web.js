//jshint esversion:6

const chatWeb = {
  chatPage: function(chat) {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <link rel="stylesheet" href="/chat.css"/>
          <title>Chat</title>
        </head>
        <body>
        <h1>Chat-Room</h1>
          <div id="chat-app">
            <div class="display-panel">
              ${chatWeb.getUserList(chat)}
              ${chatWeb.getMessageList(chat)}
            </div>
            <div class="operate-panel">
            ${chatWeb.getOutgoing(chat)}
            ${chatWeb.getUserLogout(chat)}
            ${chatWeb.getPageRefresh(chat)}
            </div>
          </div>
        </body>
      </html>
  `;
  },

  getMessageList: function(chat) {
    return `<ol class="messages">` +
      chat.messages.map( message => `
        <li>
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
      `).join('') +
      `</ol>`;
  },
  getUserList: function(chat) {
    return `<ul class="users">` +
    Object.values(chat.users).map( user => `
      <li>
        <div class="user">
          <span class="username">${user}</span>
        </div>
      </li>
    `).join('') +
    `</ul>`;
  },
  getOutgoing: function(chat) {
    return `
      <div class="outgoing">
        <form action="/chat" method="POST">
          <input class="userName" name="userName" value=${chat.currentUser} type="hidden"/>
          <input class="to-send" name="text" value="" placeholder="Enter message to send"/>
          <button type="submit">Send</button>
        </form>
      </div>
    `;
  },
  getUserLogout: function(chat){
    return `
    <div class="logout">
      <form action="/logout" method="POST">
        <button type="submit" name="userName" value=${chat.currentUser}>Logout</button>
      </form>
    </div>
    `;
  },

  getPageRefresh:function(chat){
    return `
      <div class="refresh">
        <form action="/" method="POST">
          <button type="submit" name="userName" value=${chat.currentUser}>Refresh</button>
      </div>
    `;
  }
};
module.exports = chatWeb;
