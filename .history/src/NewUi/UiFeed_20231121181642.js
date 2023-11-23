import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UiHome from "./UiHome";
import UiAbout from "./UiAbout";

export default function UiFeed() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="home" element={<UiHome />} />
          <Route path="about" element={<UiAbout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
