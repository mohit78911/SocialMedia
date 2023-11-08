import { Box, Typography, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./friendslist.css";
import { toast } from "react-toastify";
import { motion, Variants } from "framer-motion";

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
        if (result.data.length === 0) {
          toast.error("No Have Friends", {
            position: "bottom-right",
          });
        } else {
          setFriends(result.data);
          console.log(result.data);
        }
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
        
         
      </Box>
      <Box className="secondFriendlist"></Box>
    </Box>
  );
}
