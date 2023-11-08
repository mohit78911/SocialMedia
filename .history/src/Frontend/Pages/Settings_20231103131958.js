import { Box } from "@mui/material";
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
      <Box className="mainContaine">
        <Box>
          <Box
            className="editProfile"
            component="img"
            src={userDetail.userprofile}
          />
          
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
