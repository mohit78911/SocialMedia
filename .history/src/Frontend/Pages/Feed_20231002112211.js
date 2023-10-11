import React, { useEffect, useState } from "react";
import "./Feed.css";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
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

export default function Feed() {
  const [inputData, setInputData] = useState("");
  const [userLoginData, setUserLoginData] = useState([]);
  const [postData, setPostData] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //get_Data_From_LocalStorage
  const getLocalStorageData = localStorage.getItem("userLoginData");
  const getDetails = () => {
    const userDetails = JSON.parse(getLocalStorageData);
    if (userDetails && userDetails.length) {
      setUserLoginData(userDetails);
    }
  };

  //get_Post_Data
  const getPostDataHandler = () => {
    axios
      .get("http://localhost:6600/post")
      .then((result) => {
        // console.log("postData", result);
        setPostData(result.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getDetails();
    getPostDataHandler();
  }, []);
  console.log("postData", postData);
  // console.log("userLoginData", userLoginData);

  //adding_post_data
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const postDataHandling = (e) => {
    e.preventDefault();
    if (description === "") {
      toast.error("please fill description");
    } else if (image === "") {
      toast.error("please fill image section");
    } else {
      let newPostData = {
        description: description,
        image: image,
        userLoginData[0]: r ,
      };
      axios
        .post("http://localhost:6600/post/post", newPostData)
        .then(() => {
          toast.success("data added done!");
          getPostDataHandler();
          handleClose();
        })
        .catch((error) => {
          toast.error("data can't added...");
        });
    }
  };
  // console.log("userlogindata", userLoginData[0].name);
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
            {userLoginData.map((val, j) => {
              return (
                <Box key={j}>
                  <Box
                    component="img"
                    src={val[0].userprofile}
                    width={50}
                    className="image"
                  />
                </Box>
              );
            })}
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
          {postData.map((value, i) => {
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
                      <Typography>
                        {value.userId ? value.userId.name : null}
                      </Typography>

                      <Typography style={{ opacity: "0.5" }}>
                        {value.userId ? value.userId.lastseen : null}
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
                  <Box className="likebtnsContainer"></Box>
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