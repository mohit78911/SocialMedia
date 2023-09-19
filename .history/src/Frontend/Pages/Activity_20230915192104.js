import React from "react";
import "./Activity.css";

export default function Activity({ userData }) {
  return (
    <div>
      <div>
        {userData.map((value) => {
          return (
            <div className="activityContainer">
              <img src={value.userprofile} className="imgprofile" />
              <span >{value.name.toUpperCase()}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
