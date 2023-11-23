import React, { useEffect, useState } from "react";
import "../App.css";
import Details from "./Pages/Details";
import Feed from "./Pages/Feed";
import Navbar from "./Navbar";
import Activity from "./Pages/Activity";
import axios from "axios";
import { Box } from "@mui/material";

function UserBook({
  userData,
  loadingDot,
  requests,
  likePost,
  requestData,
  getRequestHandler,
  getallRequestHandler,
}) {
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState([]);

  const [open, setOpen] = React.useState(false);
  const [acceptedAction, setAction] = useState("accept");
  const token = localStorage.getItem("token");

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //get_logedin_user_data
  const getUserDataHandler = () => {
    axios
      .get("http://localhost:6600/userlogin/user", {
        headers: { authorization: token },
      })
      .then((result) => {
        setUser(result.data);
        localStorage.setItem("userDetails", JSON.stringify(result.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //get_all_users
  const getAllUserDetailsHandler = () => {
    axios
      .get("http://localhost:6600/user")
      .then((res) => {
        // console.log("allUsersData", res.data);
        setUsers(res.data);
      })
      .catch((error) => {
        console.log(error, "user_Can't_Find");
      });
  };

  //sendFriendRequestHandler
  const sendFriendRequestHandler = (receiverid) => {
    const Users = {
      sender: user._id,
      receiver: receiverid,
    };
    axios
      .post(`http://localhost:6600/friendrequest/sendrequest`, Users, {
        headers: { authorization: token },
      })
      .then((result) => {
        getallRequestHandler();
        console.log("friendRequest_Sent");
      })
      .catch((error) => {
        console.log("FriendRequest_not_sent or Already sent", error);
      });
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

  const requestCancelHandler = (id) => {
    axios
      .delete(`http://localhost:6600/friendrequest/deleterequest/${id}`, {
        headers: { authorization: token },
      })
      .then((result) => {
        getallRequestHandler();
        console.log("request_Cancel_Successfully");
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

  useEffect(() => {
    getUserDataHandler();
    getAllUserDetailsHandler();
  }, []);

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
