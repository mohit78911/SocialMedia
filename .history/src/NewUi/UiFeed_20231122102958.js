import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UiHome from "./UiHome";
import UiAbout from "./UiAbout";

export default function UiFeed() {
  return (
    <div>
      <UiHome />
      <Routes>
           
        <Route path="/ui/about" element={<UiAbout /> 
      </Routes>
    </div>
  );
}
