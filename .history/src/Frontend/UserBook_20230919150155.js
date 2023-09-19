import React, { useEffect, useState } from "react";
import "../App.css";
import Details from "./Pages/Details";
import Feed from "./Pages/Feed";
import Navbar from "./Navbar";
import Activity from "./Pages/Activity";

function UserBook({ userData ,postDataHandler}) {
  return (
    <div className="App">
      <Navbar/>
      <div className="flex-container">
        <div className="one">
          <Details />
        </div>
        <div className="two">
          <Feed userData={userData} />
        </div>
        <div className="three">
          <Activity userData={userData}/>
        </div>
      </div>
    </div>
  );
}

export default UserBook;
