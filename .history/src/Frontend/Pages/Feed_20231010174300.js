import React, { useEffect, useState } from "react";
import "./Feed.css";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Box, Button, TextField, Typography } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import FormControl from "@mui/material/FormControl";
// -----------------------------------
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import axios from "axios";
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
  likedata,
}) {
  const [inputData, setInputData] = useState("");
  //-------------------------------------------------
  const [userDetails, setUserDetails] = useState([]);
  const getUserDataFromLocalStorage = () => {
    const user = localStorage.getItem("userDetails");
    const parseData = JSON.parse(user);
    // console.log("user", parseData);
    setUserDetails(parseData);
  };

  // console.log("userid", userDetails._id);

  useEffect(() => {
    getUserDataFromLocalStorage();
  }, []);

  const [postLike, setPostlike] = useState();

  // const toggleLike = () => {
  //   if (filter.length) {
  //     setPostlike(true);
  //   } else {
  //     setPostlike(false);
  //   }
  // };

  const likeHandler = (val) => {
    const filterLikeID = likedata.filter((value) => value._id === val);
    const filterLikes = filterLikeID.filter((value) => value.like === true);

    console.log("likedata", filterLikeID);

    if (filterLikeID) {
      if (filterLikes) {
        setPostlike(false);
        const likeData = {
          like: postLike,
          // userId: likedata.userId._id,
          // postId: likedata.postId._id,
        };
        axios
          .put(`http://localhost:6600/like/update/${val}`, likeData)
          .then((res) => {
            console.log("Liked!", postLike);
            toast.success("liked", { position: "top-right" });
          })
          .catch((error) => {
            console.log("error");
            toast.error("Not Liked", { position: "top-right" });
          });
      }
    } else {
      setPostlike(true);

      console.log("true ho gya!");
    }
  };

  // console.log("dataid", likedata[1].userId._id);
  //--------------------------------------------------
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
                src={
                  users.userprofile
                    ? users.userprofile
                    : "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
                }
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
            <Box className="centerActivityBtn">
              <Button
                className="activitybtn"
                onClick={() => alert("live Videos")}
              >
                <LiveTvIcon />
                <Typography className="uploadbtn">LiveVideo</Typography>
              </Button>
              <Button
                className="activitybtn"
                onClick={() => alert("hello Photos and Videos")}
              >
                <PhotoSizeSelectActualIcon />
                <Typography className="uploadbtn">Photos/Videos</Typography>
              </Button>
              <Button
                className="activitybtn"
                onClick={() => alert("hello activity and feelings")}
              >
                <CameraAltIcon />
                <Typography className="uploadbtn">Feelings/Activity</Typography>
              </Button>
              <Button className="activitybtn" onClick={handleClickOpen}>
                <CameraAltIcon />
                <Typography className="uploadbtn">AddPost</Typography>
              </Button>
            </Box>
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
                      src={value.userId ? value.userId.userprofile : undefined}
                      width={60}
                      className="profile"
                    />
                    <Box>
                      <Typography>
                        {value.userId ? value.userId.name : undefined}
                      </Typography>

                      <Typography style={{ opacity: "0.5" }}>
                        {value.userId ? value.userId.lastseen : undefined}
                      </Typography>
                    </Box>
                  </Box>

                  <Box>
                    <Typography sx={{ opacity: "0.7", marginTop: "1vh" }}>
                      {value.postId ? value.postId.description : null}
                    </Typography>
                  </Box>
                  <Box className="feedimg">
                    <Box
                      component="img"
                      src={value.postId ? value.postId.image : null}
                      width={"100%"}
                    />
                  </Box>
                  <Box className="likebtnsContainer">
                    <Button
                      onClick={() => {
                        likeHandler(value._id);
                      }}
                    >
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
