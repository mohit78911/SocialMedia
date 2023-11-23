import { Box, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

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
  const [file, setFile] = useState(null);
  const [editbtn, setEditBtn] = useState(false);
  const [userDetail, setUserDetail] = useState([]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("profilePicture", file);

    axios
      .post("http://localhost:6600/uploadimage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data); // Handle success
      })
      .catch((error) => {
        console.error("Error uploading file: ", error); // Handle error
      });
  };

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
        return (
        <div>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload}>Upload</button>
        </div>
        ); }; export default ProfilePictureUpload;
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
