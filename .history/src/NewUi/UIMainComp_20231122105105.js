import React from "react";
import { Route, Routes } from "react-router-dom";
import UiLogin from "./UiLogin";
import UiNew from "./UiNew";
import UiHome from "./UiHome";
import UiAbout from "./UiAbout";
import UiFeed from "./UiFeed";

export default function UIMainComp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UiLogin />} />
        <Route path="/ui" element={<UiNew />} />
        <Route path="uifeed" element={<UiFeed />}>
          <Route path="/ui/home" element={<UiHome />} />
          <Route path="/ui/about" element={<UiAbout />} />
        </Route>
      </Routes>
    </div>
  );
}
