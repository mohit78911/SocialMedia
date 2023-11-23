import React from "react";
import { Route, Routes } from "react-router-dom";
import UiLogin from "./UiLogin";
import UiNew from "./UiNew";

export default function UIMainComp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UiLogin />} />
        <Route path="/ui" element={<UiNew />} />
      </Routes>
    </div>
  );
}
