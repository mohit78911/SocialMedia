import React from "react";
import {
  BrowserRouter,
  NavLink,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import UiHome from "./UiHome";
import UiAbout from "./UiAbout";

export default function UiFeed() {
  return (
    <div>
      <div>This is feed component</div>
      <Routes>
        <Route path="/ui/uifeed/home" element={<UiHome />} />
        <Route path="/ui/uifeed/about" element={<UiAbout />} />
      </Routes>
      <div style={{ padding: "5px" }}>
        <NavLink to="/ui/uifeed/home" className="m-1">
          Home
        </NavLink>
        <NavLink to="/ui/uifeed/about">About</NavLink>
      </div>
      <Outlet />
    </div>
  );
}
