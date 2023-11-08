import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import ".//Setting.css";
import EditProfileData from "./EditProfileData";

export default function Settings() {
  const [userDetail, setUserDetail] = useState([]);
  const userDetails = () => {
    const getDetails = localStorage.getItem("userDetails");
    const details = JSON.parse(getDetails);
    console.log("details", details);
    setUserDetail(details);
  };
  useEffect(() => {
    userDetails();
  }, []);

  return (
    <Box>
      <Navbar />
      <Box className="mainContaineProfile">
        <Box className="centerEditContaine">
          <Box
            className="editProfileimg"
            component="img"
            src={userDetail.userprofile}
          />
          <Typography sx={{ fontWeight: "bold", marginTop : "8px" }}>{userDetail.name}</Typography>
          <Typography>{userDetail.email}</Typography>
          <Typography>{userDetail.dob}</Typography>
          <Typography>{userDetail.phonenumber?   userDetail.phonenumber : null}</Typography>
        </Box>
      </Box>
      <Box className="mainContaine">
        <Box className="firstContaine">
          <Box>
            <EditProfileData />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
