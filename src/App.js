import React, { Component } from 'react';
import Navbar from "./Components/Navbar";
import Userline from "./Components/Userline";
import Imagecard from "./Components/Imagecard";
import images from "./picturelist.json";
import "./App.css";

class App extends Component {

  state = {
    images
  };

  render() {
    return (
      <div className="App">
        <Navbar image="./images/fav1.png" name="logo"/>
          <div className="bigContainer">
          <br></br>
              <div className="smallContainer">
                <Userline image="./images/dp1.jpg" handle="darylltheexplorer" fullname="Daryll Penafiel" posts="200" followers="653" following="598"/>
                
                <div className="row">
                {this.state.images.map(image => (
                  <div className="col-12 col-sm-6 col-md-4">
                  <Imagecard image={image.image} name={image.name}></Imagecard>
                  </div>
                  ))}
                </div>
              </div>
             </div>
          </div>
    );
  }
}

export default App;