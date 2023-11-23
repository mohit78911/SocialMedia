import React from "react";
import {
  BrowserRouter,
  NavLink,
  Outlet,
 
} from "react-router-dom";
 

export default function UiFeed() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
