import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import UiLogin from "./UiLogin";
import UiNew from "./UiNew";
import UiHome from "./UiHome";
import UiAbout from "./UiAbout";
import UiFeed from "./UiFeed";
import UIError from "./UIError";
import axios from "axios";

export default function UIMainComp() {
  const token = localStorage.getItem("token");

  //get_logedin_user_data
  const [user, setUser] = useState([]);
  const getUserDataHandler = () => {
    axios
      .get("http://localhost:6600/userlogin/user", {
        headers: { authorization: token },
      })
      .then((result) => {
        setUser(result.data);
        localStorage.setItem("userDetails", JSON.stringify(result.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getUserDataHandler();
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<UiLogin />} />
        <Route path/>
        <Route path="/*" element={<UIError />} />
        <Route path="ui" element={<UiNew />}>
          <Route path="home" element={<UiHome user={user} />} />
          <Route path="about" element={<UiAbout user={user} />} />
        </Route>
      </Routes>
    </div>
  );
}
