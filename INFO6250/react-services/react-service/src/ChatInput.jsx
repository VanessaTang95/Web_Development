//this component used to input and send message
import React from 'react';
//
// class ChatInput extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       message:""
//     };
//     this.handleChange=this.handleChange.bind(this);
// //    this.handleSubmit=this.handleSubmit.bind(this);
//   }
//
//    handleChange(e){
//      this.setState({
//      message:e.target.value
//     });
//   }
//   //
// //  handleSubmit(e){
//   //   e.preventDefault();
//   //   this.props.sendMessage(this.state.message);
//   //   this.setState({message:""});
//   // }
//
//
//   render(){
//     return(
//       <form
//         onSubmit={this.props.addMessage}
//         className="send-message">
//         <input
//           disabled={this.props.disabled}
//           onChange={this.props.updatePendingMessage}
//           defaultValue={this.state.message}
//           placeholder="Type ur message and hit ENTER!"
//           type="text" />
//
//       </form>
//
//     );
//   }
// }

const ChatInput = ({
  updatePendingMessage,
  message,
  sendMessage
}) => {
  return (
    <div className="send-message">
           <input
             onChange={updatePendingMessage}
             onKeyDown={(e) =>{
               if(e.key ==="Enter"){
                 sendMessage();
               }
             }}
             value={message}
             placeholder="Type ur message and hit ENTER!"
             type="text" />

         </div>
  );
};

export default ChatInput;
