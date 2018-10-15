import React from "react";
import "./Navbar.css";

const Navbar = props => (
<div className="navbar navbar-light bg-white p-3">
  <div className="navContainer">
    <a className="navbar-brand" href="#">
      <img src={props.image} width="40" height="40" alt={props.name} />
      Instaclone
    </a>
  </div>
</div>
);

export default Navbar;