import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function UiFeed() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="home" element={<UiHome}/>
        <Route path="home" element={}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
