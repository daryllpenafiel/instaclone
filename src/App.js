import React, { Component } from 'react';
import Navbar from "./Components/Navbar";
import Userline from "./Components/Userline";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar image="./images/fav1.png" name="logo"/>
          <div className="bigContainer">
          <br></br>
              <div className="smallContainer">
                <Userline image="./images/dp1.jpg" handle="darylltheexplorer" fullname="Daryll Penafiel" posts="200" followers="653" following="598"/>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
