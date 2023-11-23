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
