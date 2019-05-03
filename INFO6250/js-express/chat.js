//jshint esversion:6
const users = {
    // "Amit": "Amit",
    // "Bao": "Bao",
};

const messages = [
  // {
  //   sender: "Amit",
  //   timestamp: new Date("2019-01-01 19:20:00"),
  //   text: "You up?",
  // },
  // {
  //   sender: "Bao",
  //   timestamp: new Date("2019-01-01 19:21:00"),
  //   text: "Yeah, still working on this INFO6250 work, but I keep getting distracted by cat videos",
  // }
];

const currentUser="";

function addMessage({ sender, timestamp, text }) {
  messages.push({ sender, timestamp, text });
}

function addUsers(username){
  users[username]=username;
}

function deleteUsers(username){
  delete users[username];
}


const chat = {
  currentUser,
  users,
  messages,
  addMessage,
  addUsers,
  deleteUsers,
};

module.exports = chat;
