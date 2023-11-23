import React from "react";
import { Outlet } from "react-router-dom";

export default function UiFeed() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
