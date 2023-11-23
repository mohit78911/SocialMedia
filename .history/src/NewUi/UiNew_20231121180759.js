import React from "react";
import "./NewUi.css";
import UINavbar from "./UINavbar";
import SideBar from "./SideBar";
import UiFeed from "./UiFeed";

export default function UiNew() {
  return (
    <div>
      <div className="Ui_Navbar">
        <UINavbar />
      </div>
      <div className="flexUi">
        <div className="Ui_First">
          <SideBar />
        </div>
        <div className="Ui_Second"><UiFeed/></div>
      </div>
    </div>
  );
}
