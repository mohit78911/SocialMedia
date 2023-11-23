import React from "react";
import "./UiNavbar.css";
import { NavLink } from "react-router-dom";

export default function UINavbar() {
  return (
    <div>
      <nav className="Ui-nav">
        <div className="UiNav-logo">
          U<span style={{ color: "rgb(206, 49, 49)" }}>i</span>Navbar
        </div>
        <div className="UiNav-btns">
          <div className="NavUI-btn">
            <NavLink to="/home" className="NavUI-btn">Home</NavLink>
            <NavLink to="/home"className="NavUI-btn">Contact</NavLink>
            <NavLink className="NavUI-btn">About</NavLink>
            <NavLink className="NavUI-btn">Help</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
