import React from "react";
import "./UiNavbar.css";
import { NavLink } from "react-router-dom";

export default function UINavbar() {
  return (
    <div>
      <nav className="Ui-nav">
        <div>UiNavbar</div>&nbsp;
        <div className="UiNav-btns">
          <div className="NavUI-btn">
            <NavLinkclassName="NavUI-btn">Home</NavLink>
            <NavLink>Contact</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Help</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
