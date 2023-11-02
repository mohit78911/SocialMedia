import { Box, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ToastContainer, toast } from "react-toastify";

function LikeButtons({ value, likePostHandler, user, getPostDataHandler }) {
  const [likeData, setLikeData] = useState([]);
  const [filterData, setFilterData] = useState();

  const likesPostHandler = (postid) => {
    axios
      .post(`http://localhost:6600/like/likepost/${postid}`, {
        userId: user._id,
        postId: postid,
      })
      .then(() => {
        getPostDataHandler();
        toast.success(`${user.name}, You liked this Post`);
      })
      .catch((error) => {
        toast.success(`${user.name}, Post Unlike Done`);
      });
    getLikesDataHandler();
  };

  const getLikesDataHandler = () => {
    axios
      .get("http://localhost:6600/likesdata")
      .then((result) => {
        setLikeData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
    const userLikedPost = likeData.some(
      (item) => item.userId === user._id && item.postId === value._id
    );
    setFilterData(userLikedPost);
  };

  useEffect(() => {
    getLikesDataHandler();
  }, []);

  return (
    <Box>
      <Box>
        {filterData ? (
          <Button>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.6 }}
              style={{ color: "rgb(190, 30, 30)" }}
              onClick={() => {
                likesPostHandler(value._id);
              }}
            >
              <FavoriteIcon />
              Unlike
            </motion.a>
          </Button>
        ) : (
          <Button>
            <motion.a
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.7 }}
              style={{ color: "skyblue" }}
              onClick={() => {
                likesPostHandler(value._id);
              }}
            >
              <FavoriteBorderIcon />
              Like
            </motion.a>
          </Button>
        )}
      </Box>
      <ToastContainer />
    </Box>
  );
}

export default LikeButtons;
