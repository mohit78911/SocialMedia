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
