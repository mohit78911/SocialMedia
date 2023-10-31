import { Box, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function LikeButtons({ value, likePostHandler, user }) {
  const [likeData, setLikeData] = useState([]);

  const [filterData, setFilterData] = useState();


  
  const likesFilterDataHandler = async () => {
    try {
      const response = await axios.get(`http://localhost:6600/likes`);
      setLikeData(response.data);

      const userLikedPost = response.data.some(
        (item) => item.userId === user._id && item.postId === value._id
      );
      setFilterData(userLikedPost);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    likesFilterDataHandler();
  }, []);

  return (
    <Box>
      <Box>
        {filterData ? (
          <Button>
            <motion.a
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.7 }}
              style={{ color: "red" }}
              onClick={() => {
                likePostHandler(value._id);
                likesFilterDataHandler();
              }}
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
              onClick={() => {
                likePostHandler(value._id);
                likesFilterDataHandler();
              }}
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
