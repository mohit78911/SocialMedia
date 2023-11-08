import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Feed.css";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import DeleteIcon from "@mui/icons-material/Delete";
// ----------------------------------
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import axios from "axios";
import { toast } from "react-toastify";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function UploadComponent({
  user,
  open,
  image,
  setImage,
  description,
  handleClose,
  setDescription,
  handleClickOpen,
  postDataHandling,
}) {
  const [inputData, setInputData] = useState("");
  const [status, setStatus] = useState([]);
  const token = localStorage.getItem("token");
  //get_Status_data
  const getStatusHandler = () => {
    axios
      .get("http://localhost:6600/status", {
        headers: { authorization: token },
      })
      .then((res) => {
        setStatus(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //posting_status
  const postingStatusHandler = () => {
    if (inputData.trim().length === 0) {
      toast.error("Something Require...");
    } else {
      const statusData = {
        status: inputData,
        userId: user._id,
      };
      axios
        .post("http://localhost:6600/status/poststatus", statusData, {
          headers: { authorization: token },
        })
        .then((res) => {
          setInputData("");
          getStatusHandler();
          console.log("Status Post Done!");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  //deleting_status
  const statusDeleteHandler = (id) => {
    axios
      .delete(`http://localhost:6600/status/delete/${id}`, {
        headers: { authorization: token },
      })
      .then((res) => {
        getStatusHandler();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getStatusHandler();
  }, []);

  return (
    <>
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
                user.userprofile
                  ? user.userprofile
                  : "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
              }
              width={55}
              className="image"
            />
          </Box>

          <input
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                postingStatusHandler();
              }
            }}
            placeholder="What's on your mind?"
            className="input"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
        </Box>
        <Box className="ActivityButtons">
          <Box>
            <Button className="activitybtn" onClick={postingStatusHandler}>
              <LiveTvIcon />
              <Typography className="uploadbtn">PostStatus</Typography>
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
          </Box>
        </Box>
      </Box>

      <Box className="postfeed">
        <Box className="centerbtn">
          <Button
            className="activitybtnaddpost m-1"
            fullWidth
            onClick={handleClickOpen}
          >
            <CameraAltIcon />
            <Typography className="uploadbtn ">AddPost</Typography>
          </Button>
        </Box>
      </Box>
      {/* ittrating status with map function  */}
      <Box>
        {status.map((val, i) => {
          return (
            <>
              <Box className="postfeed" key={i}>
                <Box className="mainStatusbox" key={i}>
                  <Box className="statusbox" key={i}>
                    <Box
                      className="statusimg"
                      component="img"
                      src={val ? val.userId.userprofile : undefined}
                    />
                    &nbsp;&nbsp;
                    <Box>
                      <Typography sx={{ opacity: " 0.8" }}>
                        {val ? val.userId.name : undefined}
                      </Typography>
                      <Typography>{val ? val.status : undefined}</Typography>
                    </Box>
                  </Box>
                  <Button
                    onClick={() => {
                      statusDeleteHandler(val._id);
                    }}
                  >
                    <DeleteIcon />
                  </Button>
                </Box>
              </Box>
            </>
          );
        })}
      </Box>

      {/* --- dialog box for posting posts --- */}
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
            <Box className="formControl">
              <FormControl className="addpostdialog">
                <TextField
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      postDataHandling();
                    }
                  }}
                  className="m-1"
                  label="DESCRIPTION"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <TextField
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      postDataHandling();
                    }
                  }}
                  className="m-1 mt-2"
                  label="IMAGE"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
                <Button type="submit" onClick={postDataHandling}>
                  Add Post
                </Button>
              </FormControl>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                handleClose();
                setImage("");
                setDescription("");
              }}
            >
              CLOSE
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
}
