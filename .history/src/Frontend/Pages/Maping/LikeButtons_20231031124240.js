import { Box, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import motion from "framer-motion"

function LikeButtons({
  isLiked,
  value,
  likePostHandler,
  setIsLiked,
  user,
  getPostDataHandler,
}) {
  const [likeData, setLikeData] = useState([]);
  const getLikesDataHandler = () => {
    axios
      .get(`http://localhost:6600/likes`)
      .then((result) => {
        setLikeData(result.data);
        // console.log("consoleLikeData", result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getLikesDataHandler();
  }, []);

  const [filterData, setFilterData] = useState();

  const filterDataHandler = () => {
    const userHasLikedPost = likeData.some(
      (item) => item.userId === user._id && item.postId === value._id
    );
    setFilterData(userHasLikedPost);
    getLikesDataHandler();
  };

  useEffect(() => {
    filterDataHandler();
  });

  return (
    <Box>
      <Box>
        {filterData ? (
          <motion.a whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.7 }}
            onClick={() => {
              likePostHandler(value._id);
              setIsLiked((prevIsLiked) => ({
                ...prevIsLiked,
                [value._id]: false,
              }));
            }}
          >
           <FavoriteIcon />
          </motion.a>
        ) : (
          <motion.a whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.7 }}
            onClick={() => {
              likePostHandler(value._id);
              setIsLiked((prevIsLiked) => ({
                ...prevIsLiked,
                [value._id]: true,
              }));
            }}
          >
            <FavoriteBorderIcon />
          </motion.a>
        )}
      </Box>
    </Box>
  );
}

export default LikeButtons;



 