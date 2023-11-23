import { Box, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../Navbar";
import ".//Setting.css";
import EditProfileData from "./EditProfileData";
import FriendsList from "./FriendsList";
// --------------------------------------
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default function Settings({
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
  const [editbtn, setEditBtn] = useState(false);
  const [userDetail, setUserDetail] = useState([]);

  // -------------multer-------------
  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profilePicture", file);

    axios
      .post("http://localhost:6600/user/uploadimage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
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
    <Box>
      <Navbar
        users={users}
        requests={requests}
        loadingDot={loadingDot}
        requestData={requestData}
        getRequestHandler={getRequestHandler}
        requestCancelHandler={requestCancelHandler}
        sendFriendRequestHandler={sendFriendRequestHandler}
        requestDeleteHandler={requestDeleteHandler}
      />
      <Box className="mainContaineProfile">
        <Box className="centerEditContaine">
          <Box
            className="editProfileimg"
            component="img"
            src={userDetail.userprofile}
          />
          <Typography sx={{ fontWeight: "bold", marginTop: "8px" }}>
            {userDetail.name}
          </Typography>
          <Typography>{userDetail.email}</Typography>
          <Typography>{userDetail.dob}</Typography>
          <Typography>
            {userDetail.phonenumber ? (
              <Typography>+91 {userDetail.phonenumber}</Typography>
            ) : null}
          </Typography>
          <Button onClick={handleClickOpen}>Edit Profile</Button>
        </Box>
        {/* ---------multer--------- */}

        <div>
          <img src="data:image/png;base64,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" width={100} typeof="file"/>
          <form onSubmit={handleUpload} enctype="multipart/form-data">
            <input type="file" onChange={handleFileChange} />
            <button type="submit">Upload</button>
          </form>
        </div>

        {/* ---------multer_end--------- */}
      </Box>
      <Box>
        <FriendsList user={user} />
      </Box>

      {/*dialog box for mui */}
      <Box>
        <Dialog
          open={editbtn}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"EDIT YOUR PROFILE INFORMATION"}</DialogTitle>
          <DialogContent>
            <Box className="editprofileinfo">
              <Box>
                <EditProfileData userDetails={userDetails} />
              </Box>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
}
