import React from "react";
import ReactDOM from "react-dom";
import image_logo from "./images/airbnb.jpg";
import "../index.css"
export default function Navbar(){   
    return (
        <nav>
            <img className="nav-logo"
            src={image_logo} alt="" />
        </nav>
        
    )
}