import React, { Component } from 'react';
import {Modal, ModalHeader, ModalBody,ModalFooter,Table, Button, Input,FormGroup, Label} from 'reactstrap';
import axios from "axios";

class App extends Component {
  state={
    books:[],
    newBookModal:false,
    editBookModal:false,
    newBookData:{
      title:"",
      rating:""
    },
    editBookData:{
      id:"",
      title:"",
      rating:""
    }
  }

  componentWillMount(){
    this._refreshBooks();
  }

  toggleNewBookModal(){
    this.setState({
      newBookModal:!this.state.newBookModal
    });
  }

  addBook(){
    axios.post("/books",this.state.newBookData)
    .then((res)=>{
      let {books} =this.state;
      books.push(res.data);
      this.setState({books,
      newBookModal:false,
      newBookData:{
        title:"",
        rating:""
      }
      })
    });
  };

toggleEditBookModal(){
  this.setState({
    editBookModal:!this.state.editBookModal
  });
};

updateBook(){
  let {title, rating}=this.state.editBookData;
  axios.put("books/"+this.state.editBookData.id ,{
    title, rating
  }).then((res)=>{
    console.log(res.body);
    this._refreshBooks();
    this.setState({
      editBookModal:false,
      editBookData:{
        id:"",
        title:"",
        rating:""
      }
    });
  });
}

_refreshBooks(){
  axios.get("/books")
  .then((res)=>{
    this.setState({
      books:res.data
    })
  })
}

editBook(id,title,rating){
  this.setState({
    editBookData:{
      id,
      title,
      rating
    },
    editBookModal:!this.state.editBookModal
  })
};

deleteBook(id){
  axios.delete("/books/"+id)
  .then((res)=>{
    this._refreshBooks();
  })

}


  render() {
    let books=this.state.books.map((book)=>{
      return (
        <tr key={book.id}>
          <td>{book.id}</td>
          <td>{book.title}</td>
          <td>{book.rating}</td>
          <td>
            <Button color="success" size="sm" className="mr-2" onClick={this.editBook.bind(this, book.id, book.title, book.rating)}>Edit</Button>
            <Button color="danger" size="sm" onClick={this.deleteBook.bind(this,book.id)}>Delete</Button>
          </td>
        </tr>
      );
    });
    return (
      <div className="App container">
        <h1>Online Library</h1>

      <Button className="my-3" color="primary" onClick={this.toggleNewBookModal.bind(this)}>Add Book</Button>
     <Modal isOpen={this.state.newBookModal} toggle={this.toggleNewBookModal.bind(this)} >
       <ModalHeader toggle={this.toggleNewBookModal.bind(this)}>Add a new book</ModalHeader>
       <ModalBody>
         <FormGroup>
           <Label for="title">Title</Label>
           <Input id="title" value={this.state.newBookData.title} onChange={(e)=>{
               let {newBookData}=this.state;
               newBookData.title=e.target.value;
                 this.setState({newBookData});
             }}/>
      </FormGroup>
      <FormGroup>
        <Label for="rating">Rating</Label>
        <Input id="rating" value={this.state.newBookData.rating} onChange={(e)=>{
            let {newBookData}=this.state;
            newBookData.rating=e.target.value;
              this.setState({newBookData});
          }}/>
   </FormGroup>
       </ModalBody>
       <ModalFooter>
         <Button color="primary" onClick={this.addBook.bind(this)}>Add Book</Button>{' '}
         <Button color="secondary" onClick={this.toggleNewBookModal.bind(this)}>Cancel</Button>
       </ModalFooter>
     </Modal>

     <Modal isOpen={this.state.editBookModal} toggle={this.toggleEditBookModal.bind(this)} >
       <ModalHeader toggle={this.toggleEditBookModal.bind(this)}>Edit Book Info</ModalHeader>
       <ModalBody>
         <FormGroup>
           <Label for="title">Title</Label>
           <Input id="title" value={this.state.editBookData.title} onChange={(e)=>{
               let {editBookData}=this.state;
               editBookData.title=e.target.value;
                 this.setState({editBookData});
             }}/>
      </FormGroup>
      <FormGroup>
        <Label for="rating">Rating</Label>
        <Input id="rating" value={this.state.editBookData.rating} onChange={(e)=>{
            let {editBookData}=this.state;
            editBookData.rating=e.target.value;
              this.setState({editBookData});
          }}/>
     </FormGroup>
       </ModalBody>
       <ModalFooter>
         <Button color="primary" onClick={this.updateBook.bind(this)}>update Book</Button>{' '}
         <Button color="secondary" onClick={this.toggleEditBookModal.bind(this)}>Cancel</Button>
       </ModalFooter>
     </Modal>


        <Table>
          <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Rating</th>
                <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
