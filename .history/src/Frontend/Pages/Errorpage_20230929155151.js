import React from "react";
import "./Errorpage"

export default function Errorpage() {
  return (
    <>
      {/* <div style={{ textAlign: "center", marginTop: "15vh" }}>
        <div style={{ color: " rgb(189, 44, 44)", fontSize: "15vh" }}>404</div>
        <div style={{ fontSize: "7vh" }}>ERROR</div>
        <div style={{ fontSize: "7vh" }}>PAGE NOT FOUND!</div>
      </div> */}
      <div classname='errormsg'>
        <img src="https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif" />
      </div>
    </>
  );
}
