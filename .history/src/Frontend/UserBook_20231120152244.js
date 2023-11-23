import React, { useEffect, useState } from "react";
import "../App.css";
import Details from "./Pages/Details";
import Feed from "./Pages/Feed";
import Navbar from "./Navbar";
import Activity from "./Pages/Activity";
import axios from "axios";
import { Box } from "@mui/material";

function UserBook({
  user,
  users,
  requests,
  loadingDot,
  requestData,
  getRequestHandler,
  getallRequestHandler,
  requestCancelHandler,
  sendFriendRequestHandler,
  requestDeleteHandler,
}) {
  const [open, setOpen] = React.useState(false);
  const [acceptedAction, setAction] = useState("accept");
  const token = localStorage.getItem("token");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const requestDeleteHandler = (id) => {
    axios
      .delete(`http://localhost:6600/friendrequest/deleterequest/${id}`, {
        headers: { authorization: token },
      })
      .then((result) => {
        console.log("Request Deleted Done");
        getRequestHandler(user._id);
      })
      .catch((error) => {
        getallRequestHandler();
        console.log(error);
      });
  };

  //Decline or reject Request Handler
  const declineRequestHandler = () => {
    axios
      .put(
        `http://localhost:6600/friendrequest/rejectfriendrequest/${user._id}`,
        { status: "rejected" }
      )
      .then((result) => {
        console.log("requst Rejected");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //updating pending request status with the action state
  const requestStatusHandler = (id) => {
    axios
      .put(
        `http://localhost:6600/friendrequest/friendrequest/651fd5dfab759e8607eaf591`,
        {
          action: acceptedAction,
        },
        { headers: { authorization: token } }
      )
      .then((result) => {
        console.log("updatedSuccessfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box className="mainAppClass">
      <Navbar
        users={users}
        requests={requests}
        loadingDot={loadingDot}
        requestData={requestData}
        getRequestHandler={getRequestHandler}
        requestDeleteHandler={requestDeleteHandler}
        requestCancelHandler={requestCancelHandler}
        sendFriendRequestHandler={sendFriendRequestHandler}
      />
      <Box className="flex-container">
        <Box className="one">
          <Details />
        </Box>
        <Box className="two">
          <Feed
            open={open}
            user={user}
            handleClose={handleClose}
            handleClickOpen={handleClickOpen}
          />
        </Box>
        <Box className="three">
          <Activity
            user={user}
            users={users}
            requests={requests}
            getallRequestHandler={getallRequestHandler}
            sendFriendRequestHandler={sendFriendRequestHandler}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default UserBook;
