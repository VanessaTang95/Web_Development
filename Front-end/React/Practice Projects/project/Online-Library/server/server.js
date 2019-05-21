//A server need to read and add

const express= require("express");
const book = require("./bookModel");
const app=express();
const Port=5000;

app.get("/books",express.json(),(req,res)=>{
  res.json(book.book);
});

app.post("/books",express.json(),(req,res)=>{
  const content=req.body;
  const newBook=book.addBook(content);
  const filter="title";
  res.json(book.findBookByFilter(filter,content.title));
});

app.get("/books/:id",express.json(),(req,res) => {
  const targetId=req.params.id;
  const filter="id";
  res.json(book.findBookByFilter(filter,targetId));
});

app.put("/books/:id",express.json(),(req,res)=>{
  const updateId=req.params.id;
  console.log(updateId);
  console.log(req.body);
  const {title,rating}=req.body;
  book.updateBook(updateId,{title,rating});
  res.json(book.findBookByFilter("id",updateId));
});

app.delete("/books/:id",(req,res) => {
  const deletedId=req.params.id;
  res.json(book.deleteBookById(deletedId));
});


app.listen(Port,()=>{console.log(`The server is running on ${Port}`);});
