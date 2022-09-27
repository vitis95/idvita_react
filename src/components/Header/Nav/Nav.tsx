import "./Nav.css";
import React from "react";
import Logo from "../../../img/main-logo.png";

export const Nav = () => {
    return (

    
    <div className="nav-header_container">
        <div className="nav-header_logo">
        <img src={Logo} alt="" />
        </div>
        <div className="nav-header_nav">
            <ul>
                <li>home</li>
                <li>chi sono</li>
                <li>blog</li>
                <li>contattami</li>
                <li>risorse</li>
            </ul>
        </div>
    </div>
    )
}