import React, { Component } from 'react';
import Navbar from "./Components/Navbar";
import Userline from "./Components/Userline";
import Imagecard from "./Components/Imagecard";
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
                
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-4">
                    <Imagecard image="./images/iceland.PNG" name="Blue Lagoon"></Imagecard>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4">
                    <Imagecard image="./images/paris.PNG" name="Paris"></Imagecard>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4">
                    <Imagecard image="./images/couch.PNG" name="Couch"></Imagecard>
                  </div>
                </div>            

                <div className="row">
                  <div className="col-12 col-sm-6 col-md-4">
                    <Imagecard image="./images/japan.PNG" name="Japan"></Imagecard>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4">
                    <Imagecard image="./images/amsterdam.PNG" name="Amsterdam"></Imagecard>
                  </div>
                  <div className="col-12 col-sm-6 col-md-4">
                    <Imagecard image="./images/books.PNG" name="Books"></Imagecard>
                  </div>
                </div>
                             
              </div>
             </div>
          </div>
    );
  }
}

export default App;
