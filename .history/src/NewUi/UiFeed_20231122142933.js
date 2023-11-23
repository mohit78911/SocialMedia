import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import UiHome from "./UiHome";
import UiAbout from "./UiAbout";

export default function UiFeed() {
  return (
    <div>
      <div>This is feed component</div>

      <Routes>
        <Route path="/home" element={<UiHome />} />
        <Route path="/about" element={<UiAbout />} />
      </Routes>
      <div style={{padding:"5px"}}>
      <NavLink to="/ui/uifeed/home" className=''>Home</NavLink>
      <NavLink to="/ui/uifeed/about">About</NavLink>
    </div>
    </div>
  );
}
