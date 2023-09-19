import React from "react";
import "./Details.css";
import { Box, Button, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import BarChartIcon from "@mui/icons-material/BarChart";
import ChatIcon from "@mui/icons-material/Chat";

export default function Details() {
  return (
    <Box>
      <Box className="Account">
        <Typography className="accountTitle">Account</Typography>
        <div className="buttons-container">
          <Button className="buttons">
            <SettingsIcon />
            <span className="accBtn">Settings</span>
          </Button>
          <Button className="buttons">
            <BarChartIcon />
            <span className="accBtn">Analytics</span>
          </Button>
          <Button className="buttons">
            <ChatIcon />
            <span className="accBtn">Chat</span>
          </Button>
        </div>
      </Box>
    </Box>
  );
}
