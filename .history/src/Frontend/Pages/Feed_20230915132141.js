import React, { useState } from "react";
import "./Feed.css";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import BorderColorIcon from "@mui/icons-material/BorderColor";

export default function Feed({ userData }) {
  const [inputData, setInputData] = useState("");
  return (
    <div>
      <div className="postfeed">
        <div className="iconpen">
          <BorderColorIcon />
          <span style={{ opacity: "0.5", fontSize: "15px" }}>Create Post</span>
        </div>

        <div className="inputBox">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAts3KaqElgmvv6KwDztGs5B5DpnwwVLDYcv08OR1m7q5rf1eyJNb0OlZLUKlZOg-q400&usqp=CAU"
            width={60}
            className="img"
          />
          <input
            placeholder="What's on your mind?"
            className="input"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
        </div>
        <div className="ActivityButtons">
          <button className="activitybtn">
            <LiveTvIcon />
            Live Video
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
      </div>
      {/* table feed */}
      <div>
        {userData.map((value) => {
          return (
            <div
            <div className="userField">
               
                <div>
                  <img src={value.userprofile} width={100} />
                  <span>{value.name}</span>
                </div>
                <img src={value.imgpost} />
               
            </div>
          );
        })}
      </div>
    </div>
  );
}
