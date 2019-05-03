import React from "react";
import ChatInput from "./ChatInput";
import ChatUserList from "./ChatUserList";
import MessageList from "./MessageList";
import "./App.css";
import {sendChatMessage, getChatMessages} from "./services";

const refreshInterval=5000;

class App extends React.Component{
    constructor(){
      super();
      this.state={
        users:[
          {username:"Alice"},
          {username:"Adele"}
        ],
        messages:[
          {
           username:"Alice",
           time:"2019/04/01 09:54:33",
           text:"Happy April Fool"
         },
          {
            username:"Alice",
            time:"2019/04/01 10:15:23",
            text:"Hello!"
          }
        ],
        pendingMessage:"",
        pastId:1,
        currentId:1
      }
        this.refresh=this.refresh.bind(this);
        this.sendMessage=this.sendMessage.bind(this);
        this.updateMessageList=this.updateMessageList.bind(this);
        this.updatePendingMessage=this.updatePendingMessage.bind(this);
    }

componentDidMount(){
  this.refresh();
};

refresh(){
  const id=this.state.currentId;
  if(id!==this.state.pastId){
  getChatMessages(id)
  .then(this.updateMessageList)
  .then(this.setState({pastId:this.state.pastId+1}));
}
setInterval(this.refresh, refreshInterval);
};

updatePendingMessage(e){
  this.setState({
    pendingMessage:e.target.value
  })
};


updateMessageList= (data) =>{
  if(data){
  this.setState({
    messages:[...this.state.messages,{
    username:data.username,
    time:data.time,
    text:data.text}]
  });
}
};

sendMessage(){
  sendChatMessage(
    {username:this.state.users[this.state.users.length-1].username,
     time:this.getCurrentTime(),
     text:this.state.pendingMessage
   }).then(this.updateMessageList);

   this.setState({currentId:this.state.currentId+1});
   this.setState({
    pendingMessage:""
  });

};



    getCurrentTime(){
      let date=new Date();
      let curr_date=date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
      let curr_time=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
      return (curr_date+" "+curr_time);
    }



    render(){
      return (
        <div className="chat-app">
          <ChatUserList users={this.state.users} />
          <MessageList
            messages={this.state.messages} />
          <ChatInput
            sendMessage={this.sendMessage}
            message={this.state.pendingMessage}
            updatePendingMessage={this.updatePendingMessage}
             />
        </div>

      );
    }

}


export default App;
