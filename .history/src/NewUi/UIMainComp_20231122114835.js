// UIMainComp.js
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import UiLogin from "./UiLogin";
import UiNew from "./UiNew";
import UiHome from "./UiHome";
import UiAbout from "./UiAbout";
import UiFeed from "./UiFeed";

export default function UIMainComp() {
  return (
    <div>
      <UiNew />
      {/* <Routes>
        <Route path="/" element={<UiLogin />} />
        <Route path="/" element={<UiNew />} />
        <Route path="uifeed" element={<UiFeed />}>
          <Route path="home" element={<UiHome />} />
          <Route path="about" element={<UiAbout />} />
        </Route>
      </Routes> */}
      <Routes>
        <Route path
      </Routes>
    </div>
  );
}
