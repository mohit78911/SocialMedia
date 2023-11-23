import React from "react";
import

export default function UIError() {
  return (
    <div
       className="errorComponent"
    >
      <div style={{ marginTop: "30vh" }}>
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
