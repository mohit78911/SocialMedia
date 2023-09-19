import React, { useEffect, useState } from "react";
import "./Feed.css";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box } from "@mui/material";

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
          <Typography style={{ opacity: "0.5", fontSize: "15px" }}>Create Post</span>
        </Box>

        <div className="inputBox">
          {userLoginData.map((val, j) => {
            return (
              <div key={j}>
                <img src={val[0].userprofile} width={50} className="image" />
              </div>
            );
          })}

          <input
            placeholder="What's on your mind?"
            className="input"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
        </div>
        <div className="ActivityButtons">
          <button className="activitybtn" type="file">
            <LiveTvIcon />
            LiveVideo
          </button>
          <button className="activitybtn">
            <PhotoSizeSelectActualIcon />
            Photos/Videos
          </button>
          <button
            className="activitybtn"
            onClick={() => alert("hello activity and feelings")}
          >
            <CameraAltIcon />
            Feelings/Activity
          </button>
        </div>
      </Box>
      {/* user's data */}
      <div>
        {userData.map((value, i) => {
          return (
            <div key={i}>
              <div className="userField">
                <div className="topBar">
                  <img src={value.userprofile} width={60} className="profile" />
                  &nbsp;
                  <div>
                    <span>{value.name.toUpperCase()}</span>
                    <br />
                    <span style={{ opacity: "0.5" }}>{value.lastseen}</span>
                  </div>
                </div>
                <div className="feedimg">
                  <img src={value.imgpost} width={"100%"} />
                </div>
                <div className="likebtnsContainer">
                  <button
                    className="likebtn"
                    onClick={() => setCount(count + 1)}
                  >
                    <FavoriteBorderIcon />
                    {count}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* scroll bar */}
    </Box>
  );
}
