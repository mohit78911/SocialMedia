import { Box, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function LikeButtons({ value, likePostHandler, user, getPostDataHandler }) {
  const [likeData, setLikeData] = useState([]);
  const [filterData, setFilterData] = useState();
  const refData = useRef();

  const getLikesDataHandler = () => {
    axios
      .get("http://localhost:6600/likesdata")
      .then((result) => {
        setLikeData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
    filteringDataHandler();
  };

  const filteringDataHandler = () => {
    const userLikedPost = likeData.some(
      (item) => item.userId === user._id && item.postId === value._id
    );
    setFilterData(userLikedPost);
  };

  useEffect(() => {
    getLikesDataHandler();
  }, []);
  useEffect(() => {
    filteringDataHandler();
  });

  const handleLikeClick = () => {
    likePostHandler(value._id);
    getLikesDataHandler();
    
  };

  return (
    <Box>
      <Box>
        {filterData ? (
          <Button>
            <motion.a
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.6 }}
              style={{ color: "rgb(190, 30, 30)" }}
              onClick={handleLikeClick}
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
              onClick={handleLikeClick}
            >
              <FavoriteBorderIcon />
              Like
            </motion.a>
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default LikeButtons;
