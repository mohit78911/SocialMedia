import React, { useState } from "react";
import "./Activity.css";

export default function Activity({ userData }) {
  const [details, setDetails] = useState([]);
  // console.log("userDetails",details)
  return (
    <div>
      <div>
        {userData.map((value,i) => {
          return (
            <div key={i}
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
        <DialogBox
      </div>
    </div>
  );
}
