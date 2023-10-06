import { Box, Button, Typography } from "@mui/material";
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

  //nullvaluehandler
  const nullValueHandler = () => {
    setUserName("");
    setDob("");
    setProfilePicture("");
    setPhonenumber("");
  };

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
        nullValueHandler();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box>
      <Box className="inputfields">
        <Box
        <Typography>EDIT YOUT PROFILE</Typography>
        <form onSubmit={uploadHandler}>
          <input
            placeholder="Name"
            className="updateinput"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            placeholder="ProfilePicture"
            className="updateinput"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
          />
          <input
            placeholder="Date Of Birth"
            className="updateinput"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <input
            placeholder="Phone Number"
            className="updateinput"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
          />
          <Button variant="outlined" type="submit">
            CHANGE
          </Button>
        </form>
      </Box>
    </Box>
  );
}
