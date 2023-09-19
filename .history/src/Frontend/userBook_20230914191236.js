
import axios from "axios";
import React, { useEffect, useState } from "react";

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
      <div>hello</div>
    </div>
  );
}

export default UserBook;
