import React, { useEffect, useState } from "react";
import "../App.css";
import Details from "./Pages/Details";
import Feed from "./Pages/Feed";
import Navbar from "./Navbar";
import Activity from "./Pages/Activity";
import axios from "axios";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Settings from "./Pages/Settings";

export default function UiHome() {
  const [open, setOpen] = React.useState(false);
  const [acceptedAction, setAction] = useState("accept");
  const token = localStorage.getItem("token");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //Decline or reject Request Handler
  const declineRequestHandler = () => {
    axios
      .put(
        `http://localhost:6600/friendrequest/rejectfriendrequest/${user._id}`,
        { status: "rejected" }
      )
      .then((result) => {
        console.log("requst Rejected");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>Home</div>
    </div>
  );
}
