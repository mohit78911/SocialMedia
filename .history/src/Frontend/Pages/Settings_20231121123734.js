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
