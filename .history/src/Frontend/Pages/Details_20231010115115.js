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
        <Typography sx={{ display: "flex" }} className="accountlbl">
          Account
        </Typography>
        <Box className="buttons-container">
          <Button className="buttons">
            <SettingsIcon />
            <Typography className="accBtn">Settings</Typography>
          </Button>
          <Button className="buttons">
            <BarChartIcon />
            <Typography className="accBtn">Analytics</Typography>
          </Button>
          <Button className="buttons">
            <ChatIcon />
            <Typography className="accBtn">Chat</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
