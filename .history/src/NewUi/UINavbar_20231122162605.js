import React from "react";
import "./UiNavbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
 

export default function UINavbar() {
  //navigation from react router dom
  const location = useNavigate();
  const logOutHandler = () => {
    location("/");
    localStorage.removeItem("userLoginData");
    localStorage.removeItem("userDetails");
    localStorage.removeItem("token");
  };

  return (
    <div>
      <nav className="Ui-nav">
        <div className="UiNav-logo">
          SOC<span style={{ color: "rgb(206, 49, 49)" }}>i</span>LMED
          <span style={{ color: "rgb(206, 49, 49)" }}>i</span>A
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
