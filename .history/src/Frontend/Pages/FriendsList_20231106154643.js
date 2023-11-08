import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function FriendsList() {
  const [friends, setFriends] = useState([]);

  const getFriendsListHandler = () => {
    axios
      .get("http://localhost:6600/friendslist/friend")
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
    <div>
      <div>
        {friends.map((friend) => {
          return (
            <Box>
              <Typography>{friend.name}</Typography>
            </Box>
          );
        })}
      </div>
    </div>
  );
}
