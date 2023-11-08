import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Navbar from "../Navbar";
import ".//Setting.css";
import EditProfileData from "./EditProfileData";

export default function Settings() {
  const [UserDetail,setUserDetaile]
  const userDetails = () => {
    const getDetails = localStorage.getItem("userDetails");
    const details = JSON.parse(getDetails);
    console.log("details", details);

  };
  useEffect(() => {
    userDetails();
  }, []);

  return (
    <Box>
      <Navbar />
      <Box className="mainContaine">
        <Box>
          <Box component="img" />
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
