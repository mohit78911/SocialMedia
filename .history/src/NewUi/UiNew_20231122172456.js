import React, { useEffect, useState } from "react";
import "./NewUi.css";
import UINavbar from "./UINavbar";
import SideBar from "./SideBar";
import UiFeed from "./UiFeed";
import { Route, Routes } from "react-router-dom";
import UiHome from "./UiHome";
import UiAbout from "./UiAbout";
import axios from "axios";

export default function UiNew({
  requests,
  requestData,
  getRequestHandler,
  users,
  user,
  sendFriendRequestHandler,
  requestCancelHandler,
}) {
  return (
    <div>
      <div className="Ui_Navbar">
        <UINavbar
          requests={requests}
          requestData={requestData}
          getRequestHandler={getRequestHandler}
          users={users}
          user={user}
          sendFriendRequestHandler={sendFriendRequestHandler}
          requestCancelHandler={requestCancelHandler}
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
