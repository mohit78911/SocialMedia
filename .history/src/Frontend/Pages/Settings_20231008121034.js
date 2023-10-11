import { Box } from "@mui/material";
import React from "react";
import Navbar from "../Navbar";
import ".//Setting.css";
import EditProfileData from "./EditProfileData";

export default function Settings() {
  return (
    <Box>
      <Navbar />
      <Box className="mainContaine">
        <Box className="firstContaine">
          <EditProfileData />
        </Box>
        <Box className="secondContaine">
          <EditProfileData />
        </Box>
      </Box>
    </Box>
  );
}
