const express=require("express");
const app=express();
const PORT=5000;

//app.use(express.static("public"));


const messages=[
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
];
let id=messages.length-1;

const nextId = () =>{
  return ++id;
}

const createNewMessage = ({username,time,text}) =>{
  id=nextId();
messages[id]=[{username,time,text}];
};

app.get("/messages/",(req,res)=>
{
  res.json(messages);
});


app.get("/messages/:id",express.json(),(req,res)=>{
  const messageId=req.params.id;
  console.log(messageId);
  const target=messages[messageId];

  res.json(target);
});

app.post("/messages",express.json(),(req,res) => {
  const {username,time,text}=req.body;
  createNewMessage({username,time,text});
  res.json({id,username,time,text});
});


app.listen(PORT,()=>{console.log(`Address is : http://localhost:${PORT}`);});
