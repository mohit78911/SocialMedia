import React from "react";
import "./UiNavbar.css";
import { NavLink } from "react-router-dom";

export default function UINavbar() {
  return (
    <div>
      <nav className="Ui-nav">
        <div className="UiNav-logo">
          SOC<span style={{ color: "rgb(206, 49, 49)" }}>i</span>LMEDA
        </div>
        <div className="UiNav-btns">
          <div className="NavUI-btn">
            <NavLink to="/ui/home" className="NavUI-btn">
              Home
            </NavLink>
            <NavLink className="NavUI-btn">Contact</NavLink>
            <NavLink to="/ui/about" className="NavUI-btn">
              About
            </NavLink>
            <NavLink className="NavUI-btn">Help</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
