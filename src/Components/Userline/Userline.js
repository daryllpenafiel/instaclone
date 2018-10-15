import React from "react";
import "./Userline.css";

const Userline = props => (
    <div className="p-5">
    <div className="row">
        <div className="col-md-3 prof-pic-area">
        <img className="prof-pic" src={props.image} alt={props.name} />
        </div>

        <div className="col-md-9">
            <div className="row">
                <p className="handle">{props.handle}</p>
            </div>

            <div class="row mb-3">
                <div className="col-md-3"><span className="bold">{props.posts}</span> Posts</div>
                <div className="col-md-3"><span className="bold">{props.followers}</span> Followers</div>
                <div className="col-md-3"><span className="bold">{props.following}</span> Following</div>
            </div>

            <div className="row">
                <p className="bold fullname">{props.fullname}</p>
            </div>
        </div>
    </div>
    </div>
    );
    
export default Userline;

