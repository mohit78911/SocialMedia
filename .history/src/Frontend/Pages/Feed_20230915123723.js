import React, { useState } from "react";
import "./Feed.css";
import LiveTvIcon from '@mui/icons-material/LiveTv';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';

export default function Feed() {
  const [inputData, setInputData] = useState("");
  return (
    <div>
      <div className="postfeed">
        <div style={{ padding: "10px" }}>
          <div className="inputBox">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAts3KaqElgmvv6KwDztGs5B5DpnwwVLDYcv08OR1m7q5rf1eyJNb0OlZLUKlZOg-q400&usqp=CAU" width={60} className="img"/>
            <input
            placeholder="What's on your mind?"
              className="input"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
          </div>
          <div className="ActivityButtons">
            <button className="activitybtn"><LiveTvIcon/>Live Video</button>
            <button className="activitybtn"><PhotoSizeSelectActualIcon/>Photos/Videos</button>
            <button className="activitybtn">Feelings/Activity</button>
          </div>
        </div>
      </div>
    </div>
  );
}
