import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../App.css";
import Details from './Pages/Details'
import Feed from './Pages/Feed'
import Activity from './Pages/Activity'

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
      <div className="flex-container">
        <div className="one">
          <Details />
        </div>
        <div className="two">
          <Feed userData={userData}/>
        </div>
        <div className="three">
          <Activity />
        </div>
      </div>
    </div>
  );
}

export default UserBook;
