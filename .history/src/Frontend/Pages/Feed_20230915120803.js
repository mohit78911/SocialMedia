import React from "react";
import "./Feed.css";

export default function Feed() {
  const [inputData, setInputData] = useState("");
  return (
    <div>
      <div className="postfeed">
        <div class></div>
        <input
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
      </div>
    </div>
  );
}
