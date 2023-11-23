import React, { useEffect, useState } from "react";
import "./NewUi.css";
import UINavbar from "./UINavbar";
import SideBar from "./SideBar";
import UiFeed from "./UiFeed";

export default function UiNew({
  user,
  users,
  requests,
  requestData,
  getRequestHandler,
  requestCancelHandler,
  sendFriendRequestHandler,
  loadingDot
}) {
  return (
    <div>
      <div className="Ui_Navbar">
        <UINavbar
          user={user}
          users={users}
          requests={requests}
          requestData={requestData}
          getRequestHandler={getRequestHandler}
          requestCancelHandler={requestCancelHandler}
          sendFriendRequestHandler={sendFriendRequestHandler}
          loadingDot={loadingDot}
        />
      </div>
      <div className="flexUi">
        <div className="Ui_First">
          <SideBar />
        </div>
        <div className="Ui_Second">
          <UiFeed />
        </div>
      </div>
    </div>
  );
}
