import React from "react";
import "./NewUi.css";
import UINavbar from "./UINavbar";

export default function UiNew() {
  return (
    <div>
      <div className="Ui_Navbar">
        <UINavbar />
      </div>
      <div className="flexUi">
        <div className="Ui_First"><Side</div>
        <div className="Ui_Second">Feed</div>
      </div>
    </div>
  );
}
