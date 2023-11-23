import React from "react";
import "./SideBar.css";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="UISideBar">
      <div className="sideBarButtons">
        <NavLink className="sideBar-profile mb-1" to="/ui/home">
          Home
        </NavLink>
        <NavLink className="sideBar-profile mb-1" to="/ui/about">
          Ed<span style={{ color: "rgb(206, 49, 49)" }}>i</span>t Prof<span style={{ color: "rgb(206, 49, 49)" }}>i</span>le
        </NavLink>
        <NavLink className="sideBar-profile mb-1">Profile</NavLink>
        <NavLink className="sideBar-profile mb-1">Profile</NavLink>
      </div>
      <hr style={={{}}}></hr>
      <div className="sideBarButtons">
        <NavLink className="sideBar-profile mb-1">Profile</NavLink>
      </div>
      <hr />
      <div className="sideBarButtons">
        <NavLink className="sideBar-profile mb-1">Profile</NavLink>
        <NavLink className="sideBar-profile mb-1">Profile</NavLink>

        <NavLink className="sideBar-profile mb-1">Profile</NavLink>
      </div>
      <hr />
      <div className="sideBarButtons">
        <NavLink className="sideBar-profile mb-1">Profile</NavLink>
        <NavLink className="sideBar-profile mb-1">Profile</NavLink>
      </div>
    </div>
  );
}
