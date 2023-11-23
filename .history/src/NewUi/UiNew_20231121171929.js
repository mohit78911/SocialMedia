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
        <div className="Ui_First">side_Navbar</div>
        <div className="Ui_Second">Feed</div>
      </div>
    </div>
  );
}
