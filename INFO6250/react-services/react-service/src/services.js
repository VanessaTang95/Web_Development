//two services, one is to refresh page every 5s
//another one is to send message

export const sendChatMessage = ({username,time,text}) => {
  return fetch(`/messages/`,{
    method:"POST",
    body:JSON.stringify({username,time,text}),
    headers: new Headers({"content-type":"application/json"})
  })
  .then(res =>{
    if(res.ok){
      return res.json();
    }else{
      return Promise.reject("Something went wrong while fetching");
    }
  });
};

export const getChatMessages = (id) => {
  return fetch(`/messages/${id}`,{
    method:"GET"
  })
  .then(res => {
    if(res.ok){
      return res.json();
    }else{
      return Promise.reject("Can't get chat messages! Error!");
    }
});
};
