import React from "react";
import "./Details.css";
import { Box, Button, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import BarChartIcon from "@mui/icons-material/BarChart";
import ChatIcon from "@mui/icons-material/Chat";
import { Link } from "react-router-dom";

export default function Details() {
  return (
    <Box>
      <Box className="Account">
        <Typography
          sx={{ display: "flex", justifyContent: "center" }}
          className="accountlbl"
        >
          Account
        </Typography>
        <Box className="buttons-container">
          <Button className="buttons buttons-container">
            <Link to="/settings">
              <SettingsIcon />
              <Typography className="accBtn">Settings</Typography>
            </Link>
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
