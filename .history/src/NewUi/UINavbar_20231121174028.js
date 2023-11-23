import React from "react";
import "./UiNavbar.css";
import { NavLink } from "react-router-dom";

export default function UINavbar() {
  return (
    <div>
      <nav className="Ui-nav">
        <div>UiNavbar</div> 
        <div className="UiNav-btns">
          <div className="NavUI-btn">
            <NavLink className="NavUI-btn">Home</NavLink>
            <NavLink className="NavUI-btn">Contact</NavLink>
            <NavLink className="NavUI-btn">About</NavLink>
            <NavLink className="NavUI-btn">Help</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
