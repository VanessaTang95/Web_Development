let curId=0;
let book=[

];

const generateId= () =>{
  return curId++;
};

const addBook = (data) => {
  const newId=generateId();
  book[newId]={
    "title":data.title,
    "rating":data.rating,
    "id":`${newId}`
  };
};

const findBookByFilter = (filter,filterValue) =>{
  for(let i=0;i<book.length;i++){
    if(book[i][filter]===filterValue){
      return book[i];
    }
  };
};

const updateBook = (id, {title, rating}) =>{
    let target=findBookByFilter("id",id);
    target.title=title;
    target.rating=rating;
};

const deleteBookById = (targetId) =>{
  book=book.splice(targetId,1);
}


const bookModel={
  book,
  addBook,
  findBookByFilter,
  deleteBookById,
  updateBook
};

module.exports=bookModel;
