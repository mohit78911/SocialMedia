import { Box, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function LikeButtons({ value, likePostHandler, user }) {
  const [likeData, setLikeData] = useState([]);

  const userHasLikedPost = likeData.some(
    (item) => item.userId === user._id && item.postId === value._id
  );

  const handleLikeClick = async () => {
    try {
      if (userHasLikedPost) {
        // Unlike the post
        await axios.delete(`http://localhost:6600/likes/${value._id}`);

      } else {
        // Like the post
        await axios.post(`http://localhost:6600/likes`, {
          postId: value._id,
          userId: user._id,
        });
      }
      // Update the likeData state to reflect the change
      setLikeData((prevData) => {
        if (userHasLikedPost) {
          return prevData.filter(
            (item) => !(item.userId === user._id && item.postId === value._id)
          );
        } else {
          return [...prevData, { postId: value._id, userId: user._id }];
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Box>
        {userHasLikedPost ? (
          <Button>
            <motion.a
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.7 }}
              style={{ color: "red" }}
              onClick={handleLikeClick}
            >
              <FavoriteIcon />
            </motion.a>
          </Button>
        ) : (
          <Button>
            <motion.a
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.7 }}
              style={{ color: "skyblue" }}
              onClick={handleLikeClick}
            >
              <FavoriteBorderIcon />
            </motion.a>
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default LikeButtons;
