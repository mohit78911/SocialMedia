import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from "axios";

function LikeButtons({ isLiked, value, likePostHandler, user }) {
  const [likeData, setLikeData] = useState([]);
  const userHasLiked = likeData.some((like) => like.userId === user._id);

  const getLikesDataHandler = () => {
    axios
      .get(`http://localhost:6600/likes`)
      .then((result) => {
        setLikeData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getLikesDataHandler();
  }, []);

  return (
    <Box>
      <Box>
        <Box>
          {userHasLiked ? (
            <Button
              onClick={() => {
                likePostHandler(value._id);
                // Toggle the like status for this post
              }}
            >
              Unlike
            </Button>
          ) : (
            <Button
              onClick={() => {
                likePostHandler(value._id);
                // Toggle the like status for this post
              }}
            >
              Like
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default LikeButtons;
