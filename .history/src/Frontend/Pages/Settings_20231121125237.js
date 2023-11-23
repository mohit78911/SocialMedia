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
          <img src="data:image/jpeg;base64,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" width={100} typeof="file"/>
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
