import { Box } from "@mui/material";
import React from "react";
import Navbar from "../Navbar";
import ".//Setting.css";
import EditProfileData from "./EditProfileData";

export default function Settings() {

  const userDetails = ()=>{
    const getDetails
  }
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
