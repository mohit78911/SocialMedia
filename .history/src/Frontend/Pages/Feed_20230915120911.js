import React,{useState} from "react";
import "./Feed.css";

export default function Feed() {
  const [inputData, setInputData] = useState("");
  return (
    <div>
      <div className="postfeed">
        <div className="inputBox">
        <input className="input"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        </div>
      </div>
    </div>
  );
}
