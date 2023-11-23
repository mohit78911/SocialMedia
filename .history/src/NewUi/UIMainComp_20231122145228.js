// UIMainComp.js
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import UiLogin from "./UiLogin";
import UiNew from "./UiNew";
import UiHome from "./UiHome";
import UiAbout from "./UiAbout";
import UiFeed from "./UiFeed";
import UIError from "./UIError";

export default function UIMainComp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UiLogin />} />
        <Route path="/*" element={<UIError />} />
        <Route path="ui" element={<UiNew />}>
          <Route path="uifeed" element={<UiFeed />}>
            <Route path="" element={Navigatet}/>
            <Route path="home" element={<UiHome />} />
            <Route path="about" element={<UiAbout />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
