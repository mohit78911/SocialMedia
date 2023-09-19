import React from "react";
import "./Details.css";
import { Button } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import BarChartIcon from "@mui/icons-material/BarChart";
import ChatIcon from "@mui/icons-material/Chat";

export default function Details() {
  return (
    <div>
      <div className="Account">
        <span className="accountTitle">Account</span>
        <div className="buttons-container">
          <Button className="buttons">
            <SettingsIcon /><span>Settings</span>
            
          </Button>
          <Button className="buttons">
            <BarChartIcon /><span></span>
            Analytics
          </Button>
          <Button className="buttons">
            <ChatIcon />
            Chat
          </Button>
        </div>
      </div>
    </div>
  );
}
