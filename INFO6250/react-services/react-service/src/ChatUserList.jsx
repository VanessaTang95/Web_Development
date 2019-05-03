import React from "react";
import ChatUser from "./ChatUser";

class ChatUserList extends React.Component{
  render(){

    return (
      <div className="user-list">
        <ul>
          <h3>Users</h3>
            {this.props.users.map((user,index) => {
              return <ChatUser key={index} username={user.username} />
            })
            }
        </ul>
      </div>


    );
  }
}

export default ChatUserList;
