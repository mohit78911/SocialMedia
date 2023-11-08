import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./friendslist.css";

export default function FriendsList() {
  const [friends, setFriends] = useState([]);

  const getFriendsListHandler = () => {
    axios
      .get("http://localhost:6600/friendslist/friends")
      .then((result) => {
        setFriends(result.data);
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getFriendsListHandler();
  }, []);

  return (
    <div className="flexContaine">
      <div className="friendListMainClass">
        {friends.map((friend) => {
          return (
            <Box className="friendlistbox">
              <Box component="img" src={}/>
              <Typography>{friend.userId.name}</Typography>
            </Box>
          );
        })}
      </div>
      <div className="secondFriendlist"></div>
    </div>
  );
}
