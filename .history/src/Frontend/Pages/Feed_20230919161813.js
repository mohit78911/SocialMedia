import React, { useEffect, useState } from "react";
import "./Feed.css";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function Feed({
  userData,
  postDataHandler,
  name,
  setName,
  email,
  setEmail,
  setPassword,
  password,
  lastseen,
  setLastSeen,
  imgpost,
  setImgpost,
  setUserProfile,
  userProfile,
}) {
  const [inputData, setInputData] = useState("");
  const [count, setCount] = useState(0);
  const [userLoginData, setUserLoginData] = useState([]);f

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
        <form onSubmit={postDataHandler}>
          <TextField
            label="Name"
            className="m-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Email"
            className="m-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            className="m-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Lastseen"
            className="m-1"
            value={lastseen}
            onChange={(e) => setLastSeen(e.target.value)}
          />
          <TextField
            label="Userprofile"
            className="m-1"
            value={userProfile}
            onChange={(e) => setUserProfile(e.target.value)}
          />
          <TextField
            label="Imgpost"
            className="m-1"
            value={imgpost}
            onChange={(e) => setImgpost(e.target.value)}
          />
          <br />
          <Button type="submit">Add Data</Button>
        </form>
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
