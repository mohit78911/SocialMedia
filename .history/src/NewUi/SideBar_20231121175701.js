import React from "react";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div className="UISideBar">
        <div className=""></div>
      <button className="sideBar-profile">Profile</button>
      <hr />
      <button className="btn btn-primary">hello</button>
      <hr />
      <button className="btn btn-warning">hello</button>
      <hr />
      <button className="btn btn-success">hello</button>
    </div>
  );
}