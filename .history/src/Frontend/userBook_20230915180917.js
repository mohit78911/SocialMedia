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
   
  console.log("userData", userData);
  return (
    <div className="App">
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
      </div>
    </div>
  );
}

export default UserBook;
