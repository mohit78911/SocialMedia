import React from "react";
import "./NewUi.css";
import UINavbar from "./UINavbar";
import SideBar from "./SideBar";
import UiFeed from "./UiFeed";
import { Route, Routes } from "react-router-dom";
import UiHome from "./UiHome";
import UiAbout from "./UiAbout";

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
        <div className="Ui_Second">
          <UiFeed />
        </div>
      </div>
      <Routes>
        <Route path="uifeed" element={<UiFeed />}>
          <Route path="ui/home" element={<UiHome />} />
          <Route path="about" element={<UiAbout />} />
        </Route>
      </Routes>
    </div>
  );
}