import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./EditProfileData.css";

export default function EditProfileData() {
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
    if(profilePicture.trim() === ""){
      toast.error("profile Picture Required")
    }else if(name.trim() === ""){
      toast.error("Name is required")
    }else if(dob.trim()=== ""){
      toast.error("Date Of Birth is required")
    }else if(phonenumber.trim()=== ""){
      toast.error("Phonenumber is required")
    }else{
      
    }
    
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