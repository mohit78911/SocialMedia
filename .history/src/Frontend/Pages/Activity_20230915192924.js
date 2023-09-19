import React, { useState } from "react";
import "./Activity.css";

export default function Activity({ userData }) {
  const [details, setDetails] = useState([]);
  console.log("userDetails")
  return (
    <div>
      <div>
        {userData.map((value) => {
          return (
            <div
              className="activityContainer"
              onClick={() => setDetails(value)}
            >
              <img src={value.userprofile} className="imgprofile" />
              <span>
                <b>{value.name.toUpperCase()}</b>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
