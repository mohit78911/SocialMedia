import React, { useState, useEffect } from "react";

export default function ProfilePictureUpload() {
  const [userDetails, setUserDetails] = useState([]);

  const getUserDataFromLocalStorage = () => {
    const user = localStorage.getItem("userDetails");
    const detailsParse = JSON.parse(user);
  console.log("userdetails", userDetails);
   
  };

  useEffect(() => {
    getUserDataFromLocalStorage();
  }, []);
  console.log("userdetails", userDetails);
  return (
    <div>
      <div style={{ textAlign: "center" }}>hello</div>
    </div>
  );
}
