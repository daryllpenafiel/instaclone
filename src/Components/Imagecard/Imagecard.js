import React from "react";
import "./Imagecard.css";

const Imagecard = props => (
<div className="singleCard">
    <img className="imagePost" src={props.image} alt={props.name} />
    <p>
        <i class="far fa-heart"></i> <span> {props.likes} </span>
        <i class="far fa-comment"></i>
    </p>
</div>
);

export default Imagecard;