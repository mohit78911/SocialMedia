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

export default function UiAbout({
  user,
  users,
  requests,
  loadingDot,
  requestData,
  getRequestHandler,
  requestDeleteHandler,
  requestCancelHandler,
  sendFriendRequestHandler,
}) {

  const token = localStorage.getItem("token");
  const [editbtn, setEditBtn] = useState(false);
  const [userDetail, setUserDetail] = useState([]);

  // -------------multer-------------
  const hiddenFileInput = useRef(null);
  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("profilePicture", file);
    axios
      .post("http://localhost:6600/user/uploadimage", formData, {
        headers: { authorization: token },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error uploading file: ", error);
      });
  };
  // -------------multerEnd-------------

  const userDetails = () => {
    const getDetails = localStorage.getItem("userDetails");
    const details = JSON.parse(getDetails);
    // console.log("details", details);
    setUserDetail(details);
  };

  const handleClickOpen = () => {
    setEditBtn(true);
  };

  const handleClose = () => {
    setEditBtn(false);
  };

  useEffect(() => {
    userDetails();
  }, []);

  return (
    <div>
      <div>About</div>
    </div>
  );
}
