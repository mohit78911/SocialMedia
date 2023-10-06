import React, { useState, useEffect } from "react";

export default function ProfilePictureUpload() {
  const [userDetails, setUserDetails] = useState([]);

  const getUserDataFromLocalStorage = () => {
    const user = localStorage.getItem("userDetails");
    const detailsParse = JSON.parse(user);
    console.log("userdetails", detailsParse._id);
    setUserDetails(detailsParse);
  };

  useEffect(() => {
    getUserDataFromLocalStorage();
    setTimeout(() => {
      console.log("localuser", userDetails);
      console.log("localuser_id", userDetails[0]._id);
    }, 3000);
  }, []);

  return (
    <div>
      <div style={{ textAlign: "center" }}>hello</div>
    </div>
  );
}
