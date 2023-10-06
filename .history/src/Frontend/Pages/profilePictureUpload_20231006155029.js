import { Box } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./ProfilePictureUpload.css";

export default function ProfilePictureUpload() {
  const [userDetails, setUserDetails] = useState([]);
  const [profilePicture, setProfilePicture] = useState("");
  const [username, setUserName] = useState("");
  const [dob, setDob] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  const getUserDataFromLocalStorage = () => {
    const user = localStorage.getItem("userDetails");
    const parseData = JSON.parse(user);
    console.log("user", parseData);
    setUserDetails(parseData);
  };

  console.log("userid", userDetails._id);

  useEffect(() => {
    getUserDataFromLocalStorage();
  }, []);

  // profilePictureUploadHandler
  const uploadHandler = (e) => {
    e.preventDefault();
    const newData = {
      userprofile: profilePicture,
      name: username,
      dob: dob,
      phonenumber: phonenumber,
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
    <Box>
      <Box className="inputfields">
        <form onSubmit={uploadHandler}>
          <input placeholder="name" className="input" />
          <input placeholder="ProfilePicture" />
          <input placeholder="Date Of Birth" />
          <input placeholder="Phonenumber" />
        </form>
      </Box>
    </Box>
  );
}
