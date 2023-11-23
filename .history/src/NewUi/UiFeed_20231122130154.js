import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import UiHome from "./UiHome";
import UiAbout from "./UiAbout";

export default function UiFeed() {
  return (
    <div>
      This is feed component
      {/* <Routes>
        <Route path="/home" element={<UiHome />} />
        <Route path="/about" element={<UiAbout />} />
      </Routes> */}
      <NavLink to="//home">Home</NavLink>
      <NavLink to="/uifeed/about">About</NavLink>
    </div>
  );
}
