import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./EditProfileData.css";
import { toast } from "react-toastify";

export default function EditProfileData({ userDetails }) {
  const [userId, setUserId] = useState([]);
  const [profilePicture, setProfilePicture] = useState("");
  const [username, setUserName] = useState("");
  const [dob, setDob] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  const getUserDataFromLocalStorage = () => {
    const user = localStorage.getItem("userDetails");
    const parseData = JSON.parse(user);
    // console.log("user", parseData);
    setUserId(parseData);
  };

  useEffect(() => {
    getUserDataFromLocalStorage();
  }, []);

  //nullvaluehandler
  const nullValueHandler = () => {
    setDob("");
    setUserName("");
    setPhonenumber("");
    setProfilePicture("");
  };

  const uploadHandler = (e) => {
    e.preventDefault();
    // Check if any field has new data
    if (!username && !profilePicture && !dob && !phonenumber) {
      toast.error("No changes ");
      return;
    }
    const newData = {};
    if (username.trim() !== "") {
      newData.name = username;
    }

    if (profilePicture.trim() !== "") {
      newData.userprofile = profilePicture;
    }

    if (dob.trim() !== "") {
      newData.dob = dob;
    }

    if (phonenumber.trim() !== "") {
      newData.phonenumber = phonenumber;
    }

    if (Object.keys(newData).length === 0) {
      toast.error("No changes made");
      return;
    }

    axios
      .put(`http://localhost:6600/user/update/${userId._id}`, newData)
      .then(() => {
        userDetails();
        console.log("upload Done!");
        nullValueHandler();
        toast.success("Profile Has been Updated!");
      })
      .catch((error) => {
        userDetails();
        console.log(error);
      });
  };

  return (
    <>
      <Box className="editComponent">
        <Box className="inputfields">
          <Box className="containe">
            <Typography sx={{ color: "#007aff" }}>EDIT YOUT PROFILE</Typography>
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
              <Button variant="contained" type="submit">
                UPDATE YOUR PROFILE
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
}
