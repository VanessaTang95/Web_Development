import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

class App extends React.Component{
  async handleSearchSubmit(input){
    const response=await axios.get('https://api.unsplash.com/search/photos',{
      params:{query:input},
      headers:{
        Authorization:"Client-ID 7ebddd362e523a9eb6f43b1a1c142618b23f692c43b00a295c6acf842dc3f9a6"
      }
    });
  }

  render(){
    return (
      <div className="ui container" style={{marginTop:"10px"}}>
           <SearchBar handleSearchSubmit={this.handleSearchSubmit}/>
      </div>
    );
};
};
export default App;
