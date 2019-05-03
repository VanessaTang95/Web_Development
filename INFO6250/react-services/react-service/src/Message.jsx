import React from "react";

function Message(props){
  return (
    <div className="message">
      <div className="username">{props.username}</div>
      <div className="time">{props.time}</div>
      <div className="text">{props.text}</div>
    </div>
  );
}

export default Message;
