import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

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
      <div>
        <div className="one">hello</div>
        <div className="two">hola</div>
        <div className="three"></div>
      </div>
    </div>
  );
}

export default UserBook;
