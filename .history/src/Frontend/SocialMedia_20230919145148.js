import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import UserBook from "./UserBook";
import Login from "./Pages/Login";
// import cookie from "cookie-parser";
// console.log("cookie", cookie);

export default function SocialMedia() {
  const [userData, setUserData] = useState([]);
  const getDataHandler = () => {
    axios
      .get("http://localhost:5500/userdata")
      .then((result) => {
        // console.log(result.data);
        setUserData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getDataHandler();
  }, []);
  // console.log("userData", userData);

  const postDataHandler = ()=>{
    axis
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login userData={userData} />} />
        <Route path="/home" element={<UserBook userData={userData} />} />
      </Routes>
    </div>
  );
}
