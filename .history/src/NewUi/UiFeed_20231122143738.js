import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import UiHome from "./UiHome";
import UiAbout from "./UiAbout";

export default function UiFeed() {
  return (
    <div>
      <div>This is feed component</div>

      <Routes>
        <Route path="/homie" element={<UiHome />} />
        <Route path="/aboute" element={<UiAbout />} />
      </Routes>
      <div style={{ padding: "5px" }}>
        <NavLink to="/ui/uifeed/homie" className="m-1">
          Home
        </NavLink>
        <NavLink to="/ui/uifeed/aboute">About</NavLink>
      </div>
    </div>
  );
}
