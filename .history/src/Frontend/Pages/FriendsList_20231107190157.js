import { Box, Typography, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./friendslist.css";
import { toast } from "react-toastify";
import { motion, Variants } from "framer-motion";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

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

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box className="flexContaine">
      <Box className="friendListMainClass">
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="menu"
        >
          <motion.button
            className="friendsListBtn"
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              setIsOpen(!isOpen);
              getFriendsListHandler(user._id);
            }}
          >
            Menu
            <motion.div
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55 }}
            >
              <svg width="15" height="15" viewBox="0 0 20 20">
                <path d="M0 7 L 20 7 L 10 16" />
              </svg>
            </motion.div>
          </motion.button>
          <motion.div
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
          >
            {friends.map((friend) => {
              return (
                <Box className="friendsitem">
                  <Box className="friendlistbox" variants={itemVariants}>
                    <Box
                      component="img"
                      className="friendlistimg"
                      src={friend ? friend.friendId.userprofile : null}
                    />
                    <Typography>
                      {friend ? friend.friendId.name : null}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </motion.div>
        </motion.nav>
      </Box>
      <Box className="secondFriendlist"></Box>
    </Box>
  );
}
