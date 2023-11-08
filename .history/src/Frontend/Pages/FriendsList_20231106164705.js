import { Box, Typography,Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./friendslist.css";
import { Button } from "bootstrap";

export default function FriendsList() {
  const [friends, setFriends] = useState([]);
  const [user, setUser] = useState([]);

  const getLocalUserDataHandler = () => {
    const localData = localStorage.getItem("userDetails");
    const details = JSON.parse(localData);
    setUser(details);
  };

  const getFriendsListHandler = (id) => {
    axios
      .get(`http://localhost:6600/friendslist/friends/${id}`)
      .then((result) => {
        setFriends(result.data);
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log("userfriendlist", user);
  useEffect(() => {
    getLocalUserDataHandler();
    
  }, []);

  return (
    <Box className="flexContaine">
      <Box className="friendListMainClass">
        <Typography className="friendNameLogo">
          <b>FRIENDS</b>
          <Button onClick={()=>{getFriendsListHandler(user._id)}}>Click</Button>
        </Typography>
        {friends.map((friend) => {
          return (
            <Box className="friendlistbox">
              <Box
                component="img"
                className="friendlistimg"
                src={friend.userId.userprofile}
              />
              <Typography>{friend.userId.name}</Typography>
            </Box>
          );
        })}
      </Box>
      <Box className="secondFriendlist"></Box>
    </Box>
  );
}
