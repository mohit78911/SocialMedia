import { Box, Typography, Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

import "../Frontend/Pages/Setting.css";
import EditProfileData from "../Frontend/Pages/EditProfileData";
import FriendsList from "../Frontend/Pages/FriendsList";
// --------------------------------------
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});


export default function UiAbout({user}) {
  return (
    <div>
      <div>About</div>
    </div>
  );
}
