import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../App.css";
import Details from "./Pages/Details";
import Feed from "./Pages/Feed";
import Activity from "./Pages/Activity";
import Login from "./Pages/Login";
import { Route, Routes } from "react-router-dom";

function UserBook() {
  const [userData, setUserData] = useState([]);
  const getDataHandler = () => {
    axios
      .get("http://localhost:3800/userdata")
      .then((result) => {
        console.log(result.data);
        setUserData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getDataHandler();
  }, []);
  console.log("userData", userData);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" le/>
      </Routes>
      {/* <br />
      <div className="flex-container">
        <div className="one">
          <Details />
        </div>
        <div className="two">
          <Feed userData={userData} />
        </div>
        <div className="three">
          <Activity />
        </div>
      </div> */}
      <Login userData={userData} />
    </div>
  );
}

export default UserBook;
