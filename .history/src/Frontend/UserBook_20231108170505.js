import React, { useEffect, useState } from "react";
import "../App.css";
import Details from "./Pages/Details";
import Feed from "./Pages/Feed";
import Navbar from "./Navbar";
import Activity from "./Pages/Activity";
import axios from "axios";
import { Box } from "@mui/material";

function UserBook({
  like,
  setLike,
  userData,
  likePost,
  getRequestHandler,
  requestData,
}) {
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState([]);
  const [requests, setRequests] = useState([]);
  const [open, setOpen] = React.useState(false);
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

  //get all request data
  const getAllRequestDataHandler = () => {
    axios
      .get("http://localhost:6600/friendrequest/allrequest")
      .then((result) => {
        setRequests(result.data);
      })
      .catch((error) => {
        console.log(error);
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
        getAllRequestDataHandler();
        console.log("friendRequest_Sent");
      })
      .catch((error) => {
        console.log("FriendRequest_not_sent or Already sent", error);
      });
  };

  useEffect(() => {
    getUserDataHandler();
    getAllUserDetailsHandler();
    getAllRequestDataHandler();
  }, []);

  return (
    <Box className="mainAppClass">
      <Navbar
        user={user}
        requestData={requestData}
        getRequestHandler={getRequestHandler}
      />
      <Box className="flex-container">
        <Box className="one">
          <Details />
        </Box>
        <Box className="two">
          <Feed
            userData={userData}
            like={like}
            setlike={setLike}
            likePost={likePost}
            user={user}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            open={open}
          />
        </Box>
        <Box className="three">
          <Activity
            users={users}
            user={user}
            sendFriendRequestHandler={sendFriendRequestHandler}
            requests={requests}
            getAllRequestDataHandler={getAllRequestDataHandler}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default UserBook;
