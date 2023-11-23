import React from "react";
import "./SideBar.css";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="UISideBar">
      <div className="sideBarButtons">
        <NavLink className="sideBar-profile mb-1" to="/uifeed/home">
          home
        </NavLink>
        <NavLink className="sideBar-profile mb-1" to="/uifeed/about">
          About
        </NavLink>
        <NavLink className="sideBar-profile mb-1">Profile</NavLink>
        <NavLink className="sideBar-profile mb-1">Profile</NavLink>
      </div>
      <hr />
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
