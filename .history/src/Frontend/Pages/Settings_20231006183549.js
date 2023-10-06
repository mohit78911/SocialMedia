import { Box } from "@mui/material";
import React from "react";
import Navbar from "../Navbar";
import ".//Setting.css"
import EditData from "./EditData";

export default function Settings() {
  return (
    <Box>
      <Navbar />
      <Box className='mainContaine'>
        <Box className="firstContaine">
            <ProfilePictureUpload/>
        </Box>
        <Box className="secondContaine">
            <ProfilePictureUpload/>
        </Box>
      </Box>
       
    </Box>
  );
}
