import React, { useState } from "react";
import "./Feed.css";

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
            <button>Live Video</button>
            <button>Photos / Videos</button>
            <button>Feelings </button>
          </div>
        </div>
      </div>
    </div>
  );
}
