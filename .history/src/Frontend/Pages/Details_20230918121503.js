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
      </div>
    </div>
  );
}
