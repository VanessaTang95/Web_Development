import React from "react";

function ChatUser(props){
  return(
    <li><div className="username">{props.username}</div></li>

  );
}

export default ChatUser;
