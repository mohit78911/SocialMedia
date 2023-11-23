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
        <Route path="/ui" element={<UiNew />} />
        <Route path="/*" element={<UIError />} />
        <Route path="/uifeed" element={<UiFeed/>}>
          <Route path="home" element={<UiHome/>}/>
          <Route path="home" element={<UiAbout/>}/>
        </Route>
          
       
      </Routes>
    </div>
  );
}
