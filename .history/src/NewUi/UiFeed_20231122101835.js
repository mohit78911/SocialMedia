import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UiHome from "./UiHome";
import UiAbout from "./UiAbout";

export default function UiFeed() {
  return (
    <div>
     
        <Routes>
          <Route path="/uihome" element={<UiHome />} />
          <Route path="/about" element={<UiAbout />} />
        </Routes>
       
    </div>
  );
}
