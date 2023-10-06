import axios from "axios";
import React, { useState, useEffect } from "react";

export default function ProfilePictureUpload() {
  const [userDetails, setUserDetails] = useState([]);
  const [profilePicture, setProfilePicture] = useState("");

  const getUserDataFromLocalStorage = () => {
    const user = localStorage.getItem("userDetails");
    const parseData = JSON.parse(user);
    console.log("user", parseData);
    setUserDetails(parseData);
  };

  console.log("userid", userDetails._id);

  const getIdHandler = async () => {
    await console.log("userid", userDetails._id);
  };

  useEffect(() => {
    getUserDataFromLocalStorage();
  }, []);

  // profilePictureUploadHandler
  const uploadHandler = (e) => {
    e.preventDefault();
    const newData = {
      userprofile: profilePicture,
    };
    axios
      .put(`http://localhost:6600/user/update/${userDetails._id}`, newData)
      .then(() => {
        console.log("upload Done!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>hello</div>
      <div>
        uploadingSection
        <form onSubmit={uploadHandler}>
          <input
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
