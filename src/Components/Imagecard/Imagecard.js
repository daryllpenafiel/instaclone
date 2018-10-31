import React from "react";
import "./Imagecard.css";

const Imagecard = props => (
<div className="singleCard">
    <img className="imagePost" src={props.image} alt={props.name} />
</div>
);

export default Imagecard;