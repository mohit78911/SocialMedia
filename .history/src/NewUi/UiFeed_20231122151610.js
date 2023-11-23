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
      hello this is feed page
      <NavLink to="/ui/home" className="m-1">
        Home
      </NavLink>
      <NavLink to="/ui/uifeed/about">About</NavLink>
      <Outlet/>
    </div>
  );
}
