import React, { useState, useEffect } from "react";

export default function ProfilePictureUpload() {
  const [userDetails, setUserDetails] = useState([]);

  const getUserDataFromLocalStorage = () => {
    const user = localStorage.getItem("userDetails");
    const detailsParse = JSON.parse(user);
    console.log("userdetails", detailsParse._id);
    setUserDetails(detailsParse);
    setTimeout(() => {
        
    }, 3000);
  };

  useEffect(() => {
    getUserDataFromLocalStorage();
  }, []);

  return (
    <div>
      <div style={{ textAlign: "center" }}>hello</div>
    </div>
  );
}
