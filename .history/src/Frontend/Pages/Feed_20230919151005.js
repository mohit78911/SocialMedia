import React, { useEffect, useState } from "react";
import "./Feed.css";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function Feed({ userData }) {
  const [inputData, setInputData] = useState("");
  const [count, setCount] = useState(0);
  const [userLoginData, setUserLoginData] = useState([]);

  const getLocalStorageData = localStorage.getItem("userLoginData");
  const getDetails = () => {
    const userDetails = JSON.parse(getLocalStorageData);
    if (userDetails && userDetails.length) {
      setUserLoginData(userDetails);
    }
  };
  useEffect(() => {
    getDetails();
  }, []);

  console.log("userLoginData", userLoginData);
  return (
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
        </Box>
      </Box>
      {/* new data post */}
      <Box className="userField p-5">
        <form>
        <TextField label='Name' className='m-1'/>
        <TextField label='Email' className='m-1'/>
        <TextField label='Password' className='m-1'/>
        <TextField label='Lastseen' className='m-1'/>
        <TextField label='Userprofile' className='m-1'/>
        <TextField label='Imgpost' className='m-1'/>
        <Button>Add Data</Button>

      </Box>
      {/* user's data */}
      <Box>
        {userData.map((value, i) => {
          return (
            <Box key={i}>
              <Box className="userField">
                <Box className="topBar">
                  <Box
                    component="img"
                    src={value.userprofile}
                    width={60}
                    className="profile"
                  />

                  <Box>
                    <Typography>{value.name.toUpperCase()}</Typography>

                    <Typography style={{ opacity: "0.5" }}>
                      {value.lastseen}
                    </Typography>
                  </Box>
                </Box>
                <Box className="feedimg">
                  <Box component="img" src={value.imgpost} width={"100%"} />
                </Box>
                <Box className="likebtnsContainer">
                  <Button
                    className="likebtn"
                    onClick={() => setCount(count + 1)}
                  >
                    <FavoriteBorderIcon />
                    {count}
                  </Button>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
      {/* scroll bar */}
    </Box>
  );
}
