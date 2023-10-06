import React, { useEffect, useState } from "react";
import "./Feed.css";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
// -----------------------------------
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
// -----------------------------------
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Feed({
  users,
  postDataHandling,
  description,
  setDescription,
  image,
  setImage,
  handleClickOpen,
  handleClose,
  open,
  likedata
}) {
  const [inputData, setInputData] = useState("");
  const [userLoginData, setUserLoginData] = useState([]);

  return (
    <>
      <Box>
        <Box className="postfeed">
          <Box className="iconpen">
            <BorderColorIcon />
            <Typography style={{ opacity: "0.5", fontSize: "15px" }}>
              Create Post
            </Typography>
          </Box>
          <Box className="inputBox">
            <Box>
              <Box
                component="img"
                src={users.userprofile ? users.userprofile : "dfasf"}
                width={50}
                className="image"
              />
            </Box>

            <input
              placeholder="What's on your mind?"
              className="input"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
          </Box>
          <Box className="ActivityButtons">
            <Button className="activitybtn" type="file">
              <LiveTvIcon />
              LiveVideo
            </Button>
            <Button className="activitybtn">
              <PhotoSizeSelectActualIcon />
              Photos/Videos
            </Button>
            <Button
              className="activitybtn"
              onClick={() => alert("hello activity and feelings")}
            >
              <CameraAltIcon />
              Feelings/Activity
            </Button>
            <Button className="activitybtn" onClick={handleClickOpen}>
              <CameraAltIcon />
              AddPost
            </Button>
          </Box>
        </Box>
        {/* new data post */}

        {/* user's data */}

        <Box>
          {likedata.map((value, i) => {
            return (
              <Box key={i}>
                <Box className="userField">
                  <Box className="topBar">
                    <Box
                      component="img"
                      src={value.userId ? value.userId.userprofile : null}
                      width={60}
                      className="profile"
                    />
                    <Box>
                      <Typography>{value.userId ? value.name : null}</Typography>

                      <Typography style={{ opacity: "0.5" }}>
                        {value ? value.lastseen : null}
                      </Typography>
                    </Box>
                  </Box>

                  <Box>
                    <Typography sx={{ opacity: "0.7", marginTop: "1vh" }}>
                      {value.description}
                    </Typography>
                  </Box>
                  <Box className="feedimg">
                    <Box component="img" src={value.image} width={"100%"} />
                  </Box>
                  <Box className="likebtnsContainer">
                    <Button>
                      {value.like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>

        {/* scroll bar */}
        <ToastContainer />
      </Box>
      <Box>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"ADD POST AND DESCRIPTION"}</DialogTitle>
          <DialogContent>
            <form onSubmit={postDataHandling} className="addpostdialog">
              <TextField
                className="m-1"
                label="DESCRIPTION"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <TextField
                className="m-1 mt-2"
                label="IMAGE"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <Button type="submit">Add Post</Button>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>CLOSE</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
}
