import React from "react";
import "./UiError.css";

export default function UIError() {
  return (
    <div style={{ padding: "30vh" }} className="errorComponent">
      <div>
        <div
          style={{
            textAlign: "center",
            fontSize: "5vh",
            fontWeight: "bolder",
          }}
        >
          Error <br />
          <span style={{ color: "rgb(206, 49, 49)" }}> 404</span>
        </div>
      </div>
    </div>
  );
}
